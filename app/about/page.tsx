
"use client";
import SiteHeader from "../components/SiteHeader";
import ContactSection from "../components/ContactSection";

import logo2 from "../img/LTPLNewLogo.png";
import visionImg from "../img/Vision.jpg";
import missionImg from "../img/mission1.webp";
import teamImg from "../img/team.jpg";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const strengths = [
  {
    value: "2003",
    label: "Founded in Pune",
  },
  {
    value: "20+",
    label: "Years of delivery",
  },
  {
    value: "360",
    label: "Software, support, and distribution",
  },
];

const focusAreas = [
  "ERP and CRM implementation",
  "Backup and security solutions",
  "Custom software development",
  "Reseller and distributor support",
];

const values = [
  {
    title: "Practical Innovation",
    text: "We design technology around the day-to-day realities of growing businesses, not around buzzwords.",
  },
  {
    title: "Responsive Support",
    text: "Our team stays close after delivery with technical help, training, and channel partner coordination.",
  },
  {
    title: "Long-Term Trust",
    text: "Every engagement is built to keep clients, resellers, and distributors moving with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="about-hero">
        <div className="about-hero-content">
          <span className="eyebrow">Since 2003</span>
          <h1>Technology partners for businesses that want dependable growth.</h1>
          <p>
            Landmark Techedge brings software development, product distribution, implementation, and support together
            from Pune for clients, resellers, and distributors.
          </p>
          <div className="about-hero-actions">
            <a href="/#contact" className="button button-primary">
              Talk To Our Team
            </a>
            <a href="/services" className="button button-secondary">
              Explore Services
            </a>
          </div>
        </div>
        <div className="about-hero-visual" aria-label="Landmark Techedge company overview">
          <div className="about-logo-panel">
            <img src={logo2.src} alt="Landmark Techedge" />
          </div>
          <div className="about-signal-card signal-a">
            <strong>ERP</strong>
            <span>Business systems</span>
          </div>
          <div className="about-signal-card signal-b">
            <strong>CRM</strong>
            <span>Customer operations</span>
          </div>
          <div className="about-signal-card signal-c">
            <strong>IT</strong>
            <span>Support network</span>
          </div>
        </div>
      </section>

      <section className="about-stats" aria-label="Company highlights">
        {strengths.map((item) => (
          <div className="about-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="about-intro">
        <div className="about-intro-copy">
          <span className="eyebrow">Who We Are</span>
          <h2>A software company with distribution strength and implementation discipline.</h2>
          <p>
            Landmark Techedge Pvt. Ltd. is a diversified IT services and software company managed by experienced
            professionals. We help organizations simplify business operations, customer communication, data protection,
            and everyday technology workflows.
          </p>
          <p>
            Our growth has come from delivering products on time, supporting clients after launch, and building strong
            relationships with resellers and distributors across our verticals.
          </p>
        </div>
        <div className="about-focus-panel">
          <h3>What we focus on</h3>
          <ul>
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <div className="section-text">
            <span className="section-kicker">Our Story</span>
            <h2>Built in Pune, shaped by two decades of client delivery.</h2>
            <p>
              Landmark Techedge Pvt Ltd is leading Software Development and Distribution company which is vastly
              diversified and scaled to cover the almost entire gamut of IT services. Established in 2003 and operates
              from Pune. Our Company is managed by a group of professionals. We have grown to be a market leader in our
              verticals. We have been successful because of our ability to deliver our products in a timely manner with
              quality service and technical support to our Clients, Resellers, and Distributors.
            </p>
          </div>
          <div className="section-image">
            <img src={teamImg.src} alt="Landmark Techedge team collaboration" />
          </div>
        </div>
      </section>

      <section className="about-section alternate">
        <div className="section-container">
          <div className="section-image">
            <img src={visionImg.src} alt="Our Vision" />
          </div>
          <div className="section-text">
            <span className="section-kicker">Our Vision</span>
            <h2>Simpler operations, stronger customer communication, greater scale.</h2>
            <p>
              To deliver value to our clients, we focus exclusive on simplifying business operations and customer
              communications as these are the most critical aspects to success. This enable us to build and bring deep
              expertise and resources to help our clients manage business situations in greater scale.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <div className="section-text">
            <span className="section-kicker">Our Mission</span>
            <h2>Build a remarkable company that consistently exceeds expectations.</h2>
            <p>
              Landmark's mission is aim to build a remarkable entrepreneurial company that constantly exceeds the
              expectation of our customer, clients, channel partners, and share holders.
            </p>
          </div>
          <div className="section-image">
            <img src={missionImg.src} alt="Our Mission" />
          </div>
        </div>
      </section>

      <section className="about-section alternate">
        <div className="section-container">
          <div className="section-image">
            <img src={teamImg.src} alt="Meet The Team" />
          </div>
          <div className="section-text">
            <span className="section-kicker">Our People</span>
            <h2>A hands-on team across support, sales, and marketing.</h2>
            <p>
              We're a team of young people based in Pune, maharashtra. Half of us work on the Backup Support, and the
              other half work with the Sales & marketing. We love what we do.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <span className="eyebrow">How We Work</span>
          <h2>Reliable technology work needs clear priorities.</h2>
        </div>
        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div className="services-cta-content">
          <span className="eyebrow">Let&apos;s Talk</span>
          <h2>Ready to modernize your business operations?</h2>
          <p>
            Explore our ERP, CRM, and software solutions with a team that understands implementation, support, and
            long-term growth.
          </p>
          <div className="cta-buttons">
            <a href="/#products" className="button button-tertiary">
              Start Free Trial
            </a>
            <a href="/#contact" className="button button-primary">
              Book Free Demo
            </a>
            <a href="https://calendly.com/bizpluscrm/freedemo" className="button button-secondary">
              Request ERP Demo
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="footer">
        <h2>LandMark TechEdge</h2>
        <div>
          <a href="/Privacy.html">Privacy Policy</a>
          <a href="/Terms.html">Terms & Conditions</a>
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
