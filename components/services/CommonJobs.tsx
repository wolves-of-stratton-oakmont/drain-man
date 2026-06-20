import Link from "next/link";
import { Toilet, Droplets, Wrench, Waves, ShowerHead, Cable } from "lucide-react";

/**
 * Everyday-language entry point to the Services page.
 * These are the words a homeowner actually uses when something goes wrong —
 * the surface symptoms before you trace the line down to the real system.
 * Each card links straight to the booking/contact page.
 */

type Job = {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  blurb: string;
};

const jobs: Job[] = [
  {
    icon: Toilet,
    title: "Blocked toilet",
    blurb: "Won't flush, gurgling, or backing up. We clear it and find out why.",
  },
  {
    icon: Droplets,
    title: "Blocked sink",
    blurb: "Slow kitchen or bathroom drains, standing water, and bad smells.",
  },
  {
    icon: Waves,
    title: "Blocked drains",
    blurb: "Floor drains, laundry lines, or the main backing up into the house.",
  },
  {
    icon: Cable,
    title: "Repiping",
    blurb: "Old or failing supply and waste pipes replaced, start to finish.",
  },
  {
    icon: ShowerHead,
    title: "Leaks & drips",
    blurb: "Dripping faucets, leaking traps, and pipes that have started to weep.",
  },
  {
    icon: Wrench,
    title: "Faucets & fixtures",
    blurb: "Faucets, valves, and fixtures repaired or swapped out cleanly.",
  },
];

// Mirrors the shared Card `raised` variant so these clickable cards stay on-system
// while remaining real <Link> elements (one focusable target each).
const cardClasses =
  "group flex h-full flex-col gap-3 rounded-2xl border border-water-line bg-white p-6 md:p-7 " +
  "shadow-[var(--shadow-md)] transition-[transform,box-shadow] duration-200 ease-[var(--ease-flow)] " +
  "hover:-translate-y-1 hover:shadow-[var(--shadow-blue)]";

export function CommonJobs() {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map(({ icon: Icon, title, blurb }) => (
        <li key={title} className="flex">
          <Link href="/contact" className={cardClasses}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors duration-200 ease-[var(--ease-flow)] group-hover:bg-blue group-hover:text-white">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="text-h3 text-ink">{title}</h3>
            <p className="text-base text-ink/75">{blurb}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-display text-sm font-bold text-blue">
              Book this fix
              <span
                aria-hidden
                className="transition-transform duration-200 ease-[var(--ease-flow)] group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
