import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { site, primaryNav } from "@/lib/site";

export function Footer() {
  // Dynamic copyright year — computed at runtime (client requirement).
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto w-full max-w-[var(--container-site)] px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand + blurb */}
          <div>
            <Logo height={40} />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/70">
              Family-owned Toronto drain specialists since {site.founded}. We clear
              blocked drains, stop basement floods, and run the camera down the main
              line — honest work, no surprises.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-white/60">
              <span className="rounded-full border border-white/15 px-2.5 py-1">
                Master Plumbing&nbsp;#{site.licenses.master}
              </span>
              <span className="rounded-full border border-white/15 px-2.5 py-1">
                Builders&nbsp;#{site.licenses.builder}
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="font-mono text-eyebrow uppercase tracking-[0.18em] text-signal">
              Pages
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* FAQ — de-emphasized, footer-only per client */}
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/55 transition-colors hover:text-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-mono text-eyebrow uppercase tracking-[0.18em] text-signal">
              Get in touch
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-base text-white/80">
              <li>
                <a
                  href={site.phone.href}
                  className="inline-flex items-center gap-2.5 font-mono transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  <Phone className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                >
                  <Mail className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.province} {site.address.postal}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs">
            Serving Toronto &amp; the GTA — honesty &amp; integrity since {site.founded}.
          </p>
        </div>
      </div>
    </footer>
  );
}
