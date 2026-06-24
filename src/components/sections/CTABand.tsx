/**
 * CTABand (ARCHITECTURE §4.16; DESIGN-BRIEF §6.8).
 *
 * dark: bg-iron, on-dark text, amber phone Button + outline estimate Button.
 *   Optional bgImage → job-site photo + iron scrim.
 * amber: bg-amber, text-iron, buttons become solid-iron + outline-iron (no
 *   amber-on-amber). No bg image.
 *
 * Default copy from defaultCtaBand. Don't stack two; omit on /contact.
 */

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site, CTA, defaultCtaBand } from "@/lib/site";

export interface CTABandProps {
  variant?: "dark" | "amber";
  eyebrow?: string;
  heading?: string;
  lead?: string;
  bgImage?: string;
  bgImageAlt?: string;
  /** estimate button target; default /contact. */
  estimateHref?: string;
  className?: string;
}

export function CTABand({
  variant = "dark",
  eyebrow = defaultCtaBand.eyebrow,
  heading = defaultCtaBand.heading,
  lead = defaultCtaBand.lead,
  bgImage,
  bgImageAlt = "",
  estimateHref = "/contact",
  className,
}: CTABandProps) {
  const isAmber = variant === "amber";
  const hasPhoto = !isAmber && !!bgImage;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        isAmber ? "bg-amber text-iron" : "bg-iron text-on-dark",
        // numeric scale override: py-10 = 128px
        "py-8 md:py-10",
        hasPhoto && "scrim-iron",
        className,
      )}
    >
      {hasPhoto ? (
        <Image
          src={bgImage}
          alt={bgImageAlt}
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
      ) : null}

      <Container className="relative z-10">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow onDark={!isAmber}>{eyebrow}</Eyebrow>
          <h2
            className={cn(
              "font-display text-h2 max-w-[20ch] text-balance",
              isAmber ? "text-iron" : "text-on-dark",
            )}
          >
            {heading}
          </h2>
          {lead ? (
            <p
              className={cn(
                "text-lead max-w-[58ch]",
                isAmber ? "text-iron/80" : "text-on-dark-mut",
              )}
            >
              {lead}
            </p>
          ) : null}

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            {isAmber ? (
              <>
                <Button
                  variant="teal"
                  href={`tel:${site.phoneTel}`}
                  icon="phone"
                  className="!bg-iron !text-on-dark hover:!bg-iron-2"
                >
                  {CTA.phone}
                </Button>
                <Button
                  variant="outline"
                  href={estimateHref}
                  className="border-iron text-iron hover:!text-amber"
                >
                  {CTA.estimate}
                </Button>
              </>
            ) : (
              <>
                <Button variant="amber" href={`tel:${site.phoneTel}`} icon="phone">
                  {CTA.phone}
                </Button>
                <Button
                  variant="outline"
                  href={estimateHref}
                  className="border-on-dark text-on-dark hover:!text-iron"
                >
                  {CTA.estimate}
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTABand;
