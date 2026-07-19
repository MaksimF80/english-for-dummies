import type { MetadataRoute } from "next";

/**
 * robots.txt via Next.js's file convention (app/robots.ts) instead
 * of a static public/robots.txt — same reasoning as sitemap.ts:
 * kept in sync with the app's actual base URL instead of a
 * hand-maintained static file.
 *
 * `SITE_URL` — real production address, deployed on a free Vercel
 * subdomain (no custom domain). `NEXT_PUBLIC_SITE_URL` is also set
 * on Vercel itself (Project Settings → Environment Variables) so
 * this fallback only matters for local dev / builds without it set.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://english-for-dummies-tau.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
