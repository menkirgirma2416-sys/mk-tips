import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2, ChevronRight, X, ArrowRight, ExternalLink } from 'lucide-react';

export default function DeadlineTracker({ opportunities, onSelectOpportunity }) {
  const [showFullTrackerModal, setShowFullTrackerModal] = useState(false);

  const today = new Date();

  // Process & Sort Opportunities by Deadline
  const processedOpportunities = opportunities.map(opp => {
    const deadlineDate = new Date(opp.deadline);
    const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
    
    let computedStatus = opp.status;
    let badgeBg = '#ecfdf5';
    let badgeColor = '#047857';

    if (daysLeft < 0 || opp.status.toLowerCase() === 'closed') {
      computedStatus = 'CLOSED';
      badgeBg = '#fef2f2';
      badgeColor = '#ef4444';
    } else if (daysLeft <= 30) {
      computedStatus = 'CLOSING SOON 🔴';
      badgeBg = '#fef3c7';
      badgeColor = '#b45309';
    } else if (opp.status.toLowerCase() === 'upcoming') {
      computedStatus = 'UPCOMING 🟡';
      badgeBg = '#eff6ff';
      badgeColor = '#1d4ed8';
    } else {
      computedStatus = 'OPEN 🟢';
      badgeBg = '#ecfdf5';
      badgeColor = '#047857';
    }

    return {
      ...opp,
      daysLeft,
      computedStatus,
      badgeBg,
      badgeColor
    };
  }).sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  const homepageDeadlines = processedOpportunities.slice(0, 6);

  return (
    <section style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '24px',
      padding: '36px 28px',
      marginBottom: '48px',
      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)'
    }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '28px'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            color: '#b45309',
            padding: '3px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 800,
            marginBottom: '8px'
          }}>
            <Clock size={12} color="#f59e0b" />
            <span>REAL-TIME DEADLINE ENGINE</span>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Application Deadlines
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '4px 0 0' }}>
            Track closing dates, days remaining, and application status ordered by urgency.
          </p>
        </div>

        <button
          onClick={() => setShowFullTrackerModal(true)}
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '12px',
            fontSize: '0.88rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <span>View All Deadlines</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Grid of Deadline Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px'
      }}>
        {homepageDeadlines.map((opp) => (
          <div
            key={opp.id}
            onClick={() => onSelectOpportunity(opp)}
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  backgroundColor: opp.badgeBg,
                  color: opp.badgeColor,
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}>
                  {opp.computedStatus}
                </span>

                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                  📍 {opp.country}
                </span>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px', lineHeight: 1.35 }}>
                {opp.name}
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                🏛️ {opp.provider}
              </p>
            </div>

            <div style={{
              marginTop: '14px',
              paddingTop: '10px',
              borderTop: '1px dashed #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>
                📅 Deadline: {opp.deadline}
              </span>

              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: opp.daysLeft <= 30 && opp.daysLeft >= 0 ? '#b45309' : opp.daysLeft < 0 ? '#ef4444' : '#2563eb' }}>
                {opp.daysLeft < 0 ? 'Expired' : `${opp.daysLeft} days left`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* FULL DEADLINE TRACKER MODAL */}
      {showFullTrackerModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
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
            maxWidth: '850px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowFullTrackerModal(false)}
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

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Full Application Deadline Index
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px' }}>
              Ordered chronologically by deadline date. Click any opportunity to view full requirements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {processedOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  onClick={() => {
                    setShowFullTrackerModal(false);
                    onSelectOpportunity(opp);
                  }}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <span style={{ backgroundColor: opp.badgeBg, color: opp.badgeColor, fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', marginRight: '8px' }}>
                      {opp.computedStatus}
                    </span>
                    <strong style={{ fontSize: '0.98rem', color: '#0f172a' }}>{opp.name}</strong>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                      🏛️ {opp.provider} • 📍 {opp.country}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>
                      📅 {opp.deadline}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: opp.daysLeft <= 30 && opp.daysLeft >= 0 ? '#b45309' : opp.daysLeft < 0 ? '#ef4444' : '#2563eb' }}>
                      {opp.daysLeft < 0 ? 'Closed' : `${opp.daysLeft} days remaining`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
