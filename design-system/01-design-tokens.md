# Design Tokens & Color System

> Reusable design tokens for any Next.js + Tailwind CSS 4 project.
> Copy this system to get pixel-perfect, consistent UI across your entire app.

---

## Stack

- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS 4 (with `@theme inline` and `@layer`)
- **Font**: Inter (Google Fonts) — weights: 300–900
- **Animations**: Framer Motion 12
- **Icons**: react-icons (Font Awesome set)

---

## Color Palette

### Theme Colors (CSS Custom Properties)

```css
@theme inline {
  --color-primary:    #1E3A8A;   /* Deep blue — headings, buttons, primary actions */
  --color-secondary:  #2563EB;   /* Medium blue — gradients, hover states */
  --color-accent:     #3B82F6;   /* Bright blue — links, badges, highlights */
  --color-background: #F8FAFC;   /* Off-white — page background */
  --color-light-gray: #F1F5F9;   /* Light gray — section backgrounds, cards */
  --color-foreground: #1E293B;   /* Dark slate — body text */
  --font-sans: 'Inter', sans-serif;
}
```

### Text Colors

| Context | Tailwind Class | Hex |
|---|---|---|
| Headings | `text-gray-900` | `#101828` |
| Body text (primary) | `text-gray-600` | `#4A5565` |
| Body text (secondary) | `text-gray-500` | `#6A7282` |
| Muted / labels | `text-gray-400` | `#99A1AF` |
| Accent text | `text-accent` | `#3B82F6` |
| Error text | `text-red-500` | — |
| Success text | `text-green-500` | — |

### Text Colors on Dark / Gradient Backgrounds

| Context | Tailwind Class |
|---|---|
| Headings | `text-white` |
| Body text | `text-blue-100` |
| Muted text | `text-blue-200` |
| Links | `text-blue-200 hover:text-white` |

### Gradient Backgrounds

```
/* Primary gradient — used for hero sections, CTA, buttons */
bg-gradient-to-br from-primary via-secondary to-accent

/* Always use `to-br` for backgrounds, never `to-r` */
/* Exception: decorative lines/borders can use `to-r` */
```

---

## Tailwind CSS 4 — Critical Layer Rule

**This is the most important rule.** In Tailwind CSS 4, unlayered CSS beats ALL `@layer` styles regardless of specificity.

### Correct Structure (globals.css)

```css
@import "tailwindcss";

@theme inline {
  /* tokens here */
}

@layer base {
  /* resets, html/body styles, scrollbar, tap highlight */
}

@layer components {
  /* section helpers, button system, custom components */
}

/* NEVER write CSS outside @layer blocks after @import "tailwindcss" */
/* Unlayered CSS will override ALL Tailwind utilities */
```

### Why This Matters

```
Priority (low → high):
@layer base  →  @layer components  →  @layer utilities  →  UNLAYERED CSS

If you write  * { padding: 0; }  outside any @layer, it will override
ALL padding from Tailwind utilities like py-3.5, px-6, etc.
```

---

## Typography Scale

| Role | Classes | Usage |
|---|---|---|
| H1 (hero) | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold` | Page hero sections only |
| H2 (section) | `text-2xl sm:text-3xl md:text-4xl font-bold` | Section headings |
| H3 (card/feature) | `text-base sm:text-lg font-bold` or `text-lg sm:text-xl font-bold` | Card titles, feature titles |
| Body | `text-sm sm:text-base` | Paragraph text |
| Body large | `text-sm sm:text-base md:text-lg` | Feature descriptions |
| Small / labels | `text-xs sm:text-sm` | Labels, captions, meta info |
| Eyebrow | `text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest` | Above section headings |

### Rules

- Never use arbitrary font sizes: `text-[15px]`, `text-[10px]`, `text-[11px]`
- Map to nearest Tailwind size: `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px)
- Minimum readable size: `text-xs` (12px) — never go below this
- Always add responsive variants: `text-sm sm:text-base`

---

## Spacing Scale (4px base)

Allowed values: `1` (4px), `2` (8px), `3` (12px), `4` (16px), `5` (20px), `6` (24px), `8` (32px), `10` (40px), `12` (48px), `16` (64px), `20` (80px), `24` (96px)

### Section Spacing (Vertical)

```css
.section-spacing       { padding-block: clamp(2.5rem, 8vw, 6rem); }
.section-spacing-tight { padding-block: clamp(2rem, 6vw, 5rem); }
.section-spacing-wide  { padding-block: clamp(3rem, 10vw, 7rem); }
```

### Container (Horizontal)

```css
.section-inner {
  width: min(80rem, 100%);
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 3rem);
}
```

**Rule**: Always use `section-inner` for content containers. Never use `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12` directly.

### Common Spacing Patterns

| Element | Spacing |
|---|---|
| Section header margin-bottom | `mb-8 sm:mb-10 md:mb-14` |
| Eyebrow margin-bottom | `mb-2 sm:mb-3` |
| Heading margin-bottom | `mb-3 sm:mb-4` or `mb-3 sm:mb-5` |
| Card internal gap | `space-y-3 sm:space-y-4` |
| Grid gaps | `gap-4 sm:gap-6 md:gap-8` |
| Content sections gap | `gap-6 sm:gap-8 md:gap-16` (side by side layouts) |

---

## Shadow Elevation

| Level | Class | Usage |
|---|---|---|
| 0 | `shadow-none` | Flat elements |
| 1 | `shadow-sm` | Cards at rest |
| 2 | `shadow-md` | Elevated cards, dropdowns |
| 3 | `shadow-lg` | Modals, hover states |
| 4 | `shadow-xl` | Featured / hero elements |

---

## Border Radius

| Element | Class |
|---|---|
| Small (badges, chips) | `rounded-lg` |
| Buttons, inputs | `rounded-xl` |
| Cards, sections, modals | `rounded-2xl` |
| Avatars, pills, dots | `rounded-full` |
