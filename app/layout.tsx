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
  title: "English for Dummies — школа английского для тех, кто боится ошибаться",
  description:
    "Онлайн и офлайн школа английского для взрослых. Курсы, преподаватели, блог.",
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
