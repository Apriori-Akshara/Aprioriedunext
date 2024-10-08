export const quiz = [
    {
      quiz: '1',
      name: 'French Exercise - 1',
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
          choices: ['je vais bien', 'je ne vais pas très bien', 'je ne vais pas loin', 'je ne vais bien'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What does 'comment vas-tu?' mean?",
          choices: ["what is it that you are?", 'where are you going?', "what is it that you are?", "how are you?"],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: "If someone replies 'pas grand chose' when asked how they are doing, it means",
          choices: ['not much', 'a lot!', "I don't want to say", 'I want to say'],
          type: 'MCQs',
          correctAnswer: 1,
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
            choices: ['where are you?', 'who are you?', "how are you?", 'are you well?'],
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
            question: "How do you say 'what time is it?' in French?",
            choices: ["quelle heure est-il?", "où est la montre?", "c'est quelle heure?", "qu'est-ce que c'est l'heure?"],
            type: 'MCQs',
            correctAnswer: 1
          },
          {
            question: "Which of the following means 'I am thirsty' in French?",
            choices: ["j'ai faim", "je suis soif", "j'ai soif", "je veux boire"],
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
            question: "Which of the following means 'how much does it cost?' in French?",
            choices: ["c'est combien?", "combien ça coûte?", "qu'est-ce que c'est le prix?", "quelle est le tarif?"],
            type: 'MCQs',
            correctAnswer: 2
          },

            {
              question: "Bella: Bonjour, ______. (Hello, Sir)",
              choices: ["lis", "mange", "a", "Monsieur"],
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
              question: "Bella: Je m'appelle Anne, ______ ? (My name is Anne, and you?)",
              choices: ["et vous", "faisons", "allons", "avons"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: ______ Pierre. (My name is Pierre.)",
              choices: ["Je m'appelle", "mangent", "lisent", "sont"],
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
              question: "Bella: Je suis ______ . (I am a French teacher.)",
              choices: ["professeure de français", "faites", "lisez", "mangez"],
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
                question: "Laurent: J'adore ______. (I love coffee.)",
                choices: ["le café", "faites", "lisez", "mangez"],
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
                question: "Laurent: J'habite ______ Paris. (I live in Paris.)",
                choices: ["à", "dans", "sur", "chez"],
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
                question: "Bella: Vous aimez ______ ? (Do you like France?)",
                choices: ["la France", "le café", "la ville", "la nourriture"],
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
              "left": { "word": "Hello", "rightId": 1 },
              "right": { "word": "Monsieur", "rightId": 3 }
            },
            {
              "left": { "word": "Ma'am", "rightId": 2 },
              "right": { "word": "Bonjour", "rightId": 1 }
            },
            {
              "left": { "word": "Sir", "rightId": 3 },
              "right": { "word": "Madame", "rightId": 2 }
            },
            {
              "left": { "word": "Good-bye", "rightId": 4 },
              "right": { "word": "Enchanté", "rightId": 5 }
            },
            {
              "left": { "word": "Nice to meet you", "rightId": 5 },
              "right": { "word": "Au revoir", "rightId": 4 }
            },
            {
              "left": { "word": "Hi", "rightId": 6 },
              "right": { "word": "Bonne nuit", "rightId": 8 }
            },
            {
              "left": { "word": "See you soon", "rightId": 7 },
              "right": { "word": "Salut", "rightId": 6 }
            },
            {
              "left": { "word": "Good night", "rightId": 8 },
              "right": { "word": "À bientôt", "rightId": 7 }
            },
            {
              "left": { "word": "See you tomorrow", "rightId": 9 },
              "right": { "word": "Bonsoir!", "rightId": 10 }
            },
            {
              "left": { "word": "Good evening", "rightId": 10 },
              "right": { "word": "À demain!", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '2',
      name: 'French Exercise - 2',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          question: 'What is the French word for the number "three"?',
          choices: ['Un', 'Trois', 'Deux', 'Quatre'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'seven' in French?",
          choices: ['Huit', 'Sept', 'Neuf', 'Dix'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French letter for the pronunciation 'Effe'?",
          choices: ['M', 'F', 'T', 'P'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'twelve' in French?",
          choices: ['Douze', 'Onze', 'Dix', 'Vingt'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "What is the letter for the French pronunciation 'Emme'?",
          choices: ['N', 'R', 'D', 'M'],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: "How do you say the number 'eighteen' in French?",
          choices: ['Dix-sept', 'Dix-huit', 'Vingt', 'Quinze'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the letter for the French pronunciation 'El'?",
          choices: ['L', 'K', 'F', 'U'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say the number 'fourteen' in French?",
          choices: ['Quatorze', 'Quinze', 'Seize', 'Vingt'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "What is the French word for the number 'six'?",
          choices: ['Cinq', 'Six', 'Sept', 'Huit'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the letter 'H' in French?",
          choices: ['Hache', 'Ach', 'H', 'Hechy'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the number 'nine'?",
          choices: ['Neuf', 'Huit', 'Sept', 'Cinq'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say the letter 'Q' in French?",
          choices: ['Ku', 'Ké', 'Qu', 'Ki'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the number 'fifteen'?",
          choices: ['Quatorze', 'Quinze', 'Seize', 'Dix-huit'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the letter 'H' in French?",
          choices: ['Hache', 'Ach', 'H', 'Hechy'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the letter 'Z'?",
          choices: ['Zé', 'Z', 'Éd', 'Cé'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'twenty' in French?",
          choices: ['Dix-neuf', 'Vingt', 'Vingt-et-un', 'Vingt-deux'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the number 'nine'?",
          choices: ['Huit', 'Sept', 'Neuf', 'Dix'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "How do you say the number 'six' in French?",
          choices: ['Sept', 'Cinq', 'Six', 'Quatre'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "What is the French letter for the pronunciation 'Té'?",
          choices: ['H', 'T', 'P', 'O'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'seventeen' in French?",
          choices: ['Quinze', 'Seize', 'Dix-sept', 'Dix-huit'],
          type: 'MCQs',
          correctAnswer: 3,
        },
       
        {
          "question": "'Bé' is the French letter for ______.",
          "choices": ["B", "Dé", "Cinq", "El"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 4 in French is ______.",
          "choices": ["Quatre", "Cinq", "Six", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Dé' is the French letter for ______.",
          "choices": ["D", "Bé", "El", "Gé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 6 in French is ______.",
          "choices": ["Six", "Quatre", "Huit", "Dix"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Ér' is the French pronunciation for English letter ______.",
          "choices": ["R", "Gé", "Bé", "Dé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 8 in French is ______.",
          "choices": ["Huit", "Six", "Dix", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The pronunciation 'Vé' in French is the letter ______ in English.",
          "choices": ["V", "Dé", "Ér", "Gé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 10 in French is ______.",
          "choices": ["Dix", "Onze", "Huit", "Vingt"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The pronunciation 'Gé' in French is the letter ______ in English.",
          "choices": ["G", "Vé", "Bé", "Dé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 5 in French is ______.",
          "choices": ["Cinq", "Six", "Huit", "Quatre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 9 in French is ______.",
          "choices": ["neuf", "Dix", "Quatre", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 3 in French is ______.",
          "choices": ["Trois", "Deux", "Un", "Quatre"],
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
          "question": "The letter 'L' in French is pronounced as ______.",
          "choices": ["El", "Bé", "Dé", "Ér"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 11 in French is ______.",
          "choices": ["Onze", "Dix", "Quatre", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter 'K' in French is called ______.",
          "choices": ["Ka", "Bé", "Gé", "Dé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 14 in French is ______.",
          "choices": ["Quatorze", "Onze", "Vingt", "Six"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The pronunciation 'Double vé' in French is for the letter ______.",
          "choices": ["W", "Gé", "Dé", "Bé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 20 in French is ______.",
          "choices": ["Vingt", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter 'N' in French is pronounced as ______.",
          "choices": ["En", "Ér", "El", "Dé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "DOUZE", "rightId": 1 },
              "right": { "word": "FIVE", "rightId": 4 }
            },
            {
              "left": { "word": "HUIT", "rightId": 2 },
              "right": { "word": "F", "rightId": 3 }
            },
            {
              "left": { "word": "EFFE", "rightId": 3 },
              "right": { "word": "TWELVE", "rightId": 1 }
            },
            {
              "left": { "word": "CINQ", "rightId": 4 },
              "right": { "word": "EIGHT", "rightId": 2 }
            },
            {
              "left": { "word": "QUATORZE", "rightId": 5 },
              "right": { "word": "FIFTEEN", "rightId": 8 }
            },
            {
              "left": { "word": "HACHE", "rightId": 6 },
              "right": { "word": "SEVEN", "rightId": 7 }
            },
            {
              "left": { "word": "SEPT", "rightId": 7 },
              "right": { "word": "FOURTEEN", "rightId": 5 }
            },
            {
              "left": { "word": "QUINZE", "rightId": 8 },
              "right": { "word": "H", "rightId": 6 }
            },
            {
              "left": { "word": "ÉLÉ", "rightId": 9 },
              "right": { "word": "NINE", "rightId": 10 }
            },
            {
              "left": { "word": "NEUF", "rightId": 10 },
              "right": { "word": "L", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '3',
      name: 'French Exercise - 3',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [

        {
          "question": "What is the French word for \"brain\"?",
          "choices": ["Cerveau", "Coeur", "Poumon", "Foie"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the number \"ninety-three\" in French?",
          "choices": ["Soixante-treize", "Quatre-vingt-treize", "Quatre-vingt-trois", "Quatre-vingt-dix"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the French word for \"purple\"?",
          "choices": ["Bleu", "Jaune", "Violet", "Rouge"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which of the following means \"to grow\" in French?",
          "choices": ["Grandir", "Coudre", "Cuisiner", "Dormir"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"vingt-cinq\" translate to in English?",
          "choices": ["15", "50", "25", "75"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which color is “gris” in English?",
          "choices": ["Black", "Blue", "Gray", "Green"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does \"lumière\" mean in French?",
          "choices": ["Moon", "Light", "Shadow", "Air"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"I’m thirsty\" in French?",
          "choices": ["J'ai chaud", "J'ai faim", "J'ai soif", "J'ai sommeil"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the plural of \"cheval\" in French?",
          "choices": ["Chevaux", "Chevals", "Chevauxes", "Chevail"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"étonné\" mean in English?",
          "choices": ["Angry", "Surprised", "Happy", "Scared"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the French word for \"seventy-eight\"?",
          "choices": ["Soixante-huit", "Soixante-dix-huit", "Quatre-vingt-dix-huit", "Soixante-vingt-dix"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which word means \"ear\" in French?",
          "choices": ["Nez", "Bouche", "Œil", "Oreille"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "What does \"château\" mean in French?",
          "choices": ["Forest", "Castle", "Field", "Church"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is \"eighty-five\" in French?",
          "choices": ["Quatre-vingt-quinze", "Quatre-vingt-cinq", "Soixante-cinq", "Quatre-vingt-trois"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following is the French translation of \"pink\"?",
          "choices": ["Rouge", "Rose", "Jaune", "Vert"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the meaning of \"chaleur\" in English?",
          "choices": ["Cold", "Heat", "Warm", "Humidity"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"library\" in French?",
          "choices": ["Librairie", "Bibliothèque", "Livre", "Cartable"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does \"quatre-vingt-dix-neuf\" translate to?",
          "choices": ["79", "89", "99", "109"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the French word for \"pencil\"?",
          "choices": ["Stylo", "Crayon", "Cahier", "Gomme"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of these words means \"to swim\" in French?",
          "choices": ["Nager", "Courir", "Voler", "Chanter"],
          "type": "MCQs",
          "correctAnswer": 1
        },
       
        {
          "question": "Je ______ (to be) heureux aujourd'hui.",
          "choices": ["suis", "es", "est", "sommes"],
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
          "question": "La couleur du ciel est ______ (blue).",
          "choices": ["bleu", "vert", "rouge", "jaune"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous ______ (to eat) des crêpes pour le petit déjeuner.",
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
          "question": "Ils vont ______ (to go) au cinéma ce soir.",
          "choices": ["aller", "venir", "partir", "rester"],
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
          "question": "Je ______ (to have) un examen demain.",
          "choices": ["ai", "as", "a", "avons"],
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
          "question": "Nous ______ (to read) un livre intéressant.",
          "choices": ["lisons", "lisez", "lit", "lire"],
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
          "question": "Vous ______ (to speak) français très bien.",
          "choices": ["parlez", "parle", "parlons", "parles"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La ______ (dog) de Marie est très amicale.",
          "choices": ["chienne", "chien", "animal", "bête"],
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
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Bonjour", "rightId": 1 },
              "right": { "word": "20", "rightId": 4 }
            },
            {
              "left": { "word": "Merci", "rightId": 2 },
              "right": { "word": "Red", "rightId": 3 }
            },
            {
              "left": { "word": "Rouge", "rightId": 3 },
              "right": { "word": "Thank you", "rightId": 2 }
            },
            {
              "left": { "word": "Vingt", "rightId": 4 },
              "right": { "word": "Good morning", "rightId": 1 }
            },
            {
              "left": { "word": "Chien", "rightId": 5 },
              "right": { "word": "Yes", "rightId": 8 }
            },
            {
              "left": { "word": "Comment ça va ?", "rightId": 6 },
              "right": { "word": "Please", "rightId": 7 }
            },
            {
              "left": { "word": "S'il vous plaît", "rightId": 7 },
              "right": { "word": "How are you?", "rightId": 6 }
            },
            {
              "left": { "word": "Oui", "rightId": 8 },
              "right": { "word": "Dog", "rightId": 5 }
            },
            {
              "left": { "word": "Non", "rightId": 9 },
              "right": { "word": "Goodbye", "rightId": 10 }
            },
            {
              "left": { "word": "Au revoir", "rightId": 10 },
              "right": { "word": "No", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '4',
      name: 'French Exercise - 4',
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
          "question": "What is the correct conjugation of the verb 'manger' (to eat) for 'nous'?",
          "choices": ["mange", "mangeons", "mangent", "manges"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the correct conjugation of the verb 'parler' (to speak) for 'ils'?",
          "choices": ["parlons", "Parlez", "Parlent", "Parles"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the present tense of the verb 'aller' (to go) for 'vous'?",
          "choices": ["allez", "allons", "vont", "vas"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the form of the verb 'finir' (to finish) for 'je'?",
          "choices": ["finis", "finit", "finissons", "finissez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct conjugation of the verb 'prendre' (to take) for 'elle'?",
          "choices": ["prend", "prenons", "prenez", "prennent"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the present tense of the verb 'voir' (to see) for 'nous'?",
          "choices": ["Voyons", "Voit", "Vois", "Voient"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What pronoun is used for 'they' (masculine) in French?",
          "choices": ["Ils (féminin)", "Ils (masculin)", "Vous", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'we' (feminine)?",
          "choices": ["Ils (masculin)", "Nous (féminin)", "Elles (féminin)", "Vous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'he'?",
          "choices": ["Elle", "Vous", "Il", "Nous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What pronoun is used for 'you' (informal)?",
          "choices": ["Vous (formel)", "Tu (informel)", "Il", "Elle"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'they' (feminine)?",
          "choices": ["Elles (féminin)", "Ils (masculin)", "Vous (formel)", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What pronoun is used for 'you all' (formal)?",
          "choices": ["Tu (informel)", "Vous tous (formel)", "Elles (féminin)", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'we' (masculine)?",
          "choices": ["Ils (masculin)", "Nous (masculin)", "Elles (féminin)", "Vous tous (formel)"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'I'?",
          "choices": ["Vous", "Il", "Je", "Nous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What pronoun is used for 'you' (formal, singular)?",
          "choices": ["Tu (informel)", "Vous (formel)", "Il", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'she'?",
          "choices": ["Elle", "Il", "Vous (informel)", "Nous"],
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
          "question": "Ma ______ (grandmother) habite avec nous.",
          "choices": ["grand-mère", "tante", "mère", "sœur"],
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
          "question": "______ (I) suis étudiant en français.",
          "choices": ["Je", "Il", "Elle", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (We - feminine) sommes heureuses d’être ici.",
          "choices": ["Nous", "Elles", "Vous", "Ils"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (She) est toujours en avance.",
          "choices": ["Elle", "Il", "Je", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - masculine) jouent au football.",
          "choices": ["Ils", "Nous", "Elles", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - informal) es très intelligent.",
          "choices": ["Tu", "Vous", "Elle", "Il"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - formal, singular) êtes professeur de français.",
          "choices": ["Vous", "Tu", "Elle", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - feminine) aiment voyager.",
          "choices": ["Elles", "Ils", "Nous", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You all - informal) regardez la télévision ensemble.",
          "choices": ["Vous", "Nous", "Elles", "Ils"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (He) habite en France depuis trois ans.",
          "choices": ["Il", "Elle", "Nous", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (We) parlons anglais et français.",
          "choices": ["Nous", "Ils", "Vous", "Elles"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Mère", "rightId": 1 },
              "right": { "word": "He", "rightId": 7 }
            },
            {
              "left": { "word": "Nous (féminin)", "rightId": 2 },
              "right": { "word": "You (formal, singular)", "rightId": 10 }
            },
            {
              "left": { "word": "Ils", "rightId": 3 },
              "right": { "word": "Father", "rightId": 6 }
            },
            {
              "left": { "word": "Tu", "rightId": 4 },
              "right": { "word": "She", "rightId": 9 }
            },
            {
              "left": { "word": "Sœur", "rightId": 5 },
              "right": { "word": "We (feminine)", "rightId": 2 }
            },
            {
              "left": { "word": "Père", "rightId": 6 },
              "right": { "word": "You (informal)", "rightId": 4 }
            },
            {
              "left": { "word": "Il", "rightId": 7 },
              "right": { "word": "They (masculine)", "rightId": 3 }
            },
            {
              "left": { "word": "Vous (pluriel)", "rightId": 8 },
              "right": { "word": "You all (formal)", "rightId": 8 }
            },
            {
              "left": { "word": "Elle", "rightId": 9 },
              "right": { "word": "Mother", "rightId": 1 }
            },
            {
              "left": { "word": "Vous (singulier)", "rightId": 10 },
              "right": { "word": "Sister", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '5',
      name: 'French Exercise - 5',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say 'cousin' in French (masculine)?",
          "choices": ["Frère", "Neveu", "Cousin", "Oncle"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does 'belle-mère' mean in English?",
          "choices": ["Mother-in-law", "Sister-in-law", "Stepmother", "Aunt"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the French word for 'brother-in-law'?",
          "choices": ["Gendre", "Beau-frère", "Cousin", "Neveu"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What word describes 'the daughter of your brother'?",
          "choices": ["Nièce", "Fille", "Cousine", "Tante"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct conjugation of the verb 'manger' (to eat) for 'nous'?",
          "choices": ["Mangeons", "Mangez", "Mangent", "Mange"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct form of the verb 'écrire' (to write) for 'je'?",
          "choices": ["Écris", "Écrit", "Écrivons", "Écrivez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What form of the verb 'finir' (to finish) corresponds to 'tu'?",
          "choices": ["Finis", "Finit", "Finissons", "Finissez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct form of 'prendre' (to take) for 'il'?",
          "choices": ["Prend", "Prends", "Prenons", "Prenez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you conjugate 'parler' (to speak) with 'elles'?",
          "choices": ["Parlent", "Parlons", "Parlez", "Parle"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you conjugate 'faire' (to do) for 'vous'?",
          "choices": ["Faites", "Faisons", "Fais", "Font"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the subject pronoun for 'we' in French?",
          "choices": ["Nous", "Vous", "Ils", "Elles"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the subject pronoun for 'she' in French?",
         "choices": ["Il", "Elle", "Ils", "Vous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What subject pronoun is used for 'you' (informal)?",
          "choices": ["Tu (informel)", "Vous (formel)", "Ils", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What subject pronoun corresponds to 'they' (feminine)?",
          "choices": ["Ils", "Elles", "Nous", "Vous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What subject pronoun is used for 'he' in French?",
          "choices": ["Elle", "Nous", "Il", "Vous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What subject pronoun is used for 'they' (masculine)?",
          "choices": ["Elles", "Vous", "Ils", "Nous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What subject pronoun corresponds to 'I' in French?",
          "choices": ["Il", "Je", "Tu", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What subject pronoun corresponds to 'you' (formal)?",
          "choices": ["Vous (formel)", "Tu (informel)", "Ils", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say 'thirty-five' in French?",
          "choices": ["Trente-huit", "Trente-cinq", "Quarante-cinq", "Vingt-cinq"],
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
          "question": "Mes ______ (grandparents) habitent à la campagne.",
          "choices": ["grands-parents", "oncles", "parents", "cousins"],
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
          "question": "______ (I) suis très fatigué aujourd'hui.",
          "choices": ["Je", "Tu", "Il", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - masculine) aiment jouer au football.",
          "choices": ["Ils", "Nous", "Elles", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (She) est toujours la première à répondre.",
          "choices": ["Elle", "Il", "Tu", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - formal) êtes mon professeur préféré.",
          "choices": ["Vous", "Tu", "Elle", "Il"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (We) devons partir tôt demain matin.",
          "choices": ["Nous", "Ils", "Vous", "Elles"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - feminine) habitent à Lyon.",
          "choices": ["Elles", "Ils", "Nous", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (He) ne mange pas de viande.",
          "choices": ["Il", "Elle", "Tu", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - informal) vas à la fête ce soir?",
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
          "question": "J'ai acheté ______ (thirty-one) livres cette année.",
          "choices": ["trente et un", "quarante et un", "vingt et un", "trente-deux"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Il", "rightId": 1 },
              "right": { "word": "You all (formal)", "rightId": 3 }
            },
            {
              "left": { "word": "Nous", "rightId": 2 },
              "right": { "word": "We (feminine)", "rightId": 2 }
            },
            {
              "left": { "word": "Elles", "rightId": 3 },
              "right": { "word": "They (feminine)", "rightId": 5 }
            },
            {
              "left": { "word": "Vous", "rightId": 4 },
              "right": { "word": "Forty-two", "rightId": 6 }
            },
            {
              "left": { "word": "Elles", "rightId": 5 },
              "right": { "word": "Thirty-five", "rightId": 7 }
            },
            {
              "left": { "word": "Quarante-deux", "rightId": 6 },
              "right": { "word": "He", "rightId": 1 }
            },
            {
              "left": { "word": "Trente-cinq", "rightId": 7 },
              "right": { "word": "You (formal)", "rightId": 8 }
            },
            {
              "left": { "word": "Vous", "rightId": 8 },
              "right": { "word": "You (informal)", "rightId": 4 }
            },
            {
              "left": { "word": "Elle", "rightId": 9 },
              "right": { "word": "She", "rightId": 9 }
            },
            {
              "left": { "word": "Quarante-sept", "rightId": 10 },
              "right": { "word": "Forty-seven", "rightId": 10 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '6',
      name: 'French Exercise - 6',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say 'Good morning' in French?",
          "choices": ["Bonsoir", "Bonjour", "Bonne nuit", "Salut"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Merci' mean?",
          "choices": ["Please", "Goodbye", "Thank you", "Sorry"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say 'See you later' in French?",
          "choices": ["À tout à l'heure", "Salut", "Bonsoir", "Bonne nuit"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does 'Pardon' mean?",
          "choices": ["Sorry", "Hello", "Please", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say 'Please' in French?",
          "choices": ["Merci", "S'il vous plaît", "Je suis désolé", "Salut"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Je suis désolé' mean?",
          "choices": ["Excuse me", "I'm sorry", "Hello", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'Goodbye' in French?",
          "choices": ["Bonjour", "Au revoir", "Salut", "Bonne nuit"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Bonsoir' mean?",
          "choices": ["Good afternoon", "Good evening", "Good morning", "See you tomorrow"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Ami' mean?",
          "choices": ["Friend", "Family", "Teacher", "Neighbor"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say 'House' in French?",
          "choices": ["Voiture", "Maison", "Porte", "Fenêtre"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'École' mean?",
          "choices": ["Library", "School", "Store", "Park"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'Book' in French?",
          "choices": ["Livre", "Stylo", "Table", "Chaise"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does 'Sœur' mean?",
          "choices": ["Brother", "Sister", "Mother", "Cousin"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'Car' in French?",
          "choices": ["Bicycle", "Bus", "Voiture", "Train"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does 'Frère' mean?",
          "choices": ["Father", "Brother", "Son", "Uncle"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
        "question": "How do you say 'Water' in French?",
        "choices": ["Lait", "Jus", "Eau", "Vin"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does 'Chien' mean?",
        "choices": ["Cat", "Dog", "Horse", "Rabbit"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'Thank you very much' in French?",
        "choices": ["Merci", "S'il vous plaît", "Merci beaucoup", "Je t'en prie"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does 'Rouge' mean?",
        "choices": ["Red", "Blue", "Green", "Yellow"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'I'm sorry' in French?",
        "choices": ["Je t'aime", "Je te déteste", "Tu me manques", "Je suis désolé"],
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
          "question": "Ami 2: Bonjour, ______ (I) vais bien, merci. Et toi ?",
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
          "question": "Ami 1: Alors, je te vois ______ (later).",
          "choices": ["plus tard", "ce soir", "demain", "maintenant"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: ______ (See you later)!",
          "choices": ["À plus tard", "Salut", "Bonjour", "Bonne nuit"],
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
          "question": "Ami 2: ______ (See you tomorrow)!",
          "choices": ["À demain", "À plus tard", "Bonjour", "Bonne nuit"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Chien", "rightId": 1 },
              "right": { "word": "House", "rightId": 3 }
            },
            {
              "left": { "word": "Sœur", "rightId": 2 },
              "right": { "word": "Sister", "rightId": 2 }
            },
            {
              "left": { "word": "Maison", "rightId": 3 },
              "right": { "word": "Window", "rightId": 5 }
            },
            {
              "left": { "word": "Livre", "rightId": 4 },
              "right": { "word": "Family", "rightId": 6 }
            },
            {
              "left": { "word": "Fenêtre", "rightId": 5 },
              "right": { "word": "Friend", "rightId": 7 }
            },
            {
              "left": { "word": "Famille", "rightId": 6 },
              "right": { "word": "Dog", "rightId": 1 }
            },
            {
              "left": { "word": "Ami", "rightId": 7 },
              "right": { "word": "Chair", "rightId": 8 }
            },
            {
              "left": { "word": "Chaise", "rightId": 8 },
              "right": { "word": "Book", "rightId": 4 }
            },
            {
              "left": { "word": "École", "rightId": 9 },
              "right": { "word": "Table", "rightId": 10 }
            },
            {
              "left": { "word": "Table", "rightId": 10 },
              "right": { "word": "School", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '7',
      name: 'French Exercise - 7',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say \"I am happy\" in French?",
          "choices": [ "Je suis heureux", "Je es heureux", "Tu es heureux", "Je suis triste",],
          "type": "MCQs",
          "correctAnswer": 4
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
          "question": "How do you say \"They are students\" in French?",
          "choices": ["Elles sont étudiante", "Ils sont étudiants", "Nous sommes étudiants", "Je suis étudiants"],
          "type": "MCQs",
          "correctAnswer": 1
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
          "question": "How do you say \"They are happy\" in French?",
          "choices": [ "Elles est heureuse", "Je suis heureuse", "Ils sont heureux", "Nous sont heureux"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"We are from Spain\" in French?",
          "choices": [ "Vous êtes d'Espagne", "Ils sont d'Espagne", "Nous sommes d'Espagne", "Je suis d'Espagne"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the feminine form of \"engineer\"?",
          "choices": [ "Ingénieur", "Ingénieurs", "Ingénieuses", "Ingénieure"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "How do you say \"Brazilian\" in French for a woman?",
          "choices": [ "Brésilien","Brésilienne", "Brésiliens", "Brésiliennes"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the masculine form of \"teacher\"?",
          "choices": ["Professeure", "Professeurs", "Professeur", "Professeur"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"Cuban\" in French for a man?",
          "choices": ["Cubain", "Cubaine", "Cubains", "Cubaines"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the feminine form of \"singer\"?",
          "choices": [ "Chanteurs", "Chanteuse", "Chanteuses", "Chanteur"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"Argentinian\" in French for a man?",
          "choices": ["Argentin", "Argentine", "Argentins", "Argentines"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"American\" in French?",
          "choices": [ "Américains", "Américaine", "Américain", "Américaines"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"nurse\" in French for a man?",
          "choices": [ "Infirmières", "Infirmiers", "Infirmier", "Infirmier"],
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
          "question": "How do you say \"We are students\" in French?",
          "choices": [ "Vous êtes étudiants", "Ils sont étudiants", "Je suis étudiant", "Nous sommes étudiants"],
          "type": "MCQs",
          "correctAnswer": 4
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
      "question": "Tu ______ (to have) une maison.",
      "choices": ["as", "a", "ai", "ont"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Nationalité", "rightId": 1 },
              "right": { "word": "Canadian", "rightId": 10 }
            },
            {
              "left": { "word": "Profession", "rightId": 2 },
              "right": { "word": "Doctor", "rightId": 7 }
            },
            {
              "left": { "word": "Français", "rightId": 3 },
              "right": { "word": "English", "rightId": 6 }
            },
            {
              "left": { "word": "Avocat", "rightId": 4 },
              "right": { "word": "French", "rightId": 3 }
            },
            {
              "left": { "word": "Espagnol", "rightId": 5 },
              "right": { "word": "Canadian", "rightId": 1 }
            },
            {
              "left": { "word": "Anglais", "rightId": 6 },
              "right": { "word": "Teacher", "rightId": 2 }
            },
            {
              "left": { "word": "Médecin", "rightId": 7 },
              "right": { "word": "Lawyer", "rightId": 4 }
            },
            {
              "left": { "word": "Heureux", "rightId": 8 },
              "right": { "word": "Spanish", "rightId": 5 }
            },
            {
              "left": { "word": "Italien", "rightId": 9 },
              "right": { "word": "Happy", "rightId": 8 }
            },
            {
              "left": { "word": "Canadien", "rightId": 10 },
              "right": { "word": "Italian", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '8',
      name: 'French Exercise - 8',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What does \"bureau\" mean?",
          "choices": ["Chair", "Desk", "Notebook", "Pencil"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"cahier\" mean in English?",
          "choices": ["Pen", "Notebook", "Book", "Desk"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"professeur\" mean?",
          "choices": ["Student", "Teacher", "Classmate", "Principal"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say \"window\" in French?",
          "choices": ["Porte", "Bureau", "Fenêtre", "Mur"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"stylo\" mean?",
          "choices": ["Pencil", "Paper", "Pen", "Book"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"devoir\" mean?",
          "choices": ["Homework", "Exam", "Lesson", "Notebook"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"salle de classe\" mean?",
          "choices": ["Classroom", "Library", "Cafeteria", "Playground"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"école\" mean?",
          "choices": ["School", "College", "University", "Institute"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"S'il te plaît\" mean?",
          "choices": ["Excuse me", "Please", "Thank you", "I'm sorry"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"Merci\" mean?",
          "choices": ["Sorry", "Please", "Thank you", "Excuse me"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say \"I don’t understand\" in French?",
          "choices": ["Je suis désolé", "Je comprends", "Je ne comprends pas", "Excuse-moi"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"Je suis désolé\" mean?",
          "choices": ["I'm sorry", "I don't know", "I'm happy", "I'm sad"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say \"Excuse me\" in French?",
          "choices": ["Merci", "S'il te plaît", "Excuse-moi", "Je suis désolé"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"Bonjour\" mean?",
          "choices": ["Goodbye", "Good night", "Hello", "Good morning"],
          "type": "MCQs",
          "correctAnswer": 4
      },
      {
          "question": "What does \"Où est la salle de classe?\" mean?",
          "choices": ["Where is the classroom?", "What is the homework?", "How are you?", "When is the exam?"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"Puis-je aller aux toilettes?\" mean?",
          "choices": ["Can I go to the library?", "Can I go to the bathroom?", "Can I go home?", "Can I go to class?"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What day is today? (If today is Thursday)",
          "choices": ["Lundi", "Mardi", "Jeudi", "Vendredi"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say \"February\" in French?",
          "choices": ["Janvier", "Mars", "Février", "Avril"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "Which season follows summer?",
          "choices": ["Printemps", "Automne", "Hiver", "Été"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"Il fait chaud\" mean?",
          "choices": ["It's cold", "It's warm", "It's hot", "It's rainy"],
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
          "question": "______ (Please) passe-moi le livre.",
          "choices": ["S'il te plaît", "Merci", "Bonjour", "Excuse-moi"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (Thank you) pour ton aide.",
          "choices": ["Merci", "S'il te plaît", "Bonjour", "Excuse-moi"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (Excuse me) j'ai une question.",
          "choices": ["Excuse-moi", "S'il te plaît", "Merci", "Bonjour"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (I don't understand) la phrase.",
          "choices": ["Je ne comprends pas", "Merci", "S'il te plaît", "Bonjour"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (I'm sorry) d'être en retard.",
          "choices": ["Je suis désolé", "Excuse-moi", "Merci", "Bonjour"],
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
          "question": "______ (The) livre est sur la table.",
          "choices": ["Le", "La", "Un", "Les"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (A) chat est mignon.",
          "choices": ["Un", "Le", "La", "Les"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (The) fleurs sont belles.",
          "choices": ["Les", "Le", "Un", "Une"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (An) élève a oublié son livre.",
          "choices": ["Un", "Une", "Le", "La"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (The) porte est fermée.",
          "choices": ["La", "Le", "Les", "Un"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Un livre", "rightId": 1 },
              "right": { "word": "To write", "rightId": 3 }
            },
            {
              "left": { "word": "Une craie", "rightId": 2 },
              "right": { "word": "To read", "rightId": 7 }
            },
            {
              "left": { "word": "Un tableau", "rightId": 3 },
              "right": { "word": "A teacher", "rightId": 6 }
            },
            {
              "left": { "word": "Un étudiant", "rightId": 4 },
              "right": { "word": "Notebook", "rightId": 10 }
            },
            {
              "left": { "word": "Une règle", "rightId": 5 },
              "right": { "word": "A book", "rightId": 1 }
            },
            {
              "left": { "word": "Un professeur", "rightId": 6 },
              "right": { "word": "Chalk", "rightId": 2 }
            },
            {
              "left": { "word": "Une feuille de papier", "rightId": 7 },
              "right": { "word": "Student", "rightId": 4 }
            },
            {
              "left": { "word": "Écrire", "rightId": 8 },
              "right": { "word": "To draw", "rightId": 9 }
            },
            {
              "left": { "word": "Lire", "rightId": 9 },
              "right": { "word": "To write", "rightId": 8 }
            },
            {
              "left": { "word": "Dessiner", "rightId": 10 },
              "right": { "word": "A sheet of paper", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '9',
      name: 'French Exercise - 9',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What does 'anniversaire' mean in English?",
          "choices": ["Anniversary", "Party", "Birthday", "Celebration"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "If you were born on May 10, your zodiac sign is...",
          "choices": ["Gémeaux", "Taureau", "Bélier", "Vierge"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'party' in French?",
          "choices": ["Anniversaire", "Fête", "Soirée", "Célébration"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What is the zodiac sign of someone born in July?",
          "choices": ["Bélier", "Lion", "Cancer", "Balance"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "If your sign is 'Sagittarius', you were born in...",
          "choices": ["Décembre", "Mars", "Juin", "Avril"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "Which verb means 'célébrer' in English?",
          "choices": ["To celebrate", "To turn", "To complete", "To have"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What zodiac sign corresponds to a person born on January 22?",
          "choices": ["Capricorne", "Verseau", "Scorpion", "Poissons"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "If you were born on April 18, you are...",
          "choices": ["Bélier", "Taureau", "Sagittaire", "Balance"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does the verb 'avoir' mean?",
          "choices": ["To be", "To have", "To make", "To go"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What is the correct conjugation of the verb 'être' for 'je'?",
          "choices": ["Suis", "Es", "Sommes", "Sont"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What pronoun is correct for 'we' in French?",
          "choices": ["Ils", "Tu", "Nous", "Vous"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say 'I am' in French?",
          "choices": ["Je suis", "Tu es", "Nous sommes", "Ils sont"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What verb completes this sentence: 'Nous ______ (have) un chien.'?",
          "choices": ["As", "Avez", "Avons", "Ont"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you conjugate the verb 'écrire' for 'tu'?",
          "choices": ["Écris", "Écrit", "Écrivez", "Écrivons"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does the verb 'écrire' mean?",
          "choices": ["To read", "To write", "To listen", "To watch"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'fifty' in French?",
          "choices": ["Quarante", "Cinquante", "Soixante", "Vingt"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What number follows 'soixante-dix-neuf'?",
          "choices": ["Quatre-vingts", "Soixante", "Cinquante", "Quatre-vingt-dix"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say 'thirty-five' in French?",
          "choices": ["Vingt-cinq", "Quarante-cinq", "Trente-cinq", "Cinquante-cinq"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say 'one hundred' in French?",
          "choices": ["Cent", "Mille", "Dix", "Cinq"],
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
        "question": "Ma mère est ______ (Aquarius), née en février.",
        "choices": ["Verseau","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Taurus) est le signe de mon frère.",
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
        "question": "Leurs ______ (parents) sont très gentils.",
        "choices": ["parents","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Anniversaire", "rightId": 1 },
              "right": { "word": "To write", "rightId": 3 }
            },
            {
              "left": { "word": "Cancer", "rightId": 2 },
              "right": { "word": "To have", "rightId": 7 }
            },
            {
              "left": { "word": "Écrire", "rightId": 3 },
              "right": { "word": "Mother", "rightId": 6 }
            },
            {
              "left": { "word": "Frère", "rightId": 4 },
              "right": { "word": "Father", "rightId": 10 }
            },
            {
              "left": { "word": "Nous avons", "rightId": 5 },
              "right": { "word": "Birthday", "rightId": 1 }
            },
            {
              "left": { "word": "Mère", "rightId": 6 },
              "right": { "word": "Cancer", "rightId": 2 }
            },
            {
              "left": { "word": "Parler", "rightId": 7 },
              "right": { "word": "Brother", "rightId": 4 }
            },
            {
              "left": { "word": "École", "rightId": 8 },
              "right": { "word": "Student", "rightId": 9 }
            },
            {
              "left": { "word": "Élève", "rightId": 9 },
              "right": { "word": "School", "rightId": 8 }
            },
            {
              "left": { "word": "Père", "rightId": 10 },
              "right": { "word": "We have", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
]