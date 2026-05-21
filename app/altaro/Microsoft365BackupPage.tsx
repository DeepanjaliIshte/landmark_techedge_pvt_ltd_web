import altaroLogo from "../img/altaro2.png";
import SiteHeader from "../components/SiteHeader";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const trialHref = "/#contact";

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

const highlights = [
  {
    icon: "m365-icon-data",
    title: "Avoid Microsoft 365",
    accent: "data loss",
    text: "Microsoft 365 is a communications system rather than a data protection solution. We help you back up and restore your M365 data with ease.",
  },
  {
    icon: "m365-icon-sync",
    title: "Back up Microsoft 365 automatically",
    text: "Enjoy the benefits of an easy automated backup process, freeing up your thoughts and time for other tasks.",
  },
  {
    icon: "m365-icon-price",
    title: "One all-inclusive price",
    text: "Your subscription includes backups, unlimited storage, 24/7 support and a central management Control Panel. No hidden costs!",
  },
  {
    icon: "m365-icon-cloud",
    title: "Hassle-free, unlimited storage",
    text: "Your Microsoft 365 backups are automatically saved to one of our secure data centers (choose from regions like the USA, the UK or Germany).",
  },
  {
    icon: "m365-icon-shield",
    title: "Data security",
    text: "Data storage in our global private cloud, offering reliability, availability and security.",
  },
  {
    icon: "m365-icon-recovery",
    title: "Disaster recovery",
    text: "Should you lose data due to outages, deletion, or other disasters, we've got your back.",
  },
];

const benefitsLeft = [
  {
    title: "Data loss prevention",
    text: "Microsoft 365 is not a backup solution. You need a disaster recovery plan to protect your data from accidental deletion, malicious attacks, and outages.",
  },
  {
    title: "Hassle-free, automatic backups",
    text: "Back up emails, contacts, Teams chats, SharePoint sites, OneDrive files, and more — automatically and without manual intervention.",
  },
  {
    title: "Easily restore misplaced, deleted, or damaged items",
    text: "Restore full mailboxes or granular items. Recover to original or alternate locations with point-in-time restore options.",
  },
];

const benefitsRight = [
  {
    title: "Robust, secure, and unlimited storage",
    text: "Store backups securely in the cloud without needing local servers or additional storage hardware.",
  },
  {
    title: "Control over data jurisdiction",
    text: "Choose where your data is stored — USA, UK, Germany, and other supported regions — for compliance and peace of mind.",
  },
  {
    title: "Centralized management",
    text: "Manage all backups from a single, user-friendly Control Panel with full visibility across your organization.",
  },
  {
    title: "Unbeatable value",
    text: "Affordable plans with unlimited storage, backups, and 24/7 expert support included in one transparent price.",
  },
  {
    title: "Lightning-fast 24/7 support",
    text: "Get quick responses from backup experts whenever you need help — no long wait times or tiered support queues.",
  },
];

const whyBackupPoints = [
  "Microsoft 365 does not include comprehensive backup — deleted data can be lost permanently after retention periods expire.",
  "Ransomware, accidental deletion, and insider threats can compromise mailboxes, Teams, and SharePoint without a third-party backup.",
  "Regulatory and business continuity requirements often demand independent, restorable copies of your cloud data.",
];

const featureColumns = [
  {
    title: "Backup",
    items: [
      "Back up user and group mailboxes, including mail, attachments, calendars, and contacts",
      "Back up files within OneDrive & SharePoint",
      "Back up user chats (1:1, 1:M), Teams channel conversations (including private channels), files, and meeting recordings",
      "Auto-creation of backup jobs",
      "Minimal recovery point objective (RPO)",
      "Automated backups multiple times a day",
      "Back up all group plans in Microsoft Planner",
      "Notebooks contained in OneNote",
    ],
  },
  {
    title: "Recovery",
    items: [
      "Restore full mailboxes or granular mailbox emails",
      "Recover to original or alternate mailboxes",
      "Restore OneDrive & SharePoint files to respective libraries",
      "Restore Teams chats, channel conversations, and private channel conversations",
      "Export emails to ZIP or PST, files to ZIP, and Teams data to HTML threads",
      "Restore from any point in time",
      "Quick and advanced search features",
      'End-user recovery via the "Recover M365 data" feature in the User Panel',
    ],
  },
  {
    title: "Management",
    items: [
      "Single cloud console to manage and monitor backups",
      "Audit logs for tracking activities",
      "Auto-provision user backups",
      "Manually enable/disable backups",
      "Easy access to backup data with advanced search",
      "Granular user access controls",
      "No training needed: fast and intuitive setup",
      "Independence from Microsoft for M365 data",
      "Control over data jurisdiction",
      "Four-eye approval process for enhanced security",
    ],
  },
  {
    title: "Storage",
    items: [
      "Unlimited storage",
      "Choose secure backup storage locations (e.g., USA, UK, Germany)",
      "Full AES-256 encryption for data security",
      "Two-factor authentication (2FA)",
      "Customizable retention periods",
    ],
  },
];

const setupSteps = [
  {
    icon: "m365-step-trial",
    text: (
      <>
        Sign up for your free <strong>30-day trial</strong>
      </>
    ),
  },
  {
    icon: "m365-step-org",
    text: "Add your Microsoft 365 organization",
  },
  {
    icon: "m365-step-users",
    text: "Choose which users, Teams Chats, and SharePoint sites to back up",
  },
  {
    icon: "m365-step-region",
    text: "Choose where to store your backups",
  },
];

const salesFaqs = [
  {
    q: "What is included in the subscription price?",
    a: "Backups, unlimited storage, 24/7 support, and access to the central Control Panel — all in one transparent price with no hidden fees.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes. Start with a free 30-day trial to evaluate backup coverage for your Microsoft 365 environment before you commit.",
  },
  {
    q: "How does Landmark Techedge help with licensing?",
    a: "Our team can guide you through plan selection, onboarding, and deployment so you get the right protection for your organization size.",
  },
];

const technicalFaqs = [
  {
    q: "What Microsoft 365 workloads are backed up?",
    a: "Exchange mailboxes, OneDrive, SharePoint, Teams chats and channels, Planner, OneNote, and related M365 data sets.",
  },
  {
    q: "Where is backup data stored?",
    a: "You can choose secure data center regions such as the USA, UK, or Germany, with AES-256 encryption and optional 2FA.",
  },
  {
    q: "How often are backups taken?",
    a: "Automated backups run multiple times per day with a minimal recovery point objective for faster restore options.",
  },
];

export default function Microsoft365BackupPage() {
  return (
    <main className="m365-page">
      <SiteHeader />

      <section className="hero hero-blue m365-hero">
        <div className="hero-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Microsoft 365 Backup</span>
            <h1>Microsoft 365 Backup Is a Must</h1>
            <p>
              365 Total Backup (formerly Altaro Office 365 Backup) protects your Exchange, OneDrive, SharePoint, and
              Teams data with automated cloud backups, unlimited storage, and expert 24/7 support.
            </p>
            <div className="hero-actions">
              <a className="button button-secondary" href="#setup">
                How It Works
              </a>
              <a className="button button-primary" href={trialHref}>
                Start Your Free 30-Day Trial
              </a>
            </div>
          </div>
          <div className="hero-visual m365-hero-visual">
            <div className="visual-ring" aria-hidden="true" />
            <div className="visual-card">
              <img src={altaroLogo.src} alt="365 Total Backup" />
            </div>
            <div className="floating-stat stat-a">
              <strong>30</strong>
              day free trial
            </div>
          </div>
        </div>
      </section>

      <section className="m365-awards" aria-label="Awards and recognition">
        {awards.map((award) => (
          <span key={award}>{award}</span>
        ))}
      </section>

      <section className="m365-intro">
        <p>
          <strong>365 Total Backup</strong> (formerly Altaro Office 365 Backup) is the #1 Microsoft 365 backup and
          recovery solution for Office 365 admins. Back up and restore Exchange Online mailboxes and public folders,
          SharePoint sites, OneDrive for Business accounts, and Teams data — with unlimited storage and award-winning
          support included.
        </p>
      </section>

      <section className="m365-section">
        <div className="section-heading m365-section-heading-center">
          <span className="eyebrow">Why 365 Total Backup</span>
          <h2>Complete protection for your Microsoft 365 data</h2>
        </div>
        <div className="m365-highlight-grid">
          {highlights.map((item) => (
            <article className="m365-highlight-card" key={item.title}>
              <span className={`m365-feature-icon ${item.icon}`} aria-hidden="true" />
              <h3>
                {item.title}
                {item.accent ? (
                  <>
                    {" "}
                    <em>{item.accent}</em>
                  </>
                ) : null}
              </h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="m365-section m365-benefits">
        <div className="section-heading m365-section-heading-center">
          <span className="eyebrow">Benefits</span>
          <h2>Benefits of 365 Total Backup</h2>
          <p className="m365-subtitle">(formerly Altaro Office 365 Backup)</p>
        </div>
        <div className="m365-benefits-grid">
          <div className="m365-benefits-col">
            {benefitsLeft.map((item) => (
              <article className="m365-benefit-row" key={item.title}>
                <span className="m365-check" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="m365-benefits-col">
            {benefitsRight.map((item) => (
              <article className="m365-benefit-row" key={item.title}>
                <span className="m365-check" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="m365-section m365-why">
        <div className="m365-why-grid">
          <div className="m365-why-copy">
            <h2>
              <span>Why do I need to back up</span> Microsoft 365?
            </h2>
            <p>
              Many organizations assume Microsoft 365 includes full backup. In reality, native retention is limited —
              and permanent data loss can still happen without a dedicated backup solution.
            </p>
            <ul className="check-list">
              {whyBackupPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="m365-brochure-stack" aria-label="Office 365 backup resources">
            <div className="m365-brochure m365-brochure-back" />
            <div className="m365-brochure m365-brochure-mid" />
            <div className="m365-brochure m365-brochure-front">
              <strong>11 Critical Reasons</strong>
              <span>Why You Need Backup for Office 365</span>
            </div>
          </div>
        </div>
      </section>

      <section className="m365-section m365-features-overview">
        <div className="section-heading m365-section-heading-center">
          <h2>Overview of Features</h2>
        </div>
        <div className="m365-feature-columns">
          {featureColumns.map((col) => (
            <article className="m365-feature-column" key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="setup" className="m365-section m365-setup">
        <div className="section-heading m365-section-heading-center">
          <h2>Easy Setup, Nothing to Deploy</h2>
        </div>
        <div className="m365-setup-steps">
          {setupSteps.map((step, index) => (
            <div className="m365-setup-step" key={index}>
              <span className={`m365-setup-icon ${step.icon}`} aria-hidden="true" />
              {index < setupSteps.length - 1 ? <span className="m365-setup-arrow" aria-hidden="true" /> : null}
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <p className="m365-setup-done">
          <strong>That&apos;s it: You&apos;re done!</strong>
        </p>
      </section>

      <section className="m365-section m365-faq-section">
        <div className="section-heading m365-section-heading-center">
          <h2>Your Frequently Asked Questions About Our Solution</h2>
        </div>
        <div className="m365-faq-groups">
          <div className="m365-faq-group m365-faq-sales">
            <h3>
              <span className="m365-faq-icon m365-faq-icon-cart" aria-hidden="true" />
              Sales Questions
            </h3>
            {salesFaqs.map((item) => (
              <details className="m365-faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div className="m365-faq-group m365-faq-tech">
            <h3>
              <span className="m365-faq-icon m365-faq-icon-gear" aria-hidden="true" />
              Technical Questions
            </h3>
            {technicalFaqs.map((item) => (
              <details className="m365-faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact m365-contact">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2>Talk to Landmark Techedge about Microsoft 365 Backup</h2>
          <p>Get help choosing the right backup plan, storage region, and rollout for your organization.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>M365 Backup Support</h3>
            <p>
              <a href="tel:+917030323838">+91 70303 23838</a>
              <br />
              <a href="mailto:info@bizpluserp.com">info@bizpluserp.com</a>
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={trialHref}>
                Start Free Trial
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
              M365 Backup Requirement
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
