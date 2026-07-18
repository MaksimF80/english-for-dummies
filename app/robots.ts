import type { MetadataRoute } from "next";

/**
 * robots.txt via Next.js's file convention (app/robots.ts) instead
 * of a static public/robots.txt — same reasoning as sitemap.ts:
 * kept in sync with the app's actual base URL instead of a
 * hand-maintained static file.
 *
 * `SITE_URL` isn't set anywhere else in the project yet — the site
 * will launch on a free Vercel subdomain, not a custom domain, and
 * that address is only known once the first deploy exists.
 *
 * TODO: once deployed, replace the `https://example.com` fallback
 * below with the real `*.vercel.app` URL (or set `NEXT_PUBLIC_SITE_URL`
 * as an env var instead, which takes priority over this placeholder).
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
