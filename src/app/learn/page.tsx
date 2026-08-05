'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BottomNav } from '@/components/BottomNav';
import { AudioButton } from '@/components/AudioButton';
import { ColorizedSentence, GrammarLegend } from '@/components/ColorizedSentence';
import { vocabulary, type VocabWord } from '@/data/vocabulary';
import { loadReviewRecords, saveReviewRecord } from '@/lib/storage';
import { createReviewRecord } from '@/lib/srs';

type LearnState = 'categories' | 'words' | 'learning';

export default function LearnPage() {
  const [state, setState] = useState<LearnState>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryWords, setCategoryWords] = useState<VocabWord[]>([]);
  const [learnedIds, setLearnedIds] = useState<Set<string>>(new Set());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const records = loadReviewRecords();
      setLearnedIds(new Set(Object.keys(records)));
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  // Get categories with word counts
  const categories = [...new Set(vocabulary.map(w => w.category))].map(cat => ({
    name: cat,
    total: vocabulary.filter(w => w.category === cat).length,
    learned: vocabulary.filter(w => w.category === cat && learnedIds.has(w.id)).length,
  }));

  const handleCategorySelect = (category: string) => {
    const words = vocabulary.filter(w => w.category === category);
    setCategoryWords(words);
    setSelectedCategory(category);
    setCurrentWordIndex(0);
    setIsRevealed(false);
    setShowTranslation(false);
    setState('words');
  };

  const handleStartLearning = () => {
    setState('learning');
    setCurrentWordIndex(0);
    setIsRevealed(false);
    setShowTranslation(false);
    setCompletedCount(0);
  };

  const handleNext = () => {
    if (currentWordIndex < categoryWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setIsRevealed(false);
      setShowTranslation(false);
    } else {
      setState('words');
    }
  };

  const handleMarkLearned = () => {
    const currentWord = categoryWords[currentWordIndex];
    const record = createReviewRecord(currentWord.id);
    saveReviewRecord(record);
    setLearnedIds(prev => new Set([...prev, currentWord.id]));
    setCompletedCount(prev => prev + 1);
    handleNext();
  };

  const currentWord = categoryWords[currentWordIndex];

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
          {state === 'categories' && 'Learn'}
          {state === 'words' && selectedCategory && (
            <span className="capitalize"> — {selectedCategory}</span>
          )}
          {state === 'learning' && 'Learning'}
        </motion.h1>
      </header>

      <main className="px-6">
        <AnimatePresence mode="wait">
          {/* Categories View */}
          {state === 'categories' && (
            <motion.div
              key="categories"
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {categories.map((cat, index) => (
                <motion.button
                  key={cat.name}
                  onClick={() => handleCategorySelect(cat.name)}
                  className={`
                    bg-[var(--bg-secondary)] rounded-2xl p-5 text-left
                    border border-[var(--border)] hover:border-[var(--accent)]
                    transition-all duration-200
                    ${cat.learned === cat.total ? 'border-[var(--success)]' : ''}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    {cat.learned === cat.total && (
                      <span className="text-[var(--success)] text-sm">Done</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] capitalize mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {cat.learned} / {cat.total} learned
                  </p>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Words List View */}
          {state === 'words' && (
            <motion.div
              key="words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Start Learning Button */}
              <motion.button
                onClick={handleStartLearning}
                disabled={categoryWords.length === 0}
                className={`
                  w-full py-4 rounded-2xl font-semibold text-white mb-6
                  transition-all duration-200
                  ${categoryWords.length > 0
                    ? 'bg-[var(--accent)] hover:bg-[var(--accent-light)]'
                    : 'bg-[var(--text-tertiary)] cursor-not-allowed'
                  }
                `}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning ({categoryWords.length} words)
              </motion.button>

              {/* Words List */}
              <div className="space-y-3">
                {categoryWords.map(word => (
                  <div
                    key={word.id}
                    className={`
                      bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 flex items-center gap-4
                      ${learnedIds.has(word.id) ? 'border-l-4 border-[var(--success)]' : ''}
                    `}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-[var(--text-primary)]">
                        {word.french}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {word.english}
                      </p>
                    </div>
                    {learnedIds.has(word.id) && (
                      <span className="text-[var(--success)]">✓</span>
                    )}
                    <AudioButton text={word.sentences[0].french} size="sm" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Learning Mode */}
          {state === 'learning' && currentWord && (
            <motion.div
              key="learning"
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                <span>{currentWordIndex + 1} of {categoryWords.length}</span>
                <span>{completedCount} learned</span>
              </div>

              {/* Word Card */}
              <motion.div
                className={`
                  bg-[var(--bg-secondary)] rounded-3xl p-6 border border-[var(--border)]
                  ${isRevealed ? 'border-2 border-[var(--accent)]' : ''}
                `}
                layout
              >
                <div className="mb-4">
                  <span className="text-sm text-[var(--text-tertiary)] capitalize">
                    {currentWord.partOfSpeech}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-2xl font-serif text-[var(--text-primary)] mb-2">
                    {currentWord.french}
                  </p>
                  <p className="text-lg text-[var(--text-secondary)]">
                    {currentWord.english}
                  </p>
                </div>

                <GrammarLegend collapsed className="mb-4" />

                {/* Sentences */}
                <div className="space-y-4 mb-6">
                  {currentWord.sentences.map((sentence, i) => (
                    <div key={i} className="bg-[var(--bg-tertiary)] rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <AudioButton text={sentence.french} size="sm" />
                        <ColorizedSentence
                          sentence={sentence.french}
                          grammar={sentence.grammar}
                          size="sm"
                          className="flex-1"
                        />
                      </div>
                      {showTranslation && (
                        <p className="text-sm text-[var(--text-secondary)] pl-9">
                          {sentence.english}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                {!showTranslation ? (
                  <button
                    onClick={() => setShowTranslation(true)}
                    className="w-full py-3 rounded-xl font-semibold text-[var(--accent)] bg-[var(--accent-bg)]"
                  >
                    Show Translations
                  </button>
                ) : (
                  <button
                    onClick={handleMarkLearned}
                    className="w-full py-3 rounded-xl font-semibold text-white bg-[var(--success)]"
                  >
                    Got it! Continue
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNav />
    </div>
  );
}
