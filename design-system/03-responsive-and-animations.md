# Responsive Design & Animation Guide

> Mobile-first responsive patterns and Framer Motion animation standards.
> Design for 375px first, then scale up.

---

## Breakpoints (Tailwind Defaults)

| Breakpoint | Width | Device |
|---|---|---|
| Base (default) | 0–639px | Mobile phones (375px target) |
| `sm:` | 640px+ | Large phones, small tablets |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Laptops, desktops |
| `xl:` | 1280px+ | Large desktops |

---

## Mobile-First Responsive Patterns

### Typography Scaling

```jsx
{/* H1 — page heroes */}
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"

{/* H2 — section headings */}
className="text-2xl sm:text-3xl md:text-4xl font-bold"

{/* H3 — card titles */}
className="text-base sm:text-lg font-bold"

{/* Body text */}
className="text-sm sm:text-base"

{/* Body large */}
className="text-sm sm:text-base md:text-lg"

{/* Eyebrow label */}
className="text-xs sm:text-sm"

{/* Small labels */}
className="text-xs"
```

### Spacing Scaling

```jsx
{/* Section header margin */}
className="mb-8 sm:mb-10 md:mb-14"

{/* Heading margin */}
className="mb-3 sm:mb-4"  or  "mb-3 sm:mb-5"

{/* Eyebrow margin */}
className="mb-2 sm:mb-3"

{/* Grid gaps */}
className="gap-4 sm:gap-6 md:gap-8"

{/* Content layout gaps */}
className="gap-6 sm:gap-8 md:gap-16"

{/* Vertical section spacing */}
className="space-y-10 sm:space-y-16 md:space-y-24"
```

### Grid Patterns

```jsx
{/* Services / features (3-col) */}
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"

{/* Values / stats (4-col) */}
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"

{/* Stats counter (2→4) */}
className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12"

{/* Packages (2-col) */}
className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8"

{/* Form fields (2-col) */}
className="grid grid-cols-1 sm:grid-cols-2 gap-4"

{/* Footer (4-col) */}
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
```

### Button Responsive

```jsx
{/* Full-width on mobile, auto on desktop */}
className="btn-primary w-full sm:w-auto"

{/* With responsive padding */}
className="btn-primary w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-8"

{/* Stacked buttons on mobile, row on desktop */}
<div className="flex flex-col sm:flex-row gap-3">
  <a className="btn-primary w-full sm:w-auto">Primary</a>
  <a className="btn-outline w-full sm:w-auto">Secondary</a>
</div>
```

### Card Padding Responsive

```jsx
{/* Standard card */}
className="p-5 sm:p-6"

{/* Featured / large card */}
className="p-5 sm:p-6 md:p-8"

{/* Form card internal */}
className="px-5 sm:px-6 md:px-8 py-5 sm:py-6"
```

### Image Height Responsive

```jsx
{/* Feature images */}
className="h-48 sm:h-64 md:h-80"

{/* Large images (about page) */}
className="h-48 sm:h-64 md:h-80 lg:h-[450px]"

{/* Map iframe */}
className="h-56 sm:h-72 md:h-96"
```

### Icon Responsive

```jsx
{/* Card icons */}
className="w-11 h-11 sm:w-12 sm:h-12"  {/* container */}
className="w-5 h-5 sm:w-6 sm:h-6"      {/* icon */}

{/* Feature icons */}
className="w-12 h-12 sm:w-16 sm:h-16"  {/* container */}
className="w-6 h-6 sm:w-8 sm:h-8"      {/* icon */}
```

### Hero Section Responsive

```jsx
{/* Hero padding */}
className="py-14 sm:py-20 md:py-24"

{/* CTA section padding */}
className="py-12 sm:py-16 md:py-24"

{/* Breadcrumb spacing */}
className="mb-3 sm:mb-4"
```

---

## Mobile-First Rules

| Rule | Implementation |
|---|---|
| Touch targets | Minimum `44px` (use `w-11 h-11` or `min-h-[44px]`) |
| Page container | `section-inner` handles padding via `clamp(1rem, 5vw, 3rem)` |
| Font minimum | Never below `text-xs` (12px) |
| Cards on mobile | Full-width, no horizontal scroll — `grid-cols-1` base |
| Buttons on mobile | `w-full sm:w-auto` for all CTAs |
| No horizontal scroll | `overflow-x: hidden` on html and body |
| Decorative elements | `hidden sm:block` — hide on mobile to save space |

---

## Framer Motion Animation Standards

### Standard Enter Animation

```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1, duration: 0.5 }}
```

### Fixed Values (Never Change)

| Property | Value | Wrong Values |
|---|---|---|
| Y-offset (initial) | `y: 30` | ~~y: 20~~, ~~y: 40~~ |
| Duration | `0.5` seconds | ~~0.6~~, ~~0.7~~ |
| Easing | `"easeOut"` | — |
| Stagger delay | `index * 0.1` | ~~0.2, 0.4, 0.6~~ |
| Viewport trigger | `{ once: true }` | — |
| Hover lift | `whileHover={{ y: -4 }}` | ~~y: -5~~, ~~y: -6~~ |

### SectionWrapper Animation (Built-in)

```jsx
const isInView = useInView(ref, { once: true, margin: '-100px' });

initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
transition={{ duration: 0.5, ease: 'easeOut' }}
```

### Page Hero Animation (Immediate, not scroll-triggered)

```jsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}    /* animate, not whileInView */
transition={{ duration: 0.5 }}
```

### Slide-in Animation (Side-by-side layouts)

```jsx
{/* Left content */}
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}

{/* Right content */}
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.1 }}
```

### Card Hover Animation

```jsx
<motion.div
  whileHover={{ y: -4 }}
  className="... hover:shadow-lg transition-all duration-300"
>
```

### AnimatePresence (For Filtered Lists)

```jsx
<motion.div layout className="grid ...">
  <AnimatePresence mode="popLayout">
    {filteredItems.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -4 }}
      >
        {/* card content */}
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>
```

---

## Decorative Elements

### Dot Pattern Overlay

```jsx
<div className="absolute inset-0 opacity-[0.05]"
  style={{
    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
    backgroundSize: '24px 24px',
  }}
/>
```

On light backgrounds use `opacity-[0.03]` and `#1E3A8A` color instead of `#fff`.

### Gradient Blobs

```jsx
<div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
```

### Wave Divider (Between Sections)

```jsx
<div className="absolute bottom-0 left-0 right-0">
  <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
    <path d="M0 60L720 30L1440 60V60H0Z" fill="#F8FAFC" />
  </svg>
</div>
```

### Gradient Line Accent

```jsx
<div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
```

### Gradient Top Border (on cards/header)

```jsx
{/* Visible on hover */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

{/* Always visible */}
<div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
```

---

## Quick Reference — Copy-Paste Responsive Classes

```
/* Headings */
H1:      text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
H2:      text-2xl sm:text-3xl md:text-4xl font-bold
H3:      text-base sm:text-lg font-bold

/* Text */
Body:    text-sm sm:text-base
Large:   text-sm sm:text-base md:text-lg
Small:   text-xs sm:text-sm
Eyebrow: text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest

/* Spacing */
Section: mb-8 sm:mb-10 md:mb-14
Grid:    gap-4 sm:gap-6 md:gap-8
Content: gap-6 sm:gap-8 md:gap-16

/* Cards */
Standard: p-5 sm:p-6
Featured: p-5 sm:p-6 md:p-8
Shadow:   shadow-sm hover:shadow-lg

/* Buttons */
Default:  btn-primary w-full sm:w-auto
Large:    btn-primary w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-8

/* Hero */
Padding:  py-14 sm:py-20 md:py-24
CTA:      py-12 sm:py-16 md:py-24

/* Images */
Feature:  h-48 sm:h-64 md:h-80
Map:      h-56 sm:h-72 md:h-96
```
