import { ImageResponse } from "next/og";

/**
 * iOS home-screen icon — 180×180, opaque background (iOS composites
 * its own rounded-square mask on top, so this must NOT round its
 * own corners or use transparency, both of which iOS ignores/mangles
 * for apple-touch-icon). Same LogoMark path data as icon.tsx, scaled
 * up and given breathing room on the cream brand background instead
 * of a transparent one.
 */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const TEAL_600 = "#2E8B84";
const RASPBERRY_600 = "#B83050";
const AMBER_500 = "#F5A623";
const CREAM = "#FEFDF5";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
        }}
      >
        <svg width={124} height={124} viewBox="0 0 48 48" fill="none">
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
      </div>
    ),
    { ...size },
  );
}
