# Implementation Phases — French Learning App

## Overview

Development is broken into 4 phases. Each phase delivers a working, shippable product.

---

## Phase 1: MVP Core (Week 1-2)

### Goal
A fully functional web app with sentence-based vocabulary, flashcards, audio, and SRS.

### Deliverables

#### 1. Data Layer
- [ ] `src/data/vocabulary.ts` — 200 French words with sentences
  - Structure: id, french, english, partOfSpeech, category, frequency, sentences[]
  - Categories: greetings, food, travel, daily, work, culture
  - Each word has 2-3 contextual sentences (FR + EN)
- [ ] `src/lib/types.ts` — TypeScript interfaces for all data models

#### 2. SRS Engine
- [ ] `src/lib/srs.ts` — SM-2 algorithm implementation
  - `calculateNextReview()` — computes new interval
  - `createReviewRecord()` — initializes new word
  - `isDueForReview()` — checks if word needs review
  - `getStats()` — aggregates progress statistics
- [ ] `src/lib/storage.ts` — localStorage persistence layer
  - `saveRecords()` / `loadRecords()`
  - `saveStats()` / `loadStats()`

#### 3. Components
- [ ] `FlashCard.tsx` — Card with flip animation
  - Front: French sentence + audio button
  - Back: Translation + grading buttons
  - 3D CSS transform flip (600ms)
- [ ] `AudioButton.tsx` — ElevenLabs integration
  - Play/pause states
  - Loading spinner
  - Error state with retry
- [ ] `ProgressRing.tsx` — Circular progress indicator
  - Animated SVG
  - Percentage label
- [ ] `GradeButtons.tsx` — Again/Hard/Good/Easy
  - Color-coded
  - Responsive layout
  - Touch-friendly sizing

#### 4. Pages
- [ ] `app/page.tsx` — Home screen
  - Welcome message
  - Today's stats (due, learned, streak)
  - "Start Learning" / "Review" buttons
- [ ] `app/review/page.tsx` — Review session
  - Session state machine
  - Card display
  - Progress bar
  - Session summary
- [ ] `app/progress/page.tsx` — Progress dashboard
  - Words by mastery level
  - Streak calendar
  - Category breakdown

#### 5. Infrastructure
- [ ] `src/lib/elevenlabs.ts` — API client
  - Text-to-speech endpoint
  - Audio caching
- [ ] Global styles (Tailwind + custom properties)
- [ ] Layout with navigation

### Exit Criteria
- [ ] Can learn 5 new words in one session
- [ ] Can review due words with grading
- [ ] Audio plays for each sentence
- [ ] Progress persists across page refresh
- [ ] Works on mobile (375px+) and desktop

---

## Phase 2: Polish & Dark Mode (Week 3)

### Goal
Refine UX, add dark mode, fix bugs, optimize performance.

### Deliverables

#### UI/UX Polish
- [ ] Dark mode toggle
  - System preference detection
  - Manual toggle
  - Smooth transition between modes
- [ ] Animation improvements
  - Reduced motion support
  - Performance optimization
  - Staggered reveals
- [ ] Micro-interactions
  - Button press feedback
  - Card hover states
  - Audio waveform animation
- [ ] Empty states
  - No words due: encouraging message
  - All mastered: celebration
- [ ] Loading states
  - Skeleton screens
  - Progressive loading

#### Performance
- [ ] Bundle optimization
  - Dynamic imports for ElevenLabs SDK
  - Code splitting by route
- [ ] Audio caching
  - Cache fetched audio in localStorage
  - Preload next card audio
- [ ] Lighthouse score > 90

#### Bug Fixes
- [ ] Fix any critical bugs from Phase 1
- [ ] Edge cases: empty vocabulary, corrupt storage
- [ ] Mobile Safari audio issues
- [ ] Keyboard navigation

### Exit Criteria
- [ ] Dark mode fully functional
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Lighthouse Performance > 90
- [ ] No critical bugs

---

## Phase 3: Cloud & Analytics (Week 4-5)

### Goal
Add user accounts, cloud sync, and analytics.

### Deliverables

#### Authentication
- [ ] Supabase Auth integration
  - Email/password sign up
  - Google OAuth
  - Password reset
- [ ] Auth context and protected routes

#### Cloud Sync
- [ ] Sync service
  - Push localStorage to cloud
  - Pull cloud data on login
  - Conflict resolution (last-write-wins)
- [ ] Sync status indicator
  - Synced ✓
  - Syncing...
  - Offline (queued)

#### Analytics
- [ ] `app/progress/page.tsx` — Enhanced dashboard
  - Review accuracy over time
  - Time spent learning
  - Words by category chart
  - Streak history
- [ ] Session analytics
  - Cards reviewed per session
  - Average accuracy
  - Time per card

### Exit Criteria
- [ ] Users can create accounts
- [ ] Data syncs across devices
- [ ] Progress visible on dashboard
- [ ] Works offline with queue

---

## Phase 4: Mobile Apps (Week 6-8)

### Goal
Native iOS and Android apps via React Native.

### Deliverables

#### iOS App
- [ ] React Native project setup
- [ ] Navigation (React Navigation)
- [ ] Native audio playback
- [ ] Push notifications (Expo Notifications)
- [ ] App Store submission

#### Android App
- [ ] React Native project setup
- [ ] Navigation (React Navigation)
- [ ] Native audio playback
- [ ] Push notifications
- [ ] Google Play submission

#### Shared Infrastructure
- [ ] Shared code via monorepo (apps/, packages/)
- [ ] Shared components package
- [ ] Unified API client

### Exit Criteria
- [ ] iOS app on App Store
- [ ] Android app on Play Store
- [ ] Both apps functional

---

## Phase 5: AI Enhancements (Future)

### Goal
Personalized learning with AI.

### Ideas
- AI-generated sentences based on user's known words
- Pronunciation scoring via speech recognition
- Adaptive difficulty adjustment
- Personalized review scheduling
- Conversation practice with AI tutor

---

## Dependencies

```
Phase 1
├── framer-motion (already installed)
├── localStorage wrapper (custom)
└── ElevenLabs SDK

Phase 3
├── @supabase/supabase-js
├── @supabase/auth-helpers
└── chart.js or recharts

Phase 4
├── expo
├── expo-av (audio)
├── expo-notifications
└── react-navigation
```

---

## Timeline Summary

| Phase | Duration | Focus |
|-------|----------|-------|
| 1 | Week 1-2 | MVP Core |
| 2 | Week 3 | Polish + Dark Mode |
| 3 | Week 4-5 | Cloud + Analytics |
| 4 | Week 6-8 | Mobile Apps |

**Total: 8 weeks to full launch**
