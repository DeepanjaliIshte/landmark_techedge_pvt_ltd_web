"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType } from "react";
import styles from "./FeatureBentoGrid.module.css";

// Small inlined icon components to avoid runtime vendor-chunk resolution issues with lucide-react
const IconBriefcase: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconChart: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 14l3-4 3 6 4-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBot: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="8.5" cy="12.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="12.5" r="1" fill="currentColor" />
  </svg>
);

const IconBell: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M15 17H9a3 3 0 0 1-3-3V10a6 6 0 0 1 12 0v4a3 3 0 0 1-3 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWorkflow: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconLayers: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2l8 6-8 6-8-6 8-6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 14l8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22l8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

const IconQuote: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M7 7h10v6H7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 11h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSparkle: ComponentType<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2l1.8 4L18 8l-4.2 2L12 14l-1.8-4L6 8l4.2-2L12 2z" stroke="currentColor" strokeWidth="1" />
  </svg>
);

type FeatureCard = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  span: string;
  kind: "lead" | "analytics" | "automation" | "notify" | "tasks" | "integrations" | "mobile" | "quotation";
  stat: string;
  note: string;
};

const featureCards: FeatureCard[] = [
  {
    id: "enquiry",
    title: "Enquiry Management",
    description: "Capture, qualify and route incoming leads with a premium command-center feel.",
    icon: IconBriefcase,
    span: styles.spanLarge,
    kind: "lead",
    stat: "128 leads today",
    note: "AI routing on",
  },
  {
    id: "sales",
    title: "Sales Analytics",
    description: "See pipeline movement, conversion ratios and revenue health at a glance.",
    icon: IconChart,
    span: styles.spanTall,
    kind: "analytics",
    stat: "+24%",
    note: "week over week",
  },
  {
    id: "marketing",
    title: "Marketing Automation",
    description: "Launch email, WhatsApp, SMS, and Instagram campaign workflows with automated triggers.",
    icon: IconBot,
    span: styles.spanWide,
    kind: "automation",
    stat: "6 platforms",
    note: "ready to scale",
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Keep teams aligned with real-time alerts, reminders and smart nudges.",
    icon: IconBell,
    span: styles.spanCompact,
    kind: "notify",
    stat: "98% delivered",
    note: "under 1 min",
  },
  {
    id: "tasks",
    title: "Task Management",
    description: "A modern execution layer for follow-ups, assignments and daily progress.",
    icon: IconWorkflow,
    span: styles.spanCompact,
    kind: "tasks",
    stat: "42 tasks",
    note: "due today",
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect web forms, socials and marketplaces into a single CRM flow.",
    icon: IconLayers,
    span: styles.spanWide,
    kind: "integrations",
    stat: "12 sources",
    note: "one pipeline",
  },
  {
    id: "mobile",
    title: "Android App",
    description: "A responsive mobile experience for fast updates, visits and field ops.",
    icon: IconPhone,
    span: styles.spanMedium,
    kind: "mobile",
    stat: "4.9 rating",
    note: "mobile first",
  },
  {
    id: "quotation",
    title: "Quotations",
    description: "Generate, track, and dispatch beautiful PDF quotations with built-in discount & taxes controls.",
    icon: IconQuote,
    span: styles.spanCompact,
    kind: "quotation",
    stat: "₹4.8L sent",
    note: "this month",
  },
];

function MiniPreview({ kind }: { kind: FeatureCard["kind"] }) {
  if (kind === "lead") {
    return (
      <div className={styles.previewLead} aria-hidden="true">
        <div className={styles.previewPill}>Hot</div>
        <div className={styles.previewFlow}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.previewBars}>
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  if (kind === "analytics") {
    return (
      <div className={styles.previewChart} aria-hidden="true">
        <div className={styles.previewChartGrid} />
        <svg viewBox="0 0 320 140" className={styles.previewSvg}>
          <path d="M10 130 C 80 110, 150 50, 220 30 C 260 20, 290 10, 310 5" />
          <path d="M10 140 C 80 120, 150 60, 220 40 C 260 30, 290 20, 310 15" />
        </svg>
      </div>
    );
  }

  if (kind === "automation") {
    return (
      <div className={styles.previewAutomation} aria-hidden="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '12px', minHeight: '120px' }}>
        {['Email', 'WA', 'SMS', 'Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
          <div key={platform} className={styles.previewNode} style={{ minHeight: '38px', borderRadius: '8px', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
            {platform}
          </div>
        ))}
      </div>
    );
  }

  if (kind === "notify") {
    return (
      <div className={styles.previewNotifications} aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '130px', padding: '12px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '14px',
          padding: '10px 12px',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          width: '100%',
          maxWidth: '220px',
        }}>
          <div style={{
            background: '#10b981',
            borderRadius: '8px',
            width: '26px',
            height: '26px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v2M5 5l1.5 1.5M19 5l-1.5 1.5M4 14a8 8 0 0 1 16 0v4H4v-4z"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/></svg>
          </div>
          <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#1f2937' }}>BizPlusCRM</span>
              <span style={{ fontSize: '8px', color: '#9ca3af' }}>now</span>
            </div>
            <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#4b5563', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 500 }}>
              🔥 New Lead: John Doe
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "quotation") {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '12px', minHeight: '130px', justifyContent: 'center' }}>
        {/* Premium Quotation Preview Block */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '10px 12px',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          border: '1px solid rgba(0,0,0,0.04)',
          textAlign: 'left'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', borderBottom: '1px dashed #e2e8f0', paddingBottom: '6px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#1e40af', letterSpacing: '0.05em' }}>QUOTE #8902</span>
            <span style={{ fontSize: '8px', background: '#e0f2fe', color: '#0369a1', padding: '2px 6px', borderRadius: '999px', fontWeight: 700 }}>Sent</span>
          </div>
          
          {/* Invoice Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px' }}>
              <span style={{ color: '#4b5563' }}>Enterprise CRM (10 users)</span>
              <span style={{ fontWeight: 700, color: '#111827' }}>₹45,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px' }}>
              <span style={{ color: '#4b5563' }}>Setup & Onboarding</span>
              <span style={{ fontWeight: 700, color: '#111827' }}>₹5,000</span>
            </div>
          </div>
          
          {/* Total */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px', borderTop: '1px solid #f1f5f9' }}>
            <span style={{ fontSize: '9px', color: '#9ca3af', fontWeight: 600 }}>Total Amount</span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981' }}>₹50,000</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "tasks") {
    return (
      <div className={styles.previewTasks} aria-hidden="true">
        <div><span />Follow up leads</div>
        <div><span />Send quotation</div>
        <div><span />Review pipeline</div>
      </div>
    );
  }

  if (kind === "integrations") {
    return (
      <div className={styles.previewIntegrations} aria-hidden="true">
        <div>Website</div>
        <div>Facebook</div>
        <div>IndiaMART</div>
        <div>WhatsApp</div>
      </div>
    );
  }

  return (
    <div className={styles.previewMobile} aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
      {/* Smartphone Mockup */}
      <div className={styles.previewPhone} style={{ width: '84px', height: '110px', borderRadius: '14px', padding: '6px', background: '#1e293b', boxShadow: '0 8px 24px rgba(15,23,42,0.2)', margin: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', height: '100%' }}>
          <div style={{ height: '3px', background: '#475569', borderRadius: '2px', width: '20px', margin: '0 auto 2px' }} />
          <div style={{ display: 'flex', gap: '3px' }}>
            <div style={{ flex: 1, height: '24px', background: 'rgba(37,99,235,0.2)', borderRadius: '4px', display: 'flex', flexDirection: 'column', padding: '2px', justifyContent: 'center' }}>
              <span style={{ fontSize: '4.5px', color: '#93c5fd', transform: 'scale(0.85)' }}>Leads</span>
              <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: '#fff', transform: 'scale(0.85)' }}>+48%</span>
            </div>
            <div style={{ flex: 1, height: '24px', background: 'rgba(16,185,129,0.2)', borderRadius: '4px', display: 'flex', flexDirection: 'column', padding: '2px', justifyContent: 'center' }}>
              <span style={{ fontSize: '4.5px', color: '#86efac', transform: 'scale(0.85)' }}>Sales</span>
              <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: '#fff', transform: 'scale(0.85)' }}>₹4.2L</span>
            </div>
          </div>
          <span style={{ height: '8px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)' }} />
          <span style={{ height: '8px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', width: '70%' }} />
        </div>
      </div>

      {/* Google Play Store Badge */}
      <div style={{
        background: '#000000',
        borderRadius: '6px',
        padding: '4px 8px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        border: '1px solid rgba(255,255,255,0.12)'
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fff' }}>
          <path d="M3 20.285V3.716c0-.986.818-1.579 1.637-1.053l14.153 8.284a1.2 1.2 0 0 1 0 2.106l-14.153 8.285c-.82.526-1.637-.067-1.637-1.053z"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
          <span style={{ fontSize: '4px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Get it on</span>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#ffffff' }}>Google Play</span>
        </div>
      </div>
    </div>
  );
}

export function FeatureBentoGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-label="Features">
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundBlobOne} aria-hidden="true" />
      <div className={styles.backgroundBlobTwo} aria-hidden="true" />

      <motion.div
        className={styles.inner}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.heading}>
          <span className="eyebrow">Core Modules</span>
          <h2>Built like a modern SaaS command center</h2>
          <p>
            A bento-style feature grid with layered glass cards, animated previews and a premium
            bluish-white system that feels faster and more intelligent.
          </p>
        </div>

        <div className={styles.grid}>
          {featureCards.slice(0, 8).map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.id}
                className={`${styles.card} ${styles.spanFixed}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.01 }}
              >
                <div className={styles.cardGlow} aria-hidden="true" />
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.icon} />
                  </div>
                  <div className={styles.cardStat}>
                    <strong>{card.stat}</strong>
                    <span>{card.note}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>

                <MiniPreview kind={card.kind} />
                <IconSparkle className={styles.sparkle} aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
