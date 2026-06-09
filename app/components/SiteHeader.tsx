"use client";

import logo from "../img/LTPLLogo.png";
import { usePathname } from "next/navigation";

const altaroGroups = [
  {
    label: "Backup Solutions",
    href: "/altaro#backup-solutions",
    items: [
      { label: "VM Backup & Replication", href: "/altaro/vm-backup" },
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

const komalPages = [
  { label: "AI & ML", href: "/ai-ml" },
  { label: "IVR", href: "/ivr" },
  { label: "BizPlus CRM", href: "/bizpluscrm" },
];

export default function SiteHeader() {
  const pathname = usePathname() || "";

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="LandMark TechEdge home">
          <img src={logo.src} alt="LandMark TechEdge" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/" className={isActive("/") ? "active" : ""}>Home</a>
          <a href="/about" className={isActive("/about") ? "active" : ""}>About Us</a>
          <a href="/services" className={isActive("/services") ? "active" : ""}>Services</a>

          <div className="nav-dropdown">
            <a className={`nav-dropdown-trigger ${isActive("/altaro") ? "active" : ""}`} href="/altaro" aria-haspopup="true">
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
                      <a href={item.href} key={item.label} className={pathname === item.href ? "active" : ""}>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="/bizpluscrm" className={isActive("/bizpluscrm") ? "active" : ""}>BizplusCRM</a>
          <a href="/bizpluserp" className={isActive("/bizpluserp") ? "active" : ""}>BizplusERP</a>
          <a href="/ai-ml" className={isActive("/ai-ml") ? "active" : ""}>AI-ML</a>
          <a href="/ivr" className={isActive("/ivr") ? "active" : ""}>IVR</a>
          <a href="/trio-hims" className={isActive("/trio-hims") ? "active" : ""}>Trio HIMS</a>

          <a href="/reseller-program" className={isActive("/reseller-program") ? "active" : ""}>Distributor/Reseller</a>

          <a href="/contact" className={isActive("/contact") ? "active" : ""}>Contact Us</a>
        </nav>
      </header>
    </>
  );
}
