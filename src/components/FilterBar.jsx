import React from 'react';
import { extractUniqueCountries } from '../utils/searchEngine';
import { 
  SlidersHorizontal, 
  RotateCcw, 
  Search, 
  Filter, 
  Globe, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  FileCheck,
  Tag,
  Sparkles,
  X
} from 'lucide-react';

export default function FilterBar({
  filters,
  setFilters,
  resetFilters,
  resultCount,
  opportunities = []
}) {
  const countries = extractUniqueCountries(opportunities);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const activeFilterCount = Object.entries(filters).filter(([key, val]) => key !== 'sortBy' && val !== 'All' && val !== '').length;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '24px',
      padding: '28px',
      marginBottom: '36px',
      boxShadow: '0 10px 25px rgba(15, 23, 42, 0.03)'
    }}>
      {/* Top Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2563eb'
          }}>
            <SlidersHorizontal size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Opportunity Finder & Live Filters
              </h3>
              {activeFilterCount > 0 && (
                <span style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '12px'
                }}>
                  {activeFilterCount} Active
                </span>
              )}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
              Found <strong style={{ color: '#2563eb', fontWeight: 800 }}>{resultCount}</strong> matching opportunities
            </p>
          </div>
        </div>

        {/* Clear Filters Button */}
        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            style={{
              backgroundColor: '#fef2f2',
              color: '#ef4444',
              border: '1px solid #fecaca',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <RotateCcw size={14} />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Grid of 7 Category Filter Controls */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '14px'
      }}>
        {/* 1. OPPORTUNITY TYPE */}
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Opportunity Type
          </label>
          <select
            value={filters.type || 'All'}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '12px',
              border: filters.type !== 'All' ? '1px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: filters.type !== 'All' ? '#eff6ff' : '#f8fafc',
              color: filters.type !== 'All' ? '#1d4ed8' : '#0f172a',
              fontSize: '0.85rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Types</option>
            <option value="Scholarship">Scholarships</option>
            <option value="Fellowship">Fellowships</option>
            <option value="Internship">Internships</option>
            <option value="Conference">Conferences</option>
            <option value="Online Course">Online Courses</option>
            <option value="Grant">Grants</option>
            <option value="Exchange Program">Exchange Programs</option>
            <option value="Research Opportunity">Research Opportunities</option>
          </select>
        </div>

        {/* 2. STUDY LEVEL */}
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Study Level
          </label>
          <select
            value={filters.degreeLevel || 'All'}
            onChange={(e) => handleFilterChange('degreeLevel', e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '12px',
              border: filters.degreeLevel !== 'All' ? '1px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: filters.degreeLevel !== 'All' ? '#eff6ff' : '#f8fafc',
              color: filters.degreeLevel !== 'All' ? '#1d4ed8' : '#0f172a',
              fontSize: '0.85rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Levels</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
            <option value="Postdoctoral">Postdoctoral</option>
            <option value="Other">Other / Multiple</option>
          </select>
        </div>

        {/* 3. FUNDING TYPE */}
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Funding Type
          </label>
          <select
            value={filters.fundingType || 'All'}
            onChange={(e) => handleFilterChange('fundingType', e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '12px',
              border: filters.fundingType !== 'All' ? '1px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: filters.fundingType !== 'All' ? '#eff6ff' : '#f8fafc',
              color: filters.fundingType !== 'All' ? '#1d4ed8' : '#0f172a',
              fontSize: '0.85rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Funding</option>
            <option value="Fully Funded">Fully Funded</option>
            <option value="Partially Funded">Partially Funded</option>
            <option value="Tuition Fee Only">Tuition Fee Only</option>
            <option value="Stipend Only">Stipend Only</option>
            <option value="Free">Free</option>
            <option value="Unfunded">Unfunded</option>
          </select>
        </div>

        {/* 4. APPLICATION FEE */}
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Application Fee
          </label>
          <select
            value={filters.feeFilter || 'All'}
            onChange={(e) => handleFilterChange('feeFilter', e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '12px',
              border: filters.feeFilter !== 'All' ? '1px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: filters.feeFilter !== 'All' ? '#eff6ff' : '#f8fafc',
              color: filters.feeFilter !== 'All' ? '#1d4ed8' : '#0f172a',
              fontSize: '0.85rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Fee Options</option>
            <option value="No Application Fee">No Application Fee ($0)</option>
            <option value="Application Fee Required">Application Fee Required</option>
            <option value="Not Specified">Not Specified</option>
          </select>
        </div>

        {/* 5. ENGLISH REQUIREMENT */}
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            English Requirement
          </label>
          <select
            value={filters.englishFilter || 'All'}
            onChange={(e) => handleFilterChange('englishFilter', e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '12px',
              border: filters.englishFilter !== 'All' ? '1px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: filters.englishFilter !== 'All' ? '#eff6ff' : '#f8fafc',
              color: filters.englishFilter !== 'All' ? '#1d4ed8' : '#0f172a',
              fontSize: '0.85rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Criteria</option>
            <option value="Medium of Instruction Accepted">MOI / Alternative Proof</option>
            <option value="IELTS">IELTS</option>
            <option value="TOEFL">TOEFL</option>
            <option value="Duolingo">Duolingo</option>
            <option value="No Test Specified">No Test Specified</option>
          </select>
        </div>

        {/* 6. COUNTRY */}
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Country
          </label>
          <select
            value={filters.country || 'All'}
            onChange={(e) => handleFilterChange('country', e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '12px',
              border: filters.country !== 'All' ? '1px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: filters.country !== 'All' ? '#eff6ff' : '#f8fafc',
              color: filters.country !== 'All' ? '#1d4ed8' : '#0f172a',
              fontSize: '0.85rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Countries</option>
            {countries.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* 7. DEADLINE STATUS */}
        <div>
          <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Deadline Urgency
          </label>
          <select
            value={filters.deadlineStatus || 'All'}
            onChange={(e) => handleFilterChange('deadlineStatus', e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '12px',
              border: filters.deadlineStatus !== 'All' ? '1px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: filters.deadlineStatus !== 'All' ? '#eff6ff' : '#f8fafc',
              color: filters.deadlineStatus !== 'All' ? '#1d4ed8' : '#0f172a',
              fontSize: '0.85rem',
              fontWeight: 700,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Deadlines</option>
            <option value="Closing Soon">Closing Soon (≤ 30 Days)</option>
            <option value="This Month">This Month</option>
            <option value="Upcoming">Upcoming Cycles</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>
    </div>
  );
}
