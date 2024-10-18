export const quiz = [
  {
    quiz: '1',
    name: 'Spanish Exercise - 1',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        question: "How do you say 'my name is' in Spanish?",
        choices: ['me llamo', 'cómo estás', 'por favor', 'gracias'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'de nada' mean?",
        choices: ['you’re welcome', 'thank you', 'goodbye', 'please'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'good afternoon' in Spanish?",
        choices: ['buenas noches', 'buenas tardes', 'hola', 'buenos días'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'sí' mean?",
        choices: ['yes', 'no', 'please', 'thank you'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What is the Spanish word for 'no'?",
        choices: ['sí', 'no', 'gracias', 'por favor'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'mucho gusto' mean?",
        choices: ['nice to meet you', 'good morning', 'good night', 'see you later'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'see you later' in Spanish?",
        choices: ['hasta luego', 'adiós', 'hola', 'gracias'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'bienvenido' mean?",
        choices: ['welcome', 'goodbye', 'please', 'thank you'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'I don’t understand' in Spanish?",
        choices: ['no comprendo', 'me llamo', 'por favor', 'gracias'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'hasta mañana' mean?",
        choices: ['see you tomorrow', 'good night', 'goodbye', 'hello'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'hola' mean in English?",
        choices: ['goodbye', 'hello', 'thank you', 'please'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'thank you' in Spanish?",
        choices: ['gracias', 'por favor', 'adiós', 'hola'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'por favor' mean?",
        choices: ['please', 'thank you', 'excuse me', 'goodbye'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'goodbye' in Spanish?",
        choices: ['hola', 'adiós', 'buenos días', 'gracias'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'buenos días' mean?",
        choices: ['good night', 'good morning', 'goodbye', 'thank you'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'excuse me' in Spanish?",
        choices: ['lo siento', 'disculpe', 'gracias', 'por favor'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'lo siento' mean?",
        choices: ['I’m sorry', 'thank you', 'please', 'hello'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'good night' in Spanish?",
        choices: ['buenos días', 'buenas noches', 'hola', 'gracias'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does '¿cómo estás?' mean?",
        choices: ['what is your name?', 'how are you?', 'goodbye', 'where are you?'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'I am fine' in Spanish?",
        choices: ['estoy bien', 'estoy mal', 'gracias', 'buenas noches'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      
      // 20 Fill in the Blanks

      {
        question: "Hola, ¿cómo _______? (Hello, how are you?)",
        choices: ["estás", "estoy", "eres", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Yo _______ bien, gracias. (I am fine, thank you.)",
        choices: ["estoy", "eres", "somos", "estás"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Me llamo Juan, ¿y tú _______? (My name is Juan, and you?)",
        choices: ["cómo", "tú", "yo", "cómo te llamas"],
        type: 'FillInTheBlanks',
        correctAnswer: 4
      },
      {
        question: "Yo _______ de España. (I am from Spain.)",
        choices: ["soy", "eres", "somos", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "¿_______ español? (Do you speak Spanish?)",
        choices: ["hablas", "hablo", "hablan", "hablas tú"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sí, yo _______ español. (Yes, I speak Spanish.)",
        choices: ["hablo", "hablas", "habla", "hablamos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Gracias, _______ luego. (Thank you, see you later.)",
        choices: ["hasta", "adiós", "nos", "después"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "_________ por favor. (Water, please.)",
        choices: ["agua", "tierra", "fuego", "aire"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "No, _______ entiendo. (No, I don’t understand.)",
        choices: ["no", "sí", "tal vez", "ahora"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "_______ de dónde eres. (I know where you are from.)",
        choices: ["sé", "sabes", "sabe", "sabemos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Nosotros _______ en la playa. (We are at the beach.)",
        choices: ["estamos", "soy", "somos", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ella _______ profesora. (She is a teacher.)",
        choices: ["es", "soy", "son", "estás"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "¿Dónde _______ tú? (Where are you?)",
        choices: ["estás", "eres", "soy", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ellos _______ en casa. (They are at home.)",
        choices: ["están", "estás", "estamos", "soy"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Nosotros _______ a la escuela. (We are going to school.)",
        choices: ["vamos", "va", "voy", "van"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "¿Cómo _______ tú? (How are you?)",
        choices: ["estás", "es", "soy", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Yo _______ de México. (I am from Mexico.)",
        choices: ["soy", "eres", "es", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ellos _______ contentos. (They are happy.)",
        choices: ["están", "es", "soy", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Nosotros _______ amigos. (We are friends.)",
        choices: ["somos", "soy", "eres", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "_______ está usted? (How are you?)",
        choices: ["cómo", "cómo", "cómo", "cómo"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "¿Cómo estás?", "rightId": 1 },
            "right": { "word": "See you later", "rightId": 3 }
          },
          {
            "left": { "word": "Buenas tardes", "rightId": 2 },
            "right": { "word": "How are you?", "rightId": 1 }
          },
          {
            "left": { "word": "Hasta luego", "rightId": 3 },
            "right": { "word": "Good afternoon", "rightId": 2 }
          },
          {
            "left": { "word": "Muchas gracias", "rightId": 4 },
            "right": { "word": "What time is it?", "rightId": 5 }
          },
          {
            "left": { "word": "¿Qué hora es?", "rightId": 5 },
            "right": { "word": "Thank you very much", "rightId": 4 }
          },
          {
            "left": { "word": "Buenas noches", "rightId": 6 },
            "right": { "word": "I'm sorry", "rightId": 8 }
          },
          {
            "left": { "word": "Por favor", "rightId": 7 },
            "right": { "word": "Good evening", "rightId": 6 }
          },
          {
            "left": { "word": "Lo siento", "rightId": 8 },
            "right": { "word": "Please", "rightId": 7 }
          },
          {
            "left": { "word": "¿Dónde está el baño?", "rightId": 9 },
            "right": { "word": "Good morning", "rightId": 10 }
          },
          {
            "left": { "word": "Buenos días", "rightId": 10 },
            "right": { "word": "Where is the bathroom?", "rightId": 9 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '2',
    name: 'Spanish Exercise - 2',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "What is the Spanish word for 'one'?",
        "choices": ["Un", "Dos", "Tres", "Cuatro"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'four' in Spanish?",
        "choices": ["Cinco", "Cuatro", "Tres", "Seis"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for 'ten'?",
        "choices": ["Nueve", "Diez", "Ocho", "Doce"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'fifteen' in Spanish?",
        "choices": ["Quince", "Catorce", "Dieciséis", "Veinte"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'seven' in Spanish?",
        "choices": ["Cinco", "Seis", "Siete", "Ocho"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'eleven' in Spanish?",
        "choices": ["Doce", "Trece", "Once", "Catorce"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the Spanish word for 'twenty'?",
        "choices": ["Diecinueve", "Dieciocho", "Veinte", "Veintidós"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'three' in Spanish?",
        "choices": ["Uno", "Tres", "Cuatro", "Dos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'sixteen' in Spanish?",
        "choices": ["Dieciseis", "Quince", "Dieciséis", "Catorce"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'eighteen' in Spanish?",
        "choices": ["Diecisiete", "Dieciocho", "Quince", "Veinte"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish pronunciation for 'five'?",
        "choices": ["Seis", "Cinco", "Siete", "Cuatro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'nine' in Spanish?",
        "choices": ["Nueve", "Diez", "Ocho", "Siete"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say the number 'two' in Spanish?",
        "choices": ["Un", "Tres", "Cuatro", "Dos"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What is the first letter of the Spanish alphabet?",
        "choices": ["B", "A", "E", "C"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which letter comes after 'C' in the Spanish alphabet?",
        "choices": ["E", "D", "F", "G"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following letters is considered part of the traditional Spanish alphabet?",
        "choices": ["Ñ", "K", "W", "V"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the 10th letter of the Spanish alphabet?",
        "choices": ["I", "J", "K", "L"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is the last letter of the Spanish alphabet?",
        "choices": ["X", "Y", "Z", "V"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the 15th letter of the Spanish alphabet?",
        "choices": ["O", "P", "M", "N"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which letter comes right after 'N' in the Spanish alphabet?",
        "choices": ["O", "Ñ", "P", "L"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "'Twelve' in Spanish is ______.",
        "choices": ["doce", "dos", "tres", "cuatro3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'One' in Spanish is ______.",
        "choices": ["un", "dos", "tres", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Two' in Spanish is ______.",
        "choices": ["dos", "does", "tres", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Fourteen' in Spanish is ______.",
        "choices": ["catorce", "dos", "trees", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Four' in Spanish is ______.",
        "choices": ["cuatro", "dos", "tres", "cueatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Nineteen' in Spanish is ______.",
        "choices": ["Diecinueve", "dos", "cincoe", "seis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Two' in Spanish is ______.",
        "choices": ["dos", "does", "tres", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Six' in Spanish is ______.",
        "choices": ["seis", "seeis", "siete", "ocho"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Seven' in Spanish is ______.",
        "choices": ["siete", "seis", "ocho", "nueve"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Eight' in Spanish is ______.",
        "choices": ["ocho", "nueve", "diez", "once"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Twenty' in Spanish is ______.",
        "choices": ["Veinte", "nuevee", "diez", "once"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Ten' in Spanish is ______.",
        "choices": ["diez", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Eleven' in Spanish is ______.",
        "choices": ["Once", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "'Sixteen' in Spanish is ______.",
        "choices": ["Dieciséis", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 5th letter of the Spanish alphabet is ______.",
        "choices": ["E", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter that comes before 'M' in the Spanish alphabet is ______.",
        "choices": ["L", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 20th letter of the Spanish alphabet is ______.",
        "choices": ["T", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "In the Spanish alphabet, the letter ______ comes after 'R'.",
        "choices": ["S", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The 24th letter of the Spanish alphabet is ______.",
        "choices": ["X", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter ______ comes after 'Ñ' in the Spanish alphabet.",
        "choices": ["O", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "CATORCE", "rightId": 1 },
            "right": { "word": "SEVENTEEN", "rightId": 10 }
          },
          {
            "left": { "word": "OCHO", "rightId": 2 },
            "right": { "word": "SIXTEEN", "rightId": 9 }
          },
          {
            "left": { "word": "DIEZ", "rightId": 3 },
            "right": { "word": "FOURTEEN", "rightId": 8 }
          },
          {
            "left": { "word": "CINCO", "rightId": 4 },
            "right": { "word": "SIX", "rightId": 7 }
          },
          {
            "left": { "word": "DIECIOCHO", "rightId": 5 },
            "right": { "word": "ONE", "rightId": 6 }
          },
          {
            "left": { "word": "UN", "rightId": 6 },
            "right": { "word": "EIGHTEEN", "rightId": 5 }
          },
          {
            "left": { "word": "SEIS", "rightId": 7 },
            "right": { "word": "FIVE", "rightId": 4 }
          },
          {
            "left": { "word": "CATORCE", "rightId": 8 },
            "right": { "word": "TEN", "rightId": 3 }
          },
          {
            "left": { "word": "DIECISÉIS", "rightId": 9 },
            "right": { "word": "EIGHT", "rightId": 2 }
          },
          {
            "left": { "word": "DIECISIETE", "rightId": 10 },
            "right": { "word": "FOURTEEN", "rightId": 1 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '3',
    name: 'Spanish Exercise - 3',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "What is the Spanish word for \"school\"?",
        "choices": ["Casa", "Escuela", "Biblioteca", "Oficina"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"cinco\" mean in English?",
        "choices": ["Five", "Six", "Seven", "Eight"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which color is “amarillo” in English?",
        "choices": ["Green", "Yellow", "Blue", "Black"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for \"friend\"?",
        "choices": ["Amigo", "Enemigo", "Compañero", "Maestro"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"treinta\" mean in English?",
        "choices": ["Twenty", "Thirty", "Forty", "Fifty"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to write\" in Spanish?",
        "choices": ["Leer", "Escribir", "Hablar", "Jugar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"triste\"?",
        "choices": ["Happy", "Sad", "Angry", "Excited"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"sesenta\" in English?",
        "choices": ["Sixty", "Seventy", "Eighty", "Ninety"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"food\" in Spanish?",
        "choices": ["Agua", "Comida", "Sopa", "Fruta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"bienvenido\" mean?",
        "choices": ["Goodbye", "Welcome", "Thank you", "Please"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for \"family\"?",
        "choices": ["Casa", "Familia", "Grupo", "Comunidad"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"ocho\" mean in English?",
        "choices": ["Six", "Eight", "Ten", "Twelve"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to listen\" in Spanish?",
        "choices": ["Mirar", "Oír", "Hablar", "Jugar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"feliz\"?",
        "choices": ["Happy", "Busy", "Tired", "Sad"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"nieve\" mean in English?",
        "choices": ["Snow", "Rain", "Wind", "Sun"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"city\" in Spanish?",
        "choices": ["Pueblo", "Ciudad", "Campo", "Aldea"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"quince\" in English?",
        "choices": ["Twelve", "Thirteen", "Fourteen", "Fifteen"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What does \"lavar\" mean?",
        "choices": ["To cook", "To clean", "To dance", "To run"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for \"teacher\"?",
        "choices": ["Estudiante", "Maestro", "Amigo", "Escritor"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"salud\" mean?",
        "choices": ["Health", "Love", "Happiness", "Money"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "El cielo es ______ (gray) hoy.",
        "choices": ["gris", "azul", "blanco", "negro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella tiene ______ (three) gatos.",
        "choices": ["tres", "dos", "e", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Voy a la tienda a ______ (buy) pan.",
        "choices": ["comprar", "vender", "pagar", "buscar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi color favorito es ______ (yellow).",
        "choices": ["amarillo", "e", "verde", "azul"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los niños ______ (to play) en el parque.",
        "choices": ["juegan", "corren", "comen", "saltan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tienes ______ (four) libros en tu mochila.",
        "choices": ["cuatro", "tres", "e", "cinco"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me gusta ______ (to dance) salsa.",
        "choices": ["bailar", "cantar", "escuchar", "ver"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (color) de su vestido es rosa.",
        "choices": ["color", "talla", "forma", "textura"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Dónde está mi ______ (phone)?",
        "choices": ["teléfono", "coche", "llave", "bolso"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Voy a ______ (watch) una película esta noche.",
        "choices": ["ver", "escuchar", "leer", "comprar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El tren sale a las ______ (five) de la tarde.",
        "choices": ["cinco", "e", "seis", "siete"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mis amigos son muy ______ (funny).",
        "choices": ["divertidos", "serios", "tristes", "aburridos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La fruta que más me gusta es la ______ (banana).",
        "choices": ["banana", "naranja", "e", "pera"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Necesito ______ (to study) para el examen.",
        "choices": ["estudiar", "trabajar", "leer", "escribir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La casa tiene ______ (ten) ventanas.",
        "choices": ["diez", "siete", "ocho", "e"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me siento ______ (tired) después de trabajar.",
        "choices": ["cansado", "e", "emocionado", "tranquilo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (weather) es muy agradable en primavera.",
        "choices": ["clima", "temperatura", "temporada", "estación"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El libro está sobre la ______ (table).",
        "choices": ["mesa", "silla", "cama", "puerta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermana tiene ______ (eight) años.",
        "choices": ["ocho", "e", "nueve", "diez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es importante ______ (to rest) después de hacer ejercicio.",
        "choices": ["descansar", "comer", "beber", "jugar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Buenos días", "rightId": 1 },
            "right": { "word": "Thank you", "rightId": 2 }
          },
          {
            "left": { "word": "Por favor", "rightId": 2 },
            "right": { "word": "Fifty", "rightId": 4 }
          },
          {
            "left": { "word": "Verde", "rightId": 3 },
            "right": { "word": "Goodbye", "rightId": 1 }
          },
          {
            "left": { "word": "Cincuenta", "rightId": 4 },
            "right": { "word": "Green", "rightId": 3 }
          },
          {
            "left": { "word": "Gato", "rightId": 5 },
            "right": { "word": "Yes", "rightId": 8 }
          },
          {
            "left": { "word": "¿Qué tal?", "rightId": 6 },
            "right": { "word": "No", "rightId": 9 }
          },
          {
            "left": { "word": "Hasta mañana", "rightId": 7 },
            "right": { "word": "Health", "rightId": 10 }
          },
          {
            "left": { "word": "Sí", "rightId": 8 },
            "right": { "word": "How's it going?", "rightId": 6 }
          },
          {
            "left": { "word": "No", "rightId": 9 },
            "right": { "word": "See you tomorrow", "rightId": 7 }
          },
          {
            "left": { "word": "Salud", "rightId": 10 },
            "right": { "word": "Cat", "rightId": 5 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '4',
    name: 'Spanish Exercise - 4',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "What is the word for 'sister' in Spanish?",
        "choices": ["Hermana", "Madre", "Tía", "Abuela"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'father' in Spanish?",
        "choices": ["Padre", "Hermano", "Tío", "Abuelo"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does 'sobrino' mean in English?",
        "choices": ["Nephew", "Uncle", "Cousin", "Grandson"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What do you call your father's wife?",
        "choices": ["Madre", "Hermana", "Abuela", "Tía"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the correct present tense form of 'comer' (to eat) for 'yo'?",
        "choices": ["Como", "Comes", "Comemos", "Coméis"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the present tense of 'escribir' (to write) for 'nosotros'?",
        "choices": ["Escriben", "Escribe", "Escribimos", "Escribes"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "Which form of 'hablar' (to speak) is used for 'tú'?",
        "choices": ["Habla", "Hablas", "Hablan", "Hablamos"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the present tense of 'vivir' (to live) for 'ellos'?",
        "choices": ["Vive", "Vivimos", "Viven", "Vivís"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct form of 'leer' (to read) for 'yo'?",
        "choices": ["Leemos", "Leo", "Lees", "Leen"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the present tense of 'tener' (to have) for 'vosotros'?",
        "choices": ["Tenéis", "Tienen", "Tienes", "Tengo"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the pronoun for 'they' (feminine) in Spanish?",
        "choices": ["Ellos", "Ellas", "Ustedes", "Vosotros"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for 'we' (masculine)?",
        "choices": ["Nosotros", "Nosotras", "Vosotros", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'you' (informal, singular)?",
        "choices": ["Tú", "Usted", "Vosotros", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the pronoun for 'he'?",
        "choices": ["Ella", "Él", "Tú", "Usted"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for 'you' (formal, singular)?",
        "choices": ["Tú", "Usted", "Ellos", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'she'?",
        "choices": ["Él", "Ella", "Usted", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
      "question": "Which pronoun is used for 'we' (feminine)?",
      "choices": ["Nosotros", "Ellas", "Nosotras", "Tú"],
      "type": "MCQs",
      "correctAnswer": 3
  },
  {
    "question": "What is the pronoun for 'I' in Spanish?",
    "choices": ["Tú", "Usted", "Yo", "Nosotros"],
    "type": "MCQs",
    "correctAnswer": 3
},
{
  "question": "What is the correct pronoun for 'they' (masculine)?",
  "choices": ["Ellas", "Ellos", "Vosotros", "Nosotros"],
  "type": "MCQs",
  "correctAnswer": 2
},
{
  "question": "What is the pronoun for 'you' (informal, plural)?",
  "choices": ["Tú", "Usted", "Vosotros", "Ellas"],
  "type": "MCQs",
  "correctAnswer": 3
},
      
      // 20 Fill in the Blanks

      {
        "question": "Mi ______ (brother) es muy alto.",
        "choices": ["hermano", "madre", "padres", "hermana"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "La ______ (mother) de Juan es muy simpática.",
        "choices": ["madre", "hermano", "padres", "hermana"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mis ______ (parents) viven en Madrid.",
        "choices": ["padres", "hermano", "madre", "hermana"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ella tiene una ______ (sister) mayor.",
        "choices": ["hermana", "madre", "padres", "hermano"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Yo ______ (to eat) en casa todos los días.",
        "choices": ["como", "comes", "comemos", "coméis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nosotros ______ (to go) al parque los domingos.",
        "choices": ["vamos", "vas", "van", "voy"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Tú ______ (to speak) español muy bien.",
        "choices": ["hablas", "hablo", "habla", "hablan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ellos siempre ______ (to study) en la biblioteca.",
        "choices": ["estudian", "estudio", "estudia", "estudias"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Vosotros ______ (to run) por la mañana.",
        "choices": ["corréis", "corren", "corremos", "corro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "María ______ (to write) cartas a su abuela.",
        "choices": ["escribe", "escribo", "escribes", "escriben"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (He) es muy trabajador.",
        "choices": ["Él", "Yo", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I) siempre ayudo a mi familia.",
        "choices": ["Yo", "Él", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (We) vivimos en una casa grande.",
        "choices": ["Nosotros", "Yo", "Ellos", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - masculine) están jugando al fútbol.",
        "choices": ["Ellos", "Ellas", "Nosotros", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - informal, singular) tienes un perro bonito.",
        "choices": ["Tú", "Él", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (She) es mi amiga.",
        "choices": ["Ella", "Él", "Tú", "Usted"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - feminine) son mis compañeras de clase.",
        "choices": ["Ellas", "Ellos", "Nosotros", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - formal, singular) es muy amable.",
        "choices": ["Usted", "Tú", "Él", "Nosotros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (We - feminine) vamos a la playa mañana.",
        "choices": ["Nosotras", "Nosotros", "Ellos", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You all - formal, plural) trabajan mucho.",
        "choices": ["Ustedes", "Ellos", "Nosotros", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Madre", "rightId": 1 },
            "right": { "word": "Sister", "rightId": 5 }
          },
          {
            "left": { "word": "Nosotros", "rightId": 2 },
            "right": { "word": "You all (formal)", "rightId": 4 }
          },
          {
            "left": { "word": "Ellos", "rightId": 3 },
            "right": { "word": "Father", "rightId": 6 }
          },
          {
            "left": { "word": "Tú", "rightId": 4 },
            "right": { "word": "She", "rightId": 9 }
          },
          {
            "left": { "word": "Hermana", "rightId": 5 },
            "right": { "word": "We (masculine)", "rightId": 2 }
          },
          {
            "left": { "word": "Padre", "rightId": 6 },
            "right": { "word": "You (informal)", "rightId": 8 }
          },
          {
            "left": { "word": "Él", "rightId": 7 },
            "right": { "word": "They (masculine)", "rightId": 3 }
          },
          {
            "left": { "word": "Ustedes", "rightId": 8 },
            "right": { "word": "He", "rightId": 7 }
          },
          {
            "left": { "word": "Ella", "rightId": 9 },
            "right": { "word": "Mother", "rightId": 1 }
          },
          {
            "left": { "word": "Vosotros", "rightId": 10 },
            "right": { "word": "You all (informal)", "rightId": 10 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '5',
    name: 'Spanish Exercise - 5',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "How do you say 'cousin' in Spanish (feminine)?",
        "choices": ["Hermana", "Prima", "Tía", "Amiga"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'abuelo' mean in English?",
        "choices": ["Grandfather", "Uncle", "Brother", "Father"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the term in Spanish for 'daughter-in-law'?",
        "choices": ["Hija", "Suegra", "Cuñada", "Nuera"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What word describes 'your wife's father'?",
        "choices": ["Sobrino", "Yerno", "Suegro", "Padrino"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct conjugation of the verb 'beber' (to drink) for 'we'?",
        "choices": ["Bebemos", "Bebéis", "Bebes", "Beben"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What conjugation corresponds to 'he' for the verb 'comer' (to eat)?",
        "choices": ["Coma", "Comemos", "Come", "Coméis"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What verb form does 'yo' use for 'trabajar' (to work)?",
        "choices": ["Trabajo", "Trabajamos", "Trabajas", "Trabaja"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What form of 'vivir' corresponds to 'tú'?",
        "choices": ["Vivo", "Vives", "Vive", "Vivimos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct form of the verb 'escribir' for 'vosotros'?",
        "choices": ["Escribes", "Escribimos", "Escribís", "Escriben"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you conjugate 'entender' (to understand) for 'ella'?",
        "choices": ["Entiende", "Entendemos", "Entiendes", "Entienden"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What pronoun corresponds to 'we' (feminine) in Spanish?",
        "choices": ["Nosotros", "Nosotras", "Vosotros", "Ellas"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'they' (masculine)?",
        "choices": ["Ellos", "Vosotros", "Ellas", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What pronoun is used for 'you all' (informal, masculine)?",
        "choices": ["Ellas", "Vosotros", "Ellos", "Nosotras"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What pronoun is used for 'he' in Spanish?",
        "choices": ["Ella", "Ello", "Él", "Yo"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What pronoun corresponds to 'I' in Spanish?",
        "choices": ["Yo", "Tú", "Nosotros", "Él"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What pronoun corresponds to 'you' (formal)?",
        "choices": ["Usted", "Tú", "Ellos", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What pronoun is used for 'she' in Spanish?",
        "choices": ["Él", "Nosotros", "Ella", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What pronoun corresponds to 'they' (feminine)?",
        "choices": ["Ellos", "Vosotros", "Ellas", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'twenty-three' in Spanish?",
        "choices": ["Treinta y tres", "Veintitrés", "Veintiocho", "Veintiuno"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What number is 'cuarenta y siete'?",
        "choices": ["47", "27", "37", "17"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Mi ______ (uncle) vive en Barcelona.",
        "choices": ["tío", "hermano", "padre", "primo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El hijo de mi hermana es mi ______ (nephew).",
        "choices": ["sobrino", "hijo", "tío", "primo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Su ______ (mother) trabaja en un hospital.",
        "choices": ["madre", "abuela", "hermana", "tía"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (granddaughter) de mi abuela se llama Carla.",
        "choices": ["nieta", "hija", "prima", "sobrina"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______ (to write) correos electrónicos todos los días.",
        "choices": ["escribo", "leo", "hablo", "corro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (to speak) inglés y español.",
        "choices": ["hablan", "escriben", "comen", "cantan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (to live) en una casa grande.",
        "choices": ["vivimos", "escribimos", "hablamos", "jugamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (to understand) la lección muy bien.",
        "choices": ["entiendes", "escribes", "comes", "vives"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿______ (to run) todos los días, Juan?",
        "choices": ["Corres", "Lees", "Hablas", "Comes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella ______ (to read) muchos libros en su tiempo libre.",
        "choices": ["lee", "corre", "vive", "come"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (They - feminine) van a la escuela.",
        "choices": ["Ellas", "Nosotras", "Vosotras", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You - formal) es profesor.",
        "choices": ["Usted", "Tú", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We - masculine) jugamos al fútbol todos los fines de semana.",
        "choices": ["Nosotros", "Ellos", "Vosotros", "Ellas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (I) estudio en la universidad.",
        "choices": ["Yo", "Él", "Ella", "Nosotros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (She) no tiene hermanos.",
        "choices": ["Ella", "Él", "Nosotros", "Usted"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You all - informal) siempre llegáis tarde.",
        "choices": ["Vosotros", "Ellos", "Nosotros", "Ellas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (He) es mi amigo.",
        "choices": ["Él", "Ella", "Tú", "Yo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We - feminine) cantamos en el coro.",
        "choices": ["Nosotras", "Ellas", "Vosotras", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hoy cumplo ______ (twenty-eight) años.",
        "choices": ["veintiocho", "veintinueve", "veintisiete", "treinta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermana tiene ______ y cinco (forty-five) años.",
        "choices": ["cuarenta", "cuarenta y cuatro", "cuarenta y seis", "cincuenta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Él", "rightId": 1 },
            "right": { "word": "You all (formal)", "rightId": 5 }
          },
          {
            "left": { "word": "Nosotros", "rightId": 2 },
            "right": { "word": "She", "rightId": 9 }
          },
          {
            "left": { "word": "Ellas", "rightId": 3 },
            "right": { "word": "Forty", "rightId": 6 }
          },
          {
            "left": { "word": "Tú", "rightId": 4 },
            "right": { "word": "They (feminine)", "rightId": 3 }
          },
          {
            "left": { "word": "Ustedes", "rightId": 5 },
            "right": { "word": "Twenty-five", "rightId": 7 }
          },
          {
            "left": { "word": "Cuarenta", "rightId": 6 },
            "right": { "word": "He", "rightId": 1 }
          },
          {
            "left": { "word": "Veinticinco", "rightId": 7 },
            "right": { "word": "You (informal)", "rightId": 4 }
          },
          {
            "left": { "word": "Them", "rightId": 8 },
            "right": { "word": "Us", "rightId": 2 }
          },
          {
            "left": { "word": "Ella", "rightId": 9 },
            "right": { "word": "Ellos (masculine)", "rightId": 8 }
          },
          {
            "left": { "word": "Cuarenta y dos", "rightId": 10 },
            "right": { "word": "Forty-two", "rightId": 10 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '6',
    name: 'Spanish Exercise - 6',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

        {
          "question": "How do you say \"Good morning\" in Spanish?",
          "choices": ["Buenas tardes", "Buenos días", "Buenas noches", "Hola"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does \"Gracias\" mean?",
          "choices": ["Please", "Goodbye", "Thank you", "Sorry"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"See you later\" in Spanish?",
          "choices": ["Hasta luego", "Adiós", "Nos vemos", "Buenas noches"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"Perdón\" mean?",
          "choices": ["Excuse me", "Good morning", "Please", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"Please\" in Spanish?",
          "choices": ["Gracias", "Por favor", "Lo siento", "Hola"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does \"Lo siento\" mean?",
          "choices": ["Sorry", "Hello", "Good evening", "Excuse me"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"Goodbye\" in Spanish?",
          "choices": ["Hola", "Adiós", "Hasta luego", "Buenas noches"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does \"Buenas tardes\" mean?",
          "choices": ["Good morning", "Good night", "Good afternoon", "See you later"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does \"Amigo\" mean?",
          "choices": ["Friend", "Family", "Neighbor", "Classmate"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"House\" in Spanish?",
          "choices": ["Carro", "Casa", "Puerta", "Ventana"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does \"Escuela\" mean?",
          "choices": ["Library", "Store", "School", "Park"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"Book\" in Spanish?",
          "choices": ["Libro", "Mesa", "Lapiz", "Silla"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"Hermana\" mean?",
          "choices": ["Mother", "Sister", "Cousin", "Friend"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"Dog\" in Spanish?",
          "choices": ["Gato", "Pájaro", "Perro", "Conejo"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does \"Familia\" mean?",
          "choices": ["Friends", "Family", "Neighbors", "Classmates"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"Window\" in Spanish?",
          "choices": ["Ventana", "Puerta", "Silla", "Cama"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What would Juan say to Pedro if he wants to invite him to his house?",
          "choices": ["¿Te gustaría venir a mi casa?", "¿Te gusta la película?", "¿Quieres ir al parque?", "¿Dónde está el cine?"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "If Pedro wants to say yes, how does he respond?",
          "choices": ["No, gracias", "Sí, me encantaría", "Lo siento, no puedo", "No estoy seguro"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What might Juan say if he wants to ask about the time?",
          "choices": ["¿A qué hora llegamos?", "¿Dónde está el reloj?", "¿Te gustaría ver una película?", "¿Qué piensas hacer mañana?"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "If Pedro wants to know the plan for tomorrow, how does he ask?",
          "choices": ["¿Qué hacemos mañana?", "¿Te gusta la comida?", "¿Cuánto cuesta?", "¿Qué día es hoy?"],
          "type": "MCQs",
          "correctAnswer": 1
        },      
      
      // 20 Fill in the Blanks

      {
        "question": "Amigo 1: ¡Hola! ¿Cómo ______ (to be) hoy?",
        "choices": ["estás", "eres", "es", "soy"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: Hola, ______ (I) estoy bien, gracias. ¿Y tú?",
        "choices": ["Yo", "Tú", "Él", "Ella"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: Yo ______ (to feel) un poco cansado.",
        "choices": ["me siento", "te sientes", "se siente", "nos sentimos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: ¿Qué ______ (to do) hoy?",
        "choices": ["haces", "hago", "hace", "hacemos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: Hoy voy al cine. ¿Quieres ______ (to come) conmigo?",
        "choices": ["venir", "ir", "llegar", "salir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: Me encantaría, pero ______ (to have) que estudiar.",
        "choices": ["tengo", "tienes", "tenemos", "tienen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: No te preocupes, podemos ir ______ (tomorrow) si quieres.",
        "choices": ["mañana", "hoy", "ayer", "tarde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: ¡Perfecto! ¿A qué hora ______ (to meet)?",
        "choices": ["nos encontramos", "te encuentras", "me encuentro", "se encuentran"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: Nos encontramos a las ______ (seven) de la tarde.",
        "choices": ["siete", "ocho", "seis", "nueve"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: Está bien. ¿Qué película ______ (to see)?",
        "choices": ["vemos", "ven", "veo", "ven"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: Quiero ver una comedia, pero ______ (you) puedes elegir.",
        "choices": ["tú", "yo", "ella", "nosotros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: ¡Genial! Me ______ (to like) las películas divertidas.",
        "choices": ["gustan", "gusta", "gustamos", "gustáis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: ¿Qué tal si ______ (we) compramos las entradas online?",
        "choices": ["compramos", "compran", "compras", "comprar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: Sí, ______ (it) es una buena idea.",
        "choices": ["es", "son", "está", "están"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: Entonces, te veo ______ (later).",
        "choices": ["luego", "ahora", "tarde", "pronto"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: ¡Hasta ______ (later)!",
        "choices": ["luego", "pronto", "mañana", "tarde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: No olvides ______ (to bring) tus gafas.",
        "choices": ["traer", "llevar", "ver", "usar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: No te preocupes, ______ (already) las tengo.",
        "choices": ["ya", "ahora", "pronto", "tarde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 1: Muy bien, ______ (we) nos vemos pronto.",
        "choices": ["nos", "te", "se", "me"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Amigo 2: ¡Hasta ______ (tomorrow)!",
        "choices": ["mañana", "pronto", "tarde", "luego"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Perro", "rightId": 1 },
            "right": { "word": "Chair", "rightId": 10 }
          },
          {
            "left": { "word": "Hermana", "rightId": 2 },
            "right": { "word": "Dog", "rightId": 1 }
          },
          {
            "left": { "word": "Casa", "rightId": 3 },
            "right": { "word": "Sister", "rightId": 2 }
          },
          {
            "left": { "word": "Libro", "rightId": 4 },
            "right": { "word": "Friend", "rightId": 7 }
          },
          {
            "left": { "word": "Ventana", "rightId": 5 },
            "right": { "word": "Book", "rightId": 4 }
          },
          {
            "left": { "word": "Familia", "rightId": 6 },
            "right": { "word": "Table", "rightId": 8 }
          },
          {
            "left": { "word": "Amigo", "rightId": 7 },
            "right": { "word": "School", "rightId": 9 }
          },
          {
            "left": { "word": "Mesa", "rightId": 8 },
            "right": { "word": "House", "rightId": 3 }
          },
          {
            "left": { "word": "Escuela", "rightId": 9 },
            "right": { "word": "Window", "rightId": 5 }
          },
          {
            "left": { "word": "Silla", "rightId": 10 },
            "right": { "word": "Family", "rightId": 6 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '7',
    name: 'Spanish Exercise - 7',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "How do you say \"I am happy\" in Spanish?",
        "choices": ["Yo soy feliz", "Yo estoy feliz", "Yo eres feliz", "Yo son feliz"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"We are friends\" in Spanish?",
        "choices": ["Nosotros somos amigos", "Ustedes son amigos", "Ellos son amigos", "Yo soy amigo"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"You (formal) are my teacher\" in Spanish?",
        "choices": [ "Usted es mi maestro", "Vos eres mi maestro", "Ellos son mis maestros", "Tú eres mi maestro",],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "How do you say \"They are students\" in Spanish?",
        "choices": [ "Ellos son estudiante", "Nosotros somos estudiantes", "Ellas son estudiantes", "Tú eres estudiante"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"She is my sister\" in Spanish?",
        "choices": ["Ella soy mi hermana", "Ella es mi hermana", "Ella son mi hermana", "Tú eres mi hermana"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"He is a doctor\" in Spanish?",
        "choices": [ "Él es médico", "Él son médico", "Yo soy médico", "Él es doctora"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"They are happy\" in Spanish?",
        "choices": ["Ellos son felices", "Ellas son feliz", "Tú eres feliz", "Usted es feliz"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"We are from Spain\" in Spanish?",
        "choices": ["Somos de España", "Son de España", "Eres de España", "Estoy de España"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the feminine form of \"engineer\"?",
        "choices": [ "Ingenieros", "Ingenieras", "Ingeniera", "Ingenierosas"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"Brazilian\" in Spanish for a woman?",
        "choices": [ "Brasileño", "Brasileña", "Brasilianos", "Brasilianas"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the masculine form of \"teacher\"?",
        "choices": ["Profesor", "Profesoras", "Profesores", "Profe"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"Cuban\" in Spanish for a man?",
        "choices": [ "Cubana", "Cubanos", "Cubanas", "Cubano"],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "How do you say \"teacher\" in Spanish?",
        "choices": ["Maestro", "Maestra", "Profesora", "Profesor"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"French\" in Spanish for a woman?",
        "choices": ["Francesa", "Francés", "Franceses", "Francesas"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the masculine form of \"artist\"?",
        "choices": [ "Artistas", "Artisto", "Artista", "Artistaso"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"Colombian\" in Spanish for a man?",
        "choices": [ "Colombiana", "Colombianos", "Colombiano", "Colombianas"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"Peruvian\" in Spanish for a woman?",
        "choices": [ "Peruano", "Peruanos", "Peruanas","Peruana"],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
      "question": "What is the feminine form of \"doctor\"?",
      "choices": ["Doctor", "Doctora", "Doctores", "Doctoras"],
      "type": "MCQs",
      "correctAnswer": 2
  },
  {
      "question": "How do you say \"Spanish\" in Spanish for a woman?",
      "choices": ["Español", "Españoles", "Españolas", "Española"],
      "type": "MCQs",
      "correctAnswer": 4
  },
  {
      "question": "How do you say \"teacher\" in Spanish for a woman?",
      "choices": ["Maestro", "Maestra", "Profesora", "Docente"],
      "type": "MCQs",
      "correctAnswer": 2
  },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (to be) médico.",
        "choices": ["soy", "estoy", "eres", "son"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Tú ______ (to be) mi hermana.",
        "choices": ["eres", "soy", "estoy", "son"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ella ______ (to be) estudiante de arte.",
        "choices": ["es", "soy", "eres", "son"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nosotros ______ (to be) felices.",
        "choices": ["somos", "son", "eres", "estamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ellos ______ (to be) de Colombia.",
        "choices": ["son", "son", "están", "eres"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Me ______ (to call myself) Ana.",
        "choices": ["llamo", "soy", "estoy", "eres"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Yo ______ (to have) una casa grande.",
        "choices": ["tengo", "hay", "es", "eres"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Él ______ (to have) dos gatos.",
        "choices": ["tiene", "tenemos", "hay", "es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nosotros ______ (to have) un coche nuevo.",
        "choices": ["tenemos", "tienes", "tiene", "soy"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Tú ______ (to have) un buen amigo.",
        "choices": ["tienes", "tenemos", "tiene", "es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mi nombre ______ (is) Pedro.",
        "choices": ["es", "soy", "estoy", "eres"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Yo soy ______ (a nationality).",
        "choices": ["chileno", "chilenos", "chilenes", "chilenos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ella es ______ (a profession).",
        "choices": ["arquitecta", "arquitecto", "ingeniera", "ingeniero"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Yo soy ______ (a nationality).",
        "choices": ["colombiano", "colombiana", "colombianos", "colombianas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Él es ______ (a profession).",
        "choices": ["mecánico", "mecánica", "ingeniero", "ingeniera"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ella es ______ (a nationality).",
        "choices": ["peruana", "peruano", "peruanos", "peruanas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Tú eres ______ (a profession).",
        "choices": ["periodista", "periodistas", "periodistos", "periodistas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Yo soy ______ (masculine nationality).",
        "choices": ["panameño", "panameña, panameño"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Él es ______ (masculine profession).",
        "choices": ["dentista", "dentistas, dentistas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ellos son ______ (masculine nationality).",
        "choices": ["venezolanos", "venezolana, venezolanos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Italiano", "rightId": 1 },
            "right": { "word": "Italian", "rightId": 9 }
          },
          {
            "left": { "word": "Profesia", "rightId": 2 },
            "right": { "word": "Lawyer", "rightId": 4 }
          },
          {
            "left": { "word": "Mexicano", "rightId": 3 },
            "right": { "word": "Happy", "rightId": 8 }
          },
          {
            "left": { "word": "Abogado", "rightId": 4 },
            "right": { "word": "Mexican", "rightId": 3 }
          },
          {
            "left": { "word": "Española", "rightId": 5 },
            "right": { "word": "Doctor", "rightId": 7 }
          },
          {
            "left": { "word": "Inglés", "rightId": 6 },
            "right": { "word": "Teacher", "rightId": 2 }
          },
          {
            "left": { "word": "Médico", "rightId": 7 },
            "right": { "word": "French", "rightId": 10 }
          },
          {
            "left": { "word": "Feliz", "rightId": 8 },
            "right": { "word": "Mexican", "rightId": 1 }
          },
          {
            "left": { "word": "Italiano", "rightId": 9 },
            "right": { "word": "English", "rightId": 6 }
          },
          {
            "left": { "word": "Francés", "rightId": 10 },
            "right": { "word": "Spanish", "rightId": 5 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '8',
    name: 'Spanish Exercise - 8',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
        {
            "question": "What does \"pizarra\" mean?",
            "choices": ["Desk", "Board", "Chair", "Pencil"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
          "question": "What is \"escritorio\" in English?",
            "choices": ["Chair", "Desk", "Book", "Table"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
          "question": "Which word means \"book\"?",
            "choices": ["Libro", "Lápiz", "Silla", "Pizarra"],
            "type": "MCQs",
            "correctAnswer": 1
        },
        {
          "question": "How do you say \"chair\" in Spanish?",
            "choices": ["Lápiz", "Silla", "Mesa", "Carpeta"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
          "question": "What does \"lápiz\" mean?",
            "choices": ["Pen", "Pencil", "Eraser", "Marker"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
           "question": "Which word translates to \"desk\"?",
            "choices": ["Silla", "Pizarra", "Mesa", "Escritorio"],
            "type": "MCQs",
            "correctAnswer": 4
        },
        {
           "question": "How do you say \"paper\" in Spanish?",
            "choices": ["Papel", "Libro", "Carpeta", "Tarea"],
            "type": "MCQs",
            "correctAnswer": 1
        },
        {
          "question": "What does \"carpeta\" mean?",
            "choices": ["Notebook", "Folder", "Book", "Desk"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
           "question": "How do you say \"Excuse me\" in Spanish?",
            "choices": ["Disculpa", "Por favor", "Gracias", "Lo siento"],
            "type": "MCQs",
            "correctAnswer": 1
        },
        {
          "question": "What does \"Lo siento\" mean?",
            "choices": ["Thank you", "Please", "I’m sorry", "Excuse me"],
            "type": "MCQs",
            "correctAnswer": 3
        },
        {
          "question": "How do you say \"Thank you\" in Spanish?",
            "choices": ["Por favor", "Gracias", "Lo siento", "Disculpa"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
          "question": "What does \"No entiendo\" mean?",
            "choices": ["I understand", "I don't understand", "I’m sorry", "Please"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
           "question": "How do you say \"Please\" in Spanish?",
            "choices": ["Gracias", "Por favor", "Disculpa", "Lo siento"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
          "question": "What does \"Buenos días\" mean?",
            "choices": ["Good night", "Good morning", "Good afternoon", "Goodbye"],
            "type": "MCQs",
            "correctAnswer": 2
        },
        {
          "question": "How do you say \"How are you?\" in Spanish?",
            "choices": ["¿Qué tal?", "¿Qué hora es?", "¿Dónde está?", "¿Qué día es?"],
            "type": "MCQs",
            "correctAnswer": 1
        },
        {
          "question": "What does \"Puedo ir al baño\" mean?",
            "choices": ["Can I go to the bathroom?", "Where is the bathroom?", "I need help.", "I don’t understand."],
            "type": "MCQs",
            "correctAnswer": 1
        },
        {
          "question": "What day is today? (If today is Wednesday)",
            "choices": ["Lunes", "Martes", "Miércoles", "Jueves"],
            "type": "MCQs",
            "correctAnswer": 3
        },
        {
          "question": "How do you say \"January\" in Spanish?",
            "choices": ["Febrero", "Marzo", "Enero", "Abril"],
            "type": "MCQs",
            "correctAnswer": 3
        },
        {
          "question": "What is the season of the year after winter?",
            "choices": ["Primavera", "Verano", "Otoño", "Invierno"],
            "type": "MCQs",
            "correctAnswer": 1
        },
        {
          "question": "What does \"Hace frío\" mean?",
            "choices": ["It's hot", "It's cold", "It's sunny", "It's rainy"],
            "type": "MCQs",
            "correctAnswer": 2
        },
      
      // 20 Fill in the Blanks

      {
        "question": "La ______ (pencil) se llama \"lápiz\".",
        "choices": ["lápiz", "escritorio", "libro", "pizarra"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "El ______ (desk) es de madera.",
        "choices": ["escritorio", "libro", "pizarra", "silla"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "La ______ (book) está en la mesa.",
        "choices": ["libro", "escritorio", "pizarra", "silla"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "El ______ (board) está en la pared.",
        "choices": ["pizarra", "escritorio", "silla", "libro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "La ______ (chair) es cómoda.",
        "choices": ["silla", "libro", "pizarra", "escritorio"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Please) pasa el lápiz.",
        "choices": ["Por favor", "Gracias", "Disculpa", "Lo siento"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Thank you) por tu ayuda.",
        "choices": ["Gracias", "Por favor", "Disculpa", "Lo siento"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Excuse me) tengo una pregunta.",
        "choices": ["Disculpa", "Por favor", "Gracias", "Lo siento"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I don’t understand) la tarea.",
        "choices": ["No entiendo", "Lo siento", "Disculpa", "Gracias"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I’m sorry) por llegar tarde.",
        "choices": ["Lo siento", "Por favor", "Gracias", "Disculpa"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Estudiante: Hola, ¿cómo ______ (you)?",
        "choices": ["estás", "eres", "tienes", "hay"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Profesor: ______ (Good morning) a todos.",
        "choices": ["Buenos días", "Buenas tardes", "Buenas noches", "Hola"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Estudiante: ¿Puedo ______ (go) al baño?",
        "choices": ["ir", "venir", "salir", "entrar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Profesor: Sí, ______ (go) rápido.",
        "choices": ["ve", "vas", "voy", "vamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Estudiante: ¿Cuál es la ______ (homework) para mañana?",
        "choices": ["tarea", "clase", "lección", "prueba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) libro está en la mesa.",
        "choices": ["El", "La", "Los", "Una"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (A) perro está afuera.",
        "choices": ["Un", "Una", "El", "La"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) chicas son inteligentes.",
        "choices": ["Las", "Los", "El", "Una"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (An) amigo es muy divertido.",
        "choices": ["Un", "Una", "El", "Los"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) ventana está abierta.",
        "choices": ["La", "El", "Los", "Una"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "La pizarra", "rightId": 1 },
            "right": { "word": "Good morning", "rightId": 9 }
          },
          {
            "left": { "word": "El lápiz", "rightId": 2 },
            "right": { "word": "Homework", "rightId": 4 }
          },
          {
            "left": { "word": "La silla", "rightId": 3 },
            "right": { "word": "Please", "rightId": 8 }
          },
          {
            "left": { "word": "La tarea", "rightId": 4 },
            "right": { "word": "Chair", "rightId": 3 }
          },
          {
            "left": { "word": "La mesa", "rightId": 5 },
            "right": { "word": "Thank you", "rightId": 7 }
          },
          {
            "left": { "word": "El escritorio", "rightId": 6 },
            "right": { "word": "Book", "rightId": 2 }
          },
          {
            "left": { "word": "Gracias", "rightId": 7 },
            "right": { "word": "Excuse me", "rightId": 10 }
          },
          {
            "left": { "word": "Por favor", "rightId": 8 },
            "right": { "word": "Folder", "rightId": 1 }
          },
          {
            "left": { "word": "Buenos días", "rightId": 9 },
            "right": { "word": "Desk", "rightId": 6 }
          },
          {
            "left": { "word": "Disculpa", "rightId": 10 },
            "right": { "word": "Table", "rightId": 5 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '9',
    name: 'Spanish Exercise - 9',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What does 'cumpleaños' mean in English?",
        "choices": ["Birthday", "Anniversary", "Party", "Year"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "If you were born on May 15, what is your zodiac sign?",
        "choices": ["Capricornio", "Tauro", "Leo", "Piscis"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'party' in Spanish?",
        "choices": ["Fiesta", "Evento", "Celebración", "Cumpleaños"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of these zodiac signs is 'Virgo'?",
        "choices": ["Aries", "Escorpio", "Virgo", "Acuario"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "If your sign is 'Leo', you were born in...",
        "choices": ["Enero", "Julio o agosto", "Marzo", "Octubre"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What verb means 'cumplir' in English?",
        "choices": ["To celebrate", "To fulfill", "To complete", "To turn (age)"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What zodiac sign corresponds to someone born on December 22?",
        "choices": ["Sagitario", "Capricornio", "Leo", "Tauro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "If you were born on April 1, your sign is...",
        "choices": ["Aries", "Virgo", "Libra", "Acuario"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does the verb 'tener' mean?",
        "choices": ["To be", "To have", "To do", "To go"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How is the verb 'ser' conjugated in the first person singular?",
        "choices": ["Soy", "Eres", "Es", "Somos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct verb in this sentence: 'Tú ______ (comer) en la escuela'?",
        "choices": ["Comemos", "Comes", "Comen", "Como"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the appropriate pronoun for 'they' in Spanish?",
        "choices": ["Tú", "Ellos", "Yo", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'We are' in Spanish?",
        "choices": ["Nosotros son", "Ellos son", "Nosotros somos", "Somos ellos"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What verb completes the sentence: 'Ellas ______ (hablar) español'?",
        "choices": ["Hablas", "Hablamos", "Habla", "Hablan"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "How is the verb 'escribir' conjugated for 'yo'?",
        "choices": ["Escribo", "Escribes", "Escribimos", "Escriben"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which verb means 'to write' in Spanish?",
        "choices": ["Correr", "Leer", "Escribir", "Hablar"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'fifty' in Spanish?",
        "choices": ["Cincuenta", "Veinte", "Setenta", "Treinta"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What number comes after forty-nine?",
        "choices": ["Treinta", "Cincuenta", "Sesenta", "Cuarenta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'twenty-five' in Spanish?",
        "choices": ["Quince", "Veinticinco", "Treinta", "Cuarenta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'one hundred' in Spanish?",
        "choices": ["Veinte", "Ciento", "Cien", "Cincuenta"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Mi cumpleaños es el ______ (10) de marzo.",
        "choices": ["diez", "veinte", "treinta", "cuarenta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella cumple ______ (25) años mañana.",
        "choices": ["veinticinco", "quince", "treinta", "cincuenta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuándo es tu ______ (birthday)?",
        "choices": ["cumpleaños", "aniversario", "fiesta", "día"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tengo una fiesta de cumpleaños el ______ (Saturday).",
        "choices": ["sábado", "domingo", "lunes", "martes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi signo zodiacal es ______ (Leo) porque nací en agosto.",
        "choices": ["Leo", "Piscis", "Aries", "Géminis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vamos a celebrar el ______ (birthday) de mi hermano.",
        "choices": ["cumpleaños", "fiesta", "celebración", "evento"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella es ______ (Pisces) porque nació en marzo.",
        "choices": ["Piscis", "Leo", "Capricornio", "Escorpio"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si naciste en noviembre, tu signo es ______ (Scorpio).",
        "choices": ["Escorpio", "Piscis", "Capricornio", "Leo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi padre es ______ (Capricorn) y su cumpleaños es en enero.",
        "choices": ["Capricornio", "Leo", "Géminis", "Aries"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (Gemini) es el signo de mi mejor amiga.",
        "choices": ["Géminis", "Aries", "Piscis", "Capricornio"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______ (am) estudiante de español.",
        "choices": ["soy", "estoy", "eres", "somos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (have) una clase de español.",
        "choices": ["tenemos", "tengo", "tienes", "tienen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (are) muy simpáticos.",
        "choices": ["son", "es", "somos", "eres"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (speak) francés muy bien.",
        "choices": ["hablas", "hablo", "habla", "hablamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella ______ (writes) una carta a su amigo.",
        "choices": ["escribe", "escribo", "escribes", "escribimos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi ______ (father) es ingeniero.",
        "choices": ["padre", "hermano", "abuelo", "tío"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tengo dos ______ (brothers).",
        "choices": ["hermanos", "primos", "hijos", "amigos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi ______ (sister) vive en España.",
        "choices": ["hermana", "tía", "prima", "madre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Su ______ (mother) es profesora.",
        "choices": ["madre", "padre", "hermana", "abuela"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mis ______ (parents) son muy amables.",
        "choices": ["padres", "hermanos", "amigos", "primos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Mi cumpleaños", "rightId": 1 },
            "right": { "word": "Sister", "rightId": 5 }
          },
          {
            "left": { "word": "Cumplir años", "rightId": 2 },
            "right": { "word": "My birthday", "rightId": 1 }
          },
          {
            "left": { "word": "Nací en abril", "rightId": 3 },
            "right": { "word": "I am from Spain", "rightId": 7 }
          },
          {
            "left": { "word": "Escuela", "rightId": 4 },
            "right": { "word": "Birthday", "rightId": 4 }
          },
          {
            "left": { "word": "Mi hermana", "rightId": 5 },
            "right": { "word": "Forty", "rightId": 9 }
          },
          {
            "left": { "word": "Escorpio", "rightId": 6 },
            "right": { "word": "To study", "rightId": 8 }
          },
          {
            "left": { "word": "Soy de España", "rightId": 7 },
            "right": { "word": "To turn (age)", "rightId": 2 }
          },
          {
            "left": { "word": "Estudiar", "rightId": 8 },
            "right": { "word": "Scorpio", "rightId": 6 }
          },
          {
            "left": { "word": "Cuarenta", "rightId": 9 },
            "right": { "word": "I was born in April", "rightId": 3 }
          },
          {
            "left": { "word": "Cien", "rightId": 10 },
            "right": { "word": "Hundred", "rightId": 10 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '10',
    name: 'Spanish Exercise - 10',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct adverb to complete this sentence: Ella trabaja _______?",
        "choices": ["Aquí", "Bien", "Siempre", "Lentamente"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct placement for the adverb 'siempre' in this sentence: Nosotros _______ vamos a la playa los domingos.",
        "choices": ["Siempre", "Vamos", "A veces", "Lentamente"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which adverb is used to indicate place?",
        "choices": ["Cerca", "Rápidamente", "Nunca", "Siempre"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Choose the correct adverb to express the meaning 'slowly':",
        "choices": ["Rápidamente", "Lentamente", "Bien", "Aquí"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Complete the sentence: Tú corres _______ (quickly) por el parque todos los días.",
        "choices": ["Siempre", "Lentamente", "Bien", "Rápidamente"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which adverb indicates frequency?",
        "choices": ["Cerca", "Rápidamente", "A veces", "Lentamente"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the best placement for the adverb bien in the sentence: Él canta _______?",
        "choices": ["Siempre", "Ahora", "Bien", "A veces"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Choose the correct translation for 'I never eat pizza.'",
        "choices": ["Yo siempre como pizza.", "Yo nunca como pizza.", "Yo como pizza ahora.", "Yo bien como pizza."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct adverb to complete this sentence: Los niños están jugando _______?",
        "choices": ["Allí", "Lentamente", "Cerca", "Rápidamente"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Select the correct adverb for the following sentence: El avión despega _______ (now).",
        "choices": ["Siempre", "Lentamente", "Ahora", "Bien"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Marta llega _______ (always) tarde a la oficina.",
        "choices": ["siempre","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El perro duerme _______ (here) en la cama.",
        "choices": ["aquí","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos hablan _______ (quickly) cuando están nerviosos.",
        "choices": ["rápidamente","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo _______ (never) olvido mis llaves en casa.",
        "choices": ["nunca","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vamos al gimnasio _______ (sometimes), no todos los días.",
        "choices": ["a veces","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Manuel canta _______ (good) en la fiesta de cumpleaños.",
        "choices": ["bien","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El tren sale _______ (now) de la estación.",
        "choices": ["ahora","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú debes estudiar _______ (further) si quieres aprobar el examen.",
        "choices": ["más","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vivimos _______ (near) del parque.",
        "choices": ["cerca","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella come _______ (slowly) para disfrutar la comida.",
        "choices": ["lentamente","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Ella habla lentamente.", "rightId": 1 },
            "right": { "word": "We go together.", "rightId": 7 }
          },
          {
            "left": { "word": "Ellos viven cerca.", "rightId": 2 },
            "right": { "word": "I rarely read books.", "rightId": 8 }
          },
          {
            "left": { "word": "Yo estudio frecuentemente.", "rightId": 3 },
            "right": { "word": "She sings well.", "rightId": 9 }
          },
          {
            "left": { "word": "Ellos vienen hoy.", "rightId": 4 },
            "right": { "word": "He reads quietly.", "rightId": 10 }
          },
          {
            "left": { "word": "Tú nunca comes aquí.", "rightId": 5 },
            "right": { "word": "She speaks slowly.", "rightId": 1 }
          },
          {
            "left": { "word": "Él llega siempre temprano.", "rightId": 6 },
            "right": { "word": "They live nearby.", "rightId": 2 }
          },
          {
            "left": { "word": "Nosotros vamos juntos.", "rightId": 7 },
            "right": { "word": "I study frequently.", "rightId": 3 }
          },
          {
            "left": { "word": "Él lee raramente libros.", "rightId": 8 },
            "right": { "word": "They are coming today.", "rightId": 4 }
          },
          {
            "left": { "word": "Ella canta bien.", "rightId": 9 },
            "right": { "word": "You never eat here.", "rightId": 5 }
          },
          {
            "left": { "word": "Él lee en silencio.", "rightId": 10 },
            "right": { "word": "He always arrives early.", "rightId": 6 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '11',
    name: 'Spanish Exercise - 11',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct way to say 'I like sports' in Spanish?",
        "choices": ["Me gustan los deportes", "Me gusta los deportes", "Me encanta los deportes", "Me gustamos los deportes"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'She likes to sing' in Spanish?",
        "choices": ["Le gustan cantar", "Le gusta cantar", "Le encantas cantar", "Le gustas cantar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is the correct indirect object pronoun for 'ellos' (they)?",
        "choices": ["le", "nos", "les", "te"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How would you express 'We are interested in science'?",
        "choices": ["Nos interesan la ciencia", "Nos interesa la ciencia", "Nos interesan las ciencias", "Nos interesa las ciencias"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct form of *gustar* for 'ellos' and 'las películas'?",
        "choices": ["Les gusta las películas", "Les gustan la película", "Les gusta la película", "Les gustan las películas"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Choose the correct sentence to say 'I don’t like coffee':",
        "choices": ["No me gusta el café", "No me gustan el café", "No le gusta el café", "No nos gustan el café"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the translation for 'They love pizza'?",
        "choices": ["Les encanta la pizza", "Les encantan las pizzas", "Les gustan la pizza", "Les gustas la pizza"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'You all like dancing' in Spanish (informal)?",
        "choices": ["Os gusta bailar", "Te gusta bailar", "Os gustan bailar", "Nos gusta bailar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct form for 'We prefer to read books'?",
        "choices": ["Nos encanta leer libros", "Nos gusta leer libros", "Nos interesan leer libros", "Preferimos leer libros"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "How do you express 'She doesn’t like to study'?",
        "choices": ["No le gusta estudiar", "No le gustar estudiar", "No les gusta estudiar", "No le gustan estudiar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "A mí ________ (gustar) el chocolate caliente.",
        "choices": ["gusta","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A ti no ________ (gustar) las verduras.",
        "choices": ["gustan","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A nosotros nos ________ (encantar) los deportes de aventura.",
        "choices": ["encantan","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A ellos les ________ (interesar) la historia.",
        "choices": ["interesa","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A ella ________ (gustar) leer libros románticos.",
        "choices": ["gusta","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A vosotros os ________ (gustar) las fiestas grandes?",
        "choices": ["gustan","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A mí me ________ (gustar) el cine más que la televisión.",
        "choices": ["gusta","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A ti te ________ (interesar) la moda?",
        "choices": ["interesa","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A nosotros no nos ________ (gustar) los insectos.",
        "choices": ["gustan","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A ella le ________ (encantar) las flores.",
        "choices": ["encantan","1","3","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Me gusta la música.", "rightId": 1 },
            "right": { "word": "You (informal) don’t like to study.", "rightId": 7 }
          },
          {
            "left": { "word": "No me gustan las verduras.", "rightId": 2 },
            "right": { "word": "I don’t like vegetables.", "rightId": 2 }
          },
          {
            "left": { "word": "A Juan le gusta leer libros.", "rightId": 3 },
            "right": { "word": "I like music.", "rightId": 1 }
          },
          {
            "left": { "word": "Nos gusta nadar.", "rightId": 4 },
            "right": { "word": "We love traveling.", "rightId": 10 }
          },
          {
            "left": { "word": "Te gustan las películas.", "rightId": 5 },
            "right": { "word": "She speaks slowly.", "rightId": 9 }
          },
          {
            "left": { "word": "A ellos les gusta bailar.", "rightId": 6 },
            "right": { "word": "She doesn’t like chocolate.", "rightId": 8 }
          },
          {
            "left": { "word": "No te gusta estudiar.", "rightId": 7 },
            "right": { "word": "They like to dance.", "rightId": 6 }
          },
          {
            "left": { "word": "A María no le gusta el chocolate.", "rightId": 8 },
            "right": { "word": "We like swimming.", "rightId": 4 }
          },
          {
            "left": { "word": "Me encanta el café.", "rightId": 9 },
            "right": { "word": "I love coffee.", "rightId": 5 }
          },
          {
            "left": { "word": "Él lee en silencio.", "rightId": 10 },
            "right": { "word": "Juan likes to read books.", "rightId": 3 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '12',
    name: 'Spanish Exercise - 12',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct way to say “Turn left at the corner”?",
        "choices": [
          "Gira a la derecha en la esquina.",
          "Sigue recto en la esquina.",
          "Gira a la izquierda en la esquina.",
          "Cruza la esquina."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say “Where is the park?” in Spanish?",
        "choices": [
          "¿Dónde está el parque?",
          "¿Dónde está la plaza?",
          "¿Cómo llego al parque?",
          "¿Puedo ir al parque?"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "If someone says “Sigue recto”, what should you do?",
        "choices": [
          "Turn right",
          "Go straight",
          "Turn left",
          "Cross the street"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What would you say if you want to ask for directions to the nearest supermarket?",
        "choices": [
          "¿Dónde está la estación de tren?",
          "¿Cómo llego al supermercado más cercano?",
          "¿Dónde está el museo?",
          "¿Puedo llegar al supermercado?"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct translation for “Cross the street”?",
        "choices": [
          "Cruza la plaza",
          "Cruza la calle",
          "Sigue la calle",
          "Cruza la esquina"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How would you give directions to go to the library?",
        "choices": [
          "Sigue recto y cruza la calle.",
          "Gira a la derecha y sigue.",
          "Cruza la plaza y sigue recto.",
          "Todas son correctas."
        ],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "How do you say 'The café is between the bank and the bookstore'?",
        "choices": [
          "El café está cerca del banco y la librería.",
          "El café está enfrente del banco y la librería.",
          "El café está entre el banco y la librería.",
          "El café está al lado del banco y la librería."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "If someone says “Está enfrente del museo”, where should you go?",
        "choices": [
          "Next to the museum",
          "Behind the museum",
          "In front of the museum",
          "Far from the museum"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What phrase would you use to direct someone to turn right at the first street?",
        "choices": [
          "Gira a la izquierda en la primera calle.",
          "Sigue recto en la primera calle.",
          "Gira a la derecha en la primera calle.",
          "Cruza la calle en la primera."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the best way to say “The restaurant is far from the park” in Spanish?",
        "choices": [
          "El restaurante está cerca del parque.",
          "El restaurante está lejos del parque.",
          "El restaurante está al lado del parque.",
          "El restaurante está enfrente del parque."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Gira a la ________ (right) en la segunda calle.",
        "choices": ["derecha", "recto", "enfrente de", "calle"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sigue ________ (straight) hasta llegar al parque.",
        "choices": ["recto", "derecha", "enfrente de", "calle"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La estación está ________ (in front of) la plaza.",
        "choices": ["enfrente de", "cerca", "lejos", "calle"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Cruza la ________ (street) y verás la farmacia a la derecha.",
        "choices": ["calle", "plaza", "esquina", "biblioteca"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El hospital está ________ (near) de la escuela.",
        "choices": ["cerca", "lejos", "entre", "al lado de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La biblioteca está ________ (far) del cine.",
        "choices": ["lejos", "cerca", "entre", "enfrente de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Para llegar al museo, tienes que ________ (cross) dos calles.",
        "choices": ["cruzar", "girar", "seguir", "ir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La cafetería está ________ (between) la librería y el banco.",
        "choices": ["entre", "cerca", "lejos", "enfrente de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Gira a la ________ (left) en la esquina para llegar a la estación de tren.",
        "choices": ["izquierda", "derecha", "calle", "plaza"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sigue recto y la tienda está ________ (next to) la farmacia.",
        "choices": ["al lado de", "enfrente de", "lejos", "cerca"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "¿Dónde está la estación de tren?", "rightId": 1 },
            "right": { "word": "Take the first street on the left.", "rightId": 7 }
          },
          {
            "left": { "word": "Gira a la derecha.", "rightId": 2 },
            "right": { "word": "Turn right.", "rightId": 2 }
          },
          {
            "left": { "word": "¿Cómo llego al banco?", "rightId": 3 },
            "right": { "word": "Where is the train station?", "rightId": 1 }
          },
          {
            "left": { "word": "Siga todo recto.", "rightId": 4 },
            "right": { "word": "The bank is in front of the church.", "rightId": 10 }
          },
          {
            "left": { "word": "La biblioteca está al lado del parque.", "rightId": 5 },
            "right": { "word": "Can you help me, please?", "rightId": 9 }
          },
          {
            "left": { "word": "El supermercado está a la izquierda.", "rightId": 6 },
            "right": { "word": "It is next to the park.", "rightId": 8 }
          },
          {
            "left": { "word": "Toma la primera calle a la izquierda.", "rightId": 7 },
            "right": { "word": "The supermarket is on the left.", "rightId": 6 }
          },
          {
            "left": { "word": "Está al lado del café.", "rightId": 8 },
            "right": { "word": "Go straight ahead.", "rightId": 4 }
          },
          {
            "left": { "word": "¿Puede ayudarme, por favor?", "rightId": 9 },
            "right": { "word": "The library is next to the park.", "rightId": 5 }
          },
          {
            "left": { "word": "El banco está enfrente de la iglesia.", "rightId": 10 },
            "right": { "word": "How do I get to the bank?", "rightId": 3 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '13',
    name: 'Spanish Exercise - 13',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct way to start a formal email?",
        "choices": ["Querido amigo", "Hola", "Estimado Sr.", "Buenas tardes"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"I would like to reschedule the meeting\"?",
        "choices": ["Me gustaría cancelar la reunión.", "Me gustaría reprogramar la reunión.", "Me gustaría confirmar la reunión.", "Me gustaría cambiar la cita."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the appropriate ending for a formal email?",
        "choices": ["Nos vemos", "Hasta luego", "Saludos", "Atentamente"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which phrase is informal?",
        "choices": ["Estimado Señor", "Le escribo para...", "Nos vemos mañana", "Quedo a su disposición"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the best way to politely ask someone to confirm their availability?",
        "choices": ["¿Podrías decirme si estás libre?", "¿Está disponible el viernes?", "¿Te apetece quedar el viernes?", "¿Tienes tiempo libre?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What phrase is commonly used to request a meeting in a formal email?",
        "choices": ["¿Quedamos para tomar un café?", "Me gustaría concertar una reunión.", "¿Nos vemos el viernes?", "¿Cuándo te viene bien?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following would you use to confirm a time in an informal email?",
        "choices": ["Quedo a la espera de su confirmación.", "Nos vemos el viernes a las 5:00 p.m.", "Por favor, confirme su disponibilidad.", "Agradezco su respuesta pronta."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you formally cancel an appointment?",
        "choices": ["Voy a cancelar nuestra reunión.", "Debo cancelar nuestra reunión.", "Quería avisar que la reunión ha sido cancelada.", "Por favor, no puedo asistir a la reunión."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the appropriate phrase to suggest an appointment in an informal context?",
        "choices": ["¿Le parece bien el jueves?", "¿Te va bien el jueves a las 5?", "¿Podría confirmar su disponibilidad?", "Me gustaría agendar una reunión."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How would you request a meeting time in a formal email?",
        "choices": ["¿Nos vemos el viernes?", "¿Te va bien el viernes?", "Me gustaría coordinar una reunión para el viernes.", "¿Cuándo quedamos?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "________ (Dear) Sr. García, le escribo para confirmar nuestra reunión del jueves.",
        "choices": ["Estimado","Querido", "1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nos gustaría ________ (confirm) la cita para el próximo martes.",
        "choices": ["confirmar", "cancelar","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hola Ana, ¿te parece bien si ________ (see you) a las 4:00 p.m. para tomar un café?",
        "choices": ["nos vemos", "confirmamos","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le escribo para ________ (program) una reunión la semana próxima.",
        "choices": ["programar","solicitar", "1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "________ (Sincerely), Juan Pérez.",
        "choices": ["Atentamente", "Saludos","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Voy a ________ (reschedule) nuestra cita para el lunes.",
        "choices": ["reprogramar", "confirmar","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "________ (This) libre este viernes para una reunión?",
        "choices": ["¿Está?","¿Estás?", "1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Le informo que debo ________ (Cancel) la reunión del miércoles.",
        "choices": ["cancelar", "confirmar","1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hola Pedro, ¿qué te parece si ________ (we program) la reunión el viernes?",
        "choices": ["programamos","confirmamos", "1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Por favor, ________ (confirm) su disponibilidad para la reunión.",
        "choices": ["confirma","confirme", "1","2"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Estimado/a Sr./Sra.", "rightId": 1 },
            "right": { "word": "Thank you for your time.", "rightId": 3 }
          },
          {
            "left": { "word": "¿Podemos reunirnos la próxima semana?", "rightId": 2 },
            "right": { "word": "Could we meet next week?", "rightId": 2 }
          },
          {
            "left": { "word": "Agradezco su tiempo y atención.", "rightId": 3 },
            "right": { "word": "Dear Mr./Mrs.", "rightId": 1 }
          },
          {
            "left": { "word": "Me gustaría agendar una reunión.", "rightId": 4 },
            "right": { "word": "Thanks for your message.", "rightId": 10 }
          },
          {
            "left": { "word": "Atentamente,", "rightId": 5 },
            "right": { "word": "Would you like to grab a coffee this afternoon?", "rightId": 9 }
          },
          {
            "left": { "word": "Espero que este correo le encuentre bien.", "rightId": 6 },
            "right": { "word": "I would like to schedule a meeting.", "rightId": 4 }
          },
          {
            "left": { "word": "Estoy escribiendo para confirmar nuestra cita.", "rightId": 7 },
            "right": { "word": "I hope this email finds you well.", "rightId": 6 }
          },
          {
            "left": { "word": "Quería confirmar si estás disponible mañana.", "rightId": 8 },
            "right": { "word": "I wanted to confirm if you are available tomorrow.", "rightId": 8 }
          },
          {
            "left": { "word": "¿Te gustaría tomar un café esta tarde?", "rightId": 9 },
            "right": { "word": "Sincerely,", "rightId": 5 }
          },
          {
            "left": { "word": "Gracias por tu mensaje.", "rightId": 10 },
            "right": { "word": "I am writing to confirm our appointment.", "rightId": 7 }
          }
        ]
      }
      
    ]
  }
];
