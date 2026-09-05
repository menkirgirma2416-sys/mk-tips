import React from 'react';
import { GraduationCap, Users, FileCheck, ShieldCheck, ExternalLink, Sparkles, Send, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: "univ-app",
      title: "1. University Application & Admission",
      badge: "ADMISSION SUPPORT",
      icon: GraduationCap,
      color: "#2563eb",
      bg: "#eff6ff",
      borderColor: "#bfdbfe",
      description: "Comprehensive guidance selecting suitable undergraduate, master's, or PhD university programs and completing official portal applications.",
      includes: [
        "University & program selection matching",
        "Admission requirement review",
        "Application portal guidance",
        "Application form assistance",
        "Document checklist verification"
      ],
      bestFor: "Students who need support choosing universities/programs and completing admission applications.",
      ctaText: "Apply With Us (General Form)",
      ctaLink: "https://forms.gle/gwHnj7gJvWNfUMSH7",
      isTelegram: false
    },
    {
      id: "mentorship",
      title: "2. Personal Mentorship",
      badge: "1-ON-1 GUIDANCE",
      icon: Users,
      color: "#059669",
      bg: "#ecfdf5",
      borderColor: "#a7f3d0",
      description: "Personalized 1-on-1 advice and application strategy based on your academic background, career goals, and preferred international destinations.",
      includes: [
        "Profile assessment & GPA evaluation",
        "Opportunity & scholarship matching",
        "Application strategy & timeline",
        "One-to-one application planning",
        "Direct question & answer support"
      ],
      bestFor: "Applicants who need personalized direction based on their goals and background.",
      ctaText: "Message Me on Telegram",
      ctaLink: "https://t.me/Mk_8958",
      isTelegram: true
    },
    {
      id: "doc-prep",
      title: "3. Document Preparation Support",
      badge: "AUTHENTIC PROFILES",
      icon: FileCheck,
      color: "#d97706",
      bg: "#fffbeb",
      borderColor: "#fde68a",
      description: "Assisting applicants in preparing, editing, and formatting authentic academic and professional application documents.",
      includes: [
        "Curriculum Vitae (CV) preparation & formatting",
        "Motivation letter / personal statement support",
        "Recommendation letter drafting guidance",
        "Personal statement editing and structuring",
        "Application-specific document alignment"
      ],
      bestFor: "Applicants who want to present their academic and professional profile clearly and effectively.",
      disclaimer: "Only authentic information provided by the applicant is used. We never fabricate qualifications or documents.",
      ctaText: "Message Me on Telegram",
      ctaLink: "https://t.me/Mk_8958",
      isTelegram: true
    },
    {
      id: "full-support",
      title: "4. Full Application Support",
      badge: "END-TO-END",
      icon: Sparkles,
      color: "#7c3aed",
      bg: "#f5f3ff",
      borderColor: "#ddd6fe",
      description: "End-to-end guidance accompanying you through the entire application process from opportunity selection through document preparation to final portal submission.",
      includes: [
        "Opportunity & university selection",
        "Eligibility & requirement review",
        "Document preparation guidance",
        "Application portal submission assistance",
        "Deadline tracking & final review"
      ],
      bestFor: "Applicants who want comprehensive support from program selection through submission.",
      ctaText: "Apply With MK Tips",
      ctaLink: "https://forms.gle/gwHnj7gJvWNfUMSH7",
      isTelegram: false
    },
    {
      id: "visa-prep",
      title: "5. Embassy & Visa Preparation",
      badge: "VISA STAGE",
      icon: ShieldCheck,
      color: "#db2777",
      bg: "#fdf2f8",
      borderColor: "#fbcfe8",
      description: "Organizing your visa dossier and preparing for embassy appointments following university admission or funding award.",
      includes: [
        "Visa document checklist review",
        "Financial document organization guidance",
        "Visa application form preparation",
        "Embassy interview preparation & Q&A",
        "Pre-departure guidance"
      ],
      bestFor: "Applicants who have received admission or funding and are preparing for the embassy visa stage.",
      disclaimer: "Visa decisions remain solely at the discretion of the respective embassy/consulate.",
      ctaText: "Contact MK Tips on Telegram",
      ctaLink: "https://t.me/Mk_8958",
      isTelegram: true
    }
  ];

  return (
    <section style={{ marginBottom: '48px' }}>
      {/* Dark Navy Header Banner matching Apply With Us page */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '24px',
        padding: '40px 32px',
        marginBottom: '36px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.12)'
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
            marginBottom: '12px'
          }}>
            <Sparkles size={14} color="#f59e0b" />
            <span>MK TIPS GUIDANCE SERVICES</span>
          </div>

          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
            Our Services
          </h2>

          <p style={{ fontSize: '1.02rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
            Practical guidance and structured application support to help you navigate admissions, scholarships, document preparation, and visa stages with clarity and confidence.
          </p>
        </div>
      </div>

      {/* Grid of 5 Services */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {services.map((s) => (
          <div key={s.id} style={{
            backgroundColor: '#ffffff',
            border: `1px solid ${s.borderColor}`,
            borderRadius: '24px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
            position: 'relative'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '16px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: s.bg,
                  color: s.color,
                  border: `1px solid ${s.borderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <s.icon size={24} />
                </div>

                <span style={{
                  backgroundColor: s.bg,
                  color: s.color,
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '10px',
                  border: `1px solid ${s.borderColor}`
                }}>
                  {s.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                {s.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55, marginBottom: '18px' }}>
                {s.description}
              </p>

              {/* What's Included */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
                  What's Included:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {s.includes.map((inc, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                      <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div style={{
                backgroundColor: s.bg,
                border: `1px solid ${s.borderColor}`,
                borderRadius: '14px',
                padding: '10px 14px',
                fontSize: '0.82rem',
                color: '#1e293b',
                marginBottom: '18px'
              }}>
                <strong>Best For:</strong> {s.bestFor}
              </div>

              {s.disclaimer && (
                <div style={{ fontSize: '0.78rem', color: '#b45309', fontStyle: 'italic', marginBottom: '18px' }}>
                  * {s.disclaimer}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href={s.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: s.isTelegram ? '#0284c7' : '#2563eb',
                color: '#ffffff',
                padding: '12px 20px',
                borderRadius: '14px',
                fontSize: '0.88rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: s.isTelegram ? '0 4px 12px rgba(2, 132, 199, 0.3)' : '0 4px 12px rgba(37, 99, 235, 0.3)'
              }}
            >
              {s.isTelegram ? <Send size={16} /> : <ExternalLink size={16} />}
              <span>{s.ctaText}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
