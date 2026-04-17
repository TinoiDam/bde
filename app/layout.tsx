import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "BDE Management Consulting | AI Governance & Strategic Implementation",
  description:
    "Advisory voor informatiehuishouding, AI governance, compliance en veranderopgaven waar bestuur, business en IT samen moeten bewegen.",
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
