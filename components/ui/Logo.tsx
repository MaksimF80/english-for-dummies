/**
 * Logo — brand lockup. Geometric speech-bubble mark (teal) with a
 * reassuring smile + raspberry/amber spark, plus the wordmark. Ported
 * from design-import/.../_ds_bundle.js (components/core/Logo.jsx).
 */

export interface LogoMarkProps {
  size?: number;
}

export function LogoMark({ size = 40 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="block shrink-0"
    >
      <path
        d="M10 5h28a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H22l-9.5 7.6A1.5 1.5 0 0 1 10 47.4V37H10a8 8 0 0 1-8-8V13a8 8 0 0 1 8-8Z"
        className="fill-teal-600"
      />
      <path
        d="M14.5 22c2.6 4.2 6.4 6.4 9.5 6.4s6.9-2.2 9.5-6.4"
        className="stroke-cream"
        strokeWidth={3.4}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="38" cy="11" r="5" className="fill-raspberry-600" />
      <circle cx="38" cy="11" r="1.9" className="fill-amber-500" />
    </svg>
  );
}

const SIZE_CONFIG = {
  sm: { dim: 32, titleClass: "text-lg", subSize: 8.5 },
  md: { dim: 40, titleClass: "text-xl", subSize: 9.5 },
  lg: { dim: 52, titleClass: "text-2xl", subSize: 11 },
} as const;

export type LogoSize = keyof typeof SIZE_CONFIG;

export interface LogoProps {
  size?: LogoSize;
  showText?: boolean;
  onDark?: boolean;
  className?: string;
  /** Extra classes on the wordmark text span — for CSS-driven (not
   * JS-toggled) responsive hiding, e.g. `"hidden social:flex"`, as
   * opposed to `showText={false}` which removes it unconditionally. */
  textClassName?: string;
}

export function Logo({ size = "md", showText = true, onDark = false, className, textClassName }: LogoProps) {
  const { dim, titleClass, subSize } = SIZE_CONFIG[size];
  const gap = Math.round(dim * 0.28);
  const marginTop = Math.round(dim * 0.09 * 100) / 100;

  return (
    <span className={`inline-flex items-center ${className ?? ""}`} style={{ gap }}>
      <LogoMark size={dim} />
      {showText && (
        <span className={`flex flex-col leading-none ${textClassName ?? ""}`}>
          <span
            className={`font-display font-semibold ${titleClass} tracking-[-0.01em] whitespace-nowrap ${
              onDark ? "text-cream" : "text-ink-900"
            }`}
          >
            English <span className={onDark ? "text-amber-400" : "text-coral-500"}>for Dummies</span>
          </span>
          <span
            className={`font-sans font-bold uppercase tracking-[0.18em] ${
              onDark ? "text-ink-200" : "text-ink-500"
            }`}
            style={{ fontSize: subSize, marginTop }}
          >
            Школа английского
          </span>
        </span>
      )}
    </span>
  );
}
