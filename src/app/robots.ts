/**
 * robots.ts — allow all crawlers; point to the sitemap.
 * Next 16: default export returns MetadataRoute.Robots.
 */

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep API + Next internals out of the index.
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
