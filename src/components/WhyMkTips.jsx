import React from 'react';
import { Compass, UserCheck, FileCheck, BookOpen, Compass as Compass2, ArrowRight } from 'lucide-react';

export default function WhyMkTips() {
  const benefits = [
    {
      title: "Clear Guidance",
      description: "Understand opportunities and requirements without unnecessary confusion or academic jargon.",
      icon: Compass,
      color: "#2563eb",
      bg: "#eff6ff"
    },
    {
      title: "Personalized Support",
      description: "Receive guidance tailored specifically to your academic background, achievements, and career goals.",
      icon: UserCheck,
      color: "#10b981",
      bg: "#ecfdf5"
    },
    {
      title: "Application Support",
      description: "Get structured help preparing, formatting, and reviewing your application dossier before submission.",
      icon: FileCheck,
      color: "#f59e0b",
      bg: "#fffbeb"
    },
    {
      title: "Practical Resources",
      description: "Access step-by-step guides, application templates, and official MK Ebooks.",
      icon: BookOpen,
      color: "#0ea5e9",
      bg: "#f0f9ff"
    },
    {
      title: "From Application to Next Step",
      description: "Receive practical direction beyond submission, including admission follow-up and embassy visa preparation guidance.",
      icon: Compass2,
      color: "#8b5cf6",
      bg: "#f5f3ff"
    }
  ];

  return (
    <section style={{ padding: '48px 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#eff6ff',
          color: '#2563eb',
          padding: '4px 14px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 800,
          marginBottom: '12px'
        }}>
          <span>WHY APPLICANTS CHOOSE US</span>
        </div>

        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px' }}>
          Why MK Tips?
        </h2>
        <p style={{ fontSize: '1rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
          MK Tips combines opportunity discovery with personalized application support, practical educational guides, and step-by-step guidance.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '20px'
      }}>
        {benefits.map((item, idx) => (
          <div key={idx} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: item.bg,
                color: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <item.icon size={26} />
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
