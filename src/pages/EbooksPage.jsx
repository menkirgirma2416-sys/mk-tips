import React from 'react';
import { COVER_DATA_URI } from '../assets/imageAssets';
import { BookOpen, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Download, Award } from 'lucide-react';

export default function EbooksPage() {
  const ebooks = [
    {
      id: "italy-france-guide",
      volume: "VOLUME 1",
      title: "A-Z Step by Step Guide to Fully Funded Scholarships in Italy & France",
      subtitle: "Official University Admissions, DSU Regional Grants, and Visa Dossier Preparation",
      description: "A comprehensive, practical guide written to assist applicants navigating Italian university admissions, tuition waivers, and regional fully funded scholarships (DSU, EDISU, ERGO).",
      coverImage: "/assets/images/mk-ebook-cover.png",
      fallbackCover: COVER_DATA_URI,
      link: "https://ye-buna.com/mktips",
      price: "Available on Ye-Buna",
      targetAudience: [
        "Students seeking fully funded Bachelor's and Master's degrees in Europe",
        "Applicants without IELTS/TOEFL certificates applying with Medium of Instruction (MOI)",
        "Applicants prioritizing zero application fee university programs",
        "Ethiopian & international students preparing embassy visa dossiers"
      ],
      topics: [
        "University search & program selection",
        "DSU / EDISU regional scholarship requirements",
        "Document authentication & legalisation guide",
        "CIMEA comparability certificate process",
        "Universitaly portal pre-enrollment steps",
        "Embassy visa appointment checklist"
      ]
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
            backgroundColor: '#f59e0b',
            color: '#0f172a',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            <Sparkles size={14} color="#0f172a" />
            <span>PRACTICAL EDUCATIONAL GUIDES</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            MK Ebooks & Guides
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
            Structured step-by-step e-books created to guide applicants through European university admissions, scholarship applications, document preparation, and visa procedures.
          </p>
        </div>
      </div>

      {/* Main Ebook Card Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {ebooks.map((e) => (
          <div key={e.id} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #bfdbfe',
            borderRadius: '28px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(37, 99, 235, 0.06)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}>
              {/* Cover Image */}
              <div style={{ textAlign: 'center' }}>
                <img
                  src={e.coverImage}
                  alt={e.title}
                  onError={(err) => {
                    if (err.target.src !== e.fallbackCover) {
                      err.target.src = e.fallbackCover;
                    }
                  }}
                  style={{
                    maxHeight: '420px',
                    maxWidth: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
                    border: '1px solid #cbd5e1',
                    margin: '0 auto',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Info Details */}
              <div>
                <span style={{
                  backgroundColor: '#f59e0b',
                  color: '#0f172a',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  marginBottom: '12px'
                }}>
                  {e.volume}
                </span>

                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                  {e.title}
                </h2>

                <p style={{ fontSize: '0.98rem', fontWeight: 700, color: '#2563eb', marginBottom: '16px' }}>
                  {e.subtitle}
                </p>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                  {e.description}
                </p>

                {/* Who It Is Useful For */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                    Who It Is Useful For:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {e.targetAudience.map((target, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                        <CheckCircle2 size={16} color="#10b981" style={{ shrink: 0, marginTop: '2px' }} />
                        <span>{target}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What You Will Learn */}
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                    Key Modules & Topics Covered:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                    {e.topics.map((topic, idx) => (
                      <div key={idx} style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '8px 12px', fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8' }}>
                        ✓ {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)'
                  }}
                >
                  <span>Get the Ebook on Ye-Buna</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
