import * as React from "react";
import { Handshake, Receipt, CircleDollarSign, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * The real differentiators from SITE_SPEC, as scannable value cards rather
 * than buried paragraphs. Copy stays close to the client's own wording.
 */

type Value = {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  body: string;
};

const values: Value[] = [
  {
    icon: Handshake,
    title: "Services, not sales",
    body: "We won’t mislead you to win the job. We find the fix you actually need and tell it to you straight.",
  },
  {
    icon: Receipt,
    title: "Rates up front",
    body: "You hear the price before we start — not a surprise at the front door once the truck is in your driveway.",
  },
  {
    icon: CircleDollarSign,
    title: "No deposits",
    body: "An honest company shouldn’t need your money first. You pay once we’ve delivered the work we promised.",
  },
  {
    icon: HeartHandshake,
    title: "Earned by referral",
    body: "We spend on quality work, not advertising. Customers and contractors send us the next job, and that keeps prices fair.",
  },
];

export function ValuesGrid({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2", className)}>
      {values.map(({ icon: Icon, title, body }) => (
        <li key={title}>
          <Card variant="default" className="flex h-full items-start gap-4">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue"
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-h3 font-display font-extrabold tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-ink/80">{body}</p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
