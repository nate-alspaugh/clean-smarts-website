---
version: alpha
name: Clean Smarts
description: Commercial cleaning SaaS — software to save cleaning teams time and money.
colors:
  surface: "#FFFFFF"
  surface-dim: "#F8FAFC"
  surface-border: "#F1F5F9"
  on-surface: "#0F172A"
  on-surface-muted: "#334155"
  on-surface-variant: "#64748B"
  primary: "#2563EB"
  on-primary: "#FFFFFF"
  primary-hover: "#1D4ED8"
  primary-active: "#1E40AF"
  accent: "#059669"
  rating: "#FACC15"
  hero-grad-top: "#FFFFFF"
  hero-grad-mid: "#EEF8FF"
  hero-grad-bottom: "#DDE9FF"
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 3.5rem
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.025em
  display-hero-sm:
    fontFamily: Geist
    fontSize: 3rem
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.025em
  body-lg:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.625
  body-md:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.625
  label-md:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.25rem
  label-sm:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1rem
  button-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.5rem
rounded:
  sm: 4px
  md: 6px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  hero-y: 80px
  hero-y-lg: 112px
components:
  page-body:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  nav-container:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
  nav-divider:
    backgroundColor: "{colors.surface-border}"
    height: 1px
  nav-link:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
  nav-link-hover:
    textColor: "{colors.accent}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  button-primary-compact:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
  hero-surface-top:
    backgroundColor: "{colors.hero-grad-top}"
  hero-surface-mid:
    backgroundColor: "{colors.hero-grad-mid}"
  hero-surface-bottom:
    backgroundColor: "{colors.hero-grad-bottom}"
  hero-headline:
    textColor: "{colors.on-surface}"
    typography: "{typography.display-hero}"
  hero-subhead:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-lg}"
  glass-card-hero:
    backgroundColor: rgba(255, 255, 255, 0.15)
    rounded: "{rounded.xl}"
  rating-star:
    textColor: "{colors.rating}"
    size: 14px
  rating-caption:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
---

## Overview

Clean Smarts is software for commercial cleaning companies — built to save janitorial teams time and money. The visual language is **bright, optimistic, and trust-building**: a soft pastel-blue daylight palette, crisp display typography, generous whitespace, and a single saturated blue accent that drives every primary action. The aesthetic blends a modern marketing site (large headlines, social proof, clear CTAs) with a single glassmorphic moment in the hero to signal "modern software" without veering into heavy, dark UI.

The home hero is currently variant-tested:

- **`/home`** — card-style hero (`rounded-2xl` container, `min-h-[80vh]`, contained within the 12-col grid).
- **`/home-no-card`** — full-bleed gradient (edge-to-edge).

Both variants share the same headline, subhead, CTA, rating row, gradient, dotted-grid backdrop, and glass card; only the framing differs.

## Colors

The palette is rooted in a soft pastel daylight gradient, anchored by a single high-saturation blue for action and a deep slate for text.

- **Primary (#2563EB)** — Saturated blue, used exclusively for the single most important action per screen ("Book a demo"). Hover (#1D4ED8) and active (#1E40AF) deepen the same hue.
- **Accent (#059669)** — Emerald, reserved for Navbar link hover only. Kept out of body content so navigation stays visually distinct.
- **On-Surface (#0F172A)** — Slate ink for headlines and high-emphasis text.
- **On-Surface Muted (#334155)** — Mid-slate for navigation links and secondary UI text.
- **On-Surface Variant (#64748B)** — Lighter slate for subheads and supporting body copy.
- **Surface (#FFFFFF)** — Default for cards, the Navbar, and the top of the hero gradient.
- **Surface Dim (#F8FAFC)** — Page body background outside the hero.
- **Rating (#FACC15)** — Yellow star fill in social-proof rows.

### Hero Gradient

The hero background is a vertical three-stop gradient sized to ~85vh, painting white at the top and settling into pale blue at the bottom:

```
linear-gradient(to bottom,
  #FFFFFF 0%,    /* hero-grad-top    */
  #FFFFFF 10%,
  #EEF8FF 40%,   /* hero-grad-mid    */
  #DDE9FF 75%    /* hero-grad-bottom */
)
```

A dotted grid pattern is layered on top in `rgba(15, 23, 42, 0.07)` (a near-transparent slate-900) at a 140×140 cell size, then masked with a 70% radial ellipse so the grid fades toward the edges and concentrates focus on the center copy and the glass card.

## Typography

**Geist** is the primary typeface (Inter as fallback). The hero headline uses the heaviest weight at 3.5rem with tight tracking and 1.05 line-height — confident, modern, slightly architectural. Body copy uses the same family at weight 400 to keep a coherent voice across the hierarchy.

- **Display Hero** — `display-hero` (3.5rem desktop / 3rem mobile, weight 900). The single H1 per page; one short, declarative sentence.
- **Body Large / Medium** — `body-lg` / `body-md` for the hero subhead. Always rendered in `on-surface-variant` so it recedes behind the headline.
- **Label Medium** — `label-md` (14px / 500) for Navbar links and the compact CTA.
- **Label Small** — `label-sm` (12px / 400) for microcopy like the rating count. Always paired with a visual cue (e.g., stars).
- **Button** — `button-md` (16px / 500). Never bolder than the surrounding body weight.

Tracking is tightened to `-0.025em` on display sizes only; body sizes retain default tracking for readability.

## Layout

The site uses a **fluid CSS-grid system** with column counts and gutters defined as CSS custom properties in `src/index.css`. Layout primitives `<GridRow>` and `<GridCol>` (`src/components/Grid.tsx`) wrap this; never hand-roll grid CSS at the page level.

- **Mobile (`< 768px`)** — 6 columns, 8.33vw outer padding, 4.17vw gutter.
- **Desktop (`≥ 768px`)** — 12 columns, 4.44vw outer padding, 2.22vw gutter.

Margins and gutters scale with viewport width by design — content density stays consistent regardless of screen size, and there are **no fixed max-widths**. This is a deliberate departure from the conventional fixed-max-width grid.

The hero copy sits at `start={2} span={4}` (desktop) leaving the left margin breathing room, paired with the glass card at `start={8} span={3}` to form a 4/3 asymmetric composition.

A developer-only **grid overlay** can be toggled with `Ctrl+L` (`src/hooks/useGridOverlay.ts`); the toggle button anchors bottom-right. Use it to verify column alignment during design work.

Spacing tokens follow an 8px base scale. The hero uses larger vertical padding (`hero-y` = 80px, `hero-y-lg` = 112px on `lg:` breakpoint) than typical sections.

## Elevation & Depth

This system uses **light, atmospheric depth** rather than dark drop shadows. Elevation reads through three signals:

1. **Tonal gradients** — the hero's white-to-`#DDE9FF` wash provides a sense of vertical depth without separating elements with hard boundaries.
2. **Glassmorphic surfaces** — the hero's glass card uses `backdrop-filter: blur(20px) saturate(180%)` with a translucent gradient fill, a 1px white border, a top sheen, and two blurred radial orbs to simulate refracted light.
3. **Soft blue-tinted shadows** — all shadows tint toward `rgba(31, 58, 112, *)` (a desaturated hero-bottom blue) instead of black, keeping elevation visually warm and on-brand:
   - `0 8px 32px rgba(31, 58, 112, 0.12)` — primary outer shadow
   - `0 2px 8px rgba(31, 58, 112, 0.06)` — close-contact shadow
   - `inset 0 1px 0 rgba(255, 255, 255, 0.9)` — top inner highlight
   - `inset 0 -1px 0 rgba(255, 255, 255, 0.3)` — bottom inner highlight

The CTA's hover state adds `shadow-md shadow-blue-600/20` — a tinted brand-blue glow rather than a generic darker shadow. **Depth amplifies brand color.**

## Shapes

The shape language is **softly rounded** — enough curvature to feel approachable, none of it pillowy. Three radii cover the system:

- **md (6px)** — Default for inline interactive elements (primary CTA, compact CTA).
- **lg (12px)** — Reserved for medium containers as the system grows.
- **xl (16px)** — Larger surface containers: the card-style hero wrapper (`rounded-2xl`) and the glassmorphic hero card.

Mixing radii within a single visual group is avoided.

## Components

### Button — Primary

The blue-600 pill ("Book a demo") is the system's only primary action. Uses `rounded.md` (6px), 12px × 24px padding, button typography at weight 500. Hover deepens to `primary-hover` and adds a tinted brand-blue glow (`shadow-blue-600/20`); active deepens further to `primary-active`. The Navbar uses `button-primary-compact` (10px × 20px) for the in-nav demo CTA.

**One primary button per screen.**

### Navbar

Sticky white nav with a 1px bottom border in `surface-border` (slate-100). Links use `on-surface-muted` (slate-700) at `label-md` and transition to `accent` (emerald-600) on hover. The Clean Smarts wordmark is rendered as an SVG with `filter: brightness(0)` applied to convert the white-logo asset to solid black. Mobile collapses to a hamburger trigger (no menu implemented yet).

Padding follows the page grid via `paddingInline: var(--grid-padding)` so the Navbar aligns with content beneath it.

### Glass Card (Hero)

The hero's right-side square is the system's signature glassmorphic surface. All values are centralized in `defaultGlass` (`src/components/GlassControls.tsx`) and consumed by both hero variants. Recipe:

- **Fill** — `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.28) 100%)`
- **Backdrop filter** — `blur(20px) saturate(180%)`
- **Border** — `1px solid rgba(255,255,255,0.6)`
- **Border radius** — 16px (`rounded.xl`)
- **Outer shadow** — `0 8px 32px rgba(31, 58, 112, 0.12), 0 2px 8px rgba(31, 58, 112, 0.06)`
- **Inner edges** — `inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.3)`
- **Top sheen** — `radial-gradient(ellipse 80% 60% at 30% 0%, rgba(255,255,255,0.5), transparent 60%)`
- **Top-right orb** — `radial-gradient(circle, rgba(255,255,255,0.7), transparent 70%)`, blurred 20px, sized 2/3 of card, offset `-top-1/4 -right-1/4`
- **Bottom-left orb** — `radial-gradient(circle, rgba(255,255,255,0.55), transparent 70%)`, blurred 20px, mirrored placement

The `GlassControls` panel (dev-only) exposes every value as a slider and can emit a "lock-in prompt" — used to tune the look, then hard-code values back into source.

### Rating Row

Five `Star` icons (Phosphor, `weight="fill"`, 14px) in `rating` (yellow-400), followed by 12px copy in `on-surface` describing the rating and review count. Placed immediately below the hero CTA as social proof.

## Do's and Don'ts

- **Do** keep `primary` as the single most important action per screen.
- **Do** read glass values from `defaultGlass` — never hard-code variations of the recipe.
- **Do** use `<GridRow>` and `<GridCol>` for layout; never write raw grid CSS at the page level.
- **Do** scale margins and gutters with viewport via the CSS-var grid system.
- **Do** use the blue-tinted shadow family (`rgba(31, 58, 112, *)`) for all elevation.
- **Don't** mix `accent` (emerald) into body content — it's reserved for nav-link hover only.
- **Don't** use dark or gray drop shadows anywhere — break the brand-warm depth model.
- **Don't** add a second primary button to a page. Use ghost or link styling for secondary actions.
- **Don't** hard-set `max-width` inside `<GridCol>` — let the fluid grid drive sizing.
- **Don't** drop the hero headline below weight 900 or smaller than 3rem on desktop — the display weight is a core brand signal.
- **Don't** mix `rounded.md` (interactive elements) with `rounded.xl` (surfaces) within the same visual group.
