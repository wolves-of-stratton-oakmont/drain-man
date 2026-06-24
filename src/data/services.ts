/**
 * services.ts — the 14 services, transcribed verbatim from plan/CONTENT.md §4.
 *
 * Single source of truth for service copy, slugs, images, and icons.
 * - Slugs match DESIGN-BRIEF §8.1 / IMAGE-SPEC exactly.
 * - `image` = the 3:2 CARD image (IMAGE-SPEC §4a card-image map).
 * - `heroImage` = the 16:9 detail-page HERO band (IMAGE-SPEC §4b).
 * - `icon` = an IconName from lib/icons.ts (Forge renders the SVG).
 * - `group` = a ServiceGroupId from lib/site.ts.
 *
 * Order: grouped per DESIGN-BRIEF §8.1 (Drains & Sewers → Waterproofing &
 * Excavation → Plumbing & Water Heaters → Emergency & Commercial), with the
 * most-requested service first within each group.
 *
 * Helpers: getServiceBySlug, getServicesByGroup, FLAGSHIP_SLUGS, getFlagshipServices.
 */

import type { IconName } from "@/lib/icons";
import type { ServiceGroupId } from "@/lib/site";

export interface Service {
  slug: string;
  name: string;
  group: ServiceGroupId;
  /** ≤ ~22 words, for service cards. */
  cardBlurb: string;
  /** Long description — array of paragraphs (2 short paras per CONTENT §4). */
  long: string[];
  /** "What's included" checklist. */
  scope: string[];
  /** "Signs you need this" list. */
  signs: string[];
  /** One-line SEO/preview description (CONTENT §4 `meta`). */
  meta: string;
  /** 3:2 CARD image path (IMAGE-SPEC §4a). */
  image: string;
  /** 16:9 detail-page HERO image path (IMAGE-SPEC §4b). */
  heroImage: string;
  /** Alt text for the card image (IMAGE-SPEC verbatim). */
  imageAlt: string;
  /** Alt text for the hero image (IMAGE-SPEC verbatim). */
  heroImageAlt: string;
  /** Custom icon name (lib/icons.ts). */
  icon: IconName;
}

export const SERVICES: Service[] = [
  /* ===================== DRAINS & SEWERS ===================== */
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning & Snaking",
    group: "drains-sewers",
    cardBlurb:
      "Slow or backed-up drains cleared fast — sinks, tubs, toilets, floor drains and main lines. We clear the clog and tell you what caused it.",
    long: [
      "A clogged drain is the most common call we get, and after fifty-four years there isn't one we haven't seen. We clear blockages in kitchen and bathroom sinks, tubs, showers, toilets, floor drains, and main sewer lines using professional augers (snakes) and, where it's the right tool, high-pressure water jetting.",
      "Then we do the part a lot of companies skip: we tell you what actually caused the clog — grease, roots, a bellied pipe, or just years of buildup — so it doesn't keep coming back. If the camera shows a bigger problem, we'll show you the footage and give you honest options, never a scare tactic.",
    ],
    scope: [
      "Diagnosis of the blocked fixture or line",
      "Mechanical snaking / augering of the affected drain",
      "High-pressure water jetting where appropriate",
      "Clearing of kitchen, bathroom, laundry and floor drains",
      "Main sewer-line clearing",
      "A plain-English explanation of the cause and how to prevent it",
      "Upfront price before we start — no deposit",
    ],
    signs: [
      "Water drains slowly or backs up in a sink, tub or shower",
      "Gurgling sounds from drains or toilets",
      "A bad smell coming from a drain",
      "More than one fixture backing up at once (often a main-line clog)",
      "Recurring clogs in the same drain",
    ],
    meta: "Fast, professional drain cleaning and snaking in Toronto & the GTA — sinks, toilets, floor drains and main lines. Upfront pricing, no deposit.",
    image: "/images/services/drain-cleaning.jpg",
    heroImage: "/images/services/heroes/drain-cleaning-hero.jpg",
    imageAlt: "Clearing a clogged drain with a professional auger",
    heroImageAlt: "A Drain Man plumber clearing a blocked drain in the GTA",
    icon: "auger",
  },
  {
    slug: "sewer-camera-inspection",
    name: "Sewer Camera Inspection",
    group: "drains-sewers",
    cardBlurb:
      "A waterproof camera sent down your line shows exactly what's wrong — roots, cracks, blockages or a collapsed pipe — before anyone digs.",
    long: [
      "When a drain keeps backing up or you're buying a home, guessing is expensive. We feed a high-resolution waterproof camera through your drain or sewer line and watch it on screen in real time, so we can see precisely what's going on — tree roots, grease buildup, cracks, offsets, bellies, or a collapsed section — and exactly where it is.",
      "You see the same footage we do. It means any repair we recommend is based on evidence, not a hunch, and you're never paying to dig up a yard on a guess.",
    ],
    scope: [
      "High-resolution waterproof camera inspection of drains/sewer line",
      "Real-time, on-screen footage you can watch",
      "Locating the depth and position of the problem",
      "Identification of roots, cracks, offsets, bellies, blockages and collapses",
      "Honest recommendation with options (no upsell)",
      "Footage/notes for your records or a home purchase",
    ],
    signs: [
      "Repeated main-line backups or slow drains throughout the house",
      "You're buying or selling a home (older Toronto housing stock especially)",
      "Sewage smell or wet spots in the yard",
      "Before any drain repair or excavation, to confirm the real issue",
      "Mature trees near your sewer line",
    ],
    meta: "Sewer and drain camera inspections in Toronto — see the real problem on screen before you dig. Honest diagnosis, evidence-based repairs.",
    image: "/images/services/sewer-camera-inspection.jpg",
    heroImage: "/images/services/heroes/sewer-camera-inspection-hero.jpg",
    imageAlt: "A sewer camera inspecting a drain line",
    heroImageAlt:
      "Running a sewer camera inspection on a Toronto drain line",
    icon: "camera-cable",
  },
  {
    slug: "drain-repair-replacement",
    name: "Drain Repair & Replacement",
    group: "drains-sewers",
    cardBlurb:
      "When a pipe is cracked, collapsed or root-choked, we fix the pipe itself — repair or replace the failed section and restore proper flow.",
    long: [
      "Sometimes a snake clears the symptom but not the cause. When a camera shows a drain or sewer pipe that's cracked, offset, bellied, root-choked, or collapsed, we repair or replace the failed section properly. Depending on the situation we use targeted excavation to access and replace damaged pipe.",
      "We size it right, lay it to the correct slope, and make sure water flows the way it should — not just today, but for decades. You'll see the footage of the problem first and get an upfront price for the fix, so there are no surprises once the work starts.",
    ],
    scope: [
      "Camera confirmation of the failed pipe and its location",
      "Repair or replacement of cracked, offset, bellied or collapsed sections",
      "Excavation and access where required",
      "Correct pipe sizing and slope for proper drainage",
      "Backfill and site restoration",
      "Upfront, itemized price — no deposit",
    ],
    signs: [
      "A drain that backs up again soon after being snaked",
      "Camera footage showing cracks, root intrusion or a collapsed pipe",
      "Sinkholes, soft spots or pooling water in the yard",
      "Sewage odours that don't go away",
      "Frequent clogs in an older clay or cast-iron line",
    ],
    meta: "Drain and sewer pipe repair and replacement in the GTA — fix cracked, collapsed or root-damaged lines the right way. Upfront pricing.",
    image: "/images/services/drain-repair-replacement.jpg",
    heroImage: "/images/services/heroes/drain-repair-replacement-hero.jpg",
    imageAlt: "Repairing and replacing a damaged drain line",
    heroImageAlt: "Replacing a failed sewer line in an open trench",
    icon: "pipe",
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    group: "drains-sewers",
    cardBlurb:
      "A hidden leak can rot and ruin a home before you see it. We find leaks behind walls, under floors and underground — without tearing the place apart.",
    long: [
      "The worst leaks are the ones you can't see — behind a wall, under a slab, or underground — quietly running up your water bill and damaging your home. We use the right tools and decades of experience to locate hidden leaks accurately, so the repair is precise instead of exploratory.",
      "That means we open up only what we need to, find the source, and fix it — saving you the cost and mess of guesswork. If your water bill jumped, you hear running water with everything off, or you've got unexplained damp, let us find it.",
    ],
    scope: [
      "Diagnosis of suspected hidden or underground leaks",
      "Leak location behind walls, under floors and slabs, and underground",
      "Pinpointing the source before any demolition",
      "Targeted repair of the leak",
      "Guidance on water-damage prevention",
      "Upfront pricing, no deposit",
    ],
    signs: [
      "An unexplained jump in your water bill",
      "The sound of running water when everything is off",
      "Damp spots, stains, warping, or mold with no obvious source",
      "A water meter that moves with no water in use",
      "Low pressure paired with unexplained moisture",
    ],
    meta: "Hidden leak detection in Toronto & the GTA — find leaks behind walls, under slabs and underground without tearing your home apart. Upfront pricing.",
    image: "/images/services/leak-detection.jpg",
    heroImage: "/images/services/heroes/leak-detection-hero.jpg",
    imageAlt: "Detecting a hidden leak in a home",
    heroImageAlt: "Pinpointing a hidden leak before it damages the home",
    icon: "leak-detect",
  },

  /* ===================== WATERPROOFING & EXCAVATION ===================== */
  {
    slug: "basement-waterproofing",
    name: "Basement Waterproofing",
    group: "waterproofing-excavation",
    cardBlurb:
      "Keep your basement dry for good — interior and exterior waterproofing, crack repair, drainage and sump systems, done properly from the ground down.",
    long: [
      "A wet basement is one of the most stressful problems a homeowner can face, and one of the most over-sold. We waterproof Toronto basements the honest way — by finding where the water is actually getting in and fixing that. Depending on your home we offer exterior waterproofing (excavating to the foundation wall, cleaning it, and applying a proper waterproof membrane and drainage) and interior waterproofing (interior weeping tile, drainage and a sump system to manage water that reaches the wall).",
      "We'll tell you straight which one your home needs — sometimes both, sometimes far less than another company quoted you. Either way, the goal is the same: a dry basement that stays dry.",
    ],
    scope: [
      "Diagnosis of where and why water is entering",
      "Exterior waterproofing: excavation, foundation cleaning, membrane + drainage",
      "Interior waterproofing: weeping tile, drainage channel and sump system",
      "Foundation crack repair",
      "Backwater valve and sump pump options where needed",
      "Backfill, grading and site clean-up",
      "Written workmanship guarantee and an upfront price",
    ],
    signs: [
      "Water, dampness or puddles in the basement after rain or snowmelt",
      "Cracks in foundation walls or floor",
      "Efflorescence (white chalky residue) or peeling paint on basement walls",
      "Musty smell, mold, or humidity that won't quit",
      "Finishing a basement and want it protected first",
    ],
    meta: "Interior & exterior basement waterproofing in Toronto & the GTA — find the real leak, fix it, and keep your basement dry. Honest, upfront pricing.",
    image: "/images/services/basement-waterproofing.jpg",
    heroImage: "/images/services/heroes/basement-waterproofing-hero.jpg",
    imageAlt: "Waterproofing a basement foundation wall",
    heroImageAlt: "Exterior basement waterproofing on a foundation wall",
    icon: "waterproofing",
  },
  {
    slug: "excavation-underpinning",
    name: "Excavation & Underpinning",
    group: "waterproofing-excavation",
    cardBlurb:
      "Exterior digs done right — from foundation excavation and drain replacement to underpinning that lowers your basement and adds usable height.",
    long: [
      "Some jobs can only be done from the outside and below grade, and that's where Drain Man has decades of hands-on experience — our owner, Bill, is on these sites himself. We handle exterior excavation to access and repair foundations, waterproofing and sewer lines, and underpinning to safely lower an existing basement floor for more headroom and a more usable space.",
      "This is careful, engineered work: we dig in controlled sections, support the structure properly, and protect your property throughout. Done right, it adds real value to your home; done wrong, it's a disaster — which is exactly why you want a 54-year company that does it every day.",
    ],
    scope: [
      "Site assessment and planning (with engineering where required)",
      "Controlled exterior excavation to the foundation",
      "Underpinning to safely lower/deepen the basement",
      "Foundation access for waterproofing and drain/sewer repair",
      "Structural support and shoring during the dig",
      "Backfill, compaction, grading and clean-up",
      "Upfront scope and pricing — no deposit to start",
    ],
    signs: [
      "You want more ceiling height or a legal lower-level living space",
      "Foundation or exterior drain repairs that require digging",
      "Exterior waterproofing of the foundation wall",
      "Settlement, structural cracks, or a sinking foundation",
      "Adding a basement walkout or entrance",
    ],
    meta: "Foundation excavation and basement underpinning in Toronto — lower your basement, repair foundations, and waterproof from the outside. Decades of experience.",
    image: "/images/services/excavation-underpinning.jpg",
    heroImage: "/images/services/heroes/excavation-underpinning-hero.jpg",
    imageAlt: "Excavation and underpinning work at a GTA home",
    heroImageAlt: "Excavation and underpinning to deepen a basement",
    icon: "excavator",
  },
  {
    slug: "backwater-valve",
    name: "Backwater Valve Installation",
    group: "waterproofing-excavation",
    cardBlurb:
      "Stop city sewer backups from flooding your basement. We install backwater valves that let water out and never let it back in.",
    long: [
      "When the city sewer surcharges during a heavy storm, it can push sewage right back up into your basement — one of the worst things that can happen to a home. A backwater valve is a simple, powerful piece of protection: it lets your drains flow out as normal but automatically closes to block anything from flowing back in.",
      "We install backwater valves to code, in the right spot on your line, and many Toronto homeowners qualify for a City of Toronto rebate toward the work — we'll point you to it. It's one of the best-value upgrades you can make to protect a finished basement.",
    ],
    scope: [
      "Assessment of your drain layout and the best valve location",
      "Supply and installation of a code-approved backwater valve",
      "Concrete cutting and restoration where required",
      "Camera check of the line as needed",
      "Guidance on the City of Toronto subsidy/rebate program",
      "Upfront price, no deposit",
    ],
    signs: [
      "Your basement has flooded or backed up during heavy rain",
      "You're finishing a basement and want to protect the investment",
      "Your home is in a low-lying or flood-prone Toronto neighbourhood",
      "Your insurer recommends (or requires) one",
      "You want to qualify for the City's backwater valve rebate",
    ],
    meta: "Backwater valve installation in Toronto & the GTA — stop sewer backups from flooding your basement. Code-compliant, rebate guidance included.",
    image: "/images/services/backwater-valve.jpg",
    heroImage: "/images/services/heroes/backwater-valve-hero.jpg",
    imageAlt: "A backwater valve installed in a basement floor",
    heroImageAlt: "Installing a backwater valve in a basement floor",
    icon: "backwater-valve",
  },
  {
    slug: "sump-pump",
    name: "Sump Pump Installation",
    group: "waterproofing-excavation",
    cardBlurb:
      "Keep ground water out of your basement with a properly sized sump pump and pit — plus battery backup options for when the power goes out.",
    long: [
      "A sump pump is your basement's last line of defence against rising ground water — it collects water in a pit and pumps it safely away from your foundation before it can reach your floor. We install and replace sump pumps and pits sized correctly for your home, and we strongly recommend a battery backup, because the storms that flood basements are the same storms that knock out the power.",
      "We'll set it up so it actually works when you need it, test it, and show you how to check it yourself. It's a small system that prevents a very big problem.",
    ],
    scope: [
      "Assessment of ground-water and drainage conditions",
      "Sump pit installation or repair",
      "Supply and installation of a correctly sized sump pump",
      "Battery backup system options",
      "Discharge routing away from the foundation",
      "Testing and a quick how-to for the homeowner",
      "Upfront price, no deposit",
    ],
    signs: [
      "Water seeping into the basement, especially after storms or snowmelt",
      "An existing sump pump that's old, noisy, or runs constantly",
      "No backup for your current pump",
      "A high water table or a history of basement dampness",
      "Pairing with interior waterproofing for full protection",
    ],
    meta: "Sump pump installation and replacement in the GTA — keep ground water out of your basement, with battery backup options. Honest, upfront pricing.",
    image: "/images/services/sump-pump.jpg",
    heroImage: "/images/services/heroes/sump-pump-hero.jpg",
    imageAlt: "A sump pump installed in a basement pit",
    heroImageAlt: "A sump pump system protecting a basement",
    icon: "sump-pump",
  },

  /* ===================== PLUMBING & WATER HEATERS ===================== */
  {
    slug: "water-heaters",
    name: "Water Heaters (Tank & Tankless)",
    group: "plumbing-water-heaters",
    cardBlurb:
      "Tank and tankless water heaters supplied, installed and serviced — including Enercare rentals and protection plans. Hot water, sized right.",
    long: [
      "No hot water is more than an inconvenience, and the wrong water heater is a cost you live with for years. We install and service both tank and tankless water heaters, and we'll help you pick the right one for your household's actual hot-water demand — not the most expensive one on the shelf.",
      "As an authorized Enercare partner, we can also set you up with an Enercare rental or protection plan, so your water heater is covered and maintained without a big upfront purchase. Buy or rent, the advice is the same: honest, and based on what your home needs.",
    ],
    scope: [
      "Help choosing tank vs. tankless for your household",
      "Supply and installation of your new water heater",
      "Removal and disposal of the old unit",
      "Enercare rental and protection plan setup (authorized partner)",
      "Repair and servicing of existing units",
      "Code-compliant venting, gas and water connections",
      "Upfront pricing, no deposit",
    ],
    signs: [
      "No hot water, or it runs out quickly",
      "Rusty, discoloured or smelly hot water",
      "Water pooling around the base of the tank",
      "A water heater more than ~10–12 years old",
      "Rumbling or popping noises from the tank",
      "You'd rather rent and be covered than buy outright",
    ],
    meta: "Tank & tankless water heater installation, repair and Enercare rentals in Toronto. Authorized Enercare partner. Hot water sized right, upfront pricing.",
    image: "/images/services/water-heaters.jpg",
    heroImage: "/images/services/heroes/water-heaters-hero.jpg",
    imageAlt: "Installing a tank water heater",
    heroImageAlt: "A newly installed water heater — Enercare options available",
    icon: "water-heater",
  },
  {
    slug: "fixture-repair-installation",
    name: "Faucet, Toilet & Fixture Repair",
    group: "plumbing-water-heaters",
    cardBlurb:
      "Dripping faucets, running toilets, new sinks and fixtures — the everyday plumbing done properly the first time, by a licensed plumber.",
    long: [
      "Not every job is a dig or an emergency — a lot of good plumbing is the everyday stuff done right. We repair and install faucets, toilets, sinks, tubs, showers, and fixtures throughout your home. A dripping faucet or a running toilet seems small, but it wastes water and money every day, and a sloppy install causes leaks down the line.",
      "We fix the cause, not just the drip, and we install new fixtures cleanly and to code so they work and last. Same upfront pricing on a faucet as on a foundation.",
    ],
    scope: [
      "Faucet repair and replacement",
      "Toilet repair, rebuild and installation",
      "Sink, tub and shower fixture installation",
      "Leak and drip diagnosis and repair",
      "Shut-off valve and supply-line replacement",
      "Upfront pricing, no deposit",
    ],
    signs: [
      "A faucet that drips or won't shut off fully",
      "A toilet that runs, rocks, or won't stop filling",
      "Low water pressure at a fixture",
      "You're replacing or upgrading sinks, faucets or toilets",
      "Visible leaks or corrosion at supply lines",
    ],
    meta: "Faucet, toilet and fixture repair and installation in Toronto by licensed plumbers. Drips, runs and upgrades done right. Upfront pricing.",
    image: "/images/services/fixture-repair-installation.jpg",
    heroImage: "/images/services/heroes/fixture-repair-installation-hero.jpg",
    imageAlt: "Repairing a faucet and bathroom fixtures",
    heroImageAlt: "Installing and repairing home plumbing fixtures",
    icon: "faucet",
  },
  {
    slug: "water-service-line",
    name: "Water Service Line Upgrade",
    group: "plumbing-water-heaters",
    cardBlurb:
      "Low pressure or an old lead/galvanized line? We upgrade the water service line from the street to your home — safer water, stronger flow.",
    long: [
      "The water service line is the pipe that brings fresh water from the city main into your home — and in older Toronto houses it's often undersized, corroded, or even old lead or galvanized pipe. We upgrade and replace water service lines, improving your water pressure and flow and getting outdated materials out of your drinking water.",
      "It's excavation work we do regularly, coordinated with the city, and done to code. If you've got weak pressure throughout the house or know your home still has a lead line, this is one worth doing right.",
    ],
    scope: [
      "Assessment of your existing service line and pressure",
      "Excavation from the home toward the city connection",
      "Replacement with correctly sized, modern piping",
      "Removal of old lead/galvanized line",
      "Coordination with the city and required permits",
      "Backfill and site restoration",
      "Upfront pricing, no deposit",
    ],
    signs: [
      "Low or dropping water pressure throughout the home",
      "You know (or suspect) you have a lead or galvanized service line",
      "Discoloured water",
      "Frequent leaks on the incoming line",
      "A major renovation or added bathrooms increasing demand",
    ],
    meta: "Water service line upgrade and replacement in Toronto — fix low pressure and remove old lead/galvanized pipe. Code-compliant, upfront pricing.",
    image: "/images/services/water-service-line.jpg",
    heroImage: "/images/services/heroes/water-service-line-hero.jpg",
    imageAlt: "Upgrading a home's water service line",
    heroImageAlt: "Upgrading the water service line from the street",
    icon: "water-line",
  },

  /* ===================== EMERGENCY & COMMERCIAL ===================== */
  {
    slug: "emergency-plumbing",
    name: "24/7 Emergency Plumbing",
    group: "emergency-commercial",
    cardBlurb:
      "Burst pipe, sewer backup or flooded basement? A real plumber answers, day or night, across the GTA — with an upfront price even in an emergency.",
    long: [
      "Plumbing emergencies don't wait for business hours, and neither do we. Call (416) 699-1370 any time — day, night, weekend, holiday — and you'll reach a real person who can help, not a call centre or a voicemail. We respond to burst and frozen pipes, sewer backups, flooded basements, overflowing toilets, no hot water, and failed sump pumps across Toronto and the GTA.",
      "Even in an emergency, you get the same straight dealing: we tell you what's wrong, give you a price up front, and get the water under control. No deposit, no taking advantage of a bad night.",
    ],
    scope: [
      "24/7 phone line answered by a real plumber",
      "Rapid response across Toronto & the GTA",
      "Burst/frozen pipes, sewer backups, basement flooding, no hot water",
      "Emergency shut-off and damage control",
      "Upfront pricing — even after hours",
      "Permanent repair, not just a stopgap",
    ],
    signs: [
      "A pipe has burst or is actively leaking",
      "Sewage is backing up into your home",
      "Your basement is flooding",
      "A toilet or fixture is overflowing and won't stop",
      "No water, or no hot water, when you need it",
    ],
    meta: "24/7 emergency plumbing in Toronto & the GTA — burst pipes, sewer backups, flooded basements. A real plumber answers. Upfront pricing, no deposit.",
    image: "/images/services/emergency-plumbing.jpg",
    heroImage: "/images/services/heroes/emergency-plumbing-hero.jpg",
    imageAlt: "Responding to a plumbing emergency",
    heroImageAlt: "24/7 emergency plumbing response across the GTA",
    icon: "clock-247",
  },
  {
    slug: "burst-frozen-pipes",
    name: "Burst & Frozen Pipe Repair",
    group: "emergency-commercial",
    cardBlurb:
      "A frozen pipe can burst and flood a room in minutes. We thaw, repair and protect your pipes — and help make sure it doesn't happen again.",
    long: [
      "Toronto winters are hard on plumbing. When a pipe freezes, the pressure can split it, and a single burst can flood a room before you find the shut-off. We respond quickly to frozen and burst pipes: shutting off the water, thawing safely, and repairing or replacing the damaged section properly.",
      "Then we look at why it froze — an exposed run, poor insulation, a vulnerable exterior wall — and tell you how to prevent the next one. If you've got a pipe that's frozen but hasn't burst yet, call now; that's the moment to act.",
    ],
    scope: [
      "Emergency response and water shut-off",
      "Safe thawing of frozen pipes",
      "Repair or replacement of burst/split sections",
      "Assessment of why the pipe froze",
      "Insulation and prevention recommendations",
      "Upfront pricing, no deposit",
    ],
    signs: [
      "No water from a faucet in cold weather (likely frozen)",
      "A visible bulge, frost, or split on a pipe",
      "Water leaking or spraying from a pipe",
      "Banging or clanging in the pipes during a freeze",
      "Pipes on exterior walls or in unheated spaces",
    ],
    meta: "Burst and frozen pipe repair in Toronto — fast emergency response, proper repairs, and prevention. A real plumber, day or night.",
    image: "/images/services/burst-frozen-pipes.jpg",
    heroImage: "/images/services/heroes/burst-frozen-pipes-hero.jpg",
    imageAlt: "Repairing a burst or frozen pipe",
    heroImageAlt: "Repairing a burst, frozen pipe in winter",
    icon: "burst-pipe",
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    group: "emergency-commercial",
    cardBlurb:
      "Plumbing and drain service for Toronto businesses, property managers and contractors — dependable work that keeps your building running.",
    long: [
      "Downtime costs a business money, so commercial plumbing has to be reliable, code-compliant, and done by people who show up. We work with businesses, property managers, and contractors across the GTA on drain cleaning and repair, sewer and camera work, fixture and water-heater installation, waterproofing, and emergency service for commercial properties.",
      "We've earned a lot of our reputation through contractor referrals — the people who know good work when they see it keep calling us. Clear scope, upfront pricing, and crews who treat your tenants and timelines with respect.",
    ],
    scope: [
      "Commercial drain cleaning, jetting and repair",
      "Sewer and drain camera inspection",
      "Commercial fixture and water-heater installation",
      "Waterproofing and excavation for commercial properties",
      "Backflow and code-compliance work",
      "24/7 emergency response for businesses",
      "Scheduled/contract maintenance and upfront pricing",
    ],
    signs: [
      "Recurring drain or sewer issues in a commercial building",
      "You need a reliable plumber on call for your property",
      "Tenant complaints about plumbing, pressure, or hot water",
      "A build-out, renovation, or fit-up needing plumbing",
      "A property manager or contractor needing a dependable trade partner",
    ],
    meta: "Commercial plumbing in Toronto & the GTA — drains, sewers, water heaters, waterproofing and 24/7 service for businesses and property managers.",
    image: "/images/services/commercial-plumbing.jpg",
    heroImage: "/images/services/heroes/commercial-plumbing-hero.jpg",
    imageAlt: "Commercial plumbing service for a GTA building",
    heroImageAlt: "Commercial plumbing service for Toronto businesses",
    icon: "commercial",
  },
];

/* ---------------------------------------------------------------------------
   Helpers
   --------------------------------------------------------------------------- */

/** All service slugs, in display order. */
export const SERVICE_SLUGS: string[] = SERVICES.map((s) => s.slug);

/** Look up a service by slug. Returns undefined if not found. */
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** All services in a given group, in display order. */
export function getServicesByGroup(group: ServiceGroupId): Service[] {
  return SERVICES.filter((s) => s.group === group);
}

/**
 * The six flagship services shown on the Home page (DESIGN-BRIEF §8.5.3 / lead spec).
 * Order is the deliberate home-grid order.
 */
export const FLAGSHIP_SLUGS = [
  "drain-cleaning",
  "basement-waterproofing",
  "sewer-camera-inspection",
  "backwater-valve",
  "water-heaters",
  "emergency-plumbing",
] as const;

/** The flagship Service objects, in FLAGSHIP_SLUGS order. */
export function getFlagshipServices(): Service[] {
  return FLAGSHIP_SLUGS.map((slug) => {
    const service = getServiceBySlug(slug);
    if (!service) throw new Error(`Flagship slug not found: ${slug}`);
    return service;
  });
}

/**
 * Related services for a detail page: same group first (excluding the current
 * service), padded with sensible neighbours, capped at `limit` (default 3).
 */
export function getRelatedServices(slug: string, limit = 3): Service[] {
  const current = getServiceBySlug(slug);
  if (!current) return [];
  const sameGroup = getServicesByGroup(current.group).filter(
    (s) => s.slug !== slug,
  );
  const others = SERVICES.filter(
    (s) => s.slug !== slug && s.group !== current.group,
  );
  return [...sameGroup, ...others].slice(0, limit);
}

/** Options for the estimate-form service <select> (CONTENT §9). */
export const SERVICE_SELECT_OPTIONS: { value: string; label: string }[] =
  SERVICES.map((s) => ({ value: s.slug, label: s.name }));
