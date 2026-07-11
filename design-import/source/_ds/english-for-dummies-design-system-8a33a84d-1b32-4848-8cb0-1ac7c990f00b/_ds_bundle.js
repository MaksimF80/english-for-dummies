/* @ds-bundle: {"format":3,"namespace":"EnglishForDummiesDesignSystem_8a33a8","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BlogCard","sourcePath":"components/core/BlogCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CourseCard","sourcePath":"components/core/CourseCard.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"LogoMark","sourcePath":"components/core/Logo.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"NavLink","sourcePath":"components/core/NavLink.jsx"},{"name":"SocialIcon","sourcePath":"components/core/SocialIcon.jsx"},{"name":"TeacherCard","sourcePath":"components/core/TeacherCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"1d25278aa6e0","components/core/BlogCard.jsx":"24c76fac859c","components/core/Button.jsx":"ae71ff17756f","components/core/Card.jsx":"7e94abd1a546","components/core/CourseCard.jsx":"80f7e4c00226","components/core/Icon.jsx":"c2663a7bc97d","components/core/Logo.jsx":"c131b10dcf72","components/core/NavLink.jsx":"1e5a7760ebd4","components/core/SocialIcon.jsx":"7cc6ccc13f1d","components/core/TeacherCard.jsx":"f80b2160d21c","ui_kits/landing/Blog.jsx":"0b84f1bc4164","ui_kits/landing/Courses.jsx":"ef6c6bf264c0","ui_kits/landing/Header.jsx":"67cf58150b2e","ui_kits/landing/Hero.jsx":"575e5a3d53c2","ui_kits/landing/MobileHeader.jsx":"772a03ed3d3f","ui_kits/landing/Team.jsx":"2f1aef10f5d6","ui_kits/landing/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EnglishForDummiesDesignSystem_8a33a8 = window.EnglishForDummiesDesignSystem_8a33a8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label. Friendly tints, used for tags, eyebrows,
 * "no pressure" reassurance chips, course levels.
 */

const TONES = {
  coral: {
    bg: 'var(--coral-100)',
    fg: 'var(--coral-700)'
  },
  amber: {
    bg: 'var(--amber-100)',
    fg: 'var(--amber-700)'
  },
  teal: {
    bg: 'var(--teal-50)',
    fg: 'var(--teal-700)'
  },
  raspberry: {
    bg: 'var(--raspberry-50)',
    fg: 'var(--raspberry-700)'
  },
  neutral: {
    bg: 'var(--cream-200)',
    fg: 'var(--ink-700)'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success-fg)'
  }
};
function Badge({
  children,
  tone = 'coral',
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.coral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.fg,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft warm container. White surface, generous radius,
 * gentle shadow that lifts on hover when interactive.
 */

function Card({
  children,
  interactive = false,
  padding = 'var(--space-6)',
  tone = 'card',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === 'raised' ? 'var(--surface-raised)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: bg,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
      transform: hover ? 'translateY(-3px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — inline Lucide-style glyphs (24×24, 2px stroke).
 * Lucide (MIT) is the brand's icon system: rounded caps/joins, friendly weight.
 * Brand/social glyphs (instagram/telegram/youtube) are simplified marks.
 */

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};
const PATHS = {
  mail: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  })),
  menu: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17h16"
  })),
  close: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  arrowRight: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  check: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  chevronDown: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  clock: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3.5 2"
  })),
  monitor: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "4",
    width: "19",
    height: "13",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 21h7M12 17v4"
  })),
  mapPin: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "M20 10.5c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10.5",
    r: "2.8"
  })),
  calendar: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "5",
    width: "17",
    height: "16",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3v4M8 3v4M3.5 10h17"
  })),
  sparkle: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z"
  })),
  instagram: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.6",
    cy: "6.4",
    r: "0.6",
    fill: "currentColor",
    stroke: "none"
  })),
  telegram: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("path", {
    d: "M21.5 4.3 2.9 11.4c-.9.35-.86 1.66.06 1.95l4.6 1.45 1.78 5.4c.27.66 1.07.83 1.58.34l2.55-2.46 4.7 3.46c.6.45 1.46.12 1.62-.62L22.5 5.4c.18-.84-.62-1.45-1-1.1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8 13.5 9.2-5.8-6.7 6.4"
  })),
  youtube: /*#__PURE__*/React.createElement("g", STROKE, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 9 5 3-5 3V9Z",
    fill: "currentColor"
  }))
};
function Icon({
  name,
  size = 24,
  color,
  strokeWidth,
  style,
  ...rest
}) {
  const glyph = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    style: {
      display: 'block',
      color,
      flex: 'none',
      ...(strokeWidth ? {} : {}),
      ...style
    }
  }, rest), glyph);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/BlogCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BlogCard — a blog post tile. Cover image, category tag, title,
 * date + reading time, and a "read" link. Lifts on hover.
 * The cover is a user-fillable <image-slot> (load image-slot.js in host).
 */

const ACCENTS = {
  coral: 'coral',
  amber: 'amber',
  teal: 'teal',
  raspberry: 'raspberry'
};
function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  coverId,
  coverSrc,
  accent = 'coral',
  href = '#',
  style,
  ...rest
}) {
  const badgeTone = ACCENTS[accent] || 'coral';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16 / 10',
      background: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: coverId,
    src: coverSrc,
    shape: "rect",
    fit: "cover",
    placeholder: "\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u0441\u0442\u0430\u0442\u044C\u0438",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }), category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, category))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--ink-900)',
      margin: 0,
      textDecoration: hover ? 'underline' : 'none',
      textDecorationColor: 'var(--coral-300)',
      textUnderlineOffset: 4
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      margin: '10px 0 0'
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, date && /*#__PURE__*/React.createElement("span", null, date), readTime && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 14,
    color: "var(--ink-300)"
  }), readTime)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--coral-600)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)'
    }
  }, "\u0427\u0438\u0442\u0430\u0442\u044C ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 16
  })))));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action component.
 * Warm, pill-shaped, gentle motion. Variants: primary (coral),
 * secondary (amber), teal, ghost, link.
 */

const SIZES = {
  sm: {
    padding: '8px 16px',
    font: 'var(--text-sm)',
    gap: 6,
    icon: 16,
    minH: 36
  },
  md: {
    padding: '12px 22px',
    font: 'var(--text-base)',
    gap: 8,
    icon: 18,
    minH: 46
  },
  lg: {
    padding: '15px 30px',
    font: 'var(--text-lg)',
    gap: 10,
    icon: 20,
    minH: 54
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--text-on-accent)',
    border: '2px solid transparent',
    boxShadow: 'var(--shadow-coral)',
    '--hover-bg': 'var(--accent-primary-hover)'
  },
  secondary: {
    background: 'var(--accent-secondary)',
    color: 'var(--ink-900)',
    border: '2px solid transparent',
    boxShadow: 'var(--shadow-amber)',
    '--hover-bg': 'var(--accent-secondary-hover)'
  },
  teal: {
    background: 'var(--accent-teal)',
    color: 'var(--white)',
    border: '2px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--teal-700)'
  },
  ghost: {
    background: 'var(--white)',
    color: 'var(--ink-900)',
    border: '2px solid var(--border-strong)',
    boxShadow: 'var(--shadow-xs)',
    '--hover-bg': 'var(--cream-100)'
  },
  link: {
    background: 'transparent',
    color: 'var(--accent-primary)',
    border: '2px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--coral-50)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  full = false,
  disabled = false,
  as = 'button',
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: variant === 'link' ? '6px 4px' : s.padding,
    minHeight: variant === 'link' ? undefined : s.minH,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: s.font,
    lineHeight: 1,
    borderRadius: variant === 'link' ? 'var(--radius-sm)' : 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
    opacity: disabled ? 0.5 : 1,
    transform: press && !disabled ? 'translateY(1px) scale(0.99)' : 'none',
    ...v,
    background: hover && !disabled ? v['--hover-bg'] : v.background,
    ...style
  };
  delete base['--hover-bg'];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CourseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CourseCard — a single course tile. Warm tinted header with the level,
 * meta rows (format + duration), price, and a CTA. Lifts on hover.
 */

const ACCENTS = {
  coral: {
    tint: 'var(--coral-50)',
    badge: 'coral',
    emblem: 'var(--coral-500)'
  },
  amber: {
    tint: 'var(--amber-50)',
    badge: 'amber',
    emblem: 'var(--amber-500)'
  },
  teal: {
    tint: 'var(--teal-50)',
    badge: 'teal',
    emblem: 'var(--teal-600)'
  },
  raspberry: {
    tint: 'var(--raspberry-50)',
    badge: 'raspberry',
    emblem: 'var(--raspberry-600)'
  }
};
function MetaRow({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--ink-300)"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
function CourseCard({
  title,
  description,
  level,
  format = 'Онлайн',
  duration,
  price,
  priceUnit = '₽/мес',
  ctaLabel = 'Подробнее',
  accent = 'coral',
  href = '#',
  style,
  ...rest
}) {
  const a = ACCENTS[accent] || ACCENTS.coral;
  const [hover, setHover] = React.useState(false);
  const online = /онлайн/i.test(format);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: a.tint,
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: a.badge
  }, level), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      color: a.emblem,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-xs)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: online ? 'monitor' : 'mapPin',
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 24px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      margin: '8px 0 0'
    }
  }, description), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '18px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    icon: "monitor"
  }, format), duration && /*#__PURE__*/React.createElement(MetaRow, {
    icon: "clock"
  }, duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 22,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "\u043E\u0442"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-900)',
      lineHeight: 1
    }
  }, price, ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)'
    }
  }, priceUnit))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    iconRight: "arrowRight",
    as: "a",
    href: href
  }, ctaLabel))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — brand lockup. Geometric speech-bubble mark (teal) with a
 * reassuring smile + raspberry/amber spark, plus the wordmark.
 */

function LogoMark({
  size = 40
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 5h28a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H22l-9.5 7.6A1.5 1.5 0 0 1 10 47.4V37H10a8 8 0 0 1-8-8V13a8 8 0 0 1 8-8Z",
    fill: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 22c2.6 4.2 6.4 6.4 9.5 6.4s6.9-2.2 9.5-6.4",
    stroke: "var(--cream)",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "11",
    r: "5",
    fill: "var(--raspberry-600)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "11",
    r: "1.9",
    fill: "var(--amber-500)"
  }));
}
function Logo({
  size = 'md',
  showText = true,
  onDark = false,
  style,
  ...rest
}) {
  const dim = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;
  const titleSize = size === 'sm' ? 18 : size === 'lg' ? 28 : 22;
  const subSize = size === 'sm' ? 8.5 : size === 'lg' ? 11 : 9.5;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: dim * 0.28,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(LogoMark, {
    size: dim
  }), showText && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: titleSize,
      color: onDark ? 'var(--cream)' : 'var(--ink-900)',
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap'
    }
  }, "English ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--amber-400)' : 'var(--coral-500)'
    }
  }, "for Dummies")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: subSize,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--ink-200)' : 'var(--text-muted)',
      marginTop: dim * 0.09
    }
  }, "\u0428\u043A\u043E\u043B\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E")));
}
Object.assign(__ds_scope, { LogoMark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavLink — anchor menu item with a soft animated underline.
 * Active items get a coral underline; hover warms the text.
 */

function NavLink({
  children,
  href = '#',
  active = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-current": active ? 'page' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 2px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
      color: on ? 'var(--ink-900)' : 'var(--text-body)',
      transition: 'color var(--dur-fast) var(--ease-soft)',
      textDecoration: 'none',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 2.5,
      borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--coral-500)' : 'var(--amber-400)',
      width: on ? '100%' : '0%',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SocialIcon — circular link to a social profile. Soft warm surface,
 * fills with brand colour on hover.
 */

const TONES = {
  cream: {
    bg: 'var(--cream-200)',
    fg: 'var(--ink-700)',
    hoverBg: 'var(--teal-600)',
    hoverFg: 'var(--white)'
  },
  coral: {
    bg: 'var(--coral-50)',
    fg: 'var(--coral-600)',
    hoverBg: 'var(--coral-500)',
    hoverFg: 'var(--white)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--ink-700)',
    hoverBg: 'var(--ink-900)',
    hoverFg: 'var(--white)'
  }
};
function SocialIcon({
  name,
  label,
  href = '#',
  tone = 'cream',
  size = 40,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.cream;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": label || name,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: hover ? t.hoverBg : t.bg,
      color: hover ? t.hoverFg : t.fg,
      border: tone === 'outline' ? '1.5px solid var(--border-strong)' : '1.5px solid transparent',
      transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/TeacherCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TeacherCard — a team member tile. Photo with a level badge, name,
 * specialization, a couple of words of bio, and social links.
 * The photo is a user-fillable <image-slot> (load image-slot.js in the host).
 */

const ACCENTS = {
  coral: {
    fg: 'var(--coral-600)',
    badge: 'coral'
  },
  amber: {
    fg: 'var(--amber-700)',
    badge: 'amber'
  },
  teal: {
    fg: 'var(--teal-700)',
    badge: 'teal'
  },
  raspberry: {
    fg: 'var(--raspberry-600)',
    badge: 'raspberry'
  }
};
function TeacherCard({
  name,
  specialization,
  level,
  bio,
  photoId,
  photoSrc,
  socials = [],
  accent = 'coral',
  style,
  ...rest
}) {
  const a = ACCENTS[accent] || ACCENTS.coral;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1 / 1',
      background: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: photoId,
    src: photoSrc,
    shape: "rect",
    fit: "cover",
    placeholder: "\u0424\u043E\u0442\u043E \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }), level && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: a.badge
  }, level))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, name), specialization && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      color: a.fg,
      marginTop: 4
    }
  }, specialization), bio && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)',
      margin: '12px 0 0'
    }
  }, bio), socials.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 'auto',
      paddingTop: 18
    }
  }, socials.map(s => /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    key: s.name,
    name: s.name,
    label: s.label || s.name,
    href: s.href || '#',
    size: 34
  })))));
}
Object.assign(__ds_scope, { TeacherCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TeacherCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Blog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* English for Dummies — Blog section (Блог) */
const {
  BlogCard
} = window.EnglishForDummiesDesignSystem_8a33a8;
const POSTS = [{
  title: 'Как перестать бояться говорить',
  excerpt: 'Три мягких приёма, чтобы заговорить уже на первом занятии — без стресса.',
  category: 'Мотивация',
  date: '12 июня',
  readTime: '5 мин',
  coverId: 'blog-fear',
  accent: 'coral'
}, {
  title: 'Ошибки — это нормально',
  excerpt: 'Почему ошибки ускоряют обучение и как перестать корить себя за них.',
  category: 'Психология',
  date: '4 июня',
  readTime: '7 мин',
  coverId: 'blog-mistakes',
  accent: 'amber'
}, {
  title: '15 минут английского в день',
  excerpt: 'Простой ритуал, который реально вписывается в жизнь взрослого человека.',
  category: 'Практика',
  date: '28 мая',
  readTime: '4 мин',
  coverId: 'blog-habit',
  accent: 'teal'
}];
function Blog({
  layout = 'desktop'
}) {
  const mobile = layout === 'mobile';
  return /*#__PURE__*/React.createElement("section", {
    id: "blog",
    style: {
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: mobile ? '44px var(--container-pad-mobile) 52px' : '88px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: mobile ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      flexDirection: mobile ? 'column' : 'row',
      gap: 16,
      marginBottom: mobile ? 28 : 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ef-eyebrow"
  }, "\u0411\u043B\u043E\u0433"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--ink-900)',
      margin: '12px 0 0'
    }
  }, "\u0421\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u043E\u0431 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0'
    }
  }, "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0442\u0451\u043F\u043B\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0443\u0447\u0438\u0442\u044C \u044F\u0437\u044B\u043A \u0431\u0435\u0437 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0441\u0442\u044B\u0434\u0430.")), !mobile && /*#__PURE__*/React.createElement("a", {
    href: "#all-posts",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      flex: 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--coral-600)'
    }
  }, "\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
      gap: mobile ? 18 : 28
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(BlogCard, _extends({
    key: p.title
  }, p, {
    href: "#post"
  })))), mobile && /*#__PURE__*/React.createElement("a", {
    href: "#all-posts",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 24,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--coral-600)'
    }
  }, "\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
window.Blog = Blog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Courses.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* English for Dummies — Courses section */
const {
  CourseCard
} = window.EnglishForDummiesDesignSystem_8a33a8;
const COURSES = [{
  title: 'Английский с нуля',
  description: 'Спокойный старт для тех, кто никогда не учил язык или всё забыл.',
  level: 'A0 · с нуля',
  format: 'Онлайн и офлайн',
  duration: '4 месяца · 2 раза в неделю',
  price: '3 990',
  accent: 'coral',
  ctaLabel: 'Записаться'
}, {
  title: 'Разговорный клуб',
  description: 'Тёплая практика речи в малой группе — без оценок и страха ошибиться.',
  level: 'A2–B1',
  format: 'Онлайн',
  duration: '3 месяца · 1 раз в неделю',
  price: '2 490',
  accent: 'amber',
  ctaLabel: 'Подробнее'
}, {
  title: 'Английский для работы',
  description: 'Письма, созвоны и собеседования на английском — уверенно и по делу.',
  level: 'B1–B2',
  format: 'Онлайн и офлайн',
  duration: '5 месяцев · 2 раза в неделю',
  price: '5 490',
  accent: 'teal',
  ctaLabel: 'Подробнее'
}];
function Courses({
  layout = 'desktop'
}) {
  const mobile = layout === 'mobile';
  return /*#__PURE__*/React.createElement("section", {
    id: "courses",
    style: {
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: mobile ? '44px var(--container-pad-mobile) 52px' : '88px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: mobile ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      flexDirection: mobile ? 'column' : 'row',
      gap: 16,
      marginBottom: mobile ? 28 : 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ef-eyebrow"
  }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--ink-900)',
      margin: '12px 0 0'
    }
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0442\u0435\u043C\u043F"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0'
    }
  }, "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B, \u0436\u0438\u0432\u043E\u0439 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u0448\u0430\u0433\u0435. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u043E\u0432 \u043D\u0430 \u0441\u0442\u0430\u0440\u0442\u0435 \u2014 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u0435\u0441\u0442\u044C.")), !mobile && /*#__PURE__*/React.createElement("a", {
    href: "#all-courses",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      flex: 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--coral-600)'
    }
  }, "\u0412\u0441\u0435 \u043A\u0443\u0440\u0441\u044B", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
      gap: mobile ? 18 : 28
    }
  }, COURSES.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.title
  }, c, {
    href: "#course"
  })))), mobile && /*#__PURE__*/React.createElement("a", {
    href: "#all-courses",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 24,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--coral-600)'
    }
  }, "\u0412\u0441\u0435 \u043A\u0443\u0440\u0441\u044B ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
window.Courses = Courses;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Courses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Header.jsx
try { (() => {
/* English for Dummies — Landing Header (desktop) */
const {
  Logo,
  NavLink,
  Button,
  SocialIcon
} = window.EnglishForDummiesDesignSystem_8a33a8;
const NAV = [{
  label: 'Главная',
  href: '#home',
  active: true
}, {
  label: 'Курсы',
  href: '#courses'
}, {
  label: 'Команда',
  href: '#team'
}, {
  label: 'Блог',
  href: '#blog'
}, {
  label: 'FAQ',
  href: '#faq'
}];
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'rgba(254, 253, 245, 0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      flex: 'none',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      margin: '0 auto',
      display: 'flex',
      gap: 30
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n.href,
    href: n.href,
    active: n.active
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "mail",
    as: "a",
    href: "#course"
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043E \u043A\u0443\u0440\u0441\u0435"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 28,
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: "instagram",
    label: "Instagram",
    size: 38
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    name: "telegram",
    label: "Telegram",
    size: 38
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    name: "youtube",
    label: "YouTube",
    size: 38
  })))));
}
window.Header = Header;
window.EFD_NAV = NAV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* English for Dummies — Hero / "О нас" (About) */
const {
  Button,
  Badge
} = window.EnglishForDummiesDesignSystem_8a33a8;
function FounderPhoto({
  compact = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: compact ? '-10px' : '-22px -18px -18px 14px',
      background: 'radial-gradient(120% 120% at 30% 20%, var(--amber-100), var(--coral-100) 70%)',
      borderRadius: 'var(--radius-2xl)',
      transform: 'rotate(-2.5deg)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("image-slot", {
    id: "efd-founder",
    shape: "rounded",
    radius: "28",
    placeholder: "\u0424\u043E\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'block',
      width: '100%',
      aspectRatio: compact ? '4 / 3' : '4 / 4.4',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 2,
      right: compact ? 10 : -14,
      bottom: compact ? 14 : 26,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      transform: 'rotate(2deg)',
      maxWidth: 220
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--amber-600)',
      lineHeight: 1
    }
  }, "20 \u043B\u0435\u0442 \u0443\u0447\u0443 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--ink-900)'
    }
  }, "\u0410\u043D\u043D\u0430 \u041C\u043E\u0440\u043E\u0437\u043E\u0432\u0430"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0448\u043A\u043E\u043B\u044B")));
}
function Hero({
  layout = 'desktop'
}) {
  const mobile = layout === 'mobile';
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: mobile ? '36px var(--container-pad-mobile) 48px' : '72px var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
      gap: mobile ? 40 : 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ef-eyebrow"
  }, "\u041E \u0448\u043A\u043E\u043B\u0435"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: mobile ? 'var(--type-h1)' : 'var(--type-display)',
      color: 'var(--ink-900)',
      margin: '14px 0 0'
    }
  }, "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0434\u043B\u044F \u0442\u0435\u0445,\xA0\u043A\u0442\u043E \u0431\u043E\u0438\u0442\u0441\u044F\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      whiteSpace: 'nowrap'
    }
  }, "\u043E\u0448\u0438\u0431\u0430\u0442\u044C\u0441\u044F", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 14",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      bottom: -6,
      width: '100%',
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8c40-6 130-7 214-3",
    fill: "none",
    stroke: "var(--amber-400)",
    strokeWidth: "5",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)',
      margin: '24px 0 0',
      maxWidth: 520
    }
  }, "\xABEnglish for Dummies\xBB \u2014 \u0442\u0451\u043F\u043B\u0430\u044F \u0448\u043A\u043E\u043B\u0430 \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445. \u041C\u044B \u0443\u0447\u0438\u043C \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0438 \u0432 \u0441\u0432\u043E\u0451\u043C \u0442\u0435\u043C\u043F\u0435: \u0431\u0435\u0437 \u043E\u0446\u0435\u043D\u043E\u043A, \u0431\u0435\u0437 \u0441\u0442\u044B\u0434\u0430 \u0437\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u0431\u0435\u0437 \u0441\u043A\u0443\u0447\u043D\u044B\u0445 \u0443\u0447\u0435\u0431\u043D\u0438\u043A\u043E\u0432. \u041D\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0441 \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u2014 \u0434\u0430\u0436\u0435 \u0441 \u043D\u0443\u043B\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    dot: true
  }, "\u041C\u0430\u043B\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043E 6 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"), /*#__PURE__*/React.createElement(Badge, {
    tone: "amber"
  }, "\u041E\u043D\u043B\u0430\u0439\u043D \u0438 \u043E\u0444\u043B\u0430\u0439\u043D"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "\u0421\u0442\u0430\u0440\u0442 \u0441 \u043D\u0443\u043B\u044F")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "mail",
    as: "a",
    href: "#course"
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043E \u043A\u0443\u0440\u0441\u0435"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    as: "a",
    href: "#team"
  }, "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439"))), /*#__PURE__*/React.createElement("div", {
    style: {
      order: 2
    }
  }, /*#__PURE__*/React.createElement(FounderPhoto, {
    compact: mobile
  }))));
}
window.Hero = Hero;
window.FounderPhoto = FounderPhoto;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/MobileHeader.jsx
try { (() => {
/* English for Dummies — Landing Header (mobile, with burger) */
const {
  Logo,
  NavLink,
  Button,
  SocialIcon,
  Icon
} = window.EnglishForDummiesDesignSystem_8a33a8;
function MobileHeader({
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const NAV = window.EFD_NAV;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px var(--container-pad-mobile)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(254, 253, 245, 0.9)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": open ? 'Закрыть меню' : 'Открыть меню',
    "aria-expanded": open,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-strong)',
      background: open ? 'var(--coral-500)' : 'var(--white)',
      color: open ? 'var(--white)' : 'var(--ink-900)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'close' : 'menu',
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: open ? 460 : 0,
      opacity: open ? 1 : 0,
      transition: 'max-height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-soft)',
      borderBottom: open ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px var(--container-pad-mobile) 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.href,
    href: n.href,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 4px',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: n.active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
      color: n.active ? 'var(--coral-600)' : 'var(--ink-900)',
      textDecoration: 'none'
    }
  }, n.label, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 18,
    color: "var(--ink-300)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "mail",
    full: true,
    as: "a",
    href: "#course"
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043E \u043A\u0443\u0440\u0441\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: "instagram",
    label: "Instagram"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    name: "telegram",
    label: "Telegram",
    tone: "coral"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    name: "youtube",
    label: "YouTube"
  })))));
}
window.MobileHeader = MobileHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/MobileHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Team.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* English for Dummies — Team section (Команда) */
const {
  TeacherCard
} = window.EnglishForDummiesDesignSystem_8a33a8;
const TEAM = [{
  name: 'Анна Морозова',
  specialization: 'Основатель · разговорный',
  level: 'A1–B2',
  bio: 'Учу говорить спокойно и без стыда за ошибки. 20 лет в преподавании.',
  photoId: 'team-anna',
  accent: 'coral',
  socials: [{
    name: 'telegram'
  }, {
    name: 'instagram'
  }]
}, {
  name: 'Дмитрий Соколов',
  specialization: 'Грамматика без зубрёжки',
  level: 'A0–B1',
  bio: 'Объясняю сложное простыми словами — так, чтобы наконец стало понятно.',
  photoId: 'team-dmitry',
  accent: 'amber',
  socials: [{
    name: 'telegram'
  }, {
    name: 'youtube'
  }]
}, {
  name: 'Мария Лебедева',
  specialization: 'Английский для работы',
  level: 'B1–C1',
  bio: 'Готовлю к собеседованиям, письмам и созвонам на английском.',
  photoId: 'team-maria',
  accent: 'teal',
  socials: [{
    name: 'telegram'
  }, {
    name: 'instagram'
  }]
}, {
  name: 'Иван Орлов',
  specialization: 'Произношение и аудирование',
  level: 'A2–B2',
  bio: 'Помогаю понимать живую речь на слух и говорить без акцента-барьера.',
  photoId: 'team-ivan',
  accent: 'raspberry',
  socials: [{
    name: 'youtube'
  }, {
    name: 'telegram'
  }]
}];
function Team({
  layout = 'desktop'
}) {
  const mobile = layout === 'mobile';
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: mobile ? '44px var(--container-pad-mobile) 52px' : '88px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      marginBottom: mobile ? 28 : 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ef-eyebrow"
  }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--ink-900)',
      margin: '12px 0 0'
    }
  }, "\u0422\u0451\u043F\u043B\u044B\u0435 \u043B\u044E\u0434\u0438, \u0430 \u043D\u0435 \u0441\u0442\u0440\u043E\u0433\u0438\u0435 \u0443\u0447\u0438\u0442\u0435\u043B\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0'
    }
  }, "\u0421 \u0432\u0430\u043C\u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0430\u043C\u0438 \u043A\u043E\u0433\u0434\u0430-\u0442\u043E \u0431\u043E\u044F\u043B\u0438\u0441\u044C \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C. \u041E\u043D\u0438 \u0442\u043E\u0447\u043D\u043E \u0437\u043D\u0430\u044E\u0442, \u043A\u0430\u043A \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)',
      gap: mobile ? 18 : 24
    }
  }, TEAM.map(t => /*#__PURE__*/React.createElement(TeacherCard, _extends({
    key: t.name
  }, t))))));
}
window.Team = Team;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.TeacherCard = __ds_scope.TeacherCard;

})();
