// PRIVACY (/privacy) — Architect-owned utility-page stub.
// Verbatim metadata (CONTENT §13). Generic, honest privacy copy; user confirms.

import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Drain Man" },
  description: "How The Drain Man Inc. collects and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="prose-column mx-auto px-[var(--gutter)] py-10">
      <p className="eyebrow">— Privacy</p>
      <h1 className="mt-4 font-display text-h1 font-extrabold">
        Privacy Policy
      </h1>
      <p className="mt-4 text-steel">
        The Drain Man Inc. respects your privacy. This page explains, in plain
        language, what information we collect and how we use it.
      </p>
      <h2 className="mt-7 font-display text-h3 font-bold">
        What we collect
      </h2>
      <p>
        When you contact us by phone, email, or our estimate form, we collect the
        details you provide — such as your name, phone number, email, address, and
        a description of the work you need — so we can respond and provide a quote.
      </p>
      <h2 className="mt-6 font-display text-h3 font-bold">How we use it</h2>
      <p>
        We use your information only to respond to your request, schedule and
        perform work, and follow up about your service. We do not sell your
        information.
      </p>
      <h2 className="mt-6 font-display text-h3 font-bold">Contact</h2>
      <p>
        Questions about your information? Email{" "}
        <a href={`mailto:${site.email}`} className="text-teal">
          {site.email}
        </a>{" "}
        or call{" "}
        <a href={`tel:${site.phoneTel}`} className="text-teal">
          {site.phoneDisplay}
        </a>
        .
      </p>
      <p className="mt-6 text-small text-steel">
        {/* Placeholder per CONTENT §14 — the user will confirm final policy text. */}
        This is a general policy and will be finalized by The Drain Man Inc.
      </p>
    </section>
  );
}
