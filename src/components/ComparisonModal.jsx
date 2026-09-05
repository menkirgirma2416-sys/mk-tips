import React from 'react';
import { X, Scale, ExternalLink, CheckCircle2, XCircle, Trash2 } from 'lucide-react';

export default function ComparisonModal({ compareList, onClose, onRemoveFromCompare, onClearAll }) {
  if (!compareList || compareList.length === 0) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '40px',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              backgroundColor: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b'
            }}
          >
            <X size={18} />
          </button>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#eff6ff',
            color: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Scale size={32} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
            Comparison Tray Empty
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px' }}>
            Select 2 or more opportunities using the <strong>Compare</strong> button on any card to compare funding, fees, IELTS, and Ethiopian eligibility side by side.
          </p>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            Browse Opportunities
          </button>
        </div>
      </div>
    );
  }

  const comparisonRows = [
    { label: 'Provider / Organization', key: 'provider' },
    { label: 'Country', key: 'country' },
    { 
      label: '🇪🇹 Ethiopian Eligibility', 
      render: (opp) => (
        <span style={{ fontWeight: 800, color: opp.ethiopia_eligible ? '#047857' : '#dc2626' }}>
          {opp.ethiopia_eligible ? '🟢 Eligible' : '🔴 Not Eligible'}
        </span>
      ) 
    },
    { label: 'Degree / Study Level', key: 'degree_level' },
    { label: 'Opportunity Type', key: 'type' },
    { 
      label: 'Funding Coverage', 
      render: (opp) => (
        <span style={{ fontWeight: 800, color: '#166534' }}>
          💰 {opp.funding_type}
        </span>
      ) 
    },
    { label: 'Monthly Stipend', key: 'stipend' },
    { 
      label: 'Application Fee', 
      render: (opp) => (
        <span style={{ fontWeight: 700, color: opp.application_fee ? '#dc2626' : '#16a34a' }}>
          {opp.application_fee ? `${opp.fee_amount} ${opp.currency}` : '🟢 No Fee ($0)'}
        </span>
      ) 
    },
    { 
      label: 'MOI Letter Accepted', 
      render: (opp) => (
        <span style={{ fontWeight: 700, color: opp.moi_accepted ? '#047857' : '#64748b' }}>
          {opp.moi_accepted ? '📜 YES ACCEPTED' : '🔴 NO'}
        </span>
      ) 
    },
    { label: 'IELTS / TOEFL Requirement', key: 'english_requirements' },
    { label: 'Airfare Support', key: 'airfare' },
    { label: 'Accommodation', key: 'accommodation' },
    { label: 'Application Deadline', key: 'deadline' },
    { label: 'Last Verified Date', key: 'last_verified' }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        maxWidth: '1100px',
        width: '100%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
      }}>
        {/* Header Bar */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '20px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Scale size={24} color="#60a5fa" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Side-by-Side Opportunity Comparison
            </h3>
            <span style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '12px'
            }}>
              {compareList.length} Selected
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onClearAll}
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                color: '#fca5a5',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Trash2 size={14} />
              Clear All
            </button>

            <button
              onClick={onClose}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Matrix Table */}
        <div style={{ overflowX: 'auto', padding: '24px 32px', flex: 1 }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.88rem'
          }}>
            <thead>
              <tr>
                <th style={{
                  padding: '12px 16px',
                  backgroundColor: '#f8fafc',
                  borderBottom: '2px solid #e2e8f0',
                  textAlign: 'left',
                  width: '200px',
                  fontWeight: 800,
                  color: '#475569'
                }}>
                  Feature
                </th>
                {compareList.map((opp) => (
                  <th key={opp.id} style={{
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    borderBottom: '2px solid #e2e8f0',
                    borderLeft: '1px solid #e2e8f0',
                    textAlign: 'left',
                    minWidth: '240px',
                    position: 'relative'
                  }}>
                    <button
                      onClick={() => onRemoveFromCompare(opp.id)}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: '#fef2f2',
                        color: '#ef4444',
                        border: 'none',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      title="Remove from comparison"
                    >
                      ✕
                    </button>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', paddingRight: '20px' }}>
                      {opp.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                  <td style={{
                    padding: '12px 16px',
                    fontWeight: 700,
                    color: '#334155',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    {row.label}
                  </td>
                  {compareList.map((opp) => (
                    <td key={opp.id} style={{
                      padding: '12px 16px',
                      color: '#1e293b',
                      borderBottom: '1px solid #e2e8f0',
                      borderLeft: '1px solid #e2e8f0'
                    }}>
                      {row.render ? row.render(opp) : opp[row.key] || 'N/A'}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Official Apply Row */}
              <tr>
                <td style={{ padding: '16px', fontWeight: 800, backgroundColor: '#f1f5f9' }}>Action</td>
                {compareList.map((opp) => (
                  <td key={opp.id} style={{ padding: '16px', borderLeft: '1px solid #e2e8f0', backgroundColor: '#f1f5f9' }}>
                    {opp.application_link && (
                      <a
                        href={opp.application_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                          padding: '8px 14px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Apply Officially</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
