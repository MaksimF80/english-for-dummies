import type { Metadata } from "next";
import { Lora, Nunito_Sans, Caveat } from "next/font/google";
import Script from "next/script";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const YANDEX_METRIKA_ID = 110862494;

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
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />

        {/* Yandex.Metrika. `afterInteractive` (not `beforeInteractive`,
            which would block hydration for an analytics tag with no
            bearing on page functionality, and not `lazyOnload`, which
            defers past idle time and loses early pageview timing) —
            Next.js's own recommendation for this exact category of
            script: fires as soon as the page is interactive, doesn't
            block the initial render. */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');
              ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        {/* Not eligible for next/script — Script only injects <script>
            tags, this is the noscript-fallback pixel for JS-disabled
            visitors, rendered as plain JSX instead. */}
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
