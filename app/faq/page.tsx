import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Section, SectionHeading, buttonClasses } from "@/components/ui";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion, type FaqItem } from "@/components/faq/FaqAccordion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Quick answers about Drainman INC — how we keep prices fair, where we serve across Toronto and the GTA, our plumbing and builders licences, and how we quote each job.",
  alternates: { canonical: "/faq" },
};

// The four real questions from the original site (SITE_SPEC §2.4), kept verbatim
// in meaning and lightly set in sentence case. Licence numbers and service areas
// are read from lib/site so there is one source of truth.
const faqs: FaqItem[] = [
  {
    question: "How do you keep your prices fair?",
    answer: (
      <>
        We rely on the quality of our work and on happy customers, not on heavy
        advertising. Instead of pouring money into marketing and passing that cost
        on to you, we count on customers and contractors across the GTA to tell
        their friends and family about us. Those savings stay with you.
      </>
    ),
  },
  {
    question: "Where do you work?",
    answer: (
      <>
        We serve Toronto and the surrounding GTA, including Brampton,
        Mississauga, {site.address.city}, and further out. If you are near the
        city and not sure whether we reach you, just{" "}
        <a
          href={site.phone.href}
          className="font-semibold text-blue underline decoration-blue/40 underline-offset-2 transition-colors hover:decoration-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
        >
          give us a call
        </a>{" "}
        and ask.
      </>
    ),
  },
  {
    question: "Are you fully licensed and insured?",
    answer: (
      <>
        Yes — we are fully insured. Our Master Plumbing License{" "}
        <span className="font-mono font-medium text-ink">
          #{site.licenses.master}
        </span>{" "}
        covers the plumbing and drain work we do. Our Builders License{" "}
        <span className="font-mono font-medium text-ink">
          #{site.licenses.builder}
        </span>{" "}
        covers concrete, waterproofing, basement underpinning, and related
        construction work.
      </>
    ),
  },
  {
    question: "How do I find out what a job will cost?",
    answer: (
      <>
        Every job is a little different, so we quote each one on its own. Give us a
        call, tell us what is going on, and we will find the right fix at a fair,
        up-front price — your rate before we start, not at the front door, and never
        a deposit.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <Section tone="water" spacing="lg" containerWidth="narrow">
        <SectionHeading
          as="h1"
          eyebrow="Good to know"
          title="A few common questions"
          description="The short answers most people ask before they call. Plumbing is rarely one-size-fits-all, so if your question is not here, we are happy to talk it through."
        />

        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>

        {/* Quiet fallback — keeps the page light but always gives a next step */}
        <p className="mt-8 text-base text-steel">
          Still not sure? Call us at{" "}
          <a
            href={site.phone.href}
            className="font-mono font-medium text-blue underline decoration-blue/40 underline-offset-2 transition-colors hover:decoration-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            {site.phone.display}
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-semibold text-blue underline decoration-blue/40 underline-offset-2 transition-colors hover:decoration-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            send a booking request
          </Link>
          .
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className={buttonClasses({ size: "md" })}>
            Book a service
          </Link>
          <a
            href={site.phone.href}
            className={cn(
              buttonClasses({ variant: "secondary", size: "md" }),
              "font-mono",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone.display}
          </a>
        </div>
      </Section>

      <CtaBand
        title="Got a drain that won't behave?"
        subtitle="Tell us what's happening and we'll call you back to set a time — fair price up front, and no deposit."
      />
    </>
  );
}
