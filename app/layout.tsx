import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const primary = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
});

const secondary = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["300", "400", "500", "600", "700"],
});

const editorial = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "BDE Management Consulting | Governance, IV & AI-context",
  description:
    "Governance, informatievoorziening en AI-context vertaald naar controleerbare structuren, uitvoerbare portfolio's en heldere implementatie.",
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${primary.variable} ${secondary.variable} ${editorial.variable}`}>
      <body>{children}</body>
    </html>
  );
}
