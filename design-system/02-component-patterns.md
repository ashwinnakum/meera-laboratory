# Component Patterns & UI Standards

> Reusable component patterns, button system, card standards, and layout rules.
> Follow these patterns for consistent pixel-perfect UI across projects.

---

## Button System

All buttons are defined in `@layer components` in `globals.css` so Tailwind utilities can override them.

### Three Button Types

| Type | Class | Usage |
|---|---|---|
| Primary | `btn-primary` | Main CTAs, form submits, primary actions |
| Outline | `btn-outline` | Secondary actions on dark/gradient backgrounds |
| White | `btn-white` | CTAs on gradient sections |

### Base Button Properties (All Types)

```css
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
padding: 0.875rem 1.75rem;     /* 14px 28px */
font-size: 0.875rem;            /* 14px */
font-weight: 600;
border-radius: 0.75rem;         /* 12px = rounded-xl */
line-height: 1.5;
transition: all 0.3s ease;
cursor: pointer;
```

### Size Variants

| Variant | Extra Classes | When |
|---|---|---|
| Default | *(none)* | Standard CTAs |
| Small | `text-sm py-2.5 px-5` | Compact contexts (navbar) |
| Large | `text-base py-4 px-10` | Hero sections |

### Button Rules

- **Never** use `!important` overrides: no `!py-3`, `!px-7`, `!text-sm`
- **Never** override `!bg-[...]` or `!bg-none`
- Mobile buttons: `w-full sm:w-auto` for full-width on mobile
- Button icon size: `w-3.5 h-3.5` (small), `w-4 h-4` (default)
- Hover: `translateY(-1px)` lift + shadow increase

### Button Examples

```jsx
{/* Standard CTA */}
<a href="/contact" className="btn-primary w-full sm:w-auto">
  Book Now
</a>

{/* With icon */}
<a href="tel:123" className="btn-primary w-full sm:w-auto py-3.5 px-6">
  <FaPhoneAlt className="w-4 h-4" />
  Call Now
</a>

{/* Navbar small button */}
<a href="/contact" className="btn-primary text-sm py-2.5 px-5">
  Book Test
</a>

{/* On gradient background */}
<a href="tel:123" className="btn-outline w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-8">
  <FaPhoneAlt className="w-4 h-4" />
  Call Us
</a>
```

---

## Card Standards

### Standard Card

```jsx
<div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg
  transition-all duration-300 border border-gray-100 overflow-hidden">
```

### Featured Card (with accent ring)

```jsx
<div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 ring-2 ring-accent
  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
```

### Card Rules

| Property | Standard | Featured |
|---|---|---|
| Padding | `p-5 sm:p-6` | `p-5 sm:p-6 md:p-8` |
| Border | `border border-gray-100` | `ring-2 ring-accent` |
| Radius | `rounded-2xl` | `rounded-2xl` |
| Shadow (rest) | `shadow-sm` | `shadow-md` |
| Shadow (hover) | `shadow-lg` | `shadow-xl` |
| Hover lift | `whileHover={{ y: -4 }}` | `whileHover={{ y: -4 }}` |

- Only use `p-5`, `p-6`, or `p-8` for card padding
- Never use split padding like `px-8 pt-8 pb-7`
- Always `rounded-2xl` for cards
- Hover lift: always `y: -4` (never `-5`, `-6`)

---

## Icon System

### Icon Sizing

| Context | Icon Size | Container Size |
|---|---|---|
| Inline (text/links) | `w-4 h-4` | — |
| Small inline | `w-3 h-3` or `w-3.5 h-3.5` | — |
| Card icon | `w-5 h-5 sm:w-6 sm:h-6` | `w-11 h-11 sm:w-12 sm:h-12` |
| Feature icon | `w-6 h-6 sm:w-8 sm:h-8` | `w-12 h-12 sm:w-16 sm:h-16` |

### Icon Container Style

```jsx
<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10
  to-accent/10 rounded-2xl flex items-center justify-center">
  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
</div>
```

### Phone Icon Note

Use `FaPhoneAlt` (not `FaPhone`) from `react-icons/fa`. `FaPhone` renders rotated 180 degrees.

---

## Section Layout Pattern

### Standard Section with SectionWrapper

```jsx
<SectionWrapper background="white" withBlobs spacing="default">
  {/* Section header */}
  <div className="text-center mb-8 sm:mb-10 md:mb-14">
    <motion.span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
      Eyebrow Label
    </motion.span>
    <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
      Section Heading
    </motion.h2>
  </div>

  {/* Section content */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
    {/* cards */}
  </div>
</SectionWrapper>
```

### SectionWrapper Props

```jsx
background="white"     // "white" | "light" | "gradient" | "dark"
spacing="default"      // "default" | "compact" | "wide"
withPattern={false}    // dot pattern overlay
withBlobs={false}      // decorative gradient blobs
id="section-id"        // optional anchor
```

### Page Hero Section (without SectionWrapper)

```jsx
<section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
  {/* Dot pattern */}
  <div className="absolute inset-0 opacity-[0.05]"
    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

  {/* Decorative blob */}
  <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

  {/* Content */}
  <div className="relative z-10 section-inner text-center">
    <div className="flex items-center justify-center gap-2.5 text-blue-200 text-sm mb-3 sm:mb-4">
      <Link href="/">Home</Link>
      <span>/</span>
      <span className="text-white font-medium">Page Name</span>
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
      Page Heading
    </h1>
    <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
      Page description text here.
    </p>
  </div>

  {/* Wave divider */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
      <path d="M0 60L720 30L1440 60V60H0Z" fill="#F8FAFC" />
    </svg>
  </div>
</section>
```

### Gradient CTA Section (without SectionWrapper)

```jsx
<section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
  <div className="absolute inset-0 opacity-[0.05]"
    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
  <div className="relative z-10 section-inner text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5">
      CTA Heading
    </h2>
    <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
      CTA description.
    </p>
    <a href="tel:123" className="btn-outline w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-8">
      Call Now
    </a>
  </div>
</section>
```

---

## Form Standards

### Input Styling

```jsx
const inputClasses = (hasError) =>
  `w-full px-3.5 py-3 sm:px-4 rounded-xl border ${
    hasError
      ? 'border-red-300 bg-red-50'
      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
  } focus:border-accent focus:ring-3 focus:ring-accent/10 focus:bg-white
    outline-none transition-all duration-200 text-sm text-slate-900
    placeholder:text-slate-400`;
```

### Form Layout

| Element | Classes |
|---|---|
| Form card | `bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden` |
| Form padding | `px-5 sm:px-6 md:px-8 py-5 sm:py-6` |
| Labels | `text-sm font-medium text-gray-700 mb-1.5` |
| Error text | `text-red-500 text-xs mt-1.5` |
| Submit button | `btn-primary w-full py-3.5` |
| Field grid | `grid grid-cols-1 sm:grid-cols-2 gap-4` |

---

## Footer Pattern

### Layout

```jsx
<footer className="relative bg-gray-900 text-gray-300">
  {/* Gradient top border */}
  <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

  <div className="relative z-10 section-inner pt-10 pb-8 sm:pt-12 sm:pb-10 md:pt-16 md:pb-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      {/* 4 columns */}
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-800">
    <div className="section-inner py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
      {/* copyright + tagline */}
    </div>
  </div>
</footer>
```

### Social Icon Links

```jsx
<a href="mailto:email" className="w-11 h-11 bg-gray-800 hover:bg-primary rounded-xl
  flex items-center justify-center transition-all duration-300 hover:scale-105">
  <FaEnvelope className="w-4 h-4" />
</a>
```

Touch target: minimum `w-11 h-11` (44px) for mobile accessibility.

---

## Data Architecture

Keep all content in `/src/data/` files — components import from data, never hardcode content.

```
src/data/
├── siteData.js    # navigation, contactInfo, branches, stats, whyChooseUs, companyInfo
├── services.js    # diagnostic tests + categories
└── packages.js    # health packages with prices
```

### Example Data Shape

```js
export const contactInfo = {
  phones: ['8866064656'],
  email: 'email@example.com',
  instagram: 'https://instagram.com/...',
  whatsapp: '91XXXXXXXXXX',
};

export const packages = [
  {
    id: 1,
    name: 'Package Name',
    price: 1499,
    originalPrice: 4999,  // shown with strikethrough
    popular: true,         // shows "Most Popular" badge
    tests: ['Test 1', 'Test 2'],
    description: '...',
    reportTime: 'Same Day',
    sampleType: 'Blood & Urine',
    fastingRequired: true,
    homeCollection: true,
  },
];
```
