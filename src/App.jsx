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

      {/* MAIN BODY: SWITCH PAGE VIEWS OR HOMEPAGE */}
      <main className="container" style={{ flex: 1, padding: '28px 16px' }}>
        {/* PAGE 1: DEDICATED OPPORTUNITIES PLATFORM */}
        {activeTab === 'Opportunities' && (
          <div>
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
              resultCount={filteredResults.length}
              opportunities={opportunities}
            />

            {/* Opportunities Grid */}
            {filteredResults.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px',
                marginBottom: '48px'
              }}>
                {filteredResults.map((opp) => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    onSelect={(selected) => setSelectedOpportunity(selected)}
                    onToggleCompare={toggleCompare}
                    isCompared={compareList.some(i => i.id === opp.id)}
                    onToggleBookmark={toggleBookmark}
                    isBookmarked={bookmarksList.some(i => i.id === opp.id)}
                  />
                ))}
              </div>
            ) : (
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '24px',
                padding: '48px 24px',
                textAlign: 'center',
                maxWidth: '650px',
                margin: '32px auto',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
              }}>
                <SearchX size={32} color="#ef4444" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  No opportunities match those selected filters.
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '24px' }}>
                  Try resetting your filter selection to explore all available verified programs.
                </p>
                <button
                  onClick={resetFilters}
                  style={{
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Browse All Opportunities
                </button>
              </div>
            )}

            {/* Real-Time Deadline Tracker Section */}
            <DeadlineTracker
              opportunities={opportunities}
              onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            />
          </div>
        )}

        {/* PAGE 2: DEDICATED SERVICES PAGE */}
        {activeTab === 'Services' && <ServicesSection />}

        {/* PAGE 3: DEDICATED APPLY WITH US PAGE */}
        {activeTab === 'ApplyWithUs' && <ApplyWithUsPage />}

        {/* PAGE 4: DEDICATED MK EBOOKS PAGE */}
        {activeTab === 'Ebooks' && <EbooksPage />}

        {/* PAGE 5: DEDICATED ABOUT PAGE */}
        {activeTab === 'About' && <AboutPage />}

        {/* PAGE 6: DEDICATED CONTACT PAGE */}
        {activeTab === 'Contact' && <ContactPage />}

        {/* PAGE 7: HOMEPAGE */}
        {activeTab === 'Home' && (
          <>
            {/* 1. Hero / Welcome Section */}
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={() => setActiveTab('Opportunities')}
              setActiveTab={setActiveTab}
              stats={stats}
              onExploreOpportunitiesClick={() => setActiveTab('Opportunities')}
              onExploreEbooksClick={() => setActiveTab('Ebooks')}
            />

            {/* 2. Opportunity Finder Preview */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: '24px 32px',
              marginBottom: '48px',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#2563eb', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                  <Sparkles size={14} color="#2563eb" />
                  <span>DISCOVER & FILTER</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Opportunity Finder & Live Filter Engine
                </h3>
              </div>

              <button
                onClick={() => setActiveTab('Opportunities')}
                style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Launch Opportunity Finder</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* 3. Featured Opportunities */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#b45309', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <Star size={14} color="#f59e0b" />
                    <span>CURATED HIGHLIGHTS</span>
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Featured Opportunities
                  </h2>
                </div>

                <button
                  onClick={() => setActiveTab('Opportunities')}
                  style={{
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    border: '1px solid #bfdbfe',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <span>Explore All Program Types</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px'
              }}>
                {(featuredOpportunities.length > 0 ? featuredOpportunities : opportunities.slice(0, 6)).map((opp) => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    onSelect={(selected) => setSelectedOpportunity(selected)}
                    onToggleCompare={toggleCompare}
                    isCompared={compareList.some(i => i.id === opp.id)}
                    onToggleBookmark={toggleBookmark}
                    isBookmarked={bookmarksList.some(i => i.id === opp.id)}
                  />
                ))}
              </div>
            </div>

            {/* 4. Latest Opportunities */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#2563eb', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <Compass size={14} color="#2563eb" />
                    <span>AUTHENTIC INTERNATIONAL PROGRAMS</span>
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Latest Opportunities
                  </h2>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px'
              }}>
                {opportunities.slice(0, 6).map((opp) => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    onSelect={(selected) => setSelectedOpportunity(selected)}
                    onToggleCompare={toggleCompare}
                    isCompared={compareList.some(i => i.id === opp.id)}
                    onToggleBookmark={toggleBookmark}
                    isBookmarked={bookmarksList.some(i => i.id === opp.id)}
                  />
                ))}
              </div>
            </div>

            {/* 5. Deadline Tracker / Closing Soon */}
            <DeadlineTracker
              opportunities={opportunities}
              onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            />

            {/* 6. Services */}
            <ServicesSection />

            {/* 7. MK Ebooks */}
            <EbooksSection onExploreEbooksClick={() => setActiveTab('Ebooks')} />

            {/* 8. About MK Tips (WITH OFFICIAL LOGO DISPLAY) */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: '36px 32px',
              marginBottom: '48px',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
                {/* Official MK Tips Logo Header in About Card */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <img 
                    src="/assets/images/mk-tips-logo.png" 
                    alt="MK Tips Official Logo" 
                    onError={(e) => { 
                      if (e.target.src !== LOGO_DATA_URI) {
                        e.target.src = LOGO_DATA_URI;
                      }
                    }}
                    style={{
                      maxHeight: '48px',
                      maxWidth: '190px',
                      objectFit: 'contain'
                    }}
                  />
                  <div style={{ width: '1px', height: '32px', backgroundColor: '#e2e8f0' }} className="hidden sm:block"></div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      About MK Tips
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 700 }}>
                      Educational Guidance Platform for Ethiopian Applicants
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('About')}
                  style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>Full About Overview</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
                MK Tips is an educational guidance platform focused on helping Ethiopian students and applicants discover and pursue international scholarships, fellowships, internships, conferences, online courses and other educational opportunities. Our mission is to make international education opportunities easier to discover and understand for Ethiopian applicants.
              </p>
            </div>

            {/* 9. Telegram / Contact CTA */}
            <TelegramSection />
          </>
        )}
      </main>

      {/* 10. Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* MODALS */}
      {selectedOpportunity && (
        <OpportunityDetailModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onToggleCompare={toggleCompare}
          isCompared={compareList.some(i => i.id === selectedOpportunity.id)}
          onToggleBookmark={toggleBookmark}
          isBookmarked={bookmarksList.some(i => i.id === selectedOpportunity.id)}
        />
      )}

      {isCompareOpen && (
        <ComparisonModal
          compareList={compareList}
          onClose={() => setIsCompareOpen(false)}
          onRemoveFromCompare={(id) => setCompareList(prev => prev.filter(i => i.id !== id))}
          onClearAll={() => setCompareList([])}
        />
      )}

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
