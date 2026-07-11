import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * NavLink — anchor menu item with a soft animated underline.
 * Active items get a coral underline; hover warms the text. Ported
 * from design-import/.../_ds_bundle.js (components/core/NavLink.jsx).
 *
 * The original tracks hover via React state to decide the underline
 * width/colour; here it's a `group`/`group-hover` CSS pairing instead.
 */

interface NavLinkOwnProps {
  children?: ReactNode;
  href?: string;
  active?: boolean;
  className?: string;
}

export type NavLinkProps = NavLinkOwnProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NavLinkOwnProps>;

export function NavLink({ children, href = "#", active = false, className, ...rest }: NavLinkProps) {
  const classes = [
    "group relative inline-flex items-center",
    "py-1.5 px-0.5",
    "font-sans text-base no-underline",
    "transition-colors duration-fast ease-soft",
    active ? "text-ink-900 font-semibold" : "text-ink-700 font-medium hover:text-ink-900",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const underlineClasses = [
    "absolute left-0 bottom-0 h-[2.5px] rounded-pill",
    "transition-[width] duration-base ease-out",
    active ? "bg-coral-500 w-full" : "bg-amber-400 w-0 group-hover:w-full",
  ].join(" ");

  return (
    <a href={href} aria-current={active ? "page" : undefined} className={classes} {...rest}>
      {children}
      <span className={underlineClasses} />
    </a>
  );
}
