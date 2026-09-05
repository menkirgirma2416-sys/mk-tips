import React from 'react';
import { COVER_DATA_URI } from '../assets/imageAssets';
import { BookOpen, ExternalLink, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function EbooksSection({ onExploreEbooksClick }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #bfdbfe',
      borderRadius: '28px',
      padding: '36px',
      marginBottom: '48px',
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.06)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '36px',
        alignItems: 'center'
      }}>
        {/* Book Cover Container */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
            borderRadius: '50%',
            transform: 'scale(1.2)',
            zIndex: 0
          }}></div>

          <img
            src="/assets/images/mk-ebook-cover.png"
            alt="MK Ebooks Volume 1 Cover"
            onError={(e) => {
              if (e.target.src !== COVER_DATA_URI) {
                e.target.src = COVER_DATA_URI;
              }
            }}
            style={{
              maxHeight: '380px',
              maxWidth: '100%',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
              border: '1px solid #cbd5e1',
              position: 'relative',
              zIndex: 1,
              margin: '0 auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Info & Features */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#f59e0b',
            color: '#0f172a',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            <Sparkles size={14} color="#0f172a" />
            <span>MK EBOOKS PREVIEW • VOLUME 1</span>
          </div>

          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', lineHeight: 1.3 }}>
            A-Z Step by Step Guide to Fully Funded Scholarships in Italy & France
          </h2>

          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
            A comprehensive, practical guide written to assist applicants navigating Italian university admissions, tuition waivers, and regional fully funded scholarships (DSU, EDISU, ERGO).
          </p>

          {/* Key Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            {[
              "Complete list of tuition-free Italian & French university options",
              "Step-by-step guidance for DSU, EDISU, and regional scholarships",
              "Verified Medium of Instruction (MOI) application strategies",
              "Zero application fee university filter guides"
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1e293b', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href="https://ye-buna.com/mktips"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '14px',
                fontSize: '0.92rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)'
              }}
            >
              <span>Get the Ebook (Ye-Buna)</span>
              <ExternalLink size={16} />
            </a>

            {onExploreEbooksClick && (
              <button
                onClick={onExploreEbooksClick}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                <span>Dedicated Ebooks Page</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
