/**
 * Header — two-row site header (ARCHITECTURE §4.21; DESIGN-BRIEF §6.2).
 *
 * Row 1 (utility/spec bar, iron, mono): address · hours · phone · a brick-red
 *   "24/7 EMERGENCY" badge anchoring to /emergency.
 * Row 2 (main nav, sticky, shadow once scrolled): logo left, PRIMARY_NAV centre,
 *   right cluster = outline "Free Estimate" + amber "Call …".
 * Services is a mega-menu: a 2-col panel grouped by SERVICE_GROUPS, each item an
 *   icon + name + one-liner. aria-expanded, Esc to close, hover + keyboard open.
 * Mobile: a hamburger opens a focus-trapped drawer (services accordion + pinned
 *   CTAs), body scroll locked, Esc + restore focus.
 *
 * Client component (scroll state, menu state, focus management).
 */

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import {
  site,
  CTA,
  PRIMARY_NAV,
  SERVICE_GROUPS,
  type ServiceGroupId,
} from "@/lib/site";
import { getServicesByGroup, type Service } from "@/data/services";
import type { IconName } from "@/lib/icons";

/**
 * Punchy mega-menu one-liners, verbatim from CONTENT §1.2 (the services
 * dropdown). Keyed by slug — shorter than `cardBlurb`, written for the menu.
 * (Flagged to lead as a candidate for the data layer.)
 */
const MENU_ONE_LINERS: Record<string, string> = {
  "drain-cleaning": "Clogs cleared, drains flowing.",
  "sewer-camera-inspection": "See exactly what's in your pipe.",
  "drain-repair-replacement": "Fix the pipe, not just the symptom.",
  "leak-detection": "Find the leak before it finds your floor.",
  "basement-waterproofing": "A dry basement, inside and out.",
  "excavation-underpinning": "Dig it right, support it properly.",
  "backwater-valve": "Stop the city sewer from backing up.",
  "sump-pump": "Move water out before it rises.",
  "water-heaters": "Hot water, sized right. Enercare rentals available.",
  "fixture-repair-installation": "Drips, runs and installs, done properly.",
  "water-service-line": "A stronger, safer line to the street.",
  "emergency-plumbing": "A real plumber answers, day or night.",
  "burst-frozen-pipes": "Stop the water, save the room.",
  "commercial-plumbing": "Keep your building running.",
};

function oneLiner(s: Service): string {
  return MENU_ONE_LINERS[s.slug] ?? s.cardBlurb;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // shadow on scroll
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open menu when the route changes. React's documented "adjust state
  // during render when a prop changes" pattern (no effect, no ref): track the
  // previous pathname in state and reset the menus when it differs.
  const [prevPath, setPrevPath] = React.useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMegaOpen(false);
    setDrawerOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* ===== Row 1 — utility / spec bar ===== */}
      <div className="bg-iron text-on-dark-mut">
        <div className="mx-auto flex max-w-container-wide items-center justify-between gap-4 px-[var(--gutter)] py-[7px] font-mono text-eyebrow uppercase tracking-[0.1em]">
          <div className="flex items-center gap-5">
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 transition-colors hover:text-on-dark sm:flex"
            >
              <Icon name="map-pin" size={14} className="text-teal-bright" />
              {site.address.short}
            </a>
            <span className="hidden items-center gap-2 md:flex">
              <Icon name="clock" size={14} className="text-teal-bright" />
              {site.hours.short}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-2 font-semibold text-on-dark transition-colors hover:text-teal-bright"
            >
              <Icon name="phone" size={14} className="text-teal-bright" />
              {site.phoneDisplay}
            </a>
            <Link href="/emergency" aria-label="24/7 emergency plumbing">
              <Badge tone="emergency" icon="clock-247">
                24/7 Emergency
              </Badge>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Row 2 — main nav ===== */}
      <div
        className={cn(
          "border-b bg-concrete/95 backdrop-blur-sm transition-shadow duration-200",
          scrolled ? "border-mortar shadow-sm" : "border-transparent",
        )}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-[var(--gutter)] py-[14px]">
          <Link href="/" aria-label="Drain Man — home" className="shrink-0">
            <Logo size={36} />
          </Link>

          {/* desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {PRIMARY_NAV.map((item) =>
                item.hasMegaMenu ? (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                  >
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      onClick={() => setMegaOpen((v) => !v)}
                      className={cn(
                        "flex items-center gap-1.5 font-display text-[16px] font-semibold transition-colors duration-200",
                        isActive(item.href)
                          ? "text-teal"
                          : "text-ink hover:text-teal",
                      )}
                    >
                      {item.label}
                      <Icon
                        name="chevron-down"
                        size={16}
                        className={cn(
                          "transition-transform duration-200",
                          megaOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {/* active amber underline */}
                    {isActive(item.href) ? (
                      <span className="absolute -bottom-[6px] left-0 h-[2px] w-full bg-amber" />
                    ) : null}
                  </li>
                ) : (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "font-display text-[16px] font-semibold transition-colors duration-200",
                        isActive(item.href)
                          ? "text-teal"
                          : "text-ink hover:text-teal",
                      )}
                    >
                      {item.label}
                    </Link>
                    {isActive(item.href) ? (
                      <span className="absolute -bottom-[6px] left-0 h-[2px] w-full bg-amber" />
                    ) : null}
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* right cluster (desktop) */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" href="/contact" size="sm" className="border-iron text-iron">
              {CTA.estimateShort}
            </Button>
            <Button variant="amber" href={`tel:${site.phoneTel}`} icon="phone" size="sm">
              {CTA.phone}
            </Button>
          </div>

          {/* mobile: hamburger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className="grid size-[44px] place-items-center rounded-md text-ink lg:hidden"
          >
            <Icon name="menu" size={24} />
          </button>
        </div>

        {/* ===== Mega-menu panel ===== */}
        <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
      </div>

      {/* ===== Mobile drawer ===== */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        isActive={isActive}
      />
    </header>
  );
}

/* ------------------------------ mega-menu ------------------------------ */
function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-x-0 top-full hidden border-b border-mortar bg-white shadow-md lg:block",
        "origin-top transition-[opacity,transform] duration-200 ease-[var(--ease-depth)]",
        open
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
      // keep it interactive while hovered
      onMouseEnter={() => {
        /* hover keeps parent open via its own handler */
      }}
    >
      <div className="mx-auto max-w-container px-[var(--gutter)] py-7">
        <div className="grid grid-cols-2 gap-x-8 gap-y-7">
          {SERVICE_GROUPS.map((group) => (
            <MegaColumn key={group.id} groupId={group.id} label={group.label} />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-mortar pt-5">
          <p className="font-mono text-eyebrow uppercase tracking-[0.12em] text-steel">
            Every service, below the floor and above it
          </p>
          <Button variant="ghost" href="/services">
            {CTA.viewAllServices}
          </Button>
        </div>
      </div>
    </div>
  );
}

function MegaColumn({ groupId, label }: { groupId: ServiceGroupId; label: string }) {
  const services = getServicesByGroup(groupId);
  return (
    <div>
      <p className="mb-3 font-mono text-eyebrow uppercase tracking-[0.16em] text-ember">
        {label}
      </p>
      <ul className="flex flex-col gap-1">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="group/mm flex items-start gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-shallow"
            >
              <span
                className="mt-0.5 grid size-[34px] shrink-0 place-items-center rounded-md bg-shallow text-teal transition-colors duration-200 group-hover/mm:bg-teal group-hover/mm:text-white"
                aria-hidden="true"
              >
                <Icon name={s.icon as IconName} size={19} />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-body font-semibold text-ink transition-colors duration-200 group-hover/mm:text-teal">
                  {s.name}
                </span>
                <span className="text-small text-steel">{oneLiner(s)}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------ mobile drawer ------------------------------ */
function MobileDrawer({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const previouslyFocused = React.useRef<HTMLElement | null>(null);

  // lock body scroll + focus trap + esc + restore focus
  React.useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    // focus first focusable in the panel
    const panel = panelRef.current;
    const focusables = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((el) => el.offsetParent !== null)
        : [];

    requestAnimationFrame(() => focusables()[0]?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div
      className={cn("lg:hidden", open ? "" : "pointer-events-none")}
      aria-hidden={!open}
    >
      {/* scrim */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-iron/60 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      {/* panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(92vw,380px)] flex-col bg-concrete shadow-lg",
          "transition-transform duration-300 ease-[var(--ease-depth)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* drawer header */}
        <div className="flex items-center justify-between border-b border-mortar px-5 py-4">
          <Logo size={32} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-[44px] place-items-center rounded-md text-ink hover:bg-mortar"
          >
            <Icon name="close" size={24} />
          </button>
        </div>

        {/* scrollable nav */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
          <ul className="flex flex-col">
            {PRIMARY_NAV.map((item) =>
              item.hasMegaMenu ? (
                <li key={item.href} className="border-b border-mortar">
                  {/* services accordion */}
                  <Accordion bordered={false}>
                    <AccordionItem question={item.label}>
                      <div className="flex flex-col gap-4 pt-1">
                        {SERVICE_GROUPS.map((group) => (
                          <div key={group.id} className="flex flex-col gap-1.5">
                            <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-ember">
                              {group.label}
                            </p>
                            <ul className="flex flex-col">
                              {getServicesByGroup(group.id).map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/services/${s.slug}`}
                                    onClick={onClose}
                                    className="flex items-center gap-2.5 py-2 text-body text-ink hover:text-teal"
                                  >
                                    <Icon
                                      name={s.icon as IconName}
                                      size={18}
                                      className="text-teal"
                                    />
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/services"
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 py-1 font-display text-body font-semibold text-teal"
                        >
                          {CTA.viewAllServices}
                          <Icon name="arrow-right" size={16} />
                        </Link>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </li>
              ) : (
                <li key={item.href} className="border-b border-mortar">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between py-[18px] font-display text-h4 font-semibold",
                      isActive(item.href) ? "text-teal" : "text-ink",
                    )}
                  >
                    {item.label}
                    <Icon name="chevron-right" size={18} className="text-steel" />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* pinned CTAs */}
        <div className="flex flex-col gap-3 border-t border-mortar bg-white px-5 py-4">
          <Button
            variant="amber"
            href={`tel:${site.phoneTel}`}
            icon="phone"
            className="w-full"
          >
            {CTA.phone}
          </Button>
          <Button
            variant="outline"
            href="/contact"
            onClick={onClose}
            className="w-full border-iron text-iron"
          >
            {CTA.estimate}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
