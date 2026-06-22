import Link from "next/link";
import Image from "next/image";
import {
  Toilet,
  Droplets,
  Wrench,
  Waves,
  ShowerHead,
  Cable,
  ArrowRight,
} from "lucide-react";

/**
 * Everyday-language entry point to the Services page.
 * These are the words a homeowner actually uses when something goes wrong —
 * the surface symptoms before you trace the line down to the real system.
 * Each card links straight to the booking/contact page.
 */

type Job = {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  image: string;
  alt: string;
  title: string;
  blurb: string;
};

const jobs: Job[] = [
  {
    icon: Toilet,
    image: "/images/services/jobs/job-toilet.jpg",
    alt: "A clean white toilet in a bright bathroom",
    title: "Blocked toilet",
    blurb: "Won't flush, gurgling, or backing up. We clear it and find out why.",
  },
  {
    icon: Droplets,
    image: "/images/services/jobs/job-sink.jpg",
    alt: "Water running from a modern kitchen faucet into a sink",
    title: "Blocked sink",
    blurb: "Slow kitchen or bathroom drains, standing water, and bad smells.",
  },
  {
    icon: Waves,
    image: "/images/services/jobs/job-drains.jpg",
    alt: "A metal floor drain grate",
    title: "Blocked drains",
    blurb: "Floor drains, laundry lines, or the main backing up into the house.",
  },
  {
    icon: Cable,
    image: "/images/services/jobs/job-repiping.jpg",
    alt: "Copper plumbing fittings and pipe lined up",
    title: "Repiping",
    blurb: "Old or failing supply and waste pipes replaced, start to finish.",
  },
  {
    icon: ShowerHead,
    image: "/images/services/jobs/job-leaks.jpg",
    alt: "A pipe with water dripping from a joint",
    title: "Leaks & drips",
    blurb: "Dripping faucets, leaking traps, and pipes that have started to weep.",
  },
  {
    icon: Wrench,
    image: "/images/services/jobs/job-fixtures.jpg",
    alt: "A hand operating a chrome faucet with running water",
    title: "Faucets & fixtures",
    blurb: "Faucets, valves, and fixtures repaired or swapped out cleanly.",
  },
];

export function CommonJobs() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map(({ icon: Icon, image, alt, title, blurb }) => (
        <li key={title} className="flex">
          <Link
            href="/contact"
            className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-sm)] ring-1 ring-water-line transition-[transform,box-shadow] duration-200 ease-[var(--ease-flow)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            {/* Image cap */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-[var(--ease-flow)] group-hover:scale-105"
              />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-h3 font-display font-bold text-ink">{title}</h3>
              </div>
              <p className="mt-3 text-base leading-relaxed text-steel">{blurb}</p>

              <span className="mt-auto inline-flex items-center gap-1.5 border-t border-water-line pt-4 font-display text-sm font-bold text-accent transition-[gap] duration-200 ease-[var(--ease-flow)] group-hover:gap-2.5">
                Book this fix
                <ArrowRight aria-hidden className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
