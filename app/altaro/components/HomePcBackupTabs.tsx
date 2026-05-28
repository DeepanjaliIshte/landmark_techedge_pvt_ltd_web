"use client";

import { useState } from "react";
import altaroLogo from "../../img/altaro2.png";

type Feature = { title: string; text: string };
type Review = { source: string; accent: string; quote: string };
type SplitSection = {
  title: string;
  text: string;
  visual: "dashboard" | "folders" | "status" | "picker";
  reverse?: boolean;
};

const overviewIntro =
  "Backup & automatic versioning of docs, images and other files lets you preview & restore versions from different points in time. Mistakes such as saving over another file or deleting a document are now a thing of the past.";

const splitSections: SplitSection[] = [
  {
    title: "Very Fast Backup & Restore",
    text: "Your data is protected every time you make a change — without slowing down your PC.",
    visual: "dashboard",
  },
  {
    title: "BackInTime Technology",
    text: "Go back in time and choose different versions of your files from different points in time.",
    visual: "picker",
    reverse: true,
  },
  {
    title: "Fully Automatic — No Hassle",
    text: "Detects file changes automatically, versions files, and backs them up for you.",
    visual: "status",
  },
];

const productFeatures: Feature[] = [
  {
    title: "Save Space",
    text: "Only back up sections of files that changed using ReverseDelta™ Technology. Oops!Backup backs up actual changes without copying the whole file again every time.",
  },
  {
    title: "Continuous Data Protection (CDP) for Best Protection",
    text: "Highly tuned file-change-detection technology ensures that you are protected at all times.",
  },
  {
    title: "Double-Protection with Backup Drive Redundancy",
    text: "Automatically keep a double-backup to protect against theft, fire, or loss of your backup drive.",
  },
  {
    title: "Back up to NAS, Network Drive & USB",
    text: "Choose where to back up — offices can backup to a server or NAS drive, or use USB drives for portability.",
  },
  {
    title: "Automatic Backup on Connect with Plug & Protect™",
    text: "Ideal for laptop users — automatically initiates a backup once the backup drive is connected.",
  },
  {
    title: "Restore different versions with BackInTime Technology",
    text: "Restore from multiple points in time rather than only the most recent backup.",
  },
  {
    title: "Email Notifications",
    text: "Stay informed with backup success or failure reports delivered to your inbox.",
  },
  {
    title: "Flexible Scheduling",
    text: "Schedule multiple backups per day or at fixed times to match how you work.",
  },
];

const reviews: Review[] = [
  {
    source: "PC Advisor",
    accent: "pc",
    quote:
      "Oops!Backup is a capable backup tool that makes it very easy to access and restore files. If regular backup tools seem like too much hassle then this one is definitely worth a look.",
  },
  {
    source: "Software Crew",
    accent: "crew",
    quote:
      "It's simple to set up and use, reliable, works quietly in the background without you noticing, and makes it easy to restore files or folders whenever necessary.",
  },
  {
    source: "TechRepublic",
    accent: "tech",
    quote: "A great step forward in helping users back up their data as often as possible.",
  },
  {
    source: "Softonic",
    accent: "soft",
    quote:
      "Oops!Backup is a well designed and trustworthy backup tool that gives Windows an Apple-like Time Machine. It is both easy to use and flexible.",
  },
  {
    source: "PCWorld",
    accent: "world",
    quote: "Oops!Backup is a delightfully easy way to back up data.",
  },
  {
    source: "DownloadSquad",
    accent: "dl",
    quote: "Restore with one click — your fingers never having to leave your hand. Amazing.",
  },
  {
    source: "Bright Hub",
    accent: "hub",
    quote:
      "Oops!Backup will have extremely current information available if a hard drive does ever go down. You can easily restore files you might accidentally delete.",
  },
  {
    source: "Top-Windows-Tutorials.com",
    accent: "top",
    quote:
      "Oops!Backup comfortably outperformed competitors in our tests, being consistently faster and more reliable.",
  },
  {
    source: "4SYSOPS",
    accent: "sys",
    quote:
      "My overall impression of Oops!Backup is very positive. It has a unique combination of ease-of-use and effectiveness.",
  },
  {
    source: "bleepingcomputer.com",
    accent: "bleep",
    quote: "Anyone looking for a program that can backup their data can't go wrong with Altaro Oops!Backup.",
  },
  {
    source: "TopTenREVIEWS",
    accent: "ten",
    quote:
      "Oops!Backup from Altaro is respectable data backup software that does a good job backing up your files and an even better job of restoring them.",
  },
  {
    source: "Mr. Modem",
    accent: "modem",
    quote: "Restore with one click. Amazing.",
  },
];

function DashboardVisual() {
  return (
    <div className="hpc-visual hpc-visual-dashboard" aria-label="Oops!Backup dashboard">
      <div className="hpc-visual-bar">
        <span />
        <span />
        <span />
        <strong>Oops!Backup — Dashboard</strong>
      </div>
      <div className="hpc-dashboard-body">
        <div className="fsb-chart" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hpc-pie" aria-hidden="true" />
        <img src={altaroLogo.src} alt="Oops!Backup by Altaro" />
      </div>
    </div>
  );
}

function PickerVisual() {
  return (
    <div className="hpc-visual hpc-visual-picker" aria-label="Choose a backup folder">
      <div className="hpc-picker-title">Choose a backup folder…</div>
      <div className="hpc-picker-grid">
        {["Desktop", "Documents", "Favorites", "Music", "Videos"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="hpc-picker-progress" aria-hidden="true" />
    </div>
  );
}

function StatusVisual() {
  return (
    <div className="hpc-visual hpc-visual-status" aria-label="Backup status panel">
      <div className="hpc-status-block">
        <p className="hpc-status-ok">Last backup Today at 16:08</p>
        <p className="hpc-status-warn">Last Sync to 2nd Drive on 10 Aug 2010 20:26</p>
        <p className="hpc-status-meta">77 new changes, next backup in 23 hrs 17 min…</p>
      </div>
      <div className="hpc-status-block">
        <p className="hpc-status-ok">Your Backup Drive is connected</p>
        <p className="hpc-status-meta">A 2nd Backup drive has been setup.</p>
      </div>
      <div className="hpc-status-actions">
        <button type="button">Backup Now</button>
        <button type="button" className="hpc-btn-restore">
          Go BackInTime™ and Restore
        </button>
        <button type="button" className="hpc-btn-manage">
          Manage
        </button>
      </div>
      <small className="hpc-version">v3.0.8.0</small>
    </div>
  );
}

function SectionVisual({ type }: { type: SplitSection["visual"] }) {
  if (type === "dashboard") return <DashboardVisual />;
  if (type === "picker") return <PickerVisual />;
  return <StatusVisual />;
}

export default function HomePcBackupTabs() {
  const [tab, setTab] = useState<"overview" | "awards">("overview");

  return (
    <section className="hpc-description">
      <div className="hpc-description-head">
        <h2>Description</h2>
        <span className="hpc-description-line" aria-hidden="true" />
      </div>

      <div className="hpc-tabs" role="tablist" aria-label="Product description">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "overview"}
          className={tab === "overview" ? "active" : ""}
          onClick={() => setTab("overview")}
        >
          OverView
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "awards"}
          className={tab === "awards" ? "active" : ""}
          onClick={() => setTab("awards")}
        >
          Awards &amp; Reviews
        </button>
      </div>

      {tab === "overview" ? (
        <div className="hpc-tab-panel" role="tabpanel">
          <h3>Backup for Windows 8, 7, Vista &amp; XP</h3>
          <p className="hpc-overview-intro">{overviewIntro}</p>

          {splitSections.map((section) => (
            <div
              className={`hpc-split-block ${section.reverse ? "hpc-split-reverse" : ""}`}
              key={section.title}
            >
              <div className={`wsb-split ${section.reverse ? "wsb-split-reverse" : ""}`}>
                {section.reverse ? (
                  <>
                    <div className="wsb-split-copy">
                      <h4>{section.title}</h4>
                      <p>{section.text}</p>
                    </div>
                    <SectionVisual type={section.visual} />
                  </>
                ) : (
                  <>
                    <SectionVisual type={section.visual} />
                    <div className="wsb-split-copy">
                      <h4>{section.title}</h4>
                      <p>{section.text}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="fsb-feature-list hpc-feature-list">
            {productFeatures.map((item) => (
              <article className="fsb-feature-row" key={item.title}>
                <p>
                  <strong>{item.title}</strong> — {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="hpc-tab-panel hpc-reviews-panel" role="tabpanel">
          <ul className="hpc-reviews">
            {reviews.map((item) => (
              <li className="hpc-review-row" key={item.source}>
                <div className={`hpc-review-logo hpc-logo-${item.accent}`}>
                  <span>{item.source}</span>
                </div>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
