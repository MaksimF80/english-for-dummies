import Image from "next/image";
import { Badge, type BadgeTone } from "./Badge";
import { SocialIcon } from "./SocialIcon";
import type { IconName } from "./Icon";

/**
 * TeacherCard — a team member tile. Photo with a level badge, name,
 * specialization, a couple of words of bio, and social links. Ported
 * from design-import/.../_ds_bundle.js (components/core/TeacherCard.jsx).
 *
 * Server Component: hover lift is CSS-only, same as CourseCard. The
 * original's `<image-slot>` (DS-runtime preview widget, driven by
 * `image-slot.js`) isn't needed in Next.js — replaced with `next/image`
 * when `photoSrc` is given, or a plain placeholder box when it isn't
 * (matches the README: team photos are still empty placeholder slots).
 *
 * Placeholder text uses `text-ink-500`, not the source's `ink-300`
 * (2026-07-19, Lighthouse a11y audit): `ink-300` on `cream-200` is
 * 2.30:1, failing WCAG AA's 4.5:1 for normal text. `ink-500` gives
 * 4.90:1.
 */

const ACCENTS = {
  coral: { fg: "text-coral-600", badge: "coral" as BadgeTone },
  amber: { fg: "text-amber-700", badge: "amber" as BadgeTone },
  teal: { fg: "text-teal-700", badge: "teal" as BadgeTone },
  raspberry: { fg: "text-raspberry-600", badge: "raspberry" as BadgeTone },
} as const;

export type TeacherCardAccent = keyof typeof ACCENTS;

export interface TeacherCardSocial {
  name: IconName;
  label?: string;
  href?: string;
}

export interface TeacherCardProps {
  name: string;
  specialization?: string;
  level?: string;
  bio?: string;
  photoSrc?: string;
  photoAlt?: string;
  socials?: TeacherCardSocial[];
  accent?: TeacherCardAccent;
  className?: string;
}

export function TeacherCard({
  name,
  specialization,
  level,
  bio,
  photoSrc,
  photoAlt,
  socials = [],
  accent = "coral",
  className,
}: TeacherCardProps) {
  const a = ACCENTS[accent] ?? ACCENTS.coral;

  return (
    <article
      className={`flex flex-col bg-white border border-line rounded-xl overflow-hidden shadow-sm transition duration-base ease-soft hover:shadow-lg hover:-translate-y-1 ${
        className ?? ""
      }`}
    >
      <div className="relative w-full aspect-square bg-cream-200">
        {photoSrc ? (
          <Image src={photoSrc} alt={photoAlt ?? name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-ink-500 font-sans">
            Фото преподавателя
          </div>
        )}
        {level && (
          <span className="absolute top-3.5 left-3.5">
            <Badge tone={a.badge}>{level}</Badge>
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 pt-5 px-[22px] pb-[22px]">
        <h3 className="font-sans text-xl font-semibold leading-snug text-ink-900 m-0">{name}</h3>
        {specialization && (
          <div className={`font-sans text-sm font-semibold mt-1 ${a.fg}`}>{specialization}</div>
        )}
        {bio && <p className="font-sans text-sm text-ink-500 mt-3 m-0">{bio}</p>}

        {socials.length > 0 && (
          <div className="flex gap-2 mt-auto pt-[18px]">
            {socials.map((s) => (
              <SocialIcon key={s.name} name={s.name} label={s.label || s.name} href={s.href || "#"} size={34} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
