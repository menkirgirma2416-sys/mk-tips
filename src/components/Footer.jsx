import React from 'react';
import { LOGO_DATA_URI } from '../assets/imageAssets';
import { GraduationCap, Send, Video, ShieldCheck, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      paddingTop: '60px',
      paddingBottom: '32px',
      borderTop: '1px solid #1e293b'
    }}>
      <div className="container">
        {/* Top Disclaimer Alert */}
        <div style={{
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '48px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px'
        }}>
          <ShieldCheck size={26} color="#fbbf24" style={{ shrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fbbf24', margin: '0 0 4px' }}>
              DISCLAIMER & ACCURACY NOTICE
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
              MK Tips provides information for educational and informational purposes. Deadlines, eligibility requirements, fees and funding conditions may change. Applicants should always verify details directly on the official provider website before applying.
            </p>
          </div>
        </div>

        {/* Complete Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {/* Brand & About Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '14px' }}>
              <img 
                src="/assets/images/mk-tips-logo.png" 
                alt="MK Tips Logo" 
                onError={(e) => { 
                  if (e.target.src !== LOGO_DATA_URI) {
                    e.target.src = LOGO_DATA_URI;
                  }
                }}
                style={{
                  maxHeight: '52px',
                  maxWidth: '220px',
                  objectFit: 'contain'
                }}
              />
            </div>

            <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8', margin: '0 0 10px' }}>
              Your Guide to Global Opportunities
            </p>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '380px' }}>
              MK Tips is an educational guidance platform helping applicants discover global opportunities, understand requirements, prepare documents, and navigate the application journey with confidence.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Scholarships
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Fellowships
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Internships
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Conferences
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Opportunities')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Online Courses
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              <li>
                <button onClick={() => setActiveTab('Services')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  University Application
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Services')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  Personal Mentorship
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Services')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  Document Preparation
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Services')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  Full Application Support
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Services')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  Embassy & Visa Preparation
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Apply */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Resources & Apply
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              <li>
                <button onClick={() => setActiveTab('Ebooks')} style={{ backgroundColor: 'transparent', color: '#f59e0b', fontSize: '0.88rem', fontWeight: 700, padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  MK Ebooks
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ApplyWithUs')} style={{ backgroundColor: 'transparent', color: '#38bdf8', fontSize: '0.88rem', fontWeight: 700, padding: 0, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  Apply With Us
                </button>
              </li>
              <li>
                <a href="https://forms.gle/gwHnj7gJvWNfUMSH7" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                  <span>Support Form</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://t.me/mktips1224" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Send size={14} />
                <span>Telegram Channel</span>
              </a>

              <a href="https://t.me/Mk_8958" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Send size={14} color="#f59e0b" />
                <span>Telegram Contact</span>
              </a>

              <a href="https://www.tiktok.com/@scholarship2112?_r=1&_t=ZS-98lyiYFivae" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Video size={14} color="#ff0050" />
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Information
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              <li>
                <button onClick={() => setActiveTab('About')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Contact')} style={{ backgroundColor: 'transparent', color: '#cbd5e1', fontSize: '0.88rem', padding: 0, border: 'none', cursor: 'pointer' }}>
                  Contact
                </button>
              </li>
              <li>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Privacy Policy</span>
              </li>
              <li>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Terms & Disclaimer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 MK Tips. All rights reserved.
          </div>
          <div>
            MK Tips — Discover • Prepare • Apply • Achieve
          </div>
        </div>
      </div>
    </footer>
  );
}
