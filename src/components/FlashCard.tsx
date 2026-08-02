'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioButton } from './AudioButton';
import type { VocabWord } from '@/data/vocabulary';

interface FlashCardProps {
  word: VocabWord;
  isRevealed: boolean;
  onReveal: () => void;
}

export function FlashCard({ word, isRevealed, onReveal }: FlashCardProps) {
  // Pick a random sentence for variety
  const sentenceIndex = Math.floor(Math.random() * word.sentences.length);
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
          relative min-h-[280px] rounded-3xl p-8 shadow-lg
          bg-white border border-[#E5E5EA]
          ${isRevealed ? 'ring-2 ring-[#007AFF]' : ''}
        `}
        onClick={!isRevealed ? onReveal : undefined}
        whileTap={!isRevealed ? { scale: 0.98 } : {}}
        transition={{ duration: 0.15 }}
      >
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#F2F2F7] text-[#8E8E93] capitalize">
            {word.category}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#F2F2F7] text-[#8E8E93]">
            {word.partOfSpeech}
          </span>
        </div>

        {/* French Sentence - Always Visible */}
        <div className="mb-6">
          <p className="text-2xl font-serif leading-relaxed text-[#1C1C1E]">
            {sentence.french}
          </p>
        </div>

        {/* Audio Button */}
        <div className="flex items-center gap-3 mb-6">
          <AudioButton text={sentence.french} size="md" />
          <span className="text-sm text-[#8E8E93]">Tap to listen</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E5E5EA] mb-6" />

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
              <p className="text-xl leading-relaxed text-[#3C3C43]">
                {sentence.english}
              </p>

              {/* Word Reference */}
              <div className="pt-4 border-t border-[#E5E5EA]">
                <p className="text-sm text-[#8E8E93] mb-1">Word:</p>
                <p className="text-lg font-medium text-[#1C1C1E]">
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
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="w-12 h-12 rounded-full bg-[#007AFF]/10 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-[#8E8E93] text-sm">Tap to reveal translation</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
