"use client";

import { useState, useEffect } from "react";
import logo from "../img/LTPLLogo.png";

const altaroGroups = [
  {
    label: "Backup Solutions",
    href: "/altaro#backup-solutions",
    items: [
      { label: "VM Backup & Replication", href: "/altaro/vm-backup-replication" },
      { label: "Microsoft 365 Backup", href: "/altaro/microsoft-365-backup" },
      { label: "Windows Server Backup", href: "/altaro/windows-server-backup" },
    ],
  },
  {
    label: "Other Products",
    href: "/altaro#other-products",
    items: [
      { label: "File Server Backup", href: "/altaro/file-server-backup" },
      { label: "Home PC Backup", href: "/altaro/home-pc-backup" },
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900 && open) setOpen(false);
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="LandMark TechEdge home">
        <img src={logo.src} alt="LandMark TechEdge" />
      </a>

      <button
        className="nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="bar" aria-hidden="true" />
      </button>

      <nav id="primary-navigation" className={`site-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/about" onClick={() => setOpen(false)}>About Us</a>
        <a href="/services" onClick={() => setOpen(false)}>Services</a>
        <a href="/ai-ml" onClick={() => setOpen(false)}>AI &amp; ML</a>
        <a href="/bizpluscrm" onClick={() => setOpen(false)}>BizPlusCRM</a>
        <a href="/ivr" onClick={() => setOpen(false)}>IVR</a>
        <a href="/bizpluserp" onClick={() => setOpen(false)}>BizPlus ERP</a>
        <div className="nav-dropdown">
          <a className="nav-dropdown-trigger" href="/altaro" aria-haspopup="true" onClick={() => setOpen(false)}>
            Altaro
            <span className="nav-caret" aria-hidden="true" />
          </a>
          <div className="nav-dropdown-menu" role="menu">
            {altaroGroups.map((group) => (
              <div className="nav-dropdown-item" key={group.label}>
                <a href={group.href} onClick={() => setOpen(false)}>
                  {group.label}
                  <span className="nav-sub-caret" aria-hidden="true" />
                </a>
                <div className="nav-submenu" role="menu">
                  {group.items.map((item) => (
                    <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="/reseller-program" onClick={() => setOpen(false)}>Reseller</a>
        <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}
