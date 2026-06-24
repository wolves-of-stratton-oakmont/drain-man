/**
 * EnercareBand (ARCHITECTURE §4.19; DESIGN-BRIEF §6.15 / §8.4).
 *
 * Calm light band: left eyebrow + heading + body + ghost link to
 * /services/water-heaters; right = the official Enercare logo in a clean white
 * card (EnercareBadge). Partner badge, not the star — the logo never larger than
 * the DRAIN MAN wordmark in the same view. Copy from `enercare` (@/lib/site).
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { EnercareBadge } from "@/components/ui/EnercareBadge";
import { enercare } from "@/lib/site";

export interface EnercareBandProps {
  className?: string;
  bg?: "concrete" | "white" | "shallow";
}

export function EnercareBand({ className, bg = "shallow" }: EnercareBandProps) {
  const bgClass =
    bg === "white" ? "bg-white" : bg === "concrete" ? "bg-concrete" : "bg-shallow";

  return (
    <section className={cn(bgClass, "py-8 md:py-9", className)}>
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* left: copy */}
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>{enercare.eyebrow}</Eyebrow>
            <h2 className="font-display text-h2 max-w-[18ch] text-ink text-balance">
              {enercare.heading}
            </h2>
            <p className="text-body max-w-[60ch] text-steel">{enercare.body}</p>
            <Button variant="ghost" href={enercare.linkHref}>
              {enercare.linkLabel}
            </Button>
          </div>

          {/* right: the partner badge, in a clean white card */}
          <div className="flex justify-start lg:justify-end">
            <div className="flex flex-col items-start gap-3">
              <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-steel">
                Authorized Partner
              </span>
              <EnercareBadge width={200} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default EnercareBand;
