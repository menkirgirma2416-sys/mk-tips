import React, { useState, useEffect } from 'react';
import { INITIAL_OPPORTUNITIES } from './data/initialOpportunities';
import { filterOpportunities, getOpportunityStats } from './utils/searchEngine';
import { LOGO_DATA_URI } from './assets/imageAssets';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterBar from './components/FilterBar';
import OpportunityCard from './components/OpportunityCard';
import OpportunityDetailModal from './components/OpportunityDetailModal';
import ComparisonModal from './components/ComparisonModal';
import DeadlineTracker from './components/DeadlineTracker';
import AdminPortal from './components/AdminPortal';

// Dedicated Multi-Page Views
import ApplyWithUsPage from './pages/ApplyWithUsPage';
import EbooksPage from './pages/EbooksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Homepage Components
import CampaignSection from './components/CampaignSection';
import WhyMkTips from './components/WhyMkTips';
import ServicesSection from './components/ServicesSection';
import EbooksSection from './components/EbooksSection';
import ApplyProcessSection from './components/ApplyProcessSection';
import TelegramSection from './components/TelegramSection';
import Footer from './components/Footer';

import { SearchX, Sparkles, CheckCircle2, ArrowRight, Star, Clock, Compass, AlertCircle, Send } from 'lucide-react';

export default function App() {
  // 1. Opportunities Database State (LocalStorage Persistence)
  const [opportunities, setOpportunities] = useState(() => {
    const saved = localStorage.getItem('mk_tips_opportunities');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return INITIAL_OPPORTUNITIES; }
    }
    return INITIAL_OPPORTUNITIES;
  });

  useEffect(() => {
    localStorage.setItem('mk_tips_opportunities', JSON.stringify(opportunities));
  }, [opportunities]);

  // 2. Navigation State ('Home' | 'Opportunities' | 'Services' | 'ApplyWithUs' | 'Ebooks' | 'About' | 'Contact')
  const [activeTab, setActiveTab] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');

  // 3. Multi-Attribute Filter System
  const [filters, setFilters] = useState({
    type: 'All',
    degreeLevel: 'All',
    fundingType: 'All',
    feeFilter: 'All',
    englishFilter: 'All',
    country: 'All',
    field: 'All',
    deadlineStatus: 'All',
    sortBy: 'deadline'
  });

  // 4. Modals & Extras State
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [bookmarksList, setBookmarksList] = useState([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Keyboard shortcut (Ctrl + Shift + A) and URL parameter (?admin=true) for Administrator Access
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    if (window.location.search.includes('admin=true')) {
      setIsAdminOpen(true);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Compare Handler
  const toggleCompare = (opp) => {
    setCompareList(prev => {
      const exists = prev.some(item => item.id === opp.id);
      if (exists) {
        showToast(`Removed "${opp.name}" from comparison`);
        return prev.filter(item => item.id !== opp.id);
      } else {
        if (prev.length >= 4) {
          showToast('Maximum 4 items can be compared side-by-side');
          return prev;
        }
        showToast(`Added "${opp.name}" to comparison`);
        return [...prev, opp];
      }
    });
  };

  // Bookmark Handler
  const toggleBookmark = (opp) => {
    setBookmarksList(prev => {
      const exists = prev.some(item => item.id === opp.id);
      if (exists) {
        showToast(`Removed from saved bookmarks`);
        return prev.filter(item => item.id !== opp.id);
      } else {
        showToast(`Saved "${opp.name}" to bookmarks`);
        return [...prev, opp];
      }
    });
  };

  // Admin Dynamic Handlers
  const handleAddOpportunity = (newOpp) => {
    setOpportunities(prev => [newOpp, ...prev]);
    showToast(`Added new opportunity: ${newOpp.name}`);
  };

  const handleUpdateOpportunity = (id, updatedData) => {
    setOpportunities(prev => prev.map(opp => opp.id === id ? { ...opp, ...updatedData } : opp));
    showToast(`Updated opportunity successfully`);
  };

  const handleDeleteOpportunity = (id) => {
    setOpportunities(prev => prev.filter(opp => opp.id !== id));
    showToast(`Deleted opportunity`);
  };

  const handleMarkVerified = (id) => {
    const todayStr = new Date().toISOString().split('T')[0];
    setOpportunities(prev => prev.map(opp => opp.id === id ? { ...opp, last_verified: todayStr } : opp));
    showToast(`Marked as verified today (${todayStr})`);
  };

  const resetFilters = () => {
    setFilters({
      type: 'All',
      degreeLevel: 'All',
      fundingType: 'All',
      feeFilter: 'All',
      englishFilter: 'All',
      country: 'All',
      field: 'All',
      deadlineStatus: 'All',
      sortBy: 'deadline'
    });
    setSearchQuery('');
  };

  // Filtered Opportunities Results
  const filteredResults = filterOpportunities(opportunities, {
    ...filters,
    searchQuery
  });

  const stats = getOpportunityStats(opportunities);

  // Featured Opportunities for Homepage
  const featuredOpportunities = opportunities.filter(o => o.featured && o.published !== false);

  // Closing Soon Opportunities (<= 30 Days)
  const today = new Date();
  const closingSoonOpportunities = opportunities.filter(o => {
    if (o.published === false) return false;
    const dDate = new Date(o.deadline);
    const daysLeft = Math.ceil((dDate - today) / (1000 * 60 * 60 * 24));
    return daysLeft >= 0 && daysLeft <= 30;
  });

  const navigateToOpportunitiesCategory = (catName) => {
    setActiveTab('Opportunities');
    setFilters(prev => ({ ...prev, type: catName }));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '14px',
          fontSize: '0.88rem',
          fontWeight: 700,
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        compareList={compareList}
        openCompareModal={() => setIsCompareOpen(true)}
        openAdminModal={() => setIsAdminOpen(true)}
        onCategorySelect={navigateToOpportunitiesCategory}
      />

      {/* MAIN VIEW CONTENT AREA */}
      <div style={{ flex: 1 }}>
        {/* VIEW 1: APPLY WITH US PAGE */}
        {activeTab === 'ApplyWithUs' && (
          <div className="container">
            <ApplyWithUsPage />
          </div>
        )}

        {/* VIEW 2: MK EBOOKS PAGE */}
        {activeTab === 'Ebooks' && (
          <div className="container">
            <EbooksPage />
          </div>
        )}

        {/* VIEW 3: ABOUT PAGE */}
        {activeTab === 'About' && (
          <div className="container">
            <AboutPage />
          </div>
        )}

        {/* VIEW 4: CONTACT PAGE */}
        {activeTab === 'Contact' && (
          <div className="container">
            <ContactPage />
          </div>
        )}

        {/* VIEW 5: SERVICES PAGE */}
        {activeTab === 'Services' && (
          <div className="container" style={{ paddingTop: '32px' }}>
            <ServicesSection />
          </div>
        )}

        {/* VIEW 6: DEDICATED OPPORTUNITIES FINDER PAGE */}
        {activeTab === 'Opportunities' && (
          <div className="container" style={{ paddingTop: '32px', paddingBottom: '48px' }}>
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              opportunities={opportunities}
              resultsCount={filteredResults.length}
              resetFilters={resetFilters}
            />

            {filteredResults.length === 0 ? (
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '24px',
                padding: '60px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(15,23,42,0.04)'
              }}>
                <SearchX size={48} color="#94a3b8" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  No Matching Opportunities Found
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', maxWidth: '480px', margin: '0 auto 20px' }}>
                  Try adjusting your filter criteria, resetting specific dropdowns, or searching for broader terms.
                </p>
                <button
                  onClick={resetFilters}
                  style={{
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px'
              }}>
                {filteredResults.map(opp => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    onViewDetails={() => setSelectedOpportunity(opp)}
                    onToggleCompare={() => toggleCompare(opp)}
                    isCompared={compareList.some(item => item.id === opp.id)}
                    onToggleBookmark={() => toggleBookmark(opp)}
                    isBookmarked={bookmarksList.some(item => item.id === opp.id)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 7: HOMEPAGE (ALL SECTIONS INTEGRATED) */}
        {activeTab === 'Home' && (
          <div>
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={() => setActiveTab('Opportunities')}
              setActiveTab={setActiveTab}
              stats={stats}
              onExploreOpportunitiesClick={() => setActiveTab('Opportunities')}
              onExploreEbooksClick={() => setActiveTab('Ebooks')}
            />

            <div className="container">
              {/* Campaign Announcement */}
              <CampaignSection onApplyClick={() => setActiveTab('ApplyWithUs')} />

              {/* Opportunity Finder Section */}
              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Explore Global Opportunities
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '4px 0 0' }}>
                      Filter by degree level, funding coverage, application fee, and host country.
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveTab('Opportunities')}
                    style={{
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      border: '1px solid #bfdbfe',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>Open Full Opportunity Finder</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <FilterBar
                  filters={filters}
                  setFilters={setFilters}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  opportunities={opportunities}
                  resultsCount={filteredResults.length}
                  resetFilters={resetFilters}
                />

                {/* Homepage Opportunities Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '24px'
                }}>
                  {filteredResults.slice(0, 6).map(opp => (
                    <OpportunityCard
                      key={opp.id}
                      opportunity={opp}
                      onViewDetails={() => setSelectedOpportunity(opp)}
                      onToggleCompare={() => toggleCompare(opp)}
                      isCompared={compareList.some(item => item.id === opp.id)}
                      onToggleBookmark={() => toggleBookmark(opp)}
                      isBookmarked={bookmarksList.some(item => item.id === opp.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Featured Opportunities Section */}
              {featuredOpportunities.length > 0 && (
                <div style={{ marginBottom: '48px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                    <Star size={20} color="#f59e0b" fill="#f59e0b" />
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Featured Global Programs
                    </h2>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '24px'
                  }}>
                    {featuredOpportunities.map(opp => (
                      <OpportunityCard
                        key={`featured-${opp.id}`}
                        opportunity={opp}
                        onViewDetails={() => setSelectedOpportunity(opp)}
                        onToggleCompare={() => toggleCompare(opp)}
                        isCompared={compareList.some(item => item.id === opp.id)}
                        onToggleBookmark={() => toggleBookmark(opp)}
                        isBookmarked={bookmarksList.some(item => item.id === opp.id)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Integrated Closing Soon Deadline Tracker */}
              <DeadlineTracker
                opportunities={opportunities}
                onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
              />

              {/* Services Section */}
              <ServicesSection />

              {/* MK Ebooks Section */}
              <EbooksSection onExploreEbooksClick={() => setActiveTab('Ebooks')} />

              {/* Why Choose MK Tips */}
              <WhyMkTips />

              {/* Apply Process Checklist */}
              <ApplyProcessSection onApplyClick={() => setActiveTab('ApplyWithUs')} />

              {/* Telegram Channel CTA */}
              <TelegramSection />
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <Footer setActiveTab={setActiveTab} />

      {/* MODAL DIALOGS */}

      {/* 1. Opportunity Details Modal (6 Tabs) */}
      {selectedOpportunity && (
        <OpportunityDetailModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onApplyClick={() => setActiveTab('ApplyWithUs')}
        />
      )}

      {/* 2. Side-by-Side Comparison Modal */}
      {isCompareOpen && (
        <ComparisonModal
          compareList={compareList}
          onClose={() => setIsCompareOpen(false)}
          onRemove={(id) => toggleCompare(compareList.find(c => c.id === id))}
          onViewDetails={(opp) => {
            setIsCompareOpen(false);
            setSelectedOpportunity(opp);
          }}
        />
      )}

      {/* 3. Real Admin Management Engine Portal Modal */}
      {isAdminOpen && (
        <AdminPortal
          opportunities={opportunities}
          onClose={() => setIsAdminOpen(false)}
          onAddOpportunity={handleAddOpportunity}
          onUpdateOpportunity={handleUpdateOpportunity}
          onDeleteOpportunity={handleDeleteOpportunity}
          onMarkVerified={handleMarkVerified}
        />
      )}
    </div>
  );
}
