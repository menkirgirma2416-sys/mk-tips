import React from 'react';
import { LOGO_DATA_URI } from '../assets/imageAssets';
import { Send, Video, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      paddingTop: '36px',
      paddingBottom: '24px',
      borderTop: '1px solid #1e293b'
    }}>
      <div className="container">
        {/* Top Disclaimer Alert */}
        <div style={{
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '14px',
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px'
        }}>
          <ShieldCheck size={22} color="#fbbf24" style={{ shrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fbbf24', margin: '0 0 4px' }}>
              DISCLAIMER & ACCURACY NOTICE
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: 0, lineHeight: 1.45 }}>
              MK Tips provides information for educational purposes. Deadlines, eligibility requirements, fees and funding conditions may change. Applicants should verify details directly on provider portals.
            </p>
          </div>
        </div>

        {/* Compact Footer Grid (SERVICES SECTION REMOVED COMPLETELY) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}>
          {/* Brand & About Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '10px' }}>
              <img 
                src="/assets/images/mk-tips-logo.png" 
                alt="MK Tips Logo" 
                onError={(e) => { 
                  if (e.target.src !== LOGO_DATA_URI) {
                    e.target.src = LOGO_DATA_URI;
                  }
                }}
                style={{
                  maxHeight: '44px',
                  maxWidth: '200px',
                  objectFit: 'contain'
                }}
              />
            </div>

            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8', margin: '0 0 8px' }}>
              Your Guide to Global Opportunities
            </p>

            <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '360px', margin: 0 }}>
              MK Tips is an educational guidance platform helping applicants discover opportunities, prepare documents, and navigate applications with clarity and confidence.
            </p>
          </div>

          {/* Explore Opportunities */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.82rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  All Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.82rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Scholarships
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.82rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Fellowships
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.82rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Internships & Courses
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Apply */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
              Resources & Apply
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              <li>
                <button onClick={() => setActiveTab('Ebooks')} style={{ backgroundColor: 'transparent', color: '#f59e0b', fontSize: '0.82rem', fontWeight: 700, padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  MK Ebooks
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ApplyWithUs')} style={{ backgroundColor: 'transparent', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  Apply With Us
                </button>
              </li>
              <li>
                <a href="https://forms.gle/gwHnj7gJvWNfUMSH7" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                  <span>Support Form</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Community */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://t.me/mktips1224" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Send size={13} />
                <span>Telegram Channel</span>
              </a>

              <a href="https://t.me/Mk_8958" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Send size={13} color="#f59e0b" />
                <span>Telegram Contact</span>
              </a>

              <a href="https://www.tiktok.com/@scholarship2112?_r=1&_t=ZS-98lyiYFivae" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Video size={13} color="#ff0050" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          paddingTop: '16px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 MK Tips. All rights reserved.
          </div>
          <div>
            Discover • Prepare • Apply • Achieve
          </div>
        </div>
      </div>
    </footer>
  );
}
