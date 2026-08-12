import { describe, expect, it } from 'vitest';
import { vocabulary, VOCABULARY_COUNT } from '@/data/vocabulary';
import {
  alignGrammarSegments,
  annotateEnglishSentence,
  annotateSentence,
  classifyEnglishWord,
  classifyWord,
  getGrammarColor,
  joinGrammarSegments,
  mapPartOfSpeechToCategory,
  tokenizeSentence,
  validateGrammarSegments,
} from './grammar';
import type { GrammarCategory } from '@/types';

const CATEGORIES: GrammarCategory[] = [
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

describe('sentence preservation', () => {
  it.each([
    'Bonjour, comment allez-vous ?',
    'Je   suis français.',
    '  Je suis là.  ',
    'Il dit « oui ».',
    "J'aime le café.",
    'Allez-vous à Paris ?',
  ])('preserves every character in %s', sentence => {
    const tokens = tokenizeSentence(sentence, false);
    expect(tokens.map(token => token.word).join('')).toBe(sentence);
  });
});

describe('French contractions', () => {
  it.each([
    ["J'ai", 'pronoun'],
    ["l'homme", 'article'],
    ["d'accord", 'preposition'],
    ["c'est", 'pronoun'],
    ["n'est", 'adverb'],
    ["qu'il", 'conjunction'],
  ] as const)('classifies the prefix in %s', (word, category) => {
    expect(classifyWord(word)).toBe(category);
  });

  it('splits a contraction without changing its text', () => {
    const grammar = annotateSentence("J'aime le café.");
    expect(joinGrammarSegments(grammar)).toBe("J'aime le café.");
    expect(grammar.slice(0, 2)).toEqual([
      { text: "J'", category: 'pronoun' },
      { text: 'aime', category: 'verb' },
    ]);
  });
});

describe('English annotations', () => {
  it.each([
    ["I'm ready.", ['I', "'m", ' ', 'ready', '.']],
    ["They're here.", ['They', "'re", ' ', 'here', '.']],
    ["I don't know.", ['I', ' ', "don't", ' ', 'know', '.']],
  ] as const)('preserves contractions in %s', (sentence, pieces) => {
    const grammar = annotateEnglishSentence(sentence);
    expect(grammar.map(segment => segment.text)).toEqual(pieces);
    expect(joinGrammarSegments(grammar)).toBe(sentence);
  });

  it('classifies common English grammar categories', () => {
    expect(classifyEnglishWord('I')).toBe('pronoun');
    expect(classifyEnglishWord('the')).toBe('article');
    expect(classifyEnglishWord('with')).toBe('preposition');
    expect(classifyEnglishWord('quickly')).toBe('adverb');
    expect(classifyEnglishWord("don't")).toBe('verb');
    expect(classifyEnglishWord('xyzunknown')).toBe('other');
  });

  it('supports reordered and one-to-many category alignment', () => {
    const aligned = alignGrammarSegments(
      [
        { text: 'Je', category: 'pronoun' },
        { text: ' ', category: undefined },
        { text: 'le', category: 'pronoun' },
        { text: ' ', category: undefined },
        { text: 'vois', category: 'verb' },
      ],
      [
        { text: 'I', category: 'pronoun' },
        { text: ' ', category: undefined },
        { text: 'see', category: 'verb' },
        { text: ' ', category: undefined },
        { text: 'it', category: 'pronoun' },
      ]
    );

    expect(aligned.french[0].alignmentId).toBe(aligned.english[0].alignmentId);
    expect(aligned.french[2].alignmentId).toBe(aligned.english[4].alignmentId);
    expect(aligned.french[4].alignmentId).toBe(aligned.english[2].alignmentId);

    const oneToMany = alignGrammarSegments(
      [{ text: 'bonjour', category: 'phrase' }],
      [
        { text: 'good', category: 'phrase' },
        { text: ' ', category: undefined },
        { text: 'morning', category: 'phrase' },
      ]
    );
    expect(oneToMany.english[0].alignmentId).toBe(oneToMany.french[0].alignmentId);
    expect(oneToMany.english[2].alignmentId).toBe(oneToMany.french[0].alignmentId);
  });
});

describe('context-sensitive grammar', () => {
  function categoryFor(sentence: string, text: string): GrammarCategory | undefined {
    return annotateSentence(sentence).find(segment => segment.text === text)?.category;
  }

  it('distinguishes an article from an object pronoun', () => {
    expect(categoryFor('Le café est chaud.', 'Le')).toBe('article');
    expect(categoryFor('Je le vois.', 'le')).toBe('pronoun');
  });

  it('distinguishes interrogative and conjunction uses of que', () => {
    expect(categoryFor('Que voulez-vous ?', 'Que')).toBe('pronoun');
    expect(categoryFor('Je crois que vous avez raison.', 'que')).toBe('conjunction');
  });

  it.each([
    ['parce que', 'conjunction'],
    ["s'il vous plaît", 'phrase'],
    ['au revoir', 'phrase'],
    ['quelque chose', 'pronoun'],
  ] as const)('supports the multiword expression %s', (expression, category) => {
    const segment = annotateSentence(expression)[0];
    expect(segment).toEqual({ text: expression, category });
  });

  it('leaves an unknown word as other', () => {
    expect(classifyWord('xyzunknown')).toBe('other');
  });

  it('recognizes a proper name in sentence context as a noun', () => {
    expect(categoryFor("Je m'appelle Marie.", 'Marie')).toBe('noun');
  });
});

describe('vocabulary annotations', () => {
  it('preserves all 200 unique vocabulary entries', () => {
    const ids = vocabulary.map(word => word.id);
    expect(VOCABULARY_COUNT).toBe(200);
    expect(new Set(ids).size).toBe(200);
    expect(ids[0]).toBe('v001');
    expect(ids.at(-1)).toBe('v200');
  });

  it('annotates and validates both languages in every example sentence', () => {
    const sentences = vocabulary.flatMap(word => word.sentences);
    expect(sentences).toHaveLength(400);

    sentences.forEach(sentence => {
      expect(sentence.grammar.length).toBeGreaterThan(0);
      expect(validateGrammarSegments(sentence.french, sentence.grammar)).toBe(true);
      expect(joinGrammarSegments(sentence.grammar)).toBe(sentence.french);
      expect(sentence.englishGrammar.length).toBeGreaterThan(0);
      expect(validateGrammarSegments(sentence.english, sentence.englishGrammar)).toBe(true);
      expect(joinGrammarSegments(sentence.englishGrammar)).toBe(sentence.english);
    });
  });

  it('assigns a category to every lexical segment', () => {
    vocabulary.forEach(word => {
      word.sentences.forEach(sentence => {
        sentence.grammar.forEach(segment => {
          const isLexical = /[\p{L}\p{N}]/u.test(segment.text);
          if (isLexical) expect(segment.category).toBeDefined();
        });
        sentence.englishGrammar.forEach(segment => {
          const isLexical = /[\p{L}\p{N}]/u.test(segment.text);
          if (isLexical) expect(segment.category).toBeDefined();
        });
      });
    });
  });

  it('keeps every alignment category-consistent and present in both languages', () => {
    vocabulary.flatMap(word => word.sentences).forEach(sentence => {
      const frenchAlignments = sentence.grammar.filter(segment => segment.alignmentId);
      const englishAlignments = sentence.literalGrammar.filter(segment => segment.alignmentId);
      const allIds = new Set([
        ...frenchAlignments.map(segment => segment.alignmentId),
        ...englishAlignments.map(segment => segment.alignmentId),
      ]);

      allIds.forEach(alignmentId => {
        const frenchMatches = frenchAlignments.filter(segment => segment.alignmentId === alignmentId);
        const englishMatches = englishAlignments.filter(segment => segment.alignmentId === alignmentId);
        expect(frenchMatches.length).toBeGreaterThan(0);
        expect(englishMatches.length).toBeGreaterThan(0);
        expect(new Set([...frenchMatches, ...englishMatches].map(segment => segment.category)).size).toBe(1);
      });
    });
  });
});

describe('color and part-of-speech mappings', () => {
  it('provides light and dark colors for every category', () => {
    CATEGORIES.forEach(category => {
      expect(getGrammarColor(category, false).label).toBeTruthy();
      expect(getGrammarColor(category, true).label).toBeTruthy();
    });
  });

  it.each([
    ['noun', 'noun'],
    ['verb', 'verb'],
    ['adjective', 'adjective'],
    ['adverb', 'adverb'],
    ['preposition', 'preposition'],
    ['conjunction', 'conjunction'],
    ['pronoun', 'pronoun'],
    ['expression', 'phrase'],
    ['interjection', 'phrase'],
    ['unknown', 'other'],
  ] as const)('maps %s to %s', (partOfSpeech, category) => {
    expect(mapPartOfSpeechToCategory(partOfSpeech)).toBe(category);
  });
});
