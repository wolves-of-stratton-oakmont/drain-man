// ReviewsGrid — client-side service filter over the reviews (DESIGN-BRIEF §8.10).
// Renders filter Chips (All + each service present in the reviews) and the
// matching TestimonialCard grid. Reviews are NEVER labelled as samples here.
//
// Client component because the filter is interactive; the page itself stays a
// server component for clean metadata.

"use client";

import * as React from "react";
import { Chip } from "@/components/ui/Chip";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import type { Review } from "@/data/reviews";

export interface ReviewsGridProps {
  reviews: Review[];
  filters: { value: string; label: string }[];
}

const ALL = "all";

export function ReviewsGrid({ reviews, filters }: ReviewsGridProps) {
  const [active, setActive] = React.useState<string>(ALL);

  const visible =
    active === ALL ? reviews : reviews.filter((r) => r.service === active);

  return (
    <div className="flex flex-col gap-7">
      {/* filter chips */}
      <div
        role="group"
        aria-label="Filter reviews by service"
        className="flex flex-wrap gap-3"
      >
        <Chip
          as="button"
          active={active === ALL}
          aria-pressed={active === ALL}
          onClick={() => setActive(ALL)}
        >
          All reviews
        </Chip>
        {filters.map((f) => (
          <Chip
            key={f.value}
            as="button"
            active={active === f.value}
            aria-pressed={active === f.value}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </Chip>
        ))}
      </div>

      {/* live region announces how many match after filtering */}
      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} {visible.length === 1 ? "review" : "reviews"} shown
      </p>

      {/* the grid */}
      {visible.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((review, i) => (
            <li key={`${review.name}-${review.date}-${i}`} className="flex">
              <TestimonialCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-body text-steel">
          No reviews under that service yet. Try another, or call us about it —
          we&apos;ve almost certainly done the work.
        </p>
      )}
    </div>
  );
}

export default ReviewsGrid;
