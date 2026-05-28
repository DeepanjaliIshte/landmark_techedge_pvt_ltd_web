"use client";

import logo from "../img/LTPLLogo.png";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

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
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="LandMark TechEdge home">
        <img src={logo.src} alt="LandMark TechEdge" />
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/#products">Products</a>
        <div className="nav-dropdown">
          <a className="nav-dropdown-trigger" href="/altaro" aria-haspopup="true">
            Altaro
            <span className="nav-caret" aria-hidden="true" />
          </a>
          <div className="nav-dropdown-menu" role="menu">
            {altaroGroups.map((group) => (
              <div className="nav-dropdown-item" key={group.label}>
                <a href={group.href}>
                  {group.label}
                  <span className="nav-sub-caret" aria-hidden="true" />
                </a>
                <div className="nav-submenu" role="menu">
                  {group.items.map((item) => (
                    <a href={item.href} key={item.label}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="/#industries">Industries</a>
        <a href="/#contact">Contact</a>
        <a className="nav-cta" href={whatsappHref}>
          <span className="nav-whatsapp-icon" aria-hidden="true" />
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
