import type { AnchorHTMLAttributes } from "react";
import { Icon, type IconName } from "./Icon";

/**
 * SocialIcon — circular link to a social profile. Soft warm surface,
 * fills with brand colour on hover. Ported from design-import/.../
 * _ds_bundle.js (components/core/SocialIcon.jsx).
 *
 * `size` is a numeric prop (like Icon's), so it's applied via inline
 * style rather than a Tailwind class — Tailwind can't generate a
 * utility for a width/height that's only known at render time.
 */

const TONE_CLASSES = {
  cream: "bg-cream-200 text-ink-700 hover:bg-teal-600 hover:text-white",
  coral: "bg-coral-50 text-coral-600 hover:bg-coral-500 hover:text-white",
  outline: "bg-transparent text-ink-700 border-line-strong hover:bg-ink-900 hover:text-white",
} as const;

export type SocialIconTone = keyof typeof TONE_CLASSES;

interface SocialIconOwnProps {
  name: IconName;
  label?: string;
  href?: string;
  tone?: SocialIconTone;
  size?: number;
  className?: string;
}

export type SocialIconProps = SocialIconOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SocialIconOwnProps>;

export function SocialIcon({
  name,
  label,
  href = "#",
  tone = "cream",
  size = 40,
  className,
  ...rest
}: SocialIconProps) {
  const classes = [
    "inline-flex items-center justify-center",
    "rounded-pill border-[1.5px]",
    tone === "outline" ? "border-line-strong" : "border-transparent",
    "transition duration-fast ease-soft hover:-translate-y-0.5",
    TONE_CLASSES[tone],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      aria-label={label || name}
      className={classes}
      style={{ width: size, height: size }}
      {...rest}
    >
      <Icon name={name} size={Math.round(size * 0.5)} />
    </a>
  );
}
