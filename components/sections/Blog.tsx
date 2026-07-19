import { BlogCard } from "@/components/ui/BlogCard";

/**
 * Blog — "Спокойно об английском" section. Header row (eyebrow/H2/
 * lead paragraph + "Все статьи →" link) then a 3-up BlogCard grid.
 * Ported from Landing.dc.html lines 237-284. Structurally identical
 * to Courses (same header-row + 3-col grid pattern, same 960px
 * collapse to 1 column).
 *
 * Server Component: purely static markup, no interactivity.
 */

const POSTS = [
  {
    title: "Как перестать бояться говорить",
    excerpt: "Три мягких приёма, чтобы заговорить уже на первом занятии — без стресса.",
    category: "Мотивация",
    date: "12 июня",
    readTime: "5 мин",
    accent: "coral",
    href: "#post",
  },
  {
    title: "Ошибки — это нормально",
    excerpt: "Почему ошибки ускоряют обучение и как перестать корить себя за них.",
    category: "Психология",
    date: "4 июня",
    readTime: "7 мин",
    accent: "amber",
    href: "#post",
  },
  {
    title: "15 минут английского в день",
    excerpt: "Простой ритуал, который реально вписывается в жизнь взрослого человека.",
    category: "Практика",
    date: "28 мая",
    readTime: "4 мин",
    accent: "teal",
    href: "#post",
  },
] as const;

export function Blog() {
  return (
    <section id="blog" className="bg-cream-100">
      <div className="max-w-page mx-auto px-5 py-13 desktop:px-8 desktop:py-22">
        <div className="flex items-end justify-between gap-4 mb-11 flex-wrap">
          <div className="max-w-[560px]">
            <span className="font-sans font-bold text-xs tracking-[0.10em] uppercase text-coral-700">
              Блог
            </span>
            <h2 className="font-display font-medium text-3xl leading-snug text-ink-900 mt-3">
              Спокойно об английском
            </h2>
            <p className="font-sans text-lg leading-[1.6] text-ink-700 mt-3.5">
              Короткие тёплые статьи о том, как учить язык без давления и стыда.
            </p>
          </div>
          <a
            href="#all-posts"
            className="inline-flex items-center gap-1.5 flex-none font-sans font-semibold text-base text-coral-600 no-underline"
          >
            Все статьи →
          </a>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-7">
          {POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
