import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";

/**
 * Footer — brand column + 3 link columns + bottom bar (copyright +
 * legal links). Ported from Landing.dc.html lines 351-406.
 *
 * Same 3-tier grid collapse as Team (the only two sections that do
 * this): 4 columns (1.6fr/1fr/1fr/1.3fr) at `desktop` (960px) -> 2
 * columns below that -> 1 column below `compact` (580px), per
 * `.lp-footer-grid`'s two stacked media queries in the source. The
 * bottom bar additionally switches from a row to a stacked column
 * below `compact` (`.lp-footer-bottom`).
 *
 * Server Component: purely static markup, no interactivity.
 */

const LINK_COLUMNS = [
  {
    heading: "Курсы",
    links: [
      { href: "#", label: "Английский с нуля" },
      { href: "#", label: "Разговорный клуб" },
      { href: "#", label: "Английский для работы" },
      { href: "#courses", label: "Все курсы" },
    ],
  },
  {
    heading: "Школа",
    links: [
      { href: "#about", label: "О нас" },
      { href: "#team", label: "Команда" },
      { href: "#blog", label: "Блог" },
      { href: "#faq", label: "FAQ" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-cream-200 border-t border-line">
      <div className="max-w-page mx-auto px-5 py-13 desktop:px-8 desktop:pt-16 desktop:pb-10">
        <div className="grid grid-cols-1 compact:grid-cols-2 desktop:grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-10">
          {/* Brand */}
          <div className="max-w-[300px]">
            <Logo size="md" />
            <p className="font-sans text-sm leading-[1.65] text-ink-500 mt-4">
              Тёплая школа английского для взрослых. Учим говорить спокойно, в
              своём темпе и без страха ошибиться.
            </p>
            <div className="flex gap-2 mt-[18px]">
              <SocialIcon name="instagram" label="Instagram" />
              <SocialIcon name="telegram" label="Telegram" tone="coral" />
              <SocialIcon name="youtube" label="YouTube" />
            </div>
          </div>

          {/* Courses / School link columns */}
          {LINK_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <div className="font-sans font-bold text-sm tracking-[0.06em] uppercase text-ink-900">
                {col.heading}
              </div>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className="font-sans text-base text-ink-700 no-underline">
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <div className="font-sans font-bold text-sm tracking-[0.06em] uppercase text-ink-900">
              Контакты
            </div>
            <a href="mailto:hello@efd.ru" className="font-sans text-base text-ink-700 no-underline">
              hello@efd.ru
            </a>
            <a href="tel:+74950000000" className="font-sans text-base text-ink-700 no-underline">
              +7 495 000-00-00
            </a>
            <span className="font-sans text-sm text-ink-500">Москва · и онлайн по всему миру</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-line flex flex-col compact:flex-row items-start compact:items-center justify-between gap-3">
          <span className="font-sans text-sm text-ink-500">© 2026 English for Dummies</span>
          <div className="flex gap-6 flex-wrap">
            <a href="#" className="font-sans text-sm text-ink-500 no-underline">
              Политика конфиденциальности
            </a>
            <a href="#" className="font-sans text-sm text-ink-500 no-underline">
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
