'use client';

import type { TranslationMode } from '@/types';
import { TRANSLATION_MODE_LABELS } from '@/types';

interface TranslationToggleProps {
  mode: TranslationMode;
  onChange: (mode: TranslationMode) => void;
  disabled?: boolean;
  className?: string;
}

export function TranslationToggle({ mode, onChange, disabled, className = '' }: TranslationToggleProps) {
  return (
    <div
      className={`inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] p-0.5 ${disabled ? 'opacity-50' : ''} ${className}`}
      role="group"
      aria-label="Translation style"
    >
      {(Object.keys(TRANSLATION_MODE_LABELS) as TranslationMode[]).map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          disabled={disabled}
          aria-pressed={mode === option}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
            mode === option
              ? 'bg-[var(--accent-bg)] text-[var(--accent)]'
              : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
          }`}
        >
          {TRANSLATION_MODE_LABELS[option]}
        </button>
      ))}
    </div>
  );
}
