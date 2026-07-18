"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";

/**
 * ContactForm — owns the `<form>` tag itself, the submit button, the
 * honeypot field, and the loading/result state. Everything else
 * (name field, ContactReachField, message field) is passed in as
 * `children` from Contact.tsx, a Server Component — a Server
 * Component can render static JSX as a Client Component's children
 * without that JSX itself becoming client-side.
 *
 * `onSubmit` reads the whole form via `FormData(e.currentTarget)`
 * rather than tracking each field's value in React state — that
 * picks up `contact-method`/`reach` from the separate
 * `ContactReachField` client island for free, since they're all
 * inputs inside this same `<form>` regardless of which component
 * rendered them.
 */

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contactMethod: data.get("contact-method"),
          reach: data.get("reach"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-line rounded-lg shadow-md p-8"
    >
      {children}

      {/* Honeypot — invisible to real users (tabIndex -1, aria-hidden,
          off-canvas), still present in the DOM for bots that fill
          every input they find without rendering CSS layout. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button variant="primary" icon="send" type="submit" full disabled={submitting}>
        {submitting ? "Отправляем…" : "Отправить сообщение"}
      </Button>

      {status === "success" && (
        <p className="font-sans text-sm text-teal-700 mt-3">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      )}
      {status === "error" && (
        <p className="font-sans text-sm text-coral-600 mt-3">
          Не получилось отправить сообщение. Попробуйте ещё раз.
        </p>
      )}
    </form>
  );
}
