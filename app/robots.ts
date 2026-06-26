import type { MetadataRoute } from "next";

// Base origin from NEXT_PUBLIC_SITE_URL; falls back to the production domain.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drainmaninc.com";

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
