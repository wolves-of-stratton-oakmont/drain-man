// 404 — copy from CONTENT §12. On-brand, functional stub.
// Forge/owner may restyle with the custom drain/auger illustration per
// DESIGN-BRIEF §8.15, but keep the copy and links verbatim.

import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-container-prose flex-col items-center px-[var(--gutter)] py-11 text-center">
      <p className="eyebrow">— 404</p>
      <h1 className="mt-4 font-display text-h1 font-extrabold">
        This one went down the drain.
      </h1>
      <p className="mt-4 text-lead text-steel">
        We couldn&apos;t find that page. It might have moved, or the link might
        be off. Let&apos;s get you back on solid ground.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-amber px-5 py-3 font-semibold text-iron"
        >
          Go home
        </Link>
        <Link
          href="/services"
          className="rounded-md border-[1.5px] border-iron px-5 py-3 font-semibold text-iron"
        >
          Browse services
        </Link>
        <Link
          href="/contact"
          className="rounded-md border-[1.5px] border-iron px-5 py-3 font-semibold text-iron"
        >
          Contact us
        </Link>
      </div>
      <p className="mt-6 font-mono text-small text-steel">
        Or just call{" "}
        <a href={`tel:${site.phoneTel}`} className="text-teal">
          {site.phoneDisplay}
        </a>{" "}
        — a real plumber answers.
      </p>
    </section>
  );
}
