
"use client";
import logo from "../img/LTPLLogo.png";
import logo2 from "../img/LTPLNewLogo.png";
import visionImg from "../img/Vision.jpg";
import missionImg from "../img/mission1.webp";
import teamImg from "../img/team.jpg";


const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

export default function AboutPage() {
  return (
    <main>
    
      <header className="site-header">
        <a className="brand" href="https://landmarksol.com/" aria-label="LandMark TechEdge home">
          <img src={logo.src} alt="LandMark TechEdge" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/#products">Products</a>
          <a href="/#industries">Industries</a>
          <a href="/#contact">Contact</a>
          <a className="nav-cta" href={whatsappHref}>WhatsApp</a>
        </nav>
      </header>


      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Landmark Techedge</h1>
          <p>Leading Software Development and Distribution Company Since 2003</p>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <div className="section-text">
            <h2>About Us</h2>
            <p>
              Landmark Techedge Pvt Ltd is leading Software Development and Distribution company which is vastly
              diversified and scaled to cover the almost entire gamut of IT services. Established in 2003 and operates
              from Pune. Our Company is managed by a group of professionals. We have grown to be a market leader in our
              verticals. We have been successful because of our ability to deliver our products in a timely manner with
              quality service and technical support to our Clients, Resellers, and Distributors.
            </p>
          </div>
          <div className="section-image">
            <img src={logo2.src} alt="About Us" />
          </div>
        </div>
      </section>

      <section className="about-section alternate">
        <div className="section-container">
          <div className="section-image">
            <img src={visionImg.src} alt="Our Vision" />
          </div>
          <div className="section-text">
            <h2>Our Vision</h2>
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
            <h2>Our Mission</h2>
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
            <h2>Meet The Team</h2>
            <p>
              We're a team of young people based in Pune, maharashtra. Half of us work on the Backup Support, and the
              other half work with the Sales & marketing. We love what we do.
            </p>
          </div>
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