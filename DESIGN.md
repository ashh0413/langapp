# French Learning App — Design Specification

## Design Philosophy

**Apple-inspired simplicity meets French elegance.** Every screen has one clear purpose. No dashboards, no clutter, no manual-reading. The app feels like a premium tool that knows what you need before you ask.

### Core Principles

1. **One thing at a time** — Each screen focuses on one action
2. **Tap, don't navigate** — Defaults matter; avoid deep navigation
3. **Whitespace is luxury** — Generous space makes content breathe
4. **Progressive disclosure** — Show what matters now, more later
5. **Feelings over features** — The app should feel calm, not stressful
6. **Forgiveness over precision** — Easy to start, hard to break

---

## Color System

### Light Mode

```css
/* Backgrounds */
--bg-primary: #FFFFFF;         /* Pure white — main surfaces */
--bg-secondary: #F8F8FA;       /* Off-white — subtle sections */
--bg-tertiary: #F2F2F7;        /* Light gray — cards, inputs */

/* Text */
--text-primary: #1C1C1E;       /* Near black — headings, body */
--text-secondary: #3C3C43;      /* Gray 60% — secondary text */
--text-tertiary: #8E8E93;       /* Gray 40% — hints, labels */
--text-inverse: #FFFFFF;        /* White — on dark backgrounds */

/* Accent — Apple Blue */
--accent: #007AFF;             /* Primary blue — actions, links */
--accent-light: #0A84FF;       /* Hover state */
--accent-bg: rgba(0,122,255,0.1); /* Subtle blue bg */

/* Semantic Colors */
--success: #34C759;            /* Green — correct, complete */
--success-bg: rgba(52,199,89,0.1);
--warning: #FF9F0A;           /* Orange — caution, review */
--warning-bg: rgba(255,159,10,0.1);
--error: #FF3B30;              /* Red — wrong, urgent */
--error-bg: rgba(255,59,48,0.1);
--purple: #AF52DE;             /* Purple — achievements, premium */
--purple-bg: rgba(175,82,222,0.1);

/* Borders & Dividers */
--border: rgba(60,60,67,0.12); /* Subtle divider */
--border-strong: rgba(60,60,67,0.29); /* Visible divider */
```

### Dark Mode

```css
/* Backgrounds */
--bg-primary: #000000;         /* True black — OLED friendly */
--bg-secondary: #1C1C1E;       /* Dark gray — surfaces */
--bg-tertiary: #2C2C2E;         /* Lighter dark — cards */

/* Text */
--text-primary: #FFFFFF;       /* White — headings, body */
--text-secondary: #EBEBF5;      /* Gray 90% — secondary */
--text-tertiary: #8E8E93;       /* Gray 50% — hints */
--text-inverse: #1C1C1E;        /* Dark — on light */

/* Accent — Brighter for dark mode */
--accent: #0A84FF;             /* Lighter blue */
--accent-light: #409CFF;       /* Hover state */
--accent-bg: rgba(10,132,255,0.15);

/* Semantic Colors */
--success: #30D158;            /* Brighter green */
--success-bg: rgba(48,209,88,0.15);
--warning: #FF9F0A;            /* Same orange */
--warning-bg: rgba(255,159,10,0.15);
--error: #FF453A;              /* Brighter red */
--error-bg: rgba(255,69,58,0.15);
--purple: #BF5AF2;             /* Brighter purple */
--purple-bg: rgba(191,90,242,0.15);

/* Borders */
--border: rgba(84,84,88,0.65);
--border-strong: rgba(118,118,128,0.35);
```

---

## Typography

### Font Stack
- **Display & Headings**: `SF Pro Display` (system) → fallback to `-apple-system, BlinkMacSystemFont, "Segoe UI"`
- **Body & UI**: `SF Pro Text` (system) → same fallback
- **French Text**: `Georgia` (elegant serif) → `Cormorant Garamond` (Google Font)
- **Monospace**: `SF Mono` (system) → `ui-monospace, monospace`

### Type Scale (8pt Grid)

```css
/* Display — Large, bold, commanding */
--text-display: 3rem;          /* 48px — hero headlines */
--text-large-title: 2.5rem;     /* 40px — screen titles */

/* Titles — Clear hierarchy */
--text-title-1: 1.75rem;       /* 28px — section headers */
--text-title-2: 1.375rem;      /* 22px — card titles */
--text-title-3: 1.125rem;      /* 18px — subsections */

/* Body — Readable at all sizes */
--text-body: 1rem;             /* 16px — primary text */
--text-body-small: 0.9375rem;   /* 15px — comfortable reading */
--text-callout: 0.875rem;       /* 14px — secondary text */

/* Labels & UI */
--text-subhead: 0.8125rem;     /* 13px — labels */
--text-footnote: 0.75rem;      /* 12px — hints */
--text-caption: 0.6875rem;     /* 11px — timestamps */

/* Line Heights */
--leading-tight: 1.2;          /* Headings */
--leading-normal: 1.4;          /* Body */
--leading-relaxed: 1.6;         /* French text */

/* Letter Spacing */
--tracking-tight: -0.02em;     /* Large titles */
--tracking-normal: 0;            /* Body */
--tracking-wide: 0.04em;        /* Small caps, labels */
```

### Font Weights
```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### French Text Treatment
- French sentences: Georgia / Cormorant Garamond, 1.25rem (20px)
- Word translations: SF Pro Text, 0.875rem, text-secondary
- Phonetics: SF Mono, 0.8125rem, text-tertiary
- Always serif for French; always sans for English translations

---

## Spacing System (8pt Grid)

```css
--space-1: 0.25rem;   /* 4px — micro spacing */
--space-2: 0.5rem;    /* 8px — tight spacing */
--space-3: 0.75rem;   /* 12px — compact */
--space-4: 1rem;       /* 16px — default */
--space-5: 1.25rem;   /* 20px — comfortable */
--space-6: 1.5rem;    /* 24px — spacious */
--space-8: 2rem;       /* 32px — section gap */
--space-10: 2.5rem;    /* 40px — large gap */
--space-12: 3rem;      /* 48px — major sections */
--space-16: 4rem;      /* 64px — page padding top */
```

### Safe Areas (Mobile)
```css
--safe-area-top: env(safe-area-inset-top, 0px);
--safe-area-bottom: env(safe-area-inset-bottom, 0px);
--nav-height: 56px;
--tab-height: 49px;
--tab-height-with-safe: calc(49px + var(--safe-area-bottom));
```

---

## Border Radius

```css
/* Consistent corner radii */
--radius-sm: 8px;       /* Small buttons, inputs */
--radius-md: 12px;      /* Medium cards */
--radius-lg: 16px;      /* Large cards, sheets */
--radius-xl: 20px;      /* Bottom sheets */
--radius-2xl: 24px;     /* Modal sheets */
--radius-full: 9999px;  /* Pills, avatars */
```

---

## Shadows

```css
/* Subtle, layered shadows */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 2px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 48px rgba(0,0,0,0.16);

/* No shadows in dark mode — use borders instead */
.dark-mode {
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  --shadow-xl: none;
}
```

---

## Navigation

### Bottom Tab Bar
Height: 49px + safe area bottom (mobile), fixed position

```
┌─────────────────────────────────────────┐
│                                         │
│            Content Area                 │
│                                         │
├─────────────────────────────────────────┤
│  🏠    📖    🎯    📊    👤            │
│  Home  Learn Practice Progress Profile  │
└─────────────────────────────────────────┘
```

**Tab Specifications:**
- 5 tabs maximum
- Icon + label, vertically stacked
- Active: accent color, icon filled
- Inactive: text-tertiary, icon outline
- Touch target: 49px minimum height
- Icons: SF Symbols style, 24px

### Screen Structure

```
┌───────────────���─────────────┐
│  ← Back         Title        │  ← Navigation bar (optional)
├─────────────���───────────────┤
│                             │
│                             │
│         Content             │  ← Scrollable, centered
│                             │
│                             │
├─────────────────────────────┤
│        Primary CTA          │  ← Sticky bottom (optional)
└─────────────────────────────┘
│  🏠    📖    🎯    📊    👤  │  ← Tab bar
└─────────────────────────────┘
```

---

## Component Specifications

### 1. FlashCard

**The heart of the app.** A single card, centered, full attention.

```
┌───────────��─────────────────────────┐
│                                     │
│                                     │
│      « Je suis content. »           │  ← French, serif, large
│                                     │
│           🔊 Play                    │  ← Audio button, below
│                                     │
│                                     │
│      ─────── Tap to reveal ───────   │  ← Subtle hint
│                                     │
└─────────────────────────────────────┘
```

**After Reveal:**
```
┌─────────────────────────────────────┐
│                                     │
│      « Je suis content. »           │
│                                     │
│      "I am happy."                   │  ← English, sans, smaller
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│  │Again│ │Hard │ │Good │ │Easy │   │  ← Grading buttons
│  └─────┘ └─────┘ └─────┘ └─────┘   │
│                                     │
└─────────────────────────────────────┘
```

**Dimensions:**
- Width: 100% - 48px (24px margins)
- Max width: 400px (centered on larger screens)
- Min height: 320px
- Border radius: 20px (radius-xl)
- Background: bg-primary
- Shadow: shadow-lg

**States:**
| State | Appearance |
|-------|------------|
| Default | French sentence, audio button, tap hint |
| Revealed | French + English, grading buttons visible |
| Loading | Shimmer/skeleton for audio |
| Correct | Brief green glow, auto-advance |
| Wrong | Brief red glow, show correct answer |

**Animation:**
- Reveal: 400ms, ease-out, fade + slight scale
- Grade buttons: 100ms stagger, fade up
- Card exit: 300ms slide left + fade

---

### 2. AudioButton

**Play pronunciation.** Simple, immediate.

```
┌──────────────────┐
│       🔊         │  ← 44x44px minimum
└──────────────────┘
```

**States:**
| State | Appearance |
|-------|------------|
| Idle | Outline icon, bg-tertiary |
| Loading | Spinning indicator |
| Playing | Animated sound waves |
| Error | Red tint, exclamation mark |

**Specifications:**
- Size: 44x44px (touch target), icon 24px
- Border radius: radius-full
- Background: bg-tertiary → accent-bg on press
- Press: scale 0.95, 100ms

---

### 3. ProgressRing

**Today's progress.** Visible but not distracting.

```
       ┌──────���┐
      /         \
     │    75%    │  ← Percentage, center
      \         /
       └───────┘
     ─────────────  ← Track
```

**Specifications:**
- Size: 120x120px (home), 80x80px (compact)
- Stroke width: 8px
- Track color: border
- Progress color: accent
- Center text: text-title-2, font-semibold

**Animation:**
- Progress: 800ms, ease-out, from 0
- Percentage counter: counts up with progress

---

### 4. GradeButtons

**Rate your recall.** Quick, intuitive.

```
┌───────┐ ┌───────┐ ┌───────┐ ┌���──────┐
│ Again │ │ Hard  │ │ Good  │ │ Easy  │
│   😓  │ │   😐  │ │   😊  │ │   🤩  │
└───────┘ └───────┘ └───────┘ └───────┘
```

**Specifications:**
- Layout: 4 columns, equal width, 8px gap
- Height: 56px (large touch target)
- Border radius: 12px
- Font: text-subhead, font-medium
- Emoji: 20px, below text

| Button | Color | BG | Purpose |
|--------|-------|-----|---------|
| Again | error | error-bg | Failed, show again soon |
| Hard | warning | warning-bg | Struggled, review sooner |
| Good | success | success-bg | Got it, normal interval |
| Easy | accent | accent-bg | Perfect, longer interval |

**States:**
| State | Appearance |
|-------|------------|
| Default | Color bg, white text |
| Hover | Slightly darker bg |
| Press | Scale 0.97, 100ms |
| Disabled | 50% opacity |

---

### 5. SessionCard

**Today's lesson summary.**

```
┌─────────────────────────────────────┐
│  📚  Today's Lesson                 │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  🎯  5 new words                    │
│  🔄  12 to review                   │
│  ⏱️   ~5 minutes                    │
│                                     │
│  ┌─────────────────────────────────┐│
│  │      Start Learning      →      ││
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

---

### 6. StreakBadge

**Your consistency.**

```
┌─────────┐
│  🔥 7   │  ← Fire emoji + days
│  days   │
└─────────┘
```

**Specifications:**
- Padding: 12px 16px
- Border radius: radius-lg
- Background: warning-bg
- Text: warning (orange)

---

### 7. WordListItem

**Vocabulary browser.**

```
┌─────────────────────────────────────┐
│  bonjour              greeting      │
│  ────────────────���────────────────  │
│  "Hello"                           │
│                          🔊  →     │
└─────────────────────────────────────┘
```

---

### 8. BottomSheet

**Settings, details, options.**

```
┌─────────────────────────────────────┐
│                                     │
│  ────  (drag handle)                │
│                                     │
│  Options...                         │
│                                     │
└─────────────────────────────────────┘
```

**Specifications:**
- Border radius: 20px top corners only
- Background: bg-primary
- Drag handle: 36x5px, radius-full, border color
- Backdrop: rgba(0,0,0,0.4)

---

### 9. EmptyState

**Nothing to do here.**

```
┌─────────────────────────────────────┐
│                                     │
│           ✨                        │
│                                     │
│     You're all caught up!            │
│     No reviews due right now.        │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

---

### 10. Button (Primary)

**Main action on screen.**

```
┌─────────────────────────────────────┐
│                                     │
│         Continue                    │
│                                     │
└─────────────────────────────────────┘
```

**Specifications:**
- Width: 100% - 48px
- Height: 50px
- Border radius: 12px
- Background: accent
- Text: text-body, font-semibold, text-inverse
- Press: scale 0.98, 100ms

---

## Screen Layouts

### Home Screen

```
┌─────────────────────────────────────┐
│  Bonjour!              🔥 7 day 🔔  │  ← Header
├─────────────────────────────────────┤
│                                     │
│  ┌───────────────────────────────┐  │
│  │  🎯  5 new  🔄  12 review     │  │
│  │                               │  │
│  │     ┌─────────────────┐       │  │
│  │     │                 │       │  │
│  │     │    [Progress]   │       │  │  ← Ring
│  │     │      75%        │       │  │
│  │     │                 │       │  │
│  │     └─────────────────┘       │  │
│  │                               │  │
│  │  ┌─────────────────────────┐   │  │
│  │  │     Start Learning      │   │  │
│  │  └─────────────────────────┘   │  │
│  │                               │  │
│  │     Continue French  →        │  │  ← Text link
│  └───────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│  🏠    📖    🎯    📊    👤         │
└─────────────────────────────────────┘
```

**Principles:**
- Single scrollable card
- Progress ring is the hero
- One primary CTA (Start Learning)
- One secondary link (Continue)
- Minimal cognitive load

---

### Learn Screen

```
┌─────────────────────────────────────┐
│  ←  Lesson 1: Greetings             │  ← Back + Title
├─────────────────────────────────────┤
│                                     │
│  Progress: ████████░░░░  8/12       │  ← Progress bar
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │   « Bonjour, comment          │  │
│  │     allez-vous ? »            │  │
│  │                               │  │
│  │            🔊                  │  │
│  │                               │  │
│  │    ─── Tap to reveal ───      │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
├─────────────────────────────────────┤
│  1  2  3  4  5  6  7  8  9  10 ...  │  ← Card dots
└─────────────────────────────────────┘
```

**Principles:**
- Card dominates the screen
- Progress bar at top (not distracting)
- Card dots at bottom (context, not navigation)
- Back button for escape
- No other actions on screen

---

### Practice Screen

```
┌─────────────────────────────────────┐
│  Practice                           │
├─────────────────────────────────────┤
│                                     │
│  Choose what to practice:           │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  🔄  Review Due               │  │
│  │  12 words ready              │  │
│  │                      →        │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  🎯  Weak Words               │  │
│  │  5 struggling                │  │
│  │                      →        │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  📚  Random Review            │  │
│  │  Mix of all learned          │  │
│  │                      →        │  │
│  └───────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│  🏠    📖    🎯    📊    👤         │
└─────────────────────────────────────┘
```

---

### Progress Screen

```
┌─────────────────────────────────────┐
│  Progress                           │
├─────────────────────────────────────┤
│                                     │
│       ��──────────┐                  │
│       │  127     │                  │
│       │  words   │                  │
│       │ learned  │                  │
│       └──────────┘                  │
│                                     │
│  This Week                          │
│  ┌───────────────────────────────┐  │
│  │ ████████████░░░░  67%         │  │
│  │ 5/7 days completed            │  │
│  └─────────────��─────────────────┘  │
│                                     │
│  Mastery Levels                      │
│  ┌──────────┐  ┌──────────┐        │
│  │ New      │  │ Learning  │        │
│  │   23     │  ���    15     │        │
│  │ ████░░░░ │  │ ████████░ │        │
│  └��─────────┘  └──────────┘        │
│  ┌──────────┐  ┌──────────┐        │
│  │ Reviewing│  │ Mastered │        │
│  │    64    │  │    25    │        │
│  │ █████████│  │ ███░░░░░ │        │
│  └───────��──┘  └──────────┘        │
│                                     │
├─────────────────────────────────────┤
│  🏠    📖    🎯    📊    👤         │
└────────────��────────────────────────┘
```

---

### Profile Screen

```
┌─────────────────────────────────────┐
│  Profile                            │
├─────────────────────────────────────┤
│                                     │
│       ┌────────┐                    │
│       │  👤    │  ← Avatar          │
│       └────────┘                    │
│                                     │
│       Learner                        │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 🔥  Streak: 7 days            │  │
│  ├───────────────────────────────┤  │
│  │ 📅  Member since June 2024     │  │
│  ├───────────────────────────────┤  │
│  │ ⭐  Level 5                    │  │
│  └───────────────────────────────┘  │
│                                     │
│  Settings                           │
│  ┌───────────────────────────────┐  │
│  │ 🌓  Dark Mode         [  ]    │  │
│  ├───────────────────────────────┤  │
│  │ 🔔  Notifications      [  ]  │  │
│  ├��──────────────────────────────┤  │
│  │ 🔊  Sound            [✓]     │  │
│  └───────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│  🏠    📖    🎯    📊    👤         │
└─────────────────────────────────────┘
```

---

## Motion & Animation

### Principles
1. **Quick and subtle** — 200-300ms, never distracting
2. **Ease-out dominant** — Movements feel natural
3. **Meaningful only** — Animation communicates, not decorates
4. **Reduced motion respected** — Disable when `prefers-reduced-motion`

### Timing Functions

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);     /* Primary ease */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* Symmetric */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Playful moments */
--spring: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy */
```

### Animation Tokens

```css
--duration-instant: 100ms;    /* Hovers, small changes */
--duration-fast: 200ms;        /* Most transitions */
--duration-normal: 300ms;      /* Larger reveals */
--duration-slow: 400ms;        /* Page transitions */
--duration-slower: 600ms;      /* Card flips */
```

### Key Animations

| Element | Property | Duration | Easing | Purpose |
|---------|----------|----------|--------|---------|
| Button press | scale(0.97) | 100ms | ease-out | Feedback |
| Card reveal | opacity + translateY | 300ms | ease-out | Show answer |
| Page enter | opacity + translateY | 400ms | ease-out | Navigation |
| Progress ring | stroke-dashoffset | 800ms | ease-out | Progress |
| Tab switch | opacity | 200ms | ease-out | Navigation |
| Modal appear | scale + opacity | 300ms | ease-out | Dialog |
| Sheet slide | translateY | 400ms | ease-out | Bottom sheet |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Icons

### Style
- SF Symbols aesthetic (rounded, friendly)
- Stroke width: 1.5px - 2px
- Size: 20px (compact), 24px (default), 28px (prominent)
- Always paired with labels in navigation

### Icon Set (Minimal)

| Icon | Usage | SF Symbol |
|------|-------|-----------|
| 🏠 | Home tab | house.fill |
| 📖 | Learn tab | book.fill |
| 🎯 | Practice tab | target |
| 📊 | Progress tab | chart.bar.fill |
| 👤 | Profile tab | person.fill |
| ← | Back | chevron.left |
| → | Forward | chevron.right |
| 🔊 | Audio | speaker.wave.2.fill |
| ✓ | Complete | checkmark |
| 🔥 | Streak | flame.fill |
| ⭐ | Level | star.fill |
| 🔔 | Notifications | bell.fill |
| 🌓 | Dark mode | moon.fill |

---

## Responsive Design

### Breakpoints

```css
/* Mobile first */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

### Layout Patterns

**Mobile (< 768px)**
- Single column
- Cards: full width - 32px
- Bottom tab bar
- Large touch targets (44px minimum)

**Tablet (768px - 1024px)**
- Two-column for lists
- Cards: max 480px
- Top navigation option
- Larger fonts (+10%)

**Desktop (> 1024px)**
- Centered content (max 640px)
- Optional side panel for stats
- Top navigation
- Hover states enabled

### Content Width

```css
--content-max: 640px;      /* Main content */
--card-max: 480px;         /* Flashcard */
--container-padding: 16px; /* Mobile */
--container-padding: 24px; /* Tablet */
--container-padding: 32px; /* Desktop */
```

---

## Accessibility

### Contrast
- Primary text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Touch targets: 44x44px minimum
- Active areas: clear visual feedback

### Focus Management
- Visible focus ring: 2px offset, accent color
- Focus order: logical, top-to-bottom
- Focus trap in modals
- Skip links on web

### Screen Reader
- Semantic HTML: buttons, headings, lists
- ARIA labels on icon buttons
- Live regions for dynamic content
- Alt text for meaningful images

### Touch
- No hover-dependent functionality
- Long press for context menus
- Swipe for navigation (optional)
- Pull to refresh on lists

---

## Dark Mode Implementation

```css
/* System preference */
@media (prefers-color-scheme: dark) {
  :root {
    /* Switch to dark mode values */
  }
}

/* Manual toggle */
:root.dark {
  /* Dark mode values */
}

:root.light {
  /* Light mode values (default) */
}

/* Smooth transition */
:root {
  transition: background-color 200ms ease-out,
              color 200ms ease-out;
}
```

---

## iOS-Specific

```css
/* Safe area handling */
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);

/* iOS momentum scroll */
overflow-y: scroll;
-webkit-overflow-scrolling: touch;

/* iOS font smoothing */
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

/* iOS input styling */
input, textarea {
  -webkit-appearance: none;
  border-radius: 0;
}
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.0s |
| Time to Interactive | < 2.5s |
| Lighthouse Score | > 95 |
| Bundle Size (initial) | < 150KB |
| Animation FPS | 60fps |
