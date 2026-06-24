/**
 * Root layout — OWNED BY ARCHITECT. Forge & page builders must NOT edit this
 * file; request changes via the lead.
 *
 * Responsibilities:
 *  - Load the three brand fonts (next/font/google) and expose CSS vars that
 *    globals.css @theme consumes (--font-display-src / -body-src / -mono-src).
 *  - Site-wide metadata: metadataBase, title.template, default title/description,
 *    default Open Graph (/images/og/og-default.jpg) + Twitter card.
 *  - Render global chrome in the exact order (DESIGN-BRIEF §8.2):
 *      skip-link → EmergencyBanner → Header → {children} → Footer → MobileStickyBar
 *  - Inject site-wide LocalBusiness/Plumber JSON-LD.
 */

import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { JsonLd, localBusinessJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/utils";

/* ----- Fonts (DESIGN-BRIEF §3.1) ----- */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display-src",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body-src",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-mono-src",
});

/* ----- Site-wide metadata (CONTENT §13 + §13 OG default) ----- */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Drain Man | Honest Toronto Plumbers Since 1972",
    template: "%s | Drain Man",
  },
  description:
    "Master-licensed Toronto plumbers since 1972. Drains, waterproofing, excavation & 24/7 emergency plumbing across the GTA. Upfront pricing, no deposits.",
  applicationName: "The Drain Man Inc.",
  authors: [{ name: "The Drain Man Inc." }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "The Drain Man Inc.",
    title: "Drain Man — Honest Toronto Plumbers Since 1972",
    description:
      "Drains, waterproofing, excavation & 24/7 emergency plumbing across the GTA. Upfront pricing, no deposits, family-owned since 1972.",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "The Drain Man Inc. — honest Toronto plumbers since 1972",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Man — Honest Toronto Plumbers Since 1972",
    description:
      "Drains, waterproofing, excavation & 24/7 emergency plumbing across the GTA. Upfront pricing, no deposits, family-owned since 1972.",
    images: ["/images/og/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/brand/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1C2B2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-concrete text-ink font-body flex flex-col">
        {/* Skip to content (DESIGN-BRIEF §9 a11y) */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        {/* Global chrome order — DESIGN-BRIEF §8.2 */}
        <EmergencyBanner />
        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
        <MobileStickyBar />

        {/* Site-wide LocalBusiness/Plumber structured data */}
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
