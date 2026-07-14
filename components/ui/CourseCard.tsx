import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { Badge, type BadgeTone } from "./Badge";
import { Button } from "./Button";

/**
 * CourseCard — a single course tile. Warm tinted header with the level,
 * meta rows (format + duration), price, and a CTA. Lifts on hover.
 * Ported from design-import/.../_ds_bundle.js (components/core/CourseCard.jsx).
 *
 * Server Component: the hover lift is CSS-only (group hover: is not
 * even needed here since the whole <article> is the hover target).
 */

const ACCENTS = {
  coral: { tint: "bg-coral-50", badge: "coral" as BadgeTone, emblem: "text-coral-500" },
  amber: { tint: "bg-amber-50", badge: "amber" as BadgeTone, emblem: "text-amber-500" },
  teal: { tint: "bg-teal-50", badge: "teal" as BadgeTone, emblem: "text-teal-600" },
  raspberry: { tint: "bg-raspberry-50", badge: "raspberry" as BadgeTone, emblem: "text-raspberry-600" },
} as const;

export type CourseCardAccent = keyof typeof ACCENTS;

function MetaRow({ icon, children }: { icon: IconName; children: ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-ink-700 text-sm">
      <Icon name={icon} size={18} className="text-ink-300" />
      <span>{children}</span>
    </li>
  );
}

export interface CourseCardProps {
  title: string;
  description?: string;
  level: string;
  format?: string;
  duration?: string;
  price: string | number;
  priceUnit?: string;
  ctaLabel?: string;
  accent?: CourseCardAccent;
  href?: string;
  className?: string;
}

export function CourseCard({
  title,
  description,
  level,
  format = "Онлайн",
  duration,
  price,
  priceUnit = "₽/мес",
  ctaLabel = "Подробнее",
  accent = "coral",
  href = "#",
  className,
}: CourseCardProps) {
  const a = ACCENTS[accent] ?? ACCENTS.coral;
  const online = /онлайн/i.test(format);

  return (
    <article
      className={`flex flex-col bg-white border border-line rounded-xl overflow-hidden shadow-sm transition duration-base ease-soft hover:shadow-lg hover:-translate-y-1 ${
        className ?? ""
      }`}
    >
      <div className={`relative flex items-center justify-between py-5 px-6 ${a.tint}`}>
        <Badge tone={a.badge}>{level}</Badge>
        <span
          className={`inline-flex items-center justify-center w-11 h-11 rounded-pill bg-white shadow-xs shrink-0 ${a.emblem}`}
        >
          <Icon name={online ? "monitor" : "mapPin"} size={22} />
        </span>
      </div>

      <div className="flex flex-col flex-1 pt-[22px] px-6 pb-6">
        <h3 className="font-sans text-xl font-semibold leading-snug text-ink-900 m-0">{title}</h3>
        {description && <p className="font-sans text-sm text-ink-500 mt-2 m-0">{description}</p>}

        <ul className="list-none flex flex-col gap-2.5 mt-[18px] p-0">
          <MetaRow icon="monitor">{format}</MetaRow>
          {duration && <MetaRow icon="clock">{duration}</MetaRow>}
        </ul>

        <div className="flex items-end justify-between gap-3 mt-auto pt-[22px]">
          <div className="flex flex-col">
            <span className="text-xs text-ink-500 font-semibold">от</span>
            <span className="font-sans text-2xl font-bold text-ink-900 leading-none">
              {price}{" "}
              <span className="text-sm font-medium text-ink-500">{priceUnit}</span>
            </span>
          </div>
          <Button variant="primary" size="sm" iconRight="arrowRight" as="a" href={href}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
