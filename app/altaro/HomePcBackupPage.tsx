import altaroLogo from "../img/altaro2.png";
import SiteHeader from "../components/SiteHeader";
import HomePcBackupTabs from "./components/HomePcBackupTabs";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

export default function HomePcBackupPage() {
  return (
    <main className="hpc-page">
      <SiteHeader />

      <section className="hero hero-blue hpc-hero">
        <div className="hero-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Home PC Backup</span>
            <h1>Oops!Backup by Altaro</h1>
            <p>
              Automatic backup and versioning for documents, photos, and files on Windows PCs — with fast restore from
              any point in time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#description">
                View Description
              </a>
              <a className="button button-secondary" href={whatsappHref}>
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="hero-visual hpc-hero-visual">
            <div className="visual-ring" aria-hidden="true" />
            <div className="visual-card">
              <img src={altaroLogo.src} alt="Oops!Backup" />
            </div>
            <div className="floating-stat stat-a">
              <strong>CDP</strong>
              always protected
            </div>
          </div>
        </div>
      </section>

      <div id="description" className="hpc-description-wrap">
        <HomePcBackupTabs />
      </div>

      <section id="contact" className="contact fsb-contact hpc-contact">
        <div className="section-heading fsb-contact-heading">
          <span className="fsb-contact-line" aria-hidden="true" />
          <h2>Contact</h2>
        </div>
        <div className="contact-grid fsb-contact-grid">
          <div className="contact-panel fsb-contact-panel">
            <div className="fsb-contact-block">
              <h3>Location</h3>
              <p>
                Dhruta Complex, 104 &amp; 105, NC Kelkar Road,
                <br />
                Narayan Peth, Pune, Maharashtra 411030
              </p>
            </div>
            <div className="fsb-contact-block">
              <h3>Contact Us</h3>
              <p>
                <a href="tel:+917030323838">+91 70303 23838</a>
                <br />
                <a href="tel:+919921388999">+91 99213 88999</a>
                <br />
                <a href="mailto:info@bizpluserp.com">info@bizpluserp.com</a>
              </p>
            </div>
            <iframe
              title="Landmark Techedge office location"
              src="https://maps.google.com/maps?q=Dhruta+Complex,+NC+Kelkar+Road,+Narayan+Peth,+Pune,+411030&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-actions">
              <a className="button button-primary" href={whatsappHref}>
                Chat on WhatsApp
              </a>
            </div>
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
