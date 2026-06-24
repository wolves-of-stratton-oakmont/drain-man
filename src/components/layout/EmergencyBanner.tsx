/**
 * EmergencyBanner — dismissible top banner (ARCHITECTURE §4.21; DESIGN-BRIEF §8.2).
 *
 * Brick-red accent, mono voice. Full copy on desktop, short on mobile, with an
 * amber phone link. Dismissal persists per browser session (sessionStorage), so
 * a stressed user isn't nagged on every page, but it returns next visit.
 *
 * Rendered first in the layout chrome (above the header).
 */

"use client";

import * as React from "react";
import { Icon } from "@/components/ui/Icon";
import { site, emergencyBanner } from "@/lib/site";

const STORAGE_KEY = "dm:emergency-banner-dismissed";
const EVENT = "dm:emergency-banner-change";

/** Subscribe to dismissal changes (custom event fired by dismiss()). */
function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}
function getSnapshot() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
// Server (and first hydration pass) always renders the banner shown.
function getServerSnapshot() {
  return false;
}

export function EmergencyBanner() {
  // SSR-safe read of session state without a setState-in-effect (the dismissal
  // is external browser state → useSyncExternalStore is the right tool).
  const dismissed = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(EVENT));
  }

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Emergency service notice"
      className="relative border-b border-black/10 bg-emergency text-white"
    >
      <div className="mx-auto flex max-w-container-wide items-center gap-3 px-[var(--gutter)] py-[8px]">
        <Icon
          name="alert"
          size={16}
          className="hidden shrink-0 text-white sm:block"
        />
        {/* full copy (sm+) */}
        <p className="hidden flex-1 font-mono text-eyebrow uppercase tracking-[0.06em] sm:block">
          <span className="font-semibold">{emergencyBanner.lead}</span>{" "}
          <span className="text-white/85">{emergencyBanner.body}</span>{" "}
          <a
            href={`tel:${site.phoneTel}`}
            className="font-semibold text-amber underline-offset-2 hover:underline"
          >
            {site.phoneDisplay}
          </a>
          <span className="text-white/85"> · {emergencyBanner.tail}</span>
        </p>
        {/* short copy (mobile) */}
        <a
          href={`tel:${site.phoneTel}`}
          className="flex-1 font-mono text-eyebrow uppercase tracking-[0.04em] sm:hidden"
        >
          24/7 emergency?{" "}
          <span className="font-semibold text-amber">{site.phoneDisplay}</span>
        </a>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss emergency notice"
          className="-mr-1 grid size-[32px] shrink-0 place-items-center rounded-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Icon name="close" size={16} />
        </button>
      </div>
    </div>
  );
}

export default EmergencyBanner;
