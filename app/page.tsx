"use client";

import { useEffect, useState } from "react";
import altaroImage from "./img/altaro2.png";
import bizplusLogo from "./img/Logo-bizpluscrm1.png";
import trioImage from "./img/Trio-corporation.jpg";
import logo from "./img/LTPLLogo.png";
import client1 from "./img/client-1.png";
import client2 from "./img/client-2.png";
import client3 from "./img/client-3.png";
import client4 from "./img/client-4.png";
import client5 from "./img/client-5.png";
import client6 from "./img/client-6.png";

const clients = [client1, client2, client3, client4, client5, client6];
const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const slides = [
  {
    eyebrow: "CRM + ERP Platform",
    title: "BizPlusCRM",
    text: "Transform business operations with a connected CRM and ERP platform for teams that need visibility, speed, and control.",
    primary: "Book an Appointment",
    primaryHref: "https://calendly.com/bizpluscrm/freedemo",
    secondary: "Free Trial",
    image: bizplusLogo,
    tone: "blue",
  },
  {
    eyebrow: "Immutable Backup",
    title: "Ransomware protection for critical VM data",
    text: "Secure Hyper-V and VMware workloads with fast backup, replication, immutable cloud storage, and human 24/7 support.",
    primary: "Download Free Trial",
    primaryHref: "#contact",
    secondary: "Explore Altaro",
    image: altaroImage,
    tone: "green",
  },
  {
    eyebrow: "Hospital Management",
    title: "TRIO HIMS",
    text: "A trusted hospital information management system built to simplify operational tasks and healthcare automation.",
    primary: "Book a Free Demo",
    primaryHref: "#contact",
    secondary: "More Info",
    image: trioImage,
    tone: "amber",
  },
  {
    eyebrow: "Microsoft 365 Backup",
    title: "Microsoft 365 backup is a must",
    text: "Avoid accidental loss and ransomware risk by backing up company Microsoft 365 data with a dedicated protection strategy.",
    primary: "Start 30-Day Trial",
    primaryHref: "#contact",
    secondary: "How It Works",
    image: altaroImage,
    tone: "violet",
  },
];

const products = [
  {
    name: "Altaro Backup Software",
    label: "Backup and Replication",
    image: altaroImage,
    body: "Award-winning virtual machine backup and replication for Hyper-V and VMware environments, designed for IT teams, resellers, consultants, and MSPs.",
    points: ["WAN-Optimized Replication", "Continuous Data Protection", "Augmented Inline Deduplication", "24/7 support"],
    action: "Download Trial Version",
  },
  {
    name: "BIZPLUS CRM",
    label: "CRM and ERP",
    image: bizplusLogo,
    body: "A customer relationship management platform for managing client interactions, sales activity, engagement tracking, and actionable business data.",
    points: ["Customer management", "Sales tracking", "Multi-user workflows", "Business automation"],
    action: "Book an Appointment",
  },
  {
    name: "TRIO HIMS",
    label: "Healthcare Automation",
    image: trioImage,
    body: "Healthcare information management software that helps hospitals move from paperwork to a reliable digital workflow for daily operations.",
    points: ["Hospital operations", "Digital records", "Secure data handling", "Patient-care focus"],
    action: "Start Free Trial",
  },
];

const innovationFeatures = [
  {
    icon: "icon-backup",
    value: "50,000+",
    title: "Backup users worldwide",
    text: "Resilient VM protection with replication, immutable cloud storage, and recovery-ready operations.",
  },
  {
    icon: "icon-support",
    value: "30 sec",
    title: "Fast support response",
    text: "Human assistance for critical issues, so teams are not stuck when business continuity matters.",
  },
  {
    icon: "icon-stack",
    value: "3+",
    title: "Business product lines",
    text: "CRM, backup, and healthcare systems supported by services across IVR, AI-ML, and automation.",
  },
  {
    icon: "icon-clock",
    value: "24/7",
    title: "Technology support",
    text: "Always-available support coverage for active operations, deployments, and service continuity.",
  },
];

const services = [
  { name: "AI-ML", icon: "icon-ai", accent: "Predictive automation" },
  { name: "IVR", icon: "icon-ivr", accent: "Smart call flows" },
  { name: "Distributor / Reseller", icon: "icon-channel", accent: "Partner enablement" },
  { name: "Managed backup", icon: "icon-backup", accent: "Recovery readiness" },
  { name: "CRM consulting", icon: "icon-crm", accent: "Customer operations" },
  { name: "Healthcare automation", icon: "icon-health", accent: "Digital workflows" },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  const [activeSlide, setActiveSlide] = useState(0);
  const current = slides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((index) => (index + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="topbar">
        <div>
          <a href="tel:+917030323838">+91 70303 23838</a>
          <a href="tel:+919921388999">+91 99213 88999</a>
        </div>
        <div>
          <a href="https://www.facebook.com/landmarktechs/">Facebook</a>
          <a href="https://www.instagram.com/landmarktechedge/?hl=en">Instagram</a>
          <a href="https://x.com/LTechedge">X</a>
          <a href="https://in.linkedin.com/company/landmark-techedge-pvt-ltd">LinkedIn</a>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="https://landmarksol.com/" aria-label="LandMark TechEdge home">
          <img src={logo.src} alt="LandMark TechEdge" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href={whatsappHref}>WhatsApp</a>
        </nav>
      </header>

      <section id="home" className={`hero hero-${current.tone}`}>
        <div className="hero-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-grid">
          <div className="hero-copy" key={current.title}>
            <span className="eyebrow">{current.eyebrow}</span>
            <h1>{current.title}</h1>
            <p>{current.text}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={current.primaryHref}>
                {current.primary}
              </a>
              <a className="button button-secondary" href={whatsappHref}>
                Chat on WhatsApp
              </a>
            </div>
            <div className="hero-proof" aria-label="Business highlights">
              <span>CRM</span>
              <span>Backup</span>
              <span>HIMS</span>
              <span>IVR</span>
              <span>AI-ML</span>
            </div>
          </div>

          <div className="hero-visual" key={`${current.title}-visual`}>
            <div className="visual-ring" aria-hidden="true" />
            <div className="visual-card">
              <img src={current.image.src} alt={current.title} />
            </div>
            <div className="floating-stat stat-a">
              <strong>50k+</strong>
              businesses
            </div>
            <div className="floating-stat stat-b">
              <strong>24/7</strong>
              support
            </div>
          </div>
        </div>

        <div className="slide-controls" aria-label="Hero slider controls">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              className={index === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              type="button"
              aria-label={`Show ${slide.title}`}
            />
          ))}
        </div>
      </section>

      <section className="intro-band">
        <div>
          <span className="eyebrow">LandMark TechEdge</span>
          <h2>Practical software for backup, CRM, healthcare, IVR, AI, and digital operations.</h2>
        </div>
        <p>
          We help organizations adopt dependable technology platforms that improve customer
          management, data protection, healthcare workflows, and everyday business continuity.
        </p>
      </section>

      <section className="impact-strip" aria-label="Company highlights">
        {innovationFeatures.map((feature) => (
          <article className="impact-card" key={feature.title}>
            <span className={`feature-icon ${feature.icon}`} aria-hidden="true" />
            <strong>{feature.value}</strong>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section id="products" className="products">
        <div className="section-heading">
          <span className="eyebrow">Our Products</span>
          <h2>Solutions designed for real operational work</h2>
        </div>

        <div className="product-stack">
          {products.map((product, index) => (
            <article className={`product-card product-card-${index + 1}`} key={product.name}>
              <div className="product-index">0{index + 1}</div>
              <div className="product-media">
                <span className="product-orbit orbit-one" aria-hidden="true" />
                <span className="product-orbit orbit-two" aria-hidden="true" />
                <img src={product.image.src} alt={product.name} />
              </div>
              <div className="product-copy">
                <span>{product.label}</span>
                <h3>{product.name}</h3>
                <p>{product.body}</p>
                <div className="product-chips">
                  <b>Secure</b>
                  <b>Scalable</b>
                  <b>Supported</b>
                </div>
                <CheckList items={product.points} />
                <a className="text-link" href={index === 1 ? "https://calendly.com/bizpluscrm/freedemo" : "#contact"}>
                  {product.action}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <span className="eyebrow">More Capabilities</span>
          <h2>Technology support around your business stack</h2>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <div className="service-tile" key={item.name}>
              <span className={`feature-icon ${item.icon}`} aria-hidden="true" />
              <small>{item.accent}</small>
              <h3>{item.name}</h3>
              <p>Focused implementation, support, and advisory services from LandMark TechEdge.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="clients" className="clients">
        <div className="section-heading">
          <span className="eyebrow">Our Clients</span>
          <h2>Trusted by growing teams and institutions</h2>
        </div>
        <div className="client-marquee">
          {[...clients, ...clients].map((client, index) => (
            <img src={client.src} alt={`Client ${index + 1}`} key={`${client.src}-${index}`} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2>Start a conversation with our team</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-panel">
            <div>
              <h3>Location</h3>
              <p>Dhruta Complex, Office 104 & 105, Narayan Peth, Pune, Maharashtra.</p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>
                <a href="tel:+917030323838">+91 70303 23838</a>
                <br />
                <a href="tel:+919921388999">+91 99213 88999</a>
              </p>
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

      <footer className="footer">
        <h2>LandMark TechEdge</h2>
        <div>
          <a href="Privacy.html">Privacy Policy</a>
          <a href="Terms.html">Terms & Conditions</a>
          <a href="Refund.html">Refund Policy</a>
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
