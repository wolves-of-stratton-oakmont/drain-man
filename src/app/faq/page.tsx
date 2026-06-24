// FAQ (/faq) — Closer (DESIGN-BRIEF §8.11, CONTENT §8).
// Hero → accordion groups (FAQ_GROUPS) under mono group headings + FAQPage
// JSON-LD (faqJsonLd) → still-have-a-question CTA → CTABand.
//
// Keep the verbatim metadata (CONTENT §13); body is built from the data layer.

import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { DepthRule } from "@/components/ui/DepthRule";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import { FAQ_GROUPS } from "@/data/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Plumbing FAQ — Pricing, Emergencies & More | Drain Man" },
  description:
    "Straight answers on upfront pricing, no deposits, 24/7 emergencies, waterproofing, Enercare and warranties from Toronto's Drain Man.",
  alternates: { canonical: "/faq" },
};

/** Stable id for a group so the contents rail can anchor to it. */
function groupId(group: string): string {
  return (
    "faq-" +
    group
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

export default function FaqPage() {
  return (
    <>
      {/* FAQPage structured data (DESIGN-BRIEF §9) */}
      <JsonLd data={faqJsonLd(FAQ_GROUPS)} />

      {/* 1 — Hero */}
      <Section bg="concrete" padding="tight">
        <div className="max-w-[40rem]">
          <SectionHeading
            as="h1"
            eyebrow="Good questions"
            title="Straight answers about drains, water and pricing."
            lead="The questions we get most, answered plainly. Don't see yours? Call (416) 699-1370 — we're happy to talk it through."
          />
        </div>
        <DepthRule className="mt-7" />
      </Section>

      {/* 2 — Accordion groups, with a sticky "contents" rail on desktop */}
      <Section bg="white" padding="tight">
        <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-9">
          {/* contents rail (spec-sheet "index" — real in-page navigation) */}
          <nav aria-label="FAQ topics" className="hidden lg:block">
            <div className="sticky top-[7rem] flex flex-col gap-4">
              <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-steel">
                Topics
              </span>
              <ul className="flex flex-col gap-3 border-l border-mortar pl-5">
                {FAQ_GROUPS.map((group) => (
                  <li key={group.group}>
                    <a
                      href={`#${groupId(group.group)}`}
                      className="text-body text-steel transition-colors duration-200 hover:text-teal link-underline"
                    >
                      {group.group}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* the grouped accordions */}
          <div className="flex flex-col gap-9">
            {FAQ_GROUPS.map((group) => (
              <section
                key={group.group}
                id={groupId(group.group)}
                aria-label={group.group}
                className="scroll-mt-[7rem]"
              >
                <Eyebrow as="h2" className="mb-5">
                  {group.group}
                </Eyebrow>
                <Accordion>
                  {group.items.map((item) => (
                    <AccordionItem key={item.q} question={item.q}>
                      <p>{item.a}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </Section>

      {/* 3 — Still have a question? (CONTENT §8 still-have-a-question CTA) */}
      <Section bg="shallow" padding="tight">
        <div className="flex flex-col items-start gap-5 rounded-lg border border-mortar bg-white p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div className="flex items-start gap-4">
            <span className="grid size-[40px] shrink-0 place-items-center rounded-md bg-amber-soft text-teal">
              <Icon name="phone" size={22} />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-h3 font-bold text-ink">
                Still have a question?
              </h2>
              <p className="text-body text-steel">
                Call{" "}
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold text-teal link-underline"
                >
                  {site.phoneDisplay}
                </a>{" "}
                or send us a message — a real plumber will give you a straight
                answer.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button variant="amber" href={`tel:${site.phoneTel}`} icon="phone">
              {site.phoneDisplay}
            </Button>
            <Button variant="outline" href="/contact" className="text-ink">
              Send a message
            </Button>
          </div>
        </div>
      </Section>

      {/* 4 — Pre-footer CTA band */}
      <CTABand bgImage="/images/cta/cta-dark-generic.jpg" />
    </>
  );
}
