import { ImageResponse } from "next/og";

/**
 * OG image for the landing page. Rendered via Satori (`next/og`),
 * which does NOT understand Tailwind classes or CSS custom
 * properties — only inline `style` objects. Colors below are the
 * exact hex values from `app/globals.css`'s `@theme` block (cream,
 * coral-500, ink-900, amber-500, teal-600, raspberry-600), copied
 * by hand since Satori can't resolve `var(--color-*)`.
 *
 * The mark is `LogoMark`'s own SVG path data (components/ui/Logo.tsx)
 * with its Tailwind `className="fill-*"` calls replaced by hardcoded
 * `fill="#hex"` — Satori supports raw inline SVG, just not classes.
 */

export const alt = "English for Dummies — школа английского без страха ошибиться";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#FEFDF5";
const CORAL_500 = "#E85550";
const INK_900 = "#2B2722";
const TEAL_600 = "#2E8B84";
const RASPBERRY_600 = "#B83050";
const AMBER_500 = "#F5A623";

async function loadLoraFont() {
  const cssUrl = "https://fonts.googleapis.com/css2?family=Lora:wght@500&subset=cyrillic";
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error("Could not find Lora font URL in Google Fonts CSS");
  const fontResponse = await fetch(match[1]);
  if (!fontResponse.ok) throw new Error(`Failed to fetch Lora font file: ${fontResponse.status}`);
  return fontResponse.arrayBuffer();
}

export default async function Image() {
  const loraData = await loadLoraFont().catch((err) => {
    console.error("[opengraph-image] Failed to load Lora, falling back to default font:", err);
    return null;
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width={96} height={96} viewBox="0 0 48 48" fill="none">
            <path
              d="M10 5h28a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H22l-9.5 7.6A1.5 1.5 0 0 1 10 47.4V37H10a8 8 0 0 1-8-8V13a8 8 0 0 1 8-8Z"
              fill={TEAL_600}
            />
            <path
              d="M14.5 22c2.6 4.2 6.4 6.4 9.5 6.4s6.9-2.2 9.5-6.4"
              stroke={CREAM}
              strokeWidth={3.4}
              strokeLinecap="round"
              fill="none"
            />
            <circle cx={38} cy={11} r={5} fill={RASPBERRY_600} />
            <circle cx={38} cy={11} r={1.9} fill={AMBER_500} />
          </svg>

          <div
            style={{
              display: "flex",
              fontFamily: loraData ? "Lora" : "serif",
              fontWeight: 500,
              fontSize: 76,
              color: INK_900,
              letterSpacing: "-0.01em",
            }}
          >
            English&nbsp;
            <span style={{ color: CORAL_500 }}>for Dummies</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            fontFamily: "sans-serif",
            fontSize: 32,
            color: INK_900,
            opacity: 0.75,
          }}
        >
          Школа английского для тех, кто боится ошибиться
        </div>
      </div>
    ),
    {
      ...size,
      fonts: loraData ? [{ name: "Lora", data: loraData, style: "normal", weight: 500 }] : undefined,
    },
  );
}
