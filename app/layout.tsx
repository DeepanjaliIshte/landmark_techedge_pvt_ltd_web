import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LandMark TechEdge",
  description: "LandMark TechEdge products, backup solutions, CRM, HIMS, IVR, and technology services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
