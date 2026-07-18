import { NextResponse } from "next/server";
import { ProxyAgent, setGlobalDispatcher } from "undici";

/**
 * POST /api/contact — receives the Contact section's form data and
 * forwards it to Telegram via the Bot API's sendMessage. Server-only
 * (Route Handlers never run on the client).
 *
 * Honeypot: a hidden `website` field (see ContactForm.tsx) that real
 * users never see or fill. If it's non-empty, the request is almost
 * certainly a bot — respond with the same 200 shape a genuine submit
 * gets, but skip the actual Telegram call, so the bot has no signal
 * that anything was filtered.
 *
 * Proxy: unlike curl, Node's native `fetch` (undici) does NOT read
 * HTTP_PROXY/HTTPS_PROXY env vars on its own — confirmed 2026-07-17
 * while debugging this exact route (`fetch failed... ETIMEDOUT`
 * calling api.telegram.org, same root cause as the Ollama cloud
 * proxy issue from 2026-07-15: Telegram is blocked without a VPN,
 * and the process's env *does* have the proxy vars, but plain fetch
 * ignores them). `undici`'s `ProxyAgent` set as the global dispatcher
 * is the fix — this only runs when a proxy env var is actually set,
 * so it's a no-op in any environment where direct access works fine.
 */

const proxyUrl = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
if (proxyUrl) {
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
}

interface ContactPayload {
  name?: unknown;
  contactMethod?: unknown;
  reach?: unknown;
  message?: unknown;
  website?: unknown;
}

const METHOD_LABELS: Record<string, string> = {
  phone: "Телефон",
  email: "Email",
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, contactMethod, reach, message, website } = body;

  // Honeypot tripped — pretend success, send nothing.
  if (isNonEmptyString(website)) {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmptyString(name)) {
    return NextResponse.json({ error: "Поле «Имя» обязательно" }, { status: 400 });
  }
  if (!isNonEmptyString(reach)) {
    return NextResponse.json({ error: "Укажите телефон или email" }, { status: 400 });
  }
  if (!isNonEmptyString(message)) {
    return NextResponse.json({ error: "Поле «Сообщение» обязательно" }, { status: 400 });
  }

  const methodLabel =
    typeof contactMethod === "string" && METHOD_LABELS[contactMethod]
      ? METHOD_LABELS[contactMethod]
      : METHOD_LABELS.phone;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "[/api/contact] Missing env var(s):",
      !botToken ? "TELEGRAM_BOT_TOKEN" : null,
      !chatId ? "TELEGRAM_CHAT_ID" : null,
    );
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const text = [
    "📩 Новая заявка с сайта",
    "",
    `Имя: ${name}`,
    `Способ связи: ${methodLabel}`,
    `Контакт: ${reach}`,
    "",
    "Сообщение:",
    message,
  ].join("\n");

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!telegramResponse.ok) {
      const errorBody = await telegramResponse.text();
      console.error("[/api/contact] Telegram API error:", telegramResponse.status, errorBody);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
  } catch (err) {
    console.error("[/api/contact] Telegram request failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
