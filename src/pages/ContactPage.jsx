import React from 'react';
import { Send, MessageSquare, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const contactLinks = [
    {
      id: "telegram-channel",
      title: "Official Telegram Channel",
      subtitle: "@mktips1224",
      badge: "TELEGRAM CHANNEL",
      badgeBg: "#0284c7",
      description: "Join our official Telegram community for real-time announcements, verified scholarship deadlines, document guides, and admission alerts.",
      link: "https://t.me/mktips1224",
      linkText: "Join Telegram Channel ✈️",
      isPrimary: true
    },
    {
      id: "telegram-contact",
      title: "Personal Telegram Contact",
      subtitle: "@Mk_8958",
      badge: "DIRECT CONTACT",
      badgeBg: "#0f172a",
      description: "Message directly on Telegram for personal mentorship queries, document preparation assistance, or visa prep guidance.",
      link: "https://t.me/Mk_8958",
      linkText: "Message Me on Telegram ✈️",
      isPrimary: false
    },
    {
      id: "tiktok",
      title: "Official TikTok Account",
      subtitle: "@scholarship2112",
      badge: "SHORT VIDEO GUIDES",
      badgeBg: "#000000",
      description: "Follow MK Tips on TikTok for short video walkthroughs, scholarship application tips, and university deadline highlights.",
      link: "https://www.tiktok.com/@scholarship2112?_r=1&_t=ZS-98lyiYFivae",
      linkText: "Follow on TikTok ↗",
      isPrimary: false
    }
  ];

  return (
    <div style={{ padding: '40px 0' }}>
      {/* Dark Navy Header Banner matching Apply With Us page */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '24px',
        padding: '48px 32px',
        marginBottom: '48px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.12)'
      }}>
        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#38bdf8',
            color: '#0f172a',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            <Send size={14} color="#0f172a" />
            <span>CONNECT WITH MK TIPS</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Contact & Community
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
            Connect with MK Tips across official channels for continuous opportunity updates, educational guides, and direct application support.
          </p>
        </div>
      </div>

      {/* Grid of Contact Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {contactLinks.map((c) => (
          <div key={c.id} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: '32px',
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
                padding: '4px 12px',
                borderRadius: '10px',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                {c.badge}
              </span>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                {c.title}
              </h3>

              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2563eb', marginBottom: '14px' }}>
                {c.subtitle}
              </div>

              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                {c.description}
              </p>
            </div>

            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: c.isPrimary ? '#0284c7' : '#0f172a',
                color: '#ffffff',
                padding: '14px 20px',
                borderRadius: '14px',
                fontSize: '0.9rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: c.isPrimary ? '0 4px 14px rgba(2, 132, 199, 0.3)' : '0 4px 14px rgba(15, 23, 42, 0.2)'
              }}
            >
              <span>{c.linkText}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
