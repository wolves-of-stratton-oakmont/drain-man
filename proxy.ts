import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * TEMPORARY — red-theme preview. Remove this proxy (and the `.theme-red` block
 * in app/globals.css, plus the `x-theme` handling in app/layout.tsx) once the
 * client decides on the brand colour. See the /red route.
 *
 * `/red` and `/red/<anything>` render the *real* page for `<anything>` but with
 * the brand recoloured red. We rewrite the URL back to the actual route and tag
 * the request with `x-theme: red`; the root layout reads that header and adds
 * the `.theme-red` class to <body>, so the single --color-accent knob flips the
 * whole page (chrome included) without duplicating any route.
 *
 * (Next.js 16 renamed Middleware → Proxy; same API.)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const target = pathname === "/red" ? "/" : pathname.slice("/red".length);

  const url = request.nextUrl.clone();
  url.pathname = target;

  const headers = new Headers(request.headers);
  headers.set("x-theme", "red");

  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  matcher: ["/red", "/red/:path*"],
};
