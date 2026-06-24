// ABOUT (/about) — Mason. Built to DESIGN-BRIEF §8.6 + CONTENT §3.
// Sequence: hero → the story (prose + pull-quote + inline photo) → the family
// (cards + 20-year staff note) → our values (2×2) → timeline (depth gauge) →
// by-the-numbers → CTA band. Global chrome is rendered by layout.tsx.
//
// metadata is verbatim CONTENT §13; only the page BODY is filled here.

import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { SpecTag } from "@/components/ui/SpecTag";

import { StatGrid } from "@/components/sections/StatGrid";
import { CTABand } from "@/components/sections/CTABand";

import { STATS } from "@/lib/site";
import type { IconName } from "@/lib/icons";

import { Timeline, type Milestone } from "./_components/Timeline";

export const metadata: Metadata = {
  title: { absolute: "About Us | Family-Owned Plumbers Since 1972 | Drain Man" },
  description:
    "Meet the family behind The Drain Man Inc. Three generations of honest, master-licensed Toronto plumbers serving the GTA since 1972.",
  alternates: { canonical: "/about" },
};

/* ----- Page content (CONTENT §3) — verbatim ----- */

const TEAM: {
  name: string;
  role: string;
  line: string;
  image: string;
  alt: string;
}[] = [
  {
    name: "Bill Barber",
    role: "Owner",
    line: "Bill still spends his days where the work is — on excavation and waterproofing job sites across the GTA, not behind a desk. Five decades in, he sets the standard the whole crew works to.",
    image: "/images/about/team-bill.jpg",
    alt: "Bill Barber, owner of The Drain Man Inc.",
  },
  {
    name: "John",
    role: "Office Manager",
    line: "Bill's son keeps the jobs scheduled, the crews supplied, and your questions answered. If you call the office, there's a good chance you'll talk to John.",
    image: "/images/about/team-john.jpg",
    alt: "John, office manager at The Drain Man Inc.",
  },
  {
    name: "Shawna",
    role: "Head Office",
    line: "Bill's daughter runs the back office — estimates, accounts, and the details that keep everything moving and honest.",
    image: "/images/about/team-shawna.jpg",
    alt: "Shawna, head office at The Drain Man Inc.",
  },
  {
    name: "Brian",
    role: "Service Technician",
    line: "Bill's son-in-law is one of the licensed hands you'll meet at your home, doing the work the family name is on.",
    image: "/images/about/team-brian.jpg",
    alt: "Brian, service technician at The Drain Man Inc.",
  },
];

const VALUES: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Honesty & integrity",
    body: "We tell you the truth about your plumbing, every time.",
    icon: "handshake",
  },
  {
    title: "Upfront pricing",
    body: "Our rates up front, not at the front door. The quote is the price.",
    icon: "tag",
  },
  {
    title: "No deposits",
    body: "You pay when the work is done, not before.",
    icon: "no-deposit",
  },
  {
    title: "Do-it-right craftsmanship",
    body: "Licensed, to code, and built to last — not patched to get by.",
    icon: "wrench",
  },
];

const MILESTONES: Milestone[] = [
  {
    year: "1972",
    body: "The Drain Man opens its doors in Scarborough. One tradesman, one promise: honest work, fair prices.",
  },
  {
    year: "1980s–90s",
    body: "Word of mouth grows the business across Toronto. We expand from drains into full plumbing, basement waterproofing, and excavation.",
  },
  {
    year: "2000s",
    body: "A second generation joins. We take on excavation, underpinning, and exterior waterproofing for the GTA's aging housing stock.",
  },
  {
    year: "2010s",
    body: "We become an authorized Enercare partner, adding water-heater rentals and protection plans to our services.",
  },
  {
    year: "Today",
    body: "54 years in, family-owned, master-licensed, and still earning most of our work through referrals across Toronto and the GTA.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===================================================================
          1 · PAGE HERO — eyebrow + H1 + lead + side image
          =================================================================== */}
      <Section bg="concrete" padding="tight">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start gap-5 lg:col-span-7">
            <SectionHeading
              as="h1"
              eyebrow="FAMILY-OWNED SINCE 1972"
              title="Three generations of honest Toronto plumbers."
              lead="The Drain Man started in 1972 with a simple idea that still runs the company today: do honest work, charge a fair price, and tell people the truth — even when it's not the easy sale."
            />
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-mortar">
              <Image
                src="/images/about/about-hero.jpg"
                alt="A Drain Man tradesman on a GTA job site"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <SpecTag onPhoto className="absolute bottom-4 left-4">
                ON SITE · SINCE 1972
              </SpecTag>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================================================================
          2 · THE STORY — prose column + distinctive pull-quote + inline photo
          =================================================================== */}
      <Section bg="white">
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-8">
          {/* prose */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-h2 text-balance text-ink">
              For over fifty years, one name on the truck.
            </h2>

            <div className="prose-column mt-6 text-steel">
              <p>
                The Drain Man Inc. has been fixing drains, waterproofing
                basements, and answering emergency calls across Toronto since
                1972. What started as one tradesman with a snake and a work ethic
                has grown into a full-service plumbing, drain, and excavation
                company — but the way we treat people hasn&rsquo;t changed a bit.
              </p>
              <p>
                We built this business on a principle that&rsquo;s gone out of
                style with a lot of contractors:{" "}
                <strong className="font-semibold text-ink">
                  we provide services, not sales.
                </strong>{" "}
                When you call us, you get a plumber, not a pitch. We give you{" "}
                <strong className="font-semibold text-ink">
                  our rates up front — not at the front door
                </strong>{" "}
                — so you know the price before we pick up a tool. And we
                don&rsquo;t ask for a deposit.{" "}
                <strong className="font-semibold text-ink">
                  You pay when the work is done
                </strong>{" "}
                and you&rsquo;re satisfied with it.
              </p>
              <p>
                That&rsquo;s why most of our work comes from word of mouth.
                Homeowners refer us to their neighbours. Contractors call us when
                they need the job done right and done honestly. After fifty-four
                years, our reputation is the only advertising that&rsquo;s ever
                really mattered.
              </p>
              <p>
                We&rsquo;re old-fashioned about it, and we&rsquo;re fine with
                that. We show up when we say we will. We do the work to code. We
                leave your home clean. And if something needs to be said straight
                — about your pipes, your foundation, or whether you actually need
                that repair — we&rsquo;ll say it.
              </p>
            </div>
          </div>

          {/* side rail: inline photo + the pull-quote, treated as a stamped panel */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg ring-1 ring-mortar">
              <Image
                src="/images/about/story.jpg"
                alt="Decades of hands-on plumbing and excavation work"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            {/* pull-quote — distinctive: amber depth-tick + large Archivo, on iron */}
            <figure className="relative overflow-hidden rounded-lg bg-iron p-6 text-on-dark">
              <span
                aria-hidden="true"
                className="absolute inset-y-6 left-0 w-[3px] bg-amber"
              />
              <Eyebrow onDark>WHAT WE TELL EVERY CUSTOMER</Eyebrow>
              <blockquote className="mt-4">
                <p className="font-display text-h3 font-bold leading-snug text-on-dark text-balance">
                  &ldquo;We&rsquo;re not here to sell you something. We&rsquo;re
                  here to fix it, tell you the truth, and earn the next call.&rdquo;
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </Section>

      {/* ===================================================================
          3 · THE FAMILY — cards + 20-year staff note
          =================================================================== */}
      <Section bg="concrete">
        <SectionHeading
          eyebrow="THE FAMILY"
          as="h2"
          title="A family business, run by family."
        />

        <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person) => (
            <li
              key={person.name}
              className="flex flex-col overflow-hidden rounded-md border border-mortar bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-shallow">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-h4 font-bold text-ink">
                    {person.name}
                  </h3>
                  <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-ember">
                    {person.role}
                  </span>
                </div>
                <p className="text-small text-steel">{person.line}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* 20+ year staff retention note + crew image */}
        <div className="mt-8 grid gap-6 overflow-hidden rounded-lg border border-mortar bg-white lg:grid-cols-12 lg:items-stretch">
          <div className="relative aspect-[3/2] w-full overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[280px]">
            <Image
              src="/images/about/crew.jpg"
              alt="Drain Man crew members on the job"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 p-6 lg:col-span-7 lg:py-7">
            <Eyebrow>BEYOND THE FAMILY</Eyebrow>
            <p className="max-w-[60ch] text-lead text-ink">
              Our crews stay for the long haul — many of our people have been with
              us <strong className="font-semibold">20 years or more</strong>. For
              them this is a career and a craft, not a stepping stone. It&rsquo;s
              why the plumber at your door actually knows what they&rsquo;re doing.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================================================================
          4 · OUR VALUES — 2×2 icon list (white)
          =================================================================== */}
      <Section bg="white">
        <SectionHeading
          eyebrow="WHAT WE STAND ON"
          as="h2"
          title="The values the work is built on."
        />
        <ul className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {VALUES.map((value) => (
            <li key={value.title} className="flex flex-col gap-3">
              <span
                className="grid size-[44px] place-items-center rounded-md bg-amber-soft text-teal"
                aria-hidden="true"
              >
                <Icon name={value.icon} size={26} />
              </span>
              <h3 className="font-display text-h4 font-semibold text-ink">
                {value.title}
              </h3>
              <p className="text-body text-steel">{value.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===================================================================
          5 · TIMELINE — the "depth gauge" (DESIGN-BRIEF §8.6.5)
          =================================================================== */}
      <Section bg="shallow">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FROM THE GROUND UP"
              as="h2"
              title="Fifty-four years, one reading at a time."
              lead="The Drain Man, measured like a depth gauge — from the first call in 1972 down to today."
            />
          </div>
          <div className="lg:col-span-8 lg:pt-2">
            <Timeline milestones={MILESTONES} />
          </div>
        </div>
      </Section>

      {/* ===================================================================
          6 · BY THE NUMBERS — reuse for consistency (dark band).
          Uses `pipe` (the lighter dark) so it layers against the iron CTA that
          follows, instead of reading as one undifferentiated dark block.
          =================================================================== */}
      <Section bg="pipe">
        <div className="flex flex-col gap-7">
          <SectionHeading
            onDark
            eyebrow="BY THE NUMBERS"
            as="h2"
            title="A few honest figures."
          />
          <StatGrid stats={STATS} onDark />
        </div>
      </Section>

      {/* ===================================================================
          7 · CTA BAND → footer (CONTENT §3.6)
          =================================================================== */}
      <CTABand
        variant="dark"
        eyebrow="LET'S TALK"
        heading="Meet the plumbers your neighbours trust."
        lead="Honest answers and an upfront price are one call away."
      />
    </>
  );
}
