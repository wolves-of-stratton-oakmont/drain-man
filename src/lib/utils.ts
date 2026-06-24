/**
 * utils.ts — small shared helpers. Dependency-free.
 */

/**
 * Conditional className joiner. Accepts strings, falsy values, and arrays.
 * Dependency-free (no clsx/tailwind-merge) — keep class lists non-conflicting.
 *
 * cn("a", cond && "b", undefined, ["c", "d"]) => "a b c d"
 */
export type ClassValue = string | number | null | false | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) out.push(inner);
    } else {
      out.push(String(input));
    }
  }
  return out.join(" ");
}

/** Strip the leading mono em-dash glyphs ("—— ") an eyebrow string may carry. */
export function cleanEyebrow(text: string): string {
  return text.replace(/^[—–-]+\s*/, "").trim();
}

/** Current year, for footer copyright. */
export function currentYear(): number {
  return new Date().getFullYear();
}

/** Absolute site URL (production). Builders should prefer relative paths +
    metadataBase; this is for places that need a fully-qualified URL (JSON-LD). */
export const SITE_URL = "https://www.thedrainman.ca";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
