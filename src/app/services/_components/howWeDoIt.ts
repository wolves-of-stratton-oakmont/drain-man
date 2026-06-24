/**
 * howWeDoIt.ts — per-service "How we do it" mini-process (Pipefitter, page-local).
 *
 * DESIGN-BRIEF §8.8.5 asks for a *tailored* 3–4 step mini-process per service —
 * a real sequence, so numbering carries meaning (§6.14 / anti-generic §1.4).
 * These steps are derived from each service's actual work (its `scope`/`long` in
 * data/services.ts, CONTENT §4) so every one of the 14 detail pages is distinct,
 * not a thin template. Icons are IconNames from lib/icons.ts.
 *
 * This is page-local content authored from the same source copy as the data
 * layer; it stays in the Pipefitter-owned route folder (not src/data).
 */

import type { IconName } from "@/lib/icons";

export interface HowStep {
  title: string;
  body: string;
  icon: IconName;
}

export const HOW_WE_DO_IT: Record<string, HowStep[]> = {
  "drain-cleaning": [
    {
      title: "Find the real blockage",
      body: "We confirm which fixture or line is blocked and how far down the clog sits before any tool goes in.",
      icon: "auger",
    },
    {
      title: "Clear it the right way",
      body: "Professional augering for most clogs, high-pressure water jetting where that's the better tool for the job.",
      icon: "wrench",
    },
    {
      title: "Camera it if it keeps coming back",
      body: "Recurring clogs get a camera look so you're seeing the cause — roots, grease or a bellied pipe — not guessing at it.",
      icon: "camera-cable",
    },
    {
      title: "Tell you how to keep it clear",
      body: "A plain-English explanation of what caused it and what keeps it from happening again. Upfront price, no deposit.",
      icon: "tag",
    },
  ],

  "sewer-camera-inspection": [
    {
      title: "Feed the camera in",
      body: "A high-resolution waterproof camera goes down your drain or sewer line through the right access point.",
      icon: "camera-cable",
    },
    {
      title: "Watch it together, live",
      body: "You see the same screen we do — roots, cracks, offsets, bellies or a collapse, exactly as they are.",
      icon: "leak-detect",
    },
    {
      title: "Locate the problem",
      body: "We pinpoint the depth and position of the issue so any repair is precise, not exploratory.",
      icon: "map-pin",
    },
    {
      title: "Give you the footage and honest options",
      body: "Footage and notes for your records or a home purchase, plus a straight recommendation — no upsell.",
      icon: "handshake",
    },
  ],

  "drain-repair-replacement": [
    {
      title: "Confirm the failure on camera",
      body: "We verify exactly where the pipe is cracked, offset, bellied or collapsed before anyone breaks ground.",
      icon: "camera-cable",
    },
    {
      title: "Access the failed section",
      body: "Targeted excavation reaches the damaged run with as little disruption to your property as the job allows.",
      icon: "excavator",
    },
    {
      title: "Repair or replace to spec",
      body: "We size the pipe right and lay it to the correct slope so water flows the way it should — for decades.",
      icon: "pipe",
    },
    {
      title: "Backfill and restore",
      body: "We backfill, restore the site, and leave you with an upfront, itemized price and no deposit.",
      icon: "shield-check",
    },
  ],

  "leak-detection": [
    {
      title: "Listen to the clues",
      body: "A jumped water bill, running water with everything off, or unexplained damp — we start from what your home is telling you.",
      icon: "leak-detect",
    },
    {
      title: "Pinpoint the source",
      body: "The right tools and decades of experience locate the leak behind walls, under slabs or underground — before any demolition.",
      icon: "droplet",
    },
    {
      title: "Open only what we must",
      body: "We access just the spot that needs it, so you're not paying to tear the place apart on a guess.",
      icon: "wrench",
    },
    {
      title: "Fix it and prevent the next",
      body: "Targeted repair of the leak plus guidance on preventing water damage. Upfront price, no deposit.",
      icon: "shield-check",
    },
  ],

  "basement-waterproofing": [
    {
      title: "Find where water gets in",
      body: "We diagnose the real entry point and cause first — sometimes it's far less than another company quoted you.",
      icon: "leak-detect",
    },
    {
      title: "Recommend interior, exterior or both",
      body: "Exterior membrane and drainage, interior weeping tile and a sump system, or the combination your home actually needs.",
      icon: "waterproofing",
    },
    {
      title: "Do the work to code",
      body: "Excavation and membrane outside, drainage and sump inside, foundation cracks sealed — built to keep the basement dry.",
      icon: "excavator",
    },
    {
      title: "Restore and guarantee",
      body: "Backfill, grading and clean-up, a written workmanship guarantee, and an upfront price with no deposit.",
      icon: "shield-check",
    },
  ],

  "excavation-underpinning": [
    {
      title: "Assess and plan the dig",
      body: "Site assessment and planning, with engineering where it's required — Bill is on these sites himself.",
      icon: "map-pin",
    },
    {
      title: "Excavate in controlled sections",
      body: "We dig carefully, support the structure properly, and protect your property the whole way through.",
      icon: "excavator",
    },
    {
      title: "Underpin or repair below grade",
      body: "Safely lower the basement for headroom, or access the foundation for waterproofing and drain repair.",
      icon: "waterproofing",
    },
    {
      title: "Backfill, compact and grade",
      body: "Backfill, compaction, grading and clean-up — done right, it adds real value. Upfront scope and price, no deposit.",
      icon: "shield-check",
    },
  ],

  "backwater-valve": [
    {
      title: "Assess your drain layout",
      body: "We check your line and find the right spot for the valve, with a camera look where it helps.",
      icon: "camera-cable",
    },
    {
      title: "Cut in and install to code",
      body: "Concrete cutting where needed and a code-approved backwater valve installed in the proper location.",
      icon: "backwater-valve",
    },
    {
      title: "Restore the floor",
      body: "We restore the concrete cleanly so the only sign it's there is a basement that stays dry in a storm.",
      icon: "wrench",
    },
    {
      title: "Point you to the city rebate",
      body: "Many Toronto homeowners qualify for a City rebate toward the work — we'll show you the program. Upfront price, no deposit.",
      icon: "tag",
    },
  ],

  "sump-pump": [
    {
      title: "Check ground-water conditions",
      body: "We assess drainage and the water table so the pump and pit are sized for your home, not a guess.",
      icon: "leak-detect",
    },
    {
      title: "Set the pit and pump",
      body: "Install or repair the sump pit and fit a correctly sized pump that moves water away from the foundation.",
      icon: "sump-pump",
    },
    {
      title: "Add a battery backup",
      body: "The storms that flood basements knock out the power too — we strongly recommend and fit a backup so it works when it counts.",
      icon: "shield-check",
    },
    {
      title: "Test it and show you",
      body: "We route the discharge, test the system, and show you how to check it yourself. Upfront price, no deposit.",
      icon: "wrench",
    },
  ],

  "water-heaters": [
    {
      title: "Size it to your household",
      body: "We help you pick tank or tankless for your actual hot-water demand — not the most expensive unit on the shelf.",
      icon: "water-heater",
    },
    {
      title: "Buy or rent — your call",
      body: "As an authorized Enercare partner we can set up a rental or protection plan, or supply and install a unit you own.",
      icon: "handshake",
    },
    {
      title: "Install to code",
      body: "Code-compliant venting, gas and water connections, with the old unit removed and disposed of.",
      icon: "wrench",
    },
    {
      title: "Keep it covered",
      body: "Repair and servicing for existing units, and an Enercare plan that keeps it maintained. Upfront pricing, no deposit.",
      icon: "shield-check",
    },
  ],

  "fixture-repair-installation": [
    {
      title: "Diagnose the real cause",
      body: "A drip or a running toilet is usually a worn part, not bad luck — we find what's actually failing.",
      icon: "leak-detect",
    },
    {
      title: "Repair or replace cleanly",
      body: "Faucets, toilets, sinks, tubs and showers fixed or installed to code so they work and last.",
      icon: "faucet",
    },
    {
      title: "Check the shut-offs and supply",
      body: "We replace tired shut-off valves and supply lines while we're there, so a small job doesn't become the next leak.",
      icon: "wrench",
    },
    {
      title: "Same upfront pricing",
      body: "Same honest, upfront price on a faucet as on a foundation — and no deposit.",
      icon: "tag",
    },
  ],

  "water-service-line": [
    {
      title: "Assess line and pressure",
      body: "We check your existing service line and water pressure, and whether you've got old lead or galvanized pipe.",
      icon: "water-line",
    },
    {
      title: "Coordinate with the city",
      body: "Permits and city coordination are handled before the dig — this is excavation work we do regularly.",
      icon: "map-pin",
    },
    {
      title: "Replace from home to street",
      body: "Excavate and replace the line with correctly sized modern piping, removing the old lead or galvanized run.",
      icon: "excavator",
    },
    {
      title: "Backfill and restore",
      body: "Backfill and site restoration, stronger flow and safer water — with an upfront price and no deposit.",
      icon: "shield-check",
    },
  ],

  "emergency-plumbing": [
    {
      title: "A real plumber answers",
      body: "Call (416) 699-1370 any time — day, night, weekend, holiday — and reach a real person, not a voicemail.",
      icon: "phone",
    },
    {
      title: "Get the water under control",
      body: "We talk you through the shut-off right away and respond fast across Toronto and the GTA.",
      icon: "clock-247",
    },
    {
      title: "Diagnose and price on the spot",
      body: "We tell you what's wrong and give you a price up front — even after hours. No taking advantage of a bad night.",
      icon: "tag",
    },
    {
      title: "Fix it for good",
      body: "A permanent repair, not just a stopgap to get off the phone — and no deposit.",
      icon: "wrench",
    },
  ],

  "burst-frozen-pipes": [
    {
      title: "Shut off and respond",
      body: "We get the water shut off — over the phone if you're mid-flood — and respond fast, day or night.",
      icon: "clock-247",
    },
    {
      title: "Thaw safely",
      body: "Frozen but not burst yet? That's the moment to act. We thaw the pipe safely before the pressure splits it.",
      icon: "burst-pipe",
    },
    {
      title: "Repair the split section",
      body: "We repair or replace the burst run properly, so the room is safe and the water stays in the pipe.",
      icon: "pipe",
    },
    {
      title: "Stop it happening again",
      body: "We find why it froze — an exposed run, poor insulation, a cold wall — and insulate it. Upfront price, no deposit.",
      icon: "shield-check",
    },
  ],

  "commercial-plumbing": [
    {
      title: "Scope the work clearly",
      body: "Drains, sewers, fixtures, water heaters, waterproofing — we define the job and the price before we start.",
      icon: "commercial",
    },
    {
      title: "Work around your building",
      body: "Crews who respect your tenants and timelines, with 24/7 emergency response when downtime can't wait.",
      icon: "clock-247",
    },
    {
      title: "Do it to code",
      body: "Backflow, code-compliance and proper installation — the work contractors keep referring us for.",
      icon: "wrench",
    },
    {
      title: "Keep it running",
      body: "Scheduled or contract maintenance and clear, upfront pricing so your building keeps working.",
      icon: "shield-check",
    },
  ],
};

/** Look up the tailored steps for a service; empty array if none defined. */
export function getHowWeDoIt(slug: string): HowStep[] {
  return HOW_WE_DO_IT[slug] ?? [];
}
