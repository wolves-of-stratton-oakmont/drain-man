/**
 * faq.ts — 14 Q&As in 5 groups, transcribed verbatim from plan/CONTENT.md §8.
 *
 * Used by /faq (accordion + FAQPage JSON-LD) and reusable on service pages.
 * Group order and Q&A order match CONTENT §8.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  group: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    group: "Pricing & Deposits",
    items: [
      {
        q: "Do you charge upfront, or do prices change once you're here?",
        a: "You get our rate up front — not at the front door. We diagnose the real problem, give you a clear, itemized price before any work starts, and that's the price you pay. No surprise charges once we're in your home.",
      },
      {
        q: "Do you require a deposit?",
        a: "No. We never take a deposit. You pay when the work is done and you're satisfied with it. We think that's how it should be.",
      },
      {
        q: "Are estimates free?",
        a: "Yes. We'll talk through your problem and give you an estimate at no cost and no obligation. For bigger jobs like waterproofing or excavation, we'll come out and look so the price is accurate.",
      },
      {
        q: "Do you offer financing or rental options?",
        a: "For water heaters and home systems, we're an authorized Enercare partner, so we can set you up with rentals and protection plans instead of a big upfront purchase. For other work, ask us about payment options — we'll be straight about what's available.",
      },
    ],
  },
  {
    group: "Emergencies",
    items: [
      {
        q: "Are you really available 24/7?",
        a: "Yes. Call (416) 699-1370 any time — nights, weekends, holidays — and a real plumber answers, not a call centre or voicemail. Plumbing emergencies don't keep business hours, so neither do we.",
      },
      {
        q: "What should I do right now in a plumbing emergency?",
        a: "First, shut off the water — either the valve at the affected fixture or your home's main shut-off (usually in the basement near where the water enters). For a sewer backup, stop using water in the house. Then call us. We'll talk you through it and get someone out.",
      },
      {
        q: "Do you charge more for emergency or after-hours calls?",
        a: "We give you an upfront price even in an emergency. We don't take advantage of a bad night — the goal is to get your water under control and fix it properly, fairly.",
      },
    ],
  },
  {
    group: "Service & Areas",
    items: [
      {
        q: "What areas do you serve?",
        a: "Toronto and the Greater Toronto Area — from our shop in Scarborough out to Etobicoke, North York, East York, downtown, and across the GTA including Markham, Richmond Hill, Vaughan, Pickering, Ajax, Mississauga and more. Not sure if you're in range? Just call.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes — we're master-licensed Toronto plumbers with decades of training, and we're fully insured. Every job is done to code.",
      },
      {
        q: "Do you do both residential and commercial work?",
        a: "Both. We serve homeowners as well as businesses, property managers, and contractors across the GTA — a good portion of our work comes from contractor referrals.",
      },
    ],
  },
  {
    group: "Waterproofing & Excavation",
    items: [
      {
        q: "What's the difference between interior and exterior waterproofing — and which do I need?",
        a: "Exterior waterproofing means excavating to the foundation wall and sealing it from the outside with a membrane and drainage. Interior waterproofing manages water that reaches the wall, using weeping tile and a sump system inside. Which one you need depends on your home and where the water's coming in — we'll tell you straight, and sometimes it's far less than another company quoted.",
      },
      {
        q: "Can a backwater valve really stop my basement from flooding?",
        a: "A backwater valve is one of the best protections against sewer backups — it lets water flow out but closes to stop the city sewer from pushing back in during a storm. Many Toronto homeowners qualify for a city rebate toward it, and we'll point you to the program.",
      },
    ],
  },
  {
    group: "Water Heaters, Enercare & Warranties",
    items: [
      {
        q: "What is your Enercare partnership?",
        a: "We're an authorized Enercare partner, which means we can install and service tank and tankless water heaters and set you up with Enercare rentals and protection plans for your water heater and home systems. You get covered equipment without a big upfront cost — and the same honest advice whether you buy or rent.",
      },
      {
        q: "Do you guarantee your work?",
        a: "Yes. We stand behind what we do, in writing, and we use quality materials installed to code. Our reputation has been built on referrals for over fifty years — we're not about to cut corners on your job.",
      },
    ],
  },
];

/** Flat list of all Q&As, for FAQPage JSON-LD. */
export const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);
