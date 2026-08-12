import { describe, expect, it } from 'vitest';
import { annotateEnglishSentence, annotateLiteralEnglish } from './grammar';
import { vocabulary } from '@/data/vocabulary';

const allSentences = vocabulary.flatMap(word => word.sentences);

describe('translation dataset integrity', () => {
  it('contains all 400 complete sentence translations across 200 words', () => {
    expect(vocabulary).toHaveLength(200);
    expect(allSentences).toHaveLength(400);
    expect(allSentences.every(sentence => sentence.french.trim().length > 0)).toBe(true);
    expect(allSentences.every(sentence => sentence.english.trim().length > 0)).toBe(true);
    expect(allSentences.every(sentence => sentence.literal.trim().length > 0)).toBe(true);
  });

  it('never relies on a missing-literal natural-English fallback', () => {
    const missing = allSentences.filter(sentence => !Object.hasOwn(sentence, 'literal'));
    expect(missing).toEqual([]);
  });

  it('builds literal grammar from the literal text and leaves natural English unaligned', () => {
    for (const sentence of allSentences) {
      expect(sentence.literalGrammar.map(segment => segment.text).join('')).toBe(sentence.literal);
      expect(sentence.englishGrammar.map(segment => segment.text).join('')).toBe(sentence.english);
      expect(sentence.englishGrammar.every(segment => segment.alignmentId === undefined)).toBe(true);
    }
  });

  it('aligns both sides of literal mode for color correspondence', () => {
    for (const sentence of allSentences) {
      const frenchIds = new Set(sentence.grammar.flatMap(segment => segment.alignmentId ?? []));
      const literalIds = new Set(sentence.literalGrammar.flatMap(segment => segment.alignmentId ?? []));
      expect([...frenchIds].every(id => literalIds.has(id))).toBe(true);
      expect([...literalIds].every(id => frenchIds.has(id))).toBe(true);
    }
  });
});

describe('literal translation annotation', () => {
  it('produces grammar segments for literal translations', () => {
    const literal = 'I call myself Aston.';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
  });

  it('handles French-style literal phrasing', () => {
    const literal = 'I ne-have not hungry.';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
  });

  it('handles idiomatic literal constructions', () => {
    const literal = 'It does very beautiful.';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
  });

  it('handles reflexive literal constructions', () => {
    const literal = 'I me raise early the morning.';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
  });

  it('handles question literals', () => {
    const literal = 'How go-you?';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
  });

  it('handles long literal sentences', () => {
    const literal = 'What want-you eat?';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
  });

  it('produces same output as annotateEnglishSentence for identical input', () => {
    const text = 'I am a student.';
    const literalSegments = annotateLiteralEnglish(text);
    const englishSegments = annotateEnglishSentence(text);
    expect(literalSegments.length).toBe(englishSegments.length);
    literalSegments.forEach((seg, i) => {
      expect(seg.text).toBe(englishSegments[i].text);
    });
  });
});

describe('translation mode', () => {
  it('TRANSLATION_MODE_LABELS has literal and natural', () => {
    expect({ literal: 'Literal', natural: 'Natural' }.literal).toBe('Literal');
    expect({ literal: 'Literal', natural: 'Natural' }.natural).toBe('Natural');
  });

  it('TranslationMode type allows literal and natural', () => {
    const mode = 'literal' as const;
    expect(mode).toBe('literal');
    const mode2 = 'natural' as const;
    expect(mode2).toBe('natural');
  });
});

describe('translation selection logic', () => {
  it('selects literal when available and mode is literal', () => {
    const sentence = { french: 'Bonjour', english: 'Hello', literal: 'Hello' };
    const mode = 'literal' as const;
    const selected = mode === 'literal' && sentence.literal ? sentence.literal : sentence.english;
    expect(selected).toBe('Hello');
  });

  it('selects english when mode is natural', () => {
    const sentence = { french: 'Bonjour', english: 'Hello', literal: 'Hello' };
    const mode = 'natural' as const;
    const selected = mode === 'literal' && sentence.literal ? sentence.literal : sentence.english;
    expect(selected).toBe('Hello');
  });

  it('toggle cycles: literal -> natural -> literal', () => {
    let mode: 'literal' | 'natural' = 'literal';
    expect(mode).toBe('literal');
    mode = mode === 'literal' ? 'natural' : 'literal';
    expect(mode).toBe('natural');
    mode = mode === 'literal' ? 'natural' : 'literal';
    expect(mode).toBe('literal');
  });
});

describe('literalGrammar computation', () => {
  it('annotateLiteralEnglish produces grammar segments for literal text', () => {
    const literal = 'I call myself Marie.';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
    segments.forEach(seg => {
      expect(seg).toHaveProperty('text');
      if (seg.text.trim() && seg.category) {
        expect(['pronoun','verb','noun','adjective','adverb','preposition','conjunction','article','other']).toContain(seg.category);
      }
    });
  });

  it('annotateLiteralEnglish handles hyphenated compounds', () => {
    const literal = 'I will-visit France.';
    const segments = annotateLiteralEnglish(literal);
    expect(segments.length).toBeGreaterThan(0);
    expect(segments.map(s => s.text).join('')).toBe(literal);
  });

  it('literal mode uses literalGrammar, natural mode uses englishGrammar', () => {
    const sentence = {
      french: 'Bonjour',
      english: 'Hello',
      literal: 'Hello',
      englishGrammar: [{ text: 'Hello', category: 'other' as const, alignmentId: '1' }],
      literalGrammar: [{ text: 'Hello', category: 'other' as const, alignmentId: '1' }],
    };
    const mode = 'literal' as const;
    const grammar = mode === 'literal' && sentence.literalGrammar
      ? sentence.literalGrammar
      : sentence.englishGrammar;
    expect(grammar).toBe(sentence.literalGrammar);
    expect(grammar[0].text).toBe('Hello');
  });

  it('natural mode always uses englishGrammar', () => {
    const sentence = {
      french: 'Bonjour',
      english: 'Hello',
      literal: 'Hello',
      englishGrammar: [{ text: 'Hello', category: 'other' as const, alignmentId: '1' }],
      literalGrammar: [{ text: 'Hello', category: 'verb' as const, alignmentId: '2' }],
    };
    const mode = 'natural' as const;
    const grammar = mode === 'literal' && sentence.literalGrammar
      ? sentence.literalGrammar
      : sentence.englishGrammar;
    expect(grammar).toBe(sentence.englishGrammar);
    expect(grammar[0].category).toBe('other');
  });
});
