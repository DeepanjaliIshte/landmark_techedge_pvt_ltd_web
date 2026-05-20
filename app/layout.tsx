import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "LandMark TechEdge",
  description: "LandMark TechEdge products, backup solutions, CRM, HIMS, IVR, and technology services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  );
}
