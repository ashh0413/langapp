# French Learning App — Design Specification

## Visual Direction

**Mango Languages meets modern French elegance** — immersive, warm, and inviting. Not gamified like Duolingo. Feels like opening a beautifully designed textbook that speaks to you.

### Design Philosophy
- **Immersive first**: French dominates the visual space; English appears on interaction
- **Calm confidence**: Serene colors, generous whitespace, no visual noise
- **Cultural warmth**: Subtle French cultural touches (soft textures, elegant typography)
- **Mobile-native**: Designed thumb-first, works one-handed

---

## Color Palette

### Light Mode
```css
--color-background: #FDFBF7;      /* Warm cream */
--color-surface: #FFFFFF;          /* Cards */
--color-surface-elevated: #F5F1EB; /* Secondary surfaces */

--color-primary: #1E3A5F;         /* Deep navy — authority, trust */
--color-primary-light: #2D5A8E;   /* Hover state */
--color-accent: #C4A35A;          /* Gold — sophistication */
--color-accent-warm: #D4896B;     /* Coral — warmth */

--color-text-primary: #1A1A1A;    /* Near black */
--color-text-secondary: #6B6B6B;  /* Muted gray */
--color-text-tertiary: #9A9A9A;   /* Hints */

--color-success: #4A7C59;         /* Sage green */
--color-warning: #C4883A;          /* Amber */
--color-error: #B54A4A;           /* Muted red */

--color-border: #E5E0D8;          /* Subtle warm gray */
```

### Dark Mode
```css
--color-background: #0F1419;      /* Deep charcoal */
--color-surface: #1A1F26;          /* Cards */
--color-surface-elevated: #242B33; /* Secondary surfaces */

--color-primary: #5B8EC4;          /* Lighter navy for dark bg */
--color-primary-light: #7BA3D1;    /* Hover state */
--color-accent: #D4B86A;           /* Brighter gold */
--color-accent-warm: #E09B7D;      /* Brighter coral */

--color-text-primary: #F5F1EB;    /* Warm white */
--color-text-secondary: #A0A0A0;   /* Gray */
--color-text-tertiary: #6B6B6B;   /* Darker hints */

--color-success: #6BA37A;          /* Lighter sage */
--color-warning: #D49A4A;          /* Brighter amber */
--color-error: #D46A6A;            /* Lighter red */

--color-border: #2D333B;           /* Subtle border */
```

---

## Typography

### Font Stack
- **Headings**: `Cormorant Garamond` (elegant, French editorial feel)
- **Body**: `Source Sans 3` (highly readable, clean)
- **French text**: `Cormorant Garamond` (elegance for French words/sentences)
- **Monospace** (for phonetics): `JetBrains Mono`

### Type Scale
```css
--text-xs: 0.75rem;      /* 12px — labels, hints */
--text-sm: 0.875rem;      /* 14px — secondary text */
--text-base: 1rem;        /* 16px — body text */
--text-lg: 1.125rem;      /* 18px — emphasized body */
--text-xl: 1.25rem;       /* 20px — card titles */
--text-2xl: 1.5rem;       /* 24px — section headers */
--text-3xl: 1.875rem;     /* 30px — page titles */
--text-4xl: 2.25rem;       /* 36px — hero headlines */
--text-5xl: 3rem;          /* 48px — splash display */
```

### French Text Treatment
- French words: Cormorant Garamond, slightly larger (1.1x scale)
- French sentences: Cormorant Garamond, normal weight, warm color
- Always show French prominently; translation reveals on interaction

---

## Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;     /* 24px */
--space-6: 2rem;       /* 32px */
--space-8: 3rem;       /* 48px */
--space-10: 4rem;      /* 64px */
--space-12: 6rem;      /* 96px */
```

### Card Spacing
- Internal padding: `space-5` (24px)
- Card gap: `space-4` (16px)
- Section gap: `space-8` (48px)

---

## Component Specifications

### FlashCard

**States:**
- `front`: Shows French sentence, audio button, tap hint
- `revealed`: French + English visible, grading buttons appear
- `flipping`: Mid-animation transition

**Dimensions:**
- Width: 100% (max 400px on desktop)
- Height: auto (min 280px on mobile)
- Border radius: 16px
- Shadow: `0 4px 24px rgba(0,0,0,0.08)`

**Animation:**
- Flip: 600ms, ease-in-out, 3D perspective transform
- Reveal content: 300ms fade-in after flip completes
- Grade buttons: staggered fade-in, 100ms delay each

### AudioButton

**Visual:**
- Circular button, 48px diameter
- Speaker icon (Lucide `Volume2`)
- Background: `--color-surface-elevated`
- Border: 1px `--color-border`
- Hover: scale 1.05, background darkens

**States:**
- `idle`: Default appearance
- `loading`: Pulsing animation, disabled
- `playing`: Animated sound waves icon
- `error`: Red tint, retry icon

### ProgressRing

**Visual:**
- Circular SVG, 120px diameter
- Track: `--color-border` at 8px stroke
- Progress: `--color-primary` at 8px stroke
- Center: percentage text (Cormorant, bold)

**Animation:**
- Progress animates from 0 on mount
- 1000ms duration, ease-out
- Triggers when section enters viewport

### Grade Buttons

**Layout:** 4 buttons in a row, equal width

| Button | Label | Color | Quality Score |
|--------|-------|-------|---------------|
| Again | Again | `--color-error` | 1 |
| Hard | Hard | `--color-warning` | 3 |
| Good | Good | `--color-success` | 4 |
| Easy | Easy | `--color-primary` | 5 |

**Dimensions:**
- Height: 48px
- Border radius: 12px
- Font: Source Sans 3, semibold, 16px

---

## Layout Specifications

### Mobile-First (< 640px)
- Single column layout
- Cards: full width - 32px margin
- Bottom navigation: fixed, 64px height
- Safe area padding: 16px

### Tablet (640px - 1024px)
- Cards: max-width 480px, centered
- Side margins: auto
- Navigation: horizontal tabs

### Desktop (> 1024px)
- Cards: max-width 520px, centered
- Additional stats sidebar (280px)
- Navigation: top bar + sidebar option

---

## Motion & Animation

### Principles
- **Meaningful**: Animation communicates state, not decoration
- **Quick**: Most animations < 400ms
- **Smooth**: Use `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- **Reduced motion**: Respect `prefers-reduced-motion`

### Key Animations

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Card flip | rotateY 180deg | 600ms | ease-in-out |
| Reveal content | opacity + translateY | 300ms | ease-out |
| Button press | scale 0.97 | 100ms | ease-out |
| Page transition | opacity + translateY | 400ms | ease-out |
| Progress ring | stroke-dashoffset | 1000ms | ease-out |
| Audio waves | scale + opacity loop | 800ms | ease-in-out |

---

## Icons

Using **Lucide React** for consistency:
- `Volume2` — audio playback
- `RotateCcw` — replay
- `Check` — known/mastered
- `BookOpen` — learning
- `Trophy` — achievements
- `Flame` — streak
- `ChevronRight` — navigation
- `Menu` — mobile menu

---

## Accessibility

- Minimum contrast ratio: 4.5:1 (AA standard)
- Touch targets: minimum 44x44px
- Focus indicators: 2px solid `--color-primary`
- Screen reader: proper ARIA labels on all interactive elements
- Keyboard navigation: full support for review actions
- Reduced motion: disable animations when `prefers-reduced-motion: reduce`
