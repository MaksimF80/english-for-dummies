import { Button } from "@/components/ui/Button";

/**
 * FAQ — "Частые вопросы" section. Asymmetric 2-col grid: left is an
 * intro + a "not found your answer?" contact card, right is an
 * accordion of 5 questions. Ported from Landing.dc.html lines 286-349.
 *
 * The accordion is native `<details>`/`<summary>` — toggle state is
 * browser-native, so this stays a Server Component with zero client
 * JS. The open/closed icon rotation and item shadow are driven purely
 * by Tailwind's `open:` variant (targets the `[open]` attribute),
 * matching the source's `.lp-faq-item[open]` CSS rules exactly.
 *
 * Below `desktop` (960px, shared with other sections) the grid
 * collapses to a single column, per `.lp-faq-grid` in the source.
 */

const FAQ_ITEMS = [
  {
    question: "Подойдёт ли курс, если у меня совсем нулевой уровень?",
    answer:
      "Да. Большинство наших учеников приходят с нуля или почти с нуля. Мы начинаем с самых основ и двигаемся в комфортном для вас темпе — никто не будет вас торопить.",
    defaultOpen: true,
  },
  {
    question: "А если я стесняюсь говорить и боюсь ошибаться?",
    answer:
      "Это абсолютно нормально, и именно для таких людей мы и существуем. Группы маленькие и поддерживающие, преподаватель мягко помогает, а ошибки мы воспринимаем как часть обучения, а не как провал.",
    defaultOpen: false,
  },
  {
    question: "Сколько человек в группе?",
    answer: "До 6 человек. Так у каждого хватает времени говорить, а преподаватель успевает уделить внимание всем.",
    defaultOpen: false,
  },
  {
    question: "Что будет, если я пропущу занятие?",
    answer:
      "Ничего страшного. Запись занятия и материалы остаются у вас, а преподаватель поможет догнать группу. Учёба должна вписываться в жизнь, а не наоборот.",
    defaultOpen: false,
  },
  {
    question: "Можно ли заниматься полностью онлайн?",
    answer:
      "Да. Большинство курсов доступны онлайн и офлайн — выбираете формат, который удобен именно вам. Можно совмещать.",
    defaultOpen: false,
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" className="bg-cream">
      <div className="max-w-page mx-auto px-5 py-13 desktop:px-8 desktop:py-22 grid grid-cols-1 desktop:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
        {/* Left: intro + contact */}
        <div>
          <span className="font-sans font-bold text-xs tracking-[0.10em] uppercase text-coral-700">
            FAQ
          </span>
          <h2 className="font-display font-medium text-3xl leading-snug text-ink-900 mt-3">
            Частые вопросы
          </h2>
          <p className="font-sans text-lg leading-[1.6] text-ink-700 mt-3.5">
            Собрали то, о чём чаще всего переживают взрослые перед стартом.
          </p>

          <div className="mt-7 bg-cream-100 border border-line rounded-lg p-[22px]">
            <div className="font-sans font-semibold text-xl leading-snug text-ink-900 mb-2">
              Не нашли ответ?
            </div>
            <p className="font-sans text-sm leading-[1.6] text-ink-500 mb-4">
              Напишите нам — расскажем про курсы и поможем выбрать.
            </p>
            <Button variant="primary" icon="mail" as="a" href="#course">
              Узнать о курсе
            </Button>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="flex flex-col gap-3.5">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              open={item.defaultOpen}
              className="group bg-white border border-line rounded-lg shadow-xs open:shadow-md overflow-hidden transition-shadow duration-[160ms] ease-soft"
            >
              <summary className="flex items-center justify-between gap-4 py-5 px-[22px] cursor-pointer select-none list-none font-sans text-lg font-semibold text-ink-900 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-coral-400 focus-visible:outline-offset-[-2px]">
                <span className="text-pretty">{item.question}</span>
                <span className="flex-none w-8 h-8 rounded-pill bg-cream-200 text-ink-700 inline-flex items-center justify-center text-[20px] leading-none transition-[transform,background-color,color] duration-[160ms] ease-soft group-open:rotate-180 group-open:bg-coral-500 group-open:text-white">
                  ⌄
                </span>
              </summary>
              <p className="m-0 pt-0 px-[22px] pb-[22px] max-w-[640px] font-sans text-base leading-[1.65] text-ink-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
