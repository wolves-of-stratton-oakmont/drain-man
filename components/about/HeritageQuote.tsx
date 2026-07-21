import * as React from "react";

/**
 * A heritage callout on the dark "deep main" band. Not a fabricated customer
 * quote — it's the company's own promise, stated plainly. The locate-dot motif
 * marks it as part of "The Line."
 */
export function HeritageQuote() {
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <span
        aria-hidden="true"
        className="mx-auto mb-6 block h-3 w-3 rounded-full bg-signal"
      />
      <blockquote className="text-h2 font-display font-extrabold text-white text-balance">
        “An honest, hard-working tradesman shouldn’t need your money up front. You
        pay when we’ve done the work we promised.”
      </blockquote>
      <figcaption className="mt-6 font-mono text-sm uppercase tracking-[0.16em] text-signal">
        How Bill built it — and how we still run it
      </figcaption>
    </figure>
  );
}
