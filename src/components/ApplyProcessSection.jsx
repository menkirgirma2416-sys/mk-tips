import React from 'react';
import { ExternalLink, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function ApplyProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Tell Us About Yourself",
      description: "Share your academic background, goals, field of interest, and preferred study or career destination."
    },
    {
      step: "02",
      title: "Find the Right Opportunity",
      description: "Identify suitable scholarships, universities, fellowships, internships, or other international programs matching your background."
    },
    {
      step: "03",
      title: "Prepare Your Application",
      description: "Get structured support with CV improvement, motivation letters, document checklists, and application strategy."
    },
    {
      step: "04",
      title: "Submit With Confidence",
      description: "Review your application carefully, ensure all requirements are satisfied, and complete portal submission."
    },
    {
      step: "05",
      title: "Prepare for the Next Step",
      description: "Receive practical guidance for admission follow-up, embassy documents, visa preparation, and pre-departure planning."
    }
  ];

  return (
    <section style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      borderRadius: '24px',
      padding: '48px 32px',
      margin: '48px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
          border: '1px solid rgba(37, 99, 235, 0.4)',
          color: '#60a5fa',
          padding: '4px 14px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 800,
          marginBottom: '12px'
        }}>
          <Sparkles size={14} color="#f59e0b" />
          <span>OUR 5-STEP GUIDANCE PROCESS</span>
        </div>

        <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#ffffff', margin: '0 0 12px' }}>
          Apply With MK Tips
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
          A clear, step-by-step approach to help you build a stronger application.
        </p>
      </div>

      {/* 5 Steps Timeline Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {steps.map((st, idx) => (
          <div key={idx} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '18px',
            padding: '24px',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#f59e0b',
              marginBottom: '12px',
              fontFamily: 'Outfit, sans-serif'
            }}>
              {st.step}
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              {st.title}
            </h3>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              {st.description}
            </p>
          </div>
        ))}
      </div>

      {/* Process CTA Button */}
      <div style={{ textAlign: 'center' }}>
        <a
          href="https://forms.gle/6EermLr5nm9ef3y98"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '16px 36px',
            borderRadius: '14px',
            fontSize: '1rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
            textDecoration: 'none'
          }}
        >
          <span>Apply With MK Tips (Google Form)</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}
