import type { SVGProps } from "react";

/**
 * Inline Lucide-style glyphs (24×24, 2px stroke), ported from
 * design-import/source/_ds/.../_ds_bundle.js (components/core/Icon.jsx).
 */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const PATHS = {
  mail: (
    <g {...STROKE}>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </g>
  ),
  menu: (
    <g {...STROKE}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </g>
  ),
  close: (
    <g {...STROKE}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </g>
  ),
  arrowRight: (
    <g {...STROKE}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </g>
  ),
  check: (
    <g {...STROKE}>
      <path d="M20 6 9 17l-5-5" />
    </g>
  ),
  chevronDown: (
    <g {...STROKE}>
      <path d="m6 9 6 6 6-6" />
    </g>
  ),
  clock: (
    <g {...STROKE}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </g>
  ),
  monitor: (
    <g {...STROKE}>
      <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
      <path d="M8.5 21h7M12 17v4" />
    </g>
  ),
  mapPin: (
    <g {...STROKE}>
      <path d="M20 10.5c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.5" r="2.8" />
    </g>
  ),
  calendar: (
    <g {...STROKE}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M16 3v4M8 3v4M3.5 10h17" />
    </g>
  ),
  sparkle: (
    <g {...STROKE}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </g>
  ),
  instagram: (
    <g {...STROKE}>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" stroke="none" />
    </g>
  ),
  telegram: (
    <g {...STROKE}>
      <path d="M21.5 4.3 2.9 11.4c-.9.35-.86 1.66.06 1.95l4.6 1.45 1.78 5.4c.27.66 1.07.83 1.58.34l2.55-2.46 4.7 3.46c.6.45 1.46.12 1.62-.62L22.5 5.4c.18-.84-.62-1.45-1-1.1Z" />
      <path d="m8 13.5 9.2-5.8-6.7 6.4" />
    </g>
  ),
  youtube: (
    <g {...STROKE}>
      <rect x="2" y="5" width="20" height="14" rx="4.5" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </g>
  ),
} as const;

export type IconName = keyof typeof PATHS;

export const ICON_NAMES = Object.keys(PATHS) as IconName[];

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`block shrink-0 ${className ?? ""}`}
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
