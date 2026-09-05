import React from 'react';
import { Sparkles, CheckCircle2, FileText, Globe, Award, HelpCircle } from 'lucide-react';

export default function EthiopiaBanner({ ethiopiaOnly, setEthiopiaOnly, count }) {
  return (
    <div style={{
      backgroundColor: ethiopiaOnly ? '#ecfdf5' : '#f8fafc',
      border: ethiopiaOnly ? '2px solid #10b981' : '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '20px 24px',
      margin: '24px 0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            fontSize: '2rem',
            lineHeight: 1,
            backgroundColor: '#ffffff',
            padding: '8px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
          }}>
            🇪🇹
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Ethiopian Students & Professionals Hub
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
              {ethiopiaOnly 
                ? `Currently showing ${count} opportunities confirmed open to Ethiopian applicants` 
                : 'Filter international scholarships with confirmed Ethiopian eligibility & MOI letter acceptance'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setEthiopiaOnly(!ethiopiaOnly)}
          style={{
            backgroundColor: ethiopiaOnly ? '#10b981' : '#2563eb',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
          }}
        >
          <span>{ethiopiaOnly ? '✓ Showing Ethiopian Eligible Only' : '🇪🇹 Filter Open to Ethiopian Applicants'}</span>
        </button>
      </div>

      {/* Quick tips bar for Ethiopian students */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '12px',
        paddingTop: '12px',
        borderTop: '1px solid #cbd5e1'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <FileText size={18} color="#2563eb" style={{ shrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.78rem', color: '#334155' }}>
            <strong>MOI Letter Accepted:</strong> Many German & European universities accept Addis Ababa Univ / AAU MOI letters instead of IELTS.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <Award size={18} color="#10b981" style={{ shrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.78rem', color: '#334155' }}>
            <strong>Fully Funded Living:</strong> DAAD (€934/mo), Erasmus (€1,400/mo), & Chevening (£1,350+/mo) cover all living expenses.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <CheckCircle2 size={18} color="#f59e0b" style={{ shrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.78rem', color: '#334155' }}>
            <strong>Application Fee:</strong> 90%+ of featured opportunities have <strong>Zero Application Fee ($0)</strong>.
          </div>
        </div>
      </div>
    </div>
  );
}
