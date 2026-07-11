import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/**
 * Button — the primary action component, ported from
 * design-import/.../_ds_bundle.js (components/core/Button.jsx).
 * Warm, pill-shaped, gentle motion. Variants: primary (coral),
 * secondary (amber), teal, ghost, link.
 *
 * Unlike the DS-runtime original (JS-managed hover/press state via
 * inline styles), this uses Tailwind's hover:/active: pseudo-classes —
 * same visual result, no client-side state needed.
 */

const SIZE_CLASSES = {
  sm: "gap-1.5 py-2 px-4 text-sm min-h-9",
  md: "gap-2 py-3 px-[22px] text-base min-h-[46px]",
  lg: "gap-2.5 py-[15px] px-[30px] text-lg min-h-[54px]",
} as const;

const ICON_SIZES = { sm: 16, md: 18, lg: 20 } as const;

const VARIANT_CLASSES = {
  primary:
    "bg-coral-500 text-white shadow-coral hover:bg-coral-600 disabled:hover:bg-coral-500",
  secondary:
    "bg-amber-500 text-ink-900 shadow-amber hover:bg-amber-600 disabled:hover:bg-amber-500",
  teal: "bg-teal-600 text-white hover:bg-teal-700 disabled:hover:bg-teal-600",
  ghost:
    "bg-white text-ink-900 border-2 border-line-strong shadow-xs hover:bg-cream-100 disabled:hover:bg-white",
  link: "bg-transparent text-coral-500 hover:bg-coral-50 disabled:hover:bg-transparent",
} as const;

export type ButtonVariant = keyof typeof VARIANT_CLASSES;
export type ButtonSize = keyof typeof SIZE_CLASSES;

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconRight?: IconName;
  full?: boolean;
  disabled?: boolean;
  as?: ElementType;
  children?: ReactNode;
  className?: string;
}

export type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  full = false,
  disabled = false,
  as,
  className,
  ...rest
}: ButtonProps) {
  const Tag = as ?? "button";
  const isLink = variant === "link";

  const classes = [
    full ? "flex w-full" : "inline-flex",
    "items-center justify-center",
    "font-sans font-semibold leading-none whitespace-nowrap",
    "no-underline transition duration-fast ease-soft",
    "active:translate-y-px active:scale-[0.99]",
    isLink ? "py-1.5 px-1 rounded-sm" : "rounded-pill",
    isLink ? "" : SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconSize = ICON_SIZES[size];

  return (
    <Tag className={classes} disabled={Tag === "button" ? disabled : undefined} {...rest}>
      {icon && <Icon name={icon} size={iconSize} />}
      {children && <span>{children}</span>}
      {iconRight && <Icon name={iconRight} size={iconSize} />}
    </Tag>
  );
}
