# French Learning App — Architecture

## Overview

A web-first French language learning app using sentence mining, spaced repetition, and AI-generated audio. Mobile (iOS/Android) planned as phase 2.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Audio | ElevenLabs API |
| SRS Algorithm | SM-2 (custom implementation) |
| State (client) | React Context + localStorage |
| State (server) | Future: Supabase/PostgreSQL |

## Architecture Layers

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home/Landing
│   ├── review/page.tsx     # Review session
│   └── progress/page.tsx   # Progress dashboard
├── components/             # Reusable UI components
│   ├── FlashCard.tsx       # Word/sentence card with flip
│   ├── AudioButton.tsx     # ElevenLabs playback
│   ├── ProgressRing.tsx    # Circular progress indicator
│   ├── ReviewSession.tsx   # Review flow container
│   └── ui/                 # Primitive components
├── lib/                    # Core logic (pure functions)
│   ├── srs.ts              # SM-2 algorithm
│   ├── elevenlabs.ts       # Audio API client
│   ├── vocabulary.ts        # Word/sentence data
│   └── storage.ts          # localStorage persistence
├── hooks/                  # Custom React hooks
│   ├── useReviewSession.ts # Review state machine
│   └── useAudio.ts         # Audio playback hook
├── types/                  # TypeScript type definitions
│   └── index.ts            # Shared types
└── data/                   # Static data
    └── vocabulary.ts       # Word/sentence corpus
```

## Data Model

### Word
```typescript
interface Word {
  id: string;
  french: string;           // The French word
  english: string;          // English translation
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'pronoun' | 'phrase';
  category: string;         // e.g., 'greetings', 'food', 'travel'
  frequency: number;        // 1-100 rank (lower = more common)
  sentences: Sentence[];    // 2-3 contextual examples
}
```

### Sentence
```typescript
interface Sentence {
  french: string;
  english: string;
  audioUrl?: string;       // ElevenLabs-generated
}
```

### ReviewRecord (SRS State)
```typescript
interface ReviewRecord {
  wordId: string;
  easeFactor: number;       // 1.3 - 2.5 (default 2.5)
  interval: number;         // days until next review
  repetitions: number;      // successful streak
  nextReviewDate: string;   // ISO date
  lastReviewDate: string;   // ISO date
}
```

## Key Flows

### New User Flow
1. User lands on home → sees today's lesson count
2. Starts lesson → reviews new words (max 10/session)
3. Each word: see sentence → tap to reveal translation → mark known/learning
4. Session complete → see progress → SRS schedules reviews

### Review Session Flow
1. User opens app → sees "X words due for review"
2. Starts review → sees French sentence
3. Taps audio → hears pronunciation
4. Taps to reveal → sees translation
5. Grades response: Again / Hard / Good / Easy
6. SM-2 updates interval → next card
7. Session ends → summary stats shown

## State Management

### Client State (localStorage)
- `review_records`: Map of wordId → ReviewRecord
- `current_session`: Active review session state
- `user_stats`: Total reviews, streak, etc.

### Future Server State (Phase 2)
- User accounts with Supabase Auth
- Cloud sync of SRS data
- Leaderboards and social features

## API Design (Future)

### Audio Generation
```
POST /api/audio
Body: { text: string, voiceId?: string }
Response: { audioUrl: string }
```

### User Progress Sync
```
POST /api/sync
Body: { records: ReviewRecord[], stats: UserStats }
Response: { success: boolean, lastSync: string }
```

## Security Considerations

- ElevenLabs API key stored in environment variables only
- No sensitive data in localStorage (review data is not PII)
- Future: HTTPS enforced, rate limiting on API routes

## Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90
- Bundle size: < 150KB (initial load)
