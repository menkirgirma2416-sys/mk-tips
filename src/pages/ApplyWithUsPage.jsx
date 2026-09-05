import React from 'react';
import { ExternalLink, Send, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function ApplyWithUsPage() {
  const campaigns = [
    {
      id: "italy-scholarship-campaign",
      title: "Italian University & Regional Scholarship Campaign",
      badge: "ACTIVE SCHOLARSHIP CAMPAIGN",
      badgeBg: "#10b981",
      description: "Direct application support for Italian university admission applications, tuition waivers, and regional fully funded scholarships (DSU, EDISU, ERGO).",
      formLink: "https://forms.gle/6EermLr5nm9ef3y98",
      formLabel: "Submit Italian Scholarship Form",
      features: [
        "University and program selection matching",
        "Admission requirement & document review",
        "Application portal guidance",
        "Regional scholarship application guidance"
      ]
    },
    {
      id: "general-support-campaign",
      title: "General University Admissions & Guidance Request",
      badge: "ONGOING SUPPORT",
      badgeBg: "#2563eb",
      description: "Submit a general support request for university applications, personal mentorship, document review, or visa preparation guidance across any country.",
      formLink: "https://forms.gle/gwHnj7gJvWNfUMSH7",
      formLabel: "Submit General Support Request",
      features: [
        "Profile assessment & GPA evaluation",
        "Document preparation (CV, Motivation Statement)",
        "Mentorship & strategy selection",
        "Embassy & visa checklist guidance"
      ]
    }
  ];

  return (
    <div style={{ padding: '40px 0' }}>
      {/* Header Banner */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '24px',
        padding: '48px 32px',
        marginBottom: '48px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            <Sparkles size={14} color="#f59e0b" />
            <span>APPLICATION SUPPORT & GUIDANCE</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Apply With MK Tips
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, margin: '0 0 24px' }}>
            Discover active application opportunities supported by MK Tips. Select the appropriate form below to submit your details for personalized guidance.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href="https://forms.gle/6EermLr5nm9ef3y98"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#f59e0b',
                color: '#0f172a',
                padding: '14px 24px',
                borderRadius: '14px',
                fontSize: '0.92rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
                textDecoration: 'none'
              }}
            >
              <span>1. Italian Scholarship Form</span>
              <ExternalLink size={16} />
            </a>

            <a
              href="https://forms.gle/gwHnj7gJvWNfUMSH7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '14px 24px',
                borderRadius: '14px',
                fontSize: '0.92rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                textDecoration: 'none'
              }}
            >
              <span>2. General Support Request Form</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Available Now Section */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>
            Available Now — Application & Guidance Options
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>
            Choose the application track that matches your goals.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {campaigns.map((c) => (
            <div key={c.id} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)'
            }}>
              <div>
                <span style={{
                  backgroundColor: c.badgeBg,
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  marginBottom: '14px'
                }}>
                  {c.badge}
                </span>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  {c.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                  {c.description}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Key Features:
                  </div>
                  {c.features.map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', marginBottom: '6px' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={c.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>{c.formLabel}</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://t.me/Mk_8958"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#334155',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    textDecoration: 'none'
                  }}
                >
                  <Send size={14} color="#0088cc" />
                  <span>Questions? Contact @Mk_8958 on Telegram</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
