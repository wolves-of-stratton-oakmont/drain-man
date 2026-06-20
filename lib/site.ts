/**
 * Single source of truth for company facts used across the site.
 * Verified from research/SITE_SPEC.md. Builders: import from "@/lib/site".
 */

export const site = {
  name: "Drainman INC",
  legalName: "The Drain Man Inc",
  founded: 1972,
  tagline: "Family owned and operated since 1972",
  phone: {
    display: "(416) 699-1370",
    href: "tel:+14166991370",
  },
  email: "admin@drainmaninc.com",
  address: {
    line1: "440 Brimley Rd, Unit #11",
    city: "Scarborough",
    province: "ON",
    postal: "M1J 1A1",
    full: "440 Brimley Rd, Unit #11, Scarborough, ON M1J 1A1",
    lat: 43.730682,
    lng: -79.246028,
    placeId: "ChIJbypPpJXO1IkRTagYYBJsvs4",
  },
  licenses: {
    master: "P19120", // Master Plumbing License — plumbing & drain
    builder: "B18804", // Builders License — concrete, waterproofing, underpinning
  },
  serviceAreas: ["Toronto", "Brampton", "Mississauga", "Scarborough", "and the wider GTA"],
  links: {
    googleReview:
      "https://search.google.com/local/writereview?placeid=ChIJbypPpJXO1IkRTagYYBJsvs4",
    enercare: "https://www.enercare.ca/plumbing-electrical/plumbing-protection-plan",
  },
} as const;

/** Primary nav (FAQ deliberately excluded — footer-only per client). */
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
