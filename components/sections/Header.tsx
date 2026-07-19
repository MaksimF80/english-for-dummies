import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";

/**
 * Header — sticky site nav. Logo, primary nav, CTA button, a divider,
 * and 3 social links. Ported from Landing.dc.html lines 73-99.
 *
 * The nav collapses below the `nav` breakpoint — 1100px, NOT the
 * source's shared 960px cutoff. Measured 2026-07-14: the actual
 * content (logo + 5 links + CTA + divider + 3 social icons) overflows
 * below ~1045px, well above 960px, so `nav` is a deliberate Header-
 * only breakpoint (see app/globals.css).
 *
 * A second, narrower deviation (also 2026-07-14, found only once the
 * full page was assembled and tested at real phone widths — isolated
 * Header testing only checked the `nav` boundary, not how far it could
 * shrink beyond that): below `~640px` even Logo + CTA + divider + 3
 * social icons alone don't fit — real phones (360-430px) overflowed.
 * The source has no mobile-header fallback at all, so per the user's
 * call, below `--breakpoint-social` the divider + social icons hide
 * (CTA is conversion-critical; socials are already duplicated in the
 * Footer) AND the Logo drops its wordmark to icon-only (measured:
 * Logo-icon + CTA together need only ~260px, so reusing the same
 * breakpoint for both is enough margin down to real phone widths —
 * no need for a third, even-narrower breakpoint).
 *
 * Server Component: nothing here is stateful — sticky positioning
 * and the semi-transparent blur backdrop are plain CSS.
 *
 * `aria-label` on the logo `<a>` (2026-07-19, Lighthouse a11y audit):
 * below `social`, `textClassName="hidden social:flex"` hides the
 * wordmark and the mark SVG itself is `aria-hidden` — without an
 * explicit label the link had no accessible name at all on mobile
 * viewports, a direct side effect of the mobile-fit change above.
 */

const NAV_LINKS = [
  { href: "#about", label: "Главная", active: true },
  { href: "#courses", label: "Курсы", active: false },
  { href: "#team", label: "Команда", active: false },
  { href: "#blog", label: "Блог", active: false },
  { href: "#faq", label: "FAQ", active: false },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-cream/85 backdrop-blur-[10px]">
      <div className="max-w-page mx-auto flex items-center gap-6 px-5 desktop:px-8 py-4">
        <a href="#home" className="flex-none no-underline" aria-label="English for Dummies — на главную">
          <Logo size="md" textClassName="hidden social:flex" />
        </a>

        <nav className="hidden nav:flex mx-auto gap-[30px]">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} active={link.active}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex-none flex items-center gap-[18px] ml-auto nav:ml-0">
          <Button variant="primary" size="sm" icon="mail" as="a" href="#course">
            Узнать о курсе
          </Button>
          <div className="hidden social:flex items-center gap-[18px]">
            <span className="w-px h-7 bg-line-strong" />
            <div className="flex gap-2">
              <SocialIcon name="instagram" label="Instagram" size={38} />
              <SocialIcon name="telegram" label="Telegram" size={38} />
              <SocialIcon name="youtube" label="YouTube" size={38} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
