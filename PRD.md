# Product Requirements Document — French Learning App

## 1. Concept & Vision

**Apprends** is a French language learning app that feels like a private tutor — immersive, personal, and intelligent. Unlike gamified competitors, it focuses on real-world French through contextual sentence mining, where every word appears in meaningful sentences from day one.

The experience should feel like reading a beautifully designed French novel while a native speaker whispers pronunciation in your ear. Calm, confident, and culturally rich.

---

## 2. Target Users

### Primary Persona
**Name**: Marie, 28
**Background**: Marketing professional, wants to learn French for an upcoming Paris assignment
**Needs**: Flexible learning during commute, wants to sound natural, gets overwhelmed by gamification
**Pain Points**: Duolingo feels childish, flashcard apps feel robotic, doesn't have time for long lessons

### Secondary Persona
**Name**: James, 34
**Background**: Software developer, learning French casually
**Needs**: Wants to understand French documentation and conversations at work
**Pain Points**: Needs pronunciation help, wants efficient use of limited time

### Tertiary Persona
**Name**: Sophie, 19
**Background**: University student, French minor
**Needs**: Supplement classroom learning, wants to improve pronunciation
**Pain Points**: Feels disconnected from native French content

---

## 3. Core Features

### P0 — Must Have (MVP)

#### A. Sentence-Based Vocabulary
- 200+ starter words with 2-3 contextual sentences each
- Words ranked by frequency (most common first)
- Every word appears in full sentences, never in isolation
- Categories: Greetings, Food, Travel, Daily Life, Work, Culture

#### B. Flashcard Review System
- Card shows French sentence (front)
- Tap/click reveals English translation (back)
- 3D flip animation on interaction
- Smooth, satisfying transitions

#### C. Audio Pronunciation (ElevenLabs)
- Native-quality French pronunciation
- Play button on every sentence
- Loading state while audio generates
- Offline fallback (cached audio)

#### D. Spaced Repetition (SM-2)
- Words scheduled using SM-2 algorithm
- New words: introduced 5-10 per session
- Reviews: 3-5 sentences per session
- Intervals grow: 1 day → 6 days → ~30 days → mastery

#### E. Progress Tracking
- Words learned vs. total
- Daily streak counter
- Session completion stats
- Mastery levels: New → Learning → Reviewing → Mastered

### P1 — Should Have (Phase 2)

- Dark mode
- User accounts + cloud sync
- Custom vocabulary lists
- Review analytics and insights
- Cultural notes and tips

### P2 — Nice to Have (Phase 3)

- AI-generated personalized sentences
- Speech recognition for pronunciation practice
- Social features / leaderboards
- Mobile apps (iOS/Android)

---

## 4. User Flows

### Flow 1: First-Time User
1. Land on home screen → see welcome message + "Start Learning" CTA
2. View quick intro modal (optional skip)
3. Begin first lesson → see 5 new words
4. For each word:
   - Read French sentence
   - Tap audio to hear pronunciation
   - Tap to reveal translation
   - Mark as "Learning" or "Known"
5. Complete lesson → see progress summary
6. Return to home → see "Next review in X hours"

### Flow 2: Daily Review
1. Open app → see "X words ready for review"
2. Tap "Start Review" button
3. For each due word:
   - See French sentence
   - Recall meaning in head
   - Tap to reveal translation
   - Grade: Again / Hard / Good / Easy
4. SM-2 updates intervals based on grade
5. Complete session → see stats (accuracy, time, streak)
6. Return to home → see updated schedule

### Flow 3: Exploring Vocabulary
1. Navigate to "Vocabulary" section
2. Browse by category or see all words
3. Tap word → see full detail (all sentences)
4. Play any sentence audio
5. Mark word status manually

---

## 5. Success Metrics

### Engagement
- Daily Active Users (DAU): Target 1000 MAU → 40% DAU/MAU
- Session length: Average 8-12 minutes
- Sessions per week: Target 5+ for retention

### Learning
- Words mastered per week: Target 30-50 new words
- Review accuracy: Target 70%+ "Good" or "Easy" responses
- 30-day retention: Target 60%+ of new users return

### Satisfaction
- App Store rating: Target 4.5+
- Net Promoter Score: Target 50+
- Key feedback: "Feels like a real tutor"

---

## 6. Constraints & Assumptions

### Technical
- Web app runs on modern browsers (Chrome, Safari, Firefox, Edge)
- localStorage used for MVP; Supabase in Phase 2
- ElevenLabs API for audio (cost: ~$0.01/1000 chars)
- Target 3G+ connections; audio cached after first play

### Cognitive
- Maximum 10 new words per session
- Maximum 5 reviews per session
- Total session time: 10-15 minutes recommended
- Interruptible: state persists across page refresh

### Content
- Initial vocabulary: 200 words (top ~1000 most common)
- Each word: 2-3 sentences
- Sentences are real, natural French
- Translations are accurate, not literal

---

## 7. Competitive Positioning

| Feature | Duolingo | Mango | Apprends |
|---------|----------|-------|----------|
| Sentence-first | ❌ | ✅ | ✅ |
| Native audio | ✅ | ✅ | ✅ |
| SM-2 scheduling | ❌ | ✅ | ✅ |
| Calm UX | ❌ | ✅ | ✅ |
| Web-first | ✅ | ❌ | ✅ |
| Free tier | ✅ | ❌ | ✅ |
| Word frequency | ❌ | Partial | ✅ |
| Cultural context | Limited | ✅ | ✅ |

**Differentiation**: Apprends combines Mango's immersive approach with word-frequency prioritization and a calmer, adult-friendly UX. No gamification noise — just learning.

---

## 8. Roadmap

### Phase 1 (MVP — 2 weeks)
- [ ] Core vocabulary (200 words)
- [ ] Flashcard UI with flip animation
- [ ] ElevenLabs audio integration
- [ ] SM-2 algorithm implementation
- [ ] Basic progress tracking
- [ ] localStorage persistence

### Phase 2 (Polish — 1 week)
- [ ] Dark mode
- [ ] Mobile responsiveness improvements
- [ ] Performance optimization
- [ ] Bug fixes and UX polish

### Phase 3 (Cloud — 2 weeks)
- [ ] User authentication (Supabase)
- [ ] Cloud sync across devices
- [ ] Review analytics dashboard
- [ ] Custom vocabulary lists

### Phase 4 (Mobile — 3 weeks)
- [ ] iOS app (React Native)
- [ ] Android app (React Native)
- [ ] Push notifications for reviews

---

## 9. Glossary

- **SRS**: Spaced Repetition System — scheduling reviews based on forgetting curves
- **SM-2**: SuperMemo 2 — the algorithm used for interval calculation
- **Sentence Mining**: Finding real sentences from native content to learn vocabulary
- **Word Frequency**: How often a word appears in real-world usage (Zipf's law)
- **Ease Factor**: A number (1.3-2.5) that adjusts review intervals based on performance
- **Mastery**: When a word has an interval of 21+ days
