"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const features = [
  { id: "insights", title: "Business Insights", desc: "Analytical, operational and collaborative dashboards." },
  { id: "automation", title: "Automation", desc: "Automate lead routing, follow-ups and repetitive tasks." },
  { id: "integrations", title: "Integrations", desc: "Connect websites, marketplaces and social channels." },
  { id: "assignment", title: "Lead Assignment", desc: "Smart assignment to the right reps instantly." },
  { id: "comm", title: "Communication Tools", desc: "Email, WA, SMS and IVR workflows in one place." },
  { id: "notify", title: "Notifications", desc: "Real-time alerts and contextual nudges." },
  { id: "sales", title: "Sales Analytics", desc: "Pipeline metrics, conversion and revenue insights." },
  { id: "mobile", title: "Android App", desc: "Fast mobile workflows for field teams." },
];

export default function AdvantagesShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [12, -12]);
  const rotateY = useTransform(mouseX, [-200, 200], [-12, 12]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section className="advantages-showcase">
      <div className="advantages-container">
        <div className="section-heading">
          <h2>Advantages of BizplusCRM</h2>
        </div>

        <div ref={containerRef} className="adv-stage">
          {/* background blobs */}
          <div className="adv-blobs">
            <div className="adv-blob" />
          </div>

          <motion.div style={{ rotateX, rotateY }} className="adv-layout">
            <div className="adv-media-col">
              <motion.div
                initial={{ y: 8, scale: 0.995 }}
                animate={{ y: [0, -8, 0], scale: [1, 1.01, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="adv-media-wrapper"
              >
                <div className="adv-video-frame">
                  <div className="adv-video-embed" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src="https://www.youtube.com/embed/DST5Oadpqa4"
                      title="BizPlusCRM video"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="ring-overlay" />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="adv-mini-card adv-mini-dashboard"
                  >
                    <div className="adv-mini-label">Dashboard</div>
                    <div className="adv-mini-chart" />
                    <div className="adv-mini-metric">Conversion 86%</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.12 }}
                    className="adv-mini-card adv-mini-notif"
                  >
                    <div className="adv-mini-label">Notifications</div>
                    <div className="adv-mini-notif-row"><span className="adv-badge">3</span><span>New lead alerts</span></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.18 }}
                    className="adv-mini-card adv-mini-mobile"
                  >
                    <div className="adv-mini-label">Mobile</div>
                    <div className="adv-mini-app">App</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="adv-side-col">
              <div className="adv-lead">Modern SaaS showcase with premium glass surfaces and motion.</div>
              <div className="adv-feature-grid">
                {features.slice(0, 4).map((f, i) => (
                  <motion.button
                    key={f.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.99 }}
                    className="adv-feature-card"
                    style={{ transition: 'box-shadow 0.22s ease, transform 0.18s ease' }}
                  >
                    <div className="adv-feature-card-inner">
                      <div className="adv-feature-badge">{i + 1}</div>
                      <div>
                        <div className="adv-feature-title">{f.title}</div>
                        <div className="adv-feature-desc">{f.desc}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="adv-feature-grid small">
                {features.slice(4).map((f, i) => (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                    className="adv-feature-card small"
                  >
                    <div className="adv-feature-card-inner">
                      <div className="adv-feature-badge small">{i + 5}</div>
                      <div>
                        <div className="adv-feature-title">{f.title}</div>
                        <div className="adv-feature-desc">{f.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="adv-stats">
                <motion.div className="adv-stat-card pulse" initial={{ scale: 0.98 }} animate={{ scale: [0.98, 1.02, 0.98] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="adv-stat-label">Live Customers</div>
                  <div className="adv-stat-value">1,254</div>
                  <div className="adv-stat-note">Active accounts this month</div>
                </motion.div>

                <motion.div className="adv-stat-card" initial={{ x: 8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <div className="adv-stat-label">Avg Response</div>
                  <div className="adv-stat-value">32s</div>
                  <div className="adv-stat-note">Lead response time</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
