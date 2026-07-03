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

// Add or edit team members here. The first two are the named principals; the
// last two are generic placeholders — swap in real names, roles, and notes (or
// add more entries to the array) whenever you're ready.
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
    name: "Team member",
    role: "Role",
    note: "Add a short line about this team member — what they do and why they’re part of the family.",
  },
  {
    name: "Team member",
    role: "Role",
    note: "Add a short line about this team member — what they do and why they’re part of the family.",
  },
];

/**
 * A single first initial keeps every monogram the same visual weight (one bold
 * glyph), so the row reads as an intentional set of brand avatars rather than a
 * grid of missing photos. Duplicate letters are fine — the name sits right below.
 */
function initial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function FamilyGrid({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {family.map((person, i) => (
        <li key={i}>
          <Card variant="default" className="flex h-full flex-col gap-4">
            {/*
              Brand monogram, not a photo placeholder: a solid Drain-Blue disc
              with a white initial and a small Signal-Yellow locate-dot — the same
              "we found it" marker used on The Line — so it reads as intentional.
            */}
            <span
              aria-hidden="true"
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue font-display text-h3 font-extrabold leading-none text-white shadow-[var(--shadow-sm)]"
            >
              {initial(person.name)}
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-signal ring-2 ring-white" />
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
