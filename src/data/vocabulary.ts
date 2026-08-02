export interface VocabWord {
  id: number;
  french: string;
  english: string;
  partOfSpeech: string;
  gender?: string;
  category: string;
  sentenceFR: string;
  sentenceEN: string;
  audioUrl?: string;
}

export const vocabulary: VocabWord[] = [
  // Greetings & Basics
  { id: 1, french: "bonjour", english: "hello, good morning", partOfSpeech: "interjection", category: "greetings", sentenceFR: "Bonjour, comment allez-vous ?", sentenceEN: "Hello, how are you?" },
  { id: 2, french: "merci", english: "thank you", partOfSpeech: "interjection", category: "greetings", sentenceFR: "Merci beaucoup pour votre aide.", sentenceEN: "Thank you very much for your help." },
  { id: 3, french: "s'il vous plaît", english: "please (formal)", partOfSpeech: "expression", category: "courtesy", sentenceFR: "Puis-je avoir un café, s'il vous plaît ?", sentenceEN: "Can I have a coffee, please?" },
  { id: 4, french: "au revoir", english: "goodbye", partOfSpeech: "interjection", category: "greetings", sentenceFR: "Au revoir et à bientôt !", sentenceEN: "Goodbye and see you soon!" },
  { id: 5, french: "oui", english: "yes", partOfSpeech: "adverb", category: "basics", sentenceFR: "Oui, je comprends très bien.", sentenceEN: "Yes, I understand very well." },
  { id: 6, french: "non", english: "no", partOfSpeech: "adverb", category: "basics", sentenceFR: "Non, merci. Je n'ai pas faim.", sentenceEN: "No, thank you. I'm not hungry." },
  { id: 7, french: "salut", english: "hi, bye (informal)", partOfSpeech: "interjection", category: "greetings", sentenceFR: "Salut, ça va ?", sentenceEN: "Hi, how's it going?" },
  { id: 8, french: "pardon", english: "excuse me, sorry", partOfSpeech: "interjection", category: "courtesy", sentenceFR: "Pardon, où est la gare ?", sentenceEN: "Excuse me, where is the train station?" },
  // Verbs — être & avoir
  { id: 9, french: "être", english: "to be", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je suis étudiant en France.", sentenceEN: "I am a student in France." },
  { id: 10, french: "avoir", english: "to have", partOfSpeech: "verb", category: "verbs", sentenceFR: "J'ai deux sœurs et un frère.", sentenceEN: "I have two sisters and one brother." },
  { id: 11, french: "avoir faim", english: "to be hungry", partOfSpeech: "expression", category: "expressions", sentenceFR: "J'ai faim. Allons manger !", sentenceEN: "I'm hungry. Let's go eat!" },
  { id: 12, french: "avoir soif", english: "to be thirsty", partOfSpeech: "expression", category: "expressions", sentenceFR: "J'ai très soif après le sport.", sentenceEN: "I'm very thirsty after sport." },
  { id: 13, french: "avoir peur", english: "to be afraid", partOfSpeech: "expression", category: "expressions", sentenceFR: "Elle a peur du chien.", sentenceEN: "She's afraid of the dog." },
  { id: 14, french: "avoir raison", english: "to be right", partOfSpeech: "expression", category: "expressions", sentenceFR: "Tu as raison, c'est la meilleure option.", sentenceEN: "You're right, it's the best option." },
  { id: 15, french: "il y a", english: "there is, there are", partOfSpeech: "expression", category: "expressions", sentenceFR: "Il y a beaucoup de livres ici.", sentenceEN: "There are a lot of books here." },
  // Common verbs
  { id: 16, french: "faire", english: "to do, to make", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je fais mes devoirs chaque soir.", sentenceEN: "I do my homework every evening." },
  { id: 17, french: "pouvoir", english: "to be able to, can", partOfSpeech: "verb", category: "verbs", sentenceFR: "Est-ce que je peux vous aider ?", sentenceEN: "Can I help you?" },
  { id: 18, french: "vouloir", english: "to want", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je veux apprendre le français.", sentenceEN: "I want to learn French." },
  { id: 19, french: "savoir", english: "to know (facts)", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je sais où est la bibliothèque.", sentenceEN: "I know where the library is." },
  { id: 20, french: "aller", english: "to go", partOfSpeech: "verb", category: "verbs", sentenceFR: "Nous allons au marché demain.", sentenceEN: "We are going to the market tomorrow." },
  { id: 21, french: "venir", english: "to come", partOfSpeech: "verb", category: "verbs", sentenceFR: "Il vient de Paris.", sentenceEN: "He comes from Paris." },
  { id: 22, french: "manger", english: "to eat", partOfSpeech: "verb", category: "food", sentenceFR: "Nous mangeons au restaurant ce soir.", sentenceEN: "We are eating at the restaurant tonight." },
  { id: 23, french: "boire", english: "to drink", partOfSpeech: "verb", category: "food", sentenceFR: "Je bois du café chaque matin.", sentenceEN: "I drink coffee every morning." },
  { id: 24, french: "parler", english: "to speak, to talk", partOfSpeech: "verb", category: "communication", sentenceFR: "Je parle français couramment.", sentenceEN: "I speak French fluently." },
  { id: 25, french: "comprendre", english: "to understand", partOfSpeech: "verb", category: "communication", sentenceFR: "Je ne comprends pas cette phrase.", sentenceEN: "I don't understand this sentence." },
  { id: 26, french: "apprendre", english: "to learn", partOfSpeech: "verb", category: "education", sentenceFR: "J'apprends le français depuis deux ans.", sentenceEN: "I have been learning French for two years." },
  { id: 27, french: "dire", english: "to say, to tell", partOfSpeech: "verb", category: "communication", sentenceFR: "Dis-moi la vérité.", sentenceEN: "Tell me the truth." },
  { id: 28, french: "prendre", english: "to take", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je prends le bus pour aller au travail.", sentenceEN: "I take the bus to go to work." },
  { id: 29, french: "mettre", english: "to put, to place", partOfSpeech: "verb", category: "verbs", sentenceFR: " Mets tes affaires sur la table.", sentenceEN: "Put your things on the table." },
  { id: 30, french: "donner", english: "to give", partOfSpeech: "verb", category: "verbs", sentenceFR: "Il m'a donné un beau cadeau.", sentenceEN: "He gave me a beautiful gift." },
  { id: 31, french: "voir", english: "to see", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je vois un bel arbre dans le jardin.", sentenceEN: "I see a beautiful tree in the garden." },
  { id: 32, french: "croire", english: "to believe, to think", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je crois que c'est une bonne idée.", sentenceEN: "I think it's a good idea." },
  { id: 33, french: "devoir", english: "must, to have to", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je dois partir maintenant.", sentenceEN: "I must leave now." },
  { id: 34, french: "vivre", english: "to live", partOfSpeech: "verb", category: "life", sentenceFR: "Nous vivons à Lyon.", sentenceEN: "We live in Lyon." },
  { id: 35, french: "écrire", english: "to write", partOfSpeech: "verb", category: "education", sentenceFR: "Elle écrit une lettre à ses parents.", sentenceEN: "She is writing a letter to her parents." },
  { id: 36, french: "lire", english: "to read", partOfSpeech: "verb", category: "education", sentenceFR: "J'aime lire des romans le week-end.", sentenceEN: "I like reading novels on the weekend." },
  { id: 37, french: "attendre", english: "to wait", partOfSpeech: "verb", category: "daily-life", sentenceFR: "J'attends l'autobus depuis une heure.", sentenceEN: "I have been waiting for the bus for an hour." },
  { id: 38, french: "trouver", english: "to find", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je ne trouve pas mes clés.", sentenceEN: "I can't find my keys." },
  { id: 39, french: "penser", english: "to think", partOfSpeech: "verb", category: "verbs", sentenceFR: "Je pense donc je suis.", sentenceEN: "I think, therefore I am." },
  { id: 40, french: "regarder", english: "to watch, to look", partOfSpeech: "verb", category: "media", sentenceFR: "Nous regardons un film ce soir.", sentenceEN: "We are watching a film tonight." },
  // Pronouns & people
  { id: 41, french: "je", english: "I", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Je suisContent de vous voir.", sentenceEN: "I am happy to see you." },
  { id: 42, french: "tu", english: "you (informal)", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Tu es mon meilleur ami.", sentenceEN: "You are my best friend." },
  { id: 43, french: "il", english: "he, it", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Il fait beau aujourd'hui.", sentenceEN: "The weather is nice today." },
  { id: 44, french: "elle", english: "she, it", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Elle habite à Marseille.", sentenceEN: "She lives in Marseille." },
  { id: 45, french: "nous", english: "we", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Nous allons au cinéma.", sentenceEN: "We are going to the cinema." },
  { id: 46, french: "vous", english: "you (formal/pl)", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Vous êtes professeur, n'est-ce pas ?", sentenceEN: "You are a teacher, aren't you?" },
  { id: 47, french: "ils", english: "they (masc)", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Ils jouent au football.", sentenceEN: "They play football." },
  { id: 48, french: "elles", english: "they (fem)", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Elles chantent très bien.", sentenceEN: "They sing very well." },
  { id: 49, french: "qui", english: "who", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Qui est-ce qui frappe à la porte ?", sentenceEN: "Who is knocking at the door?" },
  { id: 50, french: "que", english: "that, which", partOfSpeech: "pronoun", category: "pronouns", sentenceFR: "Je sais que tu peux le faire.", sentenceEN: "I know that you can do it." },
  // Time & places
  { id: 51, french: "aujourd'hui", english: "today", partOfSpeech: "adverb", category: "time", sentenceFR: "Aujourd'hui, il fait froid.", sentenceEN: "Today, it is cold." },
  { id: 52, french: "demain", english: "tomorrow", partOfSpeech: "adverb", category: "time", sentenceFR: "Demain, je pars en vacances.", sentenceEN: "Tomorrow, I'm leaving for vacation." },
  { id: 53, french: "hier", english: "yesterday", partOfSpeech: "adverb", category: "time", sentenceFR: "Hier, j'ai mangé au restaurant.", sentenceEN: "Yesterday, I ate at a restaurant." },
  { id: 54, french: "maintenant", english: "now", partOfSpeech: "adverb", category: "time", sentenceFR: "Je dois partir maintenant.", sentenceEN: "I must leave now." },
  { id: 55, french: "toujours", english: "always, still", partOfSpeech: "adverb", category: "time", sentenceFR: "Il m'aime toujours.", sentenceEN: "He still loves me." },
  { id: 56, french: "jamais", english: "never", partOfSpeech: "adverb", category: "time", sentenceFR: "Je ne mens jamais.", sentenceEN: "I never lie." },
  { id: 57, french: "souvent", english: "often", partOfSpeech: "adverb", category: "time", sentenceFR: "Je vais souvent à la bibliothèque.", sentenceEN: "I often go to the library." },
  { id: 58, french: "parfois", english: "sometimes", partOfSpeech: "adverb", category: "time", sentenceFR: "Parfois, je me promène le soir.", sentenceEN: "Sometimes, I take a walk in the evening." },
  { id: 59, french: "ici", english: "here", partOfSpeech: "adverb", category: "places", sentenceFR: "Venez ici, s'il vous plaît.", sentenceEN: "Come here, please." },
  { id: 60, french: "là", english: "there", partOfSpeech: "adverb", category: "places", sentenceFR: "Le café est là-bas.", sentenceEN: "The café is over there." },
  // Common nouns
  { id: 61, french: "la maison", english: "the house", partOfSpeech: "noun", gender: "f", category: "places", sentenceFR: "Ma maison a trois chambres.", sentenceEN: "My house has three bedrooms." },
  { id: 62, french: "l'école", english: "the school", partOfSpeech: "noun", gender: "f", category: "education", sentenceFR: "Les enfants vont à l'école le matin.", sentenceEN: "The children go to school in the morning." },
  { id: 63, french: "le travail", english: "the work, job", partOfSpeech: "noun", gender: "m", category: "work", sentenceFR: "J'aime beaucoup mon travail.", sentenceEN: "I really like my job." },
  { id: 64, french: "la famille", english: "the family", partOfSpeech: "noun", gender: "f", category: "family", sentenceFR: "Ma famille est très importante pour moi.", sentenceEN: "My family is very important to me." },
  { id: 65, french: "l'homme", english: "the man", partOfSpeech: "noun", gender: "m", category: "people", sentenceFR: "L'homme qui parle est mon p��re.", sentenceEN: "The man who is speaking is my father." },
  { id: 66, french: "la femme", english: "the woman", partOfSpeech: "noun", gender: "f", category: "people", sentenceFR: "La femme au chapeau est française.", sentenceEN: "The woman with the hat is French." },
  { id: 67, french: "l'enfant", english: "the child", partOfSpeech: "noun", gender: "m/f", category: "people", sentenceFR: "L'enfant joue dans le jardin.", sentenceEN: "The child is playing in the garden." },
  { id: 68, french: "l'ami", english: "the friend", partOfSpeech: "noun", gender: "m", category: "people", sentenceFR: "C'est mon meilleur ami.", sentenceEN: "He is my best friend." },
  { id: 69, french: "le temps", english: "the time, weather", partOfSpeech: "noun", gender: "m", category: "time", sentenceFR: "Le temps passe très vite.", sentenceEN: "Time passes very quickly." },
  { id: 70, french: "la vie", english: "the life", partOfSpeech: "noun", gender: "f", category: "life", sentenceFR: "La vie est belle.", sentenceEN: "Life is beautiful." },
  { id: 71, french: "l'argent", english: "money", partOfSpeech: "noun", gender: "m", category: "finance", sentenceFR: "L'argent ne fait pas le bonheur.", sentenceEN: "Money does not buy happiness." },
  { id: 72, french: "le jour", english: "the day", partOfSpeech: "noun", gender: "m", category: "time", sentenceFR: "Quel beau jour !", sentenceEN: "What a beautiful day!" },
  { id: 73, french: "la nuit", english: "the night", partOfSpeech: "noun", gender: "f", category: "time", sentenceFR: "Je dors bien la nuit.", sentenceEN: "I sleep well at night." },
  { id: 74, french: "l'année", english: "the year", partOfSpeech: "noun", gender: "f", category: "time", sentenceFR: "L'année dernière, j'ai visité Paris.", sentenceEN: "Last year, I visited Paris." },
  { id: 75, french: "le pays", english: "the country", partOfSpeech: "noun", gender: "m", category: "places", sentenceFR: "La France est un beau pays.", sentenceEN: "France is a beautiful country." },
  { id: 76, french: "la ville", english: "the city", partOfSpeech: "noun", gender: "f", category: "places", sentenceFR: "Paris est une grande ville.", sentenceEN: "Paris is a big city." },
  { id: 77, french: "la rue", english: "the street", partOfSpeech: "noun", gender: "f", category: "places", sentenceFR: "La rue est très animée.", sentenceEN: "The street is very lively." },
  { id: 78, french: "le problème", english: "the problem", partOfSpeech: "noun", gender: "m", category: "general", sentenceFR: "Il y a un problème avec mon ordi.", sentenceEN: "There is a problem with my computer." },
  { id: 79, french: "la question", english: "the question", partOfSpeech: "noun", gender: "f", category: "communication", sentenceFR: "J'ai une question pour vous.", sentenceEN: "I have a question for you." },
  { id: 80, french: "le monde", english: "the world", partOfSpeech: "noun", gender: "m", category: "general", sentenceFR: "Le monde change rapidement.", sentenceEN: "The world is changing quickly." },
  // Adjectives
  { id: 81, french: "grand", english: "big, tall", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "C'est un grand bâtiment.", sentenceEN: "It's a big building." },
  { id: 82, french: "petit", english: "small, short", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "J'ai un petit jardin.", sentenceEN: "I have a small garden." },
  { id: 83, french: "bon", english: "good", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "C'est un bon restaurant.", sentenceEN: "It's a good restaurant." },
  { id: 84, french: "mauvais", english: "bad", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Le temps est mauvais aujourd'hui.", sentenceEN: "The weather is bad today." },
  { id: 85, french: "nouveau", english: "new", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "J'ai un nouveau travail.", sentenceEN: "I have a new job." },
  { id: 86, french: "vieux", english: "old", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "C'est un vieux livre.", sentenceEN: "It's an old book." },
  { id: 87, french: "jeune", english: "young", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Elle est très jeune.", sentenceEN: "She is very young." },
  { id: 88, french: "beau", english: "beautiful", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Il fait beau aujourd'hui.", sentenceEN: "The weather is beautiful today." },
  { id: 89, french: "joli", english: "pretty, nice", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Elle a un joli sourire.", sentenceEN: "She has a pretty smile." },
  { id: 90, french: "long", english: "long", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Le film est très long.", sentenceEN: "The film is very long." },
  { id: 91, french: "court", english: "short (length)", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Le texte est trop court.", sentenceEN: "The text is too short." },
  { id: 92, french: "facile", english: "easy", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "La leçon est facile.", sentenceEN: "The lesson is easy." },
  { id: 93, french: "difficile", english: "difficult", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Cet exercice est difficile.", sentenceEN: "This exercise is difficult." },
  { id: 94, french: "important", english: "important", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "C'est très important pour moi.", sentenceEN: "It's very important to me." },
  { id: 95, french: "possible", english: "possible", partOfSpeech: "adjective", gender: "m", category: "descriptors", sentenceFR: "Tout est possible si tu crois.", sentenceEN: "Everything is possible if you believe." },
  // Numbers & quantities
  { id: 96, french: "un", english: "one", partOfSpeech: "number", category: "numbers", sentenceFR: "J'ai un chat et un chien.", sentenceEN: "I have one cat and one dog." },
  { id: 97, french: "deux", english: "two", partOfSpeech: "number", category: "numbers", sentenceFR: "Il y a deux bibliothèques en ville.", sentenceEN: "There are two libraries in town." },
  { id: 98, french: "trois", english: "three", partOfSpeech: "number", category: "numbers", sentenceFR: "J'apprends trois langues.", sentenceEN: "I am learning three languages." },
  { id: 99, french: "dix", english: "ten", partOfSpeech: "number", category: "numbers", sentenceFR: "Le dîner coûte dix euros.", sentenceEN: "The dinner costs ten euros." },
  { id: 100, french: "cent", english: "hundred", partOfSpeech: "number", category: "numbers", sentenceFR: "La population dépasse cent mille.", sentenceEN: "The population exceeds one hundred thousand." },
];

export function getAllVocabulary(): VocabWord[] {
  return vocabulary;
}

export function getVocabularyByCategory(category: string): VocabWord[] {
  return vocabulary.filter((w) => w.category === category);
}

export function getCategories(): string[] {
  return [...new Set(vocabulary.map((w) => w.category))];
}
