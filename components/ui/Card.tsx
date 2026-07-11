import type { HTMLAttributes, ReactNode } from "react";

/**
 * Card — soft warm container. White surface, generous radius,
 * gentle shadow that lifts on hover when interactive. Ported from
 * design-import/.../_ds_bundle.js (components/core/Card.jsx).
 *
 * The original gates the hover lift behind React state that's only
 * wired up when `interactive` is true; here that's just whether the
 * hover: classes are present at all — no state needed either way.
 */

const TONE_CLASSES = {
  card: "bg-white",
  raised: "bg-cream-100",
} as const;

export type CardTone = keyof typeof TONE_CLASSES;

interface CardOwnProps {
  children?: ReactNode;
  interactive?: boolean;
  /** Tailwind padding class, e.g. "p-8" (default) or "p-6". */
  padding?: string;
  tone?: CardTone;
  className?: string;
}

export type CardProps = CardOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof CardOwnProps>;

export function Card({
  children,
  interactive = false,
  padding = "p-8",
  tone = "card",
  className,
  ...rest
}: CardProps) {
  const classes = [
    TONE_CLASSES[tone],
    "border border-line",
    "rounded-lg",
    "shadow-sm",
    "transition duration-base ease-soft",
    padding,
    interactive ? "cursor-pointer hover:shadow-lg hover:-translate-y-[3px]" : "cursor-default",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
