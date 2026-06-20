import * as React from "react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * The family today. Only the real people named in SITE_SPEC — no invented
 * staff. Initials stand in for portraits (the client will swap in real
 * headshots later); the contract has no licensed portrait assets.
 */

type Person = {
  name: string;
  role: string;
  note: string;
};

const family: Person[] = [
  {
    name: "Bill Barber",
    role: "Founder",
    note: "Still hands-on. You’ll find him at excavation and waterproofing sites, not behind a desk.",
  },
  {
    name: "John",
    role: "Office manager",
    note: "Bill’s son and part of the second-generation leadership keeping the books — and the values — straight.",
  },
  {
    name: "Shawna",
    role: "Head office",
    note: "Bill’s daughter, running the head office so the crews can focus on the work.",
  },
  {
    name: "Brian",
    role: "Service technician",
    note: "Bill’s son-in-law, out on calls clearing and repairing drains across the GTA.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function FamilyGrid({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {family.map((person) => (
        <li key={person.name}>
          <Card variant="default" className="flex h-full flex-col gap-4">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 font-display text-h3 font-extrabold text-blue"
            >
              {initials(person.name)}
            </span>
            <div>
              <h3 className="text-h3 font-display font-extrabold tracking-[-0.01em] text-ink">
                {person.name}
              </h3>
              <p className="mt-0.5 font-mono text-sm font-medium uppercase tracking-[0.12em] text-steel">
                {person.role}
              </p>
            </div>
            <p className="text-base leading-relaxed text-ink/80">{person.note}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}
