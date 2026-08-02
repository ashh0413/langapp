/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Implements the SuperMemo 2 algorithm for scheduling review intervals.
 * Each word has an "ease factor" that adjusts based on performance.
 */

export interface ReviewRecord {
  wordId: string;
  easeFactor: number;      // 1.3 to 2.5 (default 2.5)
  interval: number;        // days until next review
  repetitions: number;     // successful review streak
  nextReviewDate: string;  // ISO date string
  lastReviewDate: string;  // ISO date string
}

export interface ReviewQuality {
  quality: 0 | 1 | 2 | 3 | 4 | 5;
  // 0 = complete blackout
  // 1 = wrong but remembered upon seeing
  // 2 = wrong but easy to recall
  // 3 = correct with difficulty
  // 4 = correct with hesitation
  // 5 = perfect response
}

export const QUALITY_LABELS: Record<number, string> = {
  0: 'Blackout',
  1: 'Wrong',
  2: 'Hard',
  3: 'Difficult',
  4: 'Good',
  5: 'Perfect',
};

// Default ease factor for new words
const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;

/**
 * Calculate the next review interval using SM-2 algorithm
 */
export function calculateNextReview(
  record: ReviewRecord,
  quality: number
): ReviewRecord {
  const now = new Date();
  let { easeFactor, interval, repetitions } = record;

  // Update ease factor based on quality
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  const newEaseFactor = Math.max(
    MIN_EASE_FACTOR,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  let newInterval: number;
  let newRepetitions: number;

  if (quality < 3) {
    // Failed review - reset
    newRepetitions = 0;
    newInterval = 1;
  } else {
    // Successful review
    newRepetitions = repetitions + 1;

    if (newRepetitions === 1) {
      newInterval = 1;
    } else if (newRepetitions === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * newEaseFactor);
    }
  }

  // Calculate next review date
  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + newInterval);

  return {
    wordId: record.wordId,
    easeFactor: newEaseFactor,
    interval: newInterval,
    repetitions: newRepetitions,
    nextReviewDate: nextDate.toISOString().split('T')[0],
    lastReviewDate: now.toISOString().split('T')[0],
  };
}

/**
 * Create a new review record for a word
 */
export function createReviewRecord(wordId: string): ReviewRecord {
  const now = new Date().toISOString().split('T')[0];
  return {
    wordId,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
    repetitions: 0,
    nextReviewDate: now, // Due immediately for new words
    lastReviewDate: now,
  };
}

/**
 * Check if a word is due for review
 */
export function isDueForReview(record: ReviewRecord): boolean {
  const today = new Date().toISOString().split('T')[0];
  return record.nextReviewDate <= today;
}

/**
 * Get words due for review from a list of records
 */
export function getDueWords(records: ReviewRecord[]): ReviewRecord[] {
  return records.filter(isDueForReview);
}

/**
 * Map user action to quality score
 */
export function mapActionToQuality(action: 'again' | 'hard' | 'good' | 'easy'): number {
  switch (action) {
    case 'again':
      return 1;
    case 'hard':
      return 3;
    case 'good':
      return 4;
    case 'easy':
      return 5;
  }
}

/**
 * Calculate mastery level based on repetitions and ease factor
 */
export function getMasteryLevel(record: ReviewRecord): 'new' | 'learning' | 'reviewing' | 'mastered' {
  if (record.repetitions === 0) return 'new';
  if (record.repetitions < 3) return 'learning';
  if (record.interval >= 21) return 'mastered';
  return 'reviewing';
}

/**
 * Get statistics for a set of review records
 */
export function getStats(records: ReviewRecord[]) {
  const total = records.length;
  const newCount = records.filter(r => r.repetitions === 0).length;
  const learningCount = records.filter(r => r.repetitions > 0 && r.repetitions < 3).length;
  const reviewingCount = records.filter(r => r.repetitions >= 3 && r.interval < 21).length;
  const masteredCount = records.filter(r => r.interval >= 21).length;

  const today = new Date().toISOString().split('T')[0];
  const dueCount = records.filter(r => r.nextReviewDate <= today).length;

  return {
    total,
    new: newCount,
    learning: learningCount,
    reviewing: reviewingCount,
    mastered: masteredCount,
    dueToday: dueCount,
  };
}
