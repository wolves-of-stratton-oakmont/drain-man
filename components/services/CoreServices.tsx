import Link from "next/link";
import Image from "next/image";
import {
  Waves,
  ShieldCheck,
  Flame,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Badge, buttonClasses } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * The three real service systems from SITE_SPEC §3.1, in the order water travels
 * the line: clear the drain → keep the flood out → flush the system clean.
 * Alternating image rows; each carries the verbatim-derived copy, the real
 * sub-items as chips, and a direct booking CTA.
 */

type CoreService = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  items?: string[];
  note?: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** Wide graphic (e.g. before/after) — show in full, never crop. */
    contain?: boolean;
    /** Short caption shown under `contain` graphics so they read as documentation. */
    caption?: string;
  };
};

const services: CoreService[] = [
  {
    id: "drain-services",
    eyebrow: "The main event",
    title: "Drain services",
    lead: "Clear it, repair it, and see exactly what's going on underground.",
    body: "We clear blocked drains, install new drains and cleanouts, and repair failing drainage systems. We can also run a sewer camera down the line and locate buried pipe — which is worth doing before a renovation or before you buy a home, because catching a problem early saves thousands.",
    items: [
      "Sewer video recording",
      "Underground drain location",
      "Sewage ejectors",
      "Sump pumps",
      "Backwater valves",
      "Floor drains",
      "Drain primer",
      "Catch basins",
      "Foundation drains",
    ],
    note: "We install, repair, and maintain all of the above — and more.",
    icon: Waves,
    image: {
      src: "/images/services/floor-drain.jpg",
      alt: "A plumber's gloved hands fitting a stainless steel pipe connection under a fixture",
      width: 1800,
      height: 1200,
    },
  },
  {
    id: "flood-prevention",
    eyebrow: "Keep the basement dry",
    title: "Flood prevention",
    lead: "Stop a city sewer backup before it reaches your floor.",
    body: "We install, repair, replace, and maintain backwater prevention systems — the valves that stop sewage and municipal backflow from forcing its way up the line and into your home during a heavy storm or a city main backup.",
    icon: ShieldCheck,
    image: {
      src: "/images/services/flood-prevention.jpg",
      alt: "Floodwater rising around a home, held back by an emergency flood barrier",
      width: 1800,
      height: 1200,
    },
  },
  {
    id: "power-flushing",
    eyebrow: "Restore the flow",
    title: "Power flushing",
    lead: "Clear the grease and sludge that's choking your pipes and heating.",
    body: "Power flushing scours grease, grime, and sludge out of pipes and heating systems so they flow freely again. Slow-warming heat, cold spots, noisy boilers, and murky or cloudy tap water are all signs that buildup is restricting your system — and a clear sign it's due for a flush.",
    items: [
      "Slow-warming heat",
      "Cold spots",
      "Noisy boilers",
      "Cloudy tap water",
    ],
    note: "Common symptoms we flush away.",
    icon: Flame,
    image: {
      src: "/images/services/power-flush.jpg",
      alt: "A heating system's red circulation pump, pressure gauge, and steel pipework",
      width: 1800,
      height: 1202,
    },
  },
];

export function CoreServices() {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      {services.map(({ icon: Icon, ...s }, i) => {
        const imageFirst = i % 2 === 1; // alternate: row 2 leads with image
        return (
          <article
            key={s.id}
            id={s.id}
            className="grid scroll-mt-28 items-center gap-8 md:gap-12 lg:grid-cols-2"
          >
            {/* Media */}
            <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
              <figure className="m-0">
                <div
                  className={[
                    "overflow-hidden rounded-2xl border border-water-line bg-water shadow-[var(--shadow-md)]",
                    s.image.contain
                      ? "flex aspect-[16/9] items-center justify-center p-4 sm:p-6"
                      : "aspect-[4/3]",
                  ].join(" ")}
                >
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    width={s.image.width}
                    height={s.image.height}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={
                      s.image.contain
                        ? "h-auto w-full rounded-lg object-contain"
                        : "h-full w-full object-cover"
                    }
                  />
                </div>
                {s.image.caption && (
                  <figcaption className="mt-3 text-center font-mono text-sm text-steel">
                    {s.image.caption}
                  </figcaption>
                )}
              </figure>
            </div>

            {/* Copy */}
            <div
              className={[
                "flex flex-col gap-4",
                imageFirst ? "lg:order-2" : "lg:order-1",
              ].join(" ")}
            >
              <span className="inline-flex items-center gap-2 font-mono text-eyebrow font-medium uppercase tracking-[0.18em] text-blue">
                <Icon className="h-4 w-4" aria-hidden />
                {s.eyebrow}
              </span>
              <h3 className="text-h2 text-ink">{s.title}</h3>
              <p className="text-lead text-ink">{s.lead}</p>
              <p className="max-w-[60ch] text-base text-ink/75">{s.body}</p>

              {s.items && (
                <ul className="mt-1 flex flex-wrap gap-2" aria-label={`${s.title} includes`}>
                  {s.items.map((item) => (
                    <li key={item}>
                      <Badge tone="neutral">{item}</Badge>
                    </li>
                  ))}
                </ul>
              )}
              {s.note && <p className="text-sm text-steel">{s.note}</p>}

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className={buttonClasses({ variant: "primary", size: "md" })}
                >
                  Book this service
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={site.phone.href}
                  className={buttonClasses({ variant: "ghost", size: "md" })}
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  <span className="font-mono">{site.phone.display}</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
