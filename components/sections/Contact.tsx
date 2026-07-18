import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactReachField } from "./ContactReachField";
import { ContactForm } from "./ContactForm";

/**
 * Contact — "Напишите нам — ответим без формальностей" section. Left:
 * intro + 3 contact rows (email/phone/city) + 3 SocialIcons. Right: a
 * form card (name, reach-method radio + phone-or-email field, message
 * textarea, submit button). Ported from a 2026-07-16 Landing.dc.html
 * update (design-import via `claude_design` MCP) — this section was
 * missing from the original design-import handoff and added later.
 *
 * Server Component: the name/message fields and all the static intro
 * content here are server-rendered. The actual `<form>` tag, submit
 * button, and honeypot live in `ContactForm` (a Client Component
 * this passes them into as children — see that file for why), and
 * the reach-method radio/input live in `ContactReachField`. Submit
 * posts to `app/api/contact/route.ts`, which forwards to Telegram.
 *
 * Same asymmetric `grid-cols-[0.85fr_1.15fr]` layout and `desktop`
 * breakpoint collapse as FAQ (the section right before this one).
 */

export const INPUT_CLASSES =
  "w-full font-sans text-base text-ink-900 bg-cream border border-line rounded-sm px-[14px] py-3 " +
  "placeholder:text-ink-500 transition-[border-color,box-shadow] duration-[160ms] ease-soft " +
  "focus:outline-none focus:border-coral-400 focus:shadow-[0_0_0_3px_var(--color-coral-50)]";

export function Contact() {
  return (
    <section id="contact" className="bg-cream-100">
      <div className="max-w-page mx-auto px-5 py-13 desktop:px-8 desktop:py-22 grid grid-cols-1 desktop:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
        {/* Left: intro + contact info */}
        <div>
          <span className="font-sans font-bold text-xs tracking-[0.10em] uppercase text-coral-500">
            Контакты
          </span>
          <h2 className="font-display font-medium text-3xl leading-snug text-ink-900 mt-3">
            Напишите нам — ответим без формальностей
          </h2>
          <p className="font-sans text-lg leading-[1.6] text-ink-700 mt-3.5 max-w-[420px]">
            Расскажите пару слов о себе — подскажем формат и уровень, с
            которого стоит начать.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            <a href="mailto:hello@efd.ru" className="flex items-center gap-3 no-underline">
              <span className="w-10 h-10 rounded-full bg-coral-50 text-coral-600 flex items-center justify-center font-sans font-bold">
                @
              </span>
              <span className="font-sans text-base text-ink-900">hello@efd.ru</span>
            </a>
            <a href="tel:+74950000000" className="flex items-center gap-3 no-underline">
              <span className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-sans font-bold">
                ☎
              </span>
              <span className="font-sans text-base text-ink-900">+7 495 000-00-00</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-sans font-bold">
                •
              </span>
              <span className="font-sans text-base text-ink-700">Москва · и онлайн по всему миру</span>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <SocialIcon name="instagram" label="Instagram" />
            <SocialIcon name="telegram" label="Telegram" tone="coral" />
            <SocialIcon name="youtube" label="YouTube" />
          </div>
        </div>

        {/* Right: form card */}
        <ContactForm>
          <div className="flex flex-col gap-1.5 mb-[18px]">
            <label htmlFor="contact-name" className="font-sans font-semibold text-sm text-ink-900">
              Имя
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Как к вам обращаться?"
              required
              className={INPUT_CLASSES}
            />
          </div>

          <ContactReachField />

          <div className="flex flex-col gap-1.5 mb-6">
            <label htmlFor="contact-message" className="font-sans font-semibold text-sm text-ink-900">
              Сообщение
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Например: хочу начать с нуля, удобны будни вечером"
              required
              className={`${INPUT_CLASSES} resize-y`}
            />
          </div>
        </ContactForm>
      </div>
    </section>
  );
}
