/**
 * site.ts — company NAP, brand strings, navigation, groups, Enercare, trust,
 * value props, footer link groups, social.
 *
 * Single source of truth, transcribed verbatim from plan/CONTENT.md §1.
 * Page builders import from here; do NOT hardcode NAP/phone/copy in pages.
 *
 * Phone: always link tel:+14166991370 (CONTENT §14). Address links to Google
 * Maps. Email links mailto:.
 */

import type { IconName } from "./icons";

/* ---------------------------------------------------------------------------
   Service groups (DESIGN-BRIEF §8.1 grouping) — id + label.
   Service.group references these ids; nav mega-menu + Services index group by them.
   --------------------------------------------------------------------------- */
export type ServiceGroupId =
  | "drains-sewers"
  | "waterproofing-excavation"
  | "plumbing-water-heaters"
  | "emergency-commercial";

export interface ServiceGroup {
  id: ServiceGroupId;
  /** Display label, e.g. "Drains & Sewers" */
  label: string;
  /** UPPERCASE eyebrow form used as the group heading (CONTENT §5) */
  eyebrow: string;
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "drains-sewers",
    label: "Drains & Sewers",
    eyebrow: "DRAINS & SEWERS",
  },
  {
    id: "waterproofing-excavation",
    label: "Waterproofing & Excavation",
    eyebrow: "WATERPROOFING & EXCAVATION",
  },
  {
    id: "plumbing-water-heaters",
    label: "Plumbing & Water Heaters",
    eyebrow: "PLUMBING & WATER HEATERS",
  },
  {
    id: "emergency-commercial",
    label: "Emergency & Commercial",
    eyebrow: "EMERGENCY & COMMERCIAL",
  },
];

export function getServiceGroup(id: ServiceGroupId): ServiceGroup {
  const group = SERVICE_GROUPS.find((g) => g.id === id);
  if (!group) throw new Error(`Unknown service group: ${id}`);
  return group;
}

/* ---------------------------------------------------------------------------
   Nav
   --------------------------------------------------------------------------- */
export interface NavItem {
  label: string;
  href: string;
  /** Marks the Services item that renders as a mega-menu dropdown. */
  hasMegaMenu?: boolean;
}

/** Primary nav (CONTENT §1.2). "Services" carries the mega-menu. */
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/* ---------------------------------------------------------------------------
   Reusable CTA labels (CONTENT §1.3)
   --------------------------------------------------------------------------- */
export const CTA = {
  phone: "Call (416) 699-1370",
  phoneLong: "Call (416) 699-1370 — a real plumber answers",
  estimate: "Request a Free Estimate",
  estimateAlt: "Get your upfront price",
  estimateShort: "Free Estimate",
  learnMore: "Learn more",
  viewAllServices: "View all services",
  readAllReviews: "Read all reviews",
  seeAllAreas: "See all service areas",
} as const;

/* ---------------------------------------------------------------------------
   Company NAP + brand (CONTENT §1.1, §1.5; DESIGN-BRIEF §6.2 / §8.3)
   --------------------------------------------------------------------------- */
export const site = {
  legalName: "The Drain Man Inc.",
  /** Wordmark / brand short name */
  brand: "DRAIN MAN",

  taglinePrimary: "Keep water where it belongs.",
  taglineDescriptive: "Honest, master-licensed Toronto plumbers since 1972.",
  microPositioning:
    "Services, not sales — our rates up front, not at the front door.",

  /** Footer brand blurb (CONTENT §1.5) */
  brandBlurb:
    "The Drain Man Inc. — family-owned, master-licensed Toronto plumbers since 1972. Drains, waterproofing, excavation and emergency plumbing across the GTA. Services, not sales.",

  established: 1972,
  /** Whole-number years of service used in copy ("54 years"). */
  yearsOfService: 54,

  // --- Phone ---
  phoneDisplay: "(416) 699-1370",
  phoneTel: "+14166991370",

  // --- Email (placeholder per CONTENT §14 — user to confirm) ---
  email: "info@thedrainman.ca",

  // --- Address parts ---
  address: {
    line1: "440 Brimley Rd, Unit #11",
    street: "440 Brimley Rd",
    unit: "Unit #11",
    city: "Scarborough",
    region: "ON",
    regionName: "Ontario",
    postalCode: "M1J 1A1",
    country: "CA",
    countryName: "Canada",
    /** One-line form used in the header utility bar (mono). */
    short: "440 BRIMLEY RD, SCARBOROUGH",
    /** Full single-line form. */
    full: "440 Brimley Rd, Unit #11, Scarborough, ON M1J 1A1",
  },

  // --- Geo (Scarborough HQ, approximate; for LocalBusiness/Map) ---
  geo: {
    latitude: 43.7404,
    longitude: -79.2546,
  },

  // --- Google Maps link for the shop ---
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Drain+Man+Inc+440+Brimley+Rd+Unit+11+Scarborough+ON+M1J+1A1",

  // --- Hours (CONTENT §1.5) ---
  hours: {
    weekdays: "Monday–Saturday, 8:00 AM – 6:00 PM",
    sunday: "Sunday by appointment",
    emergency: "24/7 Emergency Service",
    /** Compact mono form for the header utility bar. */
    short: "MON–SAT 8–6 · 24/7 EMERGENCY",
    /** Compact form for the contact/footer spec block. */
    specBlock: "MON–SAT 8:00–6:00 · 24/7 EMERGENCY",
  },

  // --- Credentials line ---
  credentials: "Master-licensed · Fully insured",

  // --- Social placeholders (no real handles yet — user to confirm) ---
  social: [
    { label: "Facebook", href: "#", icon: "arrow-up-right" as IconName },
    { label: "Instagram", href: "#", icon: "arrow-up-right" as IconName },
    { label: "Google", href: "#", icon: "map-pin" as IconName },
  ],

  /** Where to leave a review (placeholder until the real Google profile is live). */
  googleReviewUrl: "#",
} as const;

/* ---------------------------------------------------------------------------
   Emergency banner copy (CONTENT §1.4 / DESIGN-BRIEF §8.2)
   --------------------------------------------------------------------------- */
export const emergencyBanner = {
  full: "Water where it shouldn't be? 24/7 emergency plumbing across Toronto & the GTA — Call (416) 699-1370. A real plumber answers.",
  /** The lead phrase rendered bold, before the phone CTA. */
  lead: "Water where it shouldn't be?",
  body: "24/7 emergency plumbing across Toronto & the GTA —",
  tail: "A real plumber answers.",
  short: "24/7 emergency? Call (416) 699-1370",
} as const;

/* ---------------------------------------------------------------------------
   Value props — the positioning strip (CONTENT §2.2; DESIGN-BRIEF §8.5.2)
   mono + icon. Order matters.
   --------------------------------------------------------------------------- */
export interface ValueProp {
  label: string;
  icon: IconName;
}

export const VALUE_PROPS: ValueProp[] = [
  { label: "WE PROVIDE SERVICES, NOT SALES", icon: "handshake" },
  { label: "OUR RATES UP FRONT — NOT AT THE FRONT DOOR", icon: "tag" },
  { label: "NO DEPOSITS — YOU PAY WHEN THE WORK IS DONE", icon: "no-deposit" },
  { label: "MASTER-LICENSED & FULLY INSURED", icon: "shield-check" },
];

/* ---------------------------------------------------------------------------
   Trust chips — under-hero strip (CONTENT §2.1; DESIGN-BRIEF §6.11)
   --------------------------------------------------------------------------- */
export interface TrustChip {
  label: string;
  icon: IconName;
}

export const TRUST_CHIPS: TrustChip[] = [
  { label: "LICENSED & INSURED", icon: "shield-check" },
  { label: "UPFRONT PRICING", icon: "tag" },
  { label: "NO DEPOSITS", icon: "no-deposit" },
  { label: "24/7 EMERGENCY", icon: "clock-247" },
  { label: "AUTHORIZED ENERCARE PARTNER", icon: "check" },
  { label: "SINCE 1972", icon: "family" },
];

/* ---------------------------------------------------------------------------
   "Why Drain Man" features — 2×2 dark band (CONTENT §2.4; DESIGN-BRIEF §6.5)
   --------------------------------------------------------------------------- */
export interface Feature {
  title: string;
  body: string;
  icon: IconName;
}

export const WHY_FEATURES: Feature[] = [
  {
    title: "Honest, upfront pricing",
    body: "You get our rate before we start, not a surprise at the front door. The price we quote is the price you pay.",
    icon: "tag",
  },
  {
    title: "No deposits, ever",
    body: "We don't ask for money up front. You pay when the work is done and you're satisfied. Simple as that.",
    icon: "no-deposit",
  },
  {
    title: "Master-licensed & insured",
    body: "Licensed Toronto plumbers with decades of training and full insurance. The job is done to code, the right way.",
    icon: "shield-check",
  },
  {
    title: "Family-owned since 1972",
    body: "Three generations, the same name on the truck, and staff who've been here 20+ years. We're not going anywhere.",
    icon: "family",
  },
];

/* ---------------------------------------------------------------------------
   Process steps — "how a job goes" (CONTENT §2.5; DESIGN-BRIEF §6.14)
   --------------------------------------------------------------------------- */
export interface ProcessStep {
  /** "01"–"05" */
  number: string;
  title: string;
  body: string;
  icon: IconName;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Call & assess",
    body: "You call (416) 699-1370 and tell us what's going on. We ask the right questions and, when needed, come out and look — drain camera and all.",
    icon: "phone",
  },
  {
    number: "02",
    title: "Upfront written price",
    body: "We diagnose the real problem and give you a clear, itemized price before any work begins. No guessing, no hidden line items.",
    icon: "tag",
  },
  {
    number: "03",
    title: "Schedule — no deposit",
    body: "Book the work that suits your timeline. We don't take a deposit; you're not paying for anything until it's done.",
    icon: "calendar",
  },
  {
    number: "04",
    title: "Done right",
    body: "Master-licensed crews do the work to code, protect your home, and keep you posted as we go.",
    icon: "wrench",
  },
  {
    number: "05",
    title: "Clean-up & guarantee",
    body: "We leave the site clean, walk you through what we did, and stand behind the work in writing.",
    icon: "shield-check",
  },
];

/* ---------------------------------------------------------------------------
   By-the-numbers stats — dark band (CONTENT §2.6; DESIGN-BRIEF §6.6)
   --------------------------------------------------------------------------- */
export interface Stat {
  /** The display value, e.g. "1972", "54", "24/7", "$0", "GTA". */
  value: string;
  /** One-line caption beneath. */
  caption: string;
  /** Numeric target for the count-up animation; omit for non-numeric values
      (like "24/7" or "GTA") which render instantly. */
  countTo?: number;
  /** Optional prefix/suffix kept outside the counted number (e.g. "$"). */
  prefix?: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  { value: "1972", caption: "Family-owned since", countTo: 1972 },
  { value: "54", caption: "Years serving the GTA", countTo: 54 },
  { value: "24/7", caption: "Emergency response" },
  { value: "$0", caption: "Deposit to get started", prefix: "$", countTo: 0 },
  { value: "GTA", caption: "Toronto + surrounding areas" },
];

export const statsFramingLine =
  "Real numbers, plainly stated. No invented review counts, no fine print.";

/* ---------------------------------------------------------------------------
   Enercare partnership (CONTENT §2.7; DESIGN-BRIEF §6.15 / §8.4)
   --------------------------------------------------------------------------- */
export const enercare = {
  eyebrow: "AUTHORIZED ENERCARE PARTNER",
  heading: "Water heaters and protection plans, backed by Enercare.",
  body: "As an authorized Enercare partner, we install and service tank and tankless water heaters and can set you up with Enercare rentals and protection plans — so your hot water and home systems are covered. Same honest advice, whether you buy or rent.",
  linkLabel: "Explore water heaters",
  linkHref: "/services/water-heaters",
  /** Official Enercare logo (Quarry sourced the real brand SVG). */
  logo: "/images/partners/enercare-logo.svg",
  logoAlt: "Authorized Enercare partner",
} as const;

/* ---------------------------------------------------------------------------
   Footer link groups (CONTENT §1.5 / DESIGN-BRIEF §8.3)
   Service links are derived from data/services.ts at render time; the Company
   and Service-Areas quick links live here.
   --------------------------------------------------------------------------- */
export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Financing", href: "/financing" },
  { label: "Contact", href: "/contact" },
  { label: "24/7 Emergency", href: "/emergency" },
];

/** Quick service-area links shown in the footer (CONTENT §1.5). */
export const FOOTER_AREA_LINKS: FooterLink[] = [
  { label: "Scarborough", href: "/service-areas" },
  { label: "North York", href: "/service-areas" },
  { label: "Etobicoke", href: "/service-areas" },
  { label: "East York", href: "/service-areas" },
  { label: "Toronto", href: "/service-areas" },
  { label: "Markham", href: "/service-areas" },
  { label: "Richmond Hill", href: "/service-areas" },
  { label: "Vaughan", href: "/service-areas" },
  { label: "Pickering", href: "/service-areas" },
  { label: "Mississauga", href: "/service-areas" },
];

export const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/* ---------------------------------------------------------------------------
   Footer trust row (CONTENT §1.5 trust badges; DESIGN-BRIEF §8.3 trust row)
   These are our own honest lockups (Forge builds the SVGs T1–T4 per IMAGE-SPEC
   §8). Enercare is the real partner mark.
   --------------------------------------------------------------------------- */
export interface TrustBadge {
  label: string;
  /** SVG path (Quarry/Forge), or undefined to render as a text lockup. */
  src?: string;
  alt: string;
}

export const TRUST_BADGES: TrustBadge[] = [
  {
    label: "Authorized Enercare Partner",
    src: "/images/partners/enercare-logo.svg",
    alt: "Authorized Enercare partner",
  },
  {
    label: "Master Licensed Plumber",
    src: "/images/trust/master-licensed.svg",
    alt: "Master-licensed Toronto plumbers",
  },
  {
    label: "Fully Insured",
    src: "/images/trust/fully-insured.svg",
    alt: "Fully insured plumbing company",
  },
  {
    label: "Family-Owned Since 1972",
    src: "/images/trust/family-1972.svg",
    alt: "Family-owned since 1972",
  },
  {
    label: "Proudly Toronto",
    src: "/images/trust/proudly-toronto.svg",
    alt: "Proudly serving Toronto and the GTA",
  },
];

/* ---------------------------------------------------------------------------
   Pre-footer CTA band default copy (CONTENT §2.10) — pages may override.
   --------------------------------------------------------------------------- */
export const defaultCtaBand = {
  eyebrow: "LET'S TALK",
  heading: "Talk to a real plumber, not a call centre.",
  lead: "Tell us what's going on and we'll give you a straight answer and an upfront price. No deposit, no pressure.",
} as const;
