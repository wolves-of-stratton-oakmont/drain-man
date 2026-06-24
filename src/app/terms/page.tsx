// TERMS (/terms) — Architect-owned utility-page stub.
// Verbatim metadata (CONTENT §13). Generic terms/disclaimer; user confirms.

import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms & Disclaimer | Drain Man" },
  description: "Terms of use for The Drain Man Inc. website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="prose-column mx-auto px-[var(--gutter)] py-10">
      <p className="eyebrow">— Terms</p>
      <h1 className="mt-4 font-display text-h1 font-extrabold">
        Terms &amp; Disclaimer
      </h1>
      <p className="mt-4 text-steel">
        These terms govern your use of the website for The Drain Man Inc.
      </p>
      <h2 className="mt-7 font-display text-h3 font-bold">Use of this site</h2>
      <p>
        The information on this site is provided for general guidance. Service
        descriptions, availability, and pricing may vary by job — we confirm your
        upfront price before any work begins.
      </p>
      <h2 className="mt-6 font-display text-h3 font-bold">No warranty on content</h2>
      <p>
        We aim to keep this site accurate and current, but we make no guarantee
        that all content is complete or error-free. For anything specific to your
        property, please contact us directly.
      </p>
      <h2 className="mt-6 font-display text-h3 font-bold">Contact</h2>
      <p>
        Questions? Call{" "}
        <a href={`tel:${site.phoneTel}`} className="text-teal">
          {site.phoneDisplay}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${site.email}`} className="text-teal">
          {site.email}
        </a>
        .
      </p>
      <p className="mt-6 text-small text-steel">
        {/* Placeholder per CONTENT §14 — the user will confirm final terms text. */}
        This is general language and will be finalized by The Drain Man Inc.
      </p>
    </section>
  );
}
