'use client';

import { useId, useMemo, useState, useSyncExternalStore } from 'react';
import {
  getGrammarColor,
  joinGrammarSegments,
  GRAMMAR_COLORS_DARK,
  GRAMMAR_COLORS_LIGHT,
  type GrammarColor,
} from '@/lib/grammar';
import type { GrammarCategory, GrammarSegment } from '@/types';

interface ColorizedSentenceProps {
  sentence: string;
  grammar: GrammarSegment[];
  language?: 'fr' | 'en';
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const UNDERLINE_CLASSES: Record<GrammarColor['underlineStyle'], string> = {
  solid: 'border-b-2',
  dashed: 'border-b-2 border-dashed',
  dotted: 'border-b-2 border-dotted',
  double: 'border-b-4 border-double',
};

const GRAMMAR_CATEGORIES: GrammarCategory[] = [
  'pronoun',
  'verb',
  'noun',
  'adjective',
  'article',
  'preposition',
  'adverb',
  'conjunction',
  'phrase',
  'other',
];

function useIsDarkMode(): boolean {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
  };

  const getSnapshot = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export function ColorizedSentence({
  sentence,
  grammar,
  language,
  showLabels = false,
  size = 'md',
  className = '',
}: ColorizedSentenceProps) {
  const isDarkMode = useIsDarkMode();
  const sentenceId = useId();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const segments = useMemo(() => {
    if (joinGrammarSegments(grammar) === sentence) return grammar;
    return [{ text: sentence, category: 'other' as const }];
  }, [grammar, sentence]);

  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const labelSizeClasses = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-xs',
  };

  return (
    <div
      className={`font-serif leading-relaxed ${sizeClasses[size]} ${className}`}
      lang={language}
    >
      {segments.map((segment, index) => {
        const isNeutral = /^\s+$/.test(segment.text) || /^[^\p{L}\p{N}\s]+$/u.test(segment.text);

        if (isNeutral) {
          return <span key={`${index}-${segment.text}`}>{segment.text}</span>;
        }

        const category = segment.category ?? 'other';
        const color = getGrammarColor(category, isDarkMode);
        const tooltipId = `${sentenceId}-grammar-${index}-${category}`;
        const isActive = activeIndex === index;

        return (
          <span key={`${index}-${segment.text}`} className="group relative inline-flex flex-col align-baseline">
            <button
              type="button"
              className={`${UNDERLINE_CLASSES[color.underlineStyle]} rounded-sm bg-transparent p-0 font-inherit leading-inherit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
              style={{ borderColor: color.borderColor, color: color.color }}
              aria-label={`${segment.text}: ${color.label}`}
              aria-describedby={isActive ? tooltipId : undefined}
              data-grammar-category={category}
              data-alignment-id={segment.alignmentId}
              onClick={event => {
                event.stopPropagation();
                setActiveIndex(current => current === index ? null : index);
              }}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
            >
              {segment.text}
            </button>

            <span
              id={tooltipId}
              role="tooltip"
              aria-hidden={!isActive}
              className={`absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 font-sans text-xs font-medium text-white shadow-md transition-opacity ${isActive ? 'opacity-100' : 'pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'}`}
              style={{ backgroundColor: color.color }}
            >
              {color.label}
            </span>

            {showLabels && (
              <span
                className={`${labelSizeClasses[size]} mt-0.5 text-center font-sans`}
                style={{ color: color.color }}
              >
                {color.label}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

interface GrammarLegendProps {
  collapsed?: boolean;
  className?: string;
}

function LegendItems({ isDarkMode }: { isDarkMode: boolean }) {
  const colors = isDarkMode ? GRAMMAR_COLORS_DARK : GRAMMAR_COLORS_LIGHT;

  return (
    <div className="flex flex-wrap gap-2">
      {GRAMMAR_CATEGORIES.map(category => {
        const color = colors[category];
        return (
          <span
            key={category}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg-tertiary)] px-2 py-1 text-xs"
          >
            <span
              aria-hidden="true"
              className={`w-4 ${UNDERLINE_CLASSES[color.underlineStyle]}`}
              style={{ borderColor: color.borderColor }}
            />
            <span className="font-medium" style={{ color: color.color }}>
              {color.label}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function GrammarLegend({ collapsed = false, className = '' }: GrammarLegendProps) {
  const isDarkMode = useIsDarkMode();

  if (collapsed) {
    return (
      <details className={className}>
        <summary className="cursor-pointer text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]">
          Grammar colors
        </summary>
        <div className="mt-3">
          <LegendItems isDarkMode={isDarkMode} />
        </div>
      </details>
    );
  }

  return (
    <section className={`rounded-xl bg-[var(--bg-tertiary)] p-4 ${className}`} aria-label="Grammar color legend">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-tertiary)]">
        Grammar colors
      </h2>
      <LegendItems isDarkMode={isDarkMode} />
    </section>
  );
}
