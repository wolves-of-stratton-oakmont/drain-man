import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { EnercareBand } from "@/components/sections/EnercareBand";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { PlumberVsTechnician } from "@/components/sections/PlumberVsTechnician";
import { HeritageTeaser } from "@/components/home/HeritageTeaser";
import { BookCta } from "@/components/sections/BookCta";

// Home uses the layout's default title ("Drainman INC"); set the description here.
export const metadata: Metadata = {
  description:
    "Drainman INC is a second-generation, family-owned drain and plumbing company serving Toronto and the GTA since 1972. Blocked drains, flood prevention, power flushing — book with Enercare or call us.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 1 — Heroic thesis: trace the drain to the source */}
      <Hero />

      {/* 2 — Enercare front and center: the partner booking path, second thing you see */}
      <EnercareBand variant="hero" />

      {/* 3 — Trust strip: since 1972 / family / licensed / GTA */}
      <TrustStrip />

      {/* 4 — The three core services, linking into /services */}
      <ServicesSnapshot />

      {/* 5 — Standard plumber vs. technician — the real distinction (compact) */}
      <PlumberVsTechnician compact />

      {/* 6 — Family heritage teaser → /about */}
      <HeritageTeaser />

      {/* 7 — Final CTA → /contact (booking form lives there) */}
      <BookCta />
    </>
  );
}
