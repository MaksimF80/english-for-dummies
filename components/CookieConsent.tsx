"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * CookieConsent — minimal bottom bar informing about analytics
 * cookies. Purely informational, not a gate: Yandex.Metrika in
 * layout.tsx loads unconditionally regardless of this banner's
 * state — no consent-gated script loading here, per the user's
 * explicit call not to complicate that.
 *
 * Remembers acceptance in localStorage so it only shows once per
 * browser. Client Component: needs localStorage + a click handler,
 * neither available to a Server Component.
 */

const STORAGE_KEY = "efd-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-ink-900 text-cream">
      <div className="max-w-page mx-auto px-5 desktop:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <p className="font-sans text-sm m-0">Мы используем файлы cookie для аналитики.</p>
        <Button variant="primary" size="sm" onClick={accept}>
          Хорошо
        </Button>
      </div>
    </div>
  );
}
