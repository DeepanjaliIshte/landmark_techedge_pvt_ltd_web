import altaroLogo from "../img/altaro2.png";
import SiteHeader from "../components/SiteHeader";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const contactHref = "/#contact";

const staggeredFeatures = [
  {
    title: "Continuous Data Protection",
    text: "Highly tuned file change detection technology makes sure that you are protected at all times.",
    visual: "dashboard",
  },
  {
    title: "Backs Up Open Files",
    text: "Integrates with MS Volume Shadow (VSS) to back up files that are in use such as PST files, and more.",
    visual: "config",
    reverse: true,
  },
];

const productFeatures = [
  {
    title: "Save Space",
    text: "Uses ReverseDelta™ Technology to only back up the sections of files that have changed — dramatically reducing backup storage requirements.",
  },
  {
    title: "Continuous Data Protection (CDP)",
    text: "Highly tuned file-change-detection technology keeps your file server protected throughout the day.",
  },
  {
    title: "Double-Protection",
    text: "Backup Drive Redundancy helps protect against theft, fire, or drive loss by maintaining redundant backup targets.",
  },
  {
    title: "Back up to NAS, Network Drive & USB",
    text: "Flexible backup destinations — store copies on NAS appliances, network shares, or USB drives to match your infrastructure.",
  },
  {
    title: "Automatic Backup on Connect with Plug & Protect™",
    text: "Ideal for laptop users — backups start automatically when a configured backup drive is connected.",
  },
  {
    title: "Restore different versions",
    text: "BackInTime Technology lets you browse and restore files from multiple points in time with ease.",
  },
  {
    title: "Email Notifications",
    text: "Receive reports on backup success or failure so your team stays informed without checking consoles manually.",
  },
  {
    title: "Flexible Scheduling",
    text: "Back up multiple times per day or at pre-set times — schedules adapt to how often your data changes.",
  },
  {
    title: "Restore files through Email",
    text: "With Altaro Backup FS you can send a copy of restored files to employees via email automatically — wherever they are in the world.",
  },
  {
    title: "Unattended Backups",
    text: "Runs as a Windows service — ideal for unattended servers. Backs up even when users are not logged in.",
  },
  {
    title: "Supports Windows Server & desktop OS",
    text: "Fully supports Windows Server 2012, 2008 (incl. R2), 2003 and Microsoft Small Business Server — plus Windows 8, 7, Vista and XP. Ideal for small and mid-sized businesses.",
  },
];

function BackupFsVisual({ variant, label }: { variant: string; label: string }) {
  return (
    <div className="wsb-console fsb-console" aria-label={label}>
      <div className="wsb-console-top">
        <span />
        <span />
        <span />
        <strong>Altaro Backup FS — {variant}</strong>
      </div>
      <div className="wsb-console-body fsb-console-body-wide">
        <aside className="wsb-console-nav">
          <span className="active">Dashboard</span>
          <span>Backups</span>
          <span>Restore</span>
          <span>Settings</span>
        </aside>
        <div className="wsb-console-main">
          {variant === "dashboard" ? (
            <>
              <div className="fsb-chart" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="wsb-console-status">CDP active — all drives protected</div>
            </>
          ) : (
            <>
              <div className="wsb-console-bars">
                <span style={{ width: "92%" }} />
                <span style={{ width: "68%" }} />
              </div>
              <div className="wsb-console-status">VSS — open files included</div>
            </>
          )}
          <img src={altaroLogo.src} alt="Altaro Backup FS" />
        </div>
      </div>
    </div>
  );
}

function BackInTimeVisual() {
  return (
    <div className="fsb-backintime-visual" aria-label="BackIn Time browser">
      <div className="fsb-backintime-bar">
        <span />
        <span />
        <span />
        <strong>BackIn Time</strong>
      </div>
      <div className="fsb-folders">
        <div className="fsb-folder">
          <span aria-hidden="true" />
          Photos
        </div>
        <div className="fsb-folder">
          <span aria-hidden="true" />
          Documents
        </div>
        <div className="fsb-folder">
          <span aria-hidden="true" />
          Work Projects
        </div>
      </div>
    </div>
  );
}

export default function FileServerBackupPage() {
  return (
    <main className="fsb-page">
      <SiteHeader />

      <section className="hero hero-blue fsb-hero">
        <div className="hero-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">File Server Backup</span>
            <h1>File Server BackUp</h1>
            <p className="fsb-hero-sub">
              Backup for Windows 2012, 2008, 2003, MS SBS, 8, 7, Vista &amp; XP
            </p>
            <p>
              <strong>Altaro Backup FS</strong> is the perfect, affordable premium backup solution for professionals and
              small &amp; mid-sized businesses looking to protect their Windows servers and PCs from data loss.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={contactHref}>
                Request a Quote
              </a>
              <a className="button button-secondary" href={whatsappHref}>
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="hero-visual fsb-hero-visual">
            <div className="visual-ring" aria-hidden="true" />
            <div className="visual-card">
              <img src={altaroLogo.src} alt="Altaro Backup FS" />
            </div>
          </div>
        </div>
      </section>

      {staggeredFeatures.map((item) => (
        <section
          className={`fsb-section fsb-split-row ${item.reverse ? "fsb-split-reverse" : ""}`}
          key={item.title}
        >
          <div className={`wsb-split ${item.reverse ? "wsb-split-reverse" : ""}`}>
            {item.reverse ? (
              <>
                <div className="wsb-split-copy">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <BackupFsVisual variant={item.visual} label={item.title} />
              </>
            ) : (
              <>
                <BackupFsVisual variant={item.visual} label={item.title} />
                <div className="wsb-split-copy">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      <section className="fsb-section fsb-backintime">
        <div className="wsb-split">
          <BackInTimeVisual />
          <div className="wsb-split-copy">
            <span className="eyebrow">Restore in seconds</span>
            <h2>BackIn Time</h2>
            <p>
              Using the BackIn Time browser it takes seconds to find and restore a file from any point in time — giving
              your team fast recovery without complex restore workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="fsb-section">
        <div className="section-heading fsb-heading-center">
          <span className="eyebrow">Product features</span>
          <h2>Everything you need to protect file servers &amp; PCs</h2>
        </div>
        <div className="fsb-feature-list">
          {productFeatures.map((item) => (
            <article className="fsb-feature-row" key={item.title}>
              <p>
                <strong>{item.title}</strong> — {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact fsb-contact">
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
