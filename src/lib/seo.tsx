/**
 * seo.tsx — JSON-LD structured data helpers + the <JsonLd> renderer.
 *
 * Builders call these to inject schema.org markup:
 *   import { JsonLd, localBusinessJsonLd, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
 *   <JsonLd data={localBusinessJsonLd()} />
 *
 * - localBusinessJsonLd():     Plumber/LocalBusiness — NAP, hours, areaServed (GTA),
 *                              priceRange, geo, sameAs. Rendered site-wide in layout.tsx.
 * - serviceJsonLd(service):    Service schema for a /services/[slug] page.
 * - faqJsonLd(groups):         FAQPage schema for /faq.
 * - breadcrumbJsonLd(items):   BreadcrumbList for detail pages.
 *
 * JSON-LD is plain data; we type it loosely (JsonLdObject) to avoid a schema-dts
 * dependency. The <JsonLd> component is a Server Component (no "use client").
 */

import type { FaqGroup } from "@/data/faq";
import type { Service } from "@/data/services";
import { site } from "@/lib/site";
import { ALL_AREAS } from "@/data/serviceAreas";
import { SITE_URL, absoluteUrl } from "@/lib/utils";

export type JsonLdObject = Record<string, unknown>;

/* ---------------------------------------------------------------------------
   <JsonLd> — renders a JSON-LD <script>. Safe: data is our own, JSON-encoded.
   --------------------------------------------------------------------------- */
export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; we escape "<" to avoid breaking out
      // of the script context defensively.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* ---------------------------------------------------------------------------
   Shared identifiers
   --------------------------------------------------------------------------- */
const ORG_ID = `${SITE_URL}/#organization`;

/** PostalAddress block from site NAP. */
function postalAddress(): JsonLdObject {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };
}

/* ---------------------------------------------------------------------------
   LocalBusiness / Plumber  (DESIGN-BRIEF §9 SEO; rendered site-wide)
   --------------------------------------------------------------------------- */
export function localBusinessJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": ORG_ID,
    name: site.legalName,
    alternateName: "Drain Man",
    description: site.taglineDescriptive,
    url: SITE_URL,
    telephone: site.phoneTel,
    email: site.email,
    foundingDate: String(site.established),
    priceRange: "$$",
    image: absoluteUrl("/images/og/og-default.jpg"),
    logo: absoluteUrl("/images/brand/drainman-logo.svg"),
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.googleMapsUrl,
    areaServed: ALL_AREAS.map((name) => ({
      "@type": "City",
      name,
    })),
    // Mon–Sat 08:00–18:00 (Sunday by appointment; emergency 24/7 noted in copy).
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: site.social
      .map((s) => s.href)
      .filter((href) => href && href !== "#"),
    slogan: site.taglinePrimary,
  };
}

/* ---------------------------------------------------------------------------
   Service schema  (DESIGN-BRIEF §9 — Service schema on service pages)
   --------------------------------------------------------------------------- */
export function serviceJsonLd(service: Service): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.meta,
    serviceType: service.name,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.heroImage),
    provider: {
      "@type": "Plumber",
      "@id": ORG_ID,
      name: site.legalName,
      telephone: site.phoneTel,
    },
    areaServed: {
      "@type": "GeoCircle",
      name: "Toronto and the Greater Toronto Area",
    },
  };
}

/* ---------------------------------------------------------------------------
   FAQPage schema  (DESIGN-BRIEF §9 — FAQPage JSON-LD on /faq)
   --------------------------------------------------------------------------- */
export function faqJsonLd(groups: FaqGroup[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    ),
  };
}

/* ---------------------------------------------------------------------------
   BreadcrumbList  (used on /services/[slug])
   --------------------------------------------------------------------------- */
export interface BreadcrumbItem {
  name: string;
  /** Site-relative path, e.g. "/services". */
  href: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
