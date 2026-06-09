import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LandMark TechEdge",
  description: "LandMark TechEdge products, backup solutions, CRM, HIMS, IVR, and technology services.",
};

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
