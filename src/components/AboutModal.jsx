import React from 'react';
import { X, GraduationCap, Send, Video, Tv, Facebook, Instagram, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export default function AboutModal({ onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b'
          }}
        >
          <X size={20} />
        </button>

        {/* Brand Logo & Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img 
            src="/assets/mk-tips-logo-full.png" 
            alt="MK Tips Logo" 
            onError={(e) => { e.target.style.display = 'none'; }}
            style={{
              maxHeight: '100px',
              maxWidth: '280px',
              objectFit: 'contain',
              margin: '0 auto 12px'
            }}
          />

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
            About MK Tips
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#2563eb', fontWeight: 700, margin: 0 }}>
            Your Guide to Global Opportunities
          </p>
        </div>

        {/* Vision Statement */}
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <p style={{ fontSize: '0.98rem', color: '#1e293b', lineHeight: 1.7, margin: 0 }}>
            MK Tips is an educational guidance platform dedicated to helping applicants discover global opportunities and navigate the application journey with greater clarity and confidence.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, margin: '12px 0 0' }}>
            From finding suitable scholarships and universities to preparing application documents, completing applications, and preparing for the next stage, MK Tips provides practical guidance and resources designed to make the process easier to understand and manage.
          </p>
        </div>

        {/* Social Channels */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
            Connect with MK Tips
          </h4>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            <a
              href="https://t.me/mktips1224"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#0088cc',
                color: '#ffffff',
                padding: '10px 16px',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <Send size={16} />
              <span>Telegram Channel</span>
            </a>

            <a
              href="https://t.me/Mk_8958"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                padding: '10px 16px',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <Send size={16} color="#38bdf8" />
              <span>Telegram Contact (@Mk_8958)</span>
            </a>

            <a
              href="https://www.tiktok.com/@scholarship2112?_r=1&_t=ZS-98lyiYFivae"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                padding: '10px 16px',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <Video size={16} color="#ff0050" />
              <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* Official Disclaimer */}
        <div style={{
          backgroundColor: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          padding: '14px 18px',
          fontSize: '0.8rem',
          color: '#92400e',
          lineHeight: 1.5
        }}>
          <strong>Disclaimer:</strong> MK Tips provides information for educational and informational purposes. Deadlines, eligibility requirements, fees and funding conditions may change. Applicants should always verify information on the official provider website before applying.
        </div>
      </div>
    </div>
  );
}
