import altaroLogo from "../img/altaro2.png";
import SiteHeader from "../components/SiteHeader";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const downloadHref = "/#contact";

const topFeatures = [
  {
    icon: "wsb-icon-server",
    title: "Back up and restore physical servers",
    text: "Back up your physical servers and restore them to a virtual environment (as a virtual disk or a virtual machine running on a Hyper-V hypervisor).",
  },
  {
    icon: "wsb-icon-easy",
    title: "Easy to use",
    text: "Run the solution on the physical server you wish to back up and create your backup schedule. Manage it through a user-friendly local management console.",
  },
  {
    icon: "wsb-icon-storage",
    title: "Outstanding storage savings",
    text: "Enjoy industry-leading reductions in backup storage size thanks to our signature inline deduplication.",
  },
  {
    icon: "wsb-icon-free",
    title: "Unbeatable value",
    text: "Benefit from reliable, no-cost backup and recovery for the physical machines on your network.",
  },
];

const mainFeatures = [
  {
    title: "Reliable, fast backup and recovery",
    text: "Physical Server Backup is a reliable, fast backup and recovery solution for physical Windows servers. Back up your entire server with ease and restore it quickly when needed.",
  },
  {
    title: "P2V backup for physical servers",
    text: "Restore physical server backups to a virtual environment as a virtual disk or VM on Hyper-V — ideal for disaster recovery and migration scenarios.",
  },
  {
    title: "Backup schedule",
    text: "Create flexible backup schedules that fit your business hours. Automated jobs run in the background without disrupting production workloads.",
  },
  {
    title: "Restore your backups",
    text: "Restore full servers or granular items to the original machine or an alternate target. Export and recover with confidence from any supported restore point.",
  },
];

const disasterFeatures = [
  {
    title: "Avert the impact of a disaster",
    text: "Recover physical servers to virtual environments quickly after hardware failure, ransomware, or site outages — minimizing downtime and data loss.",
  },
  {
    title: "Encryption and retention policies",
    text: "Configure backup targets, encryption keys, and retention policies to meet your security and compliance requirements.",
  },
  {
    title: "Ease of use",
    text: "Simple product setup with a local management console — no complex deployment or lengthy training required.",
  },
];

const performanceFeatures = [
  {
    title: "Local management console",
    text: "Monitor backup status, jobs, and health through an intuitive web-based local management console on your network.",
  },
  {
    title: "Fast and efficient backups",
    text: "Change Block Tracking (CBT) and VSS-aware backups keep jobs fast while protecting application-consistent data.",
  },
  {
    title: "Optimized backup size",
    text: "Inline deduplication dramatically reduces backup storage requirements so you keep more restore points without extra disk cost.",
  },
];

const valuePoints = [
  {
    title: "No impact on your pocket",
    text: "Physical Server Backup is free backup and recovery software for the physical machines on your network — enterprise-grade protection without license fees.",
  },
  {
    title: "Community support",
    text: "Join the active user community and get answers from peers and experts through the official community forum and knowledge base.",
  },
  {
    title: "Single-vendor solution",
    text: "Combine Physical Server Backup with VM Backup, Microsoft 365 backup, and MSP offerings from one trusted vendor for complete data protection.",
    links: [
      { label: "VM Backup", href: "/altaro/vm-backup-replication" },
      { label: "Microsoft 365 Backup", href: "/altaro/microsoft-365-backup" },
      { label: "Altaro overview", href: "/altaro" },
    ],
  },
];

const supportedOs = [
  "Windows Server 2022",
  "Windows Server 2019",
  "Windows Server 2016",
  "Windows Server 2012 R2",
  "Windows Server 2012",
  "Windows Server 2008 R2",
];

const faqs = [
  {
    q: "What is the best free online backup solution?",
    a: "Physical Server Backup offers reliable, efficient, and completely free backup and recovery for physical Windows servers on your network — with P2V restore to Hyper-V when you need disaster recovery flexibility.",
  },
  {
    q: "What is the cheapest backup solution?",
    a: "For physical servers, Physical Server Backup is free. You get fast backups, inline deduplication, and restore capabilities without subscription costs for the machines you protect.",
  },
  {
    q: "How to back up everything on my Windows Server?",
    a: "Install Physical Server Backup on the server, define your backup schedule and target, and the solution captures full disk images with VSS-aware consistency. Restore to physical or virtual environments when required.",
  },
];

function ConsoleVisual({ label }: { label: string }) {
  return (
    <div className="wsb-console" aria-label={label}>
      <div className="wsb-console-top">
        <span />
        <span />
        <span />
        <strong>{label}</strong>
      </div>
      <div className="wsb-console-body">
        <aside className="wsb-console-nav">
          <span className="active">Dashboard</span>
          <span>Backups</span>
          <span>Restore</span>
          <span>Settings</span>
        </aside>
        <div className="wsb-console-main">
          <div className="wsb-console-status">Backup successful</div>
          <div className="wsb-console-bars">
            <span style={{ width: "88%" }} />
            <span style={{ width: "72%" }} />
            <span style={{ width: "94%" }} />
          </div>
          <img src={altaroLogo.src} alt="Altaro Physical Server Backup" />
        </div>
      </div>
    </div>
  );
}

function FeatureBlock({ title, text }: { title: string; text: string }) {
  return (
    <article className="wsb-feature-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function WindowsServerBackupPage() {
  return (
    <main className="wsb-page">
      <SiteHeader />

      <section className="hero hero-blue wsb-hero">
        <div className="hero-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Windows Server Backup</span>
            <h1>Download Your Free Windows Server Backup</h1>
            <p>
              Back up the physical servers on your network through this P2V solution and benefit from fast, easy recovery
              should they be impacted by a disaster.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={downloadHref}>
                Download Now
              </a>
              <a className="button button-secondary" href={whatsappHref}>
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="hero-visual wsb-hero-visual">
            <div className="visual-ring" aria-hidden="true" />
            <div className="visual-card">
              <img src={altaroLogo.src} alt="Physical Server Backup" />
            </div>
            <div className="floating-stat stat-b">
              <strong>FREE</strong>
              physical server backup
            </div>
          </div>
        </div>
      </section>

      <section className="wsb-intro">
        <p>
          Companies and organizations with virtualized server environments sometimes also have physical machines — and
          these too require data protection. <strong>Physical Server Backup</strong> is server backup software created to
          satisfy this need, with the added bonus that it&apos;s <strong>free</strong>.
        </p>
      </section>

      <section className="wsb-section">
        <div className="wsb-feature-grid-4">
          {topFeatures.map((item) => (
            <article className="wsb-top-card" key={item.title}>
              <span className={`wsb-icon ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wsb-section wsb-p2v">
        <div className="section-heading wsb-heading-center">
          <h2>P2V Solution for Microsoft Hyper-V</h2>
        </div>
        <div className="wsb-split">
          <ConsoleVisual label="Physical Server Backup dashboard" />
          <div className="wsb-split-copy">
            <p>
              Physical Server Backup lets you back up physical Windows servers and restore them to{" "}
              <a href="/altaro/vm-backup-replication">Hyper-V</a> virtual machines — a powerful physical-to-virtual (P2V)
              path for disaster recovery.
            </p>
            <p>
              Pair it with <a href="/altaro/vm-backup-replication">VM Backup</a>,{" "}
              <a href="/altaro/microsoft-365-backup">Microsoft 365 backup</a>, and other Altaro solutions from Landmark
              Techedge for complete protection across servers, VMs, cloud workloads, and endpoints.
            </p>
          </div>
        </div>
      </section>

      <section className="wsb-section">
        <div className="section-heading wsb-heading-center">
          <span className="eyebrow">Features</span>
          <h2>Physical Server Backup: Features</h2>
          <p>
            Protect your business with reliable backup solutions for physical machines and legacy servers that have not
            yet been virtualized.
          </p>
        </div>
        <div className="wsb-split wsb-split-reverse">
          <div className="wsb-split-copy wsb-feature-list">
            {mainFeatures.map((item) => (
              <FeatureBlock key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
          <ConsoleVisual label="Backup and restore wizard" />
        </div>
      </section>

      <section className="wsb-section wsb-alt-row">
        <div className="wsb-split">
          <ConsoleVisual label="Success dashboard" />
          <div className="wsb-split-copy wsb-feature-list">
            {disasterFeatures.map((item) => (
              <FeatureBlock key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="wsb-section wsb-alt-row">
        <div className="wsb-split wsb-split-reverse">
          <div className="wsb-split-copy wsb-feature-list">
            {performanceFeatures.map((item) => (
              <FeatureBlock key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
          <ConsoleVisual label="Configuration console" />
        </div>
      </section>

      <section className="wsb-section">
        <div className="wsb-split">
          <div className="wsb-split-copy wsb-feature-list">
            {valuePoints.map((item) => (
              <article className="wsb-feature-block" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.links ? (
                  <p className="wsb-inline-links">
                    {item.links.map((link, i) => (
                      <span key={link.href}>
                        {i > 0 ? " · " : null}
                        <a href={link.href}>{link.label}</a>
                      </span>
                    ))}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <ConsoleVisual label="License and status" />
        </div>
      </section>

      <section className="wsb-section wsb-os">
        <div className="section-heading wsb-heading-center">
          <h2>What operating systems does this freeware Physical Server Backup back up?</h2>
          <p className="wsb-os-kicker">Windows Server backup — Supported OSs</p>
        </div>
        <div className="wsb-os-panel">
          <ul>
            {supportedOs.map((os) => (
              <li key={os}>{os}</li>
            ))}
          </ul>
          <p className="wsb-os-note">
            Free VMware ESXi hosts are not supported. For virtual environments, use{" "}
            <a href="/altaro/vm-backup-replication">VM Backup & Replication</a>.
          </p>
        </div>
      </section>

      <section className="wsb-section wsb-faq-section">
        <details className="wsb-faq-banner">
          <summary>FAQs: Free Windows Server Backup</summary>
          <div className="wsb-faq-list">
            {faqs.map((item) => (
              <details className="wsb-faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </details>
      </section>

      <section className="contact wsb-contact">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2>Get help with Windows Server Backup</h2>
          <p>Landmark Techedge can guide you through download, setup, and pairing Physical Server Backup with your Altaro stack.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>Windows Server Backup</h3>
            <p>
              <a href="tel:+917030323838">+91 70303 23838</a>
              <br />
              <a href="mailto:info@bizpluserp.com">info@bizpluserp.com</a>
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={downloadHref}>
                Download Now
              </a>
              <a className="button button-secondary" href={whatsappHref}>
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
              Server Backup Requirement
              <textarea name="message" rows={6} required />
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
