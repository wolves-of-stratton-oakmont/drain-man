import type { MetadataRoute } from "next";

// Keep this base in sync with `metadataBase` in app/layout.tsx and app/sitemap.ts.
const baseUrl = "https://drainmaninc.com";

/**
 * robots.txt — allow all crawlers across the public pages, keep them out of the
 * POST-only contact API, and point them at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
