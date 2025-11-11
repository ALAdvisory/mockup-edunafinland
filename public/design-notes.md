# Design System Documentation

## Overview
This document outlines the complete design system for the website, including color palettes, typography, spacing, animations, and design tokens.

---

## Color Palette

### Light Mode
```
Background & Surfaces:
- --background: hsl(0 0% 100%)           /* Pure white */
- --card: hsl(0 0% 100%)                 /* Card backgrounds */
- --popover: hsl(0 0% 100%)              /* Popover backgrounds */
- --secondary: hsl(155 25% 92%)          /* Light sage green */
- --muted: hsl(155 20% 95%)              /* Very light sage */

Text Colors:
- --foreground: hsl(158 28% 15%)         /* Dark forest green (primary text) */
- --card-foreground: hsl(158 28% 15%)
- --popover-foreground: hsl(158 28% 15%)
- --secondary-foreground: hsl(158 28% 15%)
- --muted-foreground: hsl(158 15% 45%)   /* Medium gray-green */

Brand Colors:
- --primary: hsl(158 45% 28%)            /* Forest green */
- --primary-foreground: hsl(0 0% 100%)   /* White text on primary */
- --accent: hsl(38 85% 55%)              /* Warm amber/gold */
- --accent-foreground: hsl(158 28% 15%)  /* Dark text on accent */

Utility Colors:
- --destructive: hsl(0 84.2% 60.2%)      /* Vibrant red */
- --destructive-foreground: hsl(0 0% 100%)

Borders & Inputs:
- --border: hsl(155 20% 90%)             /* Light gray-green */
- --input: hsl(155 20% 90%)
- --ring: hsl(158 45% 28%)               /* Focus ring (primary) */
```

### Dark Mode
```
Background & Surfaces:
- --background: hsl(158 30% 12%)         /* Very dark forest green */
- --card: hsl(158 25% 15%)               /* Slightly lighter than background */
- --popover: hsl(158 25% 15%)
- --secondary: hsl(158 20% 20%)          /* Dark gray-green */
- --muted: hsl(158 15% 22%)              /* Muted dark surface */

Text Colors:
- --foreground: hsl(155 25% 92%)         /* Light sage (primary text) */
- --card-foreground: hsl(155 25% 92%)
- --popover-foreground: hsl(155 25% 92%)
- --secondary-foreground: hsl(155 25% 92%)
- --muted-foreground: hsl(155 15% 65%)   /* Medium light gray-green */

Brand Colors:
- --primary: hsl(158 45% 45%)            /* Lighter forest green */
- --primary-foreground: hsl(0 0% 100%)
- --accent: hsl(38 85% 55%)              /* Warm amber/gold (same as light) */
- --accent-foreground: hsl(0 0% 100%)    /* White text on accent */

Utility Colors:
- --destructive: hsl(0 62.8% 50%)        /* Muted red */
- --destructive-foreground: hsl(0 0% 100%)

Borders & Inputs:
- --border: hsl(158 15% 22%)
- --input: hsl(158 15% 22%)
- --ring: hsl(158 45% 45%)
```

---

## Custom Design Tokens

### Gradients

**Light Mode:**
```css
--gradient-primary: linear-gradient(135deg, hsl(158 45% 28%) 0%, hsl(158 55% 38%) 100%)
/* Subtle forest green gradient */

--gradient-hero: linear-gradient(135deg, hsl(158 50% 25%) 0%, hsl(168 45% 35%) 50%, hsl(38 75% 50%) 100%)
/* Multi-color gradient: dark forest → teal → amber */

--gradient-accent: linear-gradient(135deg, hsl(38 85% 55%) 0%, hsl(45 90% 60%) 100%)
/* Warm amber to yellow gradient */
```

**Dark Mode:**
```css
--gradient-primary: linear-gradient(135deg, hsl(158 45% 35%) 0%, hsl(158 55% 45%) 100%)
/* Lighter forest green gradient for dark mode */

--gradient-hero: linear-gradient(135deg, hsl(158 50% 20%) 0%, hsl(168 45% 30%) 50%, hsl(38 75% 45%) 100%)
/* Darker version of hero gradient */

--gradient-accent: linear-gradient(135deg, hsl(38 85% 50%) 0%, hsl(45 90% 55%) 100%)
/* Slightly darker amber gradient */
```

### Shadows

**Light Mode:**
```css
--shadow-soft: 0 10px 40px -10px hsl(158 45% 28% / 0.15)
/* Soft, subtle shadow with primary color tint */

--shadow-elevated: 0 20px 60px -15px hsl(158 45% 28% / 0.25)
/* More prominent shadow for elevated elements */
```

**Dark Mode:**
```css
--shadow-soft: 0 10px 40px -10px hsl(0 0% 0% / 0.4)
/* Darker, more prominent shadow */

--shadow-elevated: 0 20px 60px -15px hsl(0 0% 0% / 0.6)
/* Deep black shadow for high elevation */
```

### Transitions
```css
--transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
/* Smooth easing for most interactions */

--transition-spring: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)
/* Spring-like bounce effect for playful interactions */
```

---

## Border Radius
```
--radius: 1rem              /* Base radius (16px) */

Usage in Tailwind:
- rounded-lg: var(--radius)
- rounded-md: calc(var(--radius) - 2px)    /* 14px */
- rounded-sm: calc(var(--radius) - 4px)    /* 12px */
```

---

## Animations & Keyframes

### Accordion Animations
```javascript
accordion-down: {
  from: { height: "0" },
  to: { height: "var(--radix-accordion-content-height)" }
}
animation: "accordion-down 0.2s ease-out"

accordion-up: {
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: "0" }
}
animation: "accordion-up 0.2s ease-out"
```

### Float Animation
```javascript
float: {
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-20px)" }
}
animation: "float 6s ease-in-out infinite"
```
**Use case:** Gentle floating effect for decorative elements

### Grow Animation
```javascript
grow: {
  "0%": { transform: "scaleY(0)", transformOrigin: "bottom" },
  "100%": { transform: "scaleY(1)", transformOrigin: "bottom" }
}
animation: "grow 1s ease-out"
```
**Use case:** Elements growing from bottom (bars, charts, dividers)

### Fade In Animation
```javascript
fade-in: {
  "0%": { opacity: "0", transform: "translateY(20px)" },
  "100%": { opacity: "1", transform: "translateY(0)" }
}
animation: "fade-in 0.6s ease-out"
```
**Use case:** Content appearing with slide-up effect

---

## Layout & Spacing

### Container
```
Max width: 1400px (2xl breakpoint)
Center aligned
Padding: 2rem (32px)
```

---

## Color Usage Guidelines

### Primary Color (Forest Green)
- **Use for:** Main CTAs, active states, links, brand elements
- **Light mode:** hsl(158 45% 28%) - Deep forest green
- **Dark mode:** hsl(158 45% 45%) - Lighter forest green

### Secondary Color (Light Sage)
- **Use for:** Secondary buttons, backgrounds, subtle highlights
- **Light mode:** hsl(155 25% 92%) - Very light sage
- **Dark mode:** hsl(158 20% 20%) - Dark gray-green

### Accent Color (Amber/Gold)
- **Use for:** Highlights, important information, energy/warmth
- **Both modes:** hsl(38 85% 55%) - Consistent warm amber

### Muted Colors
- **Use for:** Disabled states, secondary text, subtle backgrounds
- Provides hierarchy without overwhelming the design

---

## Design Principles

1. **Natural & Organic:** The green color palette evokes nature and growth
2. **Professional:** High contrast ratios and clear hierarchy
3. **Accessible:** Semantic color tokens ensure proper contrast
4. **Consistent:** All colors derived from HSL variables for easy theming
5. **Smooth Interactions:** Custom transitions and animations enhance UX
6. **Dark Mode Ready:** Complete dark mode support with adjusted colors

---

## Implementation Notes

- **Always use semantic tokens:** Use `bg-primary` instead of `bg-green-700`
- **HSL format only:** All colors are HSL for easier manipulation
- **CSS variables:** All colors reference CSS custom properties
- **Tailwind integration:** Colors mapped in tailwind.config.ts
- **Theme switching:** Uses `.dark` class for dark mode toggle

---

## Component-Specific Styles

### Buttons
- Primary variant uses `--gradient-primary` for subtle depth
- Hero variant uses `--gradient-hero` for eye-catching CTAs
- Smooth transitions with `--transition-smooth`

### Cards
- Use `--shadow-soft` for normal elevation
- Use `--shadow-elevated` for modal/floating elements

### Animations
- Content reveals: `animate-fade-in`
- Floating effects: `animate-float`
- Growing elements: `animate-grow`

---

*This design system is built on a foundation of semantic tokens, ensuring consistency, accessibility, and ease of maintenance across the entire application.*
