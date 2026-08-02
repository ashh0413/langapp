// ============================================
// French Learning App — Type Definitions
// ============================================

// Part of speech types
export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'pronoun'
  | 'phrase';

// Category types
export type Category =
  | 'greetings'
  | 'food'
  | 'travel'
  | 'daily'
  | 'work'
  | 'culture'
  | 'numbers'
  | 'time'
  | 'family'
  | 'emotions';

// Sentence structure with French and English
export interface Sentence {
  french: string;
  english: string;
}

// Word/Vocabulary item
export interface Word {
  id: string;
  french: string;
  english: string;
  partOfSpeech: PartOfSpeech;
  category: Category;
  frequency: number; // 1 = most common
  sentences: Sentence[];
}

// Mastery levels for review
export type MasteryLevel = 'new' | 'learning' | 'reviewing' | 'mastered';

// SM-2 Review Record
export interface ReviewRecord {
  wordId: string;
  easeFactor: number;      // 1.3 to 2.5 (default 2.5)
  interval: number;        // days until next review
  repetitions: number;      // successful review streak
  nextReviewDate: string;   // ISO date string (YYYY-MM-DD)
  lastReviewDate: string;  // ISO date string (YYYY-MM-DD)
}

// User statistics
export interface UserStats {
  totalWordsLearned: number;
  totalReviews: number;
  streakDays: number;
  lastActiveDate: string; // ISO date
  joinedDate: string;      // ISO date
}

// Review session state
export interface ReviewSession {
  words: Word[];
  currentIndex: number;
  isRevealed: boolean;
  isComplete: boolean;
  correctCount: number;
  incorrectCount: number;
}

// Grade quality for SM-2
export type GradeQuality = 1 | 2 | 3 | 4 | 5;

export const GRADE_LABELS: Record<GradeQuality, string> = {
  1: 'Again',
  2: 'Hard',
  3: 'Good',
  4: 'Easy',
  5: 'Easy', // Same as 4 for simplicity
};

// Tab navigation
export type TabId = 'home' | 'learn' | 'practice' | 'progress' | 'profile';

// Storage keys
export const STORAGE_KEYS = {
  REVIEW_RECORDS: 'french-app-review-records',
  USER_STATS: 'french-app-user-stats',
  THEME: 'french-app-theme',
  AUDIO_CACHE: 'french-app-audio-cache',
} as const;
