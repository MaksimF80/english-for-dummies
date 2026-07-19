import type { MetadataRoute } from "next";

/**
 * sitemap.xml via Next.js's file convention (app/sitemap.ts). Single
 * entry — this is a one-page landing site (all sections are anchors
 * on `/`, not separate routes), so there's nothing else to list.
 *
 * Same `SITE_URL` as robots.ts.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://english-for-dummies-tau.vercel.app";

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
