import Image from "next/image";
import { Badge, type BadgeTone } from "./Badge";
import { Icon } from "./Icon";

/**
 * BlogCard — a blog post tile. Cover image, category tag, title,
 * date + reading time, and a "read" link. Lifts on hover. Ported
 * from design-import/.../_ds_bundle.js (components/core/BlogCard.jsx).
 *
 * Server Component: hover lift/underline are CSS-only via `group`/
 * `group-hover` on the wrapping `<a>`, same pattern as CourseCard.
 * Unlike CourseCard/TeacherCard, only the category badge tracks the
 * `accent` prop in the original — the "read more" link and the title's
 * hover-underline color are hardcoded to coral regardless of accent,
 * so that's preserved as-is rather than made accent-aware.
 *
 * Placeholder text uses `text-ink-500`, not the source's `ink-300`
 * (2026-07-19, Lighthouse a11y audit — see TeacherCard.tsx for the
 * same fix and the exact contrast numbers).
 */

const ACCENTS = {
  coral: "coral" as BadgeTone,
  amber: "amber" as BadgeTone,
  teal: "teal" as BadgeTone,
  raspberry: "raspberry" as BadgeTone,
} as const;

export type BlogCardAccent = keyof typeof ACCENTS;

export interface BlogCardProps {
  title: string;
  excerpt?: string;
  category?: string;
  date?: string;
  readTime?: string;
  coverSrc?: string;
  coverAlt?: string;
  accent?: BlogCardAccent;
  href?: string;
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  coverSrc,
  coverAlt,
  accent = "coral",
  href = "#",
  className,
}: BlogCardProps) {
  const badgeTone = ACCENTS[accent] ?? ACCENTS.coral;

  return (
    <a
      href={href}
      className={`group flex flex-col bg-white border border-line rounded-xl overflow-hidden shadow-sm no-underline text-inherit transition duration-base ease-soft hover:shadow-lg hover:-translate-y-1 ${
        className ?? ""
      }`}
    >
      <div className="relative w-full aspect-[16/10] bg-cream-200">
        {coverSrc ? (
          <Image src={coverSrc} alt={coverAlt ?? title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-ink-500 font-sans">
            Обложка статьи
          </div>
        )}
        {category && (
          <span className="absolute top-3.5 left-3.5">
            <Badge tone={badgeTone}>{category}</Badge>
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 pt-5 px-[22px] pb-[22px]">
        <h3 className="font-sans text-xl font-semibold leading-snug text-ink-900 m-0 no-underline decoration-coral-300 underline-offset-4 group-hover:underline">
          {title}
        </h3>
        {excerpt && <p className="font-sans text-sm text-ink-500 mt-2.5 m-0">{excerpt}</p>}

        <div className="flex items-center justify-between gap-3 mt-auto pt-[18px]">
          <div className="flex items-center gap-3 text-ink-500 text-xs font-semibold">
            {date && <span>{date}</span>}
            {readTime && (
              <span className="inline-flex items-center gap-[5px]">
                <Icon name="clock" size={14} className="text-ink-300" />
                {readTime}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-[5px] text-coral-600 font-semibold text-sm">
            Читать <Icon name="arrowRight" size={16} />
          </span>
        </div>
      </div>
    </a>
  );
}
