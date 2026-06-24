import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All site imagery is served locally from /public/images (see IMAGE-SPEC.md),
  // so no remote image patterns are required. next/image still optimizes local
  // files. If a remote source is ever added, declare it under images.remotePatterns.
  images: {
    // Allow modern formats; sizes tuned for the layouts in DESIGN-BRIEF §4.5.
    formats: ["image/avif", "image/webp"],
  },
  // Surface type errors during build instead of silently passing.
  // (In Next 16, `next build` no longer runs ESLint and the `eslint` config
  // option was removed — lint is run separately via `npm run lint`.)
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
