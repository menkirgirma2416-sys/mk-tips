import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Bookmark,
  Building,
  Clock,
  BookOpen,
  Send,
  AlertCircle
} from 'lucide-react';

export default function OpportunityDetailModal({
  opportunity,
  onClose,
  onToggleCompare,
  isCompared,
  onToggleBookmark,
  isBookmarked
}) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!opportunity) return null;

  const {
    name,
    provider,
    country,
    location,
    type,
    degree_level,
    field_of_study,
    eligible_countries,
    nationality_requirements,
    eligibility_notes,
    opening_date,
    deadline,
    deadline_display,
    status,
    application_fee,
    fee_amount,
    fee_status,
    currency,
    funding_type,
    tuition_coverage,
    stipend,
    accommodation,
    airfare,
    health_insurance,
    visa_support,
    travel_allowance,
    other_benefits,
    english_requirements,
    alternative_english_accepted,
    moi_accepted,
    academic_requirements,
    gpa_requirements,
    age_requirements,
    work_experience_requirements,
    required_documents = [],
    application_process = [],
    description,
    official_website,
    application_link,
    source,
    last_verified
  } = opportunity;

  // Days remaining calculation using local system date
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  
  let computedStatus = status;
  let statusBg = '#ecfdf5';
  let statusColor = '#047857';

  if (daysLeft < 0 || status.toLowerCase() === 'closed') {
    computedStatus = 'CLOSED';
    statusBg = '#fef2f2';
    statusColor = '#ef4444';
  } else if (status.toLowerCase() === 'upcoming' || (opening_date && new Date(opening_date) > today)) {
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

  // Fee Display Text
  const isNoFee = !application_fee || fee_amount === 0 || (fee_status && fee_status.toLowerCase().includes('no application fee'));
  const feeDisplay = isNoFee ? 'No Application Fee ($0)' : fee_status === 'Not Specified' ? 'Not Specified by Official Source' : `Application Fee Required (${fee_amount} ${currency || ''})`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
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
        maxWidth: '920px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Modal Top Header Banner */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '32px 32px 24px',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>

          {/* Badges Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: statusBg, color: statusColor, fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: '8px' }}>
              {computedStatus}
            </span>
            <span style={{ backgroundColor: '#2563eb', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: '8px' }}>
              {type}
            </span>
            <span style={{ backgroundColor: '#1e293b', color: '#38bdf8', fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: '8px' }}>
              🎓 {degree_level}
            </span>
            <span style={{ backgroundColor: funding_type.toLowerCase().includes('fully') ? '#10b981' : '#f59e0b', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: '8px' }}>
              💰 {funding_type}
            </span>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '0 0 8px', lineHeight: 1.3 }}>
            {name}
          </h2>

          <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span>🏛️ {provider}</span>
            <span>•</span>
            <span>📍 {country}</span>
            <span>•</span>
            <span style={{ color: computedStatus.includes('UPCOMING') ? '#38bdf8' : daysLeft < 0 ? '#ef4444' : '#10b981', fontWeight: 800 }}>
              {computedStatus.includes('UPCOMING') ? `Opens: ${opening_date || 'Future Cycle'}` : `📅 Deadline: ${deadline_display || deadline} (${daysLeft < 0 ? 'Closed' : `${daysLeft} days left`})`}
            </span>
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          padding: '0 24px',
          overflowX: 'auto'
        }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'eligibility', label: 'Eligibility Criteria' },
            { id: 'funding', label: 'Funding & Benefits' },
            { id: 'english', label: 'English Requirements' },
            { id: 'documents', label: 'Required Documents' },
            { id: 'process', label: 'Application Steps' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: '14px 18px',
                border: 'none',
                borderBottom: activeTab === t.id ? '3px solid #2563eb' : '3px solid transparent',
                backgroundColor: 'transparent',
                color: activeTab === t.id ? '#2563eb' : '#64748b',
                fontWeight: activeTab === t.id ? 800 : 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '32px' }}>
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Opportunity Summary
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.65, margin: 0 }}>
                  {description}
                </p>
              </div>

              {/* Key Quick Info Table */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Field of Study</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>{field_of_study}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Application Fee</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isNoFee ? '#047857' : '#0f172a', marginTop: '2px' }}>
                    {feeDisplay}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Opening & Deadline</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>
                    Opens: {opening_date || 'N/A'} | Deadline: {deadline_display || deadline}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Last Verified Date</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2563eb', marginTop: '2px' }}>
                    Verified: {last_verified || 'Official source verified'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ELIGIBILITY CRITERIA */}
          {activeTab === 'eligibility' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Eligible Nationalities & Countries
                </h4>
                <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                  {eligible_countries}
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                  Academic & Entry Requirements
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#2563eb', fontWeight: 800 }}>•</span>
                    <span><strong>Academic Level:</strong> {degree_level} level program.</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#2563eb', fontWeight: 800 }}>•</span>
                    <span><strong>Academic Requirement:</strong> {academic_requirements || "Relevant degree from a recognized higher education institution."}</span>
                  </div>

                  {gpa_requirements && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#2563eb', fontWeight: 800 }}>•</span>
                      <span><strong>Minimum GPA:</strong> {gpa_requirements}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#2563eb', fontWeight: 800 }}>•</span>
                    <span><strong>Work Experience:</strong> {work_experience_requirements || "0 - 2 years experience depending on track."}</span>
                  </div>

                  {age_requirements && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#2563eb', fontWeight: 800 }}>•</span>
                      <span><strong>Age Requirement:</strong> {age_requirements}</span>
                    </div>
                  )}

                  {eligibility_notes && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#2563eb', fontWeight: 800 }}>•</span>
                      <span><strong>Special Conditions:</strong> {eligibility_notes}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FUNDING & BENEFITS */}
          {activeTab === 'funding' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {tuition_coverage && (
                <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '16px', padding: '18px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>Tuition Coverage</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065f46', marginTop: '4px' }}>{tuition_coverage}</div>
                </div>
              )}

              {stipend && (
                <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '16px', padding: '18px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>Living Allowance / Stipend</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065f46', marginTop: '4px' }}>{stipend}</div>
                </div>
              )}

              {accommodation && (
                <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '16px', padding: '18px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>Accommodation</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065f46', marginTop: '4px' }}>{accommodation}</div>
                </div>
              )}

              {airfare && (
                <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '16px', padding: '18px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>International Airfare</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065f46', marginTop: '4px' }}>{airfare}</div>
                </div>
              )}

              {health_insurance && (
                <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '16px', padding: '18px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>Health Insurance & Visa Support</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065f46', marginTop: '4px' }}>{health_insurance} | {visa_support || 'Visa recommendation provided'}</div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ENGLISH REQUIREMENTS */}
          {activeTab === 'english' && (
            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '16px', padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0369a1', marginBottom: '10px' }}>
                English Language Requirements & Policies
              </h4>

              <p style={{ fontSize: '0.95rem', color: '#0c4a6e', lineHeight: 1.65, marginBottom: '16px' }}>
                {english_requirements}
              </p>

              {moi_accepted && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #7dd3fc', borderRadius: '12px', padding: '12px 16px', fontSize: '0.88rem', fontWeight: 700, color: '#0284c7', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} color="#0284c7" />
                  <span>Verified: Medium of Instruction (MOI) Certificate is accepted for eligible programs when previous degree was fully taught in English.</span>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: REQUIRED DOCUMENTS */}
          {activeTab === 'documents' && (
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                Required Application Documents Checklist
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                {(Array.isArray(required_documents) ? required_documents : []).map((doc, idx) => (
                  <div key={idx} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', fontSize: '0.88rem', fontWeight: 600, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: APPLICATION STEPS */}
          {activeTab === 'process' && (
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Step-by-Step Application Guide
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(Array.isArray(application_process) ? application_process : []).map((stepText, idx) => (
                  <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '16px', fontSize: '0.9rem', color: '#1e293b', lineHeight: 1.5 }}>
                    {stepText}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verification Notice */}
          <div style={{
            marginTop: '28px',
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '14px',
            padding: '14px 18px',
            fontSize: '0.82rem',
            color: '#b45309',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <ShieldCheck size={20} color="#f59e0b" style={{ shrink: 0 }} />
            <span><strong>Accuracy Notice:</strong> Always verify the latest requirements, opening dates, and application guidelines directly on the official provider website before applying.</span>
          </div>

          {/* Action Buttons Footer */}
          <div style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => onToggleCompare(opportunity)}
                style={{
                  backgroundColor: isCompared ? '#2563eb' : '#f1f5f9',
                  color: isCompared ? '#ffffff' : '#334155',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {isCompared ? '✓ Added to Compare' : '+ Compare'}
              </button>

              <button
                onClick={() => onToggleBookmark(opportunity)}
                style={{
                  backgroundColor: isBookmarked ? '#f59e0b' : '#f1f5f9',
                  color: isBookmarked ? '#ffffff' : '#334155',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {isBookmarked ? '★ Saved' : '☆ Bookmark'}
              </button>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {official_website && (
                <a
                  href={official_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#1e293b',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Official Website</span>
                  <ExternalLink size={16} />
                </a>
              )}

              <a
                href={application_link || official_website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)'
                }}
              >
                <span>Official Application Portal</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
