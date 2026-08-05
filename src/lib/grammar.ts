// ============================================
// French Learning App — Grammar Color System
// Inspired by Mango Languages approach
// ============================================

import type { GrammarCategory, GrammarSegment } from '@/types';

export type { GrammarCategory } from '@/types';

// ============================================
// COLOR PALETTE (Mango-inspired, accessible)
// ============================================

export interface GrammarColor {
  color: string;
  bgColor: string;
  borderColor: string;
  label: string;
  description: string;
  underlineStyle: 'solid' | 'dashed' | 'dotted' | 'double';
  fontWeight?: 'normal' | 'semibold' | 'bold';
}

// Light mode colors
export const GRAMMAR_COLORS_LIGHT: Record<GrammarCategory, GrammarColor> = {
  pronoun: {
    color: '#0056B3',
    bgColor: 'rgba(0, 86, 179, 0.08)',
    borderColor: 'rgba(0, 86, 179, 0.25)',
    label: 'Pronoun',
    description: 'je, tu, il, elle, nous, vous, ils, elles',
    underlineStyle: 'solid',
  },
  verb: {
    color: '#C41E3A',
    bgColor: 'rgba(196, 30, 58, 0.08)',
    borderColor: 'rgba(196, 30, 58, 0.25)',
    label: 'Verb',
    description: 'être, avoir, faire, aller, venir',
    underlineStyle: 'double',
  },
  noun: {
    color: '#1E8449',
    bgColor: 'rgba(30, 132, 73, 0.08)',
    borderColor: 'rgba(30, 132, 73, 0.25)',
    label: 'Noun',
    description: 'person, place, thing',
    underlineStyle: 'solid',
  },
  adjective: {
    color: '#7B2D8E',
    bgColor: 'rgba(123, 45, 142, 0.08)',
    borderColor: 'rgba(123, 45, 142, 0.25)',
    label: 'Adjective',
    description: 'grand, petit, bon, nouveau',
    underlineStyle: 'dashed',
  },
  article: {
    color: '#D35400',
    bgColor: 'rgba(211, 84, 0, 0.08)',
    borderColor: 'rgba(211, 84, 0, 0.25)',
    label: 'Article',
    description: 'le, la, les, un, une, des',
    underlineStyle: 'dotted',
  },
  preposition: {
    color: '#0A6E70',
    bgColor: 'rgba(10, 110, 112, 0.08)',
    borderColor: 'rgba(10, 110, 112, 0.25)',
    label: 'Preposition',
    description: 'à, de, pour, avec, dans, sur',
    underlineStyle: 'solid',
  },
  adverb: {
    color: '#7D6608',
    bgColor: 'rgba(125, 102, 8, 0.08)',
    borderColor: 'rgba(125, 102, 8, 0.25)',
    label: 'Adverb',
    description: 'très, bien, aussi, beaucoup',
    underlineStyle: 'dotted',
  },
  conjunction: {
    color: '#A93226',
    bgColor: 'rgba(169, 50, 38, 0.08)',
    borderColor: 'rgba(169, 50, 38, 0.25)',
    label: 'Conjunction',
    description: 'et, ou, mais, car, donc',
    underlineStyle: 'solid',
  },
  phrase: {
    color: '#5D6D7E',
    bgColor: 'rgba(93, 109, 126, 0.08)',
    borderColor: 'rgba(93, 109, 126, 0.25)',
    label: 'Phrase',
    description: 'fixed expressions',
    underlineStyle: 'double',
  },
  other: {
    color: '#6C757D',
    bgColor: 'rgba(108, 117, 125, 0.08)',
    borderColor: 'rgba(108, 117, 125, 0.25)',
    label: 'Other',
    description: 'interjections, numbers',
    underlineStyle: 'solid',
  },
};

// Dark mode colors (slightly brighter for contrast)
export const GRAMMAR_COLORS_DARK: Record<GrammarCategory, GrammarColor> = {
  pronoun: {
    color: '#4DA6FF',
    bgColor: 'rgba(77, 166, 255, 0.15)',
    borderColor: 'rgba(77, 166, 255, 0.35)',
    label: 'Pronoun',
    description: 'je, tu, il, elle, nous, vous, ils, elles',
    underlineStyle: 'solid',
  },
  verb: {
    color: '#FF6B7A',
    bgColor: 'rgba(255, 107, 122, 0.15)',
    borderColor: 'rgba(255, 107, 122, 0.35)',
    label: 'Verb',
    description: 'être, avoir, faire, aller, venir',
    underlineStyle: 'double',
  },
  noun: {
    color: '#5DD879',
    bgColor: 'rgba(93, 216, 121, 0.15)',
    borderColor: 'rgba(93, 216, 121, 0.35)',
    label: 'Noun',
    description: 'person, place, thing',
    underlineStyle: 'solid',
  },
  adjective: {
    color: '#C77DFF',
    bgColor: 'rgba(199, 125, 255, 0.15)',
    borderColor: 'rgba(199, 125, 255, 0.35)',
    label: 'Adjective',
    description: 'grand, petit, bon, nouveau',
    underlineStyle: 'dashed',
  },
  article: {
    color: '#FFAD42',
    bgColor: 'rgba(255, 173, 66, 0.15)',
    borderColor: 'rgba(255, 173, 66, 0.35)',
    label: 'Article',
    description: 'le, la, les, un, une, des',
    underlineStyle: 'dotted',
  },
  preposition: {
    color: '#3DDAD7',
    bgColor: 'rgba(61, 218, 215, 0.15)',
    borderColor: 'rgba(61, 218, 215, 0.35)',
    label: 'Preposition',
    description: 'à, de, pour, avec, dans, sur',
    underlineStyle: 'solid',
  },
  adverb: {
    color: '#FFD93D',
    bgColor: 'rgba(255, 217, 61, 0.15)',
    borderColor: 'rgba(255, 217, 61, 0.35)',
    label: 'Adverb',
    description: 'très, bien, aussi, beaucoup',
    underlineStyle: 'dotted',
  },
  conjunction: {
    color: '#FF8A94',
    bgColor: 'rgba(255, 138, 148, 0.15)',
    borderColor: 'rgba(255, 138, 148, 0.35)',
    label: 'Conjunction',
    description: 'et, ou, mais, car, donc',
    underlineStyle: 'solid',
  },
  phrase: {
    color: '#A8B2BD',
    bgColor: 'rgba(168, 178, 189, 0.15)',
    borderColor: 'rgba(168, 178, 189, 0.35)',
    label: 'Phrase',
    description: 'fixed expressions',
    underlineStyle: 'double',
  },
  other: {
    color: '#9CA3AF',
    bgColor: 'rgba(156, 163, 175, 0.15)',
    borderColor: 'rgba(156, 163, 175, 0.35)',
    label: 'Other',
    description: 'interjections, numbers',
    underlineStyle: 'solid',
  },
};

// ============================================
// GRAMMAR ANNOTATION
// ============================================

export interface VocabularyGrammarEntry {
  french: string;
  partOfSpeech: string;
}

export type GrammarLexicon = Readonly<Record<string, GrammarCategory>>;

const ARTICLES = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'au', 'aux',
  'ce', 'cet', 'cette', 'ces', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes',
  'son', 'sa', 'ses', 'notre', 'nos', 'votre', 'vos', 'leur', 'leurs',
  'quel', 'quelle', 'quels', 'quelles', 'chaque',
]);

const PREPOSITIONS = new Set([
  'à', 'de', 'pour', 'avec', 'dans', 'sur', 'sous', 'entre', 'chez',
  'vers', 'sans', 'contre', 'avant', 'après', 'pendant', 'par', 'selon',
  'malgré', 'depuis', 'jusque', 'près', 'loin', 'devant', 'derrière',
  'autour', 'en',
]);

const CONJUNCTIONS = new Set([
  'et', 'ou', 'mais', 'car', 'donc', 'ni', 'soit', 'puis', 'quand',
  'lorsque', 'si', 'quoique', 'que',
]);

const PRONOUNS = new Set([
  'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'on',
  'me', 'te', 'se', 'moi', 'toi', 'soi', 'lui', 'eux', 'leur',
  'qui', 'quoi', 'dont', 'où', 'y', 'celui', 'celle', 'ceux', 'celles',
  'ce', 'ça', 'chacun', 'personne', 'rien', 'tout', 'tous',
]);

const ADVERBS = new Set([
  'ne', 'pas', 'plus', 'jamais', 'très', 'bien', 'mal', 'aussi', 'encore',
  'toujours', 'déjà', 'beaucoup', 'peu', 'trop', 'moins', 'ainsi', 'ici',
  'là', 'hier', "aujourd'hui", 'demain', 'maintenant', 'souvent',
  'rarement', 'vraiment', 'certainement', 'peut-être', 'comment',
  'pourquoi', 'combien', 'ensemble', 'presque', 'tôt', 'tard',
]);

const ADJECTIVES = new Set([
  'grand', 'grande', 'grands', 'grandes', 'petit', 'petite', 'petits', 'petites',
  'bon', 'bonne', 'bons', 'bonnes', 'mauvais', 'mauvaise', 'mauvaises',
  'nouveau', 'nouvelle', 'nouveaux', 'nouvelles', 'vieux', 'vieille',
  'jeune', 'jeunes', 'beau', 'belle', 'beaux', 'belles', 'joli', 'jolie',
  'premier', 'première', 'premiers', 'premières', 'dernier', 'dernière',
  'même', 'mêmes', 'autre', 'autres', 'gentil', 'gentille', 'content',
  'contente', 'heureux', 'heureuse', 'fatigué', 'fatiguée', 'ouvert',
  'ouverte', 'fermé', 'fermée', 'chaud', 'chaude', 'froid', 'froide',
  'facile', 'difficile', 'important', 'importante', 'possible', 'différent',
  'différente', 'seul', 'seule', 'proche', 'français', 'française',
  'correct', 'correcte', 'excellent', 'excellente',
]);

const VERBS = new Set([
  'être', 'suis', 'es', 'est', 'sommes', 'êtes', 'sont', 'été',
  'avoir', 'ai', 'as', 'a', 'avons', 'avez', 'ont', 'eu',
  'faire', 'fais', 'fait', 'faisons', 'faites', 'font',
  'aller', 'vais', 'vas', 'va', 'allons', 'allez', 'vont',
  'venir', 'viens', 'vient', 'venons', 'venez', 'viennent',
  'pouvoir', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent',
  'devoir', 'dois', 'doit', 'devons', 'devez', 'doivent',
  'vouloir', 'veux', 'veut', 'voulons', 'voulez', 'veulent',
  'savoir', 'sais', 'sait', 'savons', 'savez', 'savent',
  'voir', 'vois', 'voit', 'voyons', 'voyez', 'voient',
  'dire', 'dis', 'dit', 'disons', 'dites', 'disent',
  'prendre', 'prends', 'prend', 'prenons', 'prenez', 'prennent',
  'mettre', 'mets', 'met', 'mettons', 'mettez', 'mettent',
  'falloir', 'faut', 'parler', 'parle', 'parles', 'parlons', 'parlez', 'parlent',
  'manger', 'mange', 'manges', 'mangeons', 'mangez', 'mangent',
  'habiter', 'habite', 'habites', 'habitons', 'habitez', 'habitent',
  'travailler', 'travaille', 'travailles', 'travaillons', 'travaillez', 'travaillent',
  'apprendre', 'apprends', 'apprend', 'apprenons', 'apprenez', 'apprennent',
  'comprendre', 'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent',
  'écrire', 'écris', 'écrit', 'écrivons', 'écrivez', 'écrivent',
  'lire', 'lis', 'lit', 'lisons', 'lisez', 'lisent',
  'acheter', 'achète', 'achètes', 'achetons', 'achetez', 'achètent',
  'préférer', 'préfère', 'préfères', 'préférons', 'préférez', 'préfèrent',
  'commencer', 'commence', 'commences', 'commençons', 'commencez', 'commencent',
  'finir', 'finis', 'finit', 'finissons', 'finissez', 'finissent',
  'choisir', 'choisis', 'choisit', 'choisissons', 'choisissez', 'choisissent',
  'penser', 'pense', 'penses', 'pensons', 'pensez', 'pensent',
  'croire', 'crois', 'croit', 'croyons', 'croyez', 'croient',
  'aimer', 'aime', 'aimes', 'aimons', 'aimez', 'aiment',
  'détester', 'déteste', 'détestes', 'détestons', 'détestez', 'détestent',
  'payer', 'paie', 'paies', 'payons', 'payez', 'paient',
  'ouvrir', 'ouvre', 'ouvres', 'ouvrons', 'ouvrez', 'ouvrent',
  'vendre', 'vends', 'vend', 'vendons', 'vendez', 'vendent',
  'chercher', 'cherche', 'cherches', 'cherchons', 'cherchez', 'cherchent',
  'écouter', 'écoute', 'écoutes', 'écoutons', 'écoutez', 'écoutent',
  'regarder', 'regarde', 'regardes', 'regardons', 'regardez', 'regardent',
  'connaître', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent',
  'commander', 'commande', 'commandes', 'commandons', 'commandez', 'commandent',
  'demander', 'demande', 'demandes', 'demandons', 'demandez', 'demandent',
  'donner', 'donne', 'donnes', 'donnons', 'donnez', 'donnent',
  'arriver', 'arrive', 'arrives', 'arrivons', 'arrivez', 'arrivent',
  'partir', 'pars', 'part', 'partons', 'partez', 'partent',
  'rester', 'reste', 'restes', 'restons', 'restez', 'restent',
  'visiter', 'visite', 'visites', 'visitons', 'visitez', 'visitent',
  'préparer', 'prépare', 'prépares', 'préparons', 'préparez', 'préparent',
  'organiser', 'organise', 'organises', 'organisons', 'organisez', 'organisent',
  'recevoir', 'reçois', 'reçoit', 'recevons', 'recevez', 'reçoivent',
]);

const FIXED_EXPRESSIONS: ReadonlyArray<readonly [string, GrammarCategory]> = [
  ["s'il vous plaît", 'phrase'],
  ['est-ce que', 'phrase'],
  ['quelque chose', 'pronoun'],
  ['tout le monde', 'pronoun'],
  ['parce que', 'conjunction'],
  ['bien que', 'conjunction'],
  ['afin que', 'conjunction'],
  ['pour que', 'conjunction'],
  ['avoir peur', 'phrase'],
  ['avoir faim', 'phrase'],
  ['avoir soif', 'phrase'],
  ['au revoir', 'phrase'],
  ["d'accord", 'phrase'],
];

const CONTRACTION_CATEGORIES: Readonly<Record<string, GrammarCategory>> = {
  c: 'pronoun',
  d: 'preposition',
  j: 'pronoun',
  l: 'article',
  m: 'pronoun',
  n: 'adverb',
  qu: 'conjunction',
  s: 'pronoun',
  t: 'pronoun',
};

const WORD_PATTERN = /^[\p{L}\p{M}]+(?:['’][\p{L}\p{M}]+)*/u;
const WHITESPACE_PATTERN = /^\s+$/u;
const PUNCTUATION_PATTERN = /^[^\p{L}\p{M}\p{N}\s]+$/u;

function fold(value: string): string {
  return value.toLocaleLowerCase('fr-FR').replace(/’/g, "'");
}

function normalize(value: string): string {
  return fold(value).trim();
}

export function mapPartOfSpeechToCategory(partOfSpeech: string): GrammarCategory {
  const pos = normalize(partOfSpeech);
  if (pos === 'noun' || pos === 'n') return 'noun';
  if (pos === 'verb' || pos === 'v') return 'verb';
  if (pos === 'adjective' || pos === 'adj') return 'adjective';
  if (pos === 'adverb' || pos === 'adv') return 'adverb';
  if (pos === 'preposition' || pos === 'prep') return 'preposition';
  if (pos === 'conjunction' || pos === 'conj') return 'conjunction';
  if (pos === 'pronoun' || pos === 'pron') return 'pronoun';
  if (pos === 'phrase' || pos === 'expression' || pos === 'interjection') return 'phrase';
  return 'other';
}

export function createVocabularyGrammarLexicon(
  entries: readonly VocabularyGrammarEntry[]
): GrammarLexicon {
  const lexicon: Record<string, GrammarCategory> = {};

  entries.forEach(({ french, partOfSpeech }) => {
    const category = mapPartOfSpeechToCategory(partOfSpeech);
    const normalized = normalize(french);
    lexicon[normalized] = category;

    const withoutArticle = normalized
      .replace(/^(?:le|la|les|un|une|des|du)\s+/u, '')
      .replace(/^l['’]/u, '');

    if (withoutArticle) {
      lexicon[withoutArticle] = category;
    }
  });

  return lexicon;
}

function contractionParts(word: string): [string, string] | null {
  const match = word.match(/^((?:qu|[cdjlmnst])['’])(.+)$/iu);
  return match ? [match[1], match[2]] : null;
}

export function classifyWord(
  word: string,
  lexicon: GrammarLexicon = {}
): GrammarCategory {
  const normalized = normalize(word);
  const contraction = contractionParts(normalized);

  if (contraction) {
    const prefix = normalize(contraction[0]).replace(/['’]$/u, '');
    return CONTRACTION_CATEGORIES[prefix] ?? 'other';
  }

  const fixedExpression = FIXED_EXPRESSIONS.find(([expression]) => expression === normalized);
  if (fixedExpression) return fixedExpression[1];

  if (normalized === 'le' || normalized === 'la' || normalized === 'les') return 'article';
  if (normalized === 'que') return 'conjunction';
  if (ARTICLES.has(normalized)) return 'article';
  if (PREPOSITIONS.has(normalized)) return 'preposition';
  if (CONJUNCTIONS.has(normalized)) return 'conjunction';
  if (PRONOUNS.has(normalized)) return 'pronoun';
  if (ADVERBS.has(normalized)) return 'adverb';
  if (VERBS.has(normalized)) return 'verb';
  if (ADJECTIVES.has(normalized)) return 'adjective';
  return lexicon[normalized] ?? 'other';
}

function tokenizeRaw(sentence: string): string[] {
  const tokens: string[] = [];
  let position = 0;

  while (position < sentence.length) {
    const remainder = sentence.slice(position);
    const foldedRemainder = fold(remainder);
    const fixed = FIXED_EXPRESSIONS.find(([expression]) => {
      if (!foldedRemainder.startsWith(expression)) return false;
      const nextCharacter = foldedRemainder[expression.length];
      return !nextCharacter || !/[\p{L}\p{M}]/u.test(nextCharacter);
    });

    if (fixed) {
      tokens.push(sentence.slice(position, position + fixed[0].length));
      position += fixed[0].length;
      continue;
    }

    const whitespace = remainder.match(/^\s+/u);
    if (whitespace) {
      tokens.push(whitespace[0]);
      position += whitespace[0].length;
      continue;
    }

    const word = remainder.match(WORD_PATTERN);
    if (word) {
      tokens.push(word[0]);
      position += word[0].length;
      continue;
    }

    const number = remainder.match(/^\d+(?:[.,]\d+)?/u);
    if (number) {
      tokens.push(number[0]);
      position += number[0].length;
      continue;
    }

    tokens.push(remainder[0]);
    position += 1;
  }

  return tokens;
}

function lexicalNeighbors(tokens: readonly string[], index: number): {
  previous?: string;
  previousPrevious?: string;
  next?: string;
} {
  const wordsBefore = tokens
    .slice(0, index)
    .filter(token => !WHITESPACE_PATTERN.test(token) && !PUNCTUATION_PATTERN.test(token));
  const next = tokens
    .slice(index + 1)
    .find(token => !WHITESPACE_PATTERN.test(token) && !PUNCTUATION_PATTERN.test(token));

  return {
    previous: wordsBefore.at(-1),
    previousPrevious: wordsBefore.at(-2),
    next,
  };
}

function contextualCategory(
  token: string,
  index: number,
  tokens: readonly string[],
  lexicon: GrammarLexicon
): GrammarCategory {
  const normalized = normalize(token);
  const { previous, previousPrevious, next } = lexicalNeighbors(tokens, index);
  const previousCategory = previous ? classifyWord(previous, lexicon) : undefined;
  const previousPreviousCategory = previousPrevious
    ? classifyWord(previousPrevious, lexicon)
    : undefined;
  const nextCategory = next ? classifyWord(next, lexicon) : undefined;

  if (normalized === 'le' || normalized === 'la' || normalized === 'les') {
    return nextCategory === 'verb' ? 'pronoun' : 'article';
  }

  if (normalized === 'que') {
    return previous ? 'conjunction' : 'pronoun';
  }

  const direct = classifyWord(token, lexicon);
  if (direct !== 'other') return direct;

  if (/^\p{Lu}/u.test(token)) {
    return 'noun';
  }

  if (previousCategory === 'article') {
    return ADJECTIVES.has(normalized) ? 'adjective' : 'noun';
  }

  if (previousCategory === 'adjective' && previousPreviousCategory === 'article') {
    return 'noun';
  }

  if (
    previousCategory === 'pronoun' ||
    (previousCategory === 'adverb' && previousPreviousCategory === 'pronoun')
  ) {
    return 'verb';
  }

  return 'other';
}

export function annotateSentence(
  sentence: string,
  lexicon: GrammarLexicon = {}
): GrammarSegment[] {
  const rawTokens = tokenizeRaw(sentence);
  const segments: GrammarSegment[] = [];

  rawTokens.forEach((token, index) => {
    if (WHITESPACE_PATTERN.test(token) || PUNCTUATION_PATTERN.test(token)) {
      segments.push({ text: token });
      return;
    }

    const fixedExpression = FIXED_EXPRESSIONS.find(
      ([expression]) => expression === normalize(token)
    );
    if (fixedExpression) {
      segments.push({ text: token, category: fixedExpression[1] });
      return;
    }

    const contraction = contractionParts(token);
    if (contraction) {
      const prefixKey = normalize(contraction[0]).replace(/['’]$/u, '');
      const prefixCategory = CONTRACTION_CATEGORIES[prefixKey] ?? 'other';
      segments.push({ text: contraction[0], category: prefixCategory });

      const stemCategory = contextualCategory(
        contraction[1],
        index,
        [...rawTokens.slice(0, index), contraction[0], ...rawTokens.slice(index + 1)],
        lexicon
      );
      segments.push({ text: contraction[1], category: stemCategory });
      return;
    }

    segments.push({
      text: token,
      category: contextualCategory(token, index, rawTokens, lexicon),
    });
  });

  return segments;
}

export function getGrammarColor(
  category: GrammarCategory,
  isDarkMode: boolean
): GrammarColor {
  const colors = isDarkMode ? GRAMMAR_COLORS_DARK : GRAMMAR_COLORS_LIGHT;
  return colors[category];
}

export interface TokenizedWord {
  word: string;
  category: GrammarCategory;
  color: GrammarColor;
  isPunctuation: boolean;
  isWhitespace: boolean;
}

export function tokenizeSentence(
  sentence: string,
  isDarkMode: boolean,
  lexicon: GrammarLexicon = {}
): TokenizedWord[] {
  return annotateSentence(sentence, lexicon).map(segment => {
    const category = segment.category ?? 'other';
    return {
      word: segment.text,
      category,
      color: getGrammarColor(category, isDarkMode),
      isPunctuation: PUNCTUATION_PATTERN.test(segment.text),
      isWhitespace: WHITESPACE_PATTERN.test(segment.text),
    };
  });
}

export function validateGrammarSegments(
  french: string,
  grammar: readonly GrammarSegment[]
): boolean {
  if (grammar.map(segment => segment.text).join('') !== french) return false;

  return grammar.every(segment =>
    WHITESPACE_PATTERN.test(segment.text) ||
    PUNCTUATION_PATTERN.test(segment.text) ||
    Boolean(segment.category)
  );
}

export function joinGrammarSegments(grammar: readonly GrammarSegment[]): string {
  return grammar.map(segment => segment.text).join('');
}
