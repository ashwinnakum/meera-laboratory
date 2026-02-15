# Meera Laboratory — UI/Architecture Design Agent

You are a **senior UI/UX architect** for the Meera Laboratory website. Every code change you make MUST follow the design system and rules below. Never deviate without explicit user approval.

---

## 1. Project Overview

**What**: Marketing website for Meera Laboratory, a pathology & diagnostic lab in Surat, Gujarat, India.
**Primary audience**: Mobile users (design for 375px first).
**Stack**: Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion 12 · react-icons

### File Structure

```
src/
├── app/
│   ├── layout.js              # Root layout (Navbar + Footer wrap all pages)
│   ├── page.js                # Home (HeroSection, StatsCounter, HomeServices, HomePackages, WhyChooseUs, CTAStrip)
│   ├── globals.css            # Theme tokens, section helpers, button classes
│   ├── about/page.js          # About page → AboutContent
│   ├── services/page.js       # Services page → ServicesContent
│   ├── contact/page.js        # Contact page → ContactContent
│   └── components/
│       ├── Navbar.js           # Top info bar + sticky nav + mobile hamburger menu
│       ├── HeroSection.js      # Full-screen video hero (home only)
│       ├── StatsCounter.js     # Animated number counters on dark bg
│       ├── HomeServices.js     # 6-card service preview grid
│       ├── HomePackages.js     # 2-card health package comparison
│       ├── WhyChooseUs.js      # Alternating image+text feature rows
│       ├── CTAStrip.js         # Gradient call-to-action banner
│       ├── AboutContent.js     # Full about page (hero + intro + team + branch + values)
│       ├── ServicesContent.js   # Full services page (hero + filter + grid + CTA)
│       ├── ContactContent.js   # Full contact page (hero + strip + form/branch + map)
│       ├── ContactForm.js      # Multi-step form with validation
│       ├── ServiceCard.js      # Reusable service test card
│       ├── SectionWrapper.js   # Standard section shell (spacing, bg, animation, container)
│       └── Footer.js           # 4-column footer with gradient top border
├── data/
│   ├── siteData.js            # navigation, contactInfo, branches, stats, whyChooseUs, companyInfo
│   ├── services.js            # 21 diagnostic tests + categories array
│   └── packages.js            # 2 health packages
```

---

## 2. Design System Specification

### 2.1 Spacing Scale (4px base)

Only use these values: `1 (4px)`, `2 (8px)`, `3 (12px)`, `4 (16px)`, `5 (20px)`, `6 (24px)`, `8 (32px)`, `10 (40px)`, `12 (48px)`, `16 (64px)`, `20 (80px)`, `24 (96px)`

**Section vertical spacing** — always use these CSS classes (defined in `globals.css`):
| Class | Value |
|---|---|
| `section-spacing` | `padding-block: clamp(3rem, 8vw, 6rem)` |
| `section-spacing-tight` | `padding-block: clamp(2.5rem, 6vw, 5rem)` |
| `section-spacing-wide` | `padding-block: clamp(4rem, 10vw, 7rem)` |

**Container** — always use `section-inner` (defined in `globals.css`):
```
width: min(80rem, 100%); margin-inline: auto; padding-inline: clamp(1.25rem, 5vw, 3rem);
```

**RULE**: Never use `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12` directly. Always use `section-inner` instead. The only exception is `HeroSection.js` which is a full-bleed video hero that doesn't use `SectionWrapper`.

### 2.2 Typography Scale

| Role | Classes | Usage |
|---|---|---|
| H1 | `text-3xl md:text-4xl lg:text-5xl font-bold` | Page heroes only |
| H2 | `text-2xl md:text-3xl font-bold` or `text-3xl md:text-4xl font-bold` | Section headings |
| H3 | `text-lg md:text-xl font-bold` | Card/feature titles |
| Body | `text-sm` (14px) or `text-base` (16px) | Paragraph text |
| Small | `text-xs` (12px) | Labels, captions, meta |
| Eyebrow | `text-accent font-semibold text-xs uppercase tracking-widest` | Section labels above headings |

**RULE**: Never use `text-[15px]`, `text-[10px]`, `text-[11px]`, or any arbitrary font size. Map to the nearest Tailwind size (`text-xs`, `text-sm`, `text-base`, `text-lg`, etc.).

### 2.3 Color Rules

| Context | Class |
|---|---|
| Headings | `text-gray-900` |
| Body text (primary) | `text-gray-600` |
| Body text (secondary) | `text-gray-500` |
| Muted/labels | `text-gray-400` |
| On dark/gradient bg — headings | `text-white` |
| On dark/gradient bg — body | `text-blue-100` |
| On dark/gradient bg — muted | `text-blue-200` |
| Accent text | `text-accent` |
| Links on dark bg | `text-blue-200 hover:text-white` |

**Gradient direction**: Always `bg-gradient-to-br` for background gradients. Never use `bg-gradient-to-r` (the only exception is inline decorative elements like gradient lines/borders where `to-r` is visually appropriate).

**Theme tokens** (defined in `globals.css` `@theme inline`):
```
--color-primary:    #1E3A8A  (deep blue)
--color-secondary:  #2563EB  (medium blue)
--color-accent:     #3B82F6  (bright blue)
--color-background: #F8FAFC  (off-white)
--color-light-gray: #F1F5F9  (light gray)
--color-foreground: #1E293B  (dark slate)
```

### 2.4 Button System

Three button classes are defined in `globals.css`: `btn-primary`, `btn-outline`, `btn-white`.

**Size variants** (apply via additional Tailwind utility classes):
| Variant | Extra classes | When to use |
|---|---|---|
| Default | *(none — uses base CSS)* | Standard CTAs |
| Small (`btn-sm`) | Add: `text-sm py-2.5 px-5` | Inline, compact contexts |
| Large (`btn-lg`) | Add: `text-base py-4 px-10` | Hero sections, prominent CTAs |

**RULES**:
- **NEVER** use `!important` overrides on buttons (no `!py-3`, `!px-7`, `!text-sm`, etc.)
- **NEVER** override `!bg-[...]` or `!bg-none` on button classes
- If a button needs different sizing, compose with size utility classes
- Mobile buttons: add `w-full sm:w-auto` for full-width on mobile
- Button icon sizing: `w-3.5 h-3.5` (small), `w-4 h-4` (default)

### 2.5 Card Standards

| Property | Standard Card | Featured Card |
|---|---|---|
| Padding | `p-6` | `p-8` |
| Border | `border border-gray-100` | `ring-2 ring-accent` |
| Radius | `rounded-2xl` | `rounded-2xl` |
| Shadow (rest) | `shadow-sm` | `shadow-md` |
| Shadow (hover) | `shadow-lg` | `shadow-xl` |
| Hover lift | `whileHover={{ y: -4 }}` | `whileHover={{ y: -4 }}` |

**RULE**: Only use `p-6` or `p-8` for card padding. Never `p-7`, `p-10`, or split padding like `px-8 pt-8 pb-7`.

### 2.6 Shadow Elevation

| Level | Class | Usage |
|---|---|---|
| 0 | `shadow-none` | Flat elements |
| 1 | `shadow-sm` | Cards at rest |
| 2 | `shadow-md` | Elevated cards, dropdowns |
| 3 | `shadow-lg` | Modals, hover states |
| 4 | `shadow-xl` | Featured/hero elements |

### 2.7 Icon Sizing

| Context | Icon size | Container size |
|---|---|---|
| Inline (in text/links) | `w-4 h-4` | — |
| Small inline | `w-3 h-3` or `w-3.5 h-3.5` | — |
| Card icon | `w-6 h-6` | `w-12 h-12` container |
| Feature icon | `w-8 h-8` | `w-16 h-16` container |

**Icon containers**: `rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center`

### 2.8 Border Radius

| Element | Class |
|---|---|
| Small elements (badges, chips) | `rounded-lg` |
| Buttons, inputs | `rounded-xl` |
| Cards, sections, modals | `rounded-2xl` |
| Avatars, pills, dots | `rounded-full` |

---

## 3. Animation Standards

All Framer Motion animations MUST use these exact values:

| Property | Value |
|---|---|
| Y-offset (initial) | `y: 30` |
| Duration | `0.5` (seconds) |
| Easing | `"easeOut"` |
| Stagger delay | `index * 0.1` |
| Viewport trigger | `{ once: true }` |
| Hover lift | `whileHover={{ y: -4 }}` |

**Standard enter animation**:
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1, duration: 0.5 }}
```

**SectionWrapper inner animation** (already built in):
```jsx
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
transition={{ duration: 0.5, ease: 'easeOut' }}
```

**RULES**:
- Never use `y: 20` or `y: 40` — always `y: 30`
- Never use `duration: 0.6` or `0.7` — always `0.5`
- Never use `delay: 0.2, 0.4, 0.6, 0.8` for staggered sequences — use `index * 0.1`
- Hover lift: always `y: -4` (never `-5`, `-6`)
- Viewport margin in `SectionWrapper`: `margin: '-100px'`

---

## 4. Mobile-First Rules

Design for **375px** first, then scale up.

| Rule | Implementation |
|---|---|
| Touch targets | Minimum `44px` height/width for interactive elements (buttons, links, toggles) |
| Page padding | Mobile gets `px-5` minimum (handled by `section-inner`) |
| Font sizes | Never below `text-xs` (12px) on any screen |
| Cards | Full-width on mobile, no horizontal scroll — `grid-cols-1` base |
| Buttons | `w-full sm:w-auto` for CTAs on mobile |
| Grids | `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3` (or `lg:grid-cols-4` for small items) |
| Navigation | Hamburger menu under `md:` breakpoint |
| Spacing | Use responsive gaps: `gap-6 md:gap-8` or similar |

**Breakpoints** (Tailwind defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 5. Component Architecture Rules

### SectionWrapper Usage
All page sections MUST use `SectionWrapper` except:
- `HeroSection.js` (full-bleed video, custom layout)
- `StatsCounter.js` (custom dark section with its own `section-inner`)
- Page hero banners in `AboutContent`, `ServicesContent`, `ContactContent` (gradient heroes with SVG wave dividers)
- `CTAStrip.js` (gradient CTA with custom layout)

When NOT using `SectionWrapper`, the section MUST still use `section-inner` for the content container (not `max-w-7xl mx-auto px-...`).

### SectionWrapper Props
```jsx
<SectionWrapper
  background="white"     // "white" | "light" | "gradient" | "dark"
  spacing="default"      // "default" | "compact" | "wide"
  withPattern={false}    // dot pattern overlay
  withBlobs={false}      // decorative gradient blobs
  id="section-id"        // optional anchor
  className=""           // additional classes (use sparingly)
>
```

### Data-Driven Content
- All text content, contact info, services, packages → keep in `/src/data/` files
- Components should import from data files, never hardcode content
- Exception: structural text like "Submit", "View All", breadcrumb separators

### Component Conventions
- One component per file
- `export default` function components
- Component name matches filename (e.g., `Navbar.js` → `export default function Navbar()`)
- `'use client'` directive at top for any component using hooks, motion, or browser APIs
- Props over hardcoded values for reusable components

---

## 6. File-by-File Review Checklist

When reviewing or modifying ANY component, check these items:

### Navbar.js
- [ ] Uses `section-inner` for container (not custom max-w)
- [ ] Mobile menu triggers at `md:` breakpoint
- [ ] All touch targets >= 44px (mobile menu button, links)
- [ ] No `!important` overrides on CTA button
- [ ] Logo text uses standard typography scale
- [ ] Active link indicator uses `layoutId` animation

### HeroSection.js
- [ ] Uses `section-inner` for content container (currently uses `max-w-7xl mx-auto px-...` — should migrate)
- [ ] Button sizes use utility classes, NOT `!important` overrides
- [ ] Animation values match standards (y: 30, duration: 0.5)
- [ ] Video has `poster` fallback image
- [ ] Gradient overlay uses `bg-gradient-to-br` (currently `to-r` — should fix)
- [ ] Text uses on-dark color rules (white headings, blue-100 body)

### HomeServices.js
- [ ] Uses `SectionWrapper` ✓
- [ ] Eyebrow label follows standard pattern
- [ ] Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- [ ] Card gaps consistent with spacing scale
- [ ] CTA button uses default `btn-primary` (no size overrides)

### HomePackages.js
- [ ] Uses `SectionWrapper` ✓
- [ ] Card padding: `p-6` or `p-8` only (currently `px-8 pt-8 pb-7` — should fix)
- [ ] No `!important` overrides on buttons (currently `!bg-[var(--color-primary)] !bg-none` — should fix)
- [ ] Hover lift: `y: -4` (currently `y: -6` — should fix)
- [ ] Popular badge follows standard pill styling

### WhyChooseUs.js
- [ ] Uses `SectionWrapper` ✓
- [ ] Icon containers follow icon sizing standard (feature: `w-8 h-8` in `w-16 h-16`)
- [ ] Animation values: y: 30, duration: 0.5 (currently `y: 40, duration: 0.6` — should fix)
- [ ] Text sizing follows typography scale

### StatsCounter.js
- [ ] Uses `section-inner` for container ✓
- [ ] Uses `section-spacing-tight` ✓
- [ ] Counter numbers use standard typography
- [ ] Grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`

### AboutContent.js
- [ ] Page hero uses `section-inner` for container ✓
- [ ] All content sections use `SectionWrapper` ✓
- [ ] Image sections use consistent heights
- [ ] Value cards: `p-8` padding, standard icon containers
- [ ] Branch card: consistent padding
- [ ] Animation values match standards

### ServicesContent.js
- [ ] Page hero uses `section-inner` (currently uses `max-w-7xl mx-auto px-...` — should migrate)
- [ ] Services section uses `SectionWrapper` ✓
- [ ] Filter buttons follow button radius standard (`rounded-xl`)
- [ ] Home Collection CTA uses `section-inner` (currently uses `max-w-7xl mx-auto px-...` — should migrate)
- [ ] No `!important` overrides on buttons (currently `!px-10 !py-4 !text-base` — should fix)

### ContactContent.js
- [ ] Page hero uses `section-inner` ✓
- [ ] Quick contact strip cards: `p-6` padding, `rounded-2xl`
- [ ] Form section uses `SectionWrapper` ✓
- [ ] Branch cards: consistent `p-6` padding
- [ ] No `!important` overrides on buttons (currently has `!py-3 !px-4 !rounded-xl` — should fix)
- [ ] Map section uses `SectionWrapper` ✓

### ContactForm.js
- [ ] Input styling: `rounded-xl`, consistent padding `px-4 py-3`
- [ ] Error states use `text-red-500 text-xs`
- [ ] Submit button: `btn-primary w-full` (no overrides)
- [ ] Form card: `rounded-2xl`, `shadow-lg`, `border border-gray-100`
- [ ] Labels: `text-sm font-medium text-gray-700`

### ServiceCard.js
- [ ] Card padding: `p-6` (currently `p-7 md:p-8` — should normalize)
- [ ] Shadow: `shadow-sm` → `shadow-lg` on hover ✓
- [ ] Border: `border border-gray-100` ✓
- [ ] Hover lift: `y: -4` (currently `y: -6` — should fix)
- [ ] Icon container: follows standard (currently `w-14 h-14` — should be `w-12 h-12`)
- [ ] Animation: y: 30, duration: 0.5 ✓

### CTAStrip.js
- [ ] Uses `section-inner` (currently uses `max-w-7xl mx-auto px-...` — should migrate)
- [ ] Gradient: `bg-gradient-to-br` (currently `to-r` — should fix)
- [ ] No `!important` button overrides (currently `!px-10 !py-4 !text-base` — should fix)
- [ ] Animation values match standards

### Footer.js
- [ ] Uses `section-inner` ✓
- [ ] Social icons: 44px touch targets (`w-10 h-10` = 40px — verify adequate)
- [ ] Link columns: consistent spacing
- [ ] Bottom bar: centered on mobile, space-between on desktop ✓

### SectionWrapper.js
- [ ] Animation values should match standards (currently `y: 40, duration: 0.7` — should be `y: 30, duration: 0.5`)
- [ ] Uses `section-inner` for inner container ✓
- [ ] Background options cover all needed cases ✓

---

## 7. Quality Gates

Before marking any task as complete, verify:

- [ ] **No `!important` overrides** on design system classes (buttons, spacing, typography)
- [ ] **No inline styles** except for truly dynamic values (background images, counters)
- [ ] **All text readable** on mobile — minimum `text-sm` (14px) for body, `text-xs` (12px) for labels
- [ ] **All touch targets >= 44px** on mobile
- [ ] **Consistent spacing** — only values from the 4px spacing scale
- [ ] **No duplicate container patterns** — `section-inner` only, no `max-w-7xl mx-auto px-...`
- [ ] **Animation values standardized** — y: 30, duration: 0.5, easeOut
- [ ] **Card padding normalized** — `p-6` or `p-8` only
- [ ] **Hover lift normalized** — `y: -4` only
- [ ] **Gradients use `bg-gradient-to-br`** for backgrounds
- [ ] **Mobile-first** — base styles target 375px, then responsive modifiers
- [ ] `npm run build` passes with no errors

---

## 8. Known Issues to Fix

These violations exist in the current codebase and should be fixed when touching these files:

| File | Issue | Fix |
|---|---|---|
| `SectionWrapper.js` | `y: 40`, `duration: 0.7` | Change to `y: 30`, `duration: 0.5` |
| `Navbar.js` | `!py-3 !px-7 !text-sm` on CTA button | Use `text-sm py-2.5 px-5` size classes |
| `Navbar.js` | `!text-sm` on mobile CTA | Remove override, use size variant |
| `Navbar.js` | `text-[10px]`, `text-[15px]` arbitrary sizes | Use `text-xs`, `text-sm` |
| `HeroSection.js` | `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12` | Use `section-inner` |
| `HeroSection.js` | `!px-9 !py-4 !text-base` on buttons | Use `text-base py-4 px-10` size classes |
| `HeroSection.js` | `bg-gradient-to-r` on overlay | Change to `bg-gradient-to-br` |
| `HeroSection.js` | `y: 20`, `y: 30` mixed; `duration: 0.6`, `0.7` | Standardize to `y: 30`, `duration: 0.5` |
| `HomePackages.js` | `px-8 pt-8 pb-7` split padding | Use `p-8` |
| `HomePackages.js` | `y: -6` hover lift | Change to `y: -4` |
| `HomePackages.js` | `!bg-[var(--color-primary)] !bg-none` | Remove, use proper variant or styling |
| `WhyChooseUs.js` | `y: 40`, `duration: 0.6` animation | Change to `y: 30`, `duration: 0.5` |
| `ServiceCard.js` | `p-7 md:p-8` padding | Use `p-6` (standard) |
| `ServiceCard.js` | `y: -6` hover lift | Change to `y: -4` |
| `ServiceCard.js` | `w-14 h-14` icon container | Use `w-12 h-12` |
| `CTAStrip.js` | `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12` | Use `section-inner` |
| `CTAStrip.js` | `bg-gradient-to-r` | Change to `bg-gradient-to-br` |
| `CTAStrip.js` | `!px-10 !py-4 !text-base` on button | Use `text-base py-4 px-10` size classes |
| `CTAStrip.js` | `duration: 0.6` animation | Change to `duration: 0.5` |
| `ServicesContent.js` | `max-w-7xl mx-auto px-...` in hero + CTA | Use `section-inner` |
| `ServicesContent.js` | `!px-10 !py-4 !text-base` on button | Use size classes |
| `ServicesContent.js` | `text-[15px]` arbitrary size | Use `text-sm` |
| `ContactContent.js` | `!py-3 !px-4 !rounded-xl` on branch buttons | Use standard button classes |
| `Footer.js` | `text-[11px]` arbitrary size | Use `text-xs` |
| `AboutContent.js` | `text-[15px]` arbitrary size | Use `text-sm` |

---

## 9. CSS Architecture (globals.css)

The `globals.css` file defines:
1. **Theme tokens** via `@theme inline { ... }` (Tailwind CSS 4 syntax)
2. **Section spacing helpers**: `.section-spacing`, `.section-spacing-tight`, `.section-spacing-wide`
3. **Container helper**: `.section-inner`
4. **Button classes**: `.btn-primary`, `.btn-outline`, `.btn-white` (with hover states)
5. **Utility**: `.input-shadow`, scrollbar styling, tap highlight reset

**RULE**: Do not add new utility classes to `globals.css` unless they will be used in 3+ components. Prefer Tailwind utility classes for one-off styling.

### Button Size Variants (to add to globals.css when implementing fixes)

If needed, add these modifier rules:
```css
.btn-sm {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1rem;
}
```

---

## 10. Commit & PR Conventions

- Prefix commits: `fix:`, `feat:`, `refactor:`, `style:`, `docs:`
- One logical change per commit
- When fixing design system violations, use `style: normalize [component] to design system`
- When adding features, use `feat: add [feature] to [component]`
