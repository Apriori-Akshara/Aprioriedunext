export const quiz = [
  {
    quiz: '1',
    name: 'German Exercise - 1',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        question: "What is the German word for 'friend'?",
        choices: ['Freund', 'Familie', 'Arbeiter', 'Kollege'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I am hungry' in German?",
        choices: ['Ich bin müde', 'Ich habe Hunger', 'Ich habe Durst', 'Ich bin voll'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What does 'Sprechen Sie Englisch?' mean?",
        choices: ['Do you speak English?', 'Where are you?', 'How are you?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How would you say 'Excuse me' in German?",
        choices: ['Entschuldigung', 'Danke', 'Bitte', 'Guten Tag'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Ich verstehe nicht' mean?",
        choices: ['I don’t understand', 'I am tired', 'I am fine', 'I am lost'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'goodbye' in German?",
        choices: ['Guten Abend', 'Gute Nacht', 'Tschüss', 'Guten Morgen'],
        type: 'MCQs',
        correctAnswer: 3
      },
      {
        question: "What does 'Wie viel kostet das?' mean?",
        choices: ['How much does it cost?', 'Where is it?', 'How are you?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I would like' in German?",
        choices: ['Ich möchte', 'Ich liebe', 'Ich brauche', 'Ich kann'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What is the German word for 'house'?",
        choices: ['Haus', 'Auto', 'Stuhl', 'Buch'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "Which of the following means 'good afternoon' in German?",
        choices: ['Guten Abend', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'],
        type: 'MCQs',
        correctAnswer: 3
      },
      {
        question: "How do you say 'I am lost' in German?",
        choices: ['Ich bin müde', 'Ich bin verloren', 'Ich bin hungrig', 'Ich bin krank'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What does 'Wie geht es Ihnen?' mean?",
        choices: ['How are you?', 'Where are you?', 'What is it?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'please' in German?",
        choices: ['Bitte', 'Entschuldigung', 'Danke', 'Hallo'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What is the German word for 'book'?",
        choices: ['Buch', 'Haus', 'Stuhl', 'Auto'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'see you soon' in German?",
        choices: ['Bis bald', 'Gute Nacht', 'Guten Morgen', 'Guten Abend'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Ich hätte gerne' mean?",
        choices: ['I would like', 'I need', 'I am happy', 'I am sad'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I don’t know' in German?",
        choices: ['Ich weiß nicht', 'Ich verstehe', 'Ich habe', 'Ich will'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Könnten Sie das bitte wiederholen?' mean?",
        choices: ['Could you please repeat that?', 'Where are you?', 'How much is this?', 'Can I help you?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How would you say 'goodbye' formally in German?",
        choices: ['Tschüss', 'Auf Wiedersehen', 'Guten Tag', 'Bis bald'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What is the German word for 'apple'?",
        choices: ['Apfel', 'Banane', 'Orange', 'Traube'],
        type: 'MCQs',
        correctAnswer: 1
      },

      // 20 Fill in the Blanks
      {
        question: "Wir ______ Kaffee. (We drink coffee.)",
        choices: ['trinken', 'essen', 'lesen', 'schlafen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ ein Auto. (He has a car.)",
        choices: ['hat', 'geht', 'trinkt', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Du ______ Englisch. (You speak English.)",
        choices: ['sprichst', 'isst', 'gehst', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ in Berlin. (We live in Berlin.)",
        choices: ['wohnen', 'gehen', 'sehen', 'essen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ eine E-Mail. (I write an email.)",
        choices: ['schreibe', 'lese', 'höre', 'trinke'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ eine Tasse Tee. (She drinks a cup of tea.)",
        choices: ['trinkt', 'schreibt', 'geht', 'schläft'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ im Park. (He walks in the park.)",
        choices: ['geht', 'trinkt', 'isst', 'schläft'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ Musik. (We listen to music.)",
        choices: ['hören', 'lesen', 'essen', 'sehen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ gerne Filme. (I like watching movies.)",
        choices: ['sehe', 'höre', 'lese', 'esse'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ einen Apfel. (She eats an apple.)",
        choices: ['isst', 'geht', 'trinkt', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ in der Bibliothek. (He studies in the library.)",
        choices: ['lernt', 'geht', 'trinkt', 'isst'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ eine Tasse Kaffee. (I drink a cup of coffee.)",
        choices: ['trinke', 'schreibe', 'lese', 'höre'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ in einem Restaurant. (They eat in a restaurant.)",
        choices: ['essen', 'gehen', 'sehen', 'schreiben'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ ein Geschenk. (He buys a gift.)",
        choices: ['kauft', 'schreibt', 'liest', 'trinkt'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ einen Film. (We watch a movie.)",
        choices: ['sehen', 'lesen', 'essen', 'trinken'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ auf der Couch. (I sit on the couch.)",
        choices: ['sitze', 'liege', 'gehe', 'schreibe'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ einen Hund. (He has a dog.)",
        choices: ['hat', 'geht', 'trinkt', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ am Wochenende. (We relax on the weekend.)",
        choices: ['entspannen', 'lesen', 'sehen', 'essen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ einen Film im Kino. (They watch a movie in the cinema.)",
        choices: ['sehen', 'essen', 'trinken', 'schreiben'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ einen Brief. (I write a letter.)",
        choices: ['schreibe', 'sehe', 'höre', 'lese'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
  "pairs": [
    {
      "left": { "word": "Hund", "rightId": 1 },
      "right": { "word": "Mäuse", "rightId": 4 }
    },
    {
      "left": { "word": "Katze", "rightId": 2 },
      "right": { "word": "Häuser", "rightId": 3 }
    },
    {
      "left": { "word": "Haus", "rightId": 3 },
      "right": { "word": "Autos", "rightId": 5 }
    },
    {
      "left": { "word": "Maus", "rightId": 4 },
      "right": { "word": "Hunde", "rightId": 1 }
    },
    {
      "left": { "word": "Auto", "rightId": 5 },
      "right": { "word": "Katzen", "rightId": 2 }
    },
    {
      "left": { "word": "Baum", "rightId": 6 },
      "right": { "word": "Kinder", "rightId": 8 }
    },
    {
      "left": { "word": "Blume", "rightId": 7 },
      "right": { "word": "Stühle", "rightId": 10 }
    },
    {
      "left": { "word": "Kind", "rightId": 8 },
      "right": { "word": "Bäume", "rightId": 6 }
    },
    {
      "left": { "word": "Tisch", "rightId": 9 },
      "right": { "word": "Blumen", "rightId": 7 }
    },
    {
      "left": { "word": "Stuhl", "rightId": 10 },
      "right": { "word": "Tische", "rightId": 9 }
    }
  ]
}

    ]
  },
  {
    quiz: '2',
    name: 'German Exercise - 2',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What is the German word for 'three'?",
        "choices": ["Eins", "Zwei", "Drei", "Vier"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'seven' in German?",
        "choices": ["Sechs", "Sieben", "Acht", "Neun"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'twelve' in German?",
        "choices": ["Zehn", "Elf", "Zwölf", "Dreizehn"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'eighteen' in German?",
        "choices": ["Seventeen", "Siebzehn", "Achtzehn", "Neunzehn"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'fourteen' in German?",
        "choices": ["Vierzehn", "Fünfzehn", "Sechzehn", "Siebenzehn"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the German word for 'six'?",
        "choices": ["Fünf", "Sechs", "Sieben", "Acht"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for 'nine'?",
        "choices": ["Acht", "Sieben", "Neun", "Sechs"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the German word for 'fifteen'?",
        "choices": ["Vierzehn", "Fünfzehn", "Sechzehn", "Achtzehn"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'twenty' in German?",
        "choices": ["Zehn", "Zwanzig", "Dreißig", "Viertzig"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for 'nine'?",
        "choices": ["Acht", "Sieben", "Neun", "Zehn"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'six' in German?",
        "choices": ["Fünf", "Sechs", "Sieben", "Acht"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'seventeen' in German?",
        "choices": ["Fünfzehn", "Sechzehn", "Siebzehn", "Achtzehn"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the first letter of the German alphabet?",
        "choices": ["B", "Z", "A", "C"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which letter comes after 'C' in the German alphabet?",
        "choices": ["D", "F", "E", "G"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which special character is unique to the German alphabet and represents a double 's'?",
        "choices": ["Ö", "ß", "Ü", "Ä"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these letters does not traditionally belong to the German alphabet but is used in borrowed words?",
        "choices": ["X", "Q", "Y", "W"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the 10th letter of the German alphabet?",
        "choices": ["H", "I", "J", "K"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is the last letter of the German alphabet?",
        "choices": ["W", "Z", "T", "Y"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following letters includes an umlaut in the German alphabet?",
        "choices": ["Ä", "ß", "Z", "R"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which letter comes right before 'P' in the German alphabet?",
        "choices": ["O", "M", "N", "L"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "'Seven' in German is ______.",
        "choices": ["Sieben", "Sieeben", "Neun", "Drei"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Nine' in German is ______.",
        "choices": ["Neun", "Sechzehn", "Neeun", "Zwanzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'One' in German is ______.",
        "choices": ["Eins", "Sieben", "Drei", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Three' in German is ______.",
        "choices": ["Drei", "Sechzehn", "e", "Vier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Twenty' in German is ______.",
        "choices": ["Zwanzig", "e", "Dreizehn", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Four' in German is ______.",
        "choices": ["Vier", "Neun", "Dreizehn", "Sechzehn"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Eleven' in German is ______.",
        "choices": ["Elf", "Sechzehn", "Neun", "Vier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Thirteen' in German is ______.",
        "choices": ["Dreizehn", "Vier", "Eins", "Zwanzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Sixteen' in German is ______.",
        "choices": ["Sechzehn", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Twelve' in German is ______.",
        "choices": ["zwölf", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Fifteen' in German is ______.",
        "choices": ["Fünfzehn", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Nineteen' in German is ______.",
        "choices": ["Neunzehn", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Eighteen' in German is ______.",
        "choices": ["Achtzehn", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Eight' in German is ______.",
        "choices": ["Acht", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 5th letter of the German alphabet is ______.",
        "choices": ["E", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter that comes before 'N' in the German alphabet is ______.",
        "choices": ["M", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 20th letter of the German alphabet is ______.",
        "choices": ["T", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "In the German alphabet, the letter ______ comes after 'S'.",
        "choices": ["T", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 23rd letter of the German alphabet is ______.",
        "choices": ["X", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter ______ comes after 'P' in the German alphabet.",
        "choices": ["Q", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
  "pairs": [
    {
      "left": { "word": "ZWÖLF", "rightId": 1 },
      "right": { "word": "NINE", "rightId": 5 }
    },
    {
      "left": { "word": "DREI", "rightId": 2 },
      "right": { "word": "FIVE", "rightId": 4 }
    },
    {
      "left": { "word": "SIEBEN", "rightId": 3 },
      "right": { "word": "SEVEN", "rightId": 3 }
    },
    {
      "left": { "word": "FÜNF", "rightId": 4 },
      "right": { "word": "THREE", "rightId": 2 }
    },
    {
      "left": { "word": "NEUN", "rightId": 5 },
      "right": { "word": "TWELVE", "rightId": 1 }
    },
    {
      "left": { "word": "VIER", "rightId": 6 },
      "right": { "word": "EIGHT", "rightId": 7 }
    },
    {
      "left": { "word": "ACHT", "rightId": 7 },
      "right": { "word": "TWO", "rightId": 8 }
    },
    {
      "left": { "word": "ZWEI", "rightId": 8 },
      "right": { "word": "TEN", "rightId": 9 }
    },
    {
      "left": { "word": "ZEHN", "rightId": 9 },
      "right": { "word": "NINETEEN", "rightId": 10 }
    },
    {
      "left": { "word": "NEUNZEHN", "rightId": 10 },
      "right": { "word": "FOUR", "rightId": 6 }
    }
  ]
}

    ]
  },
  {
    quiz: '3',
    name: 'German Exercise - 3',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What is the German word for \"school\"?",
        "choices": ["Haus", "Schule", "Bibliothek", "Büro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"fünf\" mean in English?",
        "choices": ["Five", "Six", "Seven", "Eight"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which color is “gelb” in English?",
        "choices": ["Green", "Yellow", "Blue", "Black"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for \"friend\"?",
        "choices": ["Feind", "Freund", "Begleiter", "Lehrer"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"dreißig\" mean in English?",
        "choices": ["Twenty", "Thirty", "Forty", "Fifty"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to write\" in German?",
        "choices": ["Lesen", "Schreiben", "Sprechen", "Spielen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"traurig\"?",
        "choices": ["Happy", "Sad", "Angry", "Excited"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"sechzig\" in English?",
        "choices": ["Sixty", "Seventy", "Eighty", "Ninety"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"food\" in German?",
        "choices": ["Wasser", "Essen", "Suppe", "Obst"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"willkommen\" mean?",
        "choices": ["Goodbye", "Welcome", "Thank you", "Please"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for \"family\"?",
        "choices": ["Haus", "Familie", "Gruppe", "Gemeinschaft"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"acht\" mean in English?",
        "choices": ["Six", "Eight", "Ten", "Twelve"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to listen\" in German?",
        "choices": ["Sehen", "Hören", "Sprechen", "Spielen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"glücklich\"?",
        "choices": ["Happy", "Busy", "Tired", "Sad"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"schnee\" mean in English?",
        "choices": ["Snow", "Rain", "Wind", "Sun"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"city\" in German?",
        "choices": ["Dorf", "Stadt", "Land", "Gemeinde"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"fünfzehn\" in English?",
        "choices": ["Twelve", "Thirteen", "Fourteen", "Fifteen"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What does \"waschen\" mean?",
        "choices": ["To cook", "To clean", "To dance", "To run"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for \"teacher\"?",
        "choices": ["Schüler", "Lehrer", "Freund", "Autor"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"gesundheit\" mean?",
        "choices": ["Health", "Love", "Happiness", "Money"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Der Himmel ist ______ (gray) heute.",
        "choices": ["grau", "blau", "schwarz", "weiß"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich habe ______ (three) Katzen.",
        "choices": ["drei", "zwei", "e", "vier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich gehe zum Laden, um ______ (to buy) Brot.",
        "choices": ["kaufen", "essen", "trinken", "sehen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Lieblingsfarbe ist ______ (yellow).",
        "choices": ["blau", "e", "gelb", "grün"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Kinder ______ (to play) im Park.",
        "choices": ["spielen", "singen", "tanzen", "essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du hast ______ (four) Bücher in deiner Tasche.",
        "choices": ["vier", "e", "fünf", "sechs"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich liebe es, ______ (to dance).",
        "choices": ["zu tanzen", "zu singen", "zu spielen", "zu lernen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die ______ (color) ihres Kleides ist rosa.",
        "choices": ["Farbe", "Schuhe", "Tasche", "Hut"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wo ist mein ______ (phone)?",
        "choices": ["Telefon", "Buch", "Tisch", "Stuhl"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich werde einen Film ______ (to watch) heute Abend.",
        "choices": ["ansehen", "lesen", "essen", "spielen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Zug fährt um ______ (five) Uhr nachmittags ab.",
        "choices": ["fünf", "e", "sechs", "drei"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Freunde sind sehr ______ (funny).",
        "choices": ["lustig", "traurig", "langweilig", "ernst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Obst, das ich am meisten mag, ist die ______ (banana).",
        "choices": ["Banane", "Apfel", "Orange", "Traube"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich muss für die Prüfung ______ (to study).",
        "choices": ["lernen", "spielen", "essen", "trinken"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Haus hat ______ (ten) Fenster.",
        "choices": ["zehn", "neun", "e", "elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich fühle mich ______ (tired) nach der Arbeit.",
        "choices": ["müde", "wach", "aktiv", "fit"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das ______ (weather) ist im Frühling sehr angenehm.",
        "choices": ["Wetter", "Jahr", "Tag", "Monat"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Buch liegt auf dem ______ (table).",
        "choices": ["Tisch", "Stuhl", "Boden", "Regal"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Schwester ist ______ (eight) Jahre alt.",
        "choices": ["acht", "sieben", "e", "neun"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es ist wichtig, sich ______ (to rest) nach dem Sport.",
        "choices": ["auszuruhen", "zu lernen", "zu spielen", "zu essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "guten morgen", "rightId": 1 },
      "right": { "word": "health", "rightId": 10 }

    },
    {
      "left": { "word": "bitte", "rightId": 2 },
      "right": { "word": "thank you", "rightId": 2 }

    },
    {
      "left": { "word": "blau", "rightId": 3 },
      "right": { "word": "cat", "rightId": 5 }
      
    },
    {
      "left": { "word": "fünfzig", "rightId": 4 },
      "right": { "word": "good morning", "rightId": 1 }
      
    },
    {
      "left": { "word": "katze", "rightId": 5 },
      "right": { "word": "blue", "rightId": 3 }

    },
    {
      "left": { "word": "wie geht's?", "rightId": 6 },
      "right": { "word": "fifty", "rightId": 4 }
      
    },
    {
      "left": { "word": "bis morgen", "rightId": 7 },
      "right": { "word": "no", "rightId": 9 }
      
    },
    {
      "left": { "word": "ja", "rightId": 8 },
      "right": { "word": "how's it going?", "rightId": 6 }
      
    },
    {
      "left": { "word": "nein", "rightId": 9 },
      "right": { "word": "see you tomorrow", "rightId": 7 }
      
    },
    {
      "left": { "word": "gesundheit", "rightId": 10 },
      "right": { "word": "yes", "rightId": 8 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '4',
    name: 'German Exercise - 4',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say 'uncle' in German?",
        "choices": ["Vater", "Onkel", "Bruder", "Opa"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the German word for 'daughter'?",
        "choices": ["Tochter", "Schwester", "Cousine", "Tante"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What do you call your mother's brother?",
        "choices": ["Cousin", "Großvater", "Onkel", "Neffe"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the word for 'grandson' in German?",
        "choices": ["Sohn", "Enkel", "Neffe", "Bruder"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the correct conjugation of the verb 'essen' (to eat) for 'we'?",
        "choices": ["Esse", "Esst", "Essen", "Isst"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct conjugation of the verb 'sprechen' (to speak) for 'they'?",
        "choices": ["Spreche", "Spricht", "Sprechen", "Sprecht"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct form of the verb 'gehen' (to go) for 'you all'?",
        "choices": ["Geht", "Gehst", "Gehen", "Gehts"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the correct form of the verb 'lesen' (to read) for 'he'?",
        "choices": ["Lese", "Liest", "Lesen", "Lest"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the conjugation of the verb 'schreiben' (to write) for 'you' (informal)?",
        "choices": ["Schreibe", "Schreibt", "Schreibst", "Schreiben"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct conjugation of the verb 'fahren' (to drive) for 'she'?",
        "choices": ["Fährt", "Fahre", "Fahren", "Fahrt"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'they' (masculine) in German?",
        "choices": ["Sie", "Ihr", "Er", "Du"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'we' in German?",
        "choices": ["Ihr", "Sie", "Wir", "Du"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "Which pronoun is used for 'he' in German?",
        "choices": ["Er", "Sie", "Wir", "Ihr"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'you' (informal) in German?",
        "choices": ["Sie", "Du", "Er", "Wir"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'they' (feminine) in German?",
        "choices": ["Sie", "Ihr", "Du", "Er"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'you all' (informal) in German?",
        "choices": ["Wir", "Ihr", "Sie", "Du"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'I' in German?",
        "choices": ["Du", "Er", "Ich", "Sie"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "Which pronoun is used for 'you' (formal) in German?",
        "choices": ["Sie", "Er", "Du", "Ihr"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'we' (feminine) in German?",
        "choices": ["Sie", "Wir", "Ihr", "Du"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'she' in German?",
        "choices": ["Sie", "Er", "Ihr", "Du"],
        "type": "MCQs",
        "correctAnswer": 1
    },

      // 20 Fill in the Blanks
      {
        "question": "Mein ______ (father) arbeitet in Berlin.",
        "choices": ["Vater", "Bruder", "Sohn", "Onkel"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine ______ (grandmother) besucht uns oft.",
        "choices": ["Großmutter", "Tante", "Mutter", "Schwester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er hat einen ______ (son) und zwei Töchter.",
        "choices": ["Sohn", "Bruder", "Cousin", "Neffe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich gehe am Wochenende zu meiner ______ (aunt).",
        "choices": ["Tante", "Cousine", "Mutter", "Schwester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (to eat) immer Brot zum Frühstück.",
        "choices": ["isst", "trinkst", "liest", "schreibst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (to go) oft ins Kino.",
        "choices": ["gehen", "essen", "lesen", "trinken"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er ______ (to read) jeden Abend ein Buch.",
        "choices": ["liest", "schreibt", "redet", "trinkt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr ______ (to speak) Deutsch sehr gut.",
        "choices": ["sprecht", "reden", "lesen", "essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ______ (to finish) ihre Arbeit bald.",
        "choices": ["beendet", "isst", "liest", "redet"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (to drink) jeden Tag Wasser.",
        "choices": ["trinke", "esse", "gehe", "schreibe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (I) bin Schüler.",
        "choices": ["Ich", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We) sind froh, hier zu sein.",
        "choices": ["Wir", "Sie", "Ihr", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (She) kommt aus Deutschland.",
        "choices": ["Sie", "Er", "Ich", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (They - masculine) spielen Fußball.",
        "choices": ["Sie", "Wir", "Ihr", "Euch"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You - informal) bist sehr nett.",
        "choices": ["Du", "Sie", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You - formal) sind Lehrer.",
        "choices": ["Sie", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (They - feminine) gehen einkaufen.",
        "choices": ["Sie", "Ihr", "Wir", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You all - informal) habt Zeit, oder?",
        "choices": ["Ihr", "Du", "Sie", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (He) wohnt in München.",
        "choices": ["Er", "Sie", "Du", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We) lernen Deutsch.",
        "choices": ["Wir", "Ihr", "Sie", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },      
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Mutter", "rightId": 1 },
      "right": { "word": "He", "rightId": 7 }

    },
    {
      "left": { "word": "Wir (feminine)", "rightId": 2 },
      "right": { "word": "You (formal, singular)", "rightId": 10 }

    },
    {
      "left": { "word": "Sie (plural)", "rightId": 3 },
      "right": { "word": "Father", "rightId": 6 }
      
    },
    {
      "left": { "word": "Du", "rightId": 4 },
      "right": { "word": "She", "rightId": 9 }
      
    },
    {
      "left": { "word": "Schwester", "rightId": 5 },
      "right": { "word": "We (feminine)", "rightId": 2 }

    },
    {
      "left": { "word": "Vater", "rightId": 6 },
      "right": { "word": "You (informal)", "rightId": 4 }
      
    },
    {
      "left": { "word": "Er", "rightId": 7 },
      "right": { "word": "They (plural)", "rightId": 3 }
      
    },
    {
      "left": { "word": "Ihr", "rightId": 8 },
      "right": { "word": "You all (informal)", "rightId": 8 }
      
    },
    {
      "left": { "word": "Sie (singular, feminine)", "rightId": 9 },
      "right": { "word": "Mother", "rightId": 1 }
      
    },
    {
      "left": { "word": "Sie (formal, singular)", "rightId": 10 },
      "right": { "word": "Sister", "rightId": 5 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '5',
    name: 'German Exercise - 5',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say \"sister\" in German?",
        "choices": ["Bruder", "Schwester", "Onkel", "Tante"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Cousin\" mean in English?",
        "choices": ["Onkel", "Cousin", "Bruder", "Neffe"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the German term for \"grandmother\"?",
        "choices": ["Großvater", "Tante", "Großmutter", "Schwester"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the English word for \"Nichte\"?",
        "choices": ["Neffe", "Nichte", "Cousin", "Tante"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate \"gehen\" (to go) for \"wir\"?",
        "choices": ["Gehst", "Gehe", "Gehen", "Geht"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the form of \"sehen\" (to see) for \"du\"?",
        "choices": ["Siehst", "Seht", "Sehen", "Sehe"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you conjugate \"essen\" (to eat) for \"sie\" (feminine)?",
        "choices": ["Isst", "Essen", "Essst", "Isst"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the correct form of \"lernen\" (to learn) for \"ihr\"?",
        "choices": ["Lerne", "Lernt", "Lernen", "Lerns"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"to speak\" in the first person singular?",
        "choices": ["Sprichst", "Spreche", "Sprechen", "Spricht"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate \"trinken\" (to drink) for \"sie\" (plural)?",
        "choices": ["Trinkt", "Trinke", "Trinken", "Trinkst"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the pronoun for \"we\" in German?",
        "choices": ["Wir", "Sie", "Du", "Ich"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for \"you\" (formal)?",
        "choices": ["Du", "Sie", "Ihr", "Er"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for \"he\"?",
        "choices": ["Sie", "Er", "Wir", "Ich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun do we use for \"they\" (feminine)?",
        "choices": ["Er", "Sie", "Du", "Ich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for \"I\"?",
        "choices": ["Ich", "Du", "Er", "Sie"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"thirty-five\" in German?",
        "choices": ["fünfunddreißig", "dreißig", "vierzig", "zwanzig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"forty-two\" in German?",
        "choices": ["zweiundvierzig", "dreißig", "vierzig", "fünfzig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
      "question": 'How do you say "aunt" in German?',
      "choices": ["Tante", "Mutter", "Schwester", "Cousine"],
      "type": "MCQs",
      "correctAnswer": 1
  },
  {
    "question": 'What is the German word for "uncle"?',
    "choices": ["Bruder", "Onkel", "Vater", "Großvater"],
    "type": "MCQs",
    "correctAnswer": 2
},
{
  "question": 'How do you conjugate "sprechen" (to speak) for "wir"?',
  "choices": ["Sprichst", "Sprechen", "Spricht", "Spreche"],
  "type": "MCQs",
  "correctAnswer": 2
},

      // 20 Fill in the Blanks
      {
        "question": "Mein ______ (brother) spielt Fußball.",
        "choices": ["Bruder", "Schwester", "Onkel", "Großeltern"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Die ______ (sister) von Anna ist sehr nett.",
        "choices": ["Schwester", "Schwester1", "Onkel", "Großeltern"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein ______ (uncle) wohnt in Berlin.",
        "choices": ["Onkel", "Schwester", "Onkel1", "Großeltern"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Die ______ (grandparents) kommen zu Besuch.",
        "choices": ["Großeltern", "Schwester", "Onkel", "Großelternew"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (to read) ein interessantes Buch.",
        "choices": ["lese", "les", "liest", "lesen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ______ (to eat) gern Pizza.",
        "choices": ["isst", "esse", "isst", "essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (to go) morgen ins Kino.",
        "choices": ["gehen", "geht", "gehe", "gehst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (to speak) sehr gut Deutsch.",
        "choices": ["sprichst", "spreche", "spricht", "sprechen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (to take) den Bus zur Schule.",
        "choices": ["nimmt", "nehmt", "nimmte", "nehmen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ihr ______ (to learn) schnell.",
        "choices": ["lernt", "lernst", "lernte", "lernen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I) habe keine Zeit.",
        "choices": ["Ich", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - informal) bist mein Freund.",
        "choices": ["Du", "Ich", "Er", "Sie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - masculine) spielen im Park.",
        "choices": ["Sie", "Wir", "Du", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (We) gehen heute Abend essen.",
        "choices": ["Wir", "Du", "Er", "Sie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (She) ist sehr fleißig.",
        "choices": ["Sie", "Er", "Wir", "Du"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - formal) sind herzlich willkommen.",
        "choices": ["Sie", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (He) mag Musik.",
        "choices": ["Er", "Sie", "Wir", "Du"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - feminine) fahren nach Hamburg.",
        "choices": ["Sie", "Wir", "Du", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich habe ______ (twenty) Äpfel gekauft.",
        "choices": ["zwanzig", "zwanzige", "dreißig", "vierzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein Bruder ist ______ (forty) Jahre alt.",
        "choices": ["vierzig", "vierzige", "fünfzig", "dreißig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },   
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich", "rightId": 1 },
      "right": { "word": "Thirty", "rightId": 10 }

    },
    {
      "left": { "word": "Sie (formal)", "rightId": 2 },
      "right": { "word": "They (feminine)", "rightId": 9 }

    },
    {
      "left": { "word": "Er", "rightId": 3 },
      "right": { "word": "You (informal)", "rightId": 8 }
      
    },
    {
      "left": { "word": "Wir", "rightId": 4 },
      "right": { "word": "Thirty-five", "rightId": 7 }
      
    },
    {
      "left": { "word": "Sie (plural)", "rightId": 5 },
      "right": { "word": " Forty-two", "rightId": 6 }

    },
    {
      "left": { "word": "Zweiunddreißig", "rightId": 6 },
      "right": { "word": "They (masculine)", "rightId": 5 }
      
    },
    {
      "left": { "word": "Fünfundvierzig", "rightId": 7 },
      "right": { "word": "We", "rightId": 4 }
      
    },
    {
      "left": { "word": "Du", "rightId": 8 },
      "right": { "word": "He", "rightId": 3 }
      
    },
    {
      "left": { "word": "Sie", "rightId": 9 },
      "right": { "word": "You (formal)", "rightId": 2 }
      
    },
    {
      "left": { "word": "Dreißig", "rightId": 10 },
      "right": { "word": "I", "rightId": 1 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '6',
    name: 'German Exercise - 6',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say \"Good morning\" in German?",
        "choices": ["Guten Tag", "Guten Morgen", "Gute Nacht", "Hallo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Danke\" mean in English?",
        "choices": ["Please", "Goodbye", "Thank you", "Sorry"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"See you later\" in German?",
        "choices": ["Bis später", "Tschüss", "Gute Nacht", "Guten Abend"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"Entschuldigung\" mean in English?",
        "choices": ["Sorry", "Hello", "Please", "Goodbye"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"Please\" in German?",
        "choices": ["Danke", "Bitte", "Entschuldigung", "Tschüss"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Es tut mir leid\" mean in English?",
        "choices": ["Excuse me", "I'm sorry", "Hello", "Goodbye"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Goodbye\" in German?",
        "choices": ["Hallo", "Auf Wiedersehen", "Tschüss", "Gute Nacht"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Guten Abend\" mean in English?",
        "choices": ["Good afternoon", "Good evening", "Good morning", "See you tomorrow"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Freund\" mean in English?",
        "choices": ["Friend", "Family", "Teacher", "Neighbor"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"House\" in German?",
        "choices": ["Auto", "Haus", "Tür", "Fenster"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Schule\" mean in English?",
        "choices": ["Library", "School", "Store", "Park"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Book\" in German?",
        "choices": ["Buch", "Stift", "Tisch", "Stuhl"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"Schwester\" mean in English?",
        "choices": ["Brother", "Sister", "Mother", "Cousin"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Dog\" in German?",
        "choices": ["Katze", "Pferd", "Hund", "Kaninchen"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does \"Familie\" mean in English?",
        "choices": ["Friends", "Family", "Neighbors", "Colleagues"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Window\" in German?",
        "choices": ["Tür", "Fenster", "Stuhl", "Tisch"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does Peter say to Stefan to invite him?",
        "choices": ["Möchtest du zu mir kommen?", "Wo ist die Bibliothek?", "Magst du Filme?", "Willst du in den Park gehen?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How would Stefan respond if he wants to accept the invitation?",
        "choices": ["Nein, danke", "Ja, ich würde gerne", "Es tut mir leid, ich kann nicht", "Vielleicht ein anderes Mal"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What could Peter say to know the time?",
        "choices": ["Wann kommen wir an?", "Willst du einen Film sehen?", "Wo ist die Uhr?", "Was machst du morgen?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "If Stefan wants to know the plan for tomorrow, how would he ask?",
        "choices": ["Was machen wir morgen?", "Hast du Zeit?", "Wie viel kostet das?", "Welcher Tag ist heute?"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Freund 1: Hallo! Wie ______ (to be) du heute?",
        "choices": ["geht es","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Guten Morgen, ______ (I) geht’s gut, danke. Und dir?",
        "choices": ["mir","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Ich ______ (am) ein bisschen müde.",
        "choices": ["bin","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Was ______ (to do) du heute?",
        "choices": ["machst","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Ich gehe ins Kino. Möchtest du mit ______ (to come)?",
        "choices": ["kommen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Ich würde gerne, aber ich muss ______ (to study).",
        "choices": ["lernen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Kein Problem, wir können ______ (tomorrow) gehen.",
        "choices": ["morgen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Super! Wann ______ (to meet) wir uns?",
        "choices": ["treffen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Wir treffen uns um ______ (seven) Uhr abends.",
        "choices": ["sieben","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Toll! Welchen Film ______ (to watch) wir uns an?",
        "choices": ["schauen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Ich möchte eine Komödie sehen, aber du ______ (can) entscheiden.",
        "choices": ["kannst","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Klasse! Ich ______ (love) lustige Filme.",
        "choices": ["liebe","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Sollen wir die Karten online ______ (to buy)?",
        "choices": ["kaufen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Ja, ______ (that) ist eine gute Idee.",
        "choices": ["das","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Also, ich sehe dich ______ (later).",
        "choices": ["später","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: ______ (until) später!",
        "choices": ["Bis","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Vergiss nicht, deine ______ (glasses) mitzubringen.",
        "choices": ["Brille","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Keine Sorge, ich habe sie ______ (already).",
        "choices": ["schon","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Sehr gut, wir ______ (to see) uns bald.",
        "choices": ["sehen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: ______ (until) morgen!",
        "choices": ["Bis","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Hund", "rightId": 1 },
      "right": { "word": "Table", "rightId": 10 }

    },
    {
      "left": { "word": "Schwester", "rightId": 2 },
      "right": { "word": "School", "rightId": 9 }

    },
    {
      "left": { "word": "Haus", "rightId": 3 },
      "right": { "word": "Chair", "rightId": 8 }
      
    },
    {
      "left": { "word": "Buch", "rightId": 4 },
      "right": { "word": "Friend", "rightId": 7 }
      
    },
    {
      "left": { "word": "Fenster", "rightId": 5 },
      "right": { "word": "Family", "rightId": 6 }

    },
    {
      "left": { "word": "Familie", "rightId": 6 },
      "right": { "word": "Window", "rightId": 5 }
      
    },
    {
      "left": { "word": "Freund", "rightId": 7 },
      "right": { "word": "Book", "rightId": 4 }
      
    },
    {
      "left": { "word": "Stuhl", "rightId": 8 },
      "right": { "word": "House", "rightId": 3 }
      
    },
    {
      "left": { "word": "Schule", "rightId": 9 },
      "right": { "word": "Sister", "rightId": 2 }
      
    },
    {
      "left": { "word": "Tisch", "rightId": 10 },
      "right": { "word": "Dog", "rightId": 1 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '7',
    name: 'German Exercise - 7',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say 'I am happy' in German?",
        "choices": ["Ich bin traurig", "Ich bin glücklich", "Du bist glücklich", "Er ist glücklich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'We are friends' in German?",
        "choices": [ "Sie sind Freunde", "Du bist Freunde","Wir sind Freunde", "Ich bin Freunde"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'You (formal) are my teacher' in German?",
        "choices": [ "Sie sind mein Lehrer", "Er ist mein Lehrer","Du bist mein Lehrer", "Wir sind mein Lehrer"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'They are students' in German?",
        "choices": [ "Sie sind Studenten", "Wir sind Studenten", "Ich bin Studenten", "Sie sind Student",],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'She is my sister' in German?",
        "choices": [ "Sie ist mein Bruder", "Ich bin meine Schwester", "Du bist meine Schwester", "Sie ist meine Schwester"],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "How do you say 'He is a doctor' in German?",
        "choices": ["Er ist Arzt", "Sie ist Arzt", "Wir sind Arzt", "Ich bin Arzt"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'They are happy' in German?",
        "choices": [ "Sie ist glücklich","Sie sind glücklich", "Ich bin glücklich", "Wir sind glücklich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'We are from Spain' in German?",
        "choices": ["Wir sind aus Spanien", "Sie sind aus Spanien", "Ich bin aus Spanien", "Du bist aus Spanien"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the feminine form of 'engineer'?",
        "choices": [ "Ingenieure", "Ingenieuren","Ingenieurin", "Ingenieurein"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'Cuban' in German for a woman?",
        "choices": [ "Kuban", "Kubanerin", "Kubanisches", "Kubanerin"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the masculine form of 'teacher'?",
        "choices": [ "Lehrerinnen", "Lehrerinnen", "Lehrer", "Lehrerin"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'Brazilian' in German for a man?",
        "choices": ["Brasilianer", "Brasilianerin", "Brasilianische", "Brasilianern"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the feminine form of 'singer'?",
        "choices": [ "Sänger", "Sängerinnen", "Sängerin", "Sängeren"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'Argentinian' in German for a man?",
        "choices": [ "Argentinierin", "Argentinier", "Argentinische", "Argentiniern"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'American' in German?",
        "choices": [ "Amerikanerin", "Amerikaner", "Amerikanische", "Amerikanern"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'nurse' in German for a man?",
        "choices": [ "Krankenschwestern", "Krankenpflegerin", "Krankenpflegerin", "Krankenpfleger"],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "How do you form the sentence 'They have a cat' in German?",
        "choices": [ "Sie haben eine Katzen","Sie haben eine Katze", "Wir haben eine Katze", "Ich habe eine Katze"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'She is my friend' in German?",
        "choices": [ "Ich bin meine Freundin","Sie ist meine Freundin", "Sie sind meine Freundin", "Du bist meine Freundin"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you form the sentence 'You have a book' in German?",
        "choices": ["Du hast ein Buch", "Du bist ein Buch", "Sie haben ein Buch", "Wir haben ein Buch"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'We are students' in German?",
        "choices": ["Wir sind Studenten", "Du bist Studenten", "Sie sind Studenten", "Ich bin Studenten"],
        "type": "MCQs",
        "correctAnswer": 1
    },

      // 20 Fill in the Blanks
      {
        "question": "Ich ______ (to be) ein Lehrer.",
        "choices": ["bin", "bist", "ist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (to be) meine Freundin.",
        "choices": ["bist", "bin", "ist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ______ (to be) ein Student.",
        "choices": ["ist", "bin", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (to be) glücklich.",
        "choices": ["sind", "bist", "ist", "bin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (to be) aus Deutschland.",
        "choices": ["sind", "bist", "ist", "bin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (to call myself) Anna.",
        "choices": ["heiße", "bin", "habe", "ist"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (to have) einen Hund.",
        "choices": ["habe", "hat", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ______ (to have) ein Buch.",
        "choices": ["hat", "habe", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (to have) viele Freunde.",
        "choices": ["haben", "hat", "habe", "bist"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (to have) eine schöne Wohnung.",
        "choices": ["hast", "hat", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein Name ______ (is) Peter.",
        "choices": ["ist", "bin", "habe", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bin ______ (a nationality).",
        "choices": ["Deutscher", "deutschere", "deutsche", "deutsch"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ist ______ (a profession).",
        "choices": ["Ärztin", "arzt", "ärztine", "ärzte"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bin ______ (a nationality).",
        "choices": ["Französin", "französisch", "franzosen", "franzose"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (a profession).",
        "choices": ["Tänzer", "tänzere", "tanzende", "tanz"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (a nationality).",
        "choices": ["Kanadier", "kanadisch", "kanadieren", "kanada"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ist ______ (a profession).",
        "choices": ["Lehrerin", "lehrer", "lehrerin", "lehren"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bin ______ (masculine nationality).",
        "choices": ["Italiener", "italienisch", "italiener", "italienerin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (masculine profession).",
        "choices": ["Ingenieur", "ingenieur", "ingenieurin", "ingenieure"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie sind ______ (masculine nationality).",
        "choices": ["Amerikaner", "amerikanisch", "amerikaner", "amerikanerin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Nationalität", "rightId": 1 },
      "right": { "word": "Doctor", "rightId": 7 }

    },
    {
      "left": { "word": "Lehrer", "rightId": 2 },
      "right": { "word": "Italian", "rightId": 9 }

    },
    {
      "left": { "word": "traurig", "rightId": 3 },
      "right": { "word": "Happy", "rightId": 8 }
      
    },
    {
      "left": { "word": "Ärztin", "rightId": 4 },
      "right": { "word": "Canadian", "rightId": 10 }
      
    },
    {
      "left": { "word": "Spanier", "rightId": 5 },
      "right": { "word": "English", "rightId": 6 }

    },
    {
      "left": { "word": "Engländer", "rightId": 6 },
      "right": { "word": "Spanish", "rightId": 5 }
      
    },
    {
      "left": { "word": "Arzt", "rightId": 7 },
      "right": { "word": "German", "rightId": 1 }
      
    },
    {
      "left": { "word": "Glücklich", "rightId": 8 },
      "right": { "word": "Sad", "rightId": 3 }
      
    },
    {
      "left": { "word": "Italiener", "rightId": 9 },
      "right": { "word": "Teacher", "rightId": 2 }
      
    },
    {
      "left": { "word": "Kanadier", "rightId": 10 },
      "right": { "word": "Doctor", "rightId": 4 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '8',
    name: 'German Exercise - 8',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What does \"Bleistift\" mean?",
        "choices": ["Eraser", "Pencil", "Paper", "Pen"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Heft\" mean in English?",
        "choices": ["Book", "Notebook", "Desk", "Chair"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Lehrerin\" mean?",
        "choices": ["Student", "Teacher", "Classmate", "Principal"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"window\" in German?",
        "choices": ["Tür", "Tafel", "Fenster", "Wand"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Hausaufgabe\" mean?",
        "choices": ["Homework", "Test", "Lesson", "Project"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"Schüler\" mean?",
        "choices": ["Teacher", "Student", "Classroom", "Principal"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Klasse\" mean?",
        "choices": ["School", "Class", "Teacher", "Lesson"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Tafel\" mean?",
        "choices": ["Whiteboard", "Desk", "Blackboard", "Book"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Bitte\" mean?",
        "choices": ["Thank you", "Excuse me", "Please", "I'm sorry"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Danke\" mean?",
        "choices": ["Sorry", "Please", "Thank you", "Excuse me"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"I don't understand\" in German?",
        "choices": ["Ich verstehe", "Ich verstehe nicht", "Ich bin müde", "Entschuldigung"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Entschuldigung\" mean?",
        "choices": ["I'm happy", "Excuse me", "Thank you", "Please"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"Good morning\" in German?",
        "choices": ["Guten Tag", "Guten Abend", "Guten Morgen", "Gute Nacht"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Es tut mir leid\" mean?",
        "choices": ["I am happy", "I am sorry", "I don't know", "I understand"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Könnte ich zur Toilette gehen?\" mean?",
        "choices": ["Can I go to the library?", "Can I go to the bathroom?", "Can I go home?", "Can I go to class?"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Wie geht's dir?\" mean?",
        "choices": ["Where are you?", "How are you?", "What do you want?", "Who are you?"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What day is Wednesday?",
        "choices": ["Montag", "Dienstag", "Mittwoch", "Donnerstag"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"April\" in German?",
        "choices": ["März", "April", "Mai", "Juni"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which season comes after summer?",
        "choices": ["Herbst", "Winter", "Frühling", "Sommer"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"Es ist kalt\" mean?",
        "choices": ["It's hot", "It's warm", "It's cold", "It's raining"],
        "type": "MCQs",
        "correctAnswer": 3
    },

      // 20 Fill in the Blanks
      {
        "question": "Der ______ (pencil) liegt auf dem Tisch.",
        "choices": ["Bleistift", "Papier", "Tafel", "Heft"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Das ______ (notebook) ist neu.",
        "choices": ["Heft", "Bleistift", "Tafel", "Schüler"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Die ______ (teacher) ist freundlich.",
        "choices": ["Lehrerin", "Schüler", "Bleistift", "Heft"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Das ______ (board) ist grün.",
        "choices": ["Tafel", "Bleistift", "Heft", "Schüler"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Der ______ (student) lernt für die Prüfung.",
        "choices": ["Schüler", "Lehrerin", "Tafel", "Heft"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Please) helfen Sie mir.",
        "choices": ["Bitte", "Danke", "Entschuldigung", "Tut mir leid"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Thank you) für Ihre Unterstützung.",
        "choices": ["Danke", "Bitte", "Entschuldigung", "Tut mir leid"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Excuse me) ich habe eine Frage.",
        "choices": ["Entschuldigung", "Danke", "Bitte", "Tut mir leid"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich verstehe ______ (I don’t understand) die Aufgabe.",
        "choices": ["nicht", "Ich bin müde", "Entschuldigung", "Danke"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Es tut mir ______ (I'm sorry) für die Verspätung.",
        "choices": ["leid", "Danke", "Bitte", "Entschuldigung"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Schüler: Hallo, wie ______ (are you)?",
        "choices": ["geht's dir", "ist dir", "sind dir", "heißt dir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Lehrerin: ______ (Good morning) alle zusammen.",
        "choices": ["Guten Morgen", "Guten Abend", "Guten Tag", "Gute Nacht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Schüler: Darf ich ______ (go) zur Toilette?",
        "choices": ["gehen", "bleiben", "sitzen", "kommen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Lehrerin: Ja, ______ (go) schnell.",
        "choices": ["geh", "komme", "bleib", "sitze"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Schüler: Was ist die ______ (homework) für morgen?",
        "choices": ["Hausaufgabe", "Klasse", "Prüfung", "Lehrerin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) Buch liegt auf dem Tisch.",
        "choices": ["Das", "Ein", "Die", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (A) Lehrer erklärt die Lektion.",
        "choices": ["Ein", "Die", "Das", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) Stühle sind bequem.",
        "choices": ["Die", "Das", "Ein", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (An) Apfel ist rot.",
        "choices": ["Ein", "Das", "Die", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) Tür ist offen.",
        "choices": ["Die", "Das", "Ein", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Der Bleistift", "rightId": 1 },
      "right": { "word": "Thank you", "rightId": 8 }

    },
    {
      "left": { "word": "Das Heft", "rightId": 2 },
      "right": { "word": "Good morning", "rightId": 9 }

    },
    {
      "left": { "word": "Die Lehrerin", "rightId": 3 },
      "right": { "word": "Please", "rightId": 7 }
      
    },
    {
      "left": { "word": "Die Tafel", "rightId": 4 },
      "right": { "word": "Teacher", "rightId": 3 }
      
    },
    {
      "left": { "word": "Der Schüler", "rightId": 5 },
      "right": { "word": "Pencil", "rightId": 1 }

    },
    {
      "left": { "word": "Die Klasse", "rightId": 6 },
      "right": { "word": "Student", "rightId": 5 }
      
    },
    {
      "left": { "word": "Bitte", "rightId": 7 },
      "right": { "word": "Window", "rightId": 4 }
      
    },
    {
      "left": { "word": "Danke", "rightId": 8 },
      "right": { "word": "Excuse me", "rightId": 10 }
      
    },
    {
      "left": { "word": "Guten Morgen", "rightId": 9 },
      "right": { "word": "Notebook", "rightId": 2 }
      
    },
    {
      "left": { "word": "Entschuldigung", "rightId": 10 },
      "right": { "word": "Classroom", "rightId": 6 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '9',
    name: 'German Exercise - 9',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What does \"Geburtstag\" mean in English?",
        "choices": ["Anniversary", "Party", "Birthday", "Celebration"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "If you were born on February 12th, what is your zodiac sign?",
        "choices": ["Wassermann", "Fische", "Steinbock", "Waage"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"party\" in German?",
        "choices": ["Feier", "Geburtstag", "Veranstaltung", "Fest"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What zodiac sign corresponds to someone born in August?",
        "choices": ["Steinbock", "Waage", "Löwe", "Zwillinge"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the German word for \"celebrate\"?",
        "choices": ["Feiern", "Singen", "Tanzen", "Spielen"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is your zodiac sign if you were born in December?",
        "choices": ["Skorpion", "Schütze", "Steinbock", "Waage"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What word means \"gift\" in German?",
        "choices": ["Geschenk", "Überraschung", "Feier", "Einladung"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What zodiac sign corresponds to someone born in April?",
        "choices": ["Widder", "Stier", "Fische", "Waage"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does the verb \"haben\" mean?",
        "choices": ["To be", "To have", "To make", "To go"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate \"sein\" for \"ich\"?",
        "choices": ["Bin", "Bist", "Sind", "Seid"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which form of \"sprechen\" belongs to \"wir\"?",
        "choices": ["Sprichst", "Sprechen", "Spricht", "Spreche"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the correct pronoun for \"we\" in German?",
        "choices": ["Ihr", "Du", "Wir", "Sie"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"I am\" in German?",
        "choices": ["Du bist", "Wir sind", "Ich bin", "Sie sind"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the conjugated form of \"haben\" for \"wir\"?",
        "choices": ["Habt", "Haben", "Hat", "Hatte"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate the verb \"schreiben\" for \"du\"?",
        "choices": ["Schreibst", "Schreibe", "Schreiben", "Schreibt"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does the verb \"schreiben\" mean?",
        "choices": ["To read", "To write", "To listen", "To watch"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"fifty\" in German?",
        "choices": ["Fünfzig", "Sechzig", "Vierzig", "Dreißig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What number follows \"neunundneunzig\"?",
        "choices": ["Hundert", "Achtzig", "Siebzig", "Sechsundneunzig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"thirty-five\" in German?",
        "choices": ["Fünfunddreißig", "Vierunddreißig", "Dreiunddreißig", "Zweiunddreißig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"one hundred\" in German?",
        "choices": ["Eins", "Zwei", "Hundert", "Tausend"],
        "type": "MCQs",
        "correctAnswer": 3
    },

      // 20 Fill in the Blanks
      {
        "question": "Mein ______ (birthday) ist am 10. Mai.",
        "choices": ["Geburtstag", "Jahr", "Monat", "Woche"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich habe am ______ (30) Geburtstag gefeiert.",
        "choices": ["dreißig", "vierzig", "fünfzig", "sechzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wann ist dein ______ (birthday)?",
        "choices": ["Geburtstag", "Tag", "Jahr", "Monat"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir machen eine ______ (party) für meinen Freund.",
        "choices": ["Party", "Feier", "Veranstaltung", "Zeremonie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bekomme ein Geschenk zu meinem ______ (birthday).",
        "choices": ["Geburtstag", "Geschenk", "Tag", "Jahr"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein Sternzeichen ist ______ (Leo), weil ich im August geboren bin.",
        "choices": ["Löwe", "Stier", "Widder", "Zwilling"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (Gemini), da sein Geburtstag im Juni ist.",
        "choices": ["Zwilling", "Löwe", "Widder", "Krebs"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wenn du im Oktober geboren bist, bist du ______ (Libra).",
        "choices": ["Waage", "Skorpion", "Jungfrau", "Löwe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Meine Mutter ist ______ (Aquarius), sie wurde im Februar geboren.",
        "choices": ["Wassermann", "Fische", "Stier", "Widder"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Taurus) ist das Zeichen meines Bruders.",
        "choices": ["Stier", "Waage", "Zwilling", "Löwe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (am) Student in Deutsch.",
        "choices": ["bin", "habe", "gehe", "schreibe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (have) einen Deutschkurs heute.",
        "choices": ["haben", "sind", "gehen", "spricht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (are) sehr freundlich.",
        "choices": ["sind", "haben", "gehen", "schreiben"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (speak) gut Deutsch.",
        "choices": ["sprichst", "sprich", "sprichst", "sprich"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (write) einen Brief an ihre Schwester.",
        "choices": ["schreibt", "schreibe", "schreiben", "schreib"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein ______ (father) ist Lehrer.",
        "choices": ["Vater", "Mutter", "Bruder", "Schwester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich habe zwei ______ (sisters).",
        "choices": ["Schwestern", "Brüder", "Väter", "Mütter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Meine ______ (mother) ist Ärztin.",
        "choices": ["Mutter", "Vater", "Schwester", "Bruder"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Dein ______ (brother) arbeitet in Deutschland.",
        "choices": ["Bruder", "Schwester", "Vater", "Mutter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ihre ______ (parents) sind sehr nett.",
        "choices": ["Eltern", "Brüder", "Schwestern", "Tanten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Geburtstag", "rightId": 1 },
      "right": { "word": "School", "rightId": 8 }

    },
    {
      "left": { "word": "Löwe", "rightId": 2 },
      "right": { "word": "Student", "rightId": 9 }

    },
    {
      "left": { "word": "Schreiben", "rightId": 3 },
      "right": { "word": "To have", "rightId": 7 }
      
    },
    {
      "left": { "word": "Bruder", "rightId": 4 },
      "right": { "word": "To write", "rightId": 3 }
      
    },
    {
      "left": { "word": "Wir haben", "rightId": 5 },
      "right": { "word": "Birthday", "rightId": 1 }

    },
    {
      "left": { "word": "Mutter", "rightId": 6 },
      "right": { "word": "We have", "rightId": 5 }
      
    },
    {
      "left": { "word": "Sprechen", "rightId": 7 },
      "right": { "word": "Brother", "rightId": 4 }
      
    },
    {
      "left": { "word": "Schule", "rightId": 8 },
      "right": { "word": "Father", "rightId": 10 }
      
    },
    {
      "left": { "word": "Schüler", "rightId": 9 },
      "right": { "word": "Leo", "rightId": 2 }
      
    },
    {
      "left": { "word": "Vater", "rightId": 10 },
      "right": { "word": "Mother", "rightId": 6 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '10',
    name: 'German Exercise - 10',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Which adverb would you use to say \"always\" in German?",
        "choices": ["Gut", "Nie", "Immer", "Oft"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct placement for the adverb *jetzt* in this sentence: *Der Bus fährt*?",
        "choices": ["Der Bus jetzt fährt.", "Der Bus fährt jetzt.", "Jetzt der Bus fährt.", "Der fährt jetzt Bus."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which adverb is used to express the meaning \"quickly\"?",
        "choices": ["Schnell", "Langsam", "Oft", "Gut"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Where is the correct placement for the adverb *nie* in this sentence: *Sie ist zu spät*?",
        "choices": ["Nie ist sie zu spät.", "Sie ist nie zu spät.", "Sie nie ist zu spät.", "Ist sie nie zu spät."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which adverb expresses location in the sentence: *Wir treffen uns*?",
        "choices": ["Gut", "Jetzt", "Hier", "Immer"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which adverb means \"rarely\" in German?",
        "choices": ["Oft", "Langsam", "Schnell", "Selten"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What is the best placement for the adverb *gut* in the sentence: *Er spielt Fußball*?",
        "choices": ["Er spielt gut Fußball.", "Er gut spielt Fußball.", "Gut er spielt Fußball.", "Er spielt Fußball gut."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct adverb to complete this sentence: *Sie spricht Deutsch*?",
        "choices": ["Schnell", "Gut", "Immer", "Hier"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the best placement for *oft* in this sentence: *Ich gehe schwimmen*?",
        "choices": ["Ich gehe oft schwimmen.", "Oft gehe ich schwimmen.", "Ich oft gehe schwimmen.", "Gehe ich oft schwimmen."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which adverb is correctly placed in the sentence: *Die Kinder spielen draußen*?",
        "choices": ["Draußen", "Gut", "Immer", "Jetzt"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich komme _______ (always) pünktlich zur Arbeit.",
        "choices": ["immer","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir treffen uns _______ (here) am Bahnhof.",
        "choices": ["hier","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie singt _______ (good) in der Schule.",
        "choices": ["gut","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Zug fährt _______ (now) ab.",
        "choices": ["jetzt","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich gehe _______ (often) ins Kino mit meinen Freunden.",
        "choices": ["oft","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Hund läuft _______ (fast) durch den Garten.",
        "choices": ["schnell","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ist _______ (never) unpünktlich.",
        "choices": ["nie","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er arbeitet _______ (slow), aber sehr genau.",
        "choices": ["langsam","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Kinder spielen _______ (outside) im Garten.",
        "choices": ["draußen","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er kommt _______ (rarely) zu spät.",
        "choices": ["selten","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Er kommt heute.", "rightId": 1 },
      "right": { "word": "We are going to the cinema tomorrow.", "rightId": 4 }

    },
    {
      "left": { "word": "Ich gehe oft spazieren.", "rightId": 2 },
      "right": { "word": "He is coming today.", "rightId": 5 }

    },
    {
      "left": { "word": "Sie ist immer freundlich.", "rightId": 3 },
      "right": { "word": "I rarely go to the gym.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Wir gehen morgen ins Kino.", "rightId": 4 },
      "right": { "word": "I am coming now.", "rightId": 2 }
      
    },
    {
      "left": { "word": "Ich bin jetzt unterwegs.", "rightId": 5 },
      "right": { "word": "She is always friendly.", "rightId": 3 }

    },
    {
      "left": { "word": "Ich lese manchmal Bücher.", "rightId": 6 },
      "right": { "word": "We are going to Berlin soon.", "rightId": 10 }
      
    },
    {
      "left": { "word": "Er ist schon zu Hause.", "rightId": 7 },
      "right": { "word": "You never go to the party.", "rightId": 9 }
      
    },
    {
      "left": { "word": "Ich gehe selten ins Fitnessstudio.", "rightId": 8 },
      "right": { "word": "I often go for a walk.", "rightId": 6 }
      
    },
    {
      "left": { "word": "Du gehst nie zur Party.", "rightId": 9 },
      "right": { "word": "I sometimes read books.", "rightId": 7 }
      
    },
    {
      "left": { "word": "Wir fahren bald nach Berlin.", "rightId": 10 },
      "right": { "word": "He is already at home.", "rightId": 8 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '11',
    name: 'German Exercise - 11',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Ich (like) keinen Spinat.",
        "choices": ["magst", "mag", "mögen", "magst du"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was (prefer) du lieber?",
        "choices": ["Ich lieber spiele Fußball.", "Ich spiele lieber Fußball.", "Lieber spiele ich Fußball.", "Ich spiele lieber Fußball als Basketball."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "(like) ihr Schokolade oder Eis?",
        "choices": ["Mögen", "Mag", "Mögt", "Magst"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Er (prefers to drink) Wasser als Cola.",
        "choices": ["trinkt", "trinken", "trinkst", "trinkt er"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Ich (play) gern Gitarre.",
        "choices": ["spielt", "spiele", "spielen", "spielst"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Sie (prefer to eat) lieber im Restaurant als zu Hause.",
        "choices": ["isst", "esst", "essen", "iss"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was (prefer to listen) du lieber, Rock oder Pop?",
        "choices": ["höre", "hörst", "hört", "hören"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wir (prefer) lieber ins Kino als ins Theater.",
        "choices": ["gehst", "gehen", "geht", "gehe"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Ich (like) laute Musik.",
        "choices": ["mögen", "mag", "magst", "mögen wir"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Sie (prefer to read) lieber Bücher als Zeitungen.",
        "choices": ["liest", "lesen", "lese", "lest"],
        "type": "MCQs",
        "correctAnswer": 2
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich _____ (likes) keinen Fisch, aber ich esse gern Fleisch.",
        "choices": ["mag", "mögen", "möchtest", "mögt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie _____ (drives) lieber mit dem Fahrrad als mit dem Auto.",
        "choices": ["fährt", "fahre", "fahren", "fahrt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir _____ (drink) gern Kaffee am Morgen.",
        "choices": ["trinken", "trinkst", "trinkt", "trinke"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr _____ (eat) lieber Pizza als Pasta.",
        "choices": ["esst", "isst", "essen", "esst du"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er _____ (plays) gern Fußball mit seinen Freunden.",
        "choices": ["spielt", "spiele", "spielst", "spielen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich _____ (see) lieber Filme als Serien.",
        "choices": ["sehe", "siehst", "sieht", "sehen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du _____ (like) Schokolade, oder?",
        "choices": ["magst", "mag", "mögt", "mögen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie _____ (cook) gern traditionelle deutsche Gerichte.",
        "choices": ["kochen", "koch", "kochst", "kocht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er _____ (hears) lieber klassische Musik als Popmusik.",
        "choices": ["hört", "hörst", "höre", "hören"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir _____ (read) gern Bücher am Wochenende.",
        "choices": ["lesen", "liest", "lest", "lese"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich mag Pizza.", "rightId": 1 },
      "right": { "word": "He prefers tea.", "rightId": 7 }

    },
    {
      "left": { "word": "Wir mögen Fußball spielen.", "rightId": 2 },
      "right": { "word": "I hate rain.", "rightId": 5 }

    },
    {
      "left": { "word": "Sie mag Schokolade nicht.", "rightId": 3 },
      "right": { "word": "You love traveling.", "rightId": 8 }
      
    },
    {
      "left": { "word": "Er liebt Musik.", "rightId": 4 },
      "right": { "word": "We like playing football.", "rightId": 2 }
      
    },
    {
      "left": { "word": "Ich hasse Regen.", "rightId": 5 },
      "right": { "word": "She doesn’t like chocolate.", "rightId": 3 }

    },
    {
      "left": { "word": "Sie mögen den Winter nicht.", "rightId": 6 },
      "right": { "word": "We prefer eating pasta.", "rightId": 10 }
      
    },
    {
      "left": { "word": "Er trinkt lieber Tee.", "rightId": 7 },
      "right": { "word": "You never go to the party.", "rightId": 9 }
      
    },
    {
      "left": { "word": "Du liebst Reisen.", "rightId": 8 },
      "right": { "word": "They don't like winter.", "rightId": 6 }
      
    },
    {
      "left": { "word": "Ich mag nicht schwimmen.", "rightId": 9 },
      "right": { "word": "He loves music.", "rightId": 4 }
      
    },
    {
      "left": { "word": "Wir essen lieber Pasta.", "rightId": 10 },
      "right": { "word": "I like pizza.", "rightId": 1 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '12',
    name: 'German Exercise - 12',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say \"Turn left\" in German?",
        "choices": ["Biegen Sie rechts ab", "Gehen Sie geradeaus", "Biegen Sie links ab", "Überqueren Sie die Straße"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct expression for \"Where is the bank?\" in German?",
        "choices": ["Wo ist der Bahnhof?", "Wo ist die Bank?", "Wie komme ich zur Bank?", "Welcher Weg führt zur Bank?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence means \"How can I go to the restaurant?\"?",
        "choices": ["Wo ist das Restaurant?", "Wie komme ich zum Restaurant?", "Welcher Weg führt zum Restaurant?", "Ist es weit vom Restaurant?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"Take the first left\"?",
        "choices": ["Nehmen Sie die erste rechts", "Nehmen Sie die zweite links", "Nehmen Sie die erste links", "Gehen Sie geradeaus"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the translation of \"The hotel is near the station\"?",
        "choices": ["Das Hotel ist neben dem Bahnhof", "Das Hotel ist weit vom Bahnhof entfernt", "Das Hotel ist gegenüber dem Bahnhof", "Das Hotel ist in der Nähe des Bahnhofs"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "If someone asks \"How do I get to the museum?\", how would you say \"Turn right and take the first left\" in German? ()",
        "choices": ["Biegen Sie rechts ab und nehmen Sie die erste links", "Biegen Sie links nach dem Hotel ab", "Überqueren Sie die Straße und nehmen Sie die zweite rechts", "Gehen Sie geradeaus, dann biegen Sie rechts ab"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"Is it far from here?\" mean in German?",
        "choices": ["Ist es hier in der Nähe?", "Ist es weit weg von hier?", "Was ist die Entfernung von hier?", "Wo ist es?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following sentences means \"The park is next to the school\"?",
        "choices": ["Der Park ist nah der Schule", "Der Park ist neben der Schule", "Der Park ist gegenüber der Schule", "Der Park ist weit von der Schule entfernt"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you ask \"How do I get to the supermarket?\" in German?",
        "choices": ["Wo ist der Supermarkt?", "Wie komme ich zum Supermarkt?", "Ist es weit vom Supermarkt?", "Welcher Weg führt zum Supermarkt?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How would you give a response to \"Where is the train station?\" as \"Go straight, then turn left\" in German?",
        "choices": ["Nehmen Sie die erste Straße links", "Gehen Sie geradeaus, dann biegen Sie links ab", "Gehen Sie geradeaus und überqueren Sie die Brücke", "Nehmen Sie die zweite Straße rechts"],
        "type": "MCQs",
        "correctAnswer": 2
      },

      // 20 Fill in the Blanks
      {
        "question": "Gehen Sie __________ (straight ahead), dann biegen Sie rechts ab.",
        "choices": ["geradeaus","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Café ist __________ (next to) der Post.",
        "choices": ["neben","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wie komme ich __________ (to the) Bahnhof?",
        "choices": ["zum","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Park ist __________ (across) der Straße.",
        "choices": ["über","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Biegen Sie an der __________ (corner) links ab.",
        "choices": ["Ecke","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Schule ist __________ (between) dem Kino und dem Supermarkt.",
        "choices": ["zwischen","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Entschuldigung, wo __________ (where is) das Hotel?",
        "choices": ["ist","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Gehen Sie bis zur __________ (traffic light), dann links.",
        "choices": ["Ampel","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Apotheke ist in der __________ von (near) dem Marktplatz.",
        "choices": ["Nähe","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Überqueren Sie die __________ (the street) und gehen Sie geradeaus.",
        "choices": ["Straße","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Wo ist die Post?", "rightId": 1 },
      "right": { "word": "Go straight ahead.", "rightId": 2 }

    },
    {
      "left": { "word": "Gehen Sie geradeaus.", "rightId": 2 },
      "right": { "word": "Go to the next intersection.", "rightId": 5 }

    },
    {
      "left": { "word": "Ich suche das Restaurant.", "rightId": 3 },
      "right": { "word": "It is across from the supermarket.", "rightId": 10 }
      
    },
    {
      "left": { "word": "Biegen Sie an der Ampel links ab.", "rightId": 4 },
      "right": { "word": "We like playing football.", "rightId": 7 }
      
    },
    {
      "left": { "word": "Gehen Sie bis zur nächsten Kreuzung.", "rightId": 5 },
      "right": { "word": "I am looking for the restaurant.", "rightId": 3 }

    },
    {
      "left": { "word": "Es ist neben der Bank.", "rightId": 6 },
      "right": { "word": "How do I get to the train station?", "rightId": 8 }
      
    },
    {
      "left": { "word": "Wie komme ich zum Bahnhof?", "rightId": 7 },
      "right": { "word": "Where is the post office?", "rightId": 1 }
      
    },
    {
      "left": { "word": "Biegen Sie an der nächsten Ecke rechts ab.", "rightId": 8 },
      "right": { "word": "Turn left at the traffic light.", "rightId": 4 }
      
    },
    {
      "left": { "word": "Gehen Sie zum Park.", "rightId": 9 },
      "right": { "word": "It is near the bank.", "rightId": 6 }
      
    },
    {
      "left": { "word": "Es ist gegenüber dem Supermarkt.", "rightId": 10 },
      "right": { "word": "Go to the park.", "rightId": 9 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '13',
    name: 'German Exercise - 13',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you formally arrange an appointment?",
        "choices": [
          "Ich sage den Termin ab.",
          "Ich verschiebe den Termin.",
          "Ich möchte einen Termin vereinbaren.",
          "Ich komme zu spät."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you informally ask for a meeting?",
        "choices": [
          "Ich möchte einen Termin bestätigen.",
          "Können wir uns am Samstag treffen?",
          "Können wir den Termin verschieben?",
          "Der Termin muss abgesagt werden."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What do you write in a formal email?",
        "choices": [
          "Hallo, wie geht’s?",
          "Sehr geehrter Herr Müller,",
          "Ich verschiebe den Termin.",
          "Liebe Grüße, Herr Müller."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you request a confirmation?",
        "choices": [
          "Können Sie den Termin absagen?",
          "Bitte bestätigen Sie den Termin.",
          "Verschieben wir den Termin auf nächste Woche.",
          "Lassen Sie uns den Termin absagen."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you cancel an appointment?",
        "choices": [
          "Der Termin wurde verschoben.",
          "Leider muss ich den Termin absagen.",
          "Ich möchte den Termin vereinbaren.",
          "Der Termin passt mir gut."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is a formal closing in an email?",
        "choices": [
          "Liebe Grüße,",
          "Bis dann!",
          "Mit freundlichen Grüßen,",
          "Tschüss!"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What do you write in an informal email?",
        "choices": [
          "Sehr geehrter Herr Schmidt,",
          "Hallo Maria,",
          "Mit freundlichen Grüßen,",
          "Liebe Herr Müller."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you confirm an appointment?",
        "choices": [
          "Ich muss den Termin absagen.",
          "Ich werde den Termin bestätigen.",
          "Verschieben wir den Termin.",
          "Ich komme am Montag."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you postpone an appointment?",
        "choices": [
          "Der Termin passt mir gut.",
          "Können wir den Termin auf Dienstag verschieben?",
          "Ich bestätige den Termin.",
          "Ich sage den Termin ab."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What subject do you write in a formal email regarding an appointment?",
        "choices": [
          "Betreff: Treffen am Wochenende",
          "Betreff: Bestätigung des Termins",
          "Betreff: Meeting nächste Woche",
          "Betreff: Hallo, wie geht’s?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich möchte einen Termin __________ (arrange).",
        "choices": ["vereinbaren", "absagen", "verschieben", "bestätigen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Können wir den Termin auf Donnerstag __________ (reschedule)?",
        "choices": ["verschieben", "vereinbaren", "bestätigen", "absagen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Leider muss ich den Termin __________ (cancel).",
        "choices": ["absagen", "bestätigen", "verschieben", "vereinbaren"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Bitte __________ (confirm) Sie den Termin für nächste Woche.",
        "choices": ["bestätigen", "verschieben", "absagen", "vereinbaren"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Termin ist am Freitag __________ (at) 10 Uhr.",
        "choices": ["um", "in", "an", "auf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "__________ (Dear) Herr Meier, ich möchte einen Termin vereinbaren.",
        "choices": ["Sehr geehrter", "Lieber", "Hallo", "Guten Tag"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich hoffe, dass Ihnen der Termin am Mittwoch __________ (suits).",
        "choices": ["passt", "gefällt", "schmeckt", "steht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "__________ (Best regards), Anna.",
        "choices": ["Liebe Grüße", "Mit freundlichen Grüßen", "Hallo", "Tschüss"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir können den Termin __________ (postpone) auf Montag.",
        "choices": ["verschieben", "absagen", "bestätigen", "vereinbaren"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich werde den Termin mit Herrn Müller __________ (confirm).",
        "choices": ["bestätigen", "verschieben", "absagen", "vereinbaren"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Kann ich einen Termin machen?", "rightId": 1 },
      "right": { "word": "When is convenient for you?", "rightId": 2 }

    },
    {
      "left": { "word": "Wann passt es Ihnen?", "rightId": 2 },
      "right": { "word": "Do you have time tomorrow?", "rightId": 5 }

    },
    {
      "left": { "word": "Ich möchte den Termin ändern.", "rightId": 3 },
      "right": { "word": "The appointment works well.", "rightId": 10 }
      
    },
    {
      "left": { "word": "Ich habe einen Termin um 14 Uhr.", "rightId": 4 },
      "right": { "word": "Should we meet at 10 o'clock?", "rightId": 7 }
      
    },
    {
      "left": { "word": "Haben Sie morgen Zeit?", "rightId": 5 },
      "right": { "word": "I would like to change the appointment.", "rightId": 3 }

    },
    {
      "left": { "word": "Können wir das Meeting verschieben?", "rightId": 6 },
      "right": { "word": "Does Friday work for you?", "rightId": 8 }
      
    },
    {
      "left": { "word": "Sollen wir uns um 10 Uhr treffen?", "rightId": 7 },
      "right": { "word": "Can I make an appointment?", "rightId": 1 }
      
    },
    {
      "left": { "word": "Passt Ihnen der Freitag?", "rightId": 8 },
      "right": { "word": "I have an appointment at 2 PM.", "rightId": 4 }
      
    },
    {
      "left": { "word": "Ich schicke Ihnen eine E-Mail.", "rightId": 9 },
      "right": { "word": "Can we postpone the meeting?", "rightId": 6 }
      
    },
    {
      "left": { "word": "Der Termin passt gut.", "rightId": 10 },
      "right": { "word": "I will send you an email.", "rightId": 9 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '14',
    name: 'German Exercise - 14',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Which auxiliary verb is used with the verb 'essen' in the perfect tense?",
        "choices": ["sein", "haben", "werden", "bleiben"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the past participle of \"sehen\"?",
        "choices": ["gesiehen", "sehen", "gesehen", "sah"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which verb uses 'sein' as an auxiliary in the perfect tense?",
        "choices": ["bleiben", "lernen", "schreiben", "kaufen"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the past participle of 'gehen'?",
        "choices": ["gegangen", "gehangen", "gang", "gegangenes"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which auxiliary verb is used with 'fahren' in the perfect tense?",
        "choices": ["haben", "sein", "bleiben", "werden"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which verb uses 'haben' in the perfect tense?",
        "choices": ["sein", "bleiben", "arbeiten", "gehen"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct word order in the perfect tense?",
        "choices": ["Ich habe Fußball gespielt.", "Ich Fußball habe gespielt.", "Fußball habe gespielt ich.", "Gespielt habe ich Fußball."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the past participle of \"arbeiten\"?",
        "choices": ["arbeit", "gearbeitet", "arbeitet", "gearbeitetes"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which auxiliary verb is used with 'kommen' in the perfect tense?",
        "choices": ["haben", "sein", "bleiben", "werden"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which auxiliary verb is used with 'bleiben' in the perfect tense?",
        "choices": ["haben", "sein", "bleiben", "werden"],
        "type": "MCQs",
        "correctAnswer": 2
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich __________ (haben) gestern Fußball gespielt.",
        "choices": ["habe", "hast", "hat", "habt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir __________ (sein) nach Hamburg gefahren.",
        "choices": ["sind", "seid", "ist", "bin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie __________ (haben) das Buch gelesen.",
        "choices": ["hat", "habe", "hast", "habt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er __________ (sein) ins Kino gegangen.",
        "choices": ["ist", "sind", "seid", "war"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du __________ (haben) den Film gesehen.",
        "choices": ["hast", "hat", "habe", "habt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir __________ (sein) in Berlin gewesen.",
        "choices": ["sind", "seid", "ist", "bin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr __________ (haben) gut gekocht.",
        "choices": ["habt", "habe", "hat", "hast"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Schwester __________ (haben) einen Kuchen gebacken.",
        "choices": ["hat", "habe", "hast", "habt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie __________ (sein) nach Hause gelaufen.",
        "choices": ["ist", "sind", "seid", "war"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich __________ (haben) die Hausaufgaben gemacht.",
        "choices": ["habe", "hast", "hat", "habt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich habe ein Buch gelesen.", "rightId": 1 },
      "right": { "word": "He has done his homework.", "rightId": 7 }

    },
    {
      "left": { "word": "Er hat Fußball gespielt.", "rightId": 2 },
      "right": { "word": "She has visited her friend.", "rightId": 4 }

    },
    {
      "left": { "word": "Wir sind in den Park gegangen.", "rightId": 3 },
      "right": { "word": "We have watched a movie.", "rightId": 5 }
      
    },
    {
      "left": { "word": "Sie hat ihre Freundin besucht.", "rightId": 4 },
      "right": { "word": "I have cooked dinner.", "rightId": 6 }
      
    },
    {
      "left": { "word": "Wir haben einen Film geschaut.", "rightId": 5 },
      "right": { "word": "I have come home late.", "rightId": 9 }

    },
    {
      "left": { "word": "Ich habe das Abendessen gekocht.", "rightId": 6 },
      "right": { "word": "Does Friday work for you?", "rightId": 8 }
      
    },
    {
      "left": { "word": "Er hat seine Hausaufgaben gemacht.", "rightId": 7 },
      "right": { "word": "She has flown to Berlin.", "rightId": 10 }
      
    },
    {
      "left": { "word": "Sie haben das Haus geputzt.", "rightId": 8 },
      "right": { "word": "I have read a book.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Ich bin spät nach Hause gekommen.", "rightId": 9 },
      "right": { "word": "He has played football.", "rightId": 2 }
      
    },
    {
      "left": { "word": "Sie ist nach Berlin geflogen.", "rightId": 10 },
      "right": { "word": "We have gone to the park.", "rightId": 3 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '15',
    name: 'German Exercise - 15',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How is the future tense formed in German?",
        "choices": [
         "With the verb 'haben' and the infinitive",
      "With the verb 'sein' and the participle",
      "With the verb 'werden' and the infinitive",
      "With the present tense and time indicators"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which form of 'werden' matches 'wir' (we)?",
        "choices": ["werde", "wirst", "werden", "wird"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
      "question": "What does 'Ich werde ins Kino gehen' mean?",
    "choices": [
      "I am going to the cinema.",
      "I will go to the cinema.",
      "I went to the cinema.",
      "I have gone to the cinema."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which time expression indicates a future event?",
        "choices": ["gestern", "heute", "morgen", "letzte Woche"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which auxiliary verb is used to form the future tense?",
        "choices": ["haben", "werden", "sein", "bleiben"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which modal verb fits in the sentence: 'Ich __________ morgen das Auto reparieren lassen.'?",
        "choices": ["werde", "darf", "kann", "muss"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'Du wirst bald fliegen' mean?",
        "choices": [
          "You will fly soon.",
          "You are flying soon.",
          "You flew soon.",
          "You had flown soon."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct word order in the future tense?",
        "choices": [
          "Ich werde morgen einen Film sehe.",
          "Ich werde einen Film morgen sehen.",
          "Ich einen Film werde morgen sehen.",
          "Ich werde morgen einen Film sehen."
        ],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which form of 'werden' matches 'er/sie/es' (he/she/it)?",
        "choices": ["wirst", "werde", "werden", "wird"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which modal verb fits in the sentence: 'Wir __________ morgen nach Indien reisen.'?",
        "choices": ["können", "wollen", "müssen", "werden"],
        "type": "MCQs",
        "correctAnswer": 4
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich __________ (werden) nächstes Jahr Deutsch lernen.",
        "choices": ["werde","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er __________ (werden) in zwei Wochen nach München fahren.",
        "choices": ["wird","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir __________ (werden) am Wochenende Tennis spielen.",
        "choices": ["werden","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie __________ (werden) morgen einen neuen Job suchen.",
        "choices": ["wird","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du __________ (werden) im Dezember nach Indien reisen.",
        "choices": ["wirst","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich __________ (werden) nächstes Semester in der Universität studieren.",
        "choices": ["werde","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr __________ (werden) bald ein Haus kaufen.",
        "choices": ["werdet","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Schwester __________ (werden) bald ihren Abschluss machen.",
        "choices": ["wird","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir __________ (werden) nächsten Monat eine Party organisieren.",
        "choices": ["werden","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie __________ (werden) morgen früh zum Arzt gehen.",
        "choices": ["wird","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich werde morgen arbeiten.", "rightId": 1 },
      "right": { "word": "They will buy a house.", "rightId": 7 }

    },
    {
      "left": { "word": "Er wird Lehrer werden.", "rightId": 2 },
      "right": { "word": "She will travel to Berlin.", "rightId": 4 }

    },
    {
      "left": { "word": "Wir werden unsere Freunde besuchen.", "rightId": 3 },
      "right": { "word": "I will drink a coffee.", "rightId": 5 }
      
    },
    {
      "left": { "word": "Sie wird nach Berlin fahren.", "rightId": 4 },
      "right": { "word": "We will go to the park.", "rightId": 6 }
      
    },
    {
      "left": { "word": "Ich werde einen Kaffee trinken.", "rightId": 5 },
      "right": { "word": "He will buy a car.", "rightId": 9 }

    },
    {
      "left": { "word": "Wir werden in den Park gehen.", "rightId": 6 },
      "right": { "word": "Will you go to the cinema?", "rightId": 8 }
      
    },
    {
      "left": { "word": "Sie werden ein Haus kaufen.", "rightId": 7 },
      "right": { "word": "I will cook.", "rightId": 10 }
      
    },
    {
      "left": { "word": "Wirst du ins Kino gehen?", "rightId": 8 },
      "right": { "word": "I will work tomorrow.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Er wird ein Auto kaufen.", "rightId": 9 },
      "right": { "word": "He will become a teacher.", "rightId": 2 }
      
    },
    {
      "left": { "word": "Ich werde kochen.", "rightId": 10 },
      "right": { "word": "We will visit our friends.", "rightId": 3 }
      
    }
  ]
}
    ]
  },
];
