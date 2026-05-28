"use client";

import SiteHeader from "../components/SiteHeader";
import ContactSection from "../components/ContactSection";
import teamImg from "../img/team.jpg";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const programCards = [
  {
    title: "Reseller Program",
    text: "Offer Landmark solutions to your existing customers with sales enablement, product guidance, and support from our team.",
  },
  {
    title: "Distributor Program",
    text: "Expand regional reach with a channel model built for partners who manage networks of resellers and business customers.",
  },
  {
    title: "Affiliate Program",
    text: "Introduce qualified opportunities and earn through a simple referral-led model backed by Landmark's delivery team.",
  },
];

const benefits = [
  "New revenue opportunities through backup, disaster recovery, and productivity solutions",
  "Flexible packaging for customer segments, industries, and local sales channels",
  "Pre-sales guidance, product positioning, and technical support",
  "Solutions for PC backup, server backup, disaster recovery, and Virtual CD/DVD emulation",
  "Partner-friendly collaboration for campaigns, demonstrations, and customer onboarding",
  "Long-term relationship model focused on service quality and repeat business",
];

export default function ResellerProgramPage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero hero-blue">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Distributor / Reseller</span>
            <h1>Landmark Techedge Reseller, Distributor and Affiliate Programs</h1>
            <p>
              Partner with Landmark Techedge to bring flexible, custom technology solutions to your customers while
              creating new revenue opportunities through your established sales channels.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#partner-form">
                Become a Partner
              </a>
              <a className="button button-secondary" href={whatsappHref}>
                Talk on WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-ring" aria-hidden="true" />
            <div className="visual-card">
              <img src={teamImg.src} alt="Landmark Techedge partner team" />
            </div>
            <div className="floating-stat stat-a">
              <strong>Channel</strong>
              Growth
            </div>
            <div className="floating-stat stat-b">
              <strong>Partner</strong>
              Support
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "76px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div className="section-heading" style={{ marginBottom: 28 }}>
            <span className="eyebrow">Overview</span>
            <h2>Flexible solutions. Strong channels. Shared growth.</h2>
            <p>
              Landmark Technology delivers flexible, custom solutions to top companies, adding value to their products
              and services while helping partners unlock new revenue streams. Through reseller, distributor, and
              affiliate relationships, we broaden market reach and help customers adopt practical solutions for backup,
              disaster recovery, and Virtual CD/DVD emulation.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {programCards.map((program) => (
              <article className="impact-card" style={{ padding: 24 }} key={program.title}>
                <h3 style={{ marginTop: 0 }}>{program.title}</h3>
                <p style={{ color: "var(--muted)", marginBottom: 0 }}>{program.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "76px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 36, alignItems: "start" }}>
          <div>
            <span className="eyebrow">Why Partner With Us</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.12, margin: "12px 0 14px" }}>
              Built for partners who already know their markets.
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 17 }}>
              We are always looking for new and imaginative ways to present, package, and market our solutions. If you
              serve businesses that need reliable IT continuity, data protection, and productivity tools, Landmark can
              help you add a stronger solution portfolio to your customer conversations.
            </p>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {benefits.map((benefit) => (
              <div className="impact-card" style={{ padding: "16px 18px" }} key={benefit}>
                <p style={{ margin: 0, color: "var(--ink)", fontWeight: 650 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <ContactSection />

      <footer className="footer">
        <h2>LandMark TechEdge</h2>
        <div>
          <a href="/Privacy.html">Privacy Policy</a>
          <a href="/Terms.html">Terms &amp; Conditions</a>
          <a href="/Refund.html">Refund Policy</a>
        </div>
        <p>Copyright LandMark TechEdge Pvt. Ltd. All Rights Reserved.</p>
      </footer>

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span>WhatsApp</span>
        <strong>Chat Now</strong>
      </a>
    </main>
  );
}
