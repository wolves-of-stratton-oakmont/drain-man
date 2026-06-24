/**
 * TestimonialCard (ARCHITECTURE §4.15; DESIGN-BRIEF §6.7).
 *
 * White rounded-md shadow-sm card with a 3px amber left accent bar. Stars render
 * as filled (star) + empty (star-outline) — 4★ = 4 filled + 1 empty. Quote in
 * ink. Footer: mono "— {name} · {neighbourhood}", mono date, teal service Chip.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Chip } from "@/components/ui/Chip";
import type { Review } from "@/data/reviews";

export interface TestimonialCardProps {
  review: Review;
  className?: string;
}

function Stars({ count }: { count: 4 | 5 }) {
  return (
    <div
      className="flex items-center gap-[3px] text-amber"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name={i < count ? "star" : "star-outline"}
          size={18}
          className={i < count ? "text-amber" : "text-mortar-2"}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({ review, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "relative flex h-full flex-col gap-4 overflow-hidden rounded-md border border-mortar bg-white p-6 shadow-sm",
        // 3px amber left accent bar
        "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-amber before:content-['']",
        className,
      )}
    >
      <Stars count={review.stars} />

      <blockquote className="flex-1 text-body text-ink">
        <p>{review.body}</p>
      </blockquote>

      <figcaption className="flex flex-col gap-3 border-t border-mortar pt-4">
        <div className="flex items-baseline justify-between gap-4">
          <cite className="font-mono text-small not-italic text-ink">
            — {review.name} · <span className="text-steel">{review.neighbourhood}</span>
          </cite>
          <span className="shrink-0 font-mono text-eyebrow uppercase tracking-[0.1em] text-steel">
            {review.date}
          </span>
        </div>
        <div>
          <Chip href={`/services/${review.service}`}>{review.serviceLabel}</Chip>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
