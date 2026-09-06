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
      setAuthError('Incorrect password.');
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
              Enter administrator password to manage opportunity records.
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
                placeholder="Enter admin password"
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
                backgroundColor: '#0f172a', color: '#ffffff', padding: '14px',
                borderRadius: '12px', border: 'none', fontWeight: 800,
                fontSize: '0.92rem', cursor: 'pointer', marginTop: '6px'
              }}
            >
              Authenticate Access
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
        maxWidth: '920px',
        width: '100%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0f172a',
          color: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={26} color="#38bdf8" />
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                MK Tips Administrator Portal
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                Manage live opportunity records, deadlines, and publishing status.
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '12px',
          padding: '16px 32px',
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <button
            onClick={() => { setActiveTab('list'); setEditingId(null); }}
            style={{
              backgroundColor: activeTab === 'list' ? '#2563eb' : '#ffffff',
              color: activeTab === 'list' ? '#ffffff' : '#475569',
              border: activeTab === 'list' ? 'none' : '1px solid #cbd5e1',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            Opportunity Records ({opportunities.length})
          </button>

          <button
            onClick={() => { setActiveTab('add'); setEditingId(null); setFormData(initialFormState); }}
            style={{
              backgroundColor: activeTab === 'add' ? '#2563eb' : '#ffffff',
              color: activeTab === 'add' ? '#ffffff' : '#475569',
              border: activeTab === 'add' ? 'none' : '1px solid #cbd5e1',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Plus size={16} />
            <span>Add Opportunity Record</span>
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px 32px', overflowY: 'auto', flex: 1 }}>
          {/* TAB 1: LIST RECORDS */}
          {activeTab === 'list' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {opportunities.map(opp => (
                <div key={opp.id} style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{
                        backgroundColor: opp.published !== false ? '#ecfdf5' : '#fef2f2',
                        color: opp.published !== false ? '#047857' : '#b91c1c',
                        fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px'
                      }}>
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

                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                      {opp.name}
                    </h4>

                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                      Deadline: <strong>{opp.deadline}</strong> | Verified: <strong>{opp.last_verified || 'Recent'}</strong>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => onMarkVerified(opp.id)}
                      title="Mark Verified Today"
                      style={{
                        backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe',
                        padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '4px'
                      }}
                    >
                      <CheckCircle2 size={14} />
                      <span>Verify</span>
                    </button>

                    <button
                      onClick={() => handleStartEdit(opp)}
                      style={{
                        backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #cbd5e1',
                        padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '4px'
                      }}
                    >
                      <Edit size={14} />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${opp.name}" permanently?`)) {
                          onDeleteOpportunity(opp.id);
                        }
                      }}
                      style={{
                        backgroundColor: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca',
                        padding: '6px 10px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '4px'
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2 & 3: ADD / EDIT FORM */}
          {(activeTab === 'add' || activeTab === 'edit') && (
            <form onSubmit={handleSaveForm} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Opportunity Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Organization / Host Provider *
                </label>
                <input
                  type="text"
                  required
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Country *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Opportunity Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700 }}
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
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Degree / Target Level *
                </label>
                <select
                  value={formData.degree_level}
                  onChange={(e) => setFormData({ ...formData, degree_level: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700 }}
                >
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                  <option value="Postdoctoral">Postdoctoral</option>
                  <option value="Other">Other / Multiple</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Funding Type *
                </label>
                <select
                  value={formData.funding_type}
                  onChange={(e) => setFormData({ ...formData, funding_type: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700 }}
                >
                  <option value="Fully Funded">Fully Funded</option>
                  <option value="Partially Funded">Partially Funded</option>
                  <option value="Tuition Fee Only">Tuition Fee Only</option>
                  <option value="Stipend Only">Stipend Only</option>
                  <option value="Free">Free</option>
                  <option value="Unfunded">Unfunded</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Application Fee Status *
                </label>
                <select
                  value={formData.fee_status}
                  onChange={(e) => setFormData({ ...formData, fee_status: e.target.value, application_fee: e.target.value === 'Application Fee Required' })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700 }}
                >
                  <option value="No Application Fee">No Application Fee ($0)</option>
                  <option value="Application Fee Required">Application Fee Required</option>
                  <option value="Not Specified">Not Specified</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Deadline Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700 }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Brief Card Description *
                </label>
                <textarea
                  required
                  rows="2"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Official Website URL
                </label>
                <input
                  type="url"
                  value={formData.official_website}
                  onChange={(e) => setFormData({ ...formData, official_website: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Official Application Link URL
                </label>
                <input
                  type="url"
                  value={formData.application_link}
                  onChange={(e) => setFormData({ ...formData, application_link: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
                />
              </div>

              {/* Toggles */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '20px', alignItems: 'center', paddingTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.moi_accepted}
                    onChange={(e) => setFormData({ ...formData, moi_accepted: e.target.checked })}
                  />
                  <span>Medium of Instruction (MOI) Accepted</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  />
                  <span>Feature on Homepage</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  />
                  <span>Publish Record</span>
                </label>
              </div>

              {/* Buttons */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  style={{ backgroundColor: '#f1f5f9', color: '#475569', border: 'none', padding: '10px 18px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '10px 24px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
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
