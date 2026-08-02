'use client';

import { useState, useCallback, useEffect } from 'react';
import type { VocabWord } from '@/data/vocabulary';
import type { ReviewSession, GradeQuality } from '@/types';
import { calculateNextReview, createReviewRecord, getDueWords, getMasteryLevel } from '@/lib/srs';
import { saveReviewRecord, loadReviewRecords, saveUserStats, loadUserStats } from '@/lib/storage';

interface UseReviewSessionReturn {
  session: ReviewSession | null;
  isLoading: boolean;
  stats: {
    dueCount: number;
    learnedCount: number;
    streakDays: number;
  };
  startSession: (mode: 'review' | 'learn') => void;
  revealCard: () => void;
  gradeCard: (quality: GradeQuality) => void;
  endSession: () => void;
}

export function useReviewSession(): UseReviewSessionReturn {
  const [session, setSession] = useState<ReviewSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({ dueCount: 0, learnedCount: 0, streakDays: 0 });

  // Load stats on mount
  useEffect(() => {
    const records = loadReviewRecords();
    const userStats = loadUserStats();

    const dueWords = getDueWords([], records);

    setStats({
      dueCount: dueWords.length,
      learnedCount: Object.keys(records).length,
      streakDays: userStats.streakDays,
    });
    setIsLoading(false);
  }, []);

  const startSession = useCallback((mode: 'review' | 'learn') => {
    setIsLoading(true);

    const records = loadReviewRecords();
    const allWords: VocabWord[] = [];

    // Import vocabulary dynamically to avoid circular deps
    import('@/data/vocabulary').then(({ vocabulary }) => {
      if (mode === 'review') {
        // Get due words
        const dueIds = getDueWords(vocabulary, records);
        const dueWords = vocabulary.filter(w => dueIds.includes(w.id));
        allWords.push(...dueWords);
      } else {
        // Learn new words
        const learnedIds = new Set(Object.keys(records));
        const newWords = vocabulary.filter(w => !learnedIds.has(w.id));
        allWords.push(...newWords.slice(0, 10)); // Max 10 new words
      }

      // Shuffle and limit
      const shuffled = allWords.sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 15); // Max 15 per session

      setSession({
        words: selected,
        currentIndex: 0,
        isRevealed: false,
        isComplete: false,
        correctCount: 0,
        incorrectCount: 0,
      });
      setIsLoading(false);
    });
  }, []);

  const revealCard = useCallback(() => {
    setSession(prev => prev ? { ...prev, isRevealed: true } : null);
  }, []);

  const gradeCard = useCallback((quality: GradeQuality) => {
    setSession(prev => {
      if (!prev || prev.isComplete) return prev;

      const currentWord = prev.words[prev.currentIndex];
      const records = loadReviewRecords();

      // Get or create review record
      const existingRecord = records[currentWord.id];
      const record = existingRecord
        ? calculateNextReview(existingRecord, quality)
        : createReviewRecord(currentWord.id, quality);

      // Save record
      saveReviewRecord(record);

      // Update user stats
      const userStats = loadUserStats();
      userStats.totalReviews += 1;

      // Update streak
      const today = new Date().toISOString().split('T')[0];
      if (userStats.lastActiveDate !== today) {
        const lastDate = userStats.lastActiveDate ? new Date(userStats.lastActiveDate) : null;
        const todayDate = new Date(today);

        if (lastDate) {
          const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            userStats.streakDays += 1;
          } else if (diffDays > 1) {
            userStats.streakDays = 1;
          }
        } else {
          userStats.streakDays = 1;
        }
        userStats.lastActiveDate = today;
      }

      saveUserStats(userStats);

      // Calculate next state
      const newCorrect = quality >= 3 ? prev.correctCount + 1 : prev.correctCount;
      const newIncorrect = quality < 3 ? prev.incorrectCount + 1 : prev.incorrectCount;
      const isLastCard = prev.currentIndex >= prev.words.length - 1;

      return {
        ...prev,
        correctCount: newCorrect,
        incorrectCount: newIncorrect,
        isComplete: isLastCard,
        currentIndex: isLastCard ? prev.currentIndex : prev.currentIndex + 1,
        isRevealed: false,
      };
    });
  }, []);

  const endSession = useCallback(() => {
    setSession(null);
    // Refresh stats
    const records = loadReviewRecords();
    const userStats = loadUserStats();
    const dueWords = getDueWords([], records);

    setStats({
      dueCount: dueWords.length,
      learnedCount: Object.keys(records).length,
      streakDays: userStats.streakDays,
    });
  }, []);

  return {
    session,
    isLoading,
    stats,
    startSession,
    revealCard,
    gradeCard,
    endSession,
  };
}
