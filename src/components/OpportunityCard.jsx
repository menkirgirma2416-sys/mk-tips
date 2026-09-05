import React from 'react';
import { Calendar, MapPin, Building, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function OpportunityCard({
  opportunity,
  onSelect,
  onToggleCompare,
  isCompared,
  onToggleBookmark,
  isBookmarked
}) {
  const {
    name,
    provider,
    country,
    type,
    degree_level,
    funding_type,
    application_fee,
    fee_amount,
    fee_status,
    opening_date,
    deadline,
    deadline_display,
    status,
    description,
    alternative_english_accepted,
    moi_accepted
  } = opportunity;

  // Integrated Automatic Days Remaining Calculation (NO hardcoded static values!)
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  
  let computedStatus = status;
  let statusBg = '#ecfdf5';
  let statusColor = '#047857';

  if (daysLeft < 0 || (status && status.toLowerCase() === 'closed')) {
    computedStatus = 'CLOSED ⚪';
    statusBg = '#fef2f2';
    statusColor = '#ef4444';
  } else if ((status && status.toLowerCase() === 'upcoming') || (opening_date && new Date(opening_date) > today)) {
    computedStatus = 'UPCOMING 🟡';
    statusBg = '#eff6ff';
    statusColor = '#1d4ed8';
  } else if (daysLeft <= 30) {
    computedStatus = 'CLOSING SOON 🔴';
    statusBg = '#fef3c7';
    statusColor = '#b45309';
  } else {
    computedStatus = 'OPEN 🟢';
    statusBg = '#ecfdf5';
    statusColor = '#047857';
  }

  // Application Fee display
  const isNoFee = !application_fee || fee_amount === 0 || (fee_status && fee_status.toLowerCase().includes('no application fee'));
  const feeDisplay = isNoFee ? 'No Application Fee' : fee_status === 'Not Specified' ? 'Fee: Not Specified' : `Fee Required (${fee_amount || 'Yes'})`;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}>
      <div>
        {/* Status & Country Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
          <span style={{
            backgroundColor: statusBg,
            color: statusColor,
            fontSize: '0.74rem',
            fontWeight: 800,
            padding: '3px 10px',
            borderRadius: '6px'
          }}>
            {computedStatus}
          </span>

          <span style={{
            backgroundColor: '#f1f5f9',
            color: '#475569',
            fontSize: '0.74rem',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '6px'
          }}>
            📍 {country}
          </span>
        </div>

        {/* Opportunity Title & Provider */}
        <h3
          onClick={() => onSelect(opportunity)}
          style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 6px',
            lineHeight: 1.35,
            cursor: 'pointer'
          }}
        >
          {name}
        </h3>

        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Building size={14} color="#94a3b8" />
          <span>{provider}</span>
        </div>

        {/* Key Attribute Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
          <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', fontSize: '0.74rem', fontWeight: 700, padding: '2px 8px', borderRadius: '6px' }}>
            {type} • {degree_level}
          </span>

          <span style={{ backgroundColor: funding_type.toLowerCase().includes('fully') || funding_type.toLowerCase() === 'free' ? '#ecfdf5' : '#fffbeb', color: funding_type.toLowerCase().includes('fully') || funding_type.toLowerCase() === 'free' ? '#047857' : '#b45309', border: funding_type.toLowerCase().includes('fully') || funding_type.toLowerCase() === 'free' ? '1px solid #a7f3d0' : '1px solid #fde68a', fontSize: '0.74rem', fontWeight: 700, padding: '2px 8px', borderRadius: '6px' }}>
            💰 {funding_type}
          </span>

          <span style={{ backgroundColor: isNoFee ? '#f0fdf4' : '#f8fafc', color: isNoFee ? '#15803d' : '#475569', border: isNoFee ? '1px solid #bbf7d0' : '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: 700, padding: '2px 8px', borderRadius: '6px' }}>
            🏷️ {feeDisplay}
          </span>

          {moi_accepted && (
            <span style={{ backgroundColor: '#f0f9ff', color: '#0284c7', border: '1px solid #bae6fd', fontSize: '0.74rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px' }}>
              📜 MOI Accepted
            </span>
          )}
        </div>

        {/* Short 2-3 sentence description */}
        <p style={{
          fontSize: '0.88rem',
          color: '#475569',
          lineHeight: 1.55,
          margin: '0 0 16px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          "{description}"
        </p>
      </div>

      {/* Card Footer */}
      <div style={{
        paddingTop: '12px',
        borderTop: '1px dashed #cbd5e1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div>
          {computedStatus.includes('UPCOMING') && opening_date ? (
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8' }}>
              🗓️ Opening Date: {opening_date}
            </div>
          ) : (
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0f172a' }}>
              📅 Deadline: {deadline_display || deadline}
            </div>
          )}

          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: computedStatus.includes('UPCOMING') ? '#1d4ed8' : daysLeft <= 30 && daysLeft >= 0 ? '#b45309' : daysLeft < 0 ? '#ef4444' : '#2563eb' }}>
            {computedStatus.includes('UPCOMING') ? 'Cycle / Program Specific' : deadline_display ? 'Cycle / Program Specific' : daysLeft < 0 ? 'Closed' : `${daysLeft} days remaining`}
          </div>
        </div>

        <button
          onClick={() => onSelect(opportunity)}
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '9px 18px',
            borderRadius: '12px',
            fontSize: '0.82rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
          }}
        >
          <span>VIEW DETAILS</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
