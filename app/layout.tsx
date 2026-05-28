import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ContactSection from "./components/ContactSection";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
        <ContactSection />
      </body>
    </html>
  );
}
