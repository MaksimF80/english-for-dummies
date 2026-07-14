import { CourseCard } from "@/components/ui/CourseCard";

/**
 * Courses — "Выберите свой темп" section. Eyebrow + H2 + lead
 * paragraph + "Все курсы →" link in a header row, then a 3-up grid of
 * CourseCard. Ported from Landing.dc.html lines 137-187.
 *
 * Below the `desktop` breakpoint (960px, shared with other sections —
 * see app/globals.css) the grid collapses to a single column and
 * section padding drops from 88px/32px to 52px/20px, per `.lp-sec` /
 * `.lp-courses-grid` in the source's inline media query.
 *
 * Server Component: purely static markup, no interactivity.
 */

const COURSES = [
  {
    title: "Английский с нуля",
    description: "Спокойный старт для тех, кто никогда не учил язык или всё забыл.",
    level: "A0 · с нуля",
    format: "Онлайн и офлайн",
    duration: "4 месяца · 2 раза в неделю",
    price: "3 990",
    accent: "coral",
    ctaLabel: "Записаться",
    href: "#course",
  },
  {
    title: "Разговорный клуб",
    description: "Тёплая практика речи в малой группе — без оценок и страха ошибиться.",
    level: "A2–B1",
    format: "Онлайн",
    duration: "3 месяца · 1 раз в неделю",
    price: "2 490",
    accent: "amber",
    ctaLabel: "Подробнее",
    href: "#course",
  },
  {
    title: "Английский для работы",
    description: "Письма, созвоны и собеседования на английском — уверенно и по делу.",
    level: "B1–B2",
    format: "Онлайн и офлайн",
    duration: "5 месяцев · 2 раза в неделю",
    price: "5 490",
    accent: "teal",
    ctaLabel: "Подробнее",
    href: "#course",
  },
] as const;

export function Courses() {
  return (
    <section id="courses" className="bg-cream-100">
      <div className="max-w-page mx-auto px-5 py-13 desktop:px-8 desktop:py-22">
        <div className="flex items-end justify-between gap-4 mb-11 flex-wrap">
          <div className="max-w-[560px]">
            <span className="font-sans font-bold text-xs tracking-[0.10em] uppercase text-coral-500">
              Курсы
            </span>
            <h2 className="font-display font-medium text-3xl leading-snug text-ink-900 mt-3">
              Выберите свой темп
            </h2>
            <p className="font-sans text-lg leading-[1.6] text-ink-700 mt-3.5">
              Маленькие группы, живой преподаватель и поддержка на каждом шаге.
              Никаких экзаменов на старте — просто приходите как есть.
            </p>
          </div>
          <a
            href="#all-courses"
            className="inline-flex items-center gap-1.5 flex-none font-sans font-semibold text-base text-coral-600 no-underline"
          >
            Все курсы →
          </a>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-7">
          {COURSES.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
