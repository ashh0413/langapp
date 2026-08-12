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

// Grammar category types for colorization
export type GrammarCategory =
  | 'pronoun'
  | 'verb'
  | 'noun'
  | 'adjective'
  | 'article'
  | 'preposition'
  | 'adverb'
  | 'conjunction'
  | 'phrase'
  | 'other';

// Grammar segment with explicit annotation
export interface GrammarSegment {
  text: string;
  category?: GrammarCategory;
  alignmentId?: string;
}

// Sentence structure with French, English, and grammar annotations
export interface Sentence {
  french: string;
  english: string;        // natural (fluent) English translation
  literal: string;        // readable translation that preserves French structure
  grammar: GrammarSegment[];
  englishGrammar: GrammarSegment[]; // natural English grammar
  literalGrammar: GrammarSegment[];
}

// Translation display mode
export type TranslationMode = 'literal' | 'natural';
export const TRANSLATION_MODE_LABELS: Record<TranslationMode, string> = {
  literal: 'Literal',
  natural: 'Natural',
};

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

// Grade quality (UI domain: 1-4)
// SM-2 algorithm internally uses 0-5, mapped via GRADE_TO_SM2
export type GradeQuality = 1 | 2 | 3 | 4;

export const GRADE_LABELS: Record<GradeQuality, string> = {
  1: 'Again',
  2: 'Hard',
  3: 'Good',
  4: 'Easy',
};

// Map UI grade (1-4) to SM-2 quality (0-5)
export const GRADE_TO_SM2: Record<GradeQuality, number> = {
  1: 1, // Again  → SM-2 1 (wrong)
  2: 2, // Hard   → SM-2 2 (wrong but easy recall)
  3: 4, // Good   → SM-2 4 (correct with hesitation)
  4: 5, // Easy   → SM-2 5 (perfect)
};

// Tab navigation
export type TabId = 'home' | 'learn' | 'practice' | 'progress';

// localStorage keys
export const STORAGE_KEYS = {
  REVIEW_RECORDS: 'french-app-review-records',
  USER_STATS: 'french-app-user-stats',
  SETTINGS: 'french-app-settings',
  THEME: 'french-app-theme',
  AUDIO_CACHE: 'french-app-audio-cache',
} as const;
