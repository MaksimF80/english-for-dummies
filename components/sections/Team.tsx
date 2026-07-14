import { TeacherCard } from "@/components/ui/TeacherCard";

/**
 * Team — "Тёплые люди, а не строгие учителя" section. Header row
 * (eyebrow/H2/lead paragraph, no link this time) then a 4-up grid of
 * TeacherCard. Ported from Landing.dc.html lines 189-235.
 *
 * Grid is a 3-tier collapse, unique to this section (and Footer):
 * 4 columns desktop -> 2 columns below `desktop` (960px) -> 1 column
 * below `compact` (580px), per `.lp-team-grid`'s two stacked media
 * queries in the source (courses/blog go straight 3-col -> 1-col).
 *
 * Server Component: purely static markup, no interactivity.
 */

const TEACHERS = [
  {
    name: "Анна Морозова",
    specialization: "Основатель · разговорный",
    level: "A1–B2",
    bio: "Учу говорить спокойно и без стыда за ошибки. 20 лет в преподавании.",
    accent: "coral",
  },
  {
    name: "Дмитрий Соколов",
    specialization: "Грамматика без зубрёжки",
    level: "A0–B1",
    bio: "Объясняю сложное простыми словами — так, чтобы наконец стало понятно.",
    accent: "amber",
  },
  {
    name: "Мария Лебедева",
    specialization: "Английский для работы",
    level: "B1–C1",
    bio: "Готовлю к собеседованиям, письмам и созвонам на английском.",
    accent: "teal",
  },
  {
    name: "Иван Орлов",
    specialization: "Произношение и аудирование",
    level: "A2–B2",
    bio: "Помогаю понимать живую речь на слух и говорить без акцента-барьера.",
    accent: "raspberry",
  },
] as const;

export function Team() {
  return (
    <section id="team" className="bg-cream">
      <div className="max-w-page mx-auto px-5 py-13 desktop:px-8 desktop:py-22">
        <div className="max-w-[560px] mb-11">
          <span className="font-sans font-bold text-xs tracking-[0.10em] uppercase text-coral-500">
            Команда
          </span>
          <h2 className="font-display font-medium text-3xl leading-snug text-ink-900 mt-3">
            Тёплые люди, а не строгие учителя
          </h2>
          <p className="font-sans text-lg leading-[1.6] text-ink-700 mt-3.5">
            С вами занимаются преподаватели, которые сами когда-то боялись
            говорить. Они точно знают, как поддержать.
          </p>
        </div>

        <div className="grid grid-cols-1 compact:grid-cols-2 desktop:grid-cols-4 gap-6">
          {TEACHERS.map((teacher) => (
            <TeacherCard key={teacher.name} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
