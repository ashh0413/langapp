// ============================================
// French Learning App — Vocabulary Dataset
// 200+ words with contextual sentences
// ============================================

export interface Sentence {
  french: string;
  english: string;
}

export interface VocabWord {
  id: string;
  french: string;
  english: string;
  partOfSpeech: string;
  gender?: string;
  category: string;
  sentences: Sentence[];
}

// ============================================
// VOCABULARY DATA
// ============================================

import { vocabularyExtra } from './vocabulary-extra';

export const vocabulary: VocabWord[] = [
  // ============================================
  // GREETINGS & BASICS
  // ============================================
  {
    id: 'v001',
    french: 'bonjour',
    english: 'hello, good morning',
    partOfSpeech: 'interjection',
    category: 'greetings',
    sentences: [
      { french: 'Bonjour, comment allez-vous ?', english: 'Hello, how are you?' },
      { french: 'Bonjour ! Je m\'appelle Marie.', english: 'Hello! My name is Marie.' },
    ],
  },
  {
    id: 'v002',
    french: 'merci',
    english: 'thank you',
    partOfSpeech: 'interjection',
    category: 'greetings',
    sentences: [
      { french: 'Merci beaucoup pour votre aide.', english: 'Thank you very much for your help.' },
      { french: 'Merci, c\'est très gentil.', english: 'Thanks, that\'s very kind.' },
    ],
  },
  {
    id: 'v003',
    french: "s'il vous plaît",
    english: 'please (formal)',
    partOfSpeech: 'expression',
    category: 'courtesy',
    sentences: [
      { french: "Puis-je avoir un café, s'il vous plaît ?", english: "Can I have a coffee, please?" },
      { french: "Ouvrez la porte, s'il vous plaît.", english: "Open the door, please." },
    ],
  },
  {
    id: 'v004',
    french: 'au revoir',
    english: 'goodbye',
    partOfSpeech: 'interjection',
    category: 'greetings',
    sentences: [
      { french: 'Au revoir et à bientôt !', english: 'Goodbye and see you soon!' },
      { french: 'Au revoir, bonne soirée.', english: 'Goodbye, have a nice evening.' },
    ],
  },
  {
    id: 'v005',
    french: 'oui',
    english: 'yes',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Oui, je comprends très bien.', english: 'Yes, I understand very well.' },
      { french: 'Oui, c\'est exactement ça.', english: 'Yes, that\'s exactly right.' },
    ],
  },
  {
    id: 'v006',
    french: 'non',
    english: 'no',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Non, merci. Je n\'ai pas faim.', english: "No, thank you. I'm not hungry." },
      { french: 'Non, je ne parle pas anglais.', english: 'No, I don\'t speak English.' },
    ],
  },
  {
    id: 'v007',
    french: 'salut',
    english: 'hi, bye (informal)',
    partOfSpeech: 'interjection',
    category: 'greetings',
    sentences: [
      { french: 'Salut, ça va ?', english: "Hi, how's it going?" },
      { french: 'Salut ! On se voit demain.', english: "Hi! See you tomorrow." },
    ],
  },
  {
    id: 'v008',
    french: 'pardon',
    english: 'excuse me, sorry',
    partOfSpeech: 'interjection',
    category: 'courtesy',
    sentences: [
      { french: 'Pardon, où est la gare ?', english: 'Excuse me, where is the train station?' },
      { french: 'Pardon, je suis en retard.', english: 'Sorry, I\'m running late.' },
    ],
  },
  // ============================================
  // VERBS — être & avoir (to be, to have)
  // ============================================
  {
    id: 'v009',
    french: 'être',
    english: 'to be',
    partOfSpeech: 'verb',
    category: 'verbs',
    sentences: [
      { french: 'Je suis étudiant en français.', english: 'I am a student of French.' },
      { french: 'Nous sommes contents de vous voir.', english: 'We are happy to see you.' },
    ],
  },
  {
    id: 'v010',
    french: 'avoir',
    english: 'to have',
    partOfSpeech: 'verb',
    category: 'verbs',
    sentences: [
      { french: "J'ai un rendez-vous à midi.", english: 'I have an appointment at noon.' },
      { french: "Elle a deux enfants.", english: 'She has two children.' },
    ],
  },
  {
    id: 'v011',
    french: 'avoir faim',
    english: 'to be hungry',
    partOfSpeech: 'expression',
    category: 'food',
    sentences: [
      { french: "J'ai très faim ce matin.", english: "I'm very hungry this morning." },
      { french: "Tu as faim ? On peut manger.", english: "Are you hungry? We can eat." },
    ],
  },
  {
    id: 'v012',
    french: 'avoir soif',
    english: 'to be thirsty',
    partOfSpeech: 'expression',
    category: 'food',
    sentences: [
      { french: "J'ai soif après la course.", english: "I'm thirsty after the run." },
      { french: "Il a toujours soif en été.", english: "He's always thirsty in summer." },
    ],
  },
  // ============================================
  // COMMON VERBS
  // ============================================
  {
    id: 'v013',
    french: 'faire',
    english: 'to do, to make',
    partOfSpeech: 'verb',
    category: 'verbs',
    sentences: [
      { french: 'Je fais mes devoirs chaque soir.', english: 'I do my homework every evening.' },
      { french: 'Nous faisons la cuisine ensemble.', english: 'We cook together.' },
    ],
  },
  {
    id: 'v014',
    french: 'pouvoir',
    english: 'to be able to, can',
    partOfSpeech: 'verb',
    category: 'verbs',
    sentences: [
      { french: 'Est-ce que je peux vous aider ?', english: 'Can I help you?' },
      { french: 'Je peux parler un peu français.', english: 'I can speak a little French.' },
    ],
  },
  {
    id: 'v015',
    french: 'vouloir',
    english: 'to want',
    partOfSpeech: 'verb',
    category: 'verbs',
    sentences: [
      { french: 'Je veux apprendre le français.', english: 'I want to learn French.' },
      { french: 'Que voulez-vous manger ?', english: 'What do you want to eat?' },
    ],
  },
  {
    id: 'v016',
    french: 'savoir',
    english: 'to know (facts)',
    partOfSpeech: 'verb',
    category: 'verbs',
    sentences: [
      { french: 'Je sais où est la bibliothèque.', english: 'I know where the library is.' },
      { french: 'Je ne sais pas la réponse.', english: "I don't know the answer." },
    ],
  },
  {
    id: 'v017',
    french: 'aller',
    english: 'to go',
    partOfSpeech: 'verb',
    category: 'travel',
    sentences: [
      { french: 'Nous allons au marché demain.', english: 'We are going to the market tomorrow.' },
      { french: 'Je vais au travail en métro.', english: 'I go to work by metro.' },
    ],
  },
  {
    id: 'v018',
    french: 'venir',
    english: 'to come',
    partOfSpeech: 'verb',
    category: 'verbs',
    sentences: [
      { french: 'Il vient de Paris ce soir.', english: "He's coming from Paris tonight." },
      { french: 'Venez à la fête demain !', english: "Come to the party tomorrow!" },
    ],
  },
  {
    id: 'v019',
    french: 'manger',
    english: 'to eat',
    partOfSpeech: 'verb',
    category: 'food',
    sentences: [
      { french: 'Nous mangeons au restaurant ce soir.', english: 'We are eating at the restaurant tonight.' },
      { french: 'Je mange une pomme chaque matin.', english: 'I eat an apple every morning.' },
    ],
  },
  {
    id: 'v020',
    french: 'boire',
    english: 'to drink',
    partOfSpeech: 'verb',
    category: 'food',
    sentences: [
      { french: 'Je bois un café chaque matin.', english: 'I drink a coffee every morning.' },
      { french: "Qu'est-ce que vous voulez boire ?", english: 'What would you like to drink?' },
    ],
  },
  {
    id: 'v021',
    french: 'parler',
    english: 'to speak, to talk',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je parle français un peu.', english: 'I speak French a little.' },
      { french: 'Il parle très vite.', english: 'He speaks very fast.' },
    ],
  },
  {
    id: 'v022',
    french: 'comprendre',
    english: 'to understand',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je comprends maintenant.', english: 'I understand now.' },
      { french: 'Vous comprenez la question ?', english: 'Do you understand the question?' },
    ],
  },
  {
    id: 'v023',
    french: 'voir',
    english: 'to see',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je vois la tour Eiffel de ma fenêtre.', english: 'I see the Eiffel Tower from my window.' },
      { french: 'On se voit demain ?', english: "Shall we meet tomorrow?" },
    ],
  },
  {
    id: 'v024',
    french: 'savoir',
    english: 'to know (how to)',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je sais nager.', english: 'I know how to swim.' },
      { french: 'Elle sait jouer du piano.', english: 'She can play the piano.' },
    ],
  },
  {
    id: 'v025',
    french: 'prendre',
    english: 'to take, to have (food/drink)',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je prends le bus pour aller au travail.', english: 'I take the bus to go to work.' },
      { french: 'Il prend un café le matin.', english: 'He has a coffee in the morning.' },
    ],
  },
  {
    id: 'v026',
    french: 'mettre',
    english: 'to put, to place',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Mets le livre sur la table.', english: 'Put the book on the table.' },
      { french: 'Je me mets à côté de la fenêtre.', english: 'I sit next to the window.' },
    ],
  },
  {
    id: 'v027',
    french: 'donner',
    english: 'to give',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Donne-moi ton numéro de téléphone.', english: 'Give me your phone number.' },
      { french: 'Il donne des cours de maths.', english: 'He gives math lessons.' },
    ],
  },
  {
    id: 'v028',
    french: 'écrire',
    english: 'to write',
    partOfSpeech: 'verb',
    category: 'work',
    sentences: [
      { french: "J'écris une lettre à mes parents.", english: "I'm writing a letter to my parents." },
      { french: 'Elle écrit dans son journal chaque soir.', english: 'She writes in her journal every evening.' },
    ],
  },
  {
    id: 'v029',
    french: 'lire',
    english: 'to read',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je lis un livre avant de dormir.', english: 'I read a book before sleeping.' },
      { french: 'Il lit les nouvelles chaque matin.', english: 'He reads the news every morning.' },
    ],
  },
  {
    id: 'v030',
    french: 'dire',
    english: 'to say, to tell',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: "Dis-moi la vérité.", english: 'Tell me the truth.' },
      { french: 'Que dit cette phrase ?', english: 'What does this sentence say?' },
    ],
  },
  // ============================================
  // NOUNS — People & Places
  // ============================================
  {
    id: 'v031',
    french: 'l\'homme',
    english: 'man',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'people',
    sentences: [
      { french: "L'homme porte un costume noir.", english: 'The man is wearing a black suit.' },
      { french: "Cet homme est mon père.", english: 'This man is my father.' },
    ],
  },
  {
    id: 'v032',
    french: 'la femme',
    english: 'woman',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'people',
    sentences: [
      { french: 'La femme lit un livre.', english: 'The woman is reading a book.' },
      { french: 'Cette femme est médecin.', english: 'This woman is a doctor.' },
    ],
  },
  {
    id: 'v033',
    french: 'l\'enfant',
    english: 'child',
    partOfSpeech: 'noun',
    gender: 'm/f',
    category: 'family',
    sentences: [
      { french: "L'enfant joue dans le jardin.", english: 'The child is playing in the garden.' },
      { french: "J'ai deux enfants.", english: 'I have two children.' },
    ],
  },
  {
    id: 'v034',
    french: 'l\'ami',
    english: 'friend',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'people',
    sentences: [
      { french: "C'est mon meilleur ami.", english: 'He is my best friend.' },
      { french: "Mon ami parle français.", english: 'My friend speaks French.' },
    ],
  },
  {
    id: 'v035',
    french: 'la maison',
    english: 'house, home',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'daily',
    sentences: [
      { french: 'Ma maison est grande.', english: 'My house is big.' },
      { french: 'Je rentre à la maison.', english: "I'm going home." },
    ],
  },
  {
    id: 'v036',
    french: 'l\'école',
    english: 'school',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'education',
    sentences: [
      { french: "Les enfants vont à l'école.", english: 'The children go to school.' },
      { french: "J'étudie à l'école de français.", english: "I'm studying at the French school." },
    ],
  },
  {
    id: 'v037',
    french: 'le travail',
    english: 'work, job',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'work',
    sentences: [
      { french: 'Je cherche du travail.', english: "I'm looking for work." },
      { french: 'Il aime son travail.', english: 'He likes his job.' },
    ],
  },
  {
    id: 'v038',
    french: 'la ville',
    english: 'city, town',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'travel',
    sentences: [
      { french: 'Paris est une belle ville.', english: 'Paris is a beautiful city.' },
      { french: 'Je visite la ville demain.', english: "I'm visiting the city tomorrow." },
    ],
  },
  {
    id: 'v039',
    french: 'le pays',
    english: 'country',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'travel',
    sentences: [
      { french: 'La France est un beau pays.', english: 'France is a beautiful country.' },
      { french: "J'aime ce pays.", english: "I love this country." },
    ],
  },
  {
    id: 'v040',
    french: 'la rue',
    english: 'street',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'travel',
    sentences: [
      { french: 'La rue est très longue.', english: 'The street is very long.' },
      { french: "J'habite dans cette rue.", english: "I live on this street." },
    ],
  },
  // ============================================
  // FOOD & DRINK
  // ============================================
  {
    id: 'v041',
    french: 'le pain',
    english: 'bread',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'food',
    sentences: [
      { french: 'Je mange du pain avec du beurre.', english: 'I eat bread with butter.' },
      { french: 'Le pain est frais ce matin.', english: 'The bread is fresh this morning.' },
    ],
  },
  {
    id: 'v042',
    french: 'l\'eau',
    english: 'water',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'food',
    sentences: [
      { french: "J'ai besoin d'eau.", english: "I need water." },
      { french: "L'eau est froide.", english: 'The water is cold.' },
    ],
  },
  {
    id: 'v043',
    french: 'le café',
    english: 'coffee',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'food',
    sentences: [
      { french: 'Je bois un café chaque matin.', english: 'I drink a coffee every morning.' },
      { french: 'Un café, s\'il vous plaît.', english: 'A coffee, please.' },
    ],
  },
  {
    id: 'v044',
    french: 'le vin',
    english: 'wine',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'food',
    sentences: [
      { french: 'Le vin rouge est excellent.', english: 'The red wine is excellent.' },
      { french: "J'aime le vin français.", english: 'I like French wine.' },
    ],
  },
  {
    id: 'v045',
    french: 'le fromage',
    english: 'cheese',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'food',
    sentences: [
      { french: 'Le fromage français est célèbre.', english: 'French cheese is famous.' },
      { french: 'Je mange du fromage avec du pain.', english: 'I eat cheese with bread.' },
    ],
  },
  {
    id: 'v046',
    french: 'la pommes',
    english: 'apple',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'food',
    sentences: [
      { french: "Je mange une pomme par jour.", english: 'I eat an apple a day.' },
      { french: 'Les pommes sont rouges.', english: 'The apples are red.' },
    ],
  },
  {
    id: 'v047',
    french: 'le restaurants',
    english: 'restaurant',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'food',
    sentences: [
      { french: 'Allons au restaurant ce soir.', english: "Let's go to the restaurant tonight." },
      { french: 'Ce restaurant est très bon.', english: 'This restaurant is very good.' },
    ],
  },
  {
    id: 'v048',
    french: 'le petit déjeuner',
    english: 'breakfast',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'food',
    sentences: [
      { french: 'Je prends le petit déjeuner à huit heures.', english: 'I have breakfast at eight o\'clock.' },
      { french: "Qu'est-ce que tu manges au petit déjeuner ?", english: 'What do you eat for breakfast?' },
    ],
  },
  {
    id: 'v049',
    french: 'le dîner',
    english: 'dinner',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'food',
    sentences: [
      { french: 'Le dîner est à sept heures.', english: 'Dinner is at seven o\'clock.' },
      { french: 'Nous dînons ensemble chaque jour.', english: 'We have dinner together every day.' },
    ],
  },
  {
    id: 'v050',
    french: 'la carte',
    english: 'menu, map, card',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'food',
    sentences: [
      { french: "Je peux voir la carte, s'il vous plaît ?", english: 'Can I see the menu, please?' },
      { french: 'La carte de France.', english: 'The map of France.' },
    ],
  },
  // ============================================
  // TIME & NUMBERS
  // ============================================
  {
    id: 'v051',
    french: 'aujourd\'hui',
    english: 'today',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: "Aujourd'hui, je reste à la maison.", english: 'Today, I\'m staying home.' },
      { french: "Aujourd'hui est un beau jour.", english: 'Today is a beautiful day.' },
    ],
  },
  {
    id: 'v052',
    french: 'demain',
    english: 'tomorrow',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Demain, je voyage à Paris.', english: 'Tomorrow, I\'m traveling to Paris.' },
      { french: 'À demain !', english: 'See you tomorrow!' },
    ],
  },
  {
    id: 'v053',
    french: 'hier',
    english: 'yesterday',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Hier, il a plu.', english: 'Yesterday, it rained.' },
      { french: "Je l'ai vu hier.", english: 'I saw him yesterday.' },
    ],
  },
  {
    id: 'v054',
    french: 'maintenant',
    english: 'now',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Je suis disponible maintenant.', english: 'I am available now.' },
      { french: "Maintenant, je comprends.", english: "Now, I understand." },
    ],
  },
  {
    id: 'v055',
    french: 'toujours',
    english: 'always',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Il est toujours à l\'heure.', english: 'He is always on time.' },
      { french: 'Je t\'aime toujours.', english: 'I still love you.' },
    ],
  },
  {
    id: 'v056',
    french: 'jamais',
    english: 'never',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Je ne mens jamais.', english: 'I never lie.' },
      { french: 'Vous n\'êtes jamais en retard.', english: "You're never late." },
    ],
  },
  {
    id: 'v057',
    french: 'souvent',
    english: 'often',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Je vais souvent au cinéma.', english: 'I often go to the cinema.' },
      { french: 'Il mange souvent au restaurant.', english: 'He often eats at the restaurant.' },
    ],
  },
  {
    id: 'v058',
    french: 'parfois',
    english: 'sometimes',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Parfois, je travaille le week-end.', english: 'Sometimes, I work on weekends.' },
      { french: 'Parfois, il pleut.', english: 'Sometimes, it rains.' },
    ],
  },
  {
    id: 'v059',
    french: 'le matin',
    english: 'morning',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'time',
    sentences: [
      { french: 'Je me lève tôt le matin.', english: 'I get up early in the morning.' },
      { french: 'Chaque matin, je bois du café.', english: 'Every morning, I drink coffee.' },
    ],
  },
  {
    id: 'v060',
    french: 'le soir',
    english: 'evening',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'time',
    sentences: [
      { french: 'Je regarde la télé le soir.', english: 'I watch TV in the evening.' },
      { french: 'Ce soir, nous sortons.', english: "Tonight, we're going out." },
    ],
  },
  // ============================================
  // DAILY LIFE
  // ============================================
  {
    id: 'v061',
    french: 'l\'argent',
    english: 'money',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'daily',
    sentences: [
      { french: "J'ai besoin d'argent.", english: 'I need money.' },
      { french: "L'argent ne fait pas le bonheur.", english: 'Money doesn\'t buy happiness.' },
    ],
  },
  {
    id: 'v062',
    french: 'le temps',
    english: 'time, weather',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'time',
    sentences: [
      { french: 'Je n\'ai pas le temps.', english: "I don't have time." },
      { french: 'Quel temps fait-il ?', english: 'What\'s the weather like?' },
    ],
  },
  {
    id: 'v063',
    french: 'la vie',
    english: 'life',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'daily',
    sentences: [
      { french: 'La vie est belle.', english: 'Life is beautiful.' },
      { french: 'C\'est la vie !', english: "That's life!" },
    ],
  },
  {
    id: 'v064',
    french: 'le jour',
    english: 'day',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'time',
    sentences: [
      { french: 'Quel jour sommes-nous ?', english: 'What day is it today?' },
      { french: 'Un jour, je visitrai la France.', english: 'One day, I will visit France.' },
    ],
  },
  {
    id: 'v065',
    french: 'la semaine',
    english: 'week',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'time',
    sentences: [
      { french: 'La semaine a sept jours.', english: 'The week has seven days.' },
      { french: 'Je pars en vacances la semaine prochaine.', english: "I'm leaving for vacation next week." },
    ],
  },
  {
    id: 'v066',
    french: 'l\'année',
    english: 'year',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'time',
    sentences: [
      { french: "L'année passée, j'ai voyagé.", english: 'Last year, I traveled.' },
      { french: 'Bonne année !', english: 'Happy New Year!' },
    ],
  },
  {
    id: 'v067',
    french: 'avant',
    english: 'before',
    partOfSpeech: 'preposition',
    category: 'time',
    sentences: [
      { french: 'Venez avant midi.', english: 'Come before noon.' },
      { french: 'Je me lève avant le soleil.', english: 'I wake up before the sun.' },
    ],
  },
  {
    id: 'v068',
    french: 'après',
    english: 'after',
    partOfSpeech: 'preposition',
    category: 'time',
    sentences: [
      { french: 'Je travaille après le déjeuner.', english: 'I work after lunch.' },
      { french: 'Après vous !', english: 'After you!' },
    ],
  },
  {
    id: 'v069',
    french: 'pendant',
    english: 'during',
    partOfSpeech: 'preposition',
    category: 'time',
    sentences: [
      { french: 'Je lis pendant le voyage.', english: 'I read during the trip.' },
      { french: 'Il dort pendant le film.', english: 'He sleeps during the movie.' },
    ],
  },
  {
    id: 'v070',
    french: 'jusqu\'à',
    english: 'until',
    partOfSpeech: 'preposition',
    category: 'time',
    sentences: [
      { french: 'Je travaille jusqu\'à six heures.', english: 'I work until six o\'clock.' },
      { french: 'Attendez jusqu\'à demain.', english: 'Wait until tomorrow.' },
    ],
  },
  // ============================================
  // FAMILY
  // ============================================
  {
    id: 'v071',
    french: 'la famille',
    english: 'family',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'family',
    sentences: [
      { french: "Ma famille habite à Lyon.", english: 'My family lives in Lyon.' },
      { french: 'La famille est importante.', english: 'Family is important.' },
    ],
  },
  {
    id: 'v072',
    french: 'la mère',
    english: 'mother',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'family',
    sentences: [
      { french: 'Ma mère cuisine très bien.', english: 'My mother cooks very well.' },
      { french: "J'appelle ma mère chaque semaine.", english: "I call my mother every week." },
    ],
  },
  {
    id: 'v073',
    french: 'le père',
    english: 'father',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'family',
    sentences: [
      { french: 'Mon père travaille dans une banque.', english: 'My father works in a bank.' },
      { french: 'Je ressemble à mon père.', english: 'I look like my father.' },
    ],
  },
  {
    id: 'v074',
    french: 'le frère',
    english: 'brother',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'family',
    sentences: [
      { french: "Mon frère est plus âgé que moi.", english: 'My brother is older than me.' },
      { french: "Je joue au football avec mon frère.", english: 'I play football with my brother.' },
    ],
  },
  {
    id: 'v075',
    french: 'la sœur',
    english: 'sister',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'family',
    sentences: [
      { french: "Ma sœur habite à Paris.", english: 'My sister lives in Paris.' },
      { french: 'Je vais au cinéma avec ma sœur.', english: "I'm going to the cinema with my sister." },
    ],
  },
  {
    id: 'v076',
    french: 'le mari',
    english: 'husband',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'family',
    sentences: [
      { french: "Mon mari travaille beaucoup.", english: 'My husband works a lot.' },
      { french: "Je suis mariée depuis cinq ans.", english: "I've been married for five years." },
    ],
  },
  {
    id: 'v077',
    french: 'la femme',
    english: 'wife',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'family',
    sentences: [
      { french: 'Ma femme est professeur.', english: 'My wife is a teacher.' },
      { french: 'Je cuisine pour ma femme.', english: "I cook for my wife." },
    ],
  },
  {
    id: 'v078',
    french: 'l\'enfant',
    english: 'child',
    partOfSpeech: 'noun',
    gender: 'm/f',
    category: 'family',
    sentences: [
      { french: "Nous avons trois enfants.", english: 'We have three children.' },
      { french: "L'enfant joue dans le parc.", english: 'The child is playing in the park.' },
    ],
  },
  // ============================================
  // ADJECTIVES
  // ============================================
  {
    id: 'v079',
    french: 'grand',
    english: 'big, tall, great',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: 'Paris est une grande ville.', english: 'Paris is a big city.' },
      { french: 'Il est très grand.', english: 'He is very tall.' },
    ],
  },
  {
    id: 'v080',
    french: 'petit',
    english: 'small, short',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: 'J\'ai un petit appartement.', english: 'I have a small apartment.' },
      { french: 'Il est petit pour son âge.', english: 'He is short for his age.' },
    ],
  },
  {
    id: 'v081',
    french: 'bon',
    english: 'good',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: 'C\'est un bon restaurant.', english: "It's a good restaurant." },
      { french: 'Le café est très bon.', english: 'The coffee is very good.' },
    ],
  },
  {
    id: 'v082',
    french: 'mauvais',
    english: 'bad',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: 'Le temps est mauvais aujourd\'hui.', english: "The weather is bad today." },
      { french: "Ce n'est pas mauvais.", english: "It's not bad." },
    ],
  },
  {
    id: 'v083',
    french: 'nouveau',
    english: 'new',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: "J'ai un nouveau travail.", english: 'I have a new job.' },
      { french: 'C\'est une nouvelle idée.', english: "It's a new idea." },
    ],
  },
  {
    id: 'v084',
    french: 'vieux',
    english: 'old',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: 'Ma grand-mère est très vieille.', english: 'My grandmother is very old.' },
      { french: 'C\'est un vieux bâtiment.', english: "It's an old building." },
    ],
  },
  {
    id: 'v085',
    french: 'beau',
    english: 'beautiful, handsome',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: 'Paris est une belle ville.', english: 'Paris is a beautiful city.' },
      { french: 'Il est très beau.', english: 'He is very handsome.' },
    ],
  },
  {
    id: 'v086',
    french: 'joli',
    english: 'pretty, nice',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: 'Elle porte une robe jolie.', english: 'She is wearing a pretty dress.' },
      { french: "C'est un joli jardin.", english: "It's a nice garden." },
    ],
  },
  {
    id: 'v087',
    french: 'chaud',
    english: 'hot, warm',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: "Il fait très chaud aujourd'hui.", english: "It's very hot today." },
      { french: "L'eau est chaude.", english: 'The water is hot.' },
    ],
  },
  {
    id: 'v088',
    french: 'froid',
    english: 'cold, cool',
    partOfSpeech: 'adjective',
    category: 'basics',
    sentences: [
      { french: "Il fait froid en hiver.", english: "It's cold in winter." },
      { french: "J'ai froid.", english: "I'm cold." },
    ],
  },
  {
    id: 'v089',
    french: 'facile',
    english: 'easy',
    partOfSpeech: 'adjective',
    category: 'education',
    sentences: [
      { french: "Ce exercice est facile.", english: 'This exercise is easy.' },
      { french: 'Le français est facile à apprendre.', english: 'French is easy to learn.' },
    ],
  },
  {
    id: 'v090',
    french: 'difficile',
    english: 'difficult',
    partOfSpeech: 'adjective',
    category: 'education',
    sentences: [
      { french: 'Cette question est difficile.', english: 'This question is difficult.' },
      { french: 'Le problème est difficile à résoudre.', english: 'The problem is difficult to solve.' },
    ],
  },
  // ============================================
  // EMOTIONS
  // ============================================
  {
    id: 'v091',
    french: 'content',
    english: 'happy, glad',
    partOfSpeech: 'adjective',
    category: 'emotions',
    sentences: [
      { french: 'Je suis content de vous voir.', english: 'I am happy to see you.' },
      { french: 'Elle est très contente.', english: 'She is very happy.' },
    ],
  },
  {
    id: 'v092',
    french: 'triste',
    english: 'sad',
    partOfSpeech: 'adjective',
    category: 'emotions',
    sentences: [
      { french: 'Il a l\'air triste.', english: 'He looks sad.' },
      { french: "Je suis triste quand il pleut.", english: "I'm sad when it rains." },
    ],
  },
  {
    id: 'v093',
    french: 'bien',
    english: 'well, good',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Je me porte bien.', english: "I'm doing well." },
      { french: 'C\'est très bien !', english: "That's very good!" },
    ],
  },
  {
    id: 'v094',
    french: 'très',
    english: 'very',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Il fait très beau.', english: "It's very nice weather." },
      { french: 'Je suis très content.', english: 'I am very happy.' },
    ],
  },
  {
    id: 'v095',
    french: 'aussi',
    english: 'also, too',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Je parle français aussi.', english: 'I speak French too.' },
      { french: 'Elle est intelligente et gentille aussi.', english: 'She is intelligent and kind too.' },
    ],
  },
  {
    id: 'v096',
    french: 'encore',
    english: 'again, still',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Encore une fois !', english: 'One more time!' },
      { french: 'Il est encore là.', english: 'He is still there.' },
    ],
  },
  {
    id: 'v097',
    french: 'plus',
    english: 'more',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: "Je veux en savoir plus.", english: 'I want to know more.' },
      { french: "C'est plus intéressant.", english: "It's more interesting." },
    ],
  },
  {
    id: 'v098',
    french: 'moins',
    english: 'less',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Je mange moins le soir.', english: 'I eat less in the evening.' },
      { french: 'C\'est moins cher.', english: "It's less expensive." },
    ],
  },
  {
    id: 'v099',
    french: 'trop',
    english: 'too much',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: "C'est trop cher.", english: "It's too expensive." },
      { french: 'Je travaille trop.', english: 'I work too much.' },
    ],
  },
  {
    id: 'v100',
    french: 'beaucoup',
    english: 'a lot, much',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Je t\'aime beaucoup.', english: 'I love you a lot.' },
      { french: 'Il parle beaucoup.', english: 'He talks a lot.' },
    ],
  },
  // ============================================
  // QUESTIONS
  // ============================================
  {
    id: 'v101',
    french: 'qui',
    english: 'who',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: "Qui est-ce ?", english: 'Who is it?' },
      { french: 'Qui veut du café ?', english: 'Who wants coffee?' },
    ],
  },
  {
    id: 'v102',
    french: 'que',
    english: 'what, that',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: "Qu'est-ce que c'est ?", english: 'What is it?' },
      { french: 'Je sais qu\'il vient.', english: 'I know that he is coming.' },
    ],
  },
  {
    id: 'v103',
    french: 'où',
    english: 'where',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Où habitez-vous ?', english: 'Where do you live?' },
      { french: 'Où est la gare ?', english: 'Where is the train station?' },
    ],
  },
  {
    id: 'v104',
    french: 'quand',
    english: 'when',
    partOfSpeech: 'adverb',
    category: 'time',
    sentences: [
      { french: 'Quand partez-vous ?', english: 'When are you leaving?' },
      { french: 'Je ne sais pas quand il arrive.', english: "I don't know when he arrives." },
    ],
  },
  {
    id: 'v105',
    french: 'comment',
    english: 'how',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Comment allez-vous ?', english: 'How are you?' },
      { french: "Comment dit-on 'hello' en français ?", english: "How do you say 'hello' in French?" },
    ],
  },
  {
    id: 'v106',
    french: 'pourquoi',
    english: 'why',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Pourquoi pas ?', english: 'Why not?' },
      { french: 'Je me demande pourquoi.', english: "I wonder why." },
    ],
  },
  {
    id: 'v107',
    french: 'combien',
    english: 'how much, how many',
    partOfSpeech: 'adverb',
    category: 'basics',
    sentences: [
      { french: 'Combien ça coûte ?', english: 'How much does it cost?' },
      { french: 'Combien de temps ?', english: 'How much time?' },
    ],
  },
  // ============================================
  // CONJUNCTIONS & PREPOSITIONS
  // ============================================
  {
    id: 'v108',
    french: 'et',
    english: 'and',
    partOfSpeech: 'conjunction',
    category: 'basics',
    sentences: [
      { french: 'Le café et le pain.', english: 'Coffee and bread.' },
      { french: 'Je parle français et anglais.', english: 'I speak French and English.' },
    ],
  },
  {
    id: 'v109',
    french: 'ou',
    english: 'or',
    partOfSpeech: 'conjunction',
    category: 'basics',
    sentences: [
      { french: 'Café ou thé ?', english: 'Coffee or tea?' },
      { french: 'Vous pouvez attendre ou partir.', english: 'You can wait or leave.' },
    ],
  },
  {
    id: 'v110',
    french: 'mais',
    english: 'but',
    partOfSpeech: 'conjunction',
    category: 'basics',
    sentences: [
      { french: 'Je suis fatigué, mais je travaille.', english: "I'm tired, but I'm working." },
      { french: 'C\'est cher, mais c\'est bon.', english: "It's expensive, but it's good." },
    ],
  },
  {
    id: 'v111',
    french: 'avec',
    english: 'with',
    partOfSpeech: 'preposition',
    category: 'basics',
    sentences: [
      { french: 'Je suis avec mes amis.', english: 'I am with my friends.' },
      { french: 'Un café avec du lait.', english: 'A coffee with milk.' },
    ],
  },
  {
    id: 'v112',
    french: 'sans',
    english: 'without',
    partOfSpeech: 'preposition',
    category: 'basics',
    sentences: [
      { french: "Je bois du café sans sucre.", english: 'I drink coffee without sugar.' },
      { french: 'Impossible sans effort.', english: 'Impossible without effort.' },
    ],
  },
  {
    id: 'v113',
    french: 'pour',
    english: 'for, in order to',
    partOfSpeech: 'preposition',
    category: 'basics',
    sentences: [
      { french: 'C\'est pour vous.', english: "It's for you." },
      { french: 'Je travaille pour vivre.', english: 'I work to live.' },
    ],
  },
  {
    id: 'v114',
    french: 'dans',
    english: 'in, inside',
    partOfSpeech: 'preposition',
    category: 'basics',
    sentences: [
      { french: 'Le livre est dans le sac.', english: 'The book is in the bag.' },
      { french: 'Je vais dans la ville.', english: "I'm going into the city." },
    ],
  },
  {
    id: 'v115',
    french: 'sur',
    english: 'on, onto',
    partOfSpeech: 'preposition',
    category: 'basics',
    sentences: [
      { french: 'Le livre est sur la table.', english: 'The book is on the table.' },
      { french: 'Il est sur la route.', english: 'He is on the road.' },
    ],
  },
  {
    id: 'v116',
    french: 'sous',
    english: 'under',
    partOfSpeech: 'preposition',
    category: 'basics',
    sentences: [
      { french: 'Le chat est sous la chaise.', english: 'The cat is under the chair.' },
      { french: 'Sous la pluie.', english: 'Under the rain.' },
    ],
  },
  {
    id: 'v117',
    french: 'entre',
    english: 'between, among',
    partOfSpeech: 'preposition',
    category: 'basics',
    sentences: [
      { french: "Entrez entre les deux arbres.", english: 'Enter between the two trees.' },
      { french: "L'amour entre deux personnes.", english: 'The love between two people.' },
    ],
  },
  // ============================================
  // PRONOUNS
  // ============================================
  {
    id: 'v118',
    french: 'je',
    english: 'I',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Je parle français.', english: 'I speak French.' },
      { french: "Je suis content.", english: "I am happy." },
    ],
  },
  {
    id: 'v119',
    french: 'tu',
    english: 'you (informal)',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Tu parles bien français.', english: 'You speak French well.' },
      { french: 'Comment tu t\'appelles ?', english: 'What is your name?' },
    ],
  },
  {
    id: 'v120',
    french: 'il',
    english: 'he, it',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Il est français.', english: 'He is French.' },
      { french: 'Il pleut.', english: 'It is raining.' },
    ],
  },
  {
    id: 'v121',
    french: 'elle',
    english: 'she, it',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Elle est française.', english: 'She is French.' },
      { french: 'Elle est très gentille.', english: 'She is very kind.' },
    ],
  },
  {
    id: 'v122',
    french: 'nous',
    english: 'we',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Nous allons au cinéma.', english: "We're going to the cinema." },
      { french: 'Nous sommes étudiants.', english: 'We are students.' },
    ],
  },
  {
    id: 'v123',
    french: 'vous',
    english: 'you (formal/plural)',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Vous parlez français très bien.', english: 'You speak French very well.' },
      { french: 'Comment allez-vous ?', english: 'How are you?' },
    ],
  },
  {
    id: 'v124',
    french: 'ils',
    english: 'they (masculine)',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Ils sont français.', english: 'They are French.' },
      { french: 'Ils travaillent ensemble.', english: 'They work together.' },
    ],
  },
  {
    id: 'v125',
    french: 'elles',
    english: 'they (feminine)',
    partOfSpeech: 'pronoun',
    category: 'basics',
    sentences: [
      { french: 'Elles sont françaises.', english: 'They are French.' },
      { french: 'Elles aiment la musique.', english: 'They like music.' },
    ],
  },
  // ============================================
  // MORE DAILY LIFE
  // ============================================
  {
    id: 'v126',
    french: 'le livre',
    english: 'book',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'education',
    sentences: [
      { french: 'Je lis un livre.', english: 'I am reading a book.' },
      { french: "C'est un bon livre.", english: "It's a good book." },
    ],
  },
  {
    id: 'v127',
    french: 'l\'école',
    english: 'school',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'education',
    sentences: [
      { french: "Les enfants vont à l'école.", english: 'The children go to school.' },
      { french: "L'école commence à huit heures.", english: 'School starts at eight o\'clock.' },
    ],
  },
  {
    id: 'v128',
    french: 'le téléphone',
    english: 'telephone, phone',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'daily',
    sentences: [
      { french: 'Mon téléphone ne fonctionne pas.', english: 'My phone is not working.' },
      { french: "Téléphonez-moi demain.", english: 'Call me tomorrow.' },
    ],
  },
  {
    id: 'v129',
    french: 'l\'ordinateur',
    english: 'computer',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'work',
    sentences: [
      { french: "J'utilise l'ordinateur pour travailler.", english: 'I use the computer to work.' },
      { french: "L'ordinateur est sur le bureau.", english: 'The computer is on the desk.' },
    ],
  },
  {
    id: 'v130',
    french: 'la porte',
    english: 'door',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'daily',
    sentences: [
      { french: "Ouvrez la porte, s'il vous plaît.", english: 'Open the door, please.' },
      { french: 'La porte est fermée.', english: 'The door is closed.' },
    ],
  },
  {
    id: 'v131',
    french: 'la fenêtre',
    english: 'window',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'daily',
    sentences: [
      { french: "J'ouvre la fenêtre.", english: 'I open the window.' },
      { french: 'La vue de la fenêtre est belle.', english: 'The view from the window is beautiful.' },
    ],
  },
  {
    id: 'v132',
    french: 'le train',
    english: 'train',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'travel',
    sentences: [
      { french: 'Je prends le train pour Paris.', english: 'I take the train to Paris.' },
      { french: 'Le train arrive à midi.', english: 'The train arrives at noon.' },
    ],
  },
  {
    id: 'v133',
    french: 'l\'avion',
    english: 'airplane',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'travel',
    sentences: [
      { french: "L'avion décolle à dix heures.", english: 'The airplane takes off at ten o\'clock.' },
      { french: 'Je déteste prendre l\'avion.', english: 'I hate flying.' },
    ],
  },
  {
    id: 'v134',
    french: 'la ville',
    english: 'city, town',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'travel',
    sentences: [
      { french: 'Paris est une grande ville.', english: 'Paris is a big city.' },
      { french: 'Je visite la ville.', english: "I'm visiting the city." },
    ],
  },
  {
    id: 'v135',
    french: 'le pays',
    english: 'country',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'travel',
    sentences: [
      { french: 'La France est un beau pays.', english: 'France is a beautiful country.' },
      { french: "C'est mon pays natal.", english: "It's my home country." },
    ],
  },
  // ============================================
  // WORK & PROFESSIONS
  // ============================================
  {
    id: 'v136',
    french: 'travailler',
    english: 'to work',
    partOfSpeech: 'verb',
    category: 'work',
    sentences: [
      { french: 'Je travaille dans un bureau.', english: 'I work in an office.' },
      { french: 'Il travaille dur.', english: 'He works hard.' },
    ],
  },
  {
    id: 'v137',
    french: 'apprendre',
    english: 'to learn',
    partOfSpeech: 'verb',
    category: 'education',
    sentences: [
      { french: "J'apprends le français.", english: "I'm learning French." },
      { french: "C'est important d'apprendre.", english: 'It is important to learn.' },
    ],
  },
  {
    id: 'v138',
    french: 'étudier',
    english: 'to study',
    partOfSpeech: 'verb',
    category: 'education',
    sentences: [
      { french: "J'étudie à l'université.", english: "I'm studying at the university." },
      { french: "Étudiez le français chaque jour.", english: 'Study French every day.' },
    ],
  },
  {
    id: 'v139',
    french: 'le métier',
    english: 'profession, job',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'work',
    sentences: [
      { french: 'Quel est votre métier ?', english: 'What is your profession?' },
      { french: "C'est un métier difficile.", english: "It's a difficult job." },
    ],
  },
  {
    id: 'v140',
    french: 'le patron',
    english: 'boss',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'work',
    sentences: [
      { french: 'Mon patron est gentil.', english: 'My boss is nice.' },
      { french: 'Je parle au patron.', english: "I'm talking to the boss." },
    ],
  },
  // ============================================
  // TRAVEL & TRANSPORT
  // ============================================
  {
    id: 'v141',
    french: 'voyager',
    english: 'to travel',
    partOfSpeech: 'verb',
    category: 'travel',
    sentences: [
      { french: "J'aime voyager.", english: 'I like to travel.' },
      { french: 'Nous voyageons beaucoup.', english: 'We travel a lot.' },
    ],
  },
  {
    id: 'v142',
    french: 'l\'hôtel',
    english: 'hotel',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'travel',
    sentences: [
      { french: "L'hôtel est complet.", english: 'The hotel is full.' },
      { french: "Je réserve une chambre d'hôtel.", english: 'I book a hotel room.' },
    ],
  },
  {
    id: 'v143',
    french: 'le passeport',
    english: 'passport',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'travel',
    sentences: [
      { french: "J'ai besoin de mon passeport.", english: 'I need my passport.' },
      { french: 'Le passeport est dans le sac.', english: 'The passport is in the bag.' },
    ],
  },
  {
    id: 'v144',
    french: 'la valise',
    english: 'suitcase',
    partOfSpeech: 'noun',
    gender: 'f',
    category: 'travel',
    sentences: [
      { french: 'Je fais ma valise.', english: "I'm packing my suitcase." },
      { french: 'La valise est lourde.', english: 'The suitcase is heavy.' },
    ],
  },
  {
    id: 'v145',
    french: 'l\'aéroport',
    english: 'airport',
    partOfSpeech: 'noun',
    gender: 'm',
    category: 'travel',
    sentences: [
      { french: "L'avion part de l'aéroport.", english: 'The plane leaves from the airport.' },
      { french: "J'attends à l'aéroport.", english: "I'm waiting at the airport." },
    ],
  },
  // ============================================
  // SHOPPING
  // ============================================
  {
    id: 'v146',
    french: 'acheter',
    english: 'to buy',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je veux acheter des chaussures.', english: 'I want to buy shoes.' },
      { french: 'Où peut-on acheter du pain ?', english: 'Where can one buy bread?' },
    ],
  },
  {
    id: 'v147',
    french: 'vendre',
    english: 'to sell',
    partOfSpeech: 'verb',
    category: 'daily',
    sentences: [
      { french: 'Je vends ma voiture.', english: 'I am selling my car.' },
      { french: 'Ce magasin vend des vêtements.', english: 'This store sells clothes.' },
    ],
  },
  ...vocabularyExtra,
];

export const VOCABULARY_COUNT = vocabulary.length;
