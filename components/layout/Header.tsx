"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { buttonClasses } from "@/components/ui/Button";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Subtle elevation once the page scrolls.
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-200",
        scrolled ? "border-water-line shadow-[var(--shadow-sm)]" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[var(--container-site)] items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          aria-label="Drainman INC — home"
        >
          <Logo height={38} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 font-display text-base font-bold tracking-tight transition-colors",
                  "hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
                  active ? "text-blue" : "text-ink",
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-px h-[3px] rounded-full bg-blue"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions: phone + primary CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 font-mono text-sm font-medium text-ink transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone.display}
          </a>
          <Link href="/contact" className={buttonClasses({ size: "sm" })}>
            Book a service
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu + backdrop */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        {/* Panel */}
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={cn(
            "absolute inset-x-0 top-0 origin-top border-b border-water-line bg-white px-5 pb-6 pt-4 shadow-[var(--shadow-md)] transition-[transform,opacity] duration-300 ease-[var(--ease-flow)]",
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          )}
        >
          <ul className="flex flex-col">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-3.5 font-display text-lg font-bold tracking-tight transition-colors",
                      active ? "text-blue" : "text-ink hover:bg-ink/5",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-water-line pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={buttonClasses({ size: "lg" })}
            >
              Book a service
            </Link>
            <a
              href={site.phone.href}
              onClick={() => setOpen(false)}
              className={buttonClasses({ variant: "secondary", size: "lg" })}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
