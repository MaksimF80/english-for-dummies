import type { HTMLAttributes, ReactNode } from "react";

/**
 * Badge — small pill label. Friendly tints, used for tags, eyebrows,
 * "no pressure" reassurance chips, course levels. Ported from
 * design-import/.../_ds_bundle.js (components/core/Badge.jsx).
 */

const TONE_CLASSES = {
  coral: "bg-coral-100 text-coral-700",
  amber: "bg-amber-100 text-amber-700",
  teal: "bg-teal-50 text-teal-700",
  raspberry: "bg-raspberry-50 text-raspberry-700",
  neutral: "bg-cream-200 text-ink-700",
  success: "bg-success-bg text-success-fg",
} as const;

export type BadgeTone = keyof typeof TONE_CLASSES;

interface BadgeOwnProps {
  children?: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
}

export type BadgeProps = BadgeOwnProps & Omit<HTMLAttributes<HTMLSpanElement>, keyof BadgeOwnProps>;

export function Badge({ children, tone = "coral", dot = false, className, ...rest }: BadgeProps) {
  const classes = [
    "inline-flex items-center gap-1.5",
    "py-[5px] px-3",
    "font-sans text-sm font-semibold leading-none",
    "rounded-pill",
    TONE_CLASSES[tone],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {dot && <span className="w-[7px] h-[7px] rounded-full shrink-0 bg-current" />}
      {children}
    </span>
  );
}
