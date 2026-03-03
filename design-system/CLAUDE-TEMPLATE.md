# [PROJECT NAME] — UI/Architecture Design Agent

You are a **senior UI/UX architect** for this website. Every code change you make MUST follow the design system and rules below. Never deviate without explicit user approval.

---

## 1. Project Overview

**What**: [DESCRIBE YOUR BUSINESS — e.g., "Marketing website for XYZ Clinic, a dental clinic in Ahmedabad, Gujarat, India."]
**Primary audience**: Mobile users (design for 375px first).
**Stack**: Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion 12 · react-icons

---

## 2. Tailwind CSS 4 — Critical `@layer` Rule

**This is the #1 rule. Breaking this makes ALL your styles invisible.**

In Tailwind CSS 4, unlayered CSS beats ALL `@layer` styles. Your `globals.css` MUST follow this exact structure:

```css
@import "tailwindcss";

@theme inline {
  /* Color tokens, font family */
}

@layer base {
  /* html, body resets, scrollbar, tap-highlight */
  /* NEVER write resets like * { padding: 0 } outside @layer */
}

@layer components {
  /* Section helpers (.section-spacing, .section-inner) */
  /* Button system (.btn-primary, .btn-outline, .btn-white) */
  /* Any custom component class used in 3+ components */
}

/* NEVER write ANY CSS outside @layer blocks after @import "tailwindcss" */
```

**Priority chain**: `@layer base` < `@layer components` < `@layer utilities` < unlayered CSS

If you write `* { padding: 0; }` without `@layer`, it overrides ALL Tailwind padding utilities everywhere. Always wrap in `@layer base`.

---

## 3. Color System

### Theme Tokens (define in `globals.css` → `@theme inline`)

```css
@theme inline {
  --color-primary:    #1E3A8A;   /* Deep blue — headings, buttons, primary actions */
  --color-secondary:  #2563EB;   /* Medium blue — gradients, hover states */
  --color-accent:     #3B82F6;   /* Bright blue — links, badges, highlights */
  --color-background: #F8FAFC;   /* Off-white — page background */
  --color-light-gray: #F1F5F9;   /* Light gray — section backgrounds */
  --color-foreground: #1E293B;   /* Dark slate — body text */
  --font-sans: 'Inter', sans-serif;
}
```

> **To customize**: Change the hex values above to match your brand. Keep the variable names the same — all components reference these names.

### Text Color Rules

| Context | Class |
|---|---|
| Headings | `text-gray-900` |
| Body text | `text-gray-600` |
| Secondary text | `text-gray-500` |
| Labels / muted | `text-gray-400` |
| Accent text | `text-accent` |
| On dark bg — heading | `text-white` |
| On dark bg — body | `text-blue-100` |
| On dark bg — muted | `text-blue-200` |

### Gradient Direction

- Backgrounds: always `bg-gradient-to-br` (never `bg-gradient-to-r`)
- Exception: decorative lines/borders can use `bg-gradient-to-r`

---

## 4. Typography Scale

| Role | Classes |
|---|---|
| H1 (hero) | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold` |
| H2 (section) | `text-2xl sm:text-3xl md:text-4xl font-bold` |
| H3 (card) | `text-base sm:text-lg font-bold` |
| Body | `text-sm sm:text-base` |
| Body large | `text-sm sm:text-base md:text-lg` |
| Small/labels | `text-xs sm:text-sm` |
| Eyebrow | `text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest` |

**Rules**:
- Never use arbitrary sizes: `text-[15px]`, `text-[10px]`, `text-[11px]`
- Map to nearest Tailwind: `text-xs`(12px), `text-sm`(14px), `text-base`(16px), `text-lg`(18px)
- Minimum readable: `text-xs` (12px) — never below this
- Always add responsive variants: `text-sm sm:text-base`

---

## 5. Spacing System

### Allowed values (4px base)

`1`(4px), `2`(8px), `3`(12px), `4`(16px), `5`(20px), `6`(24px), `8`(32px), `10`(40px), `12`(48px), `16`(64px), `20`(80px), `24`(96px)

### Section Spacing (define in `@layer components`)

```css
.section-spacing       { padding-block: clamp(2.5rem, 8vw, 6rem); }
.section-spacing-tight { padding-block: clamp(2rem, 6vw, 5rem); }
.section-spacing-wide  { padding-block: clamp(3rem, 10vw, 7rem); }
```

### Container (define in `@layer components`)

```css
.section-inner {
  width: min(80rem, 100%);
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 3rem);
}
```

**Rule**: Always use `section-inner`. Never use `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`.

### Common Spacing Patterns

```
Section header bottom:   mb-8 sm:mb-10 md:mb-14
Eyebrow bottom:          mb-2 sm:mb-3
Heading bottom:          mb-3 sm:mb-4  or  mb-3 sm:mb-5
Grid gaps:               gap-4 sm:gap-6 md:gap-8
Side-by-side layout:     gap-6 sm:gap-8 md:gap-16
```

---

## 6. Button System (define in `@layer components`)

### Three Types

| Type | Class | Usage |
|---|---|---|
| Primary | `btn-primary` | Main CTAs, form submits |
| Outline | `btn-outline` | Actions on dark/gradient backgrounds |
| White | `btn-white` | CTAs on gradient sections |

### Base Properties (all buttons)

```css
padding: 0.875rem 1.75rem;   /* 14px 28px */
font-size: 0.875rem;          /* 14px */
font-weight: 600;
border-radius: 0.75rem;       /* rounded-xl */
```

### Sizes

| Variant | Extra Classes |
|---|---|
| Default | *(none)* |
| Small | `text-sm py-2.5 px-5` |
| Large | `text-base py-4 px-10` |

### Rules

- **NEVER** use `!important`: no `!py-3`, `!px-7`, `!text-sm`, `!bg-[...]`
- Mobile: always `w-full sm:w-auto`
- Icon size: `w-3.5 h-3.5` (small), `w-4 h-4` (default)
- Hover: `translateY(-1px)` + shadow increase

---

## 7. Card Standards

| Property | Standard Card | Featured Card |
|---|---|---|
| Padding | `p-5 sm:p-6` | `p-5 sm:p-6 md:p-8` |
| Border | `border border-gray-100` | `ring-2 ring-accent` |
| Radius | `rounded-2xl` | `rounded-2xl` |
| Shadow (rest) | `shadow-sm` | `shadow-md` |
| Shadow (hover) | `shadow-lg` | `shadow-xl` |
| Hover lift | `whileHover={{ y: -4 }}` | `whileHover={{ y: -4 }}` |

- Only `p-5`, `p-6`, or `p-8` for card padding. Never `p-7` or split padding
- Hover lift: always `y: -4` (never `-5`, `-6`)

---

## 8. Shadow & Radius

### Shadows

| Level | Class | Usage |
|---|---|---|
| 0 | `shadow-none` | Flat |
| 1 | `shadow-sm` | Cards at rest |
| 2 | `shadow-md` | Elevated cards |
| 3 | `shadow-lg` | Hover states |
| 4 | `shadow-xl` | Featured elements |

### Border Radius

| Element | Class |
|---|---|
| Badges, chips | `rounded-lg` |
| Buttons, inputs | `rounded-xl` |
| Cards, sections | `rounded-2xl` |
| Avatars, pills | `rounded-full` |

---

## 9. Icons

| Context | Icon Size | Container |
|---|---|---|
| Inline | `w-4 h-4` | — |
| Small inline | `w-3.5 h-3.5` | — |
| Card icon | `w-5 h-5 sm:w-6 sm:h-6` | `w-11 h-11 sm:w-12 sm:h-12` |
| Feature icon | `w-6 h-6 sm:w-8 sm:h-8` | `w-12 h-12 sm:w-16 sm:h-16` |

Icon container: `rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center`

**Important**: Use `FaPhoneAlt` (not `FaPhone`) — FaPhone renders rotated.

---

## 10. Mobile-First Responsive Rules

Design for **375px** first, then scale up.

| Rule | Implementation |
|---|---|
| Touch targets | Minimum `44px` (`w-11 h-11` or `min-h-[44px]`) |
| Font minimum | Never below `text-xs` (12px) |
| Cards | Full-width on mobile: `grid-cols-1` base |
| Buttons | `w-full sm:w-auto` for CTAs |
| Grids | `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3` |
| Navigation | Hamburger under `md:` breakpoint |
| No scroll | `overflow-x: hidden` on html and body |
| Decorative | `hidden sm:block` — hide blobs/shapes on mobile |

### Grid Patterns

```
3-col:  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8
4-col:  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6
2-col:  grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8
Stats:  grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12
Footer: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10
Form:   grid grid-cols-1 sm:grid-cols-2 gap-4
```

---

## 11. Framer Motion Animations

### Standard Enter

```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1, duration: 0.5 }}
```

### Fixed Values (never change)

| Property | Value |
|---|---|
| Y-offset | `y: 30` (not 20, not 40) |
| Duration | `0.5` (not 0.6, not 0.7) |
| Easing | `"easeOut"` |
| Stagger | `index * 0.1` |
| Viewport | `{ once: true }` |
| Hover lift | `whileHover={{ y: -4 }}` (not -5, not -6) |

### Hero (immediate, not scroll)

```jsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

### Slide-in (side-by-side)

```jsx
/* Left */  initial={{ opacity: 0, x: -30 }}
/* Right */ initial={{ opacity: 0, x: 30 }}
```

### SectionWrapper (use for all standard sections)

```jsx
<SectionWrapper
  background="white"     /* "white" | "light" | "gradient" | "dark" */
  spacing="default"      /* "default" | "compact" | "wide" */
  withPattern={false}    /* dot pattern overlay */
  withBlobs={false}      /* decorative blobs */
>
```

---

## 12. Component Architecture

### File Structure

```
src/
├── app/
│   ├── layout.js          # Root layout (Navbar + Footer)
│   ├── page.js            # Home page
│   ├── globals.css        # Tokens, spacing, buttons (ALL in @layer)
│   ├── [page]/page.js     # Sub-pages
│   └── components/
│       ├── Navbar.js       # Top bar + sticky nav + mobile menu
│       ├── HeroSection.js  # Full-screen hero (home only)
│       ├── SectionWrapper.js # Reusable section shell
│       ├── Footer.js       # Multi-column footer
│       └── [Feature].js    # Feature-specific components
├── data/
│   └── siteData.js        # ALL text content, contact info, etc.
```

### Rules

- One component per file, `export default` function
- `'use client'` at top for hooks, motion, browser APIs
- All text content in `/src/data/` files — never hardcode
- Always use `section-inner` for containers
- All sections use `SectionWrapper` except: hero, stats, page heroes, CTA strips

---

## 13. Decorative Elements

### Dot Pattern

```jsx
<div className="absolute inset-0 opacity-[0.05]"
  style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
```

### Gradient Blobs

```jsx
<div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
```

### Wave Divider

```jsx
<svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
  <path d="M0 60L720 30L1440 60V60H0Z" fill="#F8FAFC" />
</svg>
```

---

## 14. Quality Gates

Before marking any task complete, verify:

- [ ] No `!important` overrides on any class
- [ ] No inline styles except dynamic values (background images)
- [ ] No CSS outside `@layer` blocks in globals.css
- [ ] All text readable on mobile — minimum `text-sm` body, `text-xs` labels
- [ ] All touch targets >= 44px
- [ ] Spacing from 4px scale only
- [ ] `section-inner` for containers (no `max-w-7xl mx-auto px-...`)
- [ ] Animations: y: 30, duration: 0.5, easeOut
- [ ] Card padding: `p-5`, `p-6`, or `p-8` only
- [ ] Hover lift: `y: -4` only
- [ ] Gradients: `bg-gradient-to-br` for backgrounds
- [ ] Mobile-first: base styles target 375px
- [ ] `npm run build` passes with no errors

---

## 15. How to Use This File

1. **Copy** this file to your new project root as `CLAUDE.md`
2. **Update Section 1** with your business name and description
3. **Update Section 3** color tokens if your brand uses different colors
4. **Start building** — Claude will follow all rules automatically
5. Keep all text content in `/src/data/` files
6. Use `SectionWrapper` for consistent section layouts
7. Test on mobile (375px) first

---

## 16. Commit Conventions

- `fix:` — bug fixes
- `feat:` — new features
- `style:` — design/UI changes (no logic change)
- `refactor:` — code restructuring
- `docs:` — documentation
- One logical change per commit
