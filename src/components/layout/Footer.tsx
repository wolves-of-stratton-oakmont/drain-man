/**
 * Footer — 4-column dark footer (ARCHITECTURE §4.21; DESIGN-BRIEF §8.3).
 *
 * Col 1 brand + blurb + Enercare partner badge + social.
 * Col 2 grouped service links (by SERVICE_GROUPS).
 * Col 3 company links (FOOTER_COMPANY_LINKS).
 * Col 4 mono spec block (NAP / phone / email / hours / credentials), map-pin →
 *   googleMapsUrl.
 * Trust row (TRUST_BADGES, our honest lockups + the real Enercare mark).
 * A depth-rule above the legal row; legal row with © + privacy/terms + tagline.
 */

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn, currentYear } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { DepthRule } from "@/components/ui/DepthRule";
import {
  site,
  SERVICE_GROUPS,
  FOOTER_COMPANY_LINKS,
  LEGAL_LINKS,
  TRUST_BADGES,
} from "@/lib/site";
import { getServicesByGroup } from "@/data/services";

const colHeading =
  "font-mono text-eyebrow uppercase tracking-[0.18em] text-teal-bright";
const linkClass =
  "inline-block text-small text-on-dark-mut transition-colors duration-200 hover:text-on-dark link-underline";

export function Footer() {
  return (
    <footer className="bg-iron text-on-dark">
      {/* ---- main columns ---- */}
      <div className="mx-auto max-w-container px-[var(--gutter)] py-9">
        <div className="grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-[1.6fr_2fr_1fr_1.4fr]">
          {/* Col 1 — brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Drain Man — home" className="w-fit">
              <Logo variant="light" size={34} />
            </Link>
            <p className="max-w-[36ch] text-small text-on-dark-mut">
              {site.brandBlurb}
            </p>

            {/* Enercare partner badge (small, in a clean white card) */}
            <div className="mt-1 inline-flex w-fit items-center rounded-md bg-white px-4 py-3">
              <Image
                src="/images/partners/enercare-logo.svg"
                alt="Authorized Enercare partner"
                width={132}
                height={43}
                className="h-auto w-auto"
                style={{ width: 132, height: 43 }}
              />
            </div>

            {/* social */}
            <ul className="mt-1 flex items-center gap-3">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-[38px] place-items-center rounded-md border border-pipe-line text-on-dark-mut transition-colors duration-200 hover:border-teal-bright hover:text-teal-bright"
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — grouped services */}
          <nav aria-label="Services" className="flex flex-col gap-4">
            <h2 className={colHeading}>Services</h2>
            <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {SERVICE_GROUPS.map((group) => (
                <div key={group.id} className="flex flex-col gap-2">
                  <p className="font-mono text-eyebrow uppercase tracking-[0.12em] text-on-dark-mut/70">
                    {group.label}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {getServicesByGroup(group.id).map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className={linkClass}>
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Col 3 — company */}
          <nav aria-label="Company" className="flex flex-col gap-4">
            <h2 className={colHeading}>Company</h2>
            <ul className="flex flex-col gap-1.5">
              {FOOTER_COMPANY_LINKS.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — contact / spec block (mono) */}
          <div className="flex flex-col gap-4">
            <h2 className={colHeading}>Contact</h2>
            <address className="flex flex-col gap-3 font-mono text-small not-italic text-on-dark-mut">
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/addr flex items-start gap-2 transition-colors duration-200 hover:text-on-dark"
              >
                <Icon
                  name="map-pin"
                  size={16}
                  className="mt-0.5 shrink-0 text-teal-bright"
                />
                <span>
                  <span className="block text-on-dark">{site.legalName}</span>
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </span>
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-2 transition-colors duration-200 hover:text-on-dark"
              >
                <Icon name="phone" size={16} className="shrink-0 text-teal-bright" />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors duration-200 hover:text-on-dark"
              >
                <Icon name="mail" size={16} className="shrink-0 text-teal-bright" />
                {site.email}
              </a>
              <span className="flex items-start gap-2">
                <Icon
                  name="clock"
                  size={16}
                  className="mt-0.5 shrink-0 text-teal-bright"
                />
                <span>
                  {site.hours.weekdays}
                  <br />
                  {site.hours.sunday}
                  <br />
                  <span className="text-on-dark">{site.hours.emergency}</span>
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Icon
                  name="shield-check"
                  size={16}
                  className="shrink-0 text-teal-bright"
                />
                {site.credentials}
              </span>
            </address>
          </div>
        </div>
      </div>

      {/* ---- trust row ---- */}
      <div className="border-t border-pipe-line">
        <div className="mx-auto max-w-container px-[var(--gutter)] py-7">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge.label}
                className="grid h-[44px] place-items-center rounded-md bg-white px-4 py-2"
              >
                {badge.src ? (
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={badge.label === "Family-Owned Since 1972" ? 56 : 150}
                    height={badge.label === "Family-Owned Since 1972" ? 56 : 44}
                    className="h-auto max-h-[44px] w-auto"
                  />
                ) : (
                  <span className="font-mono text-eyebrow uppercase tracking-[0.12em] text-ink">
                    {badge.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- depth-rule + legal ---- */}
      <div className="mx-auto max-w-container px-[var(--gutter)]">
        <DepthRule onDark animate={false} />
      </div>
      <div className="border-t border-pipe-line">
        <div className="mx-auto flex max-w-container flex-col gap-2 px-[var(--gutter)] py-5 font-mono text-eyebrow uppercase tracking-[0.08em] text-on-dark-mut sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {currentYear()} {site.legalName}. All rights reserved.
          </span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn("transition-colors duration-200 hover:text-on-dark")}
              >
                {l.label}
              </Link>
            ))}
            <span className="text-teal-bright">Built in Scarborough.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
