/**
 * reviews.ts — 12 placeholder reviews, transcribed verbatim from plan/CONTENT.md §7.
 *
 * IMPORTANT (rating mix): CONTENT §7 specifies ten 5★ and two 4★, where the two
 * 4★ are reviews #4 (Anna K.) and #9 (Tomasz W.) — their bodies contain the
 * mild "scheduling took longer / took a couple of calls" caveat that justifies
 * the 4★. (The lead's brief said #5/#10; CONTENT.md is authoritative for the
 * data and the 4★ wording lives in #4/#9, so we follow CONTENT.md. Flagged to lead.)
 *
 * Builders: render stars as filled/empty (4★ = four filled + one empty).
 * Do NOT label these as samples/placeholders in UI (CONTENT §7).
 * `service` matches a Service.slug so a service-tag chip can link if desired.
 */

export interface Review {
  /** 5 or 4. */
  stars: 4 | 5;
  body: string;
  /** First name + last initial, e.g. "Geoff M." */
  name: string;
  /** Toronto / GTA neighbourhood. */
  neighbourhood: string;
  /** Service slug (data/services.ts) for the tag chip. */
  service: string;
  /** Service display name for the tag chip (denormalized for convenience). */
  serviceLabel: string;
  /** Human date, e.g. "Sept 2025". */
  date: string;
}

export const REVIEWS: Review[] = [
  {
    stars: 5,
    body: "Our basement took on water during that big August storm and I was sure we were looking at a nightmare. Bill's crew came out, found exactly where it was getting in, and waterproofed the wall properly. Six months and two storms later, bone dry. They told me up front what it would cost and that was the price.",
    name: "Geoff M.",
    neighbourhood: "Scarborough",
    service: "basement-waterproofing",
    serviceLabel: "Basement Waterproofing",
    date: "Sept 2025",
  },
  {
    stars: 5,
    body: "Called at 11pm with a burst pipe spraying in the laundry room. A real person answered, talked me through the shut-off, and had someone here within the hour. No 'emergency surcharge' nonsense — just a fair price and a proper fix.",
    name: "Priya S.",
    neighbourhood: "North York",
    service: "emergency-plumbing",
    serviceLabel: "Emergency Plumbing",
    date: "Feb 2026",
  },
  {
    stars: 5,
    body: "Two other companies wanted to replace my whole sewer line. Drain Man ran a camera, showed me the actual footage — it was roots in one spot — and cleared it for a fraction of the price. Honest people. I won't call anyone else.",
    name: "Daniel R.",
    neighbourhood: "East York",
    service: "sewer-camera-inspection",
    serviceLabel: "Sewer Camera Inspection",
    date: "Nov 2025",
  },
  {
    stars: 4,
    body: "Had a backwater valve put in after our street flooded last year. They handled the permit, did the concrete work cleanly, and even pointed me to the city rebate. Scheduling took a little longer than I'd hoped, but the work itself was solid and the price was exactly what they quoted.",
    name: "Anna K.",
    neighbourhood: "Etobicoke",
    service: "backwater-valve",
    serviceLabel: "Backwater Valve",
    date: "July 2025",
  },
  {
    stars: 5,
    body: "Kitchen sink kept clogging no matter what I did. They snaked it, then explained it was a grease build-up and showed me how to keep it clear. Friendly, on time, and didn't try to sell me anything I didn't need.",
    name: "Marcus T.",
    neighbourhood: "Leaside",
    service: "drain-cleaning",
    serviceLabel: "Drain Cleaning",
    date: "Oct 2025",
  },
  {
    stars: 5,
    body: "We underpinned our basement to get more height and I was nervous about that kind of work. Bill was on site himself, explained every stage, and the structure was supported properly the whole way. The space is incredible now.",
    name: "Sophie L.",
    neighbourhood: "Riverdale",
    service: "excavation-underpinning",
    serviceLabel: "Excavation & Underpinning",
    date: "May 2025",
  },
  {
    stars: 5,
    body: "Old water heater died on a Saturday. They walked me through buying versus an Enercare rental, didn't push the pricier option, and had hot water back on the same day. Couldn't ask for better.",
    name: "Raymond C.",
    neighbourhood: "Markham",
    service: "water-heaters",
    serviceLabel: "Water Heaters",
    date: "Jan 2026",
  },
  {
    stars: 5,
    body: "My water bill doubled and nobody could tell me why. Drain Man found a slab leak under the kitchen without tearing the whole floor up. Precise work and a fair bill.",
    name: "Jennifer O.",
    neighbourhood: "Mississauga",
    service: "leak-detection",
    serviceLabel: "Leak Detection",
    date: "Dec 2025",
  },
  {
    stars: 4,
    body: "Sump pump quit during the spring thaw and water started coming in. They replaced it, added a battery backup, and tested everything. Took a couple of calls to get booked in during their busy season, but once they were here they were quick and tidy. Now I'm not lying awake every time it rains.",
    name: "Tomasz W.",
    neighbourhood: "Pickering",
    service: "sump-pump",
    serviceLabel: "Sump Pump",
    date: "Apr 2025",
  },
  {
    stars: 5,
    body: "Honest is the word. The plumber actually told me a repair I asked for wasn't necessary yet and saved me money. Who does that anymore? Family business that clearly cares about its name.",
    name: "Heather B.",
    neighbourhood: "The Beaches",
    service: "fixture-repair-installation",
    serviceLabel: "Fixture Repair",
    date: "Aug 2025",
  },
  {
    stars: 5,
    body: "We manage a few small commercial properties and Drain Man is our go-to now. Reliable, they show up, and the pricing is always clear up front. Saved us during a sewer backup at one of the units.",
    name: "Kevin P.",
    neighbourhood: "Vaughan",
    service: "commercial-plumbing",
    serviceLabel: "Commercial Plumbing",
    date: "Mar 2026",
  },
  {
    stars: 5,
    body: "Frozen pipe in January, of course. They thawed it, fixed the split section, and then insulated the run so it wouldn't happen again. Took the time to actually solve the problem, not just patch it.",
    name: "Linda F.",
    neighbourhood: "Richmond Hill",
    service: "burst-frozen-pipes",
    serviceLabel: "Burst & Frozen Pipes",
    date: "Jan 2026",
  },
];

/** Featured reviews for the Home page (CONTENT §2.9 uses #1, #4, #7 → indices 0,3,6). */
export const FEATURED_REVIEW_INDICES = [0, 3, 6] as const;

export function getFeaturedReviews(): Review[] {
  return FEATURED_REVIEW_INDICES.map((i) => REVIEWS[i]);
}

/** Distinct service labels present in the reviews, for an optional filter UI. */
export const REVIEW_SERVICE_FILTERS: { value: string; label: string }[] =
  Array.from(new Map(REVIEWS.map((r) => [r.service, r.serviceLabel])).entries())
    .map(([value, label]) => ({ value, label }));
