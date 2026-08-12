'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioButton } from './AudioButton';
import { ColorizedSentence, GrammarLegend } from './ColorizedSentence';
import { TranslationDisplay } from './TranslationDisplay';
import type { TranslationMode } from '@/types';
import type { VocabWord } from '@/data/vocabulary';

interface FlashCardProps {
  word: VocabWord;
  isRevealed: boolean;
  onReveal: () => void;
}

export function FlashCard({ word, isRevealed, onReveal }: FlashCardProps) {
  const [translationMode, setTranslationMode] = useState<TranslationMode>('literal');
  const sentenceIndex = (parseInt(word.id.replace('v', ''), 10) - 1) % word.sentences.length;
  const sentence = word.sentences[sentenceIndex];

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      layout
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Card Container */}
      <motion.div
        className={`
          relative min-h-[280px] rounded-3xl p-7
          bg-[var(--bg-secondary)] border border-[var(--border)]
          ${isRevealed ? 'ring-2 ring-[var(--accent)]' : ''}
        `}
        onClick={!isRevealed ? onReveal : undefined}
        whileTap={!isRevealed ? { scale: 0.98 } : {}}
        transition={{ duration: 0.15 }}
      >
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] capitalize">
            {word.category}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]">
            {word.partOfSpeech}
          </span>
        </div>

        {/* French Sentence - Always Visible */}
        <div className="mb-6">
          <ColorizedSentence
            sentence={sentence.french}
            grammar={sentence.grammar}
            language="fr"
            size="lg"
          />
        </div>

        {/* Audio Button */}
        <div className="flex items-center gap-3 mb-6">
          <AudioButton text={sentence.french} size="md" />
          <span className="text-sm text-[var(--text-tertiary)]">Tap to listen</span>
        </div>

        <GrammarLegend collapsed className="mb-6" />

        {/* Divider */}
        <div className="h-px bg-[var(--border)] mb-6" />

        {/* Translation - Revealed on Tap */}
        <AnimatePresence mode="wait">
          {isRevealed ? (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <TranslationDisplay
                sentence={sentence}
                mode={translationMode}
                onModeChange={setTranslationMode}
                size="md"
                englishClassName="text-[var(--text-secondary)]"
              />

              {/* Word Reference */}
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--text-tertiary)] mb-1">Word:</p>
                <p className="text-lg font-medium text-[var(--text-primary)]">
                  {word.french} — {word.english}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8"
            >
              <button
                type="button"
                onClick={event => {
                  event.stopPropagation();
                  onReveal();
                }}
                className="mx-auto flex w-full flex-col items-center justify-center rounded-xl py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                  <svg className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
                <span className="text-sm text-[var(--text-tertiary)]">Tap or press Enter to reveal translation</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
