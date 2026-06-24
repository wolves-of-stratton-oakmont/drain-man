/**
 * MobileStickyBar — fixed bottom action bar (ARCHITECTURE §4.21; DESIGN-BRIEF §6.13).
 *
 * Always-reachable Call (amber) + Estimate (outline) for a stressed user mid-
 * emergency. Iron bg, safe-area inset, hidden on desktop (lg:hidden).
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { site, CTA } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-pipe-line bg-iron lg:hidden",
        // sit above the iOS home indicator
        "pb-[max(12px,env(safe-area-inset-bottom))]",
      )}
    >
      <div className="flex gap-3 px-4 pt-3">
        <Button
          variant="amber"
          href={`tel:${site.phoneTel}`}
          icon="phone"
          size="md"
          className="flex-1"
          aria-label={`Call us at ${site.phoneDisplay}`}
        >
          Call
        </Button>
        <Button
          variant="outline"
          href="/contact"
          size="md"
          className="flex-1 border-on-dark text-on-dark hover:!text-iron"
        >
          {CTA.estimateShort}
        </Button>
      </div>
    </div>
  );
}

export default MobileStickyBar;
