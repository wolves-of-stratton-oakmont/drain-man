/**
 * ServiceCard (ARCHITECTURE §4.12; DESIGN-BRIEF §6.4).
 *
 * photo: white card, 3:2 next/image top, body with mono group micro-label
 *   (amber), H3 name, blurb, ghost "Learn more →" pinned bottom. Whole card is
 *   one link → /services/{slug}. Hover: lift (shadow-md), photo scale(1.04)
 *   clipped, title→teal, arrow nudges.
 * icon: no photo; 40px service icon in an amber-soft rounded square + label + blurb.
 */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { getServiceGroup } from "@/lib/site";
import type { Service } from "@/data/services";
import { CTA } from "@/lib/site";

export interface ServiceCardProps {
  service: Service;
  variant?: "photo" | "icon";
  className?: string;
}

export function ServiceCard({
  service,
  variant = "photo",
  className,
}: ServiceCardProps) {
  const group = getServiceGroup(service.group);
  const href = `/services/${service.slug}`;

  if (variant === "icon") {
    return (
      <Link
        href={href}
        className={cn(
          "group/card flex flex-col gap-4 rounded-md border border-mortar bg-white p-6",
          "shadow-sm transition-[box-shadow,transform] duration-200 ease-[var(--ease-depth)]",
          "hover:-translate-y-px hover:shadow-md",
          className,
        )}
      >
        <span
          className="grid size-[48px] place-items-center rounded-md bg-amber-soft text-teal transition-colors duration-200 group-hover/card:text-teal-deep"
          aria-hidden="true"
        >
          <Icon name={service.icon} size={26} />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-h4 font-semibold text-ink transition-colors duration-200 group-hover/card:text-teal">
            {service.name}
          </h3>
          <p className="text-small text-steel">{service.cardBlurb}</p>
        </div>
        <span className="mt-auto inline-flex items-center gap-[6px] pt-1 font-display text-small font-semibold text-teal">
          {CTA.learnMore}
          <Icon
            name="arrow-right"
            size={16}
            className="transition-transform duration-200 group-hover/card:translate-x-[3px]"
          />
        </span>
      </Link>
    );
  }

  // photo variant
  return (
    <Link
      href={href}
      className={cn(
        "group/card flex flex-col overflow-hidden rounded-md border border-mortar bg-white",
        "shadow-sm transition-[box-shadow,transform] duration-200 ease-[var(--ease-depth)]",
        "hover:-translate-y-px hover:shadow-md",
        className,
      )}
    >
      {/* 3:2 media */}
      <div className="relative aspect-[3/2] overflow-hidden bg-shallow">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[400ms] ease-[var(--ease-depth)] group-hover/card:scale-[1.04]"
        />
        {/* a tiny icon chip top-left ties the photo to the trade icon language */}
        <span
          className="absolute left-3 top-3 grid size-[34px] place-items-center rounded-md bg-iron/85 text-teal-bright backdrop-blur-[2px] ring-1 ring-white/10"
          aria-hidden="true"
        >
          <Icon name={service.icon} size={19} />
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-ember">
          {group.eyebrow}
        </p>
        <h3 className="font-display text-h3 font-bold text-ink transition-colors duration-200 group-hover/card:text-teal">
          {service.name}
        </h3>
        <p className="text-body text-steel">{service.cardBlurb}</p>
        <span className="mt-auto inline-flex items-center gap-[6px] pt-2 font-display text-body font-semibold text-teal">
          {CTA.learnMore}
          <Icon
            name="arrow-right"
            size={18}
            className="transition-transform duration-200 group-hover/card:translate-x-[3px]"
          />
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;
