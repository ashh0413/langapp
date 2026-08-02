---
name: project-french-learn-app
description: French language learning app — sentence mining, SRS, ElevenLabs audio
metadata:
  type: project
---

# French Learning App — Project Memory

## What It Is
A web-first French language learning app (mobile phase 2) using sentence mining, spaced repetition (SM-2), and ElevenLabs for native-quality pronunciation.

## Tech Stack (Finalized with Sir)
- **Framework**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Animation**: Framer Motion
- **Audio**: ElevenLabs API (sir has given access)
- **SRS**: Custom SM-2 implementation
- **State (P1)**: localStorage
- **State (P3)**: Supabase (planned)

## Design Direction (Updated: Apple-Inspired)
- **Philosophy**: Apple HIG meets French elegance — extremely simple, intuitive, zero manual-reading
- **Color System**: Apple palette — White (#FFFFFF/Off-white #F8F8FA), Blue (#007AFF), Green (#34C759), Orange (#FF9F0A), Red (#FF3B30), Purple (#AF52DE)
- **Typography**: SF Pro system fonts, Georgia/Cormorant for French text, 8pt grid
- **Layout**: Mobile-first, 5-tab bottom nav (Home, Learn, Practice, Progress, Profile)
- **Animation**: Subtle 200-300ms, ease-out dominant, reduced-motion respected
- **Principles**: One action per screen, generous whitespace, progressive disclosure, forgiveness over precision
- **Components**: Cards with 20px radius, 44px touch targets, progress rings, minimal icons + labels

## Core Learning Philosophy (Agreed with Sir)
1. **Sentence mining first** — words in context, never isolated
2. **Word frequency** — top 2-3k words = 80-90% everyday coverage
3. **Sentence formation around words** — 2-3 sentences per word from day one
4. **SM-2 SRS** — reviews on forgetting curves
5. **Cognitive load** — max 5-10 new words + 3-5 reviews per session
6. **Mango UX** — immersive, dialogue-based, cultural context

## Vocabulary Strategy
- 200-300 starter words with 2-3 sentences each
- Categories: greetings, food, travel, daily life, work, culture
- Frequency-ranked: most common words first
- Real, natural French sentences (not machine translated)

## Phases (Defined with Sir)
1. **MVP Core (Week 1-2)**: Vocabulary, flashcards, audio, SRS, basic progress
2. **Polish (Week 3)**: Dark mode, animations, performance
3. **Cloud Sync (Week 4-5)**: Supabase auth, cloud sync, analytics
4. **Mobile (Week 6-8)**: React Native iOS/Android

## What Sir Asked For
- Working prototype runnable with `npm run dev`
- Complete vocabulary dataset
- SM-2 algorithm working
- Core UI: flashcard (flip), audio button, known/learning buttons, review screen, progress screen
- Mobile-first responsive
- Clean, modern, Mango Languages immersive style

## Architecture Files Created
- `ARCHITECTURE.md` — System design, data models, flows
- `DESIGN.md` — Visual spec, colors, typography, components, animations
- `PRD.md` — Product requirements, user personas, success metrics
- `PHASES.md` — Implementation roadmap with deliverables
- `RULES.md` — Project-specific coding conventions

## Key Files Needed (To Build)
- `src/data/vocabulary.ts` — 200 starter words + sentences
- `src/lib/srs.ts` — SM-2 algorithm (created)
- `src/lib/elevenlabs.ts` — Audio API client
- `src/lib/storage.ts` — localStorage persistence
- `src/components/` — FlashCard, AudioButton, ProgressRing, GradeButtons
- `src/app/page.tsx` — Home screen
- `src/app/review/page.tsx` — Review session
- `src/app/progress/page.tsx` — Progress dashboard

## Dependencies Installed
- `next@16.2.12`
- `react@19.2.4`
- `react-dom@19.2.4`
- `tailwindcss@4`
- `framer-motion@12.43.0`
- TypeScript, ESLint (dev)
