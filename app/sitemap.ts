import type { MetadataRoute } from "next";

/**
 * sitemap.xml via Next.js's file convention (app/sitemap.ts). Single
 * entry — this is a one-page landing site (all sections are anchors
 * on `/`, not separate routes), so there's nothing else to list.
 *
 * Same `SITE_URL` placeholder/override as robots.ts.
 *
 * TODO: once deployed, replace the `https://example.com` fallback
 * below with the real `*.vercel.app` URL (or set `NEXT_PUBLIC_SITE_URL`
 * as an env var instead, which takes priority over this placeholder).
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
