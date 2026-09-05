// Real-Time Multi-Attribute Search & Filter Engine for MK Tips

export function filterOpportunities(opportunities, {
  searchQuery = "",
  type = "All",
  degreeLevel = "All",
  fundingType = "All",
  feeFilter = "All",
  englishFilter = "All",
  country = "All",
  field = "All",
  deadlineStatus = "All",
  sortBy = "deadline"
}) {
  let results = [...opportunities];
  const today = new Date();

  // 1. Keyword Text Search (Title, Provider, Country, Field, Type, Degree, Description, Eligible Countries)
  if (searchQuery && searchQuery.trim() !== "") {
    const q = searchQuery.trim().toLowerCase();

    results = results.filter(opp => {
      const matchName = opp.name ? opp.name.toLowerCase().includes(q) : false;
      const matchProvider = opp.provider ? opp.provider.toLowerCase().includes(q) : false;
      const matchCountry = opp.country ? opp.country.toLowerCase().includes(q) : false;
      const matchField = opp.field_of_study ? opp.field_of_study.toLowerCase().includes(q) : false;
      const matchType = opp.type ? opp.type.toLowerCase().includes(q) : false;
      const matchDegree = opp.degree_level ? opp.degree_level.toLowerCase().includes(q) : false;
      const matchFunding = opp.funding_type ? opp.funding_type.toLowerCase().includes(q) : false;
      const matchDesc = opp.description ? opp.description.toLowerCase().includes(q) : false;
      const matchEligible = opp.eligible_countries ? opp.eligible_countries.toLowerCase().includes(q) : false;

      // Ethiopia Keyword matching
      if (q.includes("ethiopia") || q.includes("ethiopian")) {
        if (opp.eligible_countries && (opp.eligible_countries.toLowerCase().includes("ethiopia") || opp.eligible_countries.toLowerCase().includes("african") || opp.eligible_countries.toLowerCase().includes("developing"))) return true;
      }

      // MOI / Medium of Instruction search alias
      if (q.includes("moi") || q.includes("medium of instruction")) {
        if (opp.moi_accepted || (opp.english_requirements && opp.english_requirements.toLowerCase().includes("medium of instruction"))) return true;
      }

      // Fully funded search alias
      if (q.includes("fully funded") || q.includes("full fund")) {
        if (opp.funding_type && opp.funding_type.toLowerCase().includes("fully")) return true;
      }

      return matchName || matchProvider || matchCountry || matchField || matchType || matchDegree || matchFunding || matchDesc || matchEligible;
    });
  }

  // 2. Opportunity Type Filter
  if (type !== "All") {
    results = results.filter(opp => opp.type && opp.type.toLowerCase() === type.toLowerCase());
  }

  // 3. Study Level Filter
  if (degreeLevel !== "All") {
    results = results.filter(opp => {
      if (!opp.degree_level) return false;
      if (degreeLevel === "Other") {
        return !["bachelor's", "master's", "phd", "postdoctoral"].includes(opp.degree_level.toLowerCase());
      }
      return opp.degree_level.toLowerCase() === degreeLevel.toLowerCase();
    });
  }

  // 4. Funding Type Filter
  if (fundingType !== "All") {
    results = results.filter(opp => {
      if (!opp.funding_type) return false;
      if (fundingType.toLowerCase() === "free") {
        return opp.funding_type.toLowerCase() === "free" || opp.funding_type.toLowerCase().includes("fully");
      }
      return opp.funding_type.toLowerCase().includes(fundingType.toLowerCase());
    });
  }

  // 5. Application Fee Filter
  if (feeFilter !== "All") {
    if (feeFilter === "No Application Fee") {
      results = results.filter(opp => opp.application_fee === false || opp.fee_amount === 0 || (opp.fee_status && opp.fee_status.toLowerCase().includes("no application fee")));
    } else if (feeFilter === "Application Fee Required") {
      results = results.filter(opp => opp.application_fee === true || (opp.fee_amount && opp.fee_amount > 0));
    } else if (feeFilter === "Not Specified") {
      results = results.filter(opp => opp.fee_status === "Not Specified" || opp.application_fee === null);
    }
  }

  // 6. English Requirement Filter (MOI, IELTS, TOEFL, Duolingo, Alt Proof)
  if (englishFilter !== "All") {
    if (englishFilter === "Medium of Instruction Accepted") {
      results = results.filter(opp => opp.moi_accepted === true || (opp.english_requirements && opp.english_requirements.toLowerCase().includes("medium of instruction")));
    } else if (englishFilter === "Alternative Proof Accepted") {
      results = results.filter(opp => opp.alternative_english_accepted === true);
    } else if (englishFilter === "IELTS") {
      results = results.filter(opp => opp.ielts_required === true || (opp.english_requirements && opp.english_requirements.toLowerCase().includes("ielts")));
    } else if (englishFilter === "TOEFL") {
      results = results.filter(opp => opp.toefl_required === true || (opp.english_requirements && opp.english_requirements.toLowerCase().includes("toefl")));
    } else if (englishFilter === "Duolingo") {
      results = results.filter(opp => opp.duolingo_accepted === true || (opp.english_requirements && opp.english_requirements.toLowerCase().includes("duolingo")));
    } else if (englishFilter === "No Test Specified") {
      results = results.filter(opp => !opp.ielts_required && !opp.toefl_required);
    }
  }

  // 7. Host Country Filter
  if (country !== "All") {
    results = results.filter(opp => opp.country && opp.country.toLowerCase().includes(country.toLowerCase()));
  }

  // 8. Field of Study Filter
  if (field !== "All") {
    results = results.filter(opp => opp.field_of_study && opp.field_of_study.toLowerCase().includes(field.toLowerCase()));
  }

  // 9. Deadline Status & Automatic Days Remaining Calculation Filter
  if (deadlineStatus !== "All") {
    results = results.filter(opp => {
      const dDate = new Date(opp.deadline);
      const daysLeft = Math.ceil((dDate - today) / (1000 * 60 * 60 * 24));
      const isUpcoming = opp.status && opp.status.toLowerCase() === "upcoming" || (opp.opening_date && new Date(opp.opening_date) > today);
      const isClosed = daysLeft < 0 || (opp.status && opp.status.toLowerCase() === "closed");

      if (deadlineStatus === "Closing Soon") return !isClosed && !isUpcoming && daysLeft >= 0 && daysLeft <= 30;
      if (deadlineStatus === "This Month") return !isClosed && daysLeft >= 0 && daysLeft <= 30;
      if (deadlineStatus === "Open") return !isClosed && !isUpcoming;
      if (deadlineStatus === "Upcoming") return isUpcoming;
      if (deadlineStatus === "Closed") return isClosed;
      return true;
    });
  }

  // 10. Sorting (Nearest Deadline First)
  results.sort((a, b) => {
    if (sortBy === "deadline") {
      return new Date(a.deadline) - new Date(b.deadline);
    }
    if (sortBy === "newest") {
      return new Date(b.last_verified || 0) - new Date(a.last_verified || 0);
    }
    if (sortBy === "popular") {
      return (b.views_count || 0) - (a.views_count || 0);
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return results;
}

export function extractUniqueCountries(opportunities) {
  const countrySet = new Set();
  opportunities.forEach(opp => {
    if (opp.country) {
      countrySet.add(opp.country);
    }
  });
  return Array.from(countrySet).sort();
}

export function extractUniqueFields(opportunities) {
  const fieldSet = new Set();
  opportunities.forEach(opp => {
    if (opp.field_of_study) {
      const parts = opp.field_of_study.split(",");
      parts.forEach(p => fieldSet.add(p.trim()));
    }
  });
  return Array.from(fieldSet).slice(0, 12).sort();
}

export function getOpportunityStats(opportunities) {
  const total = opportunities.length;
  const fullyFunded = opportunities.filter(o => o.funding_type && o.funding_type.toLowerCase().includes("fully")).length;
  const noFee = opportunities.filter(o => !o.application_fee || o.fee_amount === 0 || (o.fee_status && o.fee_status.toLowerCase().includes("no application fee"))).length;
  const altEnglishAccepted = opportunities.filter(o => o.alternative_english_accepted || o.moi_accepted).length;

  return {
    total,
    fullyFunded,
    noFee,
    altEnglishAccepted
  };
}
