import React from 'react';
import { Sparkles, ExternalLink, Send, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CampaignSection() {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      border: '2px solid #2563eb',
      borderRadius: '24px',
      padding: '32px',
      margin: '36px 0',
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Visual Glow */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#eff6ff',
            color: '#1d4ed8',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '12px'
          }}>
            <Sparkles size={14} color="#f59e0b" />
            <span>CURRENT APPLICATION CAMPAIGN</span>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>
            Current Application Support
          </h2>

          <p style={{ fontSize: '1rem', color: '#475569', margin: '0 0 16px', lineHeight: 1.6 }}>
            Need help with your application? Submit your details and let MK Tips guide you through the selection, document preparation, and submission process.
          </p>

          <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} color="#10b981" />
            <span>Legitimate application guidance & document review based on your real background.</span>
          </div>
        </div>

        {/* Campaign Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '240px' }}>
          <a
            href="https://forms.gle/6EermLr5nm9ef3y98"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '14px 24px',
              borderRadius: '14px',
              fontSize: '0.95rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
              textDecoration: 'none'
            }}
          >
            <span>Apply With MK Tips</span>
            <ExternalLink size={18} />
          </a>

          <a
            href="https://t.me/Mk_8958"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              padding: '12px 20px',
              borderRadius: '14px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <Send size={16} color="#0088cc" />
            <span>Have questions first? Contact on Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
