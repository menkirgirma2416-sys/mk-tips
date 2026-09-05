import React from 'react';
import { LOGO_DATA_URI } from '../assets/imageAssets';
import { Compass, BookOpen, CheckCircle2, ShieldCheck, Sparkles, Target, Users, Award, Send } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ padding: '40px 0', maxWidth: '960px', margin: '0 auto' }}>
      {/* Header Banner featuring Official Logo */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '28px',
        padding: '48px 36px',
        marginBottom: '40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)'
      }}>
        {/* Official MK Tips Logo Header */}
        <div style={{ marginBottom: '24px' }}>
          <img 
            src="/assets/images/mk-tips-logo.png" 
            alt="MK Tips Official Logo" 
            onError={(e) => { 
              if (e.target.src !== LOGO_DATA_URI) {
                e.target.src = LOGO_DATA_URI;
              }
            }}
            style={{
              maxHeight: '75px',
              maxWidth: '280px',
              objectFit: 'contain',
              margin: '0 auto',
              filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.15))'
            }}
          />
        </div>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
          About MK Tips
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#38bdf8', fontWeight: 700, margin: 0 }}>
          Your Guide to Global Opportunities — Discover • Prepare • Apply • Achieve
        </p>
      </div>

      {/* Main Brand Description Card with Side Logo Accent */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '28px',
        padding: '40px',
        marginBottom: '32px',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '28px', borderBottom: '1px solid #f1f5f9', paddingBottom: '24px' }}>
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/assets/images/mk-tips-logo.png" 
              alt="MK Tips Logo Icon" 
              onError={(e) => { 
                if (e.target.src !== LOGO_DATA_URI) {
                  e.target.src = LOGO_DATA_URI;
                }
              }}
              style={{
                maxHeight: '52px',
                maxWidth: '180px',
                objectFit: 'contain'
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px' }}>
              Educational Opportunity Platform
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#64748b', fontWeight: 600, margin: 0 }}>
              Empowering Ethiopian Applicants & Global Learners
            </p>
          </div>
        </div>

        <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '28px' }}>
          <strong>MK Tips</strong> is an educational guidance platform focused on helping Ethiopian students and applicants discover and pursue international scholarships, fellowships, internships, conferences, online courses, and other educational opportunities worldwide.
        </p>

        {/* Core Pillars List */}
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '18px' }}>
          MK Tips Provides Practical Guidance To Help Applicants:
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
          marginBottom: '36px'
        }}>
          {[
            "Find suitable international scholarships & opportunities",
            "Understand accurate eligibility & language requirements",
            "Compare funding, stipends, and degree levels side-by-side",
            "Track closing deadlines with real-time urgency status",
            "Prepare stronger application profiles & document dossiers",
            "Draft & format CVs, motivation statements, and letters",
            "Navigate complex university application portals step-by-step",
            "Understand scholarship rules & application procedures",
            "Prepare thoroughly for embassy and visa stages",
            "Access practical educational guides and step-by-step e-books"
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '16px',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#1e293b',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px'
            }}>
              <CheckCircle2 size={18} color="#10b981" style={{ shrink: 0, marginTop: '2px' }} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '20px',
          padding: '28px',
          marginBottom: '32px'
        }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1d4ed8', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Target size={22} color="#2563eb" />
            <span>Our Mission</span>
          </h4>
          <p style={{ fontSize: '0.98rem', color: '#1e3a8a', lineHeight: 1.65, margin: 0 }}>
            The mission of MK Tips is to make international education and professional development opportunities easier to discover, understand, and achieve for Ethiopian students, researchers, and young professionals.
          </p>
        </div>

        {/* Telegram Community Card */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>
              Connect With MK Tips
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0 }}>
              Join our Telegram channel for continuous scholarship updates and guidance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="https://t.me/mktips1224"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#38bdf8',
                color: '#0f172a',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '0.88rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <Send size={15} />
              <span>Telegram Channel</span>
            </a>

            <a
              href="https://t.me/Mk_8958"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '0.88rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <Send size={15} color="#0088cc" />
              <span>Contact MK Tips</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
