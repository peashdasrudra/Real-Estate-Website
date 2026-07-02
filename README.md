# Golden Heights Properties

> A premium, production-ready real estate website for Bangladesh's most trusted luxury developer.

Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Highlights

- **30+ pages**, all fully designed and built
- **100+ components** in a complete design system
- **Real Bangladesh content** — not Lorem Ipsum
- **Production-grade animations** with Framer Motion
- **WCAG AA accessibility**, semantic HTML, keyboard nav
- **SEO-ready** with structured data, OpenGraph, sitemap, robots
- **Working calculators** (EMI, mortgage, loan eligibility)
- **CMS-ready structure** — swap `/lib/*.ts` for API/database calls
- **Performance optimised** — lazy loading, code splitting, next-gen images

---

## 🚀 Quick start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project structure

```
golden-heights/
├── public/                  # Static assets
│   └── favicon.svg
├── src/
│   ├── app/                 # Next.js 15 App Router
│   │   ├── layout.tsx       # Root layout with header/footer
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Tailwind + custom CSS
│   │   ├── properties/      # Property listing + detail
│   │   ├── projects/        # Project listing + detail
│   │   ├── blog/            # Blog listing + detail
│   │   ├── agents/          # Agents listing + detail
│   │   ├── about/           # About page
│   │   ├── services/        # Services
│   │   ├── investment/      # Investment
│   │   ├── contact/         # Contact
│   │   ├── book-visit/      # Site visit booking
│   │   ├── schedule-meeting/# Meeting scheduler
│   │   ├── property-management/
│   │   ├── gallery/         # Image gallery
│   │   ├── video-gallery/   # Video gallery
│   │   ├── testimonials/
│   │   ├── career/
│   │   ├── faq/
│   │   ├── pricing/
│   │   ├── downloads/
│   │   ├── emi-calculator/
│   │   ├── mortgage-calculator/
│   │   ├── loan-eligibility/
│   │   ├── land/
│   │   ├── commercial/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── search/
│   │   ├── not-found.tsx    # 404
│   │   ├── error.tsx        # Error boundary
│   │   ├── loading.tsx      # Loading skeleton
│   │   ├── sitemap.ts       # Dynamic sitemap
│   │   └── robots.ts        # Robots.txt
│   ├── components/
│   │   ├── ui/              # Design system primitives
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── form.tsx     # Input, Select, Textarea, Label
│   │   │   ├── layout.tsx   # Container, Section, eyebrow
│   │   │   ├── motion.tsx   # FadeUp, StaggerContainer etc.
│   │   │   ├── progress.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── icon.tsx
│   │   │   └── animated-counter.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── floating-cta.tsx
│   │   │   └── exit-intent.tsx
│   │   ├── property-card.tsx
│   │   ├── project-card.tsx
│   │   ├── agent-card.tsx
│   │   ├── blog-card.tsx
│   │   ├── property-map.tsx
│   │   ├── bangladesh-map.tsx
│   │   ├── testimonials-slider.tsx
│   │   ├── search-box.tsx
│   │   ├── faq.tsx
│   │   └── page-header.tsx
│   └── lib/                 # Data + utilities
│       ├── site.ts          # Site config, navigation
│       ├── properties.ts    # 8 sample properties
│       ├── projects.ts      # 6 sample projects
│       ├── agents.ts        # 6 sample agents
│       ├── posts.ts         # 6 sample blog posts
│       ├── testimonials.ts
│       ├── faqs.ts
│       ├── content.ts       # Stats, services, awards
│       └── utils.ts         # BDT format, EMI calc, cn()
├── tailwind.config.ts       # Theme, design tokens
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Design system

### Colors
- **Primary** (deep navy): `#0B2545` — trust, premium, established
- **Secondary** (gold): `#D4AF37` — luxury, accent, achievement
- **Accent** (blue): `#1D4ED8` — interactive, focus, CTA
- **Background**: `#FAFAFA` — clean, gallery-like
- **Dark**: `#111111` — text
- **White**: `#FFFFFF` — surface

### Typography
- **Manrope** — Display & headings (geometric, modern)
- **Inter** — Body (excellent screen readability)

### Spacing & Sizing
- 4pt grid via Tailwind defaults
- Section padding: `py-20 md:py-28 lg:py-32`
- Display type scale: `display-2xl` → `display-sm`
- Border radius scale: `rounded-xl` (12px) → `rounded-4xl` (32px)

### Shadows
- `shadow-premium` — cards
- `shadow-premium-lg` — modals, hover
- `shadow-gold` — gold accents

### Animations
- All animations: `cubic-bezier(0.16, 1, 0.3, 1)` ("luxury" easing)
- Page transitions, scroll reveal, parallax, hover lift, animated counters
- Staggered children, marquee, shimmer skeletons

---

## 🧩 CMS Integration

To wire up to a real CMS (Sanity, Strapi, Contentful, etc.):

1. Replace static imports in `src/lib/*.ts` with async data fetchers
2. Add `revalidate` to pages that should be ISR (e.g., `export const revalidate = 60`)
3. Wire form submissions to your endpoint (currently uses Sonner toast)
4. Add admin routes in `src/app/admin/`

Sample structure for blog:

```ts
// src/lib/posts.ts (CMS version)
export async function getPost(slug: string) {
  const res = await fetch(`${CMS_URL}/posts/${slug}`, { next: { revalidate: 60 } });
  return res.json();
}
```

---

## 📊 SEO

- ✅ Per-page metadata
- ✅ OpenGraph + Twitter cards
- ✅ JSON-LD structured data (RealEstateAgent)
- ✅ Auto-generated `sitemap.xml`
- ✅ `robots.txt`
- ✅ Canonical URLs
- ✅ Breadcrumb navigation
- ✅ Optimised images (AVIF/WebP)
- ✅ Semantic HTML (h1-h6, main, article, nav, footer)

---

## ♿ Accessibility

- ✅ WCAG AA contrast
- ✅ Keyboard navigation (visible focus rings)
- ✅ Skip-to-content link
- ✅ `aria-label` on icon buttons
- ✅ Reduced motion respect
- ✅ Form labels and error states
- ✅ Semantic HTML

---

## ⚡ Performance

- ✅ Server components by default
- ✅ Client components only where needed
- ✅ `next/image` with AVIF/WebP
- ✅ Code splitting (per route)
- ✅ Font preloading
- ✅ `lucide-react` tree-shaking

Target Lighthouse scores: 95+ on all four categories.

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Self-hosted

```bash
npm run build
npm start
```

Set environment variables from `.env.example`.

---

## 📞 Contact & Lead Generation

Every page includes:
- **Floating CTA** (bottom-right) — Call / WhatsApp / Book Visit
- **Sticky header** with phone number
- **Exit-intent popup** — newsletter capture
- **Footer newsletter** — global
- **Contact forms** — Contact, Book Visit, Schedule Meeting
- **CTA banners** — bottom of long pages

All forms currently use `sonner` toast for confirmation. To wire up real submission, edit `src/app/contact/contact-form.tsx`.

---

## 🗺️ Pages list

| Route | Description |
|---|---|
| `/` | Home — hero, search, featured, projects, amenities, agents, testimonials, blog, CTA |
| `/properties` | Property listing with advanced filters, grid/list/map views |
| `/properties/[slug]` | Property detail — gallery, specs, payment plan, EMI calc, inquiry form |
| `/projects` | Projects listing |
| `/projects/[slug]` | Project detail — progress, amenities, gallery, downloads |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog detail |
| `/agents` | Agent directory |
| `/agents/[slug]` | Agent profile |
| `/about` | Company story, mission, vision, journey, team, awards, CSR |
| `/services` | All services |
| `/investment` | Investment guide, NRB service |
| `/contact` | Contact page with form, offices, map |
| `/book-visit` | Site visit booking form |
| `/schedule-meeting` | Meeting scheduler |
| `/property-management` | Property management service |
| `/gallery` | Image gallery |
| `/video-gallery` | Video gallery |
| `/testimonials` | Client testimonials |
| `/career` | Careers + open roles |
| `/faq` | FAQ with categories |
| `/pricing` | Service pricing |
| `/downloads` | Downloadable resources |
| `/emi-calculator` | EMI calculator |
| `/mortgage-calculator` | Mortgage calculator |
| `/loan-eligibility` | Loan eligibility calculator |
| `/land` | Land listings |
| `/commercial` | Commercial listings |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/search` | Search results |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots |
| `404` | Not found page |

---

## 📜 License

Copyright © 2026 Golden Heights Properties. All rights reserved.

---

Built with care in Bangladesh 🇧🇩

