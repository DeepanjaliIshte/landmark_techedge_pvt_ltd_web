import altaroLogo from "../../img/altaro2.png";
import SiteHeader from "../../components/SiteHeader";
import Microsoft365BackupPage from "../Microsoft365BackupPage";
import WindowsServerBackupPage from "../WindowsServerBackupPage";
import FileServerBackupPage from "../FileServerBackupPage";
import HomePcBackupPage from "../HomePcBackupPage";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const pages: Record<string, { title: string; category: string; description: string }> = {
  "vm-backup-replication": {
    title: "VM Backup & Replication",
    category: "Backup Solutions",
    description: "A dedicated Altaro VM Backup & Replication page is ready for the structure and content you will share.",
  },
  "microsoft-365-backup": {
    title: "Microsoft 365 Backup",
    category: "Backup Solutions",
    description: "A dedicated Microsoft 365 Backup page is ready for the structure and content you will share.",
  },
  "windows-server-backup": {
    title: "Windows Server Backup",
    category: "Backup Solutions",
    description: "A dedicated Windows Server Backup page is ready for the structure and content you will share.",
  },
  "file-server-backup": {
    title: "File Server Backup",
    category: "Other Products",
    description: "A dedicated File Server Backup page is ready for the structure and content you will share.",
  },
  "home-pc-backup": {
    title: "Home PC Backup",
    category: "Other Products",
    description: "A dedicated Home PC Backup page is ready for the structure and content you will share.",
  },
};

const awards = [
  "Spiceworks 4.5 Star Reviews",
  "Storage Awards Winner",
  "Front Runners 2022",
  "GetApp Leaders 2022",
  "G2 Leader Summer 2022",
  "Top 5 DCIG",
  "Best of Backup",
  "SourceForge Loved",
  "Digital Best",
  "Editor's Choice",
];

const featureTabs = [
  "Ransomware Protection leveraging Immutable Cloud Storage",
  "Efficient backup setup",
  "Full control of your backups",
  "Award-winning 24/7 support",
];

const immutablePoints = [
  "Tamper-proof data: Ensures backup data cannot be erased or modified.",
  "Peace of mind: Safeguards against ransomware attacks and rogue admins.",
  "Cost-effective retention: Minimizes unnecessary data storage costs.",
  "Cloud compatibility: Works seamlessly with Wasabi, Amazon S3, Microsoft Azure, and BackBlaze B2.",
];

const osSupport = [
  "Azure Stack HCI",
  "Windows Server 2022",
  "Windows Server 2019",
  "Windows Server 2016",
  "Windows Server 2012 R2",
  "Windows Server 2012",
  "Windows Server 2008 R2",
  "Microsoft Hyper-V Server (Core)",
];

const vmwareSupport = [
  "VMware vCenter 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0",
  "VMware vSphere 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0",
  "VMware ESXi 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0",
  "Free VMware ESXi is not supported",
];

type AltaroSubPageProps = {
  params: Promise<{ slug: string }>;
};

function VmBackupReplicationPage() {
  return (
    <main>
      <SiteHeader />

      <section className="vm-hero">
        <div className="vm-hero-lines" aria-hidden="true" />
        <div className="vm-hero-content">
          <div className="vm-hero-copy">
            <span className="eyebrow">VM Backup & Replication</span>
            <h1>
              Ransomware Protection leveraging Immutable <em>Cloud Storage</em>
            </h1>
            <p>
              Secure your critical data with state-of-the-art protection and immutable cloud storage solutions. Start
              your journey to ultimate data safety now.
            </p>
            <a className="button button-primary" href="/#contact">
              Download Your Free Trial
            </a>
            <small>
              30-day trial + free for micro businesses
              <br />
              Get started in &lt; 15 minutes
            </small>
          </div>
          <div className="vm-hero-badge" aria-label="New VM Backup V9">
            <span>New</span>
            <strong>VM Backup</strong>
            <b>V9</b>
          </div>
        </div>
      </section>

      <section className="vm-awards" aria-label="Awards and recognition">
        {awards.map((award) => (
          <span key={award}>{award}</span>
        ))}
      </section>

      <section className="vm-intro">
        <p>
          VM Backup (formerly Altaro VM Backup) is a fast, affordable, high-performance backup and replication solution.
          We have cut the waste and hassle to give you an agile, streamlined solution that is easy to implement and
          feature-rich, with outstanding 24/7 support as part of the package.
        </p>
      </section>

      <section className="vm-feature-panel">
        <div className="vm-tabs" aria-label="VM backup highlights">
          {featureTabs.map((tab, index) => (
            <span className={index === 0 ? "active" : ""} key={tab}>
              {tab}
            </span>
          ))}
        </div>

        <article className="vm-immutable-card">
          <div>
            <h2>Ransomware Protection with Immutable Cloud Storage</h2>
            <h3>Why Choose Immutable Cloud Storage?</h3>
            <ul className="check-list">
              {immutablePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="vm-cloud-visual" aria-label="Immutable cloud storage with VM Backup V9">
            <div className="vm-cloud-circle">
              <span>Immutable Cloud Storage with</span>
              <strong>VM Backup V9</strong>
              <small>Amazon S3 / Wasabi / Azure</small>
            </div>
          </div>
        </article>

        <h3 className="vm-blue-line">
          Virtual machine backup and replication software packed with powerful features for Hyper-V and VMware.
        </h3>
      </section>

      <section className="vm-champion">
        <div className="vm-medal-block">
          <span className="vm-product-kicker">New</span>
          <h2>
            VM Backup <b>V9</b>
          </h2>
          <div className="vm-medals" aria-label="Top rated badges">
            <span>Strategy and Innovation</span>
            <span>Conflict Resolution</span>
            <span>Service Experience</span>
          </div>
        </div>
        <div className="vm-champion-copy">
          <span className="eyebrow">Recognition</span>
          <h2>The Ultimate Backup Champion 2023</h2>
          <p>
            Hornetsecurity has been named a Champion in the 2023 Backup and Availability Emotional Footprint Report
            from SoftwareReviews.
          </p>
          <strong>Top rated:</strong>
          <ul className="check-list">
            <li>Strategy and Innovation</li>
            <li>Conflict Resolution</li>
            <li>Service Experience</li>
          </ul>
        </div>
      </section>

      <section className="vm-os-support">
        <h2>OS Support</h2>
        <div>
          <ul>
            {osSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="vm-os-logos">
            <span>Windows Server 2019</span>
            <span>Windows Server 2022</span>
          </div>
        </div>
        <div>
          <ul>
            {vmwareSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span className="vmware-ready">VMware Ready</span>
        </div>
      </section>

      <section className="vm-faq">
        <details>
          <summary>FAQs: Virtual machine backup and replication for Hyper-V and VMware</summary>
          <p>
            VM Backup & Replication helps protect virtual machines with backup, replication, recovery, and cloud storage
            options for modern business environments.
          </p>
        </details>
      </section>

      <section className="contact">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2>Talk to Landmark Techedge about VM Backup</h2>
          <p>Share your environment details and our team will help you choose the right backup setup.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>VM Backup Support</h3>
            <p>
              <a href="tel:+917030323838">+91 70303 23838</a>
              <br />
              <a href="mailto:info@bizpluserp.com">info@bizpluserp.com</a>
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="/#contact">
                Request Free Demo
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
              Backup Requirement
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

export default async function AltaroSubPage({ params }: AltaroSubPageProps) {
  const { slug } = await params;
  if (slug === "vm-backup-replication") {
    return <VmBackupReplicationPage />;
  }

  if (slug === "microsoft-365-backup") {
    return <Microsoft365BackupPage />;
  }

  if (slug === "windows-server-backup") {
    return <WindowsServerBackupPage />;
  }

  if (slug === "file-server-backup") {
    return <FileServerBackupPage />;
  }

  if (slug === "home-pc-backup") {
    return <HomePcBackupPage />;
  }

  const page = pages[slug] ?? {
    title: "Altaro Product",
    category: "Altaro",
    description: "This Altaro product page is ready for the structure and content you will share.",
  };

  return (
    <main>
      <SiteHeader />

      <section className="services-hero">
        <div className="services-hero-content altaro-subpage-hero">
          <img src={altaroLogo.src} alt="Altaro VM Backup" />
          <span className="eyebrow">{page.category}</span>
          <h2>{page.title}</h2>
          <p>{page.description}</p>
          <div className="cta-buttons">
            <a href="/altaro" className="button button-secondary">
              Back to Altaro
            </a>
            <a href="/#contact" className="button button-primary">
              Request Details
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
