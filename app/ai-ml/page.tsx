"use client";

import Link from "next/link";
import logo from "../img/LTPLLogo.png";
import AIMLImg from "../img/mature_ai_hero.png";
import { useState, useEffect, useRef } from "react";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

function FadeInSection(props: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
        willChange: "opacity, transform",
      }}
    >
      {props.children}
    </div>
  );
}

export default function AiMlPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <main>

      {/* Hero Section */}
      <FadeInSection>
        <section className="hero hero-blue">
          <div className="hero-orbits" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Transform Business One with AI-Powered SAP B1 Assistant</h1>
              <p>
                Empower your operations with our SAP B1 Assistant. Seamlessly integrating advanced GPT capabilities with SAP Business One, it offers intuitive, single-window access to real-time insights, automated workflows, and data-driven actions.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://calendly.com/bizpluscrm/freedemo">Book an Appointment</a>
                <a className="button button-secondary" href="#contact">Contact Us</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-ring" aria-hidden="true" />
              <div className="visual-card">
                <img src={AIMLImg.src} alt="SAP B1 Assistant AI Integration" />
              </div>
              <div className="floating-stat stat-a">
                <strong>GPT</strong>
                Integration
              </div>
              <div className="floating-stat stat-b">
                <strong>1-Click</strong>
                Reporting
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* What is SAP B1 Assistant? */}
      <FadeInSection>
        <section className="company-intro">
          <div className="intro-container">
            <div className="intro-content">
              <span className="eyebrow">Introduction</span>
              <h2>What is SAP B1 Assistant?</h2>
              <p>
                SAP Business One is powerful, but navigating its modules and generating reports can be complex.
                Our SAP B1 Assistant removes this complexity by allowing you to interact with SAP B1 in natural language – powered by GPT.
              </p>
              <p className="intro-highlight">Whether it’s fetching reports, checking inventory, or generating quotations, everything can be done from one assistant window.</p>
            </div>

            <div className="intro-stats">
              <div className="stat-box">
                <strong>Direct SAP B1 Integration</strong>
                <span>Seamlessly syncs with your core ERP database and modules</span>
              </div>
              <div className="stat-box">
                <strong>Contextual Actioning</strong>
                <span>Generate quotes, orders, and reports via interactive chat</span>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Key Features */}
      <FadeInSection>
        <section className="about">
          <div className="section-heading">
            <span className="eyebrow">Capabilities</span>
            <h2>Key Features</h2>
          </div>

          <div className="about-grid">
            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.1s' }}>
              <div className="feature-icon icon-ai" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Querying</small>
              <h3 style={{ fontSize: '20px' }}>AI-Powered Querying</h3>
              <p style={{ fontSize: '14px' }}>Ask in plain English, get instant SAP results.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.2s' }}>
              <div className="feature-icon icon-chart icon-ai" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Reporting</small>
              <h3 style={{ fontSize: '20px' }}>Instant Reporting</h3>
              <p style={{ fontSize: '14px' }}>Sales, finance, stock, purchase – on demand.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.3s' }}>
              <div className="feature-icon icon-automation icon-ai" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Automation</small>
              <h3 style={{ fontSize: '20px' }}>Workflow Automation</h3>
              <p style={{ fontSize: '14px' }}>Trigger tasks & approvals without switching modules.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.4s' }}>
              <div className="feature-icon icon-integration icon-ai" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Access</small>
              <h3 style={{ fontSize: '20px' }}>Single-Window Access</h3>
              <p style={{ fontSize: '14px' }}>Work faster with fewer clicks and no confusion.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Why Choose SAP B1 Assistant? (Benefits) */}
      <FadeInSection>
        <section className="why-choose-us">
          <div className="section-heading">
            <span className="eyebrow">Benefits</span>
            <h2 style={{ whiteSpace: 'nowrap' }}>Why Choose SAP B1 Assistant?</h2>
          </div>
          <div className="impact-strip">
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.1s' }}>
              <h3>Save Time</h3>
              <p>Bypass complex navigation paths and endless menus. The SAP B1 Assistant interprets natural language queries instantly, fetching the exact data you need in seconds without disrupting your workflow.</p>
            </div>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.2s' }}>
              <h3>Boost Productivity</h3>
              <p>Empower your entire team with conversational access to core ERP functions. Automate routine data entry and information retrieval so your staff can focus on high-value, strategic tasks.</p>
            </div>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.3s' }}>
              <h3>Reduce Training Costs</h3>
              <p>Dramatically lower the learning curve for new hires. Since employees can simply "ask" the Assistant for what they need, extensive SAP expertise and prolonged training periods are no longer required.</p>
            </div>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.4s' }}>
              <h3>Make Faster Decisions</h3>
              <p>Bring critical business intelligence directly to your fingertips. The Assistant delivers real-time insights, custom reports, and live data summaries instantly, enabling rapid, data-driven decision making.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Who Can Benefit */}
      <FadeInSection>
        <section className="about">
          <div className="section-heading">
            <span className="eyebrow">Audience</span>
            <h2>Who Can Benefit?</h2>
          </div>

          <div className="about-grid">
            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.1s' }}>
              <small>Existing Users</small>
              <h3 style={{ fontSize: '20px' }}>SMEs and Enterprises</h3>
              <p style={{ fontSize: '14px' }}>For businesses already using SAP Business One.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.2s' }}>
              <small>Adoption Challenges</small>
              <h3 style={{ fontSize: '20px' }}>Complex ERP Environments</h3>
              <p style={{ fontSize: '14px' }}>Businesses struggling with ERP adoption & user complexity.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.3s' }}>
              <small>Leadership</small>
              <h3 style={{ fontSize: '20px' }}>Decision Makers</h3>
              <p style={{ fontSize: '14px' }}>For leaders who need faster access to business insights.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.4s' }}>
              <small>Operations</small>
              <h3 style={{ fontSize: '20px' }}>Operational Teams</h3>
              <p style={{ fontSize: '14px' }}>Teams looking for productivity & seamless workflow automation.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection>
        <section className="services">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>FAQ SAP B1 Assistant</h2>
          </div>
          <div style={{ width: 'min(var(--content), 800px)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'What is SAP B1 Assistant?', a: 'A natural-language assistant that queries and acts on SAP Business One data using GPT-backed intelligence.' },
              { q: 'Do I need to change my existing SAP setup?', a: 'No major changes are required — we integrate securely with your existing system.' },
              { q: 'Is it secure?', a: 'Yes — connections use secure APIs and access controls; we follow best practices for data privacy.' },
              { q: 'Can it be customized?', a: 'Absolutely — the assistant is customizable to domain language, templates, and workflows.' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="impact-card" 
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)} 
                style={{ 
                  cursor: 'pointer', 
                  minHeight: 'auto', 
                  padding: '24px 32px',
                  transition: 'all 0.3s ease',
                  border: openFAQ === idx ? '1px solid var(--blue)' : '1px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '18px', color: openFAQ === idx ? 'var(--blue)' : 'var(--ink)' }}>{item.q}</h3>
                  <span style={{ fontSize: '24px', fontWeight: 300, color: 'var(--blue)', transform: openFAQ === idx ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                    +
                  </span>
                </div>
                <div style={{ 
                  marginTop: openFAQ === idx ? '16px' : '0', 
                  maxHeight: openFAQ === idx ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease', 
                  color: 'var(--muted)',
                  opacity: openFAQ === idx ? 1 : 0
                }}>
                  <p style={{ margin: 0, lineHeight: 1.6 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Final CTA */}
      <FadeInSection>
        <section className="homepage-cta">
          <div className="homepage-cta-content">
            <h2>Ready to simplify your Business with AI?</h2>
            <p>Let Landmark Techedge help you get started.</p>
            <div className="cta-buttons">
              <a href="https://calendly.com/bizpluscrm/freedemo" className="button button-primary">
                Book an Appointment
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="contact">
          <div className="section-heading">
            <span className="eyebrow">CONTACT US</span>
            <h2>Get in Touch</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-panel">
              <div>
                <h3>Location:</h3>
                <p>Dhruta Complex, Office 104 & 105, Narayan Peth, Pune, Maharashtra.</p>
              </div>
              <div>
                <h3>Contact Us:</h3>
                <p>+91 70303 23838 <br/> +91 99213 88999</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.307581162119!2d73.84057107703!3d18.51499762444613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c151e106c94d%3A0x15033b3fb4b0f620!2sDhruta%20Complex!5e0!3m2!1sen!2sin!4v1737194392520"
                title="LandMark TechEdge location"
                loading="lazy"
              />
            </div>

            <form className="contact-form">
              <label>
                Your Name
                <input type="text" name="name" required />
              </label>
              <label>
                Your Email
                <input type="email" name="email" required />
              </label>
              <label>
                Subject
                <input type="text" name="subject" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={7} required />
              </label>
              <button className="button button-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="footer">
        <h2>LandMark TechEdge</h2>
        <div>
          <a href="Privacy.html">Privacy Policy</a>
          <a href="Terms.html">Terms &amp; Conditions</a>
          <a href="Refund.html">Refund Policy</a>
        </div>
        <p>Copyright LandMark TechEdge Pvt. Ltd. All Rights Reserved.</p>
      </footer>

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}
