import React from 'react';
import { Search, Sparkles, GraduationCap, Globe, BookOpen, ShieldCheck, ArrowRight, CheckCircle2, Award, Users } from 'lucide-react';

export default function HeroSection({
  searchQuery = '',
  setSearchQuery = () => {},
  onSearchSubmit = () => {},
  setActiveTab = () => {},
  stats = { total: 5, fullyFunded: 4, noFee: 5, altEnglishAccepted: 4 },
  onExploreOpportunitiesClick = () => {},
  onExploreEbooksClick = () => {}
}) {
  const safeStats = {
    total: stats?.total ?? 5,
    fullyFunded: stats?.fullyFunded ?? 4,
    noFee: stats?.noFee ?? 5,
    altEnglishAccepted: stats?.altEnglishAccepted ?? 4
  };

  return (
    <section style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      padding: '48px 24px',
      borderRadius: '28px',
      margin: '16px auto 32px',
      maxWidth: '1280px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.25)',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)'
    }}>
      {/* Visual Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Text Column */}
          <div>
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#f59e0b',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              <Sparkles size={14} color="#f59e0b" />
              <span>MK TIPS — YOUR GUIDE TO GLOBAL OPPORTUNITIES</span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '10px',
              letterSpacing: '-0.02em'
            }}>
              Your Guide to <span style={{
                background: 'linear-gradient(90deg, #60a5fa 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Global Opportunities</span>
            </h1>

            {/* Slogan */}
            <p style={{
              fontSize: '0.88rem',
              fontWeight: 800,
              color: '#38bdf8',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Discover • Prepare • Apply • Achieve
            </p>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              maxWidth: '560px',
              margin: '0 0 28px'
            }}>
              "Discover opportunities, understand the requirements, prepare stronger applications, and get the guidance you need to move forward."
            </p>

            {/* Search Input Bar */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '6px 8px 6px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              maxWidth: '560px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              marginBottom: '28px'
            }}>
              <Search size={20} color="#64748b" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') onSearchSubmit(); }}
                placeholder="Search scholarships, internships, fellowships, universities..."
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  flex: 1,
                  backgroundColor: 'transparent'
                }}
              />
              <button
                onClick={onSearchSubmit}
                style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Find Now
              </button>
            </div>

            {/* Main Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={onExploreOpportunitiesClick}
                style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '14px',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Explore Opportunities</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://forms.gle/gwHnj7gJvWNfUMSH7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f59e0b',
                  color: '#0f172a',
                  padding: '14px 24px',
                  borderRadius: '14px',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
                  textDecoration: 'none'
                }}
              >
                <span>Apply With MK Tips</span>
                <Sparkles size={18} />
              </a>

              <button
                onClick={onExploreEbooksClick}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <BookOpen size={18} color="#fbbf24" />
                <span>Explore MK Ebooks</span>
              </button>
            </div>
          </div>

          {/* Right Visual Graphic Card */}
          <div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              padding: '28px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
              position: 'relative'
            }}>
              {/* Graphic Logo Header */}
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img 
                  src="/assets/images/mk-tips-logo.png" 
                  alt="MK Tips Global Opportunities" 
                  style={{
                    maxHeight: '75px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    margin: '0 auto 10px'
                  }}
                />
                <div style={{ fontSize: '0.82rem', color: '#93c5fd', fontWeight: 700 }}>
                  Empowering Applicants Worldwide
                </div>
              </div>

              {/* 4 Core Pillars Card */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#60a5fa' }}>{safeStats.total}+</div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600 }}>Active Programs</div>
                </div>

                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 23, 42, 0.6)', borderRadius: '14px', padding: '14px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>{safeStats.fullyFunded}</div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600 }}>Fully Funded</div>
                </div>

                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fbbf24' }}>{safeStats.noFee}</div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600 }}>Zero Fee ($0)</div>
                </div>

                <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8' }}>{safeStats.altEnglishAccepted}</div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600 }}>Alt English Proof</div>
                </div>
              </div>

              {/* Verified Trust Footer */}
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                color: '#6ee7b7'
              }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>Verified Provider Links & Official Application Portals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
