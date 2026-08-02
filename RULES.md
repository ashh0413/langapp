# Development Rules — French Learning App

## Purpose

This file captures project-specific conventions that supplement the global ECC rules.

---

## 1. Code Organization

### File Structure
```
src/
├── app/              # Next.js App Router (pages)
├── components/        # Reusable React components
│   ├── FlashCard.tsx
│   ├── AudioButton.tsx
│   └── ui/           # Primitive components
├── lib/              # Pure logic (no React)
│   ├── srs.ts
│   ├── elevenlabs.ts
│   └── storage.ts
├── hooks/            # Custom React hooks
├── types/            # TypeScript types
└── data/             # Static data
```

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `FlashCard.tsx` |
| Hooks | camelCase + `use` prefix | `useReviewSession.ts` |
| Utilities | camelCase | `calculateSRS.ts` |
| Types | PascalCase | `ReviewRecord` |
| Constants | UPPER_SNAKE_CASE | `MAX_NEW_WORDS` |
| CSS Variables | kebab-case | `--color-primary` |

---

## 2. Component Rules

### Component Structure
```typescript
// 1. Imports
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

// 2. Types (if local)
interface CardProps {
  word: Word;
  onGrade: (quality: number) => void;
}

// 3. Component
export function FlashCard({ word, onGrade }: CardProps) {
  // 4. Hooks
  const [isFlipped, setIsFlipped] = useState(false);
  
  // 5. Callbacks
  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);
  
  // 6. Render
  return (
    <motion.div
      onClick={handleFlip}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
    >
      {isFlipped ? <Back /> : <Front />}
    </motion.div>
  );
}
```

### Component Checklist
- [ ] Props are typed
- [ ] No prop drilling > 2 levels (use context)
- [ ] Extract logic to hooks
- [ ] Extract presentational components
- [ ] Animation via Framer Motion, not inline styles

---

## 3. State Management

### localStorage Rules
- Always use the `storage.ts` abstraction
- Validate data on load (handle corruption)
- Provide defaults for missing keys
- Debounce saves (500ms)

```typescript
// ✅ Good
const records = loadRecords() ?? {};

// ❌ Bad
const records = JSON.parse(localStorage.getItem('records') || '{}');
```

### State Patterns
| Concern | Solution |
|---------|----------|
| Review session | React Context |
| Theme | CSS custom properties + context |
| Vocabulary | Static data (import) |
| User progress | localStorage (Phase 1) |

---

## 4. API Integration

### ElevenLabs
- API key in `.env.local` only (never committed)
- Base URL configurable via env var
- Cache audio after first fetch
- Handle rate limits gracefully

```typescript
// ✅ Good
const audio = await getAudio(text);
if (!audio) showFallback();

// ❌ Bad
const response = await fetch(`https://api.elevenlabs.io/${text}`);
```

### Error Handling
- Audio failures: show fallback message, log error
- Never crash the app due to audio issues
- Retry once, then show error state

---

## 5. Animation Standards

### Framer Motion Usage
- Use `motion.` variants over inline CSS
- Define animation variants at top of file
- Use `AnimatePresence` for mount/unmount
- Respect `prefers-reduced-motion`

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};

// In component
<motion.div
  variants={variants}
  initial="hidden"
  animate={reducedMotion ? "visible" : "hidden"}
>
```

### Animation Durations
| Type | Duration |
|------|----------|
| Micro (hover, press) | 100-150ms |
| Reveal (fade, slide) | 200-300ms |
| Flip | 500-600ms |
| Page transition | 300-400ms |

---

## 6. Performance

### Bundle Optimization
- Dynamic import ElevenLabs SDK
- Dynamic import charts for progress page
- Use `next/font` for typography

### React Optimization
- Memoize expensive components
- Use `useCallback` for event handlers passed to children
- Virtualize long lists (if needed)

### Audio Optimization
- Preload next card audio
- Cache fetched audio in localStorage
- Lazy load audio component

---

## 7. Testing

### Unit Tests
- SRS algorithm: 100% coverage
- Storage utilities: 100% coverage
- Utility functions: 100% coverage

### Component Tests
- Test render with different props
- Test interaction (click, tap)
- Test animation states
- Test accessibility

### E2E Tests (Playwright)
- Complete review session flow
- Home → Review → Complete
- Dark mode toggle

---

## 8. Accessibility

### Requirements
- All interactive elements focusable
- ARIA labels on buttons
- Color contrast 4.5:1 minimum
- Screen reader announcements for state changes
- Keyboard navigation for grading

### Testing
- `axe-core` automated checks
- Manual keyboard testing
- VoiceOver / NVDA testing

---

## 9. Git Workflow

### Branch Naming
```
feature/add-flashcard-component
feature/srs-algorithm
fix/audio-playback-error
chore/update-vocabulary
```

### Commit Format
```
feat: add flashcard component with flip animation
fix: handle audio playback errors gracefully
chore: add 50 more vocabulary words
docs: update README with setup instructions
refactor: extract audio logic to custom hook
```

### PR Requirements
- Must pass lint + type check
- Must have tests for new logic
- Must have tested manually on mobile
- Code review by project lead (sir)

---

## 10. Code Review Checklist

Before requesting review:

- [ ] No `console.log` left in code
- [ ] No hardcoded values (use constants)
- [ ] No commented-out code
- [ ] Components are < 200 lines
- [ ] Functions are < 50 lines
- [ ] Types are defined (no `any`)
- [ ] Error states are handled
- [ ] Loading states are visible
- [ ] Accessibility attributes present

---

## 11. Environment Variables

Create `.env.local` (never commit):
```bash
# ElevenLabs
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_VOICE_ID=your_voice_id_here
```

Reference in code:
```typescript
const apiKey = process.env.ELEVENLABS_API_KEY;
```

---

## 12. Monitoring & Debugging

### Logging
- Use `console.warn` for recoverable issues
- Use `console.error` for failures
- Never log PII or user data

### Analytics (Phase 3)
- Track: sessions, cards reviewed, accuracy
- Don't track: translations, personal data

---

## 13. Security

### Client-Side Only
- No sensitive data in localStorage
- No authentication in Phase 1
- API keys never in client bundle

### Phase 3+
- All API routes authenticated
- User data encrypted at rest
- HTTPS enforced
