'use client';

import type { Sentence } from '@/types';
import type { TranslationMode } from '@/types';
import { ColorizedSentence } from './ColorizedSentence';
import { TranslationToggle } from './TranslationToggle';

interface TranslationDisplayProps {
  sentence: Sentence;
  mode: TranslationMode;
  onModeChange: (mode: TranslationMode) => void;
  showToggle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  englishClassName?: string;
}

export function TranslationDisplay({
  sentence,
  mode,
  onModeChange,
  showToggle = true,
  size = 'md',
  englishClassName = '',
}: TranslationDisplayProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wide">
          Translation
        </span>
        {showToggle && (
          <TranslationToggle mode={mode} onChange={onModeChange} />
        )}
      </div>

      {mode === 'literal' ? (
        <ColorizedSentence
          sentence={sentence.literal}
          grammar={sentence.literalGrammar}
          language="en"
          size={size}
          className={englishClassName}
        />
      ) : (
        <p className={`font-serif leading-relaxed ${size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-lg'} ${englishClassName}`} lang="en">
          {sentence.english}
        </p>
      )}
    </div>
  );
}
