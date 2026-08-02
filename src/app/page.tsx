'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BottomNav } from '@/components/BottomNav';
import { ProgressRing } from '@/components/ProgressRing';
import { loadUserStats, loadReviewRecords } from '@/lib/storage';
import { vocabulary } from '@/data/vocabulary';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [stats, setStats] = useState({ wordsLearned: 0, streak: 0, dueToday: 0 });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const userStats = loadUserStats();
      const records = loadReviewRecords();
      const today = new Date().toISOString().split('T')[0];
      const dueCount = Object.values(records).filter(record => record.nextReviewDate <= today).length;

      setStats({
        wordsLearned: Object.keys(records).length,
        streak: userStats.streakDays,
        dueToday: dueCount,
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  // Calculate progress percentage
  const totalWords = vocabulary.length;
  const progressPercent = totalWords > 0 ? (stats.wordsLearned / totalWords) * 100 : 0;

  return (
    <div className="app-shell min-h-screen bg-[var(--bg-primary)] pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--text-secondary)] text-sm mb-1">Bonjour</p>
          <h1 className="text-3xl font-semibold text-[var(--text-primary)]">
            Ready to learn?
          </h1>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="px-6 space-y-6">
        {/* Daily Goal Card */}
        <motion.div
          className="bg-gradient-to-br from-[var(--accent)] to-[#0056B3] rounded-3xl p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-1">Daily Practice</h2>
              <p className="text-white/80 text-sm mb-4">
                {stats.dueToday > 0
                  ? `${stats.dueToday} words waiting for review`
                  : 'All caught up! Learn something new'}
              </p>
              <Link
                href={stats.dueToday > 0 ? '/review' : '/learn'}
                className="inline-flex items-center gap-2 bg-white text-[var(--accent)] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-colors"
              >
                {stats.dueToday > 0 ? 'Start Review' : 'Learn New'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <ProgressRing
              progress={progressPercent}
              size={80}
              strokeWidth={6}
              color="white"
              showLabel={false}
            />
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Words Learned */}
          <div className="bg-[var(--bg-tertiary)] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-bg)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <span className="text-[var(--text-secondary)] text-sm">Words</span>
            </div>
            <p className="text-2xl font-semibold text-[var(--text-primary)]">
              {stats.wordsLearned}
              <span className="text-sm font-normal text-[var(--text-tertiary)] ml-1">/ {totalWords}</span>
            </p>
          </div>

          {/* Streak */}
          <div className="bg-[var(--bg-tertiary)] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--warning-bg)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
              <span className="text-[var(--text-secondary)] text-sm">Streak</span>
            </div>
            <p className="text-2xl font-semibold text-[var(--text-primary)]">
              {stats.streak}
              <span className="text-sm font-normal text-[var(--text-tertiary)] ml-1">days</span>
            </p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Continue</h2>

          <Link
            href="/learn"
            className="flex items-center gap-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-4 hover:border-[var(--accent)] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[var(--text-primary)]">Learn New Words</h3>
              <p className="text-sm text-[var(--text-secondary)]">Start with the most useful vocabulary</p>
            </div>
            <svg className="w-5 h-5 text-[var(--text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/review"
            className="flex items-center gap-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-4 hover:border-[var(--accent)] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--success-bg)] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[var(--text-primary)]">Practice Review</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {stats.dueToday > 0 ? `${stats.dueToday} words due` : 'No reviews due today'}
              </p>
            </div>
            <svg className="w-5 h-5 text-[var(--text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}
