/**
 * ServiceTrustNote.tsx — the service-specific trust note (Pipefitter; §8.8.7).
 *
 * Tasteful, per-service reassurance, switched on slug:
 *  - water-heaters            → the shared EnercareBand (its natural home, §8.4)
 *  - basement-waterproofing   → interior + exterior honest-diagnosis note
 *  - emergency-plumbing /
 *    burst-frozen-pipes       → 24/7 "a real plumber answers" note
 *  - everything else          → a sensible tailored reassurance drawn from the
 *                               brand's true claims (no overclaiming, CONTENT §14)
 *
 * Rendered as a calm light band (a Forge-style panel), never louder than the
 * page's single amber CTA. Server component.
 */

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { EnercareBand } from "@/components/sections/EnercareBand";
import { site, CTA } from "@/lib/site";
import type { IconName } from "@/lib/icons";

interface NoteCopy {
  eyebrow: string;
  heading: string;
  body: string;
  icon: IconName;
  /** when true, show the amber phone CTA (emergency-flavoured notes). */
  withPhone?: boolean;
}

const NOTES: Record<string, NoteCopy> = {
  "basement-waterproofing": {
    eyebrow: "INSIDE AND OUT",
    heading: "We waterproof the honest way — and only as much as you need.",
    body: "Interior weeping tile and a sump system, exterior membrane and drainage, or the combination your home actually calls for. We find where the water is really getting in and fix that — sometimes far less than another company quoted you, with a written workmanship guarantee either way.",
    icon: "waterproofing",
  },
  "emergency-plumbing": {
    eyebrow: "24/7 · A REAL PLUMBER ANSWERS",
    heading: "Day or night, you reach a real plumber — not a call centre.",
    body: "Call any time and a real person picks up, talks you through the shut-off, and gets someone out fast across the GTA. You get an upfront price even in an emergency, and no deposit — we don't take advantage of a bad night.",
    icon: "clock-247",
    withPhone: true,
  },
  "burst-frozen-pipes": {
    eyebrow: "24/7 · A REAL PLUMBER ANSWERS",
    heading: "Frozen pipe that hasn't burst yet? Call now — that's the moment.",
    body: "We answer day or night, get the water shut off, and thaw safely before the pressure splits the pipe. If it's already burst, we stop the water and repair it properly — then insulate the run so it doesn't happen again.",
    icon: "burst-pipe",
    withPhone: true,
  },
  "backwater-valve": {
    eyebrow: "CITY OF TORONTO REBATE",
    heading: "Protection against sewer backups — and a rebate to help pay for it.",
    body: "A backwater valve lets your drains flow out but closes to stop the city sewer from pushing back in during a storm. Many Toronto homeowners qualify for a City rebate toward the work, and we'll point you straight to the program.",
    icon: "backwater-valve",
  },
  "excavation-underpinning": {
    eyebrow: "THE OWNER IS ON SITE",
    heading: "Done wrong it's a disaster — which is why Bill is on these digs himself.",
    body: "Excavation and underpinning is careful, engineered work. After fifty-four years we dig in controlled sections, support the structure properly, and protect your property throughout — the kind of below-grade work you want a company that does it every day to handle.",
    icon: "excavator",
  },
  "commercial-plumbing": {
    eyebrow: "TRUSTED BY CONTRACTORS",
    heading: "A lot of our work comes from contractor referrals.",
    body: "The people who know good work when they see it keep calling us. Clear scope, upfront pricing, crews who respect your tenants and timelines, and 24/7 response when downtime can't wait — for businesses and property managers across the GTA.",
    icon: "handshake",
  },
};

/** Fallback for services without a bespoke note: the core honest-deal promise. */
const DEFAULT_NOTE: NoteCopy = {
  eyebrow: "SERVICES, NOT SALES",
  heading: "An honest answer and an upfront price — since 1972.",
  body: "Master-licensed, family-owned, and fully insured. You get our rate up front, not at the front door, and you pay when the work is done — no deposit. After fifty-four years, our reputation is the only advertising that's ever mattered.",
  icon: "shield-check",
};

export function ServiceTrustNote({ slug }: { slug: string }) {
  // Water heaters: the Enercare partnership is the natural trust note here.
  if (slug === "water-heaters") {
    return <EnercareBand bg="shallow" />;
  }

  const note = NOTES[slug] ?? DEFAULT_NOTE;

  return (
    <section className="bg-shallow py-8 md:py-9" aria-labelledby={`note-${slug}`}>
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
          <span
            className="grid size-[56px] shrink-0 place-items-center rounded-md bg-white text-teal shadow-sm ring-1 ring-mortar"
            aria-hidden="true"
          >
            <Icon name={note.icon} size={30} />
          </span>
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>{note.eyebrow}</Eyebrow>
            <h2
              id={`note-${slug}`}
              className="font-display text-h3 max-w-[28ch] text-ink text-balance"
            >
              {note.heading}
            </h2>
            <p className="max-w-[64ch] text-body text-steel">{note.body}</p>
            {note.withPhone ? (
              <Button variant="amber" href={`tel:${site.phoneTel}`} icon="phone">
                {CTA.phone}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
