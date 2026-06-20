import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default configuration: runs the full Next.js app (server + API routes) on a
// Cloudflare Worker. No incremental cache backend is configured because this
// site has no ISR/revalidated pages — just static pages + the dynamic
// /api/contact route. Add an R2/KV cache here later if ISR is introduced.
export default defineCloudflareConfig();
