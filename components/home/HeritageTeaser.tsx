import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, Container, buttonClasses, Badge } from "@/components/ui";
import { site } from "@/lib/site";

/** Short family-heritage teaser → /about. Warm, concise, not overbearing. */
export function HeritageTeaser() {
  return (
    <Section tone="white" spacing="lg" contained={false}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image — pipe wrenches close-up: "our work speaks for itself" */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-[var(--shadow-md)]">
              <Image
                src="/images/home/pipe-wrenches.jpg"
                alt="Plumbing tools, braided supply lines, and a pipe wrench arranged on a kitchen plan"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            {/* Founding-year chip pinned to the image corner */}
            <span className="absolute -right-3 -top-3 rounded-xl bg-signal px-4 py-2 font-mono text-sm font-semibold text-ink shadow-[var(--shadow-md)]">
              Est. {site.founded}
            </span>
          </div>

          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase text-blue">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue" />
              Our story
            </span>
            <h2 className="mt-5 text-h2 font-display font-extrabold leading-[1.02] tracking-[-0.01em] text-ink">
              They called him &ldquo;Bill the Drain Man.&rdquo;
            </h2>
            <p className="mt-5 max-w-[56ch] text-lead text-ink/85">
              Bill Barber came over from England as a plumber. He noticed the real,
              demanding work was down in the drains — so he built a company around it.
              Contractors across the GTA started asking for &ldquo;Bill the Drain
              Man,&rdquo; and the name stuck.
            </p>
            <p className="mt-4 max-w-[56ch] text-base text-steel">
              That was {site.founded}. Today his son John and the rest of the family
              run it, carrying the same hands-on, honest values into a second
              generation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="blue">Family owned</Badge>
              <Badge tone="blue">Second generation</Badge>
              <Badge tone="blue">No deposits</Badge>
              <Badge tone="blue">Rates up front</Badge>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className={buttonClasses({ variant: "secondary", size: "md" })}
              >
                Read our story
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
