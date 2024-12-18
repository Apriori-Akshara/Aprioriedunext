export const quiz = [
  {
    quiz: '1',
    name: 'French Exercise - 1 (A1)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      {
        question: "What does 'bonjour' mean in English?",
        choices: ['good night', 'hello', 'goodbye', 'good evening'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do the French say 'goodbye'?",
        choices: ['adieu', 'à bientôt', 'au revoir', 'à demoin!'],
        type: 'MCQs',
        correctAnswer: 3,
      },
      {
        question: "What does 'salut' mean?",
        choices: ['farewell', 'hi', 'see you!', 'good morning'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What's the French for 'good evening, sir'?",
        choices: ['bonjour, monsieur', 'bonsoir, monsieur', 'bonne nuit, monsieur', 'salut, monsieur'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'I'm not doing very well' in French?",
        choices: ['Je vais bien', 'Je ne vais pas très bien', 'Je ne vais pas loin', 'Je ne vais bien'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'comment vas-tu?' mean?",
        choices: ["What is it that you are?", 'Where are you going?', "What is it that you are?", "How are you?"],
        type: 'MCQs',
        correctAnswer: 4,
      },
      {
        question: "How do you say 'I'm good' in French?",
        choices: ['je ne suis pas bon', 'je vais bien', "Je me sens bien", 'je ne me sens pas bien'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
          question: "How do you say 'good luck!' in French?",
          choices: ['bonne chance!', 'bonne journée!', "bon retour!", 'bonne nuit'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How would you say 'if you please' (or 'please') in French?",
          choices: ['excusez-moi', "s'il vous plaît", "merci", "il n'y a pas de quoi"],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What does 'merci' mean?",
          choices: ['excuse me', 'well', "thank you", 'hello'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "How do you say 'excuse me' in French?",
          choices: ["il n'y a pas de quoi", 'excusez-moi', "merci", "s'il vous plaît"],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "'Comment allez-vous?' means ...",
          choices: ['Where are you?', 'Who are you?', "How are you?", 'Are you well?'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "How do you say 'nice to meet you' in French?",
          choices: ['a bientôt', 'bienvenu', "enchanté(e)", 'de rien'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "What does 'très bien!' mean?",
          choices: ['very good!', 'well, say!', "we'll see!", 'hello'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say 'sorry' in French?",
          choices: ['de rien', 'excusez-moi', "désolé", 'bienvenu'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "How do you say 'What time is it?' in French?",
          choices: ["Quelle heure est-il?", "Où est la montre?", "C'est quelle heure?", "Qu'est-ce que c'est l'heure?"],
          type: 'MCQs',
          correctAnswer: 1
        },
        {
          question: "Which of the following means 'I am thirsty' in French?",
          choices: ["J'ai faim", "Je suis soif", "J'ai soif", "Je veux boire"],
          type: 'MCQs',
          correctAnswer: 3
        },
        {
          question: "How do you say 'I would like' in French?",
          choices: ["je voudrais", "je veux", "j'aimerais", "j'ai besoin"],
          type: 'MCQs',
          correctAnswer: 1
        },
        {
          question: "What is the French word for 'bread'?",
          choices: ["pain", "fromage", "baguette", "gâteau"],
          type: 'MCQs',
          correctAnswer: 1
        },
        {
          question: "Which of the following means 'How much does it cost?' in French?",
          choices: ["C'est combien?", "Combien ça coûte?", "Qu'est-ce que c'est le prix?", "Quelle est le tarif?"],
          type: 'MCQs',
          correctAnswer: 2
        },
       
        {
          question: "Bella: Bonjour, ______. (Hello, Sir)",
          choices: ["Monsieur", "mange", "a", "Mon"],
          type: 'FillInTheBlanks',
          correctAnswer: 1
        },
        {
          question: "Laurent: ______, Madame. (Hello, Madam)",
          choices: ["Bonjour", "a", "mange", "vont"],
          type: 'FillInTheBlanks',
          correctAnswer: 1
        },
        {
          question: "Bella: Je m'appelle Anne, et ______ ? (My name is Anne, and you?)",
          choices: ["vous", "faisons", "allons", "avons"],
          type: 'FillInTheBlanks',
          correctAnswer: 1
        },
       
        {
          question: "Laurent: ______ m'appelle Pierre. (My name is Pierre.)",
          choices: ["Je", "mangent", "lisent", "sont"],
          type: 'FillInTheBlanks',
          correctAnswer: 1
        },
        {
          question: "Bella: ______ . (Nice to meet you.)",
          choices: ["Enchantée", "fait", "mange", "vont"],
          type: 'FillInTheBlanks',
          correctAnswer: 1
        },
        
        {
          question: "Laurent: Je suis ______ d'anglais, et vous (I am an English teacher, and you?)",
          choices: ["professeur", "est", "mange", "a"],
          type:'FillInTheBlanks',
          correctAnswer: 1
        },
        {
          question: "Bella: Je suis ______ de français . (I am a French teacher.)",
          choices: ["professeure", "faites", "lisez", "mangez"],
          type: 'FillInTheBlanks',
          correctAnswer: 1
        },
        {
            question: "Bella: Vous ______ le café. (Do you like coffee?)",
            choices: ["aimez", "faites", "lisez", "mangez"],
            type: 'FillInTheBlanks',
            correctAnswer: 1
          },          
            {
              question: "Laurent: J'adore le ______. (I love coffee.)",
              choices: ["café", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella regarde sa ______. (Bella looks at her watch.)",
              choices: ["montre", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: Oh, ______ -moi. J'ai une classe dans 5 minutes !. (Oh, excuse me. I have a class in 5 minutes!)",
              choices: ["excusez", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: Je comprends. ______ , Madame. (I understand. Goodbye, Madam.)",
              choices: ["Au revoir", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: Au revoir, ______ Monsieur. (Goodbye, Sir.)",
              choices: ["Au revoir", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: Où habitez-______? (Where do you live?)",
              choices: ["vous", "tu", "elle", "moi"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: ______ à Paris. (I live in Paris.)",
              choices: ["J'habite", "dans", "sur", "chez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: Est-ce que vous ______ le français? (Do you speak French?)",
              choices: ["parlez", "mangez", "regardez", "étudiez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: Oui, je ______ français et anglais. (Yes, I speak French and English.)",
              choices: ["parle", "mange", "regarde", "étudie"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: Vous aimez la ______ ? (Do you like France?)",
              choices: ["France", "le café", "la ville", "la nourriture"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Laurent: La France est un pays ______ . (France is a beautiful country.)",
              choices: ["beau", "grande", "riche", "pauvre"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Bella: J'aimerais visiter ______ . (I would like to visit Paris.)",
              choices: ["Paris", "Rome", "Londres", "New York"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "hello", "rightId": 1 },
            "right": { "word": "monsieur", "rightId": 3 }
          },
          {
            "left": { "word": "Ma'am", "rightId": 2 },
            "right": { "word": "bonjour", "rightId": 1 }
          },
          {
            "left": { "word": "Sir", "rightId": 3 },
            "right": { "word": "madame", "rightId": 2 }
          },
          {
            "left": { "word": "good-bye", "rightId": 4 },
            "right": { "word": "enchanté", "rightId": 5 }
          },
          {
            "left": { "word": "nice to meet you", "rightId": 5 },
            "right": { "word": "au revoir", "rightId": 4 }
          },
         
        ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "hi", "rightId": 6 },
            "right": { "word": "bonne nuit", "rightId": 8 }
          },
          {
            "left": { "word": "see you soon", "rightId": 7 },
            "right": { "word": "salut", "rightId": 6 }
          },
          {
            "left": { "word": "good night", "rightId": 8 },
            "right": { "word": "a bientôt", "rightId": 7 }
          },
          {
            "left": { "word": "see you tomorrow", "rightId": 9 },
            "right": { "word": "bonsoir!", "rightId": 10 }
          },
          {
            "left": { "word": "good evening", "rightId": 10 },
            "right": { "word": "a demain!", "rightId": 9 }
          }
        ],
      },
    ],
  },
  {
    quiz: '2',
    name: 'French Exercise - 2 (A1)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      {
        "question": "Which article is used for a masculine singular noun in French?",
        "choices": ["la", "le", "une", "les"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'les' mean in French?",
        "choices": ["the (singular, masculine)", "the (plural, all genders)", "a (singular, feminine)", "a (singular, masculine)"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        question: 'What is the French word for "three"?',
        choices: ['un', 'trois', 'deux', 'quatre'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'seven' in French?",
        choices: ['huit', 'sept', 'neuf', 'dix'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        "question": "What is the correct article for the word 'voiture' (car) in French?",
        "choices": ["un", "une", "le", "les"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is the correct translation for 'the apple' in French?",
        "choices": ["la pomme", "le pomme", "une pomme", "des pommes"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which article is used for masculine singular nouns in French?",
        "choices": ["la", "les", "un", "des"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        question: "How do you say 'twelve' in French?",
        choices: ['douze', 'onze', 'dix', 'vingt'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'eighteen' in French?",
        choices: ['dix-sept', 'dix-huit', 'vingt', 'quinze'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'fourteen' in French?",
        choices: ['quatorze', 'quinze', 'seize', 'vingt'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What is the French word for 'six'?",
        choices: ['cinq', 'six', 'sept', 'huit'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What is the French word for 'nine'?",
        choices: ['neuf', 'huit', 'sept', 'cinq'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What is the French word for 'fifteen'?",
        choices: ['quatorze', 'quinze', 'seize', 'dix-huit'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'twenty' in French?",
        choices: ['dix-neuf', 'vingt', 'vingt-et-un', 'vingt-deux'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        "question": "Which of the following sentences is correct in French?",
        "choices": ["J'ai un pommes.", "Elle a une pomme.", "Il a un pomme.", "Nous avons les pomme."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which article is used with plural nouns in French?",
        "choices": ["le", "la", "les", "une"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which article is used for a feminine singular noun starting with a vowel or silent 'h'?",
        "choices": ["la", "l'", "le", "une"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French word for 'nine'?",
        "choices": ["huit", "sept", "neuf", "dix"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'six' in French?",
        "choices": ["sept", "cinq", "six", "quatre"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'seventeen' in French?",
        "choices": ["quinze", "seize", "dix-sept", "dix-huit"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is the first letter of the French alphabet?",
        "choices": ["c", "z", "a", "b"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which letter comes after 'b' in the French alphabet?",
        "choices": ["e", "c", "d", "f"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of these letters does not exist in the traditional French alphabet?",
        "choices": ["k", "q", "w", "t"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which article is used with plural nouns for things that are specific in French?",
        "choices": ["le", "les", "la", "l'"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following sentences is correct in French?",
        "choices": ["Nous avons des livres.", "Nous avons le livres.", "Nous avons un livres.", "Nous avons la livre."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following letters is the last letter of the French alphabet?",
        "choices": ["v", "y", "z", "x"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the 10th letter of the French alphabet?",
        "choices": ["i", "h", "j", "k"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which letter comes before 'z' in the French alphabet?",
        "choices": ["y", "d", "f", "g"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which letter comes after 'g' in the French alphabet?",
        "choices": ["h", "k", "a", "d"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the 3rd letter of the French alphabet?",
        "choices": ["c", "z", "q", "p"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "(The) ______ livre est intéressant.",
        "choices": ["Le", "Un", "Une", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "J'ai ______ (an) idée.",
        "choices": ["Une", "Le", "Un", "Des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Four' in French is ______.",
        "choices": ["Quatre", "Cinq", "Six", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Six' in French is ______.",
        "choices": ["Six", "Quatre", "Huit", "Dix"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(The) ______ table est sur le côté.",
        "choices": ["La", "Un", "Une", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle a ______ (some) chats.",
        "choices": ["Des", "Une", "Le", "Un"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(The) ______ voiture est rouge.",
        "choices": ["La", "Un", "Le", "Une"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Eight' in French is ______.",
        "choices": ["Huit", "Six", "Dix", "Quatorze"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Ten' in French is ______.",
        "choices": ["Dix", "Onze", "Huit", "Vingt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Five' in French is ______.",
        "choices": ["Cinq", "Six", "Huit", "Quatre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Nine' in French is ______.",
        "choices": ["neuf", "Dix", "Quatre", "Quatorze"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Three' in French is ______.",
        "choices": ["Trois", "Deux", "Un", "Quatre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(The) ______ enfants jouent dans le jardin.",
        "choices": ["Les", "Un", "Une", "Des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il y a ______ (a) garçon à l'école.",
        "choices": ["Un", "Le", "Une", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(The) ______ pomme est verte.",
        "choices": ["La", "Un", "Une", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'H' in French is ______ (silent or pronounced).",
        "choices": ["Silent", "Pronounced", "Gé", "Bé"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Eleven' in French is ______.",
        "choices": ["Onze", "Dix", "Quatre", "Quatorze"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Fourteen' in French is ______.",
        "choices": ["Quatorze", "Onze", "Vingt", "Six"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Twenty' in French is ______.",
        "choices": ["Vingt", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 5th letter of the French alphabet is ______.",
        "choices": ["E", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter that comes before 'N' in the French alphabet is ______.",
        "choices": ["M", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 20th letter of the French alphabet is ______.",
        "choices": ["T", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "In the French alphabet, the letter ______ comes after 'R'.",
        "choices": ["S", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous avons ______ (an) appartement à Paris.",
        "choices": ["Un", "Le", "Une", "Des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(The) ______ stylos sont sur la table.",
        "choices": ["Les", "Un", "La", "Des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter ______ is the last consonant of the French alphabet.",
        "choices": ["Z", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter that comes after 'G' in the French alphabet is ______.",
        "choices": ["H", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 15th letter of the French alphabet is ______.",
        "choices": ["O", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "In the French alphabet, the letter ______ comes before 'F'.",
        "choices": ["E", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 23rd letter of the French alphabet is ______.",
        "choices": ["Vingt", "Dix", "Quinze", "Trois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "douze", "rightId": 1 },
            "right": { "word": "five", "rightId": 4 }
          },
          {
            "left": { "word": "huit", "rightId": 2 },
            "right": { "word": "nineteen", "rightId": 3 }
          },
          {
            "left": { "word": "dix-neuf", "rightId": 3 },
            "right": { "word": "twelve", "rightId": 1 }
          },
          {
            "left": { "word": "cinq", "rightId": 4 },
            "right": { "word": "fourteen", "rightId": 5 }
          },
          {
            "left": { "word": "quatorze", "rightId": 5 },
            "right": { "word": "eight", "rightId": 2 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "vingt", "rightId": 6 },
            "right": { "word": "seven", "rightId": 7 }
          },
          {
            "left": { "word": "sept", "rightId": 7 },
            "right": { "word": "fifteen", "rightId": 8 }
          },
          {
            "left": { "word": "quinze", "rightId": 8 },
            "right": { "word": "twenty", "rightId": 6 }
          },
          {
            "left": { "word": "six", "rightId": 9 },
            "right": { "word": "nine", "rightId": 10 }
          },
          {
            "left": { "word": "neuf", "rightId": 10 },
            "right": { "word": "six", "rightId": 9 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "le livre", "rightId": 1 },
            "right": { "word": "the school", "rightId": 5 }
          },
          {
            "left": { "word": "un chat", "rightId": 2 },
            "right": { "word": "the house", "rightId": 4 }
          },
          {
            "left": { "word": "des pommes", "rightId": 3 },
            "right": { "word": "a cat", "rightId": 2 }
          },
          {
            "left": { "word": "la maison", "rightId": 4 },
            "right": { "word": "apples", "rightId": 3 }
          },
          {
            "left": { "word": "l’école", "rightId": 5 },
            "right": { "word": "the book", "rightId": 1 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "du lait", "rightId": 6 },
            "right": { "word": "the books", "rightId": 8 }
          },
          {
            "left": { "word": "une pomme", "rightId": 7 },
            "right": { "word": "milk", "rightId": 6 }
          },
          {
            "left": { "word": "les livres", "rightId": 8 },
            "right": { "word": "an apple", "rightId": 7 }
          },
          {
            "left": { "word": "un homme", "rightId": 9 },
            "right": { "word": "an orange", "rightId": 10 }
          },
          {
            "left": { "word": "une orange", "rightId": 10 },
            "right": { "word": "a man", "rightId": 9 }
          }
        ]
      }
    ],
  },
  {
    quiz: '3',
    name: 'French Exercise - 3 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [

      {
        "question": "What is the French word for \"brain\"?",
        "choices": ["cerveau", "coeur", "poumon", "foie"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is the correct possessive adjective for 'my' (feminine singular) in French?",
        "choices": ["mon", "ma", "mes", "leur"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the number \"ninety-three\" in French?",
        "choices": ["soixante-treize", "quatre-vingt-treize", "quatre-vingt-trois", "quatre-vingt-dix"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French word for \"purple\"?",
        "choices": ["bleu", "jaune", "violet", "rouge"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct translation for 'your (informal) house' in French?",
        "choices": ["ton maison", "ta maison", "tes maison", "votre maison"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to grow\" in French?",
        "choices": ["grandir", "coudre", "cuisiner", "dormir"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"cinq\" translate to in English?",
        "choices": ["5", "50", "2", "7"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which color is “gris” in English?",
        "choices": ["black", "blue", "gray", "green"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which possessive adjective means 'our' (plural) in French?",
        "choices": ["notre", "nos", "leur", "votre"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"lumière\" mean in French?",
        "choices": ["moon", "light", "shadow", "air"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"I’m thirsty\" in French?",
        "choices": ["j'ai chaud", "j'ai faim", "j'ai soif", "j'ai sommeil"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the French possessive adjective for 'their' (masculine plural)?",
        "choices": ["leur", "ses", "leur", "vos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct possessive adjective for 'his' (feminine singular)?",
        "choices": ["sa", "son", "leur", "ses"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the plural of \"cheval\" in French?",
        "choices": ["chevaux", "chevals", "chevauxes", "chevail"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"étonné\" mean in English?",
        "choices": ["angry", "surprised", "happy", "scared"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French word for \"seventy-eight\"?",
        "choices": ["soixante-huit", "soixante-dix-huit", "quatre-vingt-dix-huit", "soixante-vingt-dix"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which word means \"ear\" in French?",
        "choices": ["nez", "bouche", "œil", "oreille"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which of the following is the correct possessive adjective for 'her' (plural)?",
        "choices": ["ses", "sa", "son", "votre"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"château\" mean in French?",
        "choices": ["forest", "castle", "field", "church"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"eighty\" in French?",
        "choices": ["quinze", "cinq", "soixante", "trois"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is the French translation of \"pink\"?",
        "choices": ["rouge", "rose", "jaune", "vert"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"chaleur\" in English?",
        "choices": ["cold", "heat", "warm", "humidity"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'my friends' in French (plural)?",
        "choices": ["mon amis", "ma amis", "mes amis", "leur amis"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which possessive adjective means 'your' (formal/plural)?",
        "choices": ["ton", "ta", "votre", "vos"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"library\" in French?",
        "choices": ["librairie", "bibliothèque", "livre", "cartable"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"dix-neuf\" translate to?",
        "choices": ["11", "9", "19", "90"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the French word for \"pencil\"?",
        "choices": ["stylo", "crayon", "cahier", "gomme"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these words means \"eight\" in French?",
        "choices": ["huit", "courir", "voler", "chanter"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct translation for 'his dog' in French?",
        "choices": ["son chien", "sa chien", "ses chien", "leur chien"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'our house' in French?",
        "choices": ["notre maison", "ma maison", "nos maison", "votre maison"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "(My) ______ frère est médecin.",
        "choices": ["Mon","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le mur ______ (white) est taché.",
        "choices": ["blanc", "es", "est", "sommes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il y a ______ (three) pommes sur la table.",
        "choices": ["trois", "deux", "e", "quatre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Your - informal) ______ soeur est gentille.",
        "choices": ["Ta","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La couleur du ciel est ______ (blue).",
        "choices": ["bleu", "vert", "rouge", "jaune"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(His) ______ livre est sur la table.",
        "choices": ["Son","2","1","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number ______ (five) comes after number four.",
        "choices": ["mangeons", "manges", "mange", "mangent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle a ______ (two) chats et un chien.",
        "choices": ["deux", "e", "trois", "quatre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 2
      }, 
      {
        "question": "(Our) ______ maison est grande.",
        "choices": ["Notre","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je voudrais un café ______ (hot), s'il vous plaît.",
        "choices": ["chaud", "e", "tiède", "doux"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le ______ (color) de ma voiture est rouge.",
        "choices": ["couleur", "ton", "teinte", "nuance"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "the number eleven comes before number ______ (twelve).",
        "choices": ["douze", "venir", "partir", "rester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Their) ______ enfants sont à l'école.",
        "choices": ["Leurs","1","2","4"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mon frère a ______ (five) ans.",
        "choices": ["cinq", "e", "six", "dix"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Cette robe est très ______ (beautiful).",
        "choices": ["belle", "jolie", "beau", "ravissante"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "J'______ (to have) un examen demain.",
        "choices": ["ai", "as", "a", "avons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Your - formal/plural) ______ voiture est très rapide.",
        "choices": ["Votre","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(My) ______ amis viennent ce soir.",
        "choices": ["Mes","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le ______ (weather) aujourd'hui est ensoleillé.",
        "choices": ["temps", "climat", "météo", "saison"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La terre paraît ______ (blue) depuis l'espace.",
        "choices": ["bleue", "lisez", "lit", "lire"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Her) ______ chien est très mignon.",
        "choices": ["Son","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il fait ______ (cold) en hiver.",
        "choices": ["froid", "e", "tiède", "frais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Où lis-tu un ______ (book) ?",
        "choices": ["livre", "parle", "parlons", "parles"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (dog) de Marie est très amicale.",
        "choices": ["chien", "1", "animal", "bête"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Your - informal) ______ parents sont très gentils.",
        "choices": ["Tes","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Their) ______ appartement est joli.",
        "choices": ["Leur","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je préfère le ______ (green) aux autres couleurs.",
        "choices": ["vert", "bleu", "e", "jaune"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle a acheté ______ (ten) pommes au marché.",
        "choices": ["dix", "neuf", "e", "sept"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mon anniversaire est le ______ (twentieth) mars.",
        "choices": ["vingtième", "e", "trentième", "quinzième"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il est ______ (tired) après une longue journée de travail.",
        "choices": ["fatigué", "content", "énergique", "calme"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "douze", "rightId": 1 },
            "right": { "word": "five", "rightId": 4 }
          },
          {
            "left": { "word": "huit", "rightId": 2 },
            "right": { "word": "nineteen", "rightId": 3 }
          },
          {
            "left": { "word": "dix-neuf", "rightId": 3 },
            "right": { "word": "twelve", "rightId": 1 }
          },
          {
            "left": { "word": "cinq", "rightId": 4 },
            "right": { "word": "fourteen", "rightId": 5 }
          },
          {
            "left": { "word": "quatorze", "rightId": 5 },
            "right": { "word": "eight", "rightId": 2 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "vingt", "rightId": 6 },
            "right": { "word": "seven", "rightId": 7 }
          },
          {
            "left": { "word": "sept", "rightId": 7 },
            "right": { "word": "fifteen", "rightId": 8 }
          },
          {
            "left": { "word": "quinze", "rightId": 8 },
            "right": { "word": "twenty", "rightId": 6 }
          },
          {
            "left": { "word": "six", "rightId": 9 },
            "right": { "word": "nine", "rightId": 10 }
          },
          {
            "left": { "word": "neuf", "rightId": 10 },
            "right": { "word": "six", "rightId": 9 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "le livre", "rightId": 1 },
            "right": { "word": "the school", "rightId": 5 }
          },
          {
            "left": { "word": "un chat", "rightId": 2 },
            "right": { "word": "the house", "rightId": 4 }
          },
          {
            "left": { "word": "des pommes", "rightId": 3 },
            "right": { "word": "a cat", "rightId": 2 }
          },
          {
            "left": { "word": "la maison", "rightId": 4 },
            "right": { "word": "apples", "rightId": 3 }
          },
          {
            "left": { "word": "l'école", "rightId": 5 },
            "right": { "word": "the book", "rightId": 1 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "du lait", "rightId": 6 },
            "right": { "word": "the books", "rightId": 8 }
          },
          {
            "left": { "word": "une pomme", "rightId": 7 },
            "right": { "word": "milk", "rightId": 6 }
          },
          {
            "left": { "word": "les livres", "rightId": 8 },
            "right": { "word": "an apple", "rightId": 7 }
          },
          {
            "left": { "word": "un homme", "rightId": 9 },
            "right": { "word": "an orange", "rightId": 10 }
          },
          {
            "left": { "word": "une orange", "rightId": 10 },
            "right": { "word": "a man", "rightId": 9 }
          }
        ]
      }
    ],
  },
  {
    quiz: '4',
    name: 'French Exercise - 4 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "How do you say 'uncle' in French?",
        "choices": ["père", "oncle", "cousin", "frère"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French word for 'daughter'?",
        "choices": ["mère", "fille", "sœur", "tante"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What do you call your father's brother?",
        "choices": ["oncle", "père", "cousin", "grand-père"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the French word for 'grandson'?",
        "choices": ["fils", "petit-fils", "neveu", "frère"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct conjugation of the verb 'manger' for 'nous'?",
        "choices": ["mange", "mangeons", "mangent", "manges"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct conjugation of the verb 'parler' for 'ils'?",
        "choices": ["parlons", "parlez", "parlent", "parles"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the present tense of the verb 'aller' for 'vous'?",
        "choices": ["allez", "allons", "vont", "vas"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the form of the verb 'finir' for 'je'?",
        "choices": ["finis", "finit", "finissons", "finissez"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct conjugation of the verb 'prendre' for 'elle'?",
        "choices": ["prend", "prenons", "prenez", "prennent"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the present tense of the verb 'voir' for 'nous'?",
        "choices": ["voyons", "voit", "vois", "voient"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What pronoun is used for 'they' (masculine) in French?",
        "choices": ["ils", "ils", "vous", "nous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'we' (feminine)?",
        "choices": ["ils", "nous", "elles", "vous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'he'?",
        "choices": ["elle", "vous", "il", "nous"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What pronoun is used for 'you' (informal)?",
        "choices": ["vous", "tu", "il", "elle"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'they' (feminine)?",
        "choices": ["elles", "ils", "vous", "nous"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What pronoun is used for 'you all' (formal)?",
        "choices": ["tu", "vous tous", "elles", "nous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'we' (masculine)?",
        "choices": ["ils", "nous", "elles", "vous tous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'I'?",
        "choices": ["vous", "il", "je", "nous"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What pronoun is used for 'you' (formal, singular)?",
        "choices": ["tu", "vous", "il", "nous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'she'?",
        "choices": ["elle", "il", "vous", "nous"],
        "type": "MCQs",
        "correctAnswer": 1
      },
     
      {
        "question": "Mon ______ (father) travaille à Paris.",
        "choices": ["père", "frère", "oncle", "ami"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ma ______-mère (grandmother) habite avec nous.",
        "choices": ["grand", "tante", "mère", "sœur"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ont un ______ (son) et une fille.",
        "choices": ["fils", "père", "frère", "neveu"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vais rendre visite à ma ______ (aunt) ce week-end.",
        "choices": ["tante", "cousine", "mère", "sœur"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tu ______ (to eat) toujours des fruits le matin.",
        "choices": ["manges", "bois", "lis", "écris"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (to go) à l'école ensemble.",
        "choices": ["allons", "partons", "courons", "venons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle ______ (to read) un bon livre en ce moment.",
        "choices": ["lit", "parle", "écrit", "dessine"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous ______ (to speak) français très bien.",
        "choices": ["parlez", "comprenez", "lisez", "écoutez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ______ (to finish) leurs devoirs maintenant.",
        "choices": ["finissent", "commencent", "lisent", "mangent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ______ (to drink) du café tous les matins.",
        "choices": ["bois", "mange", "parle", "cours"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(I) ______ suis étudiant en français.",
        "choices": ["Je", "Il", "Elle", "Nous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(We - feminine) ______ sommes heureuses d’être ici.",
        "choices": ["Nous", "Elles", "Vous", "Ils"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(She) ______ est toujours en avance.",
        "choices": ["Elle", "Il", "Je", "Nous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(They - masculine) ______ jouent au football.",
        "choices": ["Ils", "Nous", "Elles", "Vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(You - informal) ______ es très intelligent.",
        "choices": ["Tu", "Vous", "Elle", "Il"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(You - formal, singular) ______ êtes professeur de français.",
        "choices": ["Vous", "Tu", "Elle", "Nous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(They - feminine) ______ aiment voyager.",
        "choices": ["Elles", "Ils", "Nous", "Vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(You all - informal) ______ regardez la télévision ensemble.",
        "choices": ["Vous", "Nous", "Elles", "Ils"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(He) ______ habite en France depuis trois ans.",
        "choices": ["Il", "Elle", "Nous", "Vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(We) ______ parlons anglais et français.",
        "choices": ["Nous", "Ils", "Vous", "Elles"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "mère", "rightId": 1 },
            "right": { "word": "you (informal)", "rightId": 4 }
          },
          {
            "left": { "word": "nous", "rightId": 2 },
            "right": { "word": "sister", "rightId": 5 }
          },
          {
            "left": { "word": "ils", "rightId": 3 },
            "right": { "word": "mother", "rightId": 1 }
          },
          {
            "left": { "word": "tu", "rightId": 4 },
            "right": { "word": "they (masculine)", "rightId": 3 }
          },
          {
            "left": { "word": "sœur", "rightId": 5 },
            "right": { "word": "we (feminine)", "rightId": 2 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "père", "rightId": 6 },
            "right": { "word": "she", "rightId": 9 }
          },
          {
            "left": { "word": "il", "rightId": 7 },
            "right": { "word": "you (formal, singular)", "rightId": 10 }
          },
          {
            "left": { "word": "vous", "rightId": 8 },
            "right": { "word": "you all (formal)", "rightId": 8 }
          },
          {
            "left": { "word": "elle", "rightId": 9 },
            "right": { "word": "father", "rightId": 6 }
          },
          {
            "left": { "word": "vous", "rightId": 10 },
            "right": { "word": "he", "rightId": 7 }
          }
        ]
      }
    ],
  },
  {
    quiz: '5',
    name: 'French Exercise - 5 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "How do you say 'cousin' in French (masculine)?",
        "choices": ["frère", "neveu", "cousin", "oncle"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'belle-mère' mean in English?",
        "choices": ["mother-in-law", "sister-in-law", "stepmother", "aunt"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which partitive article is used with a masculine singular noun (such as 'pain')?",
        "choices": ["du", "de la", "des", "de"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the French word for 'brother-in-law'?",
        "choices": ["gendre", "beau-frère", "cousin", "neveu"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What word describes 'the daughter of your brother'?",
        "choices": ["nièce", "fille", "cousine", "tante"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'de la' mean in English?",
        "choices": ["some (masculine singular)", "some (feminine singular)", "some (plural)", "none"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct conjugation of the verb 'manger' (to eat) for 'nous'?",
        "choices": ["mangeons", "mangez", "mangent", "mange"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct form of the verb 'écrire' (to write) for 'je'?",
        "choices": ["écris", "écrit", "écrivons", "écrivez"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What form of the verb 'finir' (to finish) corresponds to 'tu'?",
        "choices": ["finis", "finit", "finissons", "finissez"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which partitive article is used with plural nouns (like 'pommes')?",
        "choices": ["du", "de la", "des", "de"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the partitive article for a feminine singular noun like 'salade'?",
        "choices": ["du", "de la", "des", "de"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following sentences is correct?",
        "choices": ["il boit du eau.", "elle mange de la soupe.", "vous avez des fromage?", "je veux de la chocolat."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct form of 'prendre' (to take) for 'il'?",
        "choices": ["prend", "prends", "prenons", "prenez"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you conjugate 'parler' (to speak) with 'elles'?",
        "choices": ["parlent", "parlons", "parlez", "parle"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the partitive article for a masculine singular noun like 'chocolat'?",
        "choices": ["de", "de la", "du", "des"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you conjugate 'faire' (to do) for 'vous'?",
        "choices": ["faites", "faisons", "fais", "font"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the subject pronoun for 'we' in French?",
        "choices": ["nous", "vous", "ils", "elles"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the subject pronoun for 'she' in French?",
        "choices": ["il", "elle", "ils", "vous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which partitive article is used with uncountable nouns (like 'lait')?",
        "choices": ["du", "de la", "des", "de"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following sentences is correct?",
        "choices": ["nous avons de la pommes.", "il y a des soupe.", "ils ont du pain.", "tu veux de la chocolat?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What subject pronoun is used for 'you' (informal)?",
        "choices": ["tu (informel)", "vous (formel)", "ils", "nous"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What subject pronoun corresponds to 'they' (feminine)?",
        "choices": ["ils", "elles", "nous", "vous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What subject pronoun is used for 'he' in French?",
        "choices": ["elle", "nous", "il", "vous"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What subject pronoun is used for 'they' (masculine)?",
        "choices": ["elles", "vous", "ils", "nous"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What subject pronoun corresponds to 'I' in French?",
        "choices": ["il", "je", "tu", "nous"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French translation for 'some wine'?",
        "choices": ["des vin", "du vin", "de la vin", "des vins"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following sentences is correct in French?",
        "choices": ["elle a des lait.", "nous avons du eau.", "ils veulent des pommes.", "je bois de la eau."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What subject pronoun corresponds to 'you' (formal)?",
        "choices": ["vous (formel)", "tu (informel)", "ils", "nous"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'thirty-five' in French?",
        "choices": ["trente-huit", "trente-cinq", "quarante-cinq", "vingt-cinq"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What number is 'quarante-neuf'?",
        "choices": ["49", "29", "39", "59"],
        "type": "MCQs",
        "correctAnswer": 1
      },
     
      {
        "question": "Le ______ (uncle) de Marie vit à Paris.",
        "choices": ["oncle", "cousin", "frère", "père"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: Je voudrais ______ pain, s'il vous plaît. (I would like some bread, please.)",
        "choices": ["du", "de la", "des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (aunt) de Paul travaille à l'hôpital.",
        "choices": ["tante", "mère", "sœur", "cousine"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mon ______ (nephew) est très intelligent.",
        "choices": ["neveu", "cousin", "fils", "frère"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mes ______-parents (grandparents) habitent à la campagne.",
        "choices": ["grands", "oncles", "parents", "cousins"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ______ (to read) un livre intéressant.",
        "choices": ["lis", "parle", "apprends", "finis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ______ (to speak) trois langues.",
        "choices": ["parlent", "lisent", "finissent", "prennent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: Elle mange ______ soupe tous les soirs. (She eats some soup every evening.)",
        "choices": ["de la", "du", "des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: Nous avons acheté ______ pommes au marché. (We bought some apples at the market.)",
        "choices": ["des", "du", "de la"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (to go) à la plage cet été.",
        "choices": ["allons", "partons", "prenons", "finissons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tu ______ (to finish) tes devoirs rapidement.",
        "choices": ["finis", "prends", "lis", "apprends"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle ______ (to take) toujours le bus pour aller au travail.",
        "choices": ["prend", "finit", "lit", "parle"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous ______ (to learn) le français depuis deux ans.",
        "choices": ["apprenez", "finissez", "lisez", "parlez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: Il boit ______ eau tous les jours. (He drinks some water every day.)",
        "choices": ["de l'", "du", "des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: Tu veux ______ chocolat? (Do you want some chocolate?)",
        "choices": ["du", "de la", "des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(I) ______ suis très fatigué aujourd'hui.",
        "choices": ["Je", "Tu", "Il", "Nous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(They - masculine) ______ aiment jouer au football.",
        "choices": ["Ils", "Nous", "Elles", "Vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(She) ______ est toujours la première à répondre.",
        "choices": ["Elle", "Il", "Tu", "Nous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(You - formal) ______ êtes mon professeur préféré.",
        "choices": ["Vous", "Tu", "Elle", "Il"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: J'aime ______ fromage. (I like some cheese.)",
        "choices": ["du", "des", "de la"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: ______ lait est nécessaire pour cette recette. (Some milk is needed for this recipe.)",
        "choices": ["du", "de la", "des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(We) ______ devons partir tôt demain matin.",
        "choices": ["Nous", "Ils", "Vous", "Elles"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(They - feminine) ______ habitent à Lyon.",
        "choices": ["Elles", "Ils", "Nous", "Vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(He) ______ ne mange pas de viande.",
        "choices": ["Il", "Elle", "Tu", "Nous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: ______ salade est délicieuse. (The salad is delicious.)",
        "choices": ["de la", "du", "des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: Vous avez ______ beurre pour les croissants? (Do you have some butter for the croissants?)",
        "choices": ["du", "de la", "des"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(You - informal) ______ vas à la fête ce soir?",
        "choices": ["Tu", "Vous", "Il", "Elle"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mon père a ______ (forty-five) ans aujourd'hui.",
        "choices": ["quarante-cinq", "trente-cinq", "vingt-cinq", "cinquante"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: Ils ont mangé ______ riz pour le déjeuner. (They ate some rice for lunch.)",
        "choices": ["du", "des", "de la"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "J'ai acheté ______ (thirty-one) livres cette année.",
        "choices": ["trente et un", "quarante et un", "vingt et un", "trente-deux"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "il", "rightId": 1 },
            "right": { "word": "we (feminine)", "rightId": 2 }
          },
          {
            "left": { "word": "nous", "rightId": 2 },
            "right": { "word": "you all (formal)", "rightId": 3 }
          },
          {
            "left": { "word": "vous tous", "rightId": 3 },
            "right": { "word": "they (feminine)", "rightId": 5 }
          },
          {
            "left": { "word": "vous", "rightId": 4 },
            "right": { "word": "he", "rightId": 1 }
          },
          {
            "left": { "word": "elles", "rightId": 5 },
            "right": { "word": "you (informal)", "rightId": 4 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "quarante-deux", "rightId": 6 },
            "right": { "word": "she", "rightId": 9 }
          },
          {
            "left": { "word": "trente-cinq", "rightId": 7 },
            "right": { "word": "you (formal)", "rightId": 8 }
          },
          {
            "left": { "word": "vous", "rightId": 8 },
            "right": { "word": "thirty-five", "rightId": 7 }
          },
          {
            "left": { "word": "elle", "rightId": 9 },
            "right": { "word": "forty-seven", "rightId": 10 }
          },
          {
            "left": { "word": "quarante-sept", "rightId": 10 },
            "right": { "word": "forty-two", "rightId": 6 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "du pain", "rightId": 1 },
            "right": { "word": "some milk", "rightId": 5 }
          },
          {
            "left": { "word": "de la confiture", "rightId": 2 },
            "right": { "word": "some bread", "rightId": 1 }
          },
          {
            "left": { "word": "des fruits", "rightId": 3 },
            "right": { "word": "some water", "rightId": 4 }
          },
          {
            "left": { "word": "de l’eau", "rightId": 4 },
            "right": { "word": "some fruit", "rightId": 3 }
          },
          {
            "left": { "word": "du lait", "rightId": 5 },
            "right": { "word": "some honey", "rightId": 2 }
          }
        ]
      },
      {
        "question": "Match the Words.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "de la viande", "rightId": 6 },
            "right": { "word": "some vegetables", "rightId": 7 }
          },
          {
            "left": { "word": "des légumes", "rightId": 7 },
            "right": { "word": "some cheese", "rightId": 8 }
          },
          {
            "left": { "word": "du fromage", "rightId": 8 },
            "right": { "word": "some meat", "rightId": 6 }
          },
          {
            "left": { "word": "de la soupe", "rightId": 9 },
            "right": { "word": "some chocolate", "rightId": 10 }
          },
          {
            "left": { "word": "du chocolat", "rightId": 10 },
            "right": { "word": "some soup", "rightId": 9 }
          }
        ]
      }
    ],
  },
  {
    quiz: '6',
    name: 'French Exercise - 6 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "How do you say 'Good morning' in French?",
        "choices": ["bonsoir", "bonjour", "bonne nuit", "salut"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does 'Merci' mean?",
        "choices": ["please", "goodbye", "thank you", "sorry"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'See you later' in French?",
        "choices": ["à tout à l'heure", "salut", "bonsoir", "bonne nuit"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does 'Pardon' mean?",
        "choices": ["sorry", "hello", "please", "goodbye"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'Please' in French?",
        "choices": ["merci", "s'il vous plaît", "je suis désolé", "salut"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does 'Je suis désolé' mean?",
        "choices": ["excuse me", "i'm sorry", "hello", "goodbye"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'Goodbye' in French?",
        "choices": ["bonjour", "au revoir", "salut", "bonne nuit"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does 'Bonsoir' mean?",
        "choices": ["good afternoon", "good evening", "good morning", "see you tomorrow"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does 'Ami' mean?",
        "choices": ["friend", "family", "teacher", "neighbor"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'House' in French?",
        "choices": ["voiture", "maison", "porte", "fenêtre"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does 'École' mean?",
        "choices": ["library", "school", "store", "park"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'Book' in French?",
        "choices": ["livre", "stylo", "table", "chaise"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does 'Sœur' mean?",
        "choices": ["brother", "sister", "mother", "cousin"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'Car' in French?",
        "choices": ["bicycle", "bus", "voiture", "train"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does 'Frère' mean?",
        "choices": ["father", "brother", "son", "uncle"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'Water' in French?",
        "choices": ["lait", "jus", "eau", "vin"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does 'Chien' mean?",
        "choices": ["cat", "dog", "horse", "rabbit"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'Thank you very much' in French?",
        "choices": ["merci", "s'il vous plaît", "merci beaucoup", "je t'en prie"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does 'Rouge' mean?",
        "choices": ["red", "blue", "green", "yellow"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'I'm sorry' in French?",
        "choices": ["je t'aime", "je te déteste", "tu me manques", "je suis désolé"],
        "type": "MCQs",
        "correctAnswer": 4
    },
     
      {
        "question": "Ami 1: Salut ! Comment ______ (to be) aujourd'hui ?",
        "choices": ["vas-tu", "est", "va", "êtes-vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: Bonjour, ______ (i) vais bien, merci. Et toi ?",
        "choices": ["je", "tu", "il", "elle"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: Moi, je ______ (to feel) un peu fatigué.",
        "choices": ["me sens", "ressens", "ressent", "sent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: Qu'est-ce que tu ______ (to do) aujourd'hui ?",
        "choices": ["fais", "faites", "faire", "ferai"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: Je vais au cinéma. Veux-tu ______ (to come) avec moi ?",
        "choices": ["venir", "partir", "aller", "revenir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: J'adorerais, mais je dois ______ (to study).",
        "choices": ["étudier", "travailler", "lire", "apprendre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: Pas de souci, on peut y aller ______ (tomorrow) si tu veux.",
        "choices": ["demain", "hier", "aujourd'hui", "après-demain"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: Parfait ! À quelle heure nous ______ (to meet) ?",
        "choices": ["retrouvons", "voyons", "parlons", "arrivons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: On se retrouve à ______ (seven) heures du soir.",
        "choices": ["sept", "huit", "six", "neuf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: Très bien. Quel film ______ (to watch) ?",
        "choices": ["regardons", "écoutons", "lisons", "parlons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: J'aimerais voir une comédie, mais tu ______ (can) choisir.",
        "choices": ["peux", "veux", "dois", "sais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: Génial ! J'______ (to love) les films amusants.",
        "choices": ["adore", "aime", "regarde", "écoute"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: Et si nous ______ (to buy) les billets en ligne ?",
        "choices": ["achetions", "vendions", "prêtions", "regardions"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: Oui, ______ (it is) une bonne idée.",
        "choices": ["c'est", "il est", "tu es", "je suis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: Alors, je te vois plus ______ (later).",
        "choices": ["tard", "ce soir", "demain", "maintenant"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: À plus ______ (see you later)!",
        "choices": ["tard", "Salut", "Bonjour", "Bonne nuit"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: N'oublie pas d'______ (to bring) tes lunettes.",
        "choices": ["apporter", "acheter", "chercher", "porter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2: Ne t'inquiète pas, je les ai ______ (already).",
        "choices": ["déjà", "encore", "toujours", "jamais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 1: Très bien, on ______ (we) se voit bientôt.",
        "choices": ["se", "tu", "je", "vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ami 2:À ______ (see you tomorrow)!",
        "choices": ["demain", "À plus tard", "Bonjour", "Bonne nuit"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
      "question": "Match the Words.",
      "type": "MatchTheFollowing",
      "pairs": [
        {
          "left": { "word": "chien", "rightId": 1 },
          "right": { "word": "house", "rightId": 3 }
        },
        {
          "left": { "word": "sœur", "rightId": 2 },
          "right": { "word": "dog", "rightId": 1 }
        },
        {
          "left": { "word": "maison", "rightId": 3 },
          "right": { "word": "window", "rightId": 5 }
        },
        {
          "left": { "word": "livre", "rightId": 4 },
          "right": { "word": "sister", "rightId": 2 }
        },
        {
          "left": { "word": "fenêtre", "rightId": 5 },
          "right": { "word": "book", "rightId": 4 }
        }
      ]
    },
    {
      "question": "Match the Words.",
      "type": "MatchTheFollowing",
      "pairs": [
        {
          "left": { "word": "famille", "rightId": 6 },
          "right": { "word": "friend", "rightId": 7 }
        },
        {
          "left": { "word": "ami", "rightId": 7 },
          "right": { "word": "chair", "rightId": 8 }
        },
        {
          "left": { "word": "chaise", "rightId": 8 },
          "right": { "word": "family", "rightId": 6 }
        },
        {
          "left": { "word": "école", "rightId": 9 },
          "right": { "word": "table", "rightId": 10 }
        },
        {
          "left": { "word": "table", "rightId": 10 },
          "right": { "word": "school", "rightId": 9 }
        }
      ]
    }
    ],
  },
  {
    quiz: '7',
    name: 'French Exercise - 7 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "What does \"Il fait chaud\" mean in English?",
        "choices": ["it's cold", "it’s hot", "it’s raining", "it’s cloudy"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"I am happy\" in French?",
        "choices": [ "Je suis heureux", "Je es heureux", "Tu es triste", "Je suis triste"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"We are friends\" in French?",
        "choices": [ "Vous êtes amis", "Ils sont amis", "Nous sommes amis", "Je suis amis"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"You (formal) are my teacher\" in French?",
        "choices": ["Tu es mon enseignant", "Vous êtes mon enseignant", "Ils sont mon enseignant", "Elle est mon enseignant"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which adjective is used to describe weather that is cloudy in French?",
        "choices": ["nuageux", "dégagé", "frais", "fort"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"They are students\" in French?",
        "choices": ["Elles sont étudiante", "Ce sont des étudiants", "Nous sommes étudiants", "Je suis étudiants"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"She is my sister\" in French?",
        "choices": ["Elle est ma sœur", "Elle est mon frère", "Je suis ma sœur", "Tu es ma sœur"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"He is a doctor\" in French?",
        "choices": [ "Elle est docteur", "Ils sont docteurs", "Je suis docteur", "Il est docteur"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What is the French translation for \"It's snowing\"?",
        "choices": ["il pleut", "il fait froid", "il neige", "le ciel est nuageux"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"They are happy\" in French?",
        "choices": [ "Elles est heureuse", "Je suis heureuse", "Ils sont heureux", "Nous sont heureux"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"We are from Spain\" in French?",
        "choices": [ "Vous êtes d'espagne", "Ils sont d'espagne", "Nous sommes d'espagne", "Je suis d'espagne"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the feminine form of \"engineer\"?",
        "choices": [ "ingénieur", "ingénieurs", "ingénieuses", "ingénieure"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "How would you say \"It’s raining a lot\" in French?",
        "choices": ["Il pleut beaucoup", "Il fait chaud", "Il neige", "Le ciel est dégagé"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following terms is used to describe cold weather in French?",
        "choices": ["chaud", "froid", "frais", "humide"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Brazilian\" in French for a woman?",
        "choices": [ "brésilien","brésilienne", "brésiliens", "brésiliennes"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the masculine form of \"teacher\"?",
        "choices": ["professeure", "professeurse", "professeur", "professeur"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"Cuban\" in French for a man?",
        "choices": ["cubain", "cubaine", "cubains", "cubaines"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the feminine form of \"singer\"?",
        "choices": [ "chanteurs", "chanteuse", "chanteuses", "chanteur"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"It’s sunny\" in French?",
        "choices": ["il fait du vent", "il fait soleil", "il fait froid", "il pleut"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Argentinian\" in French for a man?",
        "choices": ["argentin", "argentine", "argentins", "argentines"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"American\" in French?",
        "choices": [ "américains", "américaine", "américain", "américaines"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"nurse\" in French for a man?",
        "choices": [ "infirmières", "infirmiers", "infirmer", "infirmier"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "How do you form the phrase \"They have a cat\" in French?",
        "choices": ["Ils ont un chat", "Elles est un chat", "Nous avons un chat", "Je ai un chat"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which season is associated with rainy weather in France?",
        "choices": ["été (summer)", "printemps (spring)", "automne (autumn)", "hiver (winter)"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French translation for \"The weather is nice\"?",
        "choices": ["Le temps est froid", "Le temps est agréable", "Le temps est nuageux", "Il pleut"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"She is my friend\" in French?",
        "choices": [ "Je suis mon amie", "Elle sont mon amie", "Elle est mon amie", "Tu es mon amie"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you form the phrase \"You have a book\" in French?",
        "choices": [ "Tu est un livre", "Vous avez un livre", "Tu as un livre", "Ils ont un livre"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "In which season do you experience storms in France?",
        "choices": ["summer", "winter", "spring", "autumn"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"We are students\" in French?",
        "choices": [ "Vous êtes étudiants", "Ils sont étudiants", "Je suis étudiant", "Nous sommes étudiants"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which weather condition is described as \"The sky is clear\" in French?",
        "choices": ["Le ciel est nuageux", "Le ciel est dégagé", "Il fait froid", "Il pleut"],
        "type": "MCQs",
        "correctAnswer": 2
      },
     
      {
        "question": "Il fait ______ aujourd'hui. (It's sunny today.)",
        "choices": ["chaud", "froid", "humide", "nuageux"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
  {
    "question": "Je ______ (to be) heureux.",
    "choices": ["suis", "es", "est", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Nous ______ (to be) amis.",
    "choices": ["sommes", "êtes", "sont", "est"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Vous ______ (to be) mon enseignant.",
    "choices": ["êtes", "sommes", "suis", "es"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "En hiver, il neige ______. (In winter, it snows.)",
    "choices": ["beaucoup", "très peu", "modérément", "rarement"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Ils ______ (to be) étudiants.",
    "choices": ["sont", "suis", "es", "est"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Elle ______ (to be) ma sœur.",
    "choices": ["est", "suis", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Au printemps, le temps est ______. (In spring, the weather is mild.)",
    "choices": ["agréable", "froid", "chaud", "pluvieux"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Il ______ (to be) docteur.",
    "choices": ["est", "suis", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Ils ______ (to be) heureux.",
    "choices": ["sont", "est", "es", "suis"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Nous ______ (to be) d'Espagne.",
    "choices": ["sommes", "êtes", "sont", "est"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "En été, il fait ______. (In summer, it’s hot.)",
    "choices": ["chaud", "froid", "modéré", "pluvieux"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Je ______ (to be) un ingénieur.",
    "choices": ["suis", "est", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Elle ______ (to be) brésilienne.",
    "choices": ["est", "suis", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Il pleut ______. (It’s raining a lot.)",
    "choices": ["beaucoup", "un peu", "modérément", "rarement"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "L’automne est ______ (autumn is cool).",
    "choices": ["frais", "chaud", "modéré", "humide"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Il ______ (to be) cubain.",
    "choices": ["est", "suis", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Elle ______ (to be) chanteuse.",
    "choices": ["est", "suis", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Il ______ (to be) argentin.",
    "choices": ["est", "suis", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Aujourd'hui, il fait ______ (It’s cold today).",
    "choices": ["froid", "chaud", "agréable", "humide"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Je ______ (to be) américain.",
    "choices": ["suis", "est", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Elle ______ (to be) infirmière.",
    "choices": ["est", "suis", "es", "sommes"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "En hiver, le vent est ______ (In winter, the wind is strong).",
    "choices": ["fort", "modéré", "léger", "faible"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Le ciel est ______ (The sky is clear).",
    "choices": ["dégagé", "nuageux", "pluvieux", "vague"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Ils ______ (to have) un chat.",
    "choices": ["ont", "ai", "as", "a"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Elle ______ (to have) un livre.",
    "choices": ["a", "ont", "ai", "as"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Vous ______ (to have) un chat.",
    "choices": ["avez", "ont", "ai", "as"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Nous ______ (to have) un bon ami.",
    "choices": ["avons", "avez", "a", "ont"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "En été, il fait ______ (In summer, it is very hot).",
    "choices": ["très chaud", "modéré", "froid", "agréable"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Tu ______ (to have) une maison.",
    "choices": ["as", "a", "ai", "ont"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "français", "rightId": 1 },
        "right": { "word": "italian", "rightId": 2 }
      },
      {
        "left": { "word": "italien", "rightId": 2 },
        "right": { "word": "german", "rightId": 4 }
      },
      {
        "left": { "word": "espagnol", "rightId": 3 },
        "right": { "word": "french", "rightId": 1 }
      },
      {
        "left": { "word": "allemand", "rightId": 4 },
        "right": { "word": "to speak", "rightId": 5 }
      },
      {
        "left": { "word": "parler", "rightId": 5 },
        "right": { "word": "spanish", "rightId": 3 }
      }
    ]
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "manger", "rightId": 6 },
        "right": { "word": "to be", "rightId": 7 }
      },
      {
        "left": { "word": "être", "rightId": 7 },
        "right": { "word": "english", "rightId": 8 }
      },
      {
        "left": { "word": "anglais", "rightId": 8 },
        "right": { "word": "to eat", "rightId": 6 }
      },
      {
        "left": { "word": "chinois", "rightId": 9 },
        "right": { "word": "japanese", "rightId": 10 }
      },
      {
        "left": { "word": "japonais", "rightId": 10 },
        "right": { "word": "chinese", "rightId": 9 }
      }
    ]
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "il pleut", "rightId": 1 },
        "right": { "word": "it's windy", "rightId": 5 }
      },
      {
        "left": { "word": "il fait chaud", "rightId": 2 },
        "right": { "word": "it’s cold", "rightId": 3 }
      },
      {
        "left": { "word": "il fait froid", "rightId": 3 },
        "right": { "word": "it’s raining", "rightId": 1 }
      },
      {
        "left": { "word": "le vent souffle", "rightId": 4 },
        "right": { "word": "it’s hot", "rightId": 2 }
      },
      {
        "left": { "word": "il y a du vent", "rightId": 5 },
        "right": { "word": "the wind is blowing", "rightId": 4 }
      }
    ]
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "il neige", "rightId": 6 },
        "right": { "word": "there is sunshine", "rightId": 10 }
      },
      {
        "left": { "word": "il fait beau", "rightId": 7 },
        "right": { "word": "there are clouds", "rightId": 9 }
      },
      {
        "left": { "word": "il fait nuageux", "rightId": 8 },
        "right": { "word": "it's snowing", "rightId": 6 }
      },
      {
        "left": { "word": "il y a des nuages", "rightId": 9 },
        "right": { "word": "the weather is nice", "rightId": 7 }
      },
      {
        "left": { "word": "il y a du soleil", "rightId": 10 },
        "right": { "word": "it's cloudy", "rightId": 8 }
      }
    ]
  },
],
  },
  {
    quiz: '8',
    name: 'French Exercise - 8 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "What does \"bureau\" mean?",
        "choices": ["chair", "desk", "notebook", "pencil"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"cahier\" mean in English?",
        "choices": ["pen", "notebook", "book", "desk"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"professeur\" mean?",
        "choices": ["student", "teacher", "classmate", "principal"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"window\" in French?",
        "choices": ["porte", "bureau", "fenêtre", "mur"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"stylo\" mean?",
        "choices": ["pencil", "paper", "pen", "book"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"devoir\" mean?",
        "choices": ["homework", "exam", "lesson", "notebook"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"salle de classe\" mean?",
        "choices": ["classroom", "library", "cafeteria", "playground"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"école\" mean?",
        "choices": ["school", "college", "university", "institute"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"s'il te plaît\" mean?",
        "choices": ["excuse me", "please", "thank you", "i'm sorry"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"merci\" mean?",
        "choices": ["sorry", "please", "thank you", "excuse me"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"I don’t understand\" in French?",
        "choices": ["je suis désolé", "je comprends", "je ne comprends pas", "excuse-moi"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Je suis désolé\" mean?",
        "choices": ["i'm sorry", "i don't know", "i'm happy", "i'm sad"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"excuse me\" in French?",
        "choices": ["merci", "s'il te plaît", "excuse-moi", "je suis désolé"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"bonjour\" mean?",
        "choices": ["goodbye", "good night", "hello", "good morning"],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "What does \"Où est la salle de classe?\" mean?",
        "choices": ["where is the classroom?", "what is the homework?", "how are you?", "when is the exam?"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"Puis-je aller aux toilettes?\" mean?",
        "choices": ["can i go to the library?", "can i go to the bathroom?", "can i go home?", "can i go to class?"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What day is today? (If today is Thursday)",
        "choices": ["lundi", "mardi", "jeudi", "vendredi"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"February\" in French?",
        "choices": ["janvier", "mars", "février", "avril"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "Which season follows summer?",
        "choices": ["printemps", "automne", "hiver", "été"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Il fait chaud\" mean?",
        "choices": ["it's cold", "it's warm", "it's hot", "it's rainy"],
        "type": "MCQs",
        "correctAnswer": 1
    },
     
      {
        "question": "Le ______ (desk) est en bois.",
        "choices": ["bureau", "chaise", "cahier", "stylo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "La ______ (notebook) est sur la table.",
        "choices": ["cahier", "livre", "stylo", "fenêtre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Le ______ (teacher) explique la leçon.",
        "choices": ["professeur", "élève", "livre", "devoir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "La ______ (window) est ouverte.",
        "choices": ["fenêtre", "porte", "mur", "bureau"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Le ______ (pen) est sur le bureau.",
        "choices": ["stylo", "crayon", "cahier", "livre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(Please) ______ te plaît passe-moi le livre.",
        "choices": ["S'il", "Merci", "Bonjour", "Excuse-moi"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(Thank you) ______ pour ton aide.",
        "choices": ["Merci", "S'il te plaît", "Bonjour", "Excuse-moi"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(Excuse me) ______ j'ai une question.",
        "choices": ["Excuse-moi", "S'il te plaît", "Merci", "Bonjour"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Je ne ______ pas (I don't understand) la phrase.",
        "choices": ["comprends", "Merci", "S'il te plaît", "Bonjour"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(I'm sorry) ______ désolé d'être en retard.",
        "choices": ["Je suis", "Excuse-moi", "Merci", "Bonjour"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Élève: Bonjour, comment ______ (are you)?",
        "choices": ["ça va", "es-tu", "t'es", "suis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Professeur: ______ (Good morning) tout le monde.",
        "choices": ["Bonjour", "Merci", "Salut", "Bonsoir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Élève: Puis-je ______ (go) à la bibliothèque?",
        "choices": ["aller", "venir", "partir", "rester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Professeur: Oui, ______ (go) vite.",
        "choices": ["vas", "allez", "venez", "pars"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Élève: Quelle est la ______ (homework) pour demain?",
        "choices": ["devoir", "leçon", "examen", "cours"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(The) ______ livre est sur la table.",
        "choices": ["Le", "La", "Un", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(A) ______ chat est mignon.",
        "choices": ["Un", "Le", "La", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(The) ______ fleurs sont belles.",
        "choices": ["Les", "Le", "Un", "Une"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(An) ______ élève a oublié son livre.",
        "choices": ["Un", "Une", "Le", "La"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "(The) ______ porte est fermée.",
        "choices": ["La", "Le", "Les", "Un"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },

    {
      "question": "Match the Words.",
      "type": "MatchTheFollowing",
      "pairs": [
        {
          "left": { "word": "un livre", "rightId": 1 },
          "right": { "word": "a board", "rightId": 3 }
        },
        {
          "left": { "word": "une craie", "rightId": 2 },
          "right": { "word": "a student", "rightId": 4 }
        },
        {
          "left": { "word": "un tableau", "rightId": 3 },
          "right": { "word": "chalk", "rightId": 2 }
        },
        {
          "left": { "word": "un étudiant", "rightId": 4 },
          "right": { "word": "a ruler", "rightId": 5 }
        },
        {
          "left": { "word": "une règle", "rightId": 5 },
          "right": { "word": "a book", "rightId": 1 }
        }
      ]
    },
    {
      "question": "Match the Words.",
      "type": "MatchTheFollowing",
      "pairs": [
        {
          "left": { "word": "un professeur", "rightId": 6 },
          "right": { "word": "a sheet of paper", "rightId": 7 }
        },
        {
          "left": { "word": "une feuille de papier", "rightId": 7 },
          "right": { "word": "a teacher", "rightId": 6 }
        },
        {
          "left": { "word": "écrire", "rightId": 8 },
          "right": { "word": "to draw", "rightId": 10 }
        },
        {
          "left": { "word": "lire", "rightId": 9 },
          "right": { "word": "to write", "rightId": 8 }
        },
        {
          "left": { "word": "dessiner", "rightId": 10 },
          "right": { "word": "to read", "rightId": 9 }
        }
      ]
    },
    ],
  },
  {
    quiz: '9',
    name: 'French Exercise - 9 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "What does 'anniversaire' mean in English?",
        "choices": ["anniversary", "party", "birthday", "celebration"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'salon' mean in English?",
        "choices": ["kitchen", "bedroom", "living room", "dining room"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "If you were born on May 10, your zodiac sign is...",
        "choices": ["gémeaux", "taureau", "bélier", "vierge"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'party' in French?",
        "choices": ["anniversaire", "fête", "soirée", "célébration"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which furniture item is found in the 'salon'?",
        "choices": ["canapé (sofa)", "lit (bed)", "bureau (desk)", "table de nuit (nightstand)"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Where would you most likely find a 'bibliothèque'?",
        "choices": ["kitchen", "office", "bedroom", "living room"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What is the zodiac sign of someone born in July?",
        "choices": ["bélier", "lion", "cancer", "balance"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "If your sign is 'sagittarius', you were born in...",
        "choices": ["décembre", "mars", "juin", "avril"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'chambre' refer to in English?",
        "choices": ["bathroom", "bedroom", "kitchen", "office"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which verb means 'célébrer' in English?",
        "choices": ["to celebrate", "to turn", "to complete", "to have"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What zodiac sign corresponds to a person born on January 22?",
        "choices": ["capricorne", "verseau", "scorpion", "poissons"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French term for a 'window'?",
        "choices": ["porte", "fenêtre", "miroir", "table"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "If you were born on April 18, you are...",
        "choices": ["bélier", "taureau", "sagittaire", "balance"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does the verb 'avoir' mean?",
        "choices": ["to be", "to have", "to make", "to go"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct conjugation of the verb 'être' for 'je'?",
        "choices": ["suis", "es", "sommes", "sont"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which preposition is used to express 'next to' in French?",
        "choices": ["sur", "sous", "à côté de", "derrière"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is a demonstrative adjective?",
        "choices": ["le", "la", "ce", "une"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What pronoun is correct for 'we' in French?",
        "choices": ["ils", "tu", "nous", "vous"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'I am' in French?",
        "choices": ["je suis", "tu es", "nous sommes", "ils sont"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which room would you most likely find a 'lit' (bed)?",
        "choices": ["salon", "cuisine", "salle de bain", "chambre"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What verb completes this sentence: 'Nous ______ (have) un chien.'?",
        "choices": ["as", "avez", "avons", "ont"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you conjugate the verb 'écrire' for 'tu'?",
        "choices": ["écris", "écrit", "écrivez", "écrivons"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does the verb 'écrire' mean?",
        "choices": ["to read", "to write", "to listen", "to watch"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "'La table est dans la salle à manger.' Which preposition is used here?",
        "choices": ["dans", "sur", "sous", "à côté de"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'fifty' in French?",
        "choices": ["quarante", "cinquante", "soixante", "vingt"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Where would you most likely find a 'bibliothèque'?",
        "choices": ["kitchen", "office", "bedroom", "living room"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What number follows 'soixante-dix-neuf'?",
        "choices": ["quatre-vingts", "soixante", "cinquante", "quatre-vingt-dix"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'thirty-five' in French?",
        "choices": ["vingt-cinq", "quarante-cinq", "trente-cinq", "cinquante-cinq"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which demonstrative adjective is used with feminine singular nouns in French?",
        "choices": ["ce", "cette", "ces", "celui"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'one hundred' in French?",
        "choices": ["cent", "mille", "dix", "cinq"],
        "type": "MCQs",
        "correctAnswer": 1
      },
     
    {
      "question": "Mon anniversaire est le ______ (5) juin.",
      "choices": ["cinq","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "Le ______ est très grand. (The living room is very big.)",
    "choices": ["salon","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
      "question": "Elle a ______ (30) ans aujourd'hui.",
      "choices": ["trente","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Quand est ton ______ (birthday)?",
      "choices": ["anniversaire","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "Il y a ______ canapé dans le salon. (There is a sofa in the living room.)",
    "choices": ["un","2","3","4"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
      "question": "Nous préparons une fête d'______ (birthday) pour mon ami.",
      "choices": ["anniversaire","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "J'ai une fête d'anniversaire le ______ (Sunday).",
      "choices": ["dimanche","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Mon signe astrologique est ______ (Cancer) parce que je suis né en juillet.",
      "choices": ["Cancer","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "La ______ est à gauche de la chambre. (The bathroom is to the left of the bedroom.)",
    "choices": ["salle de bain","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
      "question": "Il est ______ (Sagittarius) car son anniversaire est en décembre.",
      "choices": ["Sagittaire","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Si tu es né en octobre, tu es ______ (Libra).",
      "choices": ["Balance","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "______ table est dans la salle à manger. (This table is in the dining room.)",
    "choices": ["Cette","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "______ cuisine est moderne. (That kitchen is modern.)",
    "choices": ["Cette","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
      "question": "Ma mère est ______ (Aquarius), née en février.",
      "choices": ["Verseau","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "(Taurus) ______ est le signe de mon frère.",
      "choices": ["Taureau","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Je ______ (am) étudiant en français.",
      "choices": ["suis","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "(That) ______ chaise est derrière le bureau.",
    "choices": ["Cette"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "(This) ______ chambre est à l'étage.",
    "choices": ["Cette"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
      "question": "Nous ______ (have) un cours de français aujourd'hui.",
      "choices": ["avons","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Ils ______ (are) très gentils.",
      "choices": ["sont","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Tu ______ (speak) français très bien.",
      "choices": ["parles","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Elle ______ (writes) une lettre à sa sœur.",
      "choices": ["écrit","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Mon ______ (father) est médecin.",
      "choices": ["père","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "J'ai deux ______ (sisters).",
      "choices": ["sœurs","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Ma ______ (mother) est avocate.",
      "choices": ["mère","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Ton ______ (brother) travaille en France.",
      "choices": ["frère","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "Le ______ est à côté de la fenêtre. (The bed is next to the window.)",
    "choices": ["lit","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "(This) ______ bibliothèque est près du canapé.",
    "choices": ["Cette","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "(This) ______ cuisine est grande et spacieuse.",
    "choices": ["Cette","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
      "question": "Leurs ______ (parents) sont très gentils.",
      "choices": ["parents","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "anniversaire", "rightId": 1 },
        "right": { "word": "to write", "rightId": 3 }
      },
      {
        "left": { "word": "cancer", "rightId": 2 },
        "right": { "word": "brother", "rightId": 4 }
      },
      {
        "left": { "word": "écrire", "rightId": 3 },
        "right": { "word": "cancer", "rightId": 2 }
      },
      {
        "left": { "word": "frère", "rightId": 4 },
        "right": { "word": "we have", "rightId": 5 }
      },
      {
        "left": { "word": "nous avons", "rightId": 5 },
        "right": { "word": "birthday", "rightId": 1 }
      }
    ]
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "mère", "rightId": 6 },
        "right": { "word": "to speak", "rightId": 7 }
      },
      {
        "left": { "word": "parler", "rightId": 7 },
        "right": { "word": "father", "rightId": 10 }
      },
      {
        "left": { "word": "école", "rightId": 8 },
        "right": { "word": "student", "rightId": 9 }
      },
      {
        "left": { "word": "étudiant", "rightId": 9 },
        "right": { "word": "school", "rightId": 8 }
      },
      {
        "left": { "word": "père", "rightId": 10 },
        "right": { "word": "mother", "rightId": 6 }
      }
    ]
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "la chaise", "rightId": 1 },
        "right": { "word": "the bathroom", "rightId": 5 }
      },
      {
        "left": { "word": "la chambre", "rightId": 2 },
        "right": { "word": "the living room", "rightId": 3 }
      },
      {
        "left": { "word": "le canapé", "rightId": 3 },
        "right": { "word": "the bed", "rightId": 4 }
      },
      {
        "left": { "word": "le lit", "rightId": 4 },
        "right": { "word": "in the bedroom", "rightId": 2 }
      },
      {
        "left": { "word": "la salle de bain", "rightId": 5 },
        "right": { "word": "the chair", "rightId": 1 }
      }
    ]
  },
  {
    "question": "Match the Words.",
    "type": "MatchTheFollowing",
    "pairs": [
      {
        "left": { "word": "sous la table", "rightId": 6 },
        "right": { "word": "the table", "rightId": 8 }
      },
      {
        "left": { "word": "sur la chaise", "rightId": 7 },
        "right": { "word": "in the bedroom", "rightId": 9 }
      },
      {
        "left": { "word": "devant le canapé", "rightId": 8 },
        "right": { "word": "next to the kitchen", "rightId": 10 }
      },
      {
        "left": { "word": "dans la chambre", "rightId": 9 },
        "right": { "word": "under the table", "rightId": 6 }
      },
      {
        "left": { "word": "à côté de la cuisine", "rightId": 10 },
        "right": { "word": "on the chair", "rightId": 7 }
      }
    ]
  },
    ],
  },
  {
    quiz: '10',
    name: 'French Exercise - 10 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "Which adverb means 'always' in French?",
        "choices": ["jamais", "parfois", "toujours", "rarement"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'He runs fast' in French?",
        "choices": ["Il court bien", "Il court vite", "Il court souvent", "Il court mal"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence correctly places the adverb 'toujours' in a sentence with a simple tense?",
        "choices": ["Il toujours parle français", "Il parle toujours français", "Toujours il parle français", "Il parle français toujours"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French adverb for 'quickly'?",
        "choices": ["lentement", "doucement", "rapidement", "fréquemment"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the translation of 'I rarely go to the park'?",
        "choices": ["Je vais souvent au parc", "Je vais rarement au parc", "Je vais toujours au parc", "Je vais bien au parc"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence is correct for 'She has already left'?",
        "choices": ["Elle est parti déjà", "Elle est déjà parti", "Elle déjà est partie", "Elle est déjà partie"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which of the following means 'sometimes' in French?",
        "choices": ["toujours", "jamais", "parfois", "ici"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'They never eat vegetables' in French?",
        "choices": ["Ils mangent jamais des légumes", "Ils ne mangent jamais des légumes", "Ils ne mangent des légumes jamais", "Ils mangent des légumes jamais"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of 'Je fais parfois du sport'?",
        "choices": ["I always exercise", "I often exercise", "I never exercise", "I sometimes exercise"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which of the following adverbs means 'too much'?",
        "choices": ["très", "trop", "toujours", "rarement"],
        "type": "MCQs",
        "correctAnswer": 2
      },
   
     
    {
      "question": "Il parle ______ (bien/mal) espagnol.",
      "choices": ["bien","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Nous allons ______ (souvent/rarement) au cinéma.",
      "choices": ["souvent","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Elle a ______ (déjà/trop) fini ses devoirs.",
      "choices": ["déjà","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Vous travaillez ______ (lentement/trop) aujourd'hui.",
      "choices": ["trop","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Il a ______ (toujours/souvent) mangé ici.",
      "choices": ["toujours","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Je fais ______ (parfois/souvent) de la randonnée le week-end.",
      "choices": ["parfois","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Elles lisent ______ (vite/lentement) les livres.",
      "choices": ["lentement","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Je suis ______ (très/trop) fatigué ce matin.",
      "choices": ["très","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Nous sommes ______ (déjà/souvent) arrivés à l'aéroport.",
      "choices": ["déjà","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Ils ne viennent ______ (jamais/toujours) à nos fêtes.",
      "choices": ["jamais","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "souvent", "rightId": 1 },
            "right": { "word": "never (used with 'ne' for negation)", "rightId": 2 }
          },
          {
            "left": { "word": "jamais", "rightId": 2 },
            "right": { "word": "already (before the past participle)", "rightId": 5 }
          },
          {
            "left": { "word": "toujours", "rightId": 3 },
            "right": { "word": "often (usually placed after the verb)", "rightId": 1 }
          },
          {
            "left": { "word": "parfois", "rightId": 4 },
            "right": { "word": "always (placed before the verb)", "rightId": 3 }
          },
          {
            "left": { "word": "déjà", "rightId": 5 },
            "right": { "word": "sometimes (placed at the end of a sentence)", "rightId": 4 }
          },
          ],
      },
      
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "rapidement", "rightId": 6 },
            "right": { "word": "early (placed after the verb or at the end of the sentence)", "rightId": 10 }
          },
          {
            "left": { "word": "maintenant", "rightId": 7 },
            "right": { "word": "slowly (placed after the verb)", "rightId": 8 }
          },
          {
            "left": { "word": "doucement", "rightId": 8 },
            "right": { "word": "here (placed after the verb or at the end of the sentence)", "rightId": 9 }
          },
          {
            "left": { "word": "ici", "rightId": 9 },
            "right": { "word": "now (at the start or end of a sentence)", "rightId": 7 }
          },
          {
            "left": { "word": "tôt", "rightId": 10 },
            "right": { "word": "quickly (placed after the verb)", "rightId": 6 }
          }
        ],
      },
    ],
  },
  {
    quiz: '11',
    name: 'French Exercise - 11 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "How do you say \"I love ice cream\" in French?",
        "choices": [
          "J'adore les glaces",
          "J'aime les glaces",
          "Je préfère les glaces",
          "Je déteste les glaces"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct sentence to express \"She doesn’t like coffee\"?",
        "choices": [
          "Elle adore le café",
          "Elle n'aime pas le café",
          "Elle aime beaucoup le café",
          "Elle déteste le café"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence correctly expresses \"They prefer tea over coffee\"?",
        "choices": [
          "Ils détestent le thé",
          "Ils aiment beaucoup le café",
          "Ils préfèrent le thé au café",
          "Ils préfèrent le café au thé"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"We hate homework\" in French?",
        "choices": [
          "Nous adorons les devoirs",
          "Nous aimons les devoirs",
          "Nous détestons les devoirs",
          "Nous préférons les devoirs"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which sentence is correct for \"He likes reading but prefers watching TV\"?",
        "choices": [
          "Il aime lire, mais il préfère regarder la télévision",
          "Il déteste lire, mais il aime regarder la télévision",
          "Il préfère lire, mais il n'aime pas regarder la télévision",
          "Il adore lire et il aime regarder la télévision"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the French translation of \"Do you like playing football?\"",
        "choices": [
          "Tu préfères jouer au football ?",
          "Tu détestes jouer au football ?",
          "Tu aimes jouer au football ?",
          "Tu adores jouer au football ?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following sentences means \"I don’t like chocolate at all\"?",
        "choices": [
          "Je n'aime pas du tout le chocolat",
          "J'adore le chocolat",
          "Je déteste le chocolat",
          "Je préfère le chocolat"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the translation of \"They prefer dogs to cats\"?",
        "choices": [
          "Ils aiment beaucoup les chiens",
          "Ils préfèrent les chiens aux chats",
          "Ils détestent les chiens",
          "Ils adorent les chiens et les chats"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following sentences is correct to express \"She loves to travel\"?",
        "choices": [
          "Elle préfère voyager",
          "Elle aime voyager",
          "Elle adore voyager",
          "Elle déteste voyager"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"We prefer going to the movies\" in French?",
        "choices": [
          "Nous préférons aller au cinéma",
          "Nous aimons aller au cinéma",
          "Nous adorons aller au cinéma",
          "Nous détestons aller au cinéma"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
     
    {
      "question": "Nous ______ (adorer) les vacances à la plage.",
      "choices": ["adorons","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
    "question": "Il ne ______ (aimer) pas le football, mais il préfère le basket.",
    "choices": ["aime","1","2","3"],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
},
  {
      "question": "Elles ______ (préférer) le thé au café.",
      "choices": ["préfèrent","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Tu ______ (détester) les légumes verts, n'est-ce pas ?",
      "choices": ["détestes","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Je ______ (aimer) beaucoup les films d'horreur.",
      "choices": ["aime","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Ils ______ (préférer) voyager en voiture plutôt qu'en train.",
      "choices": ["préfèrent","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Vous ______ (aimer) écouter de la musique classique ?",
      "choices": ["aimez","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Elle ______ (détester) faire du shopping, mais elle adore lire.",
      "choices": ["déteste","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Nous ______ (préférer) les chiens aux chats.",
      "choices": ["préférons","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
  {
      "question": "Je ______ (aimer) beaucoup le chocolat, mais je n'aime pas les bonbons.",
      "choices": ["aime","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Me gusta el fútbol", "rightId": 1 },
            "right": { "word": "I don’t like spicy food", "rightId": 3 }
          },
          {
            "left": { "word": "Prefiero leer libros", "rightId": 2 },
            "right": { "word": "I like football", "rightId": 1 }
          },
          {
            "left": { "word": "No me gusta la comida picante", "rightId": 3 },
            "right": { "word": "I prefer to read books", "rightId": 2 }
          },
          {
            "left": { "word": "Me encanta escuchar música", "rightId": 4 },
            "right": { "word": "I hate waking up early", "rightId": 5}
          },
          {
            "left": { "word": "Odio levantarme temprano", "rightId": 5 },
            "right": { "word": "I love listening to music", "rightId": 4 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Me fascina el arte", "rightId": 6 },
            "right": { "word": "I prefer summer to winter", "rightId": 8 }
          }, 
          {
            "left": { "word": "No me gusta viajar", "rightId": 7 },
            "right": { "word": "I am fascinated by art", "rightId": 6 }
          },
          {
            "left": { "word": "Prefiero el verano al invierno", "rightId": 8 },
            "right": { "word": "I hate doing homework", "rightId": 10 }
          },
          {
            "left": { "word": "Me encanta ver películas", "rightId": 9 },
            "right": { "word": "I don't like to travel", "rightId": 7 }
          },
          {
            "left": { "word": "Odio hacer la tarea", "rightId": 10 },
            "right": { "word": "I love watching movies", "rightId": 9 }
          }
        ],
      },
    ],
  },
  {
    quiz: '12',
    name: 'French Exercise - 12 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "How do you say \"Turn left\" in French?",
        "choices": ["Tournez à droite", "Continuez tout droit", "Tournez à gauche", "Traversez la rue"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct phrase for \"Where is the bank?\" in French?",
        "choices": ["Où est la gare ?", "Où est la banque ?", "Comment puis-je aller à la banque ?", "Quel est le chemin pour la banque ?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence means \"How can I go to the restaurant?\"",
        "choices": ["Où se trouve le restaurant ?", "Comment puis-je aller au restaurant ?", "Quel est le chemin pour le restaurant ?", "Est-ce loin du restaurant ?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"Take the first left\"?",
        "choices": ["Prenez la première à droite", "Prenez la deuxième à gauche", "Prenez la première à gauche", "Continuez tout droit"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the translation of \"The hotel is near the station\"?",
        "choices": ["L’hôtel est à côté de la gare", "L’hôtel est loin de la gare", "L’hôtel est en face de la gare", "L’hôtel est près de la gare"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "If someone asks you \"Comment puis-je aller au musée ?\", how would you response with \"Turn right and take the first left\"?",
        "choices": ["Tournez à droite et prenez la première à gauche", "Tournez à gauche après l’hôtel", "Traversez la rue et prenez la deuxième à droite", "Continuez tout droit, puis tournez à droite"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"Est-ce loin d’ici ?\" mean in French?",
        "choices": ["Is it near here?", "Is it far from here?", "What is the distance from here?", "Where is it?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following sentences means \"The park is next to the school\" in French?",
        "choices": ["Le parc est près de l’école", "Le parc est à côté de l’école", "Le parc est en face de l’école", "Le parc est loin de l’école"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you ask \"How can I go to the supermarket?\" in French?",
        "choices": ["Où se trouve le supermarché ?", "Comment puis-je aller au supermarché ?", "Est-ce loin du supermarché ?", "Quel est le chemin pour le supermarché ?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Go straight, then turn left\" in French?",
        "choices": ["Prenez la première rue à gauche", "Allez tout droit, puis tournez à gauche", "Continuez tout droit et traversez le pont", "Prenez la deuxième rue à droite"],
        "type": "MCQs",
        "correctAnswer": 2
      },
     
      {
        "question": "(Turn right) ______ après le feu rouge.",
        "choices": ["Tournez à droite", "Aller à", "Tourner à gauche", "À côté de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Excusez-moi, comment puis-je ______ (go to) la gare ?",
        "choices": ["aller à", "tourner à droite", "prendre la première", "traverser"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pour aller au musée, continuez tout droit et puis ______ (turn left).",
        "choices": ["tournez à gauche", "tourner à droite", "continuer tout droit", "aller à"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le cinéma est ______ (next to) la bibliothèque.",
        "choices": ["à côté de", "loin de", "en face de", "près de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Cross) ______ le pont, et vous verrez l’église à droite.",
        "choices": ["Traversez", "Prenez", "Continuez", "Allez à"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pardon, où se trouve ______ (the nearest) pharmacie ?",
        "choices": ["la pharmacie la plus proche", "la banque", "la gare", "l'hôtel"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "L’hôtel est en face de la gare, ______ (far from) l’aéroport.",
        "choices": ["loin de", "près de", "à côté de", "en face de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pour aller à la poste, ______ (take the second) rue à droite.",
        "choices": ["prenez la deuxième", "prenez la première", "tournez à gauche", "allez tout droit"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Is it far) ______ d’ici ?",
        "choices": ["Est-ce loin", "Est-ce proche", "Où est", "Comment aller à"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Où est l’arrêt de bus le plus ______ (near)?",
        "choices": ["proche", "loin", "près", "à côté"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Tournez à droite.", "rightId": 1 },
            "right": { "word": "I’m looking for the train station.", "rightId": 5 }
          },
          {
            "left": { "word": "Tourner à gauche", "rightId": 2 },
            "right": { "word": "It's near here.", "rightId": 4 }
          },
          {
            "left": { "word": "Allez tout droit.", "rightId": 3 },
            "right": { "word": "Go straight.", "rightId": 3 }
          },
          {
            "left": { "word": "C'est près d'ici.", "rightId": 4 },
            "right": { "word": "Turn left.", "rightId": 2}
          },
          {
            "left": { "word": "Je cherche la gare.", "rightId": 5 },
            "right": { "word": "Turn right.", "rightId": 1 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Est-ce que c'est loin ?", "rightId": 6 },
            "right": { "word": "You have arrived.", "rightId": 10 }
          },
          {
            "left": { "word": "Continuez jusqu'au feu.", "rightId": 7 },
            "right": { "word": "Cross the street.", "rightId": 9 }
          },
          {
            "left": { "word": "Pouvez-vous m'aider, s'il vous plaît ?", "rightId": 8 },
            "right": { "word": "Can you help me, please?", "rightId": 8 }
          },
          {
            "left": { "word": "Traversez la rue.", "rightId": 9 },
            "right": { "word": "Continue until the traffic light.", "rightId": 7 }
          },
          {
            "left": { "word": "Vous êtes arrivé.", "rightId": 10 },
            "right": { "word": "Is it far?", "rightId": 6 }
          }
        ],
      },
    ],
  },
  {
    quiz: '13',
    name: 'French Exercise - 13 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "What is the correct translation for \"I would like to make an appointment\"?",
        "choices": [
          "Je voudrais prendre un rendez-vous.",
          "Je voudrais confirmer un rendez-vous.",
          "Je voudrais reporter un rendez-vous.",
          "Je voudrais proposer un rendez-vous."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which phrase means \"Are you available on Tuesday?\"",
        "choices": [
          "Est-ce que vous êtes disponible mardi ?",
          "Est-ce que vous pouvez confirmer mardi ?",
          "Pouvons-nous annuler mardi ?",
          "Est-ce que vous proposez mardi ?"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"Please confirm the meeting time\"?",
        "choices": [
          "Veuillez reporter l’heure de la réunion.",
          "Merci de confirmer l’heure de la réunion.",
          "Est-ce que vous proposez une nouvelle heure ?",
          "Je voudrais annuler l’heure de la réunion."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct response to \"Je voudrais annuler notre rendez-vous\" (I would like to cancel our appointment)?",
        "choices": [
          "Je vais reporter la réunion.",
          "Merci de confirmer la nouvelle date.",
          "Je comprends, merci de me prévenir.",
          "Je suis disponible à cette heure."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which sentence means \"I propose we meet on Friday at 2 p.m.\"?",
        "choices": [
          "Je vous propose de nous rencontrer vendredi à 14h.",
          "Je vous confirme notre rendez-vous vendredi à 14h.",
          "Je voudrais reporter notre rendez-vous à 14h.",
          "Je vais annuler la réunion de vendredi à 14h."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct way to ask \"Can we reschedule the meeting?\"",
        "choices": [
          "Est-ce que nous pouvons confirmer la réunion ?",
          "Est-ce que nous pouvons annuler la réunion ?",
          "Est-ce que nous pouvons reporter la réunion ?",
          "Est-ce que nous pouvons discuter la réunion ?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you write \"I’m sorry, but I have to cancel our meeting\"?",
        "choices": [
          "Je suis désolé(e), mais je dois confirmer notre rendez-vous.",
          "Je suis désolé(e), mais je dois annuler notre rendez-vous.",
          "Je suis désolé(e), mais je dois reporter notre réunion.",
          "Je suis désolé(e), mais je vais confirmer notre réunion."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is appropriate for ending a formal email?",
        "choices": [
          "à plus tard",
          "amicalement",
          "bien à vous",
          "cordialement"
        ],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What is the best phrase to use in an informal email when suggesting a meeting time?",
        "choices": [
          "Je vous propose de nous rencontrer lundi à 10h.",
          "Est-ce que tu serais libre lundi à 10h ?",
          "Veuillez confirmer la date et l’heure.",
          "Merci de me faire savoir vos disponibilités."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence is appropriate for a formal email when requesting a meeting?",
        "choices": [
          "Ça te dit qu’on se voie jeudi après-midi ?",
          "Est-ce que nous pouvons prendre un rendez-vous jeudi ?",
          "Je voudrais prendre rendez-vous pour une réunion jeudi après-midi.",
          "Peux-tu confirmer notre réunion jeudi ?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
     
      {
        "question": "Je voudrais ______ (make an appointment) pour discuter du projet.",
        "choices": ["prendre rendez-vous", "faire un rendez-vous", "organiser un rendez-vous", "fixer un rendez-vous"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Est-ce que vous êtes ______ (available) lundi à 10h ?",
        "choices": ["disponible", "occupé", "libre", "prêt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Merci de ______ (confirm) la date et l’heure de notre réunion.",
        "choices": ["confirmer", "vérifier", "notifier", "envoyer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je suis désolé(e), mais je dois ______ (cancel) notre rendez-vous.",
        "choices": ["annuler", "modifier", "reprogrammer", "suspendre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vous ______ (propose) de nous rencontrer vendredi après-midi.",
        "choices": ["propose", "demande", "inviter", "suggérer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pouvons-nous ______ (meet) jeudi matin pour la réunion ?",
        "choices": ["nous rencontrer", "nous réunir", "nous rassembler", "nous discuter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Veuillez ______ (suggest) une nouvelle date pour le rendez-vous.",
        "choices": ["proposer", "confirmer", "indiquer", "choisir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(I would like to) ______ vous rencontrer la semaine prochaine.",
        "choices": ["Je voudrais", "Je veux", "J'aimerais", "Je suis désolé"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pourriez-vous ______ (send) une confirmation par mail ?",
        "choices": ["envoyer", "faire", "écrire", "demander"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vous écris pour ______ (discuss) notre collaboration future.",
        "choices": ["discuter", "parler", "expliquer", "négocier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Je veux un rendez-vous.", "rightId": 1 },
            "right": { "word": "When can we meet?", "rightId": 5 }
          },
          {
            "left": { "word": "À quelle heure?", "rightId": 2 },
            "right": { "word": "Does that work?", "rightId": 4 }
          },
          {
            "left": { "word": "Je suis libre.", "rightId": 3 },
            "right": { "word": "What time?", "rightId": 2 }
          }, 
          {
            "left": { "word": "Est-ce que ça marche?", "rightId": 4 },
            "right": { "word": "I want a date", "rightId": 1}
          },
          {
            "left": { "word": "Quand pouvons-nous nous voir?", "rightId": 5 },
            "right": { "word": "I am free.", "rightId": 3 }
          },
         
        ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Vous êtes disponible?", "rightId": 6 },
            "right": { "word": "Does Friday work?", "rightId": 10 }
          },
          {
            "left": { "word": "Je peux demain.", "rightId": 7 },
            "right": { "word": "I prefer the afternoon.", "rightId": 9 }
          },
          {
            "left": { "word": "C'est bon pour vous?", "rightId": 8 },
            "right": { "word": "Are you available?", "rightId": 6 }
          },
          {
            "left": { "word": "Je préfère l'après-midi.", "rightId": 9 },
            "right": { "word": "I can tomorrow.", "rightId": 7 }
          },
          {
            "left": { "word": "Est-ce que vendredi marche?", "rightId": 10 },
            "right": { "word": "Is that good for you?", "rightId": 8 }
          }
        ],
      },
    ],
  },
  {
    quiz: '14',
    name: 'French Exercise - 14 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "Which auxiliary verb is used with the verb manger in Passé Composé?",
        "choices": ["être", "aller", "avoir", "faire"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the past participle of prendre?",
        "choices": ["pris", "prendu", "prendé", "prent"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of these verbs requires être as an auxiliary in Passé Composé?",
        "choices": ["dormir", "arriver", "comprendre", "écrire"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the past participle of venir?",
        "choices": ["venu", "vené", "vennis", "venais"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which sentence correctly uses Passé Composé?",
        "choices": ["Je suis mangé un sandwich.", "Il a vu un film intéressant.", "Nous avons être au restaurant hier.", "Elles sont avoir allé à l'école."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these is the correct auxiliary verb for naître in Passé Composé?",
        "choices": ["être", "avoir", "faire", "venir"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "The past participle of voir is:",
        "choices": ["vu", "voiré", "vus", "vuir"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the past participle of faire?",
        "choices": ["fait", "fairé", "fais", "faitu"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of these verbs uses avoir in Passé Composé?",
        "choices": ["partir", "aller", "marcher", "tomber"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which sentence is grammatically correct in Passé Composé?",
        "choices": ["Nous sommes arrivé à temps.", "J’ai pris un taxi pour aller à la gare.", "Elle est avoir parlé avec son professeur.", "Ils avons mange une pizza."],
        "type": "MCQs",
        "correctAnswer": 2
      },
     
      {
        "question": "La semaine dernière, il ______ (visiter) un musée.",
        "choices": ["a visité","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (être) très fatigués après la randonnée.",
        "choices": ["avons été","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle ______ (prendre) le train pour Paris.",
        "choices": ["a pris","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ______ (aller) au cinéma hier soir.",
        "choices": ["sont allés","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous ______ (faire) un gâteau pour l’anniversaire.",
        "choices": ["avez fait","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ______ (lire) un livre intéressant ce week-end.",
        "choices": ["ai lu","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elles ______ (sortir) avec leurs amis samedi dernier.",
        "choices": ["sont sorties","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tu ______ (boire) du café ce matin?",
        "choices": ["as bu","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hier, nous ______ (voir) un film au cinéma.",
        "choices": ["avons vu","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il ______ (naître) en 1990.",
        "choices": ["est né","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "J'ai mangé une pomme.", "rightId": 1 },
            "right": { "word": "They finished their homework.", "rightId": 5  }
          },
          {
            "left": { "word": "Nous avons visité Paris.", "rightId": 2 },
            "right": { "word": "She took the bus.", "rightId": 4 }
          },
          {
            "left": { "word": "Il a vu un film.", "rightId": 3 },
            "right": { "word": "We visited Paris.", "rightId": 2 }
          },
          {
            "left": { "word": "Elle a pris le bus.", "rightId": 4 },
            "right": { "word": "He saw a movie.", "rightId": 3 }
          },
          {
            "left": { "word": "Ils ont fini leurs devoirs.", "rightId": 5 },
            "right": { "word": "I ate an apple.", "rightId": 1 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Tu as acheté un livre.", "rightId": 6 },
            "right": { "word": "They played football.", "rightId": 10 }
          },
          {
            "left": { "word": "Elle a fait du vélo.", "rightId": 7 },
            "right": { "word": "I went to the cinema.", "rightId": 9 }
          },
          {
            "left": { "word": "Vous avez parlé à Jean.", "rightId": 8 },
            "right": { "word": "She rode a bike.", "rightId": 7 }
          },
          {
            "left": { "word": "J'ai été au cinéma.", "rightId": 9 },
            "right": { "word": "You spoke to Jean.", "rightId": 8 }
          },
          {
            "left": { "word": "Ils ont joué au football.", "rightId": 10 },
            "right": { "word": "You bought a book.", "rightId": 6 }
          }
        ],  
      },
    ],
  },
  {
    quiz: '15',
    name: 'French Exercise - 15 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "What is the correct future form of avoir (to have) for 'ils'?",
        "choices": ["ils aurons", "ils auront", "ils auraient", "ils avoiront"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct future form of aller (to go) for 'je'?",
        "choices": ["j’allons", "j’irais", "j’irai", "j’allai"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is the correct future form of faire (to do) for 'elle'?",
        "choices": ["elle fera", "elle faire", "elle ferai", "elle fait"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the future tense form of être (to be) for 'nous'?",
        "choices": ["nous sommes", "nous serons", "nous seront", "nous être"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which verb stem is used for venir in *Futur Simple*?",
        "choices": ["viendr-", "vendr-", "ven-", "venir-"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the future form of parler (to speak) for 'tu'?",
        "choices": ["tu parlais", "tu parlera", "tu parleras", "tu parlai"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "The verb vouloir (to want) in *Futur Simple* for 'je' is:",
        "choices": ["je veux", "je voudrai", "je voudrais", "je voulerai"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the future form of finir (to finish) for 'nous'?",
        "choices": ["nous finirons", "nous finissons", "nous finirez", "nous finiront"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following verbs has an irregular stem in Futur Simple?",
        "choices": ["parler", "finir", "aller", "manger"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which sentence is correctly written in Futur Simple?",
        "choices": ["Je vais partir demain.", "Nous partirons en vacances en juillet.", "Ils partaient en voyage l’année prochaine.", "Elle est partirai demain matin."],
        "type": "MCQs",
        "correctAnswer": 2
      },
     
      {
        "question": "La semaine prochaine, nous ______ (partir) en vacances.",
        "choices": ["partirons","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Demain, elle ______ (faire) ses devoirs tôt.",
        "choices": ["fera","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ______ (acheter) une nouvelle voiture l’année prochaine.",
        "choices": ["achèterai","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ______ (être) en retard pour la réunion demain.",
        "choices": ["seront","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (déménager) à Paris dans deux ans.",
        "choices": ["déménagerons","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tu ______ (aller) à l'université après tes études?",
        "choices": ["iras","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il ______ (venir) avec nous au cinéma ce soir.",
        "choices": ["viendra","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous ______ (avoir) une réunion avec le directeur demain.",
        "choices": ["aurez","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elles ______ (finir) le projet avant la fin de la semaine.",
        "choices": ["finiront","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (recevoir) une réponse bientôt.",
        "choices": ["recevrons","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Je voyagerai demain.", "rightId": 1 },
            "right": { "word": "He will buy a new car.", "rightId": 5 }
          },
          {
            "left": { "word": "Elle ira à Paris.", "rightId": 2 },
            "right": { "word": "We will eat together.", "rightId": 4 }
          },
          {
            "left": { "word": "Ils travailleront ce week-end.", "rightId": 3 },
            "right": { "word": "She will go to Paris.", "rightId": 2 }
          },
          {
            "left": { "word": "Nous mangerons ensemble.", "rightId": 4 },
            "right": { "word": "They will work this weekend.", "rightId": 3 }
          },
          {
            "left": { "word": "Il achètera une nouvelle voiture.", "rightId": 5 },
            "right": { "word": "I will travel tomorrow.", "rightId": 1 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Tu parleras à Marie.", "rightId": 6 },
            "right": { "word": "You will do your homework later.", "rightId": 10 }
          },
          {
            "left": { "word": "Je verrai mes amis.", "rightId": 7 },
            "right": { "word": "You will talk to Marie.", "rightId": 6 }
          },
          {
            "left": { "word": "Nous visiterons nos grands-parents.", "rightId": 8 },
            "right": { "word": "I will see my friends.", "rightId": 7 }
          },
          {
            "left": { "word": "Ils iront à la plage.", "rightId": 9 },
            "right": { "word": "We will visit our grandparents.", "rightId": 8 }
          },
          {
            "left": { "word": "Vous ferez vos devoirs plus tard.", "rightId": 10 },
            "right": { "word": "They will go to the beach.", "rightId": 9 }
          }
        ],
      },
    ],
  },
  {
    quiz: '16',
    name: 'French Exercise - 16 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "What is the traditional French dessert often enjoyed during Christmas?",
        "choices": ["Tarte Tatin", "Bûche de Noël", "Crêpes Suzette", "Macarons"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which French festival celebrates music and is held every June 21?",
        "choices": ["la Chandeleur", "la Fête de la Musique", "Bastille Day", "la Toussaint"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the significance of Bastille Day in France?",
        "choices": ["End of World War II", "Beginning of the French Revolution", "French Independence", "French National Day"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the famous French cheese often associated with fondue?",
        "choices": ["Brie", "Camembert", "Emmental", "Roquefort"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which French city is known as the 'City of Lights'?",
        "choices": ["Marseille", "Lyon", "Paris", "Nice"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the traditional drink often served during French aperitif?",
        "choices": ["Café", "Vermouth", "Eau", "Thé"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which French holiday commemorates the dead?",
        "choices": ["Noël", "Pâques", "La Toussaint", "Mardi Gras"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the name of the French national anthem?",
        "choices": ["La Marseillaise", "Ode à la joie", "Fraternité", "L’hymne des enfants"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is a famous French art museum?",
        "choices": ["Musée d'Orsay", "Louvre Museum", "Centre Pompidou", "All of the above"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What traditional pastry is associated with French weddings?",
        "choices": ["Croissant", "Macaron", "Gâteau de mariage", "Éclair"],
        "type": "MCQs",
        "correctAnswer": 3
      },
     
      {
        "question": "La ______ (gastronomy) française est reconnue dans le monde entier.",
        "choices": ["gastronomie", "culture", "histoire", "langue"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (National holiday) est célébrée le 14 juillet en France.",
        "choices": ["Fête nationale", "Noël", "Pâques", "Halloween"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Claude Monet est un célèbre ______ (painter) impressionniste.",
        "choices": ["peintre", "sculpteur", "musicien", "écrivain"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Paris est connue comme la capitale de la ______ (fashion).",
        "choices": ["mode", "gastronomie", "musique", "littérature"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (Candlemas) est une fête où l'on mange des crêpes.",
        "choices": ["Chandeleur", "Bastille", "Toussaint", "Fête de la musique"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La Révolution ______ (French) a eu lieu en 1789.",
        "choices": ["française", "italienne", "espagnole", "russe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il est traditionnel de faire la bise pour ______ (greet) en France.",
        "choices": ["saluer", "manger", "danser", "chanter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (Eiffel Tower) est un symbole emblématique de Paris.",
        "choices": ["Tour Eiffel", "Cathédrale Notre-Dame", "Palais de Versailles", "Arc de Triomphe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le français est la ______ (language) officielle de la France.",
        "choices": ["langue", "culture", "monnaie", "tradition"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le ______ (Fat Tuesday) est une fête célébrée avant le Carême.",
        "choices": ["Mardi Gras", "Noël", "Fête de la musique", "Fête nationale"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "la gastronomie française", "rightId": 1 },
            "right": { "word": "Outdoor markets", "rightId": 5 }
          },
          {
            "left": { "word": "la fête nationale", "rightId": 2 },
            "right": { "word": "Nice Carnival", "rightId": 4 }
          },
          {
            "left": { "word": "le vin et le fromage", "rightId": 3 },
            "right": { "word": "French national holiday", "rightId": 2 }
          },
          {
            "left": { "word": "le Carnaval de Nice", "rightId": 4 },
            "right": { "word": "French art and literature", "rightId": 1 }
          },
          {
            "left": { "word": "les marchés en plein air", "rightId": 5 },
            "right": { "word": "French wine and cheese", "rightId": 3 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
        
          {
            "left": { "word": "la Tour Eiffel", "rightId": 6 },
            "right": { "word": "Summer festivals", "rightId": 10 }
          },
          {
            "left": { "word": "la mode française", "rightId": 7 },
            "right": { "word": "Coffee with milk", "rightId": 9 }
          },
          {
            "left": { "word": "les traditions de Noël", "rightId": 8 },
            "right": { "word": "French fashion", "rightId": 7 }
          },
          {
            "left": { "word": "le café au lait", "rightId": 9 },
            "right": { "word": "Christmas traditions", "rightId": 8 }
          },
          {
            "left": { "word": "les festivals d'été", "rightId": 10 },
            "right": { "word": "The Eiffel Tower", "rightId": 6 }
          }
        ],
      },
    ],
  },
  {
    quiz: '17',
    name: 'French Exercise - 17 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "Which form is used to talk to a friend?",
        "choices": ["vous", "tu", "Monsieur", "Madame"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "In which situation would you use 'vous'?",
        "choices": ["En parlant à un inconnu", "En parlant à un frère", "En parlant à un enfant", "En parlant à un ami proche"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which phrase is informal?",
        "choices": ["Comment allez-vous ?", "Bonjour, Monsieur.", "Comment vas-tu ?", "Je vous remercie."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which is an example of formal speech?",
        "choices": ["Salut !", "Merci, mon ami !", "Je vous en prie.", "Ça va ?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which word is used for formal language?",
        "choices": ["salut", "merci", "pardon", "s’il vous plaît"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "In what context would you use 'tu'?",
        "choices": ["Avec un professeur", "Avec un ami", "Avec un client", "Avec un collègue plus âgé"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the formal version of 'Thanks a lot'?",
        "choices": ["merci à toi", "merci, Madame", "je vous remercie", "merci bien"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'Excuse me' formally?",
        "choices": ["excuse-moi", "excusez-vous", "pardon", "excusez-moi"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "When would you use 'vous'?",
        "choices": ["En parlant à un enfant", "En parlant à un parent", "En parlant à un supérieur hiérarchique", "En parlant à un camarade de classe"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct formal phrase to conclude a letter?",
        "choices": ["Salut à toi", "Amicalement", "Cordialement", "Je vous prie d’agréer, Monsieur, l’expression de mes salutations distinguées."],
        "type": "MCQs",
        "correctAnswer": 4
      },
     
      {
        "question": "Quand je parle à un ami, je dis : “Comment ______-tu (are you going) ?”",
        "choices": ["vas","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Quand je parle à mon professeur, je dis : “Comment allez-______ (you) ?”",
        "choices": ["vous","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Avec mes parents, je dis : “Merci ______ (a lot) !”",
        "choices": ["beaucoup","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Quand je demande de l’aide à un inconnu, je dis : “Excusez-______ (me).”",
        "choices": ["moi","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je dis “Salut” à mes amis, mais je dis ______ (good morning) ” à mon patron.",
        "choices": ["Bonjour","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En parlant à un collègue âgé, je dis : “S’il ______ (you) plaît, pourriez-vous m’aider ?”",
        "choices": ["vous","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Avec un enfant, je dis : “S’il ______ (you) plaît, aide-moi.”",
        "choices": ["vous","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Lors d’une réunion formelle, je dis : “Je vous remercie pour ______ temps.”",
        "choices": ["votre","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Quand je parle à mes grands-parents, j’utilise ______ (you)” pour rester poli.",
        "choices": ["vous","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "À la fin d’un email formel, je termine par “Je vous prie d’agréer, Monsieur, l’expression de mes salutations ______.”",
        "choices": ["distinguées","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Comment allez-vous ?", "rightId": 1 },
            "right": { "word": "Merci.", "rightId": 3 }
          },
          {
            "left": { "word": "Pouvez-vous m’aider, s’il vous plaît ?", "rightId": 2 },
            "right": { "word": "Tu veux venir avec moi ?", "rightId": 4 }
          },
          {
            "left": { "word": "Je vous remercie.", "rightId": 3 },
            "right": { "word": "Tu fais quoi ce soir ?", "rightId": 5 }
          },
          {
            "left": { "word": "Voulez-vous venir avec moi ?", "rightId": 4 },
            "right": { "word": "Comment ça va ?", "rightId": 1 }
          },
          {
            "left": { "word": "Que faites-vous ce soir ?", "rightId": 5 },
            "right": { "word": "Tu peux m’aider, s’il te plaît ?", "rightId": 2 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Vous avez fini ?", "rightId": 6 },
            "right": { "word": "Je veux te poser une question.", "rightId": 10 }
          },
          {
            "left": { "word": "Je vous présente mon collègue.", "rightId": 7 },
            "right": { "word": "Désolé de te déranger.", "rightId": 8 }
          },
          {
            "left": { "word": "Excusez-moi de vous déranger.", "rightId": 8 },
            "right": { "word": "Tu peux me passer le sel ?", "rightId": 9 }
          },
          {
            "left": { "word": "Vous pourriez me passer le sel ?", "rightId": 9 },
            "right": { "word": "T’as fini ?", "rightId": 6 }
          },
          {
            "left": { "word": "Je voudrais vous poser une question.", "rightId": 10 },
            "right": { "word": "Je te présente mon ami.", "rightId": 7 }
          }
        ],
      },
    ],
  },
  {
    quiz: '18',
    name: 'French Exercise - 18 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "How do you start a phone conversation?",
        "choices": ["Oui ?", "Allô ?", "Salut ?", "Bonsoir ?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which phrase do you use to ask to speak to someone?",
        "choices": ["Puis-je parler à [nom], s’il vous plaît ?", "Comment ça va ?", "Je suis ici.", "Qu’est-ce que tu fais ?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say that you are the one calling?",
        "choices": ["Salut, comment vas-tu ?", "Je suis là.", "C’est [votre nom] à l’appareil.", "Vous avez appelé ?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What do you say when asked to wait?",
        "choices": ["Je vous passe.", "Un moment, s'il vous plaît.", "Qui est à l'appareil ?", "Comment vous appelez-vous ?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is a formal way to answer a call?",
        "choices": ["Allô, c'est moi !", "Salut !", "Oui, qui parle ?", "Bonjour, ici [nom]."],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What do you say when you need to call back later?",
        "choices": ["Je vous rappellerai plus tard.", "Je vous passe.", "Au revoir.", "Oui, qui est-ce ?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct phrase to transfer the call to someone else?",
        "choices": ["Je vous le passe.", "Je suis là.", "Je vous appelle.", "Je vous écoute."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you end a formal phone conversation?",
        "choices": ["Salut !", "À plus !", "Bonne journée !", "Qu'est-ce que tu fais ?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What do you say when you are unavailable to talk?",
        "choices": ["Je suis ici.", "Je ne suis pas disponible en ce moment.", "Qui est à l'appareil ?", "J'ai déjà parlé."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is a polite way to ask to speak to someone on the phone?",
        "choices": ["Donne-moi [nom], s'il te plaît.", "Puis-je parler à [nom], s'il vous plaît ?", "Où est [nom] ?", "Passe-moi [nom]."],
        "type": "MCQs",
        "correctAnswer": 2
      },
     
      {
        "question": "Pour dire que je vais passer l’appel, je dis : “Je vous ______ (the pass).”",
        "choices": ["le passe", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Quand je décroche le téléphone, je dis : ______ (Hello) ?”",
        "choices": ["Allô", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si je dois attendre, on me dit : “Un ______ (moment), s’il vous plaît.”",
        "choices": ["moment", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Quand je termine un appel, je dis : “Merci, ______ (has) bientôt !”",
        "choices": ["à", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si je veux rappeler plus tard, je dis : “Je vous ______ (will remind) plus tard.”",
        "choices": ["rappellerai", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pour dire que je vais transmettre l’appel, je dis : “Je vous ______ (the pass).”",
        "choices": ["le passe", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pour dire au revoir de manière formelle, je dis : “Merci beaucoup et ______ (has) bientôt !”",
        "choices": ["à", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Lors d’un appel formel, je commence par : “Bonjour, ______ (It is) Martin à l’appareil.”",
        "choices": ["c'est", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si je ne peux pas parler maintenant, je dis : “Je ne suis pas ______ (available) en ce moment.”",
        "choices": ["disponible", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pour conclure un appel formel, je dis : “Je vous souhaite une bonne ______ (daytime).”",
        "choices": ["journée", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Allô, qui est à l'appareil ?", "rightId": 1 },
            "right": { "word": "I would like to speak to [Name].", "rightId": 2 }
          },
          {
            "left": { "word": "Je voudrais parler à [Name].", "rightId": 2 },
            "right": { "word": "Sorry, he/she is not available.", "rightId": 5 }
          },
          {
            "left": { "word": "Un moment, je vous le/la passe.", "rightId": 3 },
            "right": { "word": "Is [Name] there?", "rightId": 4}
          },
          {
            "left": { "word": "Est-ce que [Name] est là ?", "rightId": 4 },
            "right": { "word": "One moment, I’ll pass you to him/her.", "rightId": 3 }
          },
          {
            "left": { "word": "Désolé(e), il/elle n'est pas disponible.", "rightId": 5 },
            "right": { "word": "Hello, who is on the phone?", "rightId": 1 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Vous pouvez laisser un message.", "rightId": 6 },
            "right": { "word": "Thank you for your call.", "rightId": 9 }
          },
          {
            "left": { "word": "Pouvez-vous rappeler plus tard ?", "rightId": 7 },
            "right": { "word": "I will call you back later.", "rightId": 8 }
          },
          {
            "left": { "word": "Je vous rappellerai plus tard.", "rightId": 8 },
            "right": { "word": "Have a nice day, goodbye!", "rightId": 10 }
          },
          {
            "left": { "word": "Merci de votre appel.", "rightId": 9 },
            "right": { "word": "You can leave a message.", "rightId": 6 }
          },
          {
            "left": { "word": "Bonne journée, au revoir !", "rightId": 10 },
            "right": { "word": "Can you call back later?", "rightId": 7 }
          }
        ],
      },
    ],
  },
  {
    quiz: '19',
    name: 'French Exercise - 19 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      {
        "question": "What is the correct way to start a formal letter in French?",
        "choices": ["Salut,", "Chère amie,", "Madame, Monsieur,", "Bonjour,"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you formally request information in an email?",
        "choices": ["Fais-moi savoir", "Je veux des informations", "Je vous saurais gré de bien vouloir me fournir...", "Dis-moi ce que je dois faire"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which phrase is commonly used at the end of a formal letter?",
        "choices": ["À plus tard", "Veuillez agréer l’expression de mes salutations distinguées", "Je t’embrasse", "Merci pour tout"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French word for 'subject' in a formal email?",
        "choices": ["objet", "thème", "sujet", "mot"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is used to close a formal email?",
        "choices": ["cordialement", "bisous", "salut", "á la prochaine"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which verb is most appropriate to use in a formal letter when making a polite request?",
        "choices": ["veuillez", "vouloir", "avoir", "étre"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you formally ask for someone’s understanding in a letter?",
        "choices": ["Je vous remercie pour votre aide", "Merci d’avance pour votre réponse", "Je vous saurais gré de votre compréhension", "À bientôt"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which phrase would you use to express gratitude in a formal email?",
        "choices": ["Je suis content", "Merci beaucoup", "Je vous remercie d’avance", "C’est gentil"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the appropriate phrase to use when sending an attachment in a formal email?",
        "choices": ["Veuillez trouver ci-joint", "Je mets ça ici", "Regarde ça", "Voici le document"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which closing statement is the most formal for a letter in French?",
        "choices": ["À plus", "Salut", "Bien à vous", "Veuillez agréer, Madame/Monsieur, mes salutations distinguées"],
        "type": "MCQs",
        "correctAnswer": 4
      },
     
      {
        "question": "Je vous ______ (pray) de bien vouloir examiner ma demande.",
        "choices": ["prie", "demande", "conseille", "permets"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Veuillez agréer, Madame, l'expression de mes salutations ______ (distinguished).",
        "choices": ["distinguées", "sincères", "respectueuses", "amicales"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vous écris ______ (in order to) de solliciter un entretien.",
        "choices": ["afin", "pour", "après", "avant"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous vous remercions par avance pour votre ______ (answer) rapide.",
        "choices": ["réponse", "demande", "acceptation", "question"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "J'aimerais obtenir des renseignements au ______ (subject) de votre offre d'emploi.",
        "choices": ["sujet", "sous", "au-dessus de", "vers"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Looking forward to) ______ de votre réponse, je vous prie d'agréer, Monsieur, mes salutations distinguées.",
        "choices": ["Dans l'attente de", "Après", "Avec", "Suivant"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le sujet de l'email doit être ______ (accurate) et clair.",
        "choices": ["précis", "long", "large", "vague"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vous ______ (thanks) d'avance pour l'attention que vous porterez à cette demande.",
        "choices": ["remercie", "écris", "excuse", "répare"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je me permets de vous ______ (to write) pour obtenir des informations.",
        "choices": ["écrire", "parler", "consulter", "entendre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vous serais reconnaissant(e) de bien vouloir me ______ (provide) des renseignements supplémentaires.",
        "choices": ["fournir", "donner", "envoyer", "offrir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Cher Monsieur,", "rightId": 1 },
            "right": { "word": "Dear Madam,", "rightId": 2 }
          },
          {
            "left": { "word": "Cher Madame,", "rightId": 2 },
            "right": { "word": "Thank you for...", "rightId": 5 }
          },
          {
            "left": { "word": "Je vous écris pour...", "rightId": 3 },
            "right": { "word": "In response to your letter,", "rightId": 4 }
          },
          {
            "left": { "word": "En réponse à votre lettre,", "rightId": 4 },
            "right": { "word": "Hello, who is calling?", "rightId": 1 }
          },
          {
            "left": { "word": "Je vous remercie de...", "rightId": 5 },
            "right": { "word": "I am writing to you for...", "rightId": 3 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Je suis heureux(se) de...", "rightId": 6 },
            "right": { "word": "Looking forward to your reply,", "rightId": 8 }
          },
          {
            "left": { "word": "Veuillez trouver ci-joint...", "rightId": 7 },
            "right": { "word": "Best regards,", "rightId": 9 }
          },
          {
            "left": { "word": "Dans l'attente de votre réponse,", "rightId": 8 },
            "right": { "word": "Sincere greetings,", "rightId": 10 }
          },
          {
            "left": { "word": "Cordialement,", "rightId": 9 },
            "right": { "word": "I am pleased to...", "rightId": 6 }
          },
          {
            "left": { "word": "Sincères salutations,", "rightId": 10 },
            "right": { "word": "Please find attached...", "rightId": 7 }
          }
        ],
      },
    ],
  },
  {
    quiz: '20',
    name: 'French Exercise - 1 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "Which reflexive pronoun is appropriate for 'I'?",
        "choices": ["me", "te", "nous", "se"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 's’habiller' mean?",
        "choices": ["to brush", "to go to bed", "to get dressed", "to hurry"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'They wash themselves' in French?",
        "choices": ["Ils lavent.", "Ils se lavent.", "Ils lavent eux-mêmes.", "Ils se laver."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Complete: \"Nous __________ à huit heures.\"",
        "choices": ["se réveillent", "me réveille", "se réveille", "nous réveillons"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which verb means 'to go to bed'?",
        "choices": ["se lever", "se coucher", "se brosser", "se dépêcher"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you translate 'I rest' into French?",
        "choices": ["Je me repose", "Je se repose", "Nous nous reposons", "Je me lève"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which reflexive pronoun is appropriate for 'they'?",
        "choices": ["se", "te", "nous", "vous"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'You (informal) brush your teeth' in French?",
        "choices": ["Tu te brosses les dents.", "Vous vous brossez les dents.", "Il se brosse les dents.", "Nous nous brossons les dents."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Complete: \"Elle __________ avant de sortir.\" (se maquiller)",
        "choices": ["se maquille", "se maquilles", "me maquille", "nous maquille"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the translation of 'They hurry'?",
        "choices": ["Ils se reposent.", "Ils se dépêchent.", "Ils se lèvent.", "Ils se couchent."],
        "type": "MCQs",
        "correctAnswer": 2
      },

          {
            question: "Je ______ (se réveiller) à six heures chaque matin.",
            choices: ["me réveille", "mange", "a", "Mon"],
            type: 'FillInTheBlanks',
            correctAnswer: 1
          },
          {
            question: "Elle ______ (se laver) le visage avant de manger.",
            choices: ["se lave", "a", "mange", "vont"],
            type: 'FillInTheBlanks',
            correctAnswer: 1
          },
          {
            question: "Nous ______ (s'habiller) pour aller à l'école.",
            choices: ["habillons", "faisons", "allons", "avons"],
            type: 'FillInTheBlanks',
            correctAnswer: 1
          },
          {
            question: "Vous ______ (se reposer) après le travail.",
            choices: ["reposez", "mangent", "lisent", "sont"],
            type: 'FillInTheBlanks',
            correctAnswer: 1
          },
          {
            question: "Ils ______ (se coucher) tard le soir.",
            choices: ["se couchent", "fait", "mange", "vont"],
            type: 'FillInTheBlanks',
            correctAnswer: 1
          },
          {
            question: "Tu ______ (se brosser) les dents après le repas.",
            choices: ["te brosses", "est", "mange", "a"],
            type:'FillInTheBlanks',
            correctAnswer: 1
          },
          {
            question: "Elles ______ (se maquiller) pour la fête.",
            choices: ["se maquillent", "faites", "lisez", "mangez"],
            type: 'FillInTheBlanks',
            correctAnswer: 1
          },
          {
              question: "Nous ______ (se préparer) pour le dîner de famille.",
              choices: ["préparons", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Je ______ (se dépêcher) pour arriver à l’heure.",
              choices: ["me dépêche", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Il ______ (se lever) à sept heures le week-end.",
              choices: ["se lève", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Je me lève tôt.", "rightId": 1 },
            "right": { "word": "He wakes up at six o'clock.", "rightId": 4 }
          },
          {
            "left": { "word": "Elle se brosse les dents.", "rightId": 2 },
            "right": { "word": "You take a shower in the morning.", "rightId": 5 }
          },
          {
            "left": { "word": "Nous nous habillons.", "rightId": 3 },
            "right": { "word": "I wake up early.", "rightId": 1 }
          },
          {
            "left": { "word": "Il se réveille à six heures.", "rightId": 4 },
            "right": { "word": "She brushes her teeth.", "rightId": 2 }
          },
          {
            "left": { "word": "Tu te douches le matin.", "rightId": 5 },
            "right": { "word": "We get dressed.", "rightId": 3 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Ils s'endorment rapidement.", "rightId": 6 },
            "right": { "word": "They brush their hair.", "rightId": 10 }
          },
          {
            "left": { "word": "Je me regarde dans le miroir.", "rightId": 7 },
            "right": { "word": "She puts on makeup before going out.", "rightId": 8 }
          },
          {
            "left": { "word": "Elle se maquille avant de sortir.", "rightId": 8 },
            "right": { "word": "We rest after school.", "rightId": 9 }
          },
          {
            "left": { "word": "Nous nous reposons après l'école.", "rightId": 9 },
            "right": { "word": "They fall asleep quickly.", "rightId": 6 }
          },
          {
            "left": { "word": "Ils se peignent les cheveux.", "rightId": 10 },
            "right": { "word": "I look at myself in the mirror.", "rightId": 7 }
          }
        ],
      },
    ],
  },
  {
    quiz: '21',
    name: 'French Exercise - 2 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "What is the comparative adjective of \"bon\"?",
        "choices": ["meilleur", "plus bon", "plus mauvais", "bon plus"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the superlative adjective of \"beau\"?",
        "choices": ["le plus beau", "le plus belle", "le mieux beau", "le beau"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "\"Paris is __________ than Mumbai.\"",
        "choices": ["plus beau", "plus belle", "plus grands", "plus grand"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which sentence is correct?",
        "choices": ["Il est moins intelligent que moi.", "Il est plus intelligent que moi.", "Il est le plus intelligent que moi.", "Il est le moins intelligent que moi."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which adjective corresponds to the comparative of \"petit\"?",
        "choices": ["moins petit", "le plus petit", "le moins petit", "petit plus"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the superlative of \"mauvais\"?",
        "choices": ["le moins mauvais", "le plus mauvais", "le pire", "plus mauvais"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "\"This dress is __________ than the other.\"",
        "choices": ["plus beau", "plus belle", "plus grand", "plus vieille"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the comparative form of \"facile\"?",
        "choices": ["moins facile", "plus facile", "le plus facile", "facile plus"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "\"He is __________ of all my friends.\"",
        "choices": ["le plus intelligent", "plus intelligent", "moins intelligent", "intelligent plus"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following adjectives can be used as a superlative?",
        "choices": ["moins bon", "le meilleur", "bon plus", "plus meilleur"],
        "type": "MCQs",
        "correctAnswer": 2
      },

      {
        "question": "Mon frère est ______ (plus/moins) grand que moi.",
        "choices": ["plus", "moins","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ce film est ______ (meilleur/pire) que le dernier.",
        "choices": ["meilleur", "pire","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle est ______ (plus/moins) gentille que sa sœur.",
        "choices": ["plus", "moins","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ce gâteau est ______ (le meilleur/le pire) que j'ai mangé.",
        "choices": ["le meilleur", "le pire","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ce livre est ______ (plus/moins) intéressant que le film.",
        "choices": ["plus", "moins","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le Taj Mahal est ______ (plus/moins) beau que la Tour Eiffel.",
        "choices": ["plus", "moins","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "L’hiver à Delhi est ______ (plus/moins) froid que l'hiver à Paris.",
        "choices": ["moins", "plus",,"1","2" ],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il est ______ (le plus/moins) rapide de tous les coureurs.",
        "choices": ["le plus", "moins","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Cette robe est ______ (plus/moins) chère que celle-là.",
        "choices": ["plus", "moins","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La France est ______ (plus/moins) grande que l’Inde en termes de population.",
        "choices": ["moins", "plus","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Elle est plus grande.", "rightId": 1 },
            "right": { "word": "He is smaller.", "rightId": 2 }
          },
          {
            "left": { "word": "Il est moins grand.", "rightId": 2 },
            "right": { "word": "He is as strong.", "rightId": 5 }
          },
          {
            "left": { "word": "C’est le plus rapide.", "rightId": 3 },
            "right": { "word": "She is slower.", "rightId": 4 }
          },
          {
            "left": { "word": "Elle est moins rapide.", "rightId": 4 },
            "right": { "word": "It’s the fastest.", "rightId": 3 }
          },
          {
            "left": { "word": "Il est aussi fort.", "rightId": 5 },
            "right": { "word": "She is bigger.", "rightId": 1 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
        
          {
            "left": { "word": "Elle est la meilleure.", "rightId": 6 },
            "right": { "word": "He is the least noisy.", "rightId": 7 }
          },
          {
            "left": { "word": "Il est le moins bruyant.", "rightId": 7 },
            "right": { "word": "She is as kind.", "rightId": 8 }
          },
          {
            "left": { "word": "Elle est aussi gentille.", "rightId": 8 },
            "right": { "word": "It’s the most beautiful.", "rightId": 9 }
          },
          {
            "left": { "word": "C’est le plus beau.", "rightId": 9 },
            "right": { "word": "She is less kind.", "rightId": 10 }
          },
          {
            "left": { "word": "Elle est moins gentille.", "rightId": 10 },
            "right": { "word": "She is the best.", "rightId": 6 }
          }
        ],
      },
    ],
  },
  {
    quiz: '22',
    name: 'French Exercise - 3 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "How do you express a hypothetical situation with the conditional?",
        "choices": [
          "with 'si + present'",
          "with 'si + imperfect'",
          "with 'si + conditional'",
          "with 'si + future'"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which phrase is correct for making a polite request?",
        "choices": [
          "I want help.",
          "You must help me.",
          "Could you help me?",
          "Help me, please."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "If I ______ earlier, I would have caught the train.",
        "choices": [
          "had left",
          "will leave",
          "would have left",
          "had been leaving"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct verb form for the sentence: 'If you ______ a bit more, you would succeed.'",
        "choices": [
          "studied",
          "will study",
          "study",
          "would study"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "When is the conditional used?",
        "choices": [
          "to talk about real facts",
          "for wishes and hypotheses",
          "to express past actions",
          "to describe ongoing actions"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which phrase is correct?",
        "choices": [
          "If I would have the money, I would help you.",
          "If I had the money, I would help you.",
          "If I have the money, I would help you.",
          "If I have the money, I will help you."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "I ______ like to meet you.",
        "choices": [
          "like",
          "would like",
          "likes",
          "would likes"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "If you ______ more time, you would travel more.",
        "choices": [
          "had",
          "have",
          "would have",
          "would had"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you express a polite suggestion in French?",
        "choices": [
          "I can do that.",
          "I should do that.",
          "I would like to do that.",
          "I will do that."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "If you were more patient, you would understand the situation better.",
        "choices": [
          "are",
          "would be",
          "are",
          "were"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },

      {
        "question": "Si j'avais de l'argent, je ______ (would buy) une voiture neuve.",
        "choices": ["achèterais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si tu étais plus gentil, il ______ (would love you).",
        "choices": ["t'aimerait"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si nous avions plus de temps, nous ______ (would visit) plus de musées.",
        "choices": ["visiterions"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous ______ (could) m’aider, s’il vous plaît ?",
        "choices": ["pourriez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si je savais parler français, je ______ (would work) en France.",
        "choices": ["travaillerais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si elle ______ (was) ici, elle t’aurait aidé.",
        "choices": ["était"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (would like) aller au cinéma ce soir.",
        "choices": ["aimerions"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si tu ______ (had) le temps, tu pourrais m’accompagner.",
        "choices": ["avais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "J'______ (would be) heureux si tu acceptais mon invitation.",
        "choices": ["serais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si je ______ (could), je t'emmènerais en vacances.",
        "choices": ["pouvais"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Je voudrais un café.", "rightId": 1 },
            "right": { "word": "We could go to the cinema.", "rightId": 3 }
          },
          {
            "left": { "word": "Il aimerait venir.", "rightId": 2 },
            "right": { "word": "She would like to visit France.", "rightId": 5 }
          },
          {
            "left": { "word": "Nous pourrions aller au cinéma.", "rightId": 3 },
            "right": { "word": "Would you like an ice cream?", "rightId": 4 }
          },
          {
            "left": { "word": "Tu voudrais une glace ?", "rightId": 4 },
            "right": { "word": "He would like to come.", "rightId": 2 }
          },
          {
            "left": { "word": "Elle aimerait visiter la France.", "rightId": 5 },
            "right": { "word": "I would like a coffee.", "rightId": 1 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "J’achèterais une voiture.", "rightId": 6 },
            "right": { "word": "He would eat less sugar.", "rightId": 10 }
          },
          {
            "left": { "word": "Ils voudraient partir tôt.", "rightId": 7 },
            "right": { "word": "We could try again.", "rightId": 8 }
          },
          {
            "left": { "word": "On pourrait essayer encore.", "rightId": 8 },
            "right": { "word": "Could you help me?", "rightId": 9 }
          },
          {
            "left": { "word": "Pourriez-vous m'aider ?", "rightId": 9 },
            "right": { "word": "They would like to leave early.", "rightId": 7 }
          },
          {
            "left": { "word": "Il mangerait moins de sucre.", "rightId": 10 },
            "right": { "word": "I would buy a car.", "rightId": 6 }
          }
        ],
      },
    ],
  },
  {
    quiz: '23',
    name: 'French Exercise - 4 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "How do you express the opinion: “I am sure”?",
        "choices": ["Je suis d'accord", "Je suis sûr(e)", "Je pense", "Je doute"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which word introduces a hypothesis?",
        "choices": ["parce que", "quand", "si", "donc"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Complete: \"It is likely that we __________ a movie together.\"",
        "choices": ["voyons", "verrons", "avons vu", "voyions"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the best response to express partial agreement?",
        "choices": ["Je suis totalement d'accord", "Je ne suis pas d'accord", "Je suis d'accord mais...", "Peut-être que non"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does “À mon avis” mean?",
        "choices": ["In my opinion", "I doubt", "I am not sure", "I am convinced"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "If I had known, __________.",
        "choices": ["je viens", "je viendrai", "je serais venu", "je venais"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Complete the sentence: \"I think this proposal is __________.\"",
        "choices": ["inutile", "probablement", "incertain", "d'accord"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you express doubt in French?",
        "choices": ["Je suis convaincu", "Peut-être que oui", "Sans aucun doute", "Je suis sûr"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which response expresses a hypothetical condition?",
        "choices": ["quand il pleut", "si je pouvais", "depuis que", "car je pense"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Je ne suis pas d'accord\" mean?",
        "choices": ["I don't know", "I agree", "I don't agree", "I am not sure"],
        "type": "MCQs",
        "correctAnswer": 3
      },

      {
        "question": "Je pense que ______ (c'est / il est / il y a) très important d'apprendre une langue étrangère.",
        "choices": ["c'est", "il est", "il y a","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si j'avais plus de temps, ______ (je visiterais / je visitais / je visiterai) Paris.",
        "choices": ["je visiterais", "je visitais", "je visiterai","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pour moi, ______ (la musique / le sport / la lecture) est le meilleur moyen de se détendre.",
        "choices": ["la musique", "le sport", "la lecture","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ne suis pas d'accord parce que ______ (cela / celui / ces) n'a aucun sens.",
        "choices": ["cela", "celui", "ces","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si tu pouvais choisir, ______ (quelle / quel / qui) destination choisirais-tu ?",
        "choices": ["quelle", "quel", "qui","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je trouve que cette idée ______ (est / sont / êtes) très intéressante.",
        "choices": ["est", "sont", "êtes","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "On dirait que ______ (le film / les films / la film) est très populaire en France.",
        "choices": ["le film", "les films", "la film","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Selon moi, ______ (il faudrait / il faut / il fera) plus d'espaces verts dans les villes.",
        "choices": ["il faudrait", "il faut", "il fera","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Peut-être / Surtout / Toujours) ______ que je changerai d'avis après notre débat.",
        "choices": ["Peut-être", "Surtout", "Toujours","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si j'avais été toi, ______ (je n'aurais pas / je n'avais pas / je n'aie pas) dit ça.",
        "choices": ["je n'aurais pas", "je n'avais pas", "je n'aie pas","1"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "À mon avis", "rightId": 1 },
            "right": { "word": "It is possible that", "rightId": 5 }
          },
          {
            "left": { "word": "Je suis convaincu que", "rightId": 2 },
            "right": { "word": "I disagree", "rightId": 4 }
          },
          {
            "left": { "word": "Peut-être que", "rightId": 3 },
            "right": { "word": "In my opinion", "rightId": 1 }
          },
          {
            "left": { "word": "Je ne suis pas d'accord", "rightId": 4 },
            "right": { "word": "I am convinced that", "rightId": 2 }
          },
          {
            "left": { "word": "Il est possible que", "rightId": 5 },
            "right": { "word": "Maybe", "rightId": 3 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Selon moi", "rightId": 6 },
            "right": { "word": "I think", "rightId": 7 }
          }, 
          {
            "left": { "word": "Je pense que", "rightId": 7 },
            "right": { "word": "I believe that", "rightId": 10 }
          },
          {
            "left": { "word": "Sans aucun doute", "rightId": 8 },
            "right": { "word": "In my opinion", "rightId": 6 }
          },
          {
            "left": { "word": "J'imagine que", "rightId": 9 },
            "right": { "word": "Without a doubt", "rightId": 8 }
          },
          {
            "left": { "word": "Je crois que", "rightId": 10 },
            "right": { "word": "I imagine that", "rightId": 9 }
          }
        ],
      },
    ],
  },
  {
    quiz: '24',
    name: 'French Exercise - 5 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "What is the correct conjugation for ils in the verb avoir?",
        "choices": ["as", "avons", "ont", "avez"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say I am happy (masculine speaker) in French?",
        "choices": ["Je suis heureux", "Je suis heureuse", "Je suis contentes", "Je suis heureusement"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which preposition means 'in'?",
        "choices": ["à", "chez", "en", "de"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the plural form of un enfant?",
        "choices": ["des enfants", "les enfant", "des enfant", "les enfants"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Translate: We are going to the cinema.",
        "choices": ["Nous allons à la cinéma.", "Nous allons au cinéma.", "Nous allez à la cinéma.", "Nous allons dans le cinéma."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the French word for a book?",
        "choices": ["une livre", "un livre", "un librairie", "une bibliothèque"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which is the correct translation for She is old?",
        "choices": ["Elle est vieux", "Elle est vieille", "Elle est vieilles", "Elle est viel"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Translate: Turn right at the corner of the street.",
        "choices": ["Tournez à gauche au coin de la rue.", "Continuez tout droit au coin de la rue.", "Tournez à droite au coin de la rue.", "Tournez à droite à la station."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct possessive adjective for your (formal, singular)?",
        "choices": ["ton", "votre", "vos", "sa"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which phrase means I go to school by bus?",
        "choices": ["Je vais à l'école en voiture.", "Je vais à l'école en métro.", "Je vais à l'école en bus.", "Je vais à l'école en avion."],
        "type": "MCQs",
        "correctAnswer": 3
      },


      {
        "question": "Il ______ (to have) deux frères et une sœur.",
        "choices": ["a", "ont", "avons", "avez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (are) très heureux aujourd’hui.",
        "choices": ["sommes", "êtes", "sont", "est"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vais ______ (at) marché demain.",
        "choices": ["au", "à", "le", "un"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Marie parle avec ______ (her) amie.",
        "choices": ["son", "sa", "leur", "ses"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Les enfants ______ (are going) à l'école en bus.",
        "choices": ["vont", "va", "allons", "allez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "C'est une ______ (old) maison.",
        "choices": ["vieille", "vieux", "vieil", "ancien"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous prenez ______ (the) train ou le bus ?",
        "choices": ["le", "un", "du", "au"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ______ (do) du sport le week-end.",
        "choices": ["fais", "fait", "faisons", "font"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils habitent ______ (in) France.",
        "choices": ["en", "dans", "à", "chez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Où est ______ (the) livre que tu as acheté ?",
        "choices": ["le", "un", "du", "mon"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "où est", "rightId": 1 },
            "right": { "word": "straight ahead", "rightId": 5 }
          },
          {
            "left": { "word": "nous sommes", "rightId": 2 },
            "right": { "word": "a car", "rightId": 4 }
          },
          {
            "left": { "word": "je prends", "rightId": 3 },
            "right": { "word": "where is", "rightId": 1 }
          },
          {
            "left": { "word": "une voiture", "rightId": 4 },
            "right": { "word": "we are", "rightId": 2 }
          },
          {
            "left": { "word": "continuez tout droit", "rightId": 5 },
            "right": { "word": "to take", "rightId": 3 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "un avion", "rightId": 6 },
            "right": { "word": "a train station", "rightId": 8 }
          },
          {
            "left": { "word": "tournez à gauche", "rightId": 7 },
            "right": { "word": "you go", "rightId": 10 }
          },
          {
            "left": { "word": "une gare", "rightId": 8 },
            "right": { "word": "an airplane", "rightId": 6 }
          },
          {
            "left": { "word": "elle a", "rightId": 9 },
            "right": { "word": "turn left", "rightId": 7 }
          },
          {
            "left": { "word": "vous allez", "rightId": 10 },
            "right": { "word": "she has", "rightId": 9 }
          }
        ],
      },
    ],
  },
  {
    quiz: '25',
    name: 'French Exercise - 6 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "What is the French word for *train station*?",
        "choices": ["un avion", "une gare", "un train", "une voiture"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say *I am going to travel by car*?",
        "choices": ["Je vais voyager en voiture.", "Je voyage en voiture.", "Je vais prendre une voiture.", "Je vais aller à voiture."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the conjugation of *aller* for \"they\" (Ils/Elles)?",
        "choices": ["allons", "va", "vont", "allez"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does *un billet* mean?",
        "choices": ["a reservation", "a ticket", "a trip", "a boat"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Translate: *We are going to take the subway tomorrow.*",
        "choices": ["Nous allons prendre le métro demain.", "Nous allons prendre le train demain.", "Nous allons prendre un avion demain.", "Nous allons visiter le métro demain."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of these means *a boat*?",
        "choices": ["une voiture", "un bateau", "une bicyclette", "un train"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Translate: *She is going to buy a train ticket.*",
        "choices": ["Elle va acheter une voiture.", "Elle va acheter un billet de train.", "Elle va réserver un billet de train.", "Elle va voyager en train."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say *departure* in French?",
        "choices": ["l'arrivée", "le voyage", "le départ", "la destination"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of these sentences is in the future proche?",
        "choices": ["Je prends un avion.", "Je vais prendre un avion.", "J'ai pris un avion.", "Je prenais un avion."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct French sentence for *They are going to visit a museum*?",
        "choices": ["Ils vont visiter un musée.", "Ils visitent un musée.", "Ils vont visiter une gare.", "Ils visitent un avion."],
        "type": "MCQs",
        "correctAnswer": 1
      },


      {
        "question": "Nous allons ______ (to take) un avion pour aller à Paris.",
        "choices": ["prendre","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle va ______ (to buy) un billet à la gare.",
        "choices": ["acheter","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vais ______ (to travel) en train la semaine prochaine.",
        "choices": ["voyager","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils vont ______ (to explore) les plages pendant leurs vacances.",
        "choices": ["explorer","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tu vas ______ (to take) une bicyclette pour aller au parc.",
        "choices": ["prendre","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous allez ______ (to do) une réservation d'hôtel pour le voyage.",
        "choices": ["faire","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il va ______ (to visit) le musée après le déjeuner.",
        "choices": ["visiter","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous allons ______ (to leave) tôt pour éviter la circulation.",
        "choices": ["partir","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Marie et Rohan vont ______ (to book) des places dans le TGV.",
        "choices": ["réserver","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je vais ______ (to go) à l'aéroport en taxi.",
        "choices": ["aller","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "un train", "rightId": 1 },
            "right": { "word": "a boat", "rightId": 5 }
          },
          {
            "left": { "word": "une gare", "rightId": 2 },
            "right": { "word": "a train", "rightId": 1 }
          },
          {
            "left": { "word": "un avion", "rightId": 3 },
            "right": { "word": "a car", "rightId": 4 }
          },
          {
            "left": { "word": "une voiture", "rightId": 4 },
            "right": { "word": "an airplane", "rightId": 3 }
          },
          {
            "left": { "word": "un bateau", "rightId": 5 },
            "right": { "word": "a train station", "rightId": 2 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "un voyage", "rightId": 6 },
            "right": { "word": "a reservation", "rightId": 7 }
          },
          {
            "left": { "word": "une réservation", "rightId": 7 },
            "right": { "word": "a subway", "rightId": 8 }
          },
          {
            "left": { "word": "un métro", "rightId": 8 },
            "right": { "word": "a trip", "rightId": 6 }
          },
          {
            "left": { "word": "un billet", "rightId": 9 },
            "right": { "word": "a destination", "rightId": 10 }
          },
          {
            "left": { "word": "une destination", "rightId": 10 },
            "right": { "word": "a ticket", "rightId": 9 }
          }
        ],
      },
    ],
  },
  {
    quiz: '26',
    name: 'French Exercise - 7 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "What is the French word for 'dress'?",
        "choices": ["une chemise", "une jupe", "une robe", "un manteau"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'Where is the fitting room?' in French?",
        "choices": [
          "Combien ça coûte ?",
          "C’est trop cher.",
          "Où est la cabine ?",
          "Avez-vous des chaussures ?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'en solde' mean?",
        "choices": ["expensive", "stylish", "on sale", "out of stock"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which adjective correctly matches 'un chapeau'?",
        "choices": ["noir", "noire", "noires", "noirs"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Choose the correct feminine singular form of 'petit' (small):",
        "choices": ["petite", "petits", "petit", "petites"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which is the plural form of 'une robe verte'?",
        "choices": ["unes robes vertes", "des robes verts", "des robes vertes", "des robe verte"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Sophie porte une ______ jupe (beautiful).",
        "choices": ["beau", "bel", "belle", "belles"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'combien ça coûte ?' mean?",
        "choices": ["Where is it?", "Is it on sale?", "How much does it cost?", "Do you have it in stock?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Paris Fashion Week focuses on ______.",
        "choices": [
          "only street style",
          "haute couture and prêt-à-porter",
          "ready-to-eat food festivals",
          "traditional clothing"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these adjectives has an irregular agreement?",
        "choices": ["noir", "beau", "rouge", "grand"],
        "type": "MCQs",
        "correctAnswer": 2
      },


      {
        "question": "Je voudrais acheter ______ (une/un) chemise verte.",
        "choices": ["une", "un","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Combien ______ (coûte/coûtent) ces chaussures en solde ?",
        "choices": ["coûtent", "coûte","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ce manteau est ______ (neuf/neuve) et très confortable.",
        "choices": ["neuf", "neuve","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sophie a essayé une jupe ______ (joli/jolie) pour la fête.",
        "choices": ["jolie", "joli","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Avez-vous ______ (des/les) pantalons noirs dans cette boutique ?",
        "choices": ["des", "les","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ces robes sont très ______ (élégant/élégantes).",
        "choices": ["élégantes", "élégant","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Où est ______ (la/le) cabine d’essayage, s’il vous plaît ?",
        "choices": ["la", "le","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ce vieux costume est trop ______ (petit/petite) pour moi.",
        "choices": ["petit", "petite","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elles portent des chaussures ______ (rouge/rouges) en soirée.",
        "choices": ["rouges", "rouge","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il a acheté un pull ______ (chaud/chauds) pour l’hiver.",
        "choices": ["chaud", "chauds","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "une robe", "rightId": 1 },
            "right": { "word": "a Coat", "rightId": 5 }
          },
          {
            "left": { "word": "un pantalon", "rightId": 2 },
            "right": { "word": "shoes", "rightId": 3 }
          },
          {
            "left": { "word": "des chaussures", "rightId": 3 },
            "right": { "word": "a dress", "rightId": 1 }
          },
          {
            "left": { "word": "un chapeau", "rightId": 4 },
            "right": { "word": "pants", "rightId":2 }
          },
          {
            "left": { "word": "un manteau", "rightId": 5 },
            "right": { "word": "a hat", "rightId": 4 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Où est la cabine ?", "rightId": 6 },
            "right": { "word": "on sale", "rightId": 8 }
          },
          {
            "left": { "word": "C’est trop cher.", "rightId": 7 },
            "right": { "word": "This sweater is beautiful.", "rightId": 9 }
          },
          {
            "left": { "word": "en solde", "rightId": 8 },
            "right": { "word": "Do you have shoes?", "rightId": 10 }
          },
          {
            "left": { "word": "Ce pull est beau.", "rightId": 9 },
            "right": { "word": "Where is the cabin?", "rightId": 6 }
          },
          {
            "left": { "word": "Avez-vous des chaussures ?", "rightId": 10 },
            "right": { "word": "It's too expensive.", "rightId": 7 }
          }
        ],
      },
    ],
  },
  {
    quiz: '27',
    name: 'French Exercise - 8 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "What is the French phrase for 'to travel'?",
        "choices": ["lire des livres", "voyager", "faire du sport", "regarder des films"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'I like to read books' in French?",
        "choices": ["J’aime voyager.", "J’aime faire du sport.", "J’aime lire des livres.", "J’aime regarder des films."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'faire du sport' mean?",
        "choices": ["to play sports", "to listen to music", "to read books", "to watch movies"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Choose the correct translation: 'He listens to music.'",
        "choices": ["Il écoute de la musique.", "Il écoute des films.", "Il joue de la musique.", "Il vend de la musique."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the French for 'to watch movies'?",
        "choices": ["regarder des films", "jouer des films", "écouter des films", "finir des films"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Choose the correct conjugation of 'vendre' for 'nous':",
        "choices": ["vend", "vendons", "vendent", "vendez"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Select the correct -ir verb conjugation: 'Ils ______ (choisir) un film intéressant.'",
        "choices": ["choisissent", "choisir", "choisit", "choisissez"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of these is a correct sentence?",
        "choices": ["Tu finis tes devoirs tôt le matin.", "Tu finit tes devoirs tôt le matin.", "Tu finis tes devoir tôt le matin.", "Tu finissez tes devoirs tôt le matin."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the plural form of 'Elle répond à l’e-mail'?",
        "choices": ["Elles répondent à l’e-mail.", "Elles répondons à l’e-mail.", "Elles répond à l’e-mail.", "Elles répondes à l’e-mail."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct conjugation of 'perdre' for 'vous'?",
        "choices": ["perds", "perd", "perdons", "perdez"],
        "type": "MCQs",
        "correctAnswer": 4
      },


      {
        "question": "Je ______ (chosen) un nouveau passe-temps pendant mes vacances.",
        "choices": ["choisis", "choisit", "choisissent", "choisissons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ______ (sell) des objets faits à la main au marché.",
        "choices": ["vendent", "vendons", "vendez", "vend"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (let's finish) nos devoirs avant de jouer au football.",
        "choices": ["finissons", "finissez", "finissent", "finir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle ______ (wait) ses amis pour aller au cinéma.",
        "choices": ["attend", "attendent", "attendez", "attendons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous ______ (succeed) souvent à vos examens grâce à votre travail acharné.",
        "choices": ["réussissez", "réussis", "réussit", "réussissons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il ______ (hear) une chanson qui lui rappelle son enfance.",
        "choices": ["entend", "entends", "entendent", "entendez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tu ______ (lose) toujours ton sac à dos à l'école !",
        "choices": ["perds", "perdent", "perdons", "perdez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elles ______ (blush) quand elles parlent devant un grand public.",
        "choices": ["rougissent", "rougis", "rougit", "rougissons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ______ (answer) toujours à mes e-mails tôt le matin.",
        "choices": ["réponds", "répond", "répondent", "répondez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (let's think) à nos prochaines vacances d'été.",
        "choices": ["réfléchissons", "réfléchis", "réfléchissent", "réfléchissez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "un train", "rightId": 1 },
            "right": { "word": "to travel", "rightId": 4 }
          },
          {
            "left": { "word": "faire du sport", "rightId": 2 },
            "right": { "word": "a train", "rightId": 1 }
          },   
          {
            "left": { "word": "regarder des films", "rightId": 3 },
            "right": { "word": "listen to music", "rightId": 5 }
          },
          {
            "left": { "word": "voyager", "rightId": 4 },
            "right": { "word": "do sports", "rightId":2 }
          },
          {
            "left": { "word": "écouter de la musique", "rightId": 5 },
            "right": { "word": "watch movies", "rightId": 3 }
          },
          ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "J’aime écouter de la musique.", "rightId": 6 },
            "right": { "word": "She sells cakes.", "rightId": 8 }
          },
          {
            "left": { "word": "Nous finissons nos devoirs.", "rightId": 7 },
            "right": { "word": "He is waiting for his brother.", "rightId": 9 }
          },
          {
            "left": { "word": "Elle vend des gâteaux.", "rightId": 8 },
            "right": { "word": "You often lose your keys.", "rightId": 10 }
          },
          {
            "left": { "word": "Il attend son frère", "rightId": 9 },
            "right": { "word": "We finish our homework.", "rightId": 7 }
          },
          {
            "left": { "word": "Tu perds souvent tes clés.", "rightId": 10 },
            "right": { "word": "I like listening to music.", "rightId": 6 }
          }
        ],
      },
    ],
  },
  {
    quiz: '28',
    name: 'French Exercise - 9 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "What does 'la tête' mean in English?",
        "choices": ["the head", "the back", "the arm", "the leg"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is 'une ordonnance' in English?",
        "choices": ["a cough", "a fever", "a prescription", "a cold"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Choose the correct translation: 'Elle a une toux légère.'",
        "choices": ["She has a fever.", "She has a slight cough.", "She has a prescription.", "She has a headache."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'le dos' mean?",
        "choices": ["the arm", "the back", "the leg", "the foot"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'to go to the doctor' in French?",
        "choices": ["aller au supermarché", "aller chez le médecin", "prendre une ordonnance", "avoir une fièvre"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which is the correct conjugation of 'devoir' for 'ils'?",
        "choices": ["dois", "doist", "doivent", "devons"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Choose the correct sentence:",
        "choices": [
          "Nous devons manger des légumes pour rester en forme.",
          "Nous devons manger des légumes pour rester au médecin.",
          "Nous doivent manger des légumes pour rester en forme.",
          "Nous devons mange des légumes pour rester en forme."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Translate: 'You can walk slowly.'",
        "choices": [
          "Vous devez marcher lentement.",
          "Vous pouvez marcher lentement.",
          "Tu peux marcher lentement.",
          "Il peut marcher lentement."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'Je dois boire de l’eau' mean?",
        "choices": ["I can drink water.", "I must drink water.", "I drink water.", "I could drink water."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Choose the correct conjugation: 'Ils ______ (pouvoir) aller au parc après l’école.'",
        "choices": ["peuvent", "peut", "pouvez", "pouvons"],
        "type": "MCQs",
        "correctAnswer": 1
      },


      {
        "question": "Je ______ (pouvoir) aller chez le médecin après le déjeuner.",
        "choices": ["peux", "peut", "pouvons", "pouvez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (devoir) boire de l’eau pour rester en bonne santé.",
        "choices": ["devons", "dois", "devez", "doivent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle ______ (pouvoir) courir tous les matins sans se fatiguer.",
        "choices": ["peut", "peux", "pouvez", "peuvent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vous ______ (devoir) prendre ce médicament trois fois par jour.",
        "choices": ["devez", "doivent", "devons", "dois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ______ (pouvoir) jouer au football après leur consultation médicale.",
        "choices": ["peuvent", "peux", "pouvez", "peut"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tu ______ (devoir) te reposer quand tu as de la fièvre.",
        "choices": ["dois", "devons", "devez", "doivent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sophie ______ (pouvoir) regarder la télévision si elle finit ses devoirs.",
        "choices": ["peut", "peux", "pouvez", "peuvent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (devoir) éviter de manger trop de sucre.",
        "choices": ["devons", "devez", "doivent", "dois"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Les enfants ______ (pouvoir) jouer dehors quand il fait beau.",
        "choices": ["peuvent", "pouvez", "peut", "peux"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Je ______ (devoir) consulter un spécialiste pour mon mal de dos.",
        "choices": ["dois", "devons", "devez", "doivent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "la tête", "rightId": 1 },
            "right": { "word": "the prescription", "rightId": 4 }
          },
          {
            "left": { "word": "le bras", "rightId": 2 },
            "right": { "word": "the cough", "rightId": 5 }
          },
          {
            "left": { "word": "le dos", "rightId": 3 },
            "right": { "word": "the head", "rightId": 1 }
          },
          {
            "left": { "word": "une ordonnance", "rightId": 4 },
            "right": { "word": "the back", "rightId": 3 }
          },
          {
            "left": { "word": "la toux", "rightId": 5 },
            "right": { "word": "the arm", "rightId": 2 }
          },
          
        ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Nous devons boire de l’eau.", "rightId": 6 },
            "right": { "word": "He must take his medicine.", "rightId": 10 }
          },
          {
            "left": { "word": "Ils peuvent jouer dehors.", "rightId": 7 },
            "right": { "word": "You can walk slowly.", "rightId": 9 }
          },
          {
            "left": { "word": "Je dois aller chez le médecin.", "rightId": 8 },
            "right": { "word": "We must drink water.", "rightId": 6 }
          },
          {
            "left": { "word": "Vous pouvez marcher lentement.", "rightId": 9 },
            "right": { "word": "They can play outside.", "rightId": 7 }
          },
          {
            "left": { "word": "Il doit prendre ses médicaments.", "rightId": 10 },
            "right": { "word": "I must go to the doctor.", "rightId": 8 }
          }
        ],
      },
    ],
  },
  {
    quiz: '29',
    name: 'French Exercise - 10 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [

      {
        "question": "What is the correct way to say \"It’s 7:00 PM\" in French?",
        "choices": [
          "Il est sept heures.",
          "Il est sept heures du matin.",
          "Il est sept heures et demie.",
          "Il est sept heures moins le quart."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following uses \"passé composé\" correctly?",
        "choices": [
          "Nous avons regardé un film hier soir.",
          "Nous regardons un film hier soir.",
          "Nous regardons un film demain soir.",
          "Nous avons regarder un film hier soir."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"I met my friends this afternoon\" in French?",
        "choices": [
          "J'ai rencontré mes amis cet après-midi.",
          "J'ai rencontrer mes amis cet après-midi.",
          "Je rencontre mes amis cet après-midi.",
          "Je rencontre mes amis demain après-midi."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which sentence is in the \"passé composé\" tense?",
        "choices": [
          "Nous sommes partis à 10 heures.",
          "Nous partons à 10 heures.",
          "Nous partirons à 10 heures.",
          "Nous partons toujours à 10 heures."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following times means 3:30 PM in French?",
        "choices": [
          "Il est trois heures et demie.",
          "Il est trois heures moins le quart.",
          "Il est quatre heures.",
          "Il est trois heures et quart."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you ask \"What time is it?\" in French?",
        "choices": [
          "À quelle heure est-ce ?",
          "Quelle heure est-il ?",
          "Quand est-ce ?",
          "Quand est-il ?"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which is the correct translation for \"They arrived at noon\"?",
        "choices": [
          "Ils sont arrivés à midi.",
          "Ils arrivent à midi.",
          "Ils sont arrivé à midi.",
          "Ils arriveront à midi."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which auxiliary verb is used with the verb \"aller\" in the *passé composé*?",
        "choices": [
          "avoir",
          "étre",
          "aller",
          "faire"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is the correct way to say \"I have finished my work\"?",
        "choices": [
          "J'ai fini mon travail.",
          "Je finis mon travail.",
          "J'ai finir mon travail.",
          "Je finis le travail."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What time is it in French if the clock shows 11:45?",
        "choices": [
          "Il est onze heures et quart.",
          "Il est onze heures moins le quart.",
          "Il est dix heures et demi.",
          "Il est midi moins le quart."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },


      {
        "question": "Hier, nous ______ (manger) dans un restaurant italien.",
        "choices": ["avons mangé", "a mangé", "mangions", "mangeons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il ______ (être) trois heures quand il est arrivé.",
        "choices": ["était", "sera", "est", "fut"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (voir) un film incroyable la semaine dernière.",
        "choices": ["avons vu", "voyons", "verrons", "avions vu"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "À quelle heure ______ (commencer) la réunion ce matin ?",
        "choices": ["a commencé", "commençait", "commencera", "commençons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mon train ______ (partir) à 9h00.",
        "choices": ["est parti", "partira", "partait", "part"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ils ______ (arriver) en retard au travail aujourd'hui.",
        "choices": ["sont arrivés", "arrivaient", "arrivent", "seront arrivés"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "J'______ (étudier) toute la journée hier.",
        "choices": ["ai étudié", "étudiais", "étudierai", "étudie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Elle ______ (prendre) le métro à 7h30 ce matin.",
        "choices": ["a pris", "prenait", "prendra", "prend"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Il ______ (être) 5 heures et demie quand elle a quitté le bureau.",
        "choices": ["était", "est", "", "fut"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nous ______ (visiter) le musée ce matin à 10h.",
        "choices": ["avons visité", "visitions", "visiterons", "visitons"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Il est 4h15.", "rightId": 1 },
            "right": { "word": "We saw a movie last night.", "rightId": 2 }
          },
          {
            "left": { "word": "Nous avons vu un film hier soir.", "rightId": 2 },
            "right": { "word": "It's 4:15.", "rightId": 1 }
          },
          {
            "left": { "word": "Elle est allée au marché ce matin.", "rightId": 3 },
            "right": { "word": "What time is the train?", "rightId": 4 }
          },
          {
            "left": { "word": "À quelle heure est le train ?", "rightId": 4 },
            "right": { "word": "I finished my work at 6 PM.", "rightId": 5 }
          },
          {
            "left": { "word": "J'ai fini mon travail à 6h.", "rightId": 5 },
            "right": { "word": "She went to the market this morning.", "rightId": 3 }
          },
          
        ],
      },
      {
        "question": "Match the Words.",
        type: "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Nous avons mangé à 13h.", "rightId": 6 },
            "right": { "word": "She studied for the exam.", "rightId": 10 }
          },
          {
            "left": { "word": "Il est 8h30.", "rightId": 7 },
            "right": { "word": "We ate at 1 PM.", "rightId": 6 }
          },
          {
            "left": { "word": "Tu as pris ton petit déjeuner ?", "rightId": 8 },
            "right": { "word": "We left at 9 AM.", "rightId": 9 }
          },
          {
            "left": { "word": "Nous sommes partis à 9h.", "rightId": 9 },
            "right": { "word": "Did you have breakfast?", "rightId": 8 }
          },
          {
            "left": { "word": "Elle a étudié pour l'examen.", "rightId": 10 },
            "right": { "word": "It's 8:30.", "rightId": 7 }
          }
        ],
      },
    ],
  },
    {
      quiz: '30',
      name: 'French Exercise - 11 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "Which word means 'a painting' in French?",
          "choices": ["une galerie", "une sculpture", "une peinture", "une exposition"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Un festival est lié à _______.",
          "choices": ["la musique et les arts", "les mathématiques", "le sport", "la cuisine uniquement"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Un orchestre joue généralement _______.",
          "choices": ["des tableaux", "de la musique classique", "de la danse", "du théâtre"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does 'une galerie' mean in English?",
          "choices": ["a festival", "a gallery", "a sculpture", "a painting"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Une exposition est souvent associée à _______.",
          "choices": ["la musique", "les arts visuels", "la danse", "le chant"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Replace “à Paul” in the sentence: “Je parle à Paul.”",
          "choices": ["Je parle lui.", "Je le parle.", "Je lui parle.", "Lui parle."],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Nous _______ avons envoyé une invitation au concert.",
          "choices": ["lui", "leur", "nous", "me"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Elle va _______ écrire une lettre d’admiration.",
          "choices": ["te", "lui", "leur", "me"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Il _______ explique les détails du festival.",
          "choices": ["leur", "me", "vous", "lui"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "Tu vas _______ téléphoner avant le spectacle ?",
          "choices": ["me", "leur", "lui", "nous"],
          "type": "MCQs",
          "correctAnswer": 3
        },


        {
          "question": "J’ai acheté un billet pour un ______ (concert) de musique classique.",
          "choices": ["concert", "peinture", "galerie", "sculpture"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ce peintre célèbre a créé une magnifique ______ (paint).",
          "choices": ["peinture", "concert", "sculpture", "orchestre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous avons visité une ______ (gallery) d’art moderne hier.",
          "choices": ["galerie", "spectacle", "peinture", "sculpture"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils ont vu une ______ (sculpture) célèbre au musée du Louvre.",
          "choices": ["sculpture", "peinture", "orchestre", "spectacle"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ce soir, nous allons à un ______ (show) de théâtre.",
          "choices": ["spectacle", "concert", "festival", "galerie"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle écoute de la musique jouée par un ______ (orchestra).",
          "choices": ["orchestre", "sculpteur", "chanteur", "peintre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le ______ (singer) joue une mélodie incroyable au piano.",
          "choices": ["chanteur", "sculpteur", "orchestre", "peintre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ce ______ (festival) attire des artistes de toute l’Europe.",
          "choices": ["festival", "spectacle", "concert", "peinture"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le professeur nous a montré une ______ (paint) ancienne.",
          "choices": ["peinture", "sculpture", "orchestre", "galerie"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Après le spectacle, le public a applaudi ______ (there) chanteuse.",
          "choices": ["la", "le", "les", "un"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "une peinture", "rightId": 1 },
              "right": { "word": "a sculptor", "rightId": 5 }
            },
            {
              "left": { "word": "un orchestre", "rightId": 2 },
              "right": { "word": "a gallery", "rightId": 3 }
            },
            {
              "left": { "word": "une galerie", "rightId": 3 },
              "right": { "word": "a concert", "rightId": 4 }
            },
            {
              "left": { "word": "un concert", "rightId": 4 },
              "right": { "word": "an orchestra", "rightId":2 }
            },
            {
              "left": { "word": "un sculpteur", "rightId": 5 },
              "right": { "word": "a painting", "rightId": 1 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "une exposition", "rightId": 6 },
             "right": { "word": "a singer", "rightId": 10 }
            },
            {
              "left": { "word": "un spectacle", "rightId": 7 },
              "right": { "word": "an exhibition", "rightId": 6 }
            },
            {
              "left": { "word": "une sculpture", "rightId": 8 },
             "right": { "word": "a festival", "rightId": 9 }
            },
            {
              "left": { "word": "un festival", "rightId": 9 },
              "right": { "word": "a sculpture", "rightId": 8 }
            },
            {
              "left": { "word": "une chanteuse", "rightId": 10 },
              "right": { "word": "a show", "rightId": 7 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '31',
      name: 'French Exercise - 12 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "What is celebrated on July 14th?",
          "choices": ["The end of the First World War", "The independence of France", "The storming of the Bastille", "The Christmas celebration"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which dessert is traditional for Christmas?",
          "choices": ["A king cake", "A Christmas log", "Pancakes", "An apple pie"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which celebration is known for its fireworks?",
          "choices": ["Easter", "Christmas", "July 14th", "Carnival"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Where is the Festival of Lights celebrated?",
          "choices": ["Paris", "Marseille", "Lyon", "Bordeaux"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which food is associated with Easter?",
          "choices": ["Foie gras", "Pancakes", "Chocolate eggs", "Macarons"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence is correct?",
          "choices": ["Cette galette est moins sucrée que celle de l’année dernière.", "Cette galette est aussi sucrée que celle de l’année dernière.", "Cette galette est le moins sucrée que celle de l’année dernière.", "Cette galette est sucrée comme celle de l’année dernière."],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Lyon is known for _______.",
          "choices": ["its Carnival", "its fireworks", "its Festival of Lights", "its red wine"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which mountain is the highest in Europe?",
          "choices": ["Everest", "Mont Blanc", "The Alps", "Kilimanjaro"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which comparison is correct?",
          "choices": [
            "This dessert is more delicious than that one.",
            "This dessert is less delicious than that one.",
            "This dessert is as delicious as that one.",
            "This dessert is delicious like that one."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which celebration is 'the most famous' in France?",
          "choices": ["Christmas", "Easter", "July 14th", "Carnival"],
          "type": "MCQs",
          "correctAnswer": 3
        },


       {
    "question": "Le 14 juillet, on célèbre ______ de la Bastille.",
    "choices": ["prise", "fête", "fin",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "À Noël, on mange souvent une ______ de Noël.",
    "choices": ["bûche", "galette", "crêpe",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Cette fête est ______ importante que l’Épiphanie en France.",
    "choices": ["plus", "moins", "aussi",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Les feux d’artifice du 14 juillet sont ______ de l’année.",
    "choices": ["les plus beaux", "les moins bruyants", "aussi lumineux",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "À Pâques, les enfants cherchent des œufs en ______.",
    "choices": ["chocolat", "sucre", "farine",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Cette galette des rois est ______ sucrée que celle de l’année dernière.",
    "choices": ["moins", "plus", "aussi",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "La Fête des Lumières à Lyon est ______ célèbre que Noël.",
    "choices": ["moins", "aussi", "plus",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "C’est la fête ______ importante de la région.",
    "choices": ["la plus", "la moins", "le plus",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Le Mont Blanc est ______ montagne d’Europe.",
    "choices": ["la plus haute", "le moins haut", "aussi haute",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },
  {
    "question": "Les crêpes sont ______ populaires que les gâteaux à Carnaval.",
    "choices": ["moins", "plus", "aussi",""],
    "type": "FillInTheBlanks",
    "correctAnswer": 1
  },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "le 14 juillet", "rightId": 1 },
              "right": { "word": "the pancakes", "rightId": 4 }
            },
            {
              "left": { "word": "une bûche de Noël", "rightId": 2 },
              "right": { "word": "Easter", "rightId": 5 }
            },
            {
              "left": { "word": "une galette des rois", "rightId": 3 },
              "right": { "word": "July 14", "rightId": 1 }
            },
            {
              "left": { "word": "les crêpes", "rightId": 4 },
              "right": { "word": "A Christmas log", "rightId":2 }
            },
            {
              "left": { "word": "pâques", "rightId": 5 },
              "right": { "word": "A king cake", "rightId": 3 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Lyon", "rightId": 6 },
              "right": { "word": "The most famous festival in France", "rightId": 10 }
            },
            {
              "left": { "word": "Noël", "rightId": 7 },
              "right": { "word": "Lyon", "rightId": 6 }
            },
            {
              "left": { "word": "le Mont Blanc", "rightId": 8 },
              "right": { "word": "Christmas", "rightId": 7 }
            },
            {
              "left": { "word": "Carnaval", "rightId": 9 },
              "right": { "word": "Mont Blanc", "rightId": 8 }
            },
            {
              "left": { "word": "La fête la plus célèbre en France", "rightId": 10 },
              "right": { "word": "Carnival", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '32',
      name: 'French Exercise - 13 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "How do you say 'global warming' in French?",
          "choices": ["le changement climatique", "la pollution", "le réchauffement climatique", "l'air pur"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence is correct?",
          "choices": [
            "Si nous plantons des arbres, la mer disparaîtra.",
            "Si nous protégeons les forêts, nous protégerons la faune.",
            "Si nous recyclons, les espèces en danger augmenteront.",
            "Si nous ne faisons rien, la pollution disparaîtra."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is renewable energy?",
          "choices": ["le charbon", "l'énergie solaire", "le pétrole", "le plastique"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Si nous utilisons moins de plastique, les océans _______.",
          "choices": ["se pollueront", "seront plus propres", "disparaîtront", "deviendront plus petits"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What can we recycle?",
          "choices": ["l'eau", "les déchets alimentaires", "les bouteilles en plastique", "le vent"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "If the glaciers melt, what will happen?",
          "choices": [
            "La mer deviendra froide.",
            "Le niveau de la mer augmentera.",
            "Les animaux seront protégés.",
            "La pollution diminuera."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say 'endangered species' in French?",
          "choices": [
            "Les espèces en danger",
            "Les énergies renouvelables",
            "Les forêts menacées",
            "Les déchets réutilisables"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which sentence is correct?",
          "choices": [
            "Si nous ne faisons rien, les glaciers fondront.",
            "Si nous recyclons, la planète fondra.",
            "Si nous utilisons du charbon, les arbres pousseront.",
            "Si nous plantons des déchets, nous protègerons les espèces."
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does 'sustainable development' mean?",
          "choices": [
            "utiliser plus d’énergie",
            "développement respectant l’environnement",
            "construire plus de routes",
            "augmenter la pollution"
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What should we use to reduce pollution?",
          "choices": [
            "les énergies renouvelables",
            "le plastique",
            "le charbon",
            "les voitures individuelles"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },


        {
          "question": "Si nous ______ (recycle), nous réduirons la pollution.",
          "choices": ["recyclons", "recycler", "recyclent"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les forêts disparaîtront si les humains ne ______ (protect) pas les arbres.",
          "choices": ["protègent", "protège", "protègeons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si nous plantons des arbres, la planète ______ (will be) plus verte.",
          "choices": ["sera", "seront", "serait"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si vous utilisez moins de plastique, vous ______ (will protect) les océans.",
          "choices": ["protègerez", "protègera", "protègeons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si les glaciers fondent, le niveau de la mer ______ (will increase).",
          "choices": ["augmentera", "augmenterez", "augmente"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si tu éteins les lumières, tu ______ (will save) de l’énergie.",
          "choices": ["économiseras", "économisera", "économises"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous protégerons les espèces en danger si nous ______ (protect) leur habitat.",
          "choices": ["protégeons", "protègeons", "protège"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si les villes deviennent plus vertes, la qualité de l’air ______ (will improve).",
          "choices": ["améliorera", "amélioreraient", "améliorerons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si nous ne faisons rien, les animaux en danger ______ (will disappear).",
          "choices": ["disparaîtront", "disparaît", "disparaîtrez"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La pollution diminuera si tout le monde ______ (takes) les transports en commun.",
          "choices": ["prend", "prenons", "prendront"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "la forêt", "rightId": 1 },
              "right": { "word": "Augmentation de la température globale", "rightId": 4 }
            },
            {
              "left": { "word": "recycler", "rightId": 2 },
              "right": { "word": "alternatives au pétrole et au charbon", "rightId": 5 }
            },
            {
              "left": { "word": "une espèce en danger", "rightId": 3 },
              "right": { "word": "une ressource naturelle à protéger", "rightId": 1 }
            },
            {
              "left": { "word": "le réchauffement climatique", "rightId": 4 },
              "right": { "word": "un groupe d’animaux menacés", "rightId": 3 }
            },
            {
              "left": { "word": "les énergies renouvelables", "rightId": 5 },
              "right": { "word": "réduire les déchets en réutilisant", "rightId": 2 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "la pollution", "rightId": 1 },
              "right": { "word": "garder ou défendre quelque chose", "rightId": 2 }
            },
            {
              "left": { "word": "protéger", "rightId": 2 },
              "right": { "word": "Bus, métro, et tramway", "rightId": 4 }
            },
            {
              "left": { "word": "le développement durable", "rightId": 3 },
              "right": { "word": "dégradation de l’environnement", "rightId": 1 }
            },
            {
              "left": { "word": "les transports en commun", "rightId": 4 },
              "right": { "word": "sans pollution ni toxines", "rightId": 5 }
            },
            {
              "left": { "word": "l'air pur", "rightId": 5 },
              "right": { "word": "développement respectant l’environnement", "rightId": 3 }
            },
          ],
        },
  
      ],
    },
    {
      quiz: '33',
      name: 'French Exercise - 14 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "How do you say 'boss' in French?",
          "choices": ["un contrat", "un patron", "un poste", "un salarié"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What word means 'job' in French?",
          "choices": ["un emploi", "un entretien", "une réunion", "un projet"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which sentence is FORMELLE?",
          "choices": ["Salut, tu veux m’aider ?", "Pouvez-vous me donner votre avis ?", "Tu peux m’envoyer un message ?", "Merci pour ton aide."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does 'les congés payés' mean?",
          "choices": ["des pauses au travail", "des vacances rémunérées", "des heures supplémentaires", "une réunion urgente"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What do you do during an interview?",
          "choices": ["On signe un contrat.", "On parle avec un client.", "On cherche un poste.", "On discute avec un recruteur."],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "How would we say INFORMALLY 'Can you help me?'",
          "choices": ["Pouvez-vous m’aider ?", "Peux-tu m’aider ?", "Puis-je demander votre aide ?", "Veuillez m’aider."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What word describes a person who works in a company?",
          "choices": ["un salarié", "un contrat", "un collègue", "un poste"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the equivalent of 'meeting' in French?",
          "choices": ["un entretien", "une réunion", "un emploi", "un projet"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which sentence is INFORMAL?",
          "choices": ["Salut, tu es libre cet après-midi ?", "Pourriez-vous me confirmer la date ?", "Je souhaiterais avoir plus d’informations.", "Merci pour votre attention."],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does 'heures supplémentaires' mean?",
          "choices": ["Des heures en plus de travail", "Une réunion prolongée", "Une pause déjeuner prolongée", "Une journée de congé"],
          "type": "MCQs",
          "correctAnswer": 1
        },


        {
          "question": "Il cherche un ______ (job) dans une entreprise internationale.",
          "choices": ["emploi", "emploi", "contrat", "salarié"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous avons une ______ (meeting) avec notre client à 15 heures.",
          "choices": ["réunion", "réunion", "poste", "collègue"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle prépare un ______ (report) pour son entretien demain.",
          "choices": ["rapport", "rapport", "contrat", "projet"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pendant l’______ (interview), le patron a posé beaucoup de questions.",
          "choices": ["entretien", "entretien", "emploi", "salarié"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Mon ______ (colleague) m’a aidé avec ce dossier compliqué.",
          "choices": ["collègue", "collègue", "poste", "patron"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le ______ (employee) a signé un contrat avec l’entreprise aujourd’hui.",
          "choices": ["salarié", "salarié", "réunion", "congé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Tu peux m’envoyer un email pour ______ (discuss) le projet ?",
          "choices": ["discuter", "discuter", "patron", "salarié"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Dans cette entreprise, le ______ (boss) est toujours très exigeant.",
          "choices": ["patron", "patron", "contrat", "projet"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les ______ (leave) payés sont une tradition importante en France.",
          "choices": ["congés", "congés", "emplois", "contrats"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je voudrais savoir si vous pouvez venir à l’______ (interview).",
          "choices": ["entretien", "entretien", "réunion", "emploi"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "un entretien", "rightId": 1 },
              "right": { "word": "position", "rightId": 2 }
            },
            {
              "left": { "word": "un poste", "rightId": 2 },
              "right": { "word": "job", "rightId": 5 }
            },
            {
              "left": { "word": "heures supplémentaires", "rightId": 3 },
              "right": { "word": "interview", "rightId": 1 }
            },
            {
              "left": { "word": "un collègue", "rightId": 4 },
              "right": { "word": "overtime", "rightId": 3 }
            },
            {
              "left": { "word": "un emploi", "rightId": 5 },
              "right": { "word": "colleague", "rightId": 4 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "un patron", "rightId": 1 },
              "right": { "word": "contract", "rightId": 3 }
            },
            {
              "left": { "word": "une réunion", "rightId": 2 },
              "right": { "word": "employee", "rightId": 4 }
            },
            {
              "left": { "word": "un contrat", "rightId": 3 },
              "right": { "word": "meeting", "rightId": 2 }
            },
            {
              "left": { "word": "un salarié", "rightId": 4 },
              "right": { "word": "paid leave", "rightId": 5 }
            },
            {
              "left": { "word": "les congés payés", "rightId": 5 },
              "right": { "word": "boss", "rightId": 1 }
            },
          ],
        },
  
      ],
    },
    {
      quiz: '34',
      name: 'French Exercise - 15 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "What word means “password” in French?",
          "choices": ["un clavier", "un mot de passe", "une souris", "une application"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say “to download” in French?",
          "choices": ["télécharger", "partager", "se connecter", "naviguer"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "C’est une application ______ je trouve très facile à utiliser.",
          "choices": ["où", "dont", "que", "qui"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "C’est l’année ______ j’ai acheté mon premier ordinateur.",
          "choices": ["où", "que", "qui", "dont"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What word means “website” in French?",
          "choices": ["un mot de passe", "une souris", "un clavier", "un site web"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "Nous avons visité un endroit ______ tout le monde parle souvent.",
          "choices": ["dont", "où", "que", "qui"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Le smartphone ______ elle a acheté est très cher.",
          "choices": ["où", "qui", "que", "dont"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "J’utilise une souris ______ est très rapide.",
          "choices": ["où", "qui", "que", "dont"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What action do we take when we “share” a photo?",
          "choices": ["On la supprime.", "On la rend accessible à d’autres.", "On l’imprime.", "On la garde privée."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Le document ______ j’ai téléchargé contient des informations importantes.",
          "choices": ["où", "que", "qui", "dont"],
          "type": "MCQs",
          "correctAnswer": 2
        },

        {
          "question": "C’est le document ______ (that) j’ai téléchargé hier.",
          "choices": ["que", "qui", "où"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je dois entrer mon ______ (password) pour accéder à mon compte.",
          "choices": ["mot de passe", "clavier", "souris"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le site ______ (or) je visite souvent est très informatif.",
          "choices": ["où", "que", "qui"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous avons une réunion ______ (or) tout le monde est invité.",
          "choices": ["où", "qui", "que"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "L’application ______ (that) je t’ai parlé est très utile.",
          "choices": ["que", "qui", "où"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Un ______ (smartphone) est un appareil que j’utilise pour lire mes e-mails.",
          "choices": ["smartphone", "ordinateur", "souris"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "2023 est l’année ______ (or) j’ai commencé à apprendre le français.",
          "choices": ["où", "que", "qui"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "J’ai besoin de télécharger ______ (an app) avant de l’utiliser.",
          "choices": ["une application", "un clavier", "une souris"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "C’est le projet ______ (of which) ils sont très fiers.",
          "choices": ["dont", "où", "que"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "L’ordinateur ______ (who) fonctionne le mieux est sur mon bureau.",
          "choices": ["qui", "où", "que"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "une application", "rightId": 1 },
              "right": { "word": "a set of keys for typing", "rightId": 2 }
            },
            {
              "left": { "word": "un clavier", "rightId": 2 },
              "right": { "word": "the year something happened", "rightId": 3 }
            },
            {
              "left": { "word": "où", "rightId": 3 },
              "right": { "word": "a password", "rightId": 4 }
            },
            {
              "left": { "word": "un mot de passe", "rightId": 4 },
              "right": { "word": "used to refer to a subject", "rightId": 5 }
            },
            {
              "left": { "word": "qui", "rightId": 5 },
              "right": { "word": "a program used on a smartphone", "rightId": 1 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "télécharger", "rightId": 1 },
              "right": { "word": "refers to something related to 'de'", "rightId": 3 }
            },
            {
              "left": { "word": "une souris", "rightId": 2 },
              "right": { "word": "to share", "rightId": 4 }
            },
            {
              "left": { "word": "dont", "rightId": 3 },
              "right": { "word": "a device to move a cursor", "rightId": 2 }
            },
            {
              "left": { "word": "partager", "rightId": 4 },
              "right": { "word": "a website", "rightId": 5 }
            },
            {
              "left": { "word": "un site web", "rightId": 5 },
              "right": { "word": "to download", "rightId": 1 }
            },
          ],
        },
  
      ],
    },
    {
      quiz: '35',
      name: 'French Exercise - 16 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "How do you say “comic book” in French?",
          "choices": ["une comédie", "une bande dessinée", "un roman", "une biographie"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What kind of movie is often funny?",
          "choices": ["un drame", "une comédie", "un documentaire", "un film d’animation"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What word corresponds to “digital media”?",
          "choices": ["la presse écrite", "les réseaux sociaux", "la radio", "les films"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What do you call a play written for the stage?",
          "choices": ["un roman", "une biographie", "une pièce de théâtre", "une bande dessinée"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is an example of traditional media?",
          "choices": ["les magazines numériques", "la presse écrite", "les réseaux sociaux", "les podcasts"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say 'The book is read by the children'?",
          "choices": ["Le livre lire par les enfants.", "Le livre est lu par les enfants.", "Le livre est lire par les enfants.", "Les enfants lisent le livre."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "La pièce _____ (être, écrire) par un célèbre dramaturge.",
          "choices": ["est écrite", "écrite", "a été écrite", "sont écrites"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Un article intéressant a été _____ (publier) hier dans ce journal.",
          "choices": ["publié", "publie", "publier", "publiés"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Les billets sont _____ par les visiteurs à l’entrée du musée.",
          "choices": ["acheter", "achetés", "achètent", "acheté"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Une chanson douce _____ (être, écouter) par les enfants.",
          "choices": ["est écouter", "est écoutée", "écouter", "est écouteront"],
          "type": "MCQs",
          "correctAnswer": 2
        },

        {
          "question": "Les informations sont diffusées à la télévision et à la _____ (radio).",
          "choices": ["radio"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Un _____ (documentary) est souvent très éducatif.",
          "choices": ["documentaire"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Cette chanson célèbre _____ (être, chanter) par un artiste connu.",
          "choices": ["est chantée"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le journal a été _____ (imprimer) ce matin.",
          "choices": ["imprimé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les livres _____ (être, vendre) dans la librairie de l’université.",
          "choices": ["sont vendus"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Une bande dessinée _____ (être, lire) par de nombreux enfants chaque jour.",
          "choices": ["est lue"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Un film d’animation _____ (être, produire) en France cette année.",
          "choices": ["est produit"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les réseaux sociaux sont _____ (utiliser) par beaucoup de jeunes.",
          "choices": ["utilisés"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La pièce de théâtre a été _____ (écrire) par Molière.",
          "choices": ["écrite"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les magazines numériques sont souvent _____ (télécharger) sur les tablettes.",
          "choices": ["téléchargés"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "une bande dessinée", "rightId": 1 },
              "right": { "word": "social networks", "rightId": 5 }
            },
            {
              "left": { "word": "un film d’animation", "rightId": 2 },
              "right": { "word": "comedy", "rightId": 3 }
            },
            {
              "left": { "word": "une comédie", "rightId": 3 },
              "right": { "word": "drama", "rightId": 4 }
            },
            {
              "left": { "word": "un drame", "rightId": 4 },
              "right": { "word": "animated movie", "rightId": 2 }
            },
            {
              "left": { "word": "les réseaux sociaux", "rightId": 5 },
              "right": { "word": "comic book", "rightId": 1 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "la presse écrite", "rightId": 1 },
              "right": { "word": "play", "rightId": 3 }
            },
            {
              "left": { "word": "un documentaire", "rightId": 2 },
              "right": { "word": "news", "rightId": 4 }
            },
            {
              "left": { "word": "une pièce de théâtre", "rightId": 3 },
              "right": { "word": "documentary", "rightId": 2 }
            },
            {
              "left": { "word": "les nouvelles", "rightId": 4 },
              "right": { "word": "biography", "rightId": 5 }
            },
            {
              "left": { "word": "une biographie", "rightId": 5 },
              "right": { "word": "printed press", "rightId": 1 }
            },
          ],
        },
  
      ],
    },
    {
      quiz: '36',
      name: 'French Exercise - 17 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "How do you say 'poverty' in French?",
          "choices": ["le chômage", "la pauvreté", "l’éducation", "le changement climatique"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Who is responsible for public safety?",
          "choices": ["le maire", "le policier", "l’avocat", "le professeur"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What word corresponds to 'unemployment'?",
          "choices": ["la pauvreté", "le chômage", "l’éducation", "les citoyens"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you call 'citizens' in French?",
          "choices": ["les citoyens", "les avocats", "les professeurs", "les policiers"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What word means 'climate change'?",
          "choices": ["la pauvreté", "l’éducation", "le changement climatique", "les problèmes sociaux"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Complétez : Hier, le maire _____ (inaugurer) un nouveau bâtiment public.",
          "choices": ["inaugure", "inaugurait", "a inauguré", "va inaugurer"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Complétez : Nous _____ (aller, futur proche) planter des arbres la semaine prochaine.",
          "choices": ["allons", "avons", "allons planter", "plantons"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence is in the past tense?",
          "choices": [
            "Les citoyens discutent des problèmes sociaux.",
            "Les étudiants ont organisé une réunion hier.",
            "Le maire parle des nouvelles lois.",
            "Les citoyens vont voter demain."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which sentence is in the imperfect tense?",
          "choices": [
            "Le maire parle des nouvelles lois.",
            "Les citoyens débattaient des nouvelles politiques.",
            "Le professeur a expliqué la leçon.",
            "Nous allons participer à un événement."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Complétez : Les citoyens _____ (créer, présent) un projet pour aider les sans-abris.",
          "choices": ["créaient", "créent", "ont créé", "vont créer"],
          "type": "MCQs",
          "correctAnswer": 2
        },

        {
          "question": "Le _____ (mayor) est responsable des décisions importantes de la ville.",
          "choices": ["maire", "mayor", "citoyen", "professeur"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Une avocate a _____ (présenter, passé composé) un plan pour l’égalité des sexes.",
          "choices": ["présenté", "présenter", "présentait", "présente"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les citoyens _____ (aller, futur proche) organiser une réunion publique demain.",
          "choices": ["vont", "allons", "allez", "va"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les professeurs _____ (enseigner, imparfait) toujours avec passion et patience dans cette école.",
          "choices": ["enseignaient", "enseignent", "enseigneraient", "enseigne"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La _____ (poverty) reste un défi majeur dans de nombreuses régions.",
          "choices": ["pauvreté", "chômage", "problème social", "égalité"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les policiers _____ (protéger, présent) les citoyens contre le danger.",
          "choices": ["protègent", "protégé", "protéger", "protégeaient"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les étudiants _____ (créer, passé composé) une campagne pour le changement climatique.",
          "choices": ["ont créé", "créent", "créaient", "vont créer"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le chômage est un _____ (societal issue) qui affecte beaucoup de jeunes.",
          "choices": ["problème social", "pauvreté", "inégalité", "chômage"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous _____ (planter, futur proche) des arbres pour améliorer notre environnement.",
          "choices": ["allons planter", "plantons", "avons planté", "planteraient"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pendant son mandat, le maire _____ (lancer, passé composé) plusieurs projets écologiques.",
          "choices": ["a lancé", "lançait", "lance", "va lancer"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "un maire", "rightId": 1 },
              "right": { "word": "climate change", "rightId": 5 }
            },
            {
              "left": { "word": "un policier", "rightId": 2 },
              "right": { "word": "lawyer", "rightId": 3 }
            },
            {
              "left": { "word": "une avocate", "rightId": 3 },
              "right": { "word": "education", "rightId": 4 }
            },
            {
              "left": { "word": "l’éducation", "rightId": 4 },
              "right": { "word": "Police officer", "rightId": 2 }
            },
            {
              "left": { "word": "le changement climatique", "rightId": 5 },
              "right": { "word": "Mayor", "rightId": 1 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "la pauvreté", "rightId": 1 },
              "right": { "word": "citizens", "rightId": 3 }
            },
            {
              "left": { "word": "le chômage", "rightId": 2 },
              "right": { "word": "social issues", "rightId": 4 }
            },
            {
              "left": { "word": "les citoyens", "rightId": 3 },
              "right": { "word": "unemployment", "rightId": 2 }
            },
            {
              "left": { "word": "les problèmes sociaux", "rightId": 4 },
              "right": { "word": "teacher", "rightId": 5 }
            },
            {
              "left": { "word": "un professeur", "rightId": 5 },
              "right": { "word": "poverty", "rightId": 1 }
            },
          ],
        },
  
      ],
    },
    {
      quiz: '37',
      name: 'French Exercise - 18 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "How do you say \"to sleep\" in French?",
          "choices": ["dormir", "manger", "visiter", "prendre"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What word means \"castle\"?",
          "choices": ["le musée", "le château", "la plage", "la maison"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"to visit\" in French?",
          "choices": ["jouer", "voyager", "visiter", "dormir"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What word corresponds to \"garden\"?",
          "choices": ["la plage", "le jardin", "le parc", "la maison"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"happy\" in the feminine form?",
          "choices": ["content", "contente", "contentes", "contents"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Complétez : Hier, nous _____ (prendre, passé composé) un taxi pour aller au musée.",
          "choices": ["prenions", "avons pris", "prendrons", "prenons"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Complétez : Quand j’étais enfant, je _____ (jouer, imparfait) souvent au parc.",
          "choices": ["joue", "ai joué", "jouais", "vais jouer"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Complétez : Demain, ils _____ (aller, futur proche) faire du shopping au centre-ville.",
          "choices": ["vont aller", "vont", "allaient", "iront"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Complétez : Les enfants _____ (être, présent) impatients d’aller au parc.",
          "choices": ["sont", "ont été", "étaient", "vont être"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Complétez : Elle _____ (apprendre, présent) le français pour son travail.",
          "choices": ["apprenait", "apprend", "a appris", "va apprendre"],
          "type": "MCQs",
          "correctAnswer": 2
        },

        {
          "question": "Je _____ (manger, présent) des fruits frais tous les matins.",
          "choices": ["mange","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Hier, nous _____ (visiter, passé composé) un château historique avec un guide.",
          "choices": ["avons visité","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Quand j’étais petit, je _____ (jouer, imparfait) souvent dans le jardin.",
          "choices": ["jouais","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Demain, ils _____ (aller, futur proche) à la plage pour se détendre.",
          "choices": ["vont aller","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pendant les vacances, nous _____ (dormir, présent) dans une maison de campagne.",
          "choices": ["dormons","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle est très _____ (content, adjectif féminin) de recevoir ses amis ce soir.",
          "choices": ["contente","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous _____ (prendre, passé composé) un taxi pour arriver à l’heure.",
          "choices": ["avons pris","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "(Où/Quand) _____ est-ce que tu as appris à parler français ?",
          "choices": ["Où","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils _____ (être, présent) toujours en avance pour les réunions importantes.",
          "choices": ["sont","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Les enfants _____ (jouer, futur proche) avec leurs cousins dans le parc demain.",
          "choices": ["vont jouer","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Hier, j’ai mangé", "rightId": 1 },
              "right": { "word": "I will visit the museum tomorrow.", "rightId": 2 }
            },
            {
              "left": { "word": "Demain, nous allons visiter", "rightId": 2 },
              "right": { "word": "I ate a croissant.", "rightId": 1 }
            },
            {
              "left": { "word": "Elle apprend", "rightId": 3 },
              "right": { "word": "We are happy.", "rightId": 4 }
            },
            {
              "left": { "word": "Nous sommes contents", "rightId": 4 },
              "right": { "word": "I used to love chocolate.", "rightId": 5 }
            },
            {
              "left": { "word": "J’aimais", "rightId": 5 },
              "right": { "word": "She is learning French.", "rightId": 3 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Il jouait", "rightId": 1 },
              "right": { "word": "She left early", "rightId": 2 }
            },
            {
              "left": { "word": "Elle est partie", "rightId": 2 },
              "right": { "word": "They will play football.", "rightId": 4 }
            },
            {
              "left": { "word": "Nous avons visité", "rightId": 3 },
              "right": { "word": "He was playing with his dog.", "rightId": 1 }
            },
            {
              "left": { "word": "Ils vont jouer", "rightId": 4 },
              "right": { "word": "You were at the park.", "rightId": 5 }
            },
            {
              "left": { "word": "Vous étiez", "rightId": 5 },
              "right": { "word": "We visited a castle.", "rightId": 3 }
            },
          ],
        },
  
      ],
    },
    {
      quiz: '38',
      name: 'French Exercise - 19 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "How do you say \"How much does it cost?\" in French?",
          "choices": ["Combien ça coûte ?", "Où est la gare ?", "Je voudrais un billet.", "Pouvez-vous répéter ?"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What do you mean if you ask \"Do you have apples?\"?",
          "choices": ["Je prends une pomme.", "Avez-vous des pommes ?", "Où sont les pommes ?", "J’aime les pommes."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which sentence is correct to say \"I'll take two tickets\"?",
          "choices": ["Je prends deux billets.", "Je vais aller deux billets.", "J’ai pris deux billets.", "Prenons deux billets."],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "You are at the station. What do you say to ask for a table?",
          "choices": ["L’addition, s’il vous plaît.", "À quelle heure part le train ?", "Où est la gare ?", "Je voudrais un billet."],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "You want to know the time of a train. What do you say?",
          "choices": ["Où est le train ?", "Combien ça coûte ?", "À quelle heure arrive le train ?", "Puis-je voir la carte ?"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence is correct for ordering at a restaurant?",
          "choices": ["Je voudrais un menu, s’il vous plaît.", "Où est la gare ?", "Je prends un aller simple.", "Vous avez des billets ?"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"L’addition, s’il vous plaît\" mean?",
          "choices": ["The train schedule, please.", "A table for one, please.", "The bill, please.", "The map, please."],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "If you order a drink, what do you say?",
          "choices": ["Je vais à la gare.", "Je voudrais un café.", "Je prends un billet.", "À quelle heure est le dîner ?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is a word for \"menu\" in French?",
          "choices": ["la table", "le café", "la carte", "l'addition"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What do you say if you're ready to order?",
          "choices": ["Où est la carte ?", "Je prends une quiche lorraine.", "Combien ça coûte ?", "Où est la gare ?"],
          "type": "MCQs",
          "correctAnswer": 2
        },

        {
          "question": "Bonjour, je voudrais _____ (un/une) baguette et du beurre, s’il vous plaît.",
          "choices": ["une", "un", "la", "le"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Combien _____ (coûter) cette jupe rouge ?",
          "choices": ["coûte", "coûtent", "valent", "vaut"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "À quelle heure le train _____ (partir) pour Marseille ?",
          "choices": ["part", "partent", "pars", "partez"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "(Où/Quand) _____ est la gare, s’il vous plaît ?",
          "choices": ["Où", "Quand", "Qui", "Comment"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous _____ (prendre, présent) deux billets aller-retour pour Lyon.",
          "choices": ["prenons", "prenez", "prend", "prennent"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je prends une salade et une _____ (eau/eaux), s’il vous plaît.",
          "choices": ["eau", "eaux", "eau-minérale", "verre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le serveur _____ (apporter, passé composé) l’addition à notre table.",
          "choices": ["a apporté", "a apportaient", "a apporter", "a apporté"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils vont _____ (visiter) le musée après le déjeuner.",
          "choices": ["visiter", "visitent", "visitez", "visitaient"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "(Est-ce que/Pourquoi) _____ vous avez des fruits de saison ?",
          "choices": ["Est-ce que", "Pourquoi", "Qui", "Quand"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pouvez-vous me _____ (donner) une carte des vins, s’il vous plaît ?",
          "choices": ["donner", "donnez", "donné", "donnons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Bonjour, je voudrais une table", "rightId": 1 },
              "right": { "word": "The check, please.", "rightId": 2 }
            },
            {
              "left": { "word": "L’addition, s’il vous plaît.", "rightId": 2 },
              "right": { "word": "I would like a ticket to Paris.", "rightId": 4 }
            },
            {
              "left": { "word": "Où est la gare, s’il vous plaît ?", "rightId": 3 },
              "right": { "word": "Hello, I would like a table", "rightId": 1 }
            },
            {
              "left": { "word": "Je voudrais un billet pour Paris.", "rightId": 4 },
              "right": { "word": "The map, please.", "rightId": 5 }
            },
            {
              "left": { "word": "La carte, s’il vous plaît.", "rightId": 5 },
              "right": { "word": "Where is the station, please?", "rightId": 3 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Un aller-retour pour Lyon, merci.", "rightId": 1 },
              "right": { "word": "How much does it cost?", "rightId": 2 }
            },
            {
              "left": { "word": "Combien ça coûte ?", "rightId": 2 },
              "right": { "word": "A round trip to Lyon, thank you.", "rightId": 1 }
            },
            {
              "left": { "word": "Nous avons réservé une table.", "rightId": 3 },
              "right": { "word": "What time does the train arrive?", "rightId": 4 }
            },
            {
              "left": { "word": "À quelle heure arrive le train ?", "rightId": 4 },
              "right": { "word": "I'm having a coffee.", "rightId": 5 }
            },
            {
              "left": { "word": "Je prends un café.", "rightId": 5 },
              "right": { "word": "We reserved a table.", "rightId": 3 }
            },
          ],
        },
  
      ],
    },
]

