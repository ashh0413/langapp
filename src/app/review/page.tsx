'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FlashCard } from '@/components/FlashCard';
import { GradeButtons } from '@/components/GradeButtons';
import { BottomNav } from '@/components/BottomNav';
import { ProgressRing } from '@/components/ProgressRing';
import { vocabulary } from '@/data/vocabulary';
import { loadReviewRecords, saveReviewRecord, saveUserStats, loadUserStats } from '@/lib/storage';
import { calculateNextReview, createReviewRecord, getDueWords, getMasteryLevel } from '@/lib/srs';
import type { VocabWord } from '@/data/vocabulary';
import type { GradeQuality, MasteryLevel } from '@/types';

type SessionState = 'loading' | 'ready' | 'reviewing' | 'complete';

export default function ReviewPage() {
  const [sessionState, setSessionState] = useState<SessionState>('loading');
  const [words, setWords] = useState<VocabWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [masteryLevels, setMasteryLevels] = useState<Record<string, MasteryLevel>>({});

  // Load due words on mount
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const records = loadReviewRecords();
      const dueIds = getDueWords(vocabulary, records);
      const dueWords = vocabulary.filter(word => dueIds.includes(word.id)).slice(0, 10);
      const levels = Object.fromEntries(
        dueWords.map(word => [word.id, getMasteryLevel(records[word.id])]),
      ) as Record<string, MasteryLevel>;

      setWords(dueWords);
      setMasteryLevels(levels);
      setSessionState(dueWords.length > 0 ? 'ready' : 'complete');
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const startReview = useCallback(() => {
    setSessionState('reviewing');
    setCurrentIndex(0);
    setIsRevealed(false);
    setCorrectCount(0);
    setIncorrectCount(0);
  }, []);

  const handleReveal = useCallback(() => {
    setIsRevealed(true);
  }, []);

  const handleGrade = useCallback((quality: GradeQuality) => {
    const word = words[currentIndex];
    const records = loadReviewRecords();
    const existingRecord = records[word.id];

    // Calculate next review
    const currentRecord = existingRecord || createReviewRecord(word.id);
    const updatedRecord = calculateNextReview(currentRecord, quality);

    // Save the updated record
    saveReviewRecord(updatedRecord);

    // Update stats
    const userStats = loadUserStats();
    userStats.totalReviews += 1;
    userStats.lastActiveDate = new Date().toISOString().split('T')[0];
    saveUserStats(userStats);

    // Track correct/incorrect
    if (quality >= 3) {
      setCorrectCount(c => c + 1);
    } else {
      setIncorrectCount(c => c + 1);
    }

    // Move to next word or complete
    if (currentIndex < words.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsRevealed(false);
    } else {
      setSessionState('complete');
    }
  }, [currentIndex, words]);

  const currentWord = words[currentIndex];
  const currentMastery = currentWord ? masteryLevels[currentWord.id] : 'new';
  const progress = words.length > 0 ? ((currentIndex) / words.length) * 100 : 0;

  // Loading state
  if (sessionState === 'loading') {
    return (
      <div className="app-shell min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[var(--text-secondary)]">Loading...</p>
        </div>
      </div>
    );
  }

  // Ready state - show how many words to review
  if (sessionState === 'ready') {
    return (
      <div className="app-shell min-h-screen bg-[var(--bg-primary)] pb-24">
        <header className="px-6 pt-12 pb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back</span>
          </Link>
          <h1 className="text-2xl font-semibold text-[var(--text-primary)]">Practice Review</h1>
        </header>

        <main className="px-6">
          <div className="bg-[var(--bg-tertiary)] rounded-3xl p-8 text-center">
            <ProgressRing progress={0} size={120} strokeWidth={8} color="blue" showLabel={false} />
            <div className="mt-6">
              <p className="text-4xl font-bold text-[var(--text-primary)] mb-2">{words.length}</p>
              <p className="text-[var(--text-secondary)]">words ready for review</p>
            </div>
            <div className="mt-8 space-y-3">
              <button
                onClick={startReview}
                className="w-full bg-[var(--accent)] text-white font-semibold py-4 rounded-2xl hover:bg-[var(--accent-light)] transition-colors"
              >
                Start Review
              </button>
              <p className="text-sm text-[var(--text-tertiary)]">
                Takes about {words.length * 0.5} minutes
              </p>
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  // Complete state - show summary
  if (sessionState === 'complete') {
    const totalAnswered = correctCount + incorrectCount;
    const accuracy = totalAnswered > 0 ? (correctCount / totalAnswered) * 100 : 0;

    return (
      <div className="app-shell min-h-screen bg-[var(--bg-primary)] pb-24">
        <header className="px-6 pt-12 pb-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--success-bg)] flex items-center justify-center"
          >
            <svg className="w-10 h-10 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
            {words.length === 0 ? "You're all caught up!" : 'Session Complete!'}
          </h1>
          <p className="text-[var(--text-secondary)]">
            {words.length === 0
              ? 'No reviews due right now. Check back later or learn something new.'
              : `Great job! You reviewed ${words.length} words.`}
          </p>
        </header>

        {totalAnswered > 0 && (
          <main className="px-6">
            <div className="bg-[var(--bg-tertiary)] rounded-3xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[var(--success)]">{correctCount}</p>
                  <p className="text-sm text-[var(--text-secondary)]">Correct</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--error)]">{incorrectCount}</p>
                  <p className="text-sm text-[var(--text-secondary)]">To review</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-secondary)]">Accuracy</span>
                  <span className="font-semibold text-[var(--text-primary)]">{Math.round(accuracy)}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/learn"
                className="block w-full bg-[var(--accent)] text-white font-semibold py-4 rounded-2xl text-center hover:bg-[var(--accent-light)] transition-colors"
              >
                Learn New Words
              </Link>
              <Link
                href="/"
                className="block w-full bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-semibold py-4 rounded-2xl text-center hover:bg-[var(--border)] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </main>
        )}

        {totalAnswered === 0 && words.length === 0 && (
          <main className="px-6">
            <Link
              href="/learn"
              className="block w-full bg-[var(--accent)] text-white font-semibold py-4 rounded-2xl text-center hover:bg-[var(--accent-light)] transition-colors"
            >
              Learn New Words
            </Link>
          </main>
        )}

        <BottomNav />
      </div>
    );
  }

  // Reviewing state
  return (
    <div className="app-shell min-h-screen bg-[var(--bg-primary)] pb-24">
      {/* Header with progress */}
      <header className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="text-[var(--text-secondary)]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <span className="text-sm text-[var(--text-secondary)]">
            {currentIndex + 1} / {words.length}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            currentMastery === 'new' ? 'bg-[var(--purple-bg)] text-[var(--purple)]' :
            currentMastery === 'learning' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' :
            'bg-[var(--success-bg)] text-[var(--success)]'
          }`}>
            {currentMastery}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--accent)] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </header>

      {/* Card */}
      <main className="px-6 py-4">
        <AnimatePresence mode="wait">
          {currentWord && (
            <motion.div
              key={currentWord.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
            >
              <FlashCard
                word={currentWord}
                isRevealed={isRevealed}
                onReveal={handleReveal}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Grade buttons (shown after reveal) */}
      <div className="px-6 mt-6">
        <AnimatePresence>
          {isRevealed && currentWord && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Show translation when revealed */}
              <div className="mb-6 text-center">
                <p className="text-lg text-[var(--text-secondary)] mb-2">
                  How well did you know this?
                </p>
              </div>
              <GradeButtons onGrade={handleGrade} />
            </motion.div>
          )}
        </AnimatePresence>

        {!isRevealed && (
          <p className="text-center text-[var(--text-tertiary)] text-sm">
            Tap the card to reveal the answer
          </p>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
