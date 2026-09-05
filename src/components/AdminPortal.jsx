import React, { useState } from 'react';
import { ShieldCheck, Plus, Edit, Trash2, CheckCircle2, X, Lock, Save, Star, Eye, EyeOff, Calendar } from 'lucide-react';

export default function AdminPortal({
  opportunities = [],
  onClose,
  onAddOpportunity,
  onUpdateOpportunity,
  onDeleteOpportunity,
  onMarkVerified
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'add' | 'edit'
  const [editingId, setEditingId] = useState(null);

  // Form State
  const initialFormState = {
    name: '',
    provider: '',
    type: 'Scholarship',
    country: '',
    degree_level: "Master's",
    field_of_study: '',
    eligible_countries: 'Ethiopia and all international applicants',
    opening_date: '',
    deadline: '',
    deadline_display: '',
    status: 'Open',
    application_fee: false,
    fee_amount: 0,
    fee_status: 'No Application Fee',
    funding_type: 'Fully Funded',
    tuition_coverage: '100% Tuition Waived',
    stipend: '',
    accommodation: '',
    airfare: '',
    health_insurance: '',
    visa_support: '',
    travel_allowance: '',
    english_requirements: '',
    moi_accepted: false,
    alternative_english_accepted: true,
    academic_requirements: '',
    required_documents: 'Academic Transcripts, Degree Certificate, Motivation Letter, Recommendation Letters, Passport',
    application_process: 'Step 1: Apply on official website portal.\nStep 2: Submit required document dossier.\nStep 3: Await selection panel notification.',
    description: '',
    official_website: '',
    application_link: '',
    featured: false,
    published: true
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'mktips2026' || password === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect Admin Password. (Default: mktips2026)');
    }
  };

  const handleStartEdit = (opp) => {
    setEditingId(opp.id);
    setFormData({
      ...opp,
      required_documents: Array.isArray(opp.required_documents) ? opp.required_documents.join('\n') : (opp.required_documents || ''),
      application_process: Array.isArray(opp.application_process) ? opp.application_process.join('\n') : (opp.application_process || '')
    });
    setActiveTab('edit');
  };

  const handleSaveForm = (e) => {
    e.preventDefault();

    const formattedOpportunity = {
      ...formData,
      id: editingId || `opp-admin-${Date.now()}`,
      required_documents: typeof formData.required_documents === 'string' 
        ? formData.required_documents.split('\n').filter(d => d.trim() !== '')
        : formData.required_documents,
      application_process: typeof formData.application_process === 'string'
        ? formData.application_process.split('\n').filter(p => p.trim() !== '')
        : formData.application_process,
      last_verified: new Date().toISOString().split('T')[0]
    };

    if (editingId) {
      onUpdateOpportunity(editingId, formattedOpportunity);
    } else {
      onAddOpportunity(formattedOpportunity);
    }

    setFormData(initialFormState);
    setEditingId(null);
    setActiveTab('list');
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '36px',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              backgroundColor: '#f1f5f9', border: 'none', borderRadius: '50%',
              width: '32px', height: '32px', cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#2563eb' }}>
              <Lock size={26} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
              MK Tips Admin Portal
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
              Enter administrator key to manage opportunity records.
            </p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (mktips2026)"
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: '12px',
                  border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none'
                }}
              />
            </div>

            {authError && (
              <div style={{ color: '#ef4444', fontSize: '0.82rem', fontWeight: 700 }}>
                {authError}
              </div>
            )}

            <button
              type="submit"
              style={{
                backgroundColor: '#0f172a', color: '#ffffff',
                padding: '12px', borderRadius: '12px', fontSize: '0.9rem',
                fontWeight: 800, border: 'none', cursor: 'pointer'
              }}
            >
              Authenticate & Access Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        maxWidth: '980px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '24px 32px',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={26} color="#38bdf8" />
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                MK Tips Opportunity Management Engine
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0 }}>
                Total Records: <strong>{opportunities.length}</strong> | Real-time persistence active
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: 'none', borderRadius: '50%',
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#ffffff', cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Sub-header */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', padding: '0 24px' }}>
          <button
            onClick={() => setActiveTab('list')}
            style={{
              padding: '14px 20px', border: 'none',
              borderBottom: activeTab === 'list' ? '3px solid #2563eb' : '3px solid transparent',
              backgroundColor: 'transparent',
              color: activeTab === 'list' ? '#2563eb' : '#64748b',
              fontWeight: 800, fontSize: '0.88rem', cursor: 'pointer'
            }}
          >
            All Opportunities List ({opportunities.length})
          </button>

          <button
            onClick={() => {
              setEditingId(null);
              setFormData(initialFormState);
              setActiveTab('add');
            }}
            style={{
              padding: '14px 20px', border: 'none',
              borderBottom: activeTab === 'add' ? '3px solid #2563eb' : '3px solid transparent',
              backgroundColor: 'transparent',
              color: activeTab === 'add' ? '#2563eb' : '#64748b',
              fontWeight: 800, fontSize: '0.88rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}
          >
            <Plus size={16} />
            <span>Add New Opportunity Record</span>
          </button>
        </div>

        {/* Body Content */}
        <div style={{ padding: '28px' }}>
          {/* TAB 1: LIST */}
          {activeTab === 'list' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {opportunities.map((opp) => (
                <div key={opp.id} style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ backgroundColor: opp.published !== false ? '#ecfdf5' : '#fef2f2', color: opp.published !== false ? '#047857' : '#ef4444', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px' }}>
                        {opp.published !== false ? 'PUBLISHED' : 'DRAFT'}
                      </span>
                      {opp.featured && (
                        <span style={{ backgroundColor: '#fffbeb', color: '#b45309', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px' }}>
                          ★ FEATURED
                        </span>
                      )}
                      <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>
                        {opp.type} • {opp.country}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px' }}>
                      {opp.name}
                    </h4>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      📅 Deadline: {opp.deadline} | Status: <strong>{opp.status}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => onUpdateOpportunity(opp.id, { featured: !opp.featured })}
                      title="Toggle Featured"
                      style={{
                        backgroundColor: opp.featured ? '#f59e0b' : '#ffffff',
                        color: opp.featured ? '#ffffff' : '#64748b',
                        border: '1px solid #cbd5e1', borderRadius: '8px', padding: '6px 12px',
                        fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer'
                      }}
                    >
                      ★ {opp.featured ? 'Featured' : 'Feature'}
                    </button>

                    <button
                      onClick={() => onUpdateOpportunity(opp.id, { published: opp.published === false ? true : false })}
                      style={{
                        backgroundColor: opp.published !== false ? '#ecfdf5' : '#fef2f2',
                        color: opp.published !== false ? '#047857' : '#ef4444',
                        border: '1px solid #cbd5e1', borderRadius: '8px', padding: '6px 12px',
                        fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer'
                      }}
                    >
                      {opp.published !== false ? 'Unpublish' : 'Publish'}
                    </button>

                    <button
                      onClick={() => handleStartEdit(opp)}
                      style={{
                        backgroundColor: '#2563eb', color: '#ffffff',
                        border: 'none', borderRadius: '8px', padding: '6px 12px',
                        fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer',
                        display: 'inline-flex', alignItems: 'center', gap: '4px'
                      }}
                    >
                      <Edit size={14} />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => onDeleteOpportunity(opp.id)}
                      style={{
                        backgroundColor: '#fef2f2', color: '#ef4444',
                        border: '1px solid #fecaca', borderRadius: '8px', padding: '6px 10px',
                        fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer'
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: ADD / EDIT FORM */}
          {(activeTab === 'add' || activeTab === 'edit') && (
            <form onSubmit={handleSaveForm} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Opportunity Title / Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Organization / Provider *
                </label>
                <input
                  type="text"
                  required
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Host Country *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Opportunity Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                >
                  <option value="Scholarship">Scholarship</option>
                  <option value="Fellowship">Fellowship</option>
                  <option value="Internship">Internship</option>
                  <option value="Conference">Conference</option>
                  <option value="Online Course">Online Course</option>
                  <option value="Grant">Grant</option>
                  <option value="Exchange Program">Exchange Program</option>
                  <option value="Research Opportunity">Research Opportunity</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Target Study Level *
                </label>
                <select
                  value={formData.degree_level}
                  onChange={(e) => setFormData({ ...formData, degree_level: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                >
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                  <option value="Postdoctoral">Postdoctoral</option>
                  <option value="Professional">Professional</option>
                  <option value="Other">Multiple / Open to participants</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Funding Type *
                </label>
                <select
                  value={formData.funding_type}
                  onChange={(e) => setFormData({ ...formData, funding_type: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                >
                  <option value="Fully Funded">Fully Funded</option>
                  <option value="Partially Funded">Partially Funded</option>
                  <option value="Tuition Fee Only">Tuition Fee Only</option>
                  <option value="Stipend Only">Stipend Only</option>
                  <option value="Free">Free / 100% Free</option>
                  <option value="Unfunded">Unfunded</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Application Fee Status *
                </label>
                <select
                  value={formData.fee_status}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    fee_status: e.target.value,
                    application_fee: e.target.value === 'Application Fee Required'
                  })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                >
                  <option value="No Application Fee">No Application Fee ($0)</option>
                  <option value="Application Fee Required">Application Fee Required</option>
                  <option value="Not Specified">Not Specified</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Current Status *
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                >
                  <option value="Open">OPEN</option>
                  <option value="Upcoming">UPCOMING</option>
                  <option value="Closed">CLOSED</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Opening Date (YYYY-MM-DD)
                </label>
                <input
                  type="date"
                  value={formData.opening_date}
                  onChange={(e) => setFormData({ ...formData, opening_date: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Deadline Date (YYYY-MM-DD) *
                </label>
                <input
                  type="date"
                  required
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Brief Card Description (2-3 sentences) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Official Website Link
                </label>
                <input
                  type="url"
                  value={formData.official_website}
                  onChange={(e) => setFormData({ ...formData, official_website: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Official Application Portal Link
                </label>
                <input
                  type="url"
                  value={formData.application_link}
                  onChange={(e) => setFormData({ ...formData, application_link: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', gridColumn: 'span 2' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.moi_accepted}
                    onChange={(e) => setFormData({ ...formData, moi_accepted: e.target.checked })}
                    style={{ width: '16px', height: '16px' }}
                  />
                  <span>Medium of Instruction (MOI) Certificate Accepted</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    style={{ width: '16px', height: '16px' }}
                  />
                  <span>Feature on Homepage</span>
                </label>
              </div>

              <div style={{ gridColumn: 'span 2', display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  style={{
                    backgroundColor: '#f1f5f9', color: '#475569',
                    padding: '12px 20px', borderRadius: '12px', fontSize: '0.9rem',
                    fontWeight: 700, border: 'none', cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#2563eb', color: '#ffffff',
                    padding: '12px 28px', borderRadius: '12px', fontSize: '0.9rem',
                    fontWeight: 800, border: 'none', cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: '6px'
                  }}
                >
                  <Save size={16} />
                  <span>Save Opportunity Record</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
