import React from 'react';
import { Send, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function TelegramSection() {
  return (
    <section style={{
      backgroundColor: 'linear-gradient(135deg, #0088cc 0%, #006699 100%)',
      background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      color: '#ffffff',
      borderRadius: '24px',
      padding: '40px 32px',
      margin: '40px 0',
      boxShadow: '0 12px 30px rgba(2, 132, 199, 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '24px'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 800,
          marginBottom: '12px'
        }}>
          <Send size={14} />
          <span>OFFICIAL TELEGRAM COMMUNITY</span>
        </div>

        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 10px' }}>
          Join Our Telegram Channel
        </h2>

        <p style={{ fontSize: '1rem', color: '#e0f2fe', margin: 0, lineHeight: 1.6 }}>
          Get scholarship updates, opportunities, application tips, guidance, and announcements directly through our Telegram channel.
        </p>
      </div>

      {/* Telegram Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <a
          href="https://t.me/mktips1224"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#ffffff',
            color: '#0369a1',
            padding: '14px 28px',
            borderRadius: '14px',
            fontSize: '0.95rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            textDecoration: 'none'
          }}
        >
          <Send size={18} color="#0369a1" />
          <span>Join Telegram Channel</span>
        </a>

        <a
          href="https://t.me/Mk_8958"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: '14px',
            fontSize: '0.9rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none'
          }}
        >
          <MessageCircle size={18} />
          <span>Contact @Mk_8958</span>
        </a>
      </div>
    </section>
  );
}
