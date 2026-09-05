import React, { useState } from 'react';
import { LOGO_DATA_URI } from '../assets/imageAssets';
import { 
  GraduationCap, 
  BookOpen, 
  Send, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronDown,
  ExternalLink,
  Award,
  Globe,
  Briefcase
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  compareList = [], 
  openCompareModal, 
  openAdminModal,
  onCategorySelect
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpportunitiesDropdownOpen, setIsOpportunitiesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const mainNavItems = [
    { id: 'Home', label: 'HOME' },
    { id: 'Opportunities', label: 'OPPORTUNITIES', hasDropdown: true },
    { id: 'Services', label: 'SERVICES', hasDropdown: true },
    { id: 'ApplyWithUs', label: 'APPLY WITH US' },
    { id: 'Ebooks', label: 'MK EBOOKS' },
    { id: 'About', label: 'ABOUT' },
    { id: 'Contact', label: 'CONTACT' }
  ];

  const opportunityCategories = [
    { name: "Scholarships", icon: GraduationCap },
    { name: "Fellowships", icon: Award },
    { name: "Internships", icon: Briefcase },
    { name: "Conferences", icon: Globe },
    { name: "Online Courses", icon: BookOpen },
    { name: "Grants", icon: Sparkles },
    { name: "Exchange Programs", icon: Globe },
    { name: "Research Opportunities", icon: Sparkles }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Announcement Bar */}
      <div style={{ backgroundColor: '#0f172a', color: '#ffffff', fontSize: '0.78rem', padding: '6px 16px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
            <span style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>
              VERIFIED PORTAL
            </span>
            <span>MK Tips — Your Guide to Global Opportunities | Discover • Prepare • Apply • Achieve</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href="https://t.me/mktips1224" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#38bdf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}
            >
              <Send size={12} />
              <span>Join Telegram</span>
            </a>

            <a 
              href="https://forms.gle/6EermLr5nm9ef3y98" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: '#2563eb', color: '#ffffff', textDecoration: 'none', padding: '2px 10px', borderRadius: '6px', fontWeight: 800 }}
            >
              Italian Scholarship ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo (Moderately Enlarged) */}
        <div 
          onClick={() => setActiveTab('Home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <img 
            src="/assets/images/mk-tips-logo.png" 
            alt="MK Tips Logo" 
            onError={(e) => { 
              if (e.target.src !== LOGO_DATA_URI) {
                e.target.src = LOGO_DATA_URI;
              }
            }}
            style={{
              maxHeight: '56px',
              maxWidth: '250px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '6px' }}>
          {mainNavItems.map((item) => {
            const isActive = activeTab === item.id;
            
            return (
              <div 
                key={item.id} 
                style={{ position: 'relative' }}
                onMouseEnter={() => {
                  if (item.id === 'Opportunities') setIsOpportunitiesDropdownOpen(true);
                  if (item.id === 'Services') setIsServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.id === 'Opportunities') setIsOpportunitiesDropdownOpen(false);
                  if (item.id === 'Services') setIsServicesDropdownOpen(false);
                }}
              >
                <button
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    backgroundColor: isActive ? '#eff6ff' : 'transparent',
                    color: isActive ? '#2563eb' : '#1e293b',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={14} color={isActive ? '#2563eb' : '#64748b'} />}
                </button>

                {/* Opportunities Mega Menu */}
                {item.id === 'Opportunities' && isOpportunitiesDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    width: '260px',
                    padding: '12px',
                    zIndex: 50
                  }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', padding: '4px 8px 8px' }}>
                      Program Categories
                    </div>
                    {opportunityCategories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => {
                          setIsOpportunitiesDropdownOpen(false);
                          if (onCategorySelect) onCategorySelect(cat.name);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 10px',
                          borderRadius: '8px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#334155',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        <cat.icon size={14} color="#2563eb" />
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {compareList.length > 0 && (
            <button
              onClick={openCompareModal}
              style={{
                backgroundColor: '#f1f5f9',
                color: '#0f172a',
                padding: '8px 14px',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid #cbd5e1',
                cursor: 'pointer'
              }}
            >
              <Scale size={16} color="#2563eb" />
              <span>Compare ({compareList.length})</span>
            </button>
          )}

          {/* Admin Access Lock Button */}
          <button
            onClick={openAdminModal}
            title="Administrator Portal"
            style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '8px 12px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ShieldCheck size={16} color="#38bdf8" />
            <span className="hidden sm:inline">Admin</span>
          </button>

          <a
            href="https://forms.gle/gwHnj7gJvWNfUMSH7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: '12px',
              fontSize: '0.88rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
            }}
          >
            Apply Now ↗
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ backgroundColor: 'transparent', border: 'none', padding: '6px', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={24} color="#0f172a" /> : <Menu size={24} color="#0f172a" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '16px' }} className="md:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: activeTab === item.id ? '#eff6ff' : 'transparent',
                  color: activeTab === item.id ? '#2563eb' : '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            ))}

            <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openAdminModal();
                }}
                style={{
                  width: '100%',
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  padding: '12px',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  border: 'none'
                }}
              >
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Admin Portal</span>
              </button>

              <a
                href="https://forms.gle/gwHnj7gJvWNfUMSH7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '12px',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                Apply With Us ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
