import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

/**
 * Hero — "О школе" intro section. Text column (eyebrow, H1, lead
 * paragraph, reassurance badges, CTAs) + founder photo column with a
 * hand-written sticky-note callout. Ported from Landing.dc.html
 * lines 101-135.
 *
 * Below the `desktop` breakpoint (960px, shared with other sections —
 * see app/globals.css) the grid collapses to a single column AND the
 * photo column is dropped entirely (`.lp-hero-right { display: none }`
 * in the source — no stacked-below fallback exists for it).
 *
 * H1 deviates from source (2026-07-14, found only when testing real
 * phone widths post-assembly): the source hardcodes `text-5xl` (60px)
 * unconditionally, but at 60px the phrase's longest word overflows a
 * narrow phone's text column (measured: 347px content vs 320px
 * available at 360px viewport). Drops to `text-3xl` (36px — the same
 * token already used for H2 elsewhere, so guaranteed to fit) below
 * `desktop`, full `text-5xl` only at `desktop` and up.
 *
 * Server Component: purely static markup, no interactivity.
 *
 * `text-amber-700` (not the source's `amber-600`) on the hand-written
 * note (2026-07-19, Lighthouse a11y audit): `amber-600` on white is
 * 2.59:1, failing even the relaxed 3:1 large-text threshold (24px
 * qualifies as large text under WCAG regardless of weight). `amber-700`
 * gives 3.84:1, which clears it.
 */

export interface HeroProps {
  founderPhotoSrc?: string;
  founderPhotoAlt?: string;
}

export function Hero({ founderPhotoSrc, founderPhotoAlt }: HeroProps) {
  return (
    <section
      id="about"
      className="max-w-page mx-auto px-5 py-11 desktop:px-8 desktop:py-18"
    >
      <div className="grid grid-cols-1 desktop:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <span className="font-sans font-bold text-xs tracking-[0.10em] uppercase text-coral-700">
            О школе
          </span>
          <h1 className="font-display font-medium text-3xl desktop:text-5xl leading-[1.05] tracking-tight text-ink-900 mt-3.5">
            Английский для тех, кто боится ошибаться
          </h1>
          <p className="font-sans text-lg leading-[1.6] text-ink-700 mt-6 max-w-[520px]">
            «English for Dummies» — тёплая школа для взрослых. Мы учим говорить
            спокойно и в своём темпе: без оценок, без стыда за ошибки и без
            скучных учебников. Начать можно с любого уровня — даже с нуля.
          </p>

          <div className="flex flex-wrap gap-2 mt-[22px]">
            <Badge tone="teal" dot>
              Малые группы до 6 человек
            </Badge>
            <Badge tone="amber">Онлайн и офлайн</Badge>
            <Badge tone="neutral">Старт с нуля</Badge>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="primary" size="lg" icon="mail" as="a" href="#course">
              Узнать о курсе
            </Button>
            <Button variant="ghost" size="lg" as="a" href="#team">
              Познакомиться с командой
            </Button>
          </div>
        </div>

        {/* Right: founder photo (hidden below `desktop` — no source fallback) */}
        <div className="hidden desktop:block relative">
          <div
            className="absolute top-[-22px] right-[-18px] bottom-[-18px] left-[14px] rounded-2xl rotate-[-2.5deg] z-0"
            style={{
              background:
                "radial-gradient(120% 120% at 30% 20%, var(--color-amber-100), var(--color-coral-100) 70%)",
            }}
          />

          <div className="relative z-[1] block w-full aspect-[4/4.4] rounded-xl shadow-lg overflow-hidden bg-cream-200">
            {founderPhotoSrc ? (
              <Image
                src={founderPhotoSrc}
                alt={founderPhotoAlt ?? "Анна Морозова"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-ink-500 font-sans">
                Фото основателя
              </div>
            )}
          </div>

          <div className="absolute z-[2] right-[-14px] bottom-[26px] bg-white rounded-lg shadow-lg py-3 px-4 flex flex-col gap-0.5 rotate-[2deg] max-w-[220px]">
            <span className="font-hand font-semibold text-[24px] leading-none text-amber-700">
              20 лет учу говорить
            </span>
            <span className="font-sans font-semibold text-[13px] text-ink-900">Анна Морозова</span>
            <span className="font-sans text-xs text-ink-500">основатель школы</span>
          </div>
        </div>
      </div>
    </section>
  );
}
