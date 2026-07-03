import type { Metadata } from "next";
import { headers } from "next/headers";
import { Archivo, Source_Sans_3, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drainmaninc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drainman INC — Toronto drain & plumbing experts since 1972",
    template: "%s · Drainman INC",
  },
  description:
    "Family-owned Toronto drain specialists since 1972. We clear blocked drains, stop basement floods, and run the camera down the main line. Serving Toronto & the GTA.",
  keywords: [
    "Toronto drain cleaning",
    "blocked drain Toronto",
    "backwater valve",
    "sewer camera inspection",
    "flood prevention Scarborough",
    "plumber Toronto GTA",
  ],
  authors: [{ name: "The Drain Man Inc" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Drainman INC",
    title: "Drainman INC — Toronto drain & plumbing experts since 1972",
    description:
      "Family-owned Toronto drain specialists since 1972. Blocked drains, flood prevention, and main-line camera work across the GTA.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TEMPORARY — red-theme preview (remove with proxy.ts + the .theme-red block
  // in globals.css once the client picks a colour).
  // The /red proxy tags requests with `x-theme: red`; flip the whole page's
  // brand ramp by adding `.theme-red` (defined in globals.css) to <body>.
  const theme = (await headers()).get("x-theme");
  const themeClass = theme === "red" ? "theme-red" : "";

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${sourceSans.variable} ${robotoMono.variable} h-full`}
    >
      <body className={`flex min-h-full flex-col bg-white text-ink antialiased ${themeClass}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
