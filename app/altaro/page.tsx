import altaroLogo from "../img/altaro2.png";
import SiteHeader from "../components/SiteHeader";
import ContactSection from "../components/ContactSection";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const backupSolutions = [
  {
    title: "VM Backup & Replication",
    href: "/altaro/vm-backup-replication",
    text: "Fast backup, replication, and recovery for VMware and Hyper-V environments.",
  },
  {
    title: "Microsoft 365 Backup",
    href: "/altaro/microsoft-365-backup",
    text: "Protect Exchange, OneDrive, SharePoint, and Teams data with simple cloud backup.",
  },
  {
    title: "Windows Server Backup",
    href: "/altaro/windows-server-backup",
    text: "Reliable server backup for business-critical Windows workloads and files.",
  },
];

const otherProducts = [
  {
    title: "File Server Backup",
    href: "/altaro/file-server-backup",
    text: "Secure file server data with centralized backup and recovery workflows.",
  },
  {
    title: "Home PC Backup",
    href: "/altaro/home-pc-backup",
    text: "Simple protection for personal systems, documents, and everyday PC data.",
  },
];

export default function AltaroPage() {
  return (
    <main>
      <SiteHeader />

      <section className="altaro-hero">
        <div className="altaro-hero-bg" aria-hidden="true" />
        <div className="altaro-hero-content">
          <div className="altaro-hero-copy">
            <span className="eyebrow">Altaro Backup Solutions</span>
            <h1>Ransomware Protection Leveraging Immutable Cloud Storage</h1>
            <p>Secure your critical data with state-of-the-art backup, recovery, and immutable cloud storage solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/#contact">
                Download Free Trial
              </a>
              <a className="button button-secondary" href={whatsappHref}>
                Talk to Our Team
              </a>
            </div>
            <small>30-day trial + free for micro businesses</small>
          </div>
          <div className="altaro-hero-product">
            <img src={altaroLogo.src} alt="Altaro VM Backup" />
            <strong>NEW</strong>
            <span>VM Backup V9</span>
          </div>
        </div>
      </section>

      <section id="backup-solutions" className="altaro-section">
        <div className="section-heading">
          <span className="eyebrow">Backup Solutions</span>
          <h2>Choose the Altaro protection your infrastructure needs</h2>
          <p>
            This page follows the Altaro menu structure from your reference. Each solution card is ready to become a
            dedicated subpage once you share the content.
          </p>
        </div>
        <div className="altaro-card-grid">
          {backupSolutions.map((solution) => (
            <a className="altaro-solution-card" href={solution.href} key={solution.title}>
              <span className="feature-icon icon-backup" aria-hidden="true" />
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <b>View Solution</b>
            </a>
          ))}
        </div>
      </section>

      <section id="other-products" className="altaro-section altaro-section-muted">
        <div className="section-heading">
          <span className="eyebrow">Other Products</span>
          <h2>Additional backup products for smaller environments</h2>
          <p>
            File server and home PC backup options are grouped separately, matching the second Altaro submenu in your
            screenshot.
          </p>
        </div>
        <div className="altaro-card-grid altaro-card-grid-small">
          {otherProducts.map((product) => (
            <a className="altaro-solution-card" href={product.href} key={product.title}>
              <span className="feature-icon icon-stack" aria-hidden="true" />
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <b>View Product</b>
            </a>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-content">
          <span className="eyebrow">Altaro Support</span>
          <h2>Need help choosing the right backup solution?</h2>
          <p>Landmark Techedge can help you plan the right Altaro backup setup for your servers, VMs, and cloud data.</p>
          <div className="cta-buttons">
            <a href="/#contact" className="button button-primary">
              Request Free Demo
            </a>
            <a href={whatsappHref} className="button button-secondary">
              Chat on WhatsApp
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
