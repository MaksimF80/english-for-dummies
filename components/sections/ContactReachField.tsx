"use client";

import { useState } from "react";
import { INPUT_CLASSES } from "./Contact";

/**
 * ContactReachField — the "how should we reply?" radio switcher +
 * the reach-method input, isolated as the smallest possible Client
 * Component. Switching between "Телефон"/"Email" changes the input's
 * `type` (tel/email) and placeholder to match — everything else in
 * Contact.tsx stays static and server-rendered.
 */

type ContactMethod = "phone" | "email";

export function ContactReachField() {
  const [method, setMethod] = useState<ContactMethod>("phone");

  return (
    <div className="mb-[18px]">
      <div className="font-sans font-semibold text-sm text-ink-900 mb-2">Как удобно ответить?</div>
      <div className="flex gap-5 mb-2.5">
        <label className="flex items-center gap-1.5 font-sans text-sm text-ink-700 cursor-pointer">
          <input
            type="radio"
            name="contact-method"
            value="phone"
            checked={method === "phone"}
            onChange={() => setMethod("phone")}
            className="accent-coral-500"
          />
          Телефон
        </label>
        <label className="flex items-center gap-1.5 font-sans text-sm text-ink-700 cursor-pointer">
          <input
            type="radio"
            name="contact-method"
            value="email"
            checked={method === "email"}
            onChange={() => setMethod("email")}
            className="accent-coral-500"
          />
          Email
        </label>
      </div>
      <input
        id="contact-reach"
        name="reach"
        type={method === "phone" ? "tel" : "email"}
        placeholder={method === "phone" ? "Ваш телефон" : "your@email.com"}
        required
        className={INPUT_CLASSES}
      />
    </div>
  );
}
