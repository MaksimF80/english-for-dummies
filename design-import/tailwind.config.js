/**
 * Tailwind config generated from the "English for Dummies" design system tokens.
 * Drop into your Next.js project root (or merge into an existing tailwind.config.js/ts).
 * Pairs with the Google Fonts import in fonts/fonts.css (or self-host — see README).
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#FEF1F0', 100: '#FBDEDC', 200: '#F6BEBB', 300: '#F09793',
          400: '#EE7470', 500: '#E85550', 600: '#D5423D', 700: '#B23430',
        },
        amber: {
          50: '#FEF6E6', 100: '#FCEAC2', 200: '#FAD888', 300: '#F8C656',
          400: '#F6B33A', 500: '#F5A623', 600: '#DE9012', 700: '#B5740C',
        },
        teal: {
          50: '#E6F2F1', 100: '#C8E2DF', 300: '#7FBDB7',
          500: '#3C9A92', 600: '#2E8B84', 700: '#246E68',
        },
        raspberry: {
          50: '#FAE9EE', 100: '#F3D2DC', 300: '#DA8298',
          500: '#C8425F', 600: '#B83050', 700: '#98263F',
        },
        cream: {
          DEFAULT: '#FEFDF5', 100: '#FAF7E9', 200: '#F4EFDA',
        },
        sand: { 300: '#EBE3C9' },
        ink: {
          900: '#2B2722', 700: '#4A443C', 500: '#6E665B',
          300: '#A79E8E', 200: '#C9C0AE',
        },
        line: { DEFAULT: '#E7E1CF', strong: '#D8D0BA' },
        success: { bg: '#DBEEDF', fg: '#3E8255' },
        warning: { bg: '#FCEAC2', fg: '#B5740C' },
        error: { bg: '#FBDEDC', fg: '#B23430' },
        info: { bg: '#E6F2F1', fg: '#246E68' },
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Figtree', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        hand: ['Caveat', 'Segoe Script', 'cursive'],
      },
      fontSize: {
        xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem',
        xl: '1.375rem', '2xl': '1.75rem', '3xl': '2.25rem', '4xl': '3rem',
        '5xl': '3.75rem', '6xl': '4.5rem',
      },
      lineHeight: {
        tight: '1.08', snug: '1.22', normal: '1.55', relaxed: '1.75',
      },
      letterSpacing: {
        tight: '-0.02em', normal: '0', wide: '0.04em', caps: '0.10em',
      },
      spacing: {
        // additive to Tailwind's default scale — use alongside p-4 etc.
        18: '4.5rem',   // 72px, if ever needed between space-8 and space-9
      },
      borderRadius: {
        xs: '4px', sm: '8px', md: '12px', lg: '18px',
        xl: '28px', '2xl': '40px', pill: '999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(43,39,34,0.05)',
        sm: '0 1px 2px rgba(43,39,34,0.06), 0 2px 4px rgba(43,39,34,0.04)',
        md: '0 4px 10px rgba(43,39,34,0.07), 0 2px 4px rgba(43,39,34,0.05)',
        lg: '0 14px 30px rgba(43,39,34,0.10), 0 4px 8px rgba(43,39,34,0.05)',
        xl: '0 28px 60px rgba(43,39,34,0.14)',
        coral: '0 10px 22px rgba(232,85,80,0.28)',
        amber: '0 10px 22px rgba(245,166,35,0.26)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.33, 0.0, 0.2, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        fast: '140ms', base: '220ms', slow: '360ms',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
