import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * "The rules Bill started with." Real differentiators from SITE_SPEC, set as a
 * numbered manifesto beside one honest image — numbering is earned here because
 * the copy frames these as an ordered set of rules, not decoration.
 */

type Value = { title: string; body: string };

const values: Value[] = [
  {
    title: "Services, not sales",
    body: "We won’t mislead you to win the job. We find the fix you actually need and tell it to you straight.",
  },
  {
    title: "Rates up front",
    body: "You hear the price before we start — not a surprise at the front door once the truck is in your driveway.",
  },
  {
    title: "No deposits",
    body: "An honest company shouldn’t need your money first. You pay once we’ve delivered the work we promised.",
  },
  {
    title: "Earned by referral",
    body: "We spend on quality work, not advertising. Customers and contractors send us the next job, and that keeps prices fair.",
  },
];

export function ValuesGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        className,
      )}
    >
      {/* One honest image — a handshake, not a stock value icon */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-md)] ring-1 ring-water-line lg:aspect-[4/5]">
        <Image
          src="/images/about/values-handshake.jpg"
          alt="Two people shaking hands on an agreement"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
        />
      </div>

      {/* The rules — numbered, divided by hairlines */}
      <ol className="flex flex-col">
        {values.map(({ title, body }, i) => (
          <li
            key={title}
            className="flex gap-5 border-t border-water-line py-6 first:border-t-0 first:pt-0 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="font-mono text-lg font-semibold leading-none text-accent"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-h3 font-display font-extrabold tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-steel">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
