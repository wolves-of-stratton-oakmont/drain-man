/**
 * metadata.ts — helper to build consistent per-page Metadata objects.
 *
 * Page builders: export `metadata` (or return from `generateMetadata`) using
 * this helper so titles, canonical URLs, and Open Graph stay consistent.
 *
 *   import { pageMetadata } from "@/lib/metadata";
 *   export const metadata = pageMetadata({
 *     title: "About Us | Family-Owned Plumbers Since 1972",  // verbatim CONTENT §13
 *     description: "...",                                     // verbatim CONTENT §13
 *     path: "/about",
 *   });
 *
 * Notes:
 * - `metadataBase` is set once in layout.tsx, so `path`/relative OG images resolve.
 * - Pass the FULL title string from CONTENT §13 and set `absoluteTitle: true`
 *   when the CONTENT title already includes "| Drain Man" (most do), so the
 *   layout's "%s | Drain Man" template is NOT appended twice.
 */

import type { Metadata } from "next";

export interface PageMetaInput {
  /** Title string. If it already contains the brand suffix, set absoluteTitle. */
  title: string;
  description: string;
  /** Site-relative canonical path, e.g. "/services". Defaults to no canonical. */
  path?: string;
  /** OG image path (relative to /public) or absolute URL. */
  ogImage?: string;
  /** Override OG title/description if they should differ from the tab title. */
  ogTitle?: string;
  ogDescription?: string;
  /** When true, title is used as-is (not run through the "%s | Drain Man" template). */
  absoluteTitle?: boolean;
  /** Set false to noindex (e.g. utility pages you don't want crawled). Default true. */
  index?: boolean;
}

const DEFAULT_OG = "/images/og/og-default.jpg";

export function pageMetadata(input: PageMetaInput): Metadata {
  const {
    title,
    description,
    path,
    ogImage = DEFAULT_OG,
    ogTitle,
    ogDescription,
    absoluteTitle = true,
    index = true,
  } = input;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      ...(path ? { url: path } : {}),
      images: [{ url: ogImage }],
      siteName: "The Drain Man Inc.",
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [ogImage],
    },
    ...(index
      ? {}
      : { robots: { index: false, follow: true } }),
  };
}
