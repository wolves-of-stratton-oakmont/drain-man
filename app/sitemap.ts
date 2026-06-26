import type { MetadataRoute } from "next";

// Base origin from NEXT_PUBLIC_SITE_URL; falls back to the production domain.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drainmaninc.com";

/**
 * Static sitemap covering all five public routes (Home, Services, About,
 * Contact, FAQ). FAQ is de-emphasized per the client, so it carries the lowest
 * priority; Home leads. /api/contact is intentionally excluded (it is a POST
 * endpoint, not a page).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.4 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
