// ============================================
// French Learning App — localStorage Utilities
// ============================================

import type { ReviewRecord, UserStats } from '@/types';
import { STORAGE_KEYS } from '@/types';

// Default user stats for new users
const DEFAULT_USER_STATS: UserStats = {
  totalWordsLearned: 0,
  totalReviews: 0,
  streakDays: 0,
  lastActiveDate: '',
  joinedDate: new Date().toISOString().split('T')[0],
};

// Get item from localStorage with JSON parsing
function getItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;

  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    return JSON.parse(item) as T;
  } catch {
    return defaultValue;
  }
}

// Set item to localStorage with JSON stringify
function setItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save to localStorage: ${key}`, error);
  }
}

// ============================================
// Review Records
// ============================================

export function loadReviewRecords(): Record<string, ReviewRecord> {
  return getItem(STORAGE_KEYS.REVIEW_RECORDS, {});
}

export function saveReviewRecords(records: Record<string, ReviewRecord>): void {
  setItem(STORAGE_KEYS.REVIEW_RECORDS, records);
}

export function getReviewRecord(wordId: string): ReviewRecord | null {
  const records = loadReviewRecords();
  return records[wordId] ?? null;
}

export function saveReviewRecord(record: ReviewRecord): void {
  const records = loadReviewRecords();
  records[record.wordId] = record;
  saveReviewRecords(records);
}

// ============================================
// User Stats
// ============================================

export function loadUserStats(): UserStats {
  const stats = getItem<UserStats>(STORAGE_KEYS.USER_STATS, DEFAULT_USER_STATS);

  // Check if it's a new day for streak calculation
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  // If last active was before yesterday, reset streak
  if (stats.lastActiveDate && stats.lastActiveDate < yesterday) {
    stats.streakDays = 0;
  }

  return stats;
}

export function saveUserStats(stats: UserStats): void {
  setItem(STORAGE_KEYS.USER_STATS, stats);
}

export function updateStreak(): UserStats {
  const stats = loadUserStats();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  // If already active today, no change
  if (stats.lastActiveDate === today) {
    return stats;
  }

  // If active yesterday, increment streak
  if (stats.lastActiveDate === yesterday) {
    stats.streakDays += 1;
  } else if (stats.lastActiveDate !== today) {
    // First day or streak broken, start at 1
    stats.streakDays = 1;
  }

  stats.lastActiveDate = today;
  saveUserStats(stats);

  return stats;
}

export function incrementWordsLearned(): void {
  const stats = loadUserStats();
  stats.totalWordsLearned += 1;
  saveUserStats(stats);
}

export function incrementReviews(): void {
  const stats = loadUserStats();
  stats.totalReviews += 1;
  saveUserStats(stats);
}

// ============================================
// Theme
// ============================================

export type Theme = 'light' | 'dark' | 'system';

export function loadTheme(): Theme {
  return getItem<Theme>(STORAGE_KEYS.THEME, 'system');
}

export function saveTheme(theme: Theme): void {
  setItem(STORAGE_KEYS.THEME, theme);
}

// ============================================
// Audio Cache
// ============================================

interface AudioCache {
  [text: string]: string; // text -> base64 audio or blob URL
}

export function loadAudioCache(): AudioCache {
  return getItem<AudioCache>(STORAGE_KEYS.AUDIO_CACHE, {});
}

export function saveAudioToCache(text: string, audioUrl: string): void {
  const cache = loadAudioCache();
  cache[text] = audioUrl;
  setItem(STORAGE_KEYS.AUDIO_CACHE, cache);
}

export function getCachedAudio(text: string): string | null {
  const cache = loadAudioCache();
  return cache[text] ?? null;
}

// ============================================
// Clear All Data (for testing/reset)
// ============================================

export function clearAllData(): void {
  if (typeof window === 'undefined') return;

  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}
