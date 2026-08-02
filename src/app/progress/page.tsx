'use client';

import { motion } from 'framer-motion';
import { BottomNav } from '@/components/BottomNav';
import { ProgressRing } from '@/components/ProgressRing';
import { loadUserStats, loadReviewRecords } from '@/lib/storage';
import { vocabulary } from '@/data/vocabulary';
import { useEffect, useState } from 'react';
import { getMasteryLevel } from '@/lib/srs';
import type { MasteryLevel } from '@/types';

interface CategoryStat {
  category: string;
  total: number;
  learned: number;
  percent: number;
}

interface MasteryStat {
  level: MasteryLevel;
  label: string;
  color: string;
  count: number;
  percent: number;
}

export default function ProgressPage() {
  const [stats, setStats] = useState({
    totalLearned: 0,
    totalReviewed: 0,
    streakDays: 0,
    joinedDate: '',
  });
  const [categoryStats, setCategoryStats] = useState<CategoryStat[]>([]);
  const [masteryStats, setMasteryStats] = useState<MasteryStat[]>([]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const userStats = loadUserStats();
      const records = loadReviewRecords();

    // Total learned
    const totalLearned = Object.keys(records).length;

    // Mastery breakdown
    const masteryCounts: Record<MasteryLevel, number> = {
      new: vocabulary.filter(w => !records[w.id]).length,
      learning: 0,
      reviewing: 0,
      mastered: 0,
    };

    Object.values(records).forEach(record => {
      const level = getMasteryLevel(record);
      masteryCounts[level]++;
    });

    const masteryTotal = vocabulary.length;
    const masteryConfig: Record<MasteryLevel, { label: string; color: string }> = {
      new: { label: 'New', color: '#8E8E93' },
      learning: { label: 'Learning', color: '#FF9F0A' },
      reviewing: { label: 'Reviewing', color: '#007AFF' },
      mastered: { label: 'Mastered', color: '#34C759' },
    };

    const mastery: MasteryStat[] = Object.entries(masteryCounts).map(([level, count]) => ({
      level: level as MasteryLevel,
      label: masteryConfig[level as MasteryLevel].label,
      color: masteryConfig[level as MasteryLevel].color,
      count,
      percent: Math.round((count / masteryTotal) * 100),
    }));

    // Category breakdown
    const categories = ['greetings', 'courtesy', 'basics', 'verbs', 'food', 'travel', 'daily', 'family', 'time', 'numbers'];
    const categoryData: CategoryStat[] = categories.map(cat => {
      const catWords = vocabulary.filter(w => w.category === cat);
      const learnedInCat = catWords.filter(w => records[w.id]).length;
      return {
        category: cat,
        total: catWords.length,
        learned: learnedInCat,
        percent: catWords.length > 0 ? Math.round((learnedInCat / catWords.length) * 100) : 0,
      };
    }).filter(c => c.total > 0);

      setStats({
        totalLearned,
        totalReviewed: userStats.totalReviews,
        streakDays: userStats.streakDays,
        joinedDate: userStats.joinedDate,
      });
      setCategoryStats(categoryData);
      setMasteryStats(mastery);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const overallProgress = vocabulary.length > 0
    ? Math.round((stats.totalLearned / vocabulary.length) * 100)
    : 0;

  return (
    <div className="app-shell min-h-screen bg-[var(--bg-primary)] pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <motion.h1
          className="text-3xl font-semibold text-[var(--text-primary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Progress
        </motion.h1>
      </header>

      <main className="px-6 space-y-8">
        {/* Overall Progress Card */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-6">
            <ProgressRing
              progress={overallProgress}
              size={100}
              strokeWidth={8}
              color="blue"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                {stats.totalLearned} of {vocabulary.length} words
              </h2>
              <p className="text-[var(--text-secondary)] text-sm">
                Keep going! You&apos;re making great progress.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--accent)] mb-1">
              {stats.streakDays}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Day Streak</div>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--success)] mb-1">
              {stats.totalReviewed}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Reviews</div>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-[var(--purple)] mb-1">
              {vocabulary.length - stats.totalLearned}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Remaining</div>
          </div>
        </motion.div>

        {/* Mastery Breakdown */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Mastery Levels
          </h2>
          <div className="space-y-3">
            {masteryStats.map(stat => (
              <div key={stat.level} className="flex items-center gap-4">
                <div className="w-20 text-sm text-[var(--text-secondary)] capitalize">
                  {stat.label}
                </div>
                <div className="flex-1 h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: stat.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percent}%` }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
                <div className="w-12 text-sm text-right font-medium text-[var(--text-primary)]">
                  {stat.count}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            By Category
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {categoryStats.map(stat => (
              <div
                key={stat.category}
                className="bg-[var(--bg-tertiary)] rounded-xl p-3"
              >
                <div className="text-sm font-medium text-[var(--text-primary)] capitalize mb-1">
                  {stat.category}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--accent)] rounded-full"
                      style={{ width: `${stat.percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {stat.learned}/{stat.total}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}
