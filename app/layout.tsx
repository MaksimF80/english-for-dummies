import type { Metadata } from "next";
import { Lora, Nunito_Sans, Caveat } from "next/font/google";
import "./globals.css";

// Lora replaces Newsreader (display/headings) — Newsreader has no
// Cyrillic subset on Google Fonts and all site copy is Russian.
const lora = Lora({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
  style: ["normal", "italic"],
});

// Nunito Sans replaces Figtree (body/UI) — same reason as above.
const nunitoSans = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin", "cyrillic"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "English for Dummies — школа английского без страха ошибиться",
  description:
    "Тёплая школа английского для взрослых: учим говорить спокойно, без оценок и стыда за ошибки. Малые группы до 6 человек, онлайн и офлайн, начать можно с нуля.",
  openGraph: {
    title: "English for Dummies — английский без страха ошибиться",
    description:
      "Тёплая школа английского для взрослых. Малые группы, живые преподаватели, старт с любого уровня — даже с нуля.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${lora.variable} ${nunitoSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
