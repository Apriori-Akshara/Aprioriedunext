export const quiz = [
  {
    quiz: '1',
    name: 'Spanish Exercise - 1 (A1)',
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
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
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
    name: 'Spanish Exercise - 2 (A1)',
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
        "question": "Which is the correct article for gato (cat)?",
        "choices": ["El", "La", "Un", "Los"],
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
        "question": "What is the correct article for 'manzana' (apple)?",
        "choices": ["La", "El", "Una", "Los"],
        "type": "MCQs",
        "correctAnswer": 3
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
        "question": "What is the indefinite article for 'libros' (books)?",
        "choices": ["Un", "Una", "Los", "Unos"],
        "type": "MCQs",
        "correctAnswer": 4
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
        "question": "Which article should be used for 'perro' (dog)?",
        "choices": ["Un", "Una", "Los", "Unos"],
        "type": "MCQs",
        "correctAnswer": 1
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
        "question": "What is the correct article for 'ventana' (window)?",
        "choices": ["Un", "La", "Los", "Unos"],
        "type": "MCQs",
        "correctAnswer": 2
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
        "question": "Which is the definite article for 'silla' (chair)?",
        "choices": ["El", "La", "Una", "Los"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct article for 'estudiantes' (students)?",
        "choices": ["El", "Las", "Una", "Los"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What is the 15th letter of the Spanish alphabet?",
        "choices": ["O", "P", "M", "N"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the indefinite article for 'jardín' (garden)?",
        "choices": ["Un", "El", "Una", "Los"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which article is used for 'niños' (children)?",
        "choices": ["La", "El", "Las", "Los"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What is the indefinite article for 'profesor' (teacher)?",
        "choices": ["Un", "El", "Una", "Los"],
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
        "question": "______ (el/la/los/las) gato está en la casa.",
        "choices": ["El", "La", "Los", "Las"],
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
        "question": "______ (un/una) manzana está sobre la mesa.",
        "choices": ["Una", "Un"],
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
        "question": "______ (el/la/los/las) libros están en la estantería.",
        "choices": ["Los", "El", "La", "Las"],
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
        "question": "Tengo ______ (un/una) coche rojo.",
        "choices": ["Un", "Una"],
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
        "question": "______ (el/la/los/las) niña juega en el parque.",
        "choices": ["La", "El", "Los", "Las"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (un/una) perro corre rápido.",
        "choices": ["Un", "Una"],
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
        "question": "______ (el/la/los/las) ventana está abierta.",
        "choices": ["La", "El", "Los", "Las"],
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
        "question": "______ (un/una) estudiante habla español.",
        "choices": ["Un", "Una"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (el/la/los/las) profesor está en la clase.",
        "choices": ["El", "La", "Los", "Las"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Quiero ______ (un/una) taza de café.",
        "choices": ["Una", "Un"],
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
            "right": { "word": "EIGHTEEN", "rightId": 5}
          },
          {
            "left": { "word": "OCHO", "rightId": 2 },
            "right": { "word": "FIVE", "rightId": 4 }
          },
          {
            "left": { "word": "DIEZ", "rightId": 3 },
            "right": { "word": "FOURTEEN", "rightId": 1 }
          },
          {
            "left": { "word": "CINCO", "rightId": 4 },
            "right": { "word": "TEN", "rightId": 3 }
          },
          {
            "left": { "word": "DIECIOCHO", "rightId": 5 },
            "right": { "word": "EIGHT", "rightId": 2 }
          }
                ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "UN", "rightId": 6 },
            "right": { "word": "SEVENTEEN", "rightId": 10 }
          },
          {
            "left": { "word": "SEIS", "rightId": 7 },
            "right": { "word": "SIXTEEN", "rightId": 9 }
          },
          {
            "left": { "word": "CATORCE", "rightId": 8 },
            "right": { "word": "SIX", "rightId": 7 }
          },
          {
            "left": { "word": "DIECISÉIS", "rightId": 9 },
            "right": { "word": "FOURTEEN", "rightId": 8 }
          },
          {
            "left": { "word": "DIECISIETE", "rightId": 10 },
            "right": { "word": "ONE", "rightId": 6 }
          }
        ]
      },

      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "El perro", "rightId": 1 },
            "right": { "word": "The cats", "rightId": 5 }
          },
          {
            "left": { "word": "Una manzana", "rightId": 2 },
            "right": { "word": "a book", "rightId": 4 }
          },
          {
            "left": { "word": "Las casas", "rightId": 3 },
            "right": { "word": "the dog", "rightId": 1 }
          },
          {
            "left": { "word": "Un libro", "rightId": 4 },
            "right": { "word": "an apple", "rightId": 2 }
          },
          {
            "left": { "word": "Los gatos", "rightId": 5 },
            "right": { "word": "The houses", "rightId": 3 }
          }
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "La mesa", "rightId": 6 },
            "right": { "word": "The garden", "rightId": 8 }
          },
          {
            "left": { "word": "Una silla", "rightId": 7 },
            "right": { "word": "The windows", "rightId": 9 }
          },
          {
            "left": { "word": "El jardín", "rightId": 8 },
            "right": { "word": "The window", "rightId": 10 }
          },
          {
            "left": { "word": "Las ventanas", "rightId": 9 },
            "right": { "word": "a chair", "rightId": 7 }
          },
          {
            "left": { "word": "La ventana", "rightId": 10 },
            "right": { "word": "The table", "rightId": 6 }
          }
        ]
      }
    ]
  },
  {
    quiz: '3',
    name: 'Spanish Exercise - 3 (A1)',
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
        "question": "Choose the correct possessive adjective for: Mi hermana se llama María.",
        "choices": ["Mi", "Tu", "Su", "Nuestro"],
        "type": "MCQs",
        "correctAnswer": 1
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
        "question": "Choose the correct possessive adjective for: Tu madre trabaja en un hospital.",
        "choices": ["Mi", "Tu", "Su", "Nuestra"],
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
        "question": "Choose the correct possessive adjective for: Sus padres viven en la ciudad.",
        "choices": ["Mis", "Tus", "Sus", "Nuestros"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is \"sesenta\" in English?",
        "choices": ["Sixty", "Seventy", "Eighty", "Ninety"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Choose the correct possessive adjective for: Su perro es muy bonito.",
        "choices": ["Mi", "Nuestro", "Tu", "Su"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Choose the correct possessive adjective for: Nuestro abuelo vive con nosotros.",
        "choices": ["Mi", "Tu", "Nuestro", "Vuestro"],
        "type": "MCQs",
        "correctAnswer": 3
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
        "question": "Choose the correct possessive adjective for: Tus padres son muy amables.",
        "choices": ["Mis", "Tus", "Nuestros", "Sus"],
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
        "question": "Choose the correct possessive adjective for: Mis amigos vienen a casa este fin de semana.",
        "choices": ["Mis", "Tus", "Nuestros", "Sus"],
        "type": "MCQs",
        "correctAnswer": 1
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
        "question": "Choose the correct possessive adjective for: Vuestra casa está cerca de la playa.",
        "choices": ["Nuestra", "Tu", "Vuestra", "Sus"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Choose the correct possessive adjective for: Sus hijos son muy inteligentes.",
        "choices": ["Mis", "Tus", "Sus", "Nuestros"],
        "type": "MCQs",
        "correctAnswer": 3
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
        "question": "Choose the correct possessive adjective for: Nuestra tía vive en Madrid.",
        "choices": ["Nuestra", "Tu", "Vuestra", "Su"],
        "type": "MCQs",
        "correctAnswer": 1
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
        "question": "______ (My) hermano es muy inteligente.",
        "choices": ["Mi","1","2","3"],
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
        "question": "______ (Your - informal) casa es muy bonita.",
        "choices": ["Tu","1","2","3"],
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
        "question": "______ (His) perro es muy amigable.",
        "choices": ["Su","1","2","3"],
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
        "question": "______ (Our) madre cocina todos los días.",
        "choices": ["Nuestra","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (Your - plural in Spain) amigos están en la fiesta.",
        "choices": ["Vuestros","1","2","3"],
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
        "question": "______ (Their) hijos estudian en la escuela.",
        "choices": ["Sus","1","2","3"],
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
        "question": "______ (My) padres viajan a menudo.",
        "choices": ["Mis","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (Your - informal) coche está estacionado fuera.",
        "choices": ["Tu","1","2","3"],
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
        "question": "______ (Our) profesor enseña matemáticas.",
        "choices": ["Nuestro","1","2","3"],
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
        "question": "______ (His) abuela vive en el campo.",
        "choices": ["Su","1","2","3"],
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
            "right": { "word": "Cat", "rightId": 5 }
          },
          {
            "left": { "word": "Gato", "rightId": 5 },
            "right": { "word": "Green", "rightId": 3}
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
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
            "right": { "word": "Yes", "rightId": 8 }
          }
        ]
      },

      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Mi casa", "rightId": 1 },
            "right": { "word": "Our dog", "rightId": 4 }
          },
          {
            "left": { "word": "Tu libro", "rightId": 2 },
            "right": { "word": "My house", "rightId": 1 }
          },
          {
            "left": { "word": "Su coche", "rightId": 3 },
            "right": { "word": "Your friend (plural)", "rightId": 5 }
          },
          {
            "left": { "word": "Nuestro perro", "rightId": 4 },
            "right": { "word": "His/Her/Their car", "rightId": 3 }
          },
          {
            "left": { "word": "Vuestro amigo", "rightId": 5 },
            "right": { "word": "Your book", "rightId": 2 }
          },
         
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Mis zapatos", "rightId": 6 },
            "right": { "word": "Our friends (feminine)", "rightId": 9 }
          },
          {
            "left": { "word": "Tus flores", "rightId": 7 },
            "right": { "word": "His/Her/Their ideas", "rightId": 8 }
          },
          {
            "left": { "word": "Sus ideas", "rightId": 8 },
            "right": { "word": "My shoes", "rightId": 6 }
          },
          {
            "left": { "word": "Nuestras amigas", "rightId": 9 },
            "right": { "word": "Your chairs (plural)", "rightId": 10 }
          },
          {
            "left": { "word": "Vuestras sillas", "rightId": 10 },
            "right": { "word": "Your flowers", "rightId": 7 }
          },
        ]
      },
    ]
  },
  {
    quiz: '4',
    name: 'Spanish Exercise - 4 (A1)',
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
            "right": { "word": "Mother", "rightId": 1 }
          },
          {
            "left": { "word": "Tú", "rightId": 4 },
            "right": { "word": "They (masculine)", "rightId": 3 }
          },
          {
            "left": { "word": "Hermana", "rightId": 5 },
            "right": { "word": "We (masculine)", "rightId": 2 }
          },
          
        ]
      },
      
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Padre", "rightId": 6 },
            "right": { "word": "You (informal)", "rightId": 8 }
          },
          {
            "left": { "word": "Él", "rightId": 7 },
            "right": { "word": "Father", "rightId": 6 }
          },
          {
            "left": { "word": "Ustedes", "rightId": 8 },
            "right": { "word": "He", "rightId": 7 }
          },
          {
            "left": { "word": "Ella", "rightId": 9 },
            "right": { "word": "You all (informal)", "rightId": 10 }
          },
          {
            "left": { "word": "Vosotros", "rightId": 10 },
            "right": { "word": "She", "rightId": 9 }
          },
        ]
      },
    ]
  },
  {
    quiz: '5',
    name: 'Spanish Exercise - 5 (A1)',
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
        "question": "What drink is usually consumed at breakfast?",
        "choices": ["Vino", "Jugo", "Café", "Agua"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of these foods is a main dish in Spanish cuisine?",
        "choices": ["Pan", "Paella", "Fruta", "Vino"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is typical for a snack in Spain?",
        "choices": ["Jamón", "Té o café", "Arroz", "Carne"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which drink does not contain alcohol?",
        "choices": ["Vino", "Agua", "Cerveza", "Sangría"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the gender of the word 'fruta'?",
        "choices": ["Masculino", "Femenino", "Neutro", "Ambos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'rice' in Spanish?",
        "choices": ["Pan", "Arroz", "Pasta", "Carne"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What meal is eaten at night in Spain?",
        "choices": ["Almuerzo", "Merienda", "Cena", "Desayuno"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of these is a food accompaniment?",
        "choices": ["Vino", "Carne", "Té", "Arroz"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of these is not a food item?",
        "choices": ["Pan", "Té", "Jugo", "Vino"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What drink is associated with Spanish breakfast?",
        "choices": ["Jugo", "Café", "Té", "Agua"],
        "type": "MCQs",
        "correctAnswer": 2
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
        "question": "Yo como ______ (bread) todos los días para el desayuno.",
        "choices": ["pan","1","2","3"],
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
        "question": "¿Tú quieres ______ (some) arroz con pollo?",
        "choices": ["un poco de","1","2","3"],
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
        "question": "Ella toma ______ (water) en la mañana.",
        "choices": ["agua","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros comemos ______ (some) carne para la cena.",
        "choices": ["algo de","1","2","3"],
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
        "question": "Me encanta ______ (wine) español.",
        "choices": ["El vino","1","2","3"],
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
        "question": "Voy a beber ______ (a little) jugo de naranja.",
        "choices": ["un poco de","1","2","3"],
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
        "question": "Ellos están tomando ______ (tea) en la tarde.",
        "choices": ["té","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo como ______ (fruit) con mi desayuno.",
        "choices": ["fruta","1","2","3"],
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
        "question": "Quiero comprar ______ (some) pasta para la cena.",
        "choices": ["algo de","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (chicken) es muy común en muchas comidas españolas.",
        "choices": ["El pollo","1","2","3"],
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
            "right": { "word": "You (informal)", "rightId": 4 }
          },
          {
            "left": { "word": "Ellas", "rightId": 3 },
            "right": { "word": "He", "rightId": 1 }
          },
          {
            "left": { "word": "Tú", "rightId": 4 },
            "right": { "word": "They (feminine)", "rightId": 3 }
          },
          {
            "left": { "word": "Ustedes", "rightId": 5 },
            "right": { "word": "Us", "rightId": 2 }
          },
          ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Cuarenta", "rightId": 6 },
            "right": { "word": "She", "rightId": 9 }
          },
          {
            "left": { "word": "Veinticinco", "rightId": 7 },
            "right": { "word": "Forty", "rightId": 6 }
          },
          {
            "left": { "word": "Them", "rightId": 8 },
            "right": { "word": "Forty-two", "rightId": 10 }
          },
          {
            "left": { "word": "Ella", "rightId": 9 },
            "right": { "word": "Ellos (masculine)", "rightId": 8 }
          },
          {
            "left": { "word": "Cuarenta y dos", "rightId": 10 },
            "right": { "word": "Twenty-five", "rightId": 7 }
          }
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Pan", "rightId": 1 },
            "right": { "word": "Water", "rightId": 2 }
          },
          {
            "left": { "word": "Agua", "rightId": 2 },
            "right": { "word": "Tea", "rightId": 4 }
          },
          {
            "left": { "word": "Comida", "rightId": 3 },
            "right": { "word": "Bread", "rightId": 1 }
          },
          {
            "left": { "word": "Té", "rightId": 4 },
            "right": { "word": "Wine", "rightId": 5 }
          },
          {
            "left": { "word": "Vino", "rightId": 5 },
            "right": { "word": "Food", "rightId": 3 }
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Arroz", "rightId": 6 },
            "right": { "word": "Meat", "rightId": 8 }
          },
          {
            "left": { "word": "Desayuno", "rightId": 7 },
            "right": { "word": "Fruit", "rightId": 9 }
          },
          {
            "left": { "word": "Carne", "rightId": 8 },
            "right": { "word": "Breakfast", "rightId": 7 }
          },
          {
            "left": { "word": "Fruta", "rightId": 9 },
            "right": { "word": "Dinner", "rightId": 10 }
          },
          {
            "left": { "word": "Cena", "rightId": 10 },
            "right": { "word": "Rice", "rightId": 6 }
          }
        ]
      }
    ]
  },
  {
    quiz: '6',
    name: 'Spanish Exercise - 6 (A1)',
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
          "question": "What is 'la cocina' in English?",
          "choices": ["Bathroom", "Living room", "Kitchen", "Bedroom"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Where is 'la mesa'?",
          "choices": ["In the garden", "In the dining room", "In the bathroom", "In the bedroom"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does 'delante de' mean?",
          "choices": ["Behind", "On top of", "In front of", "Between"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Where is 'el sofá'?",
          "choices": ["In the kitchen", "In the living room", "In the bathroom", "In the garden"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say 'table' in Spanish?",
          "choices": ["Cama", "Mesa", "Silla", "Estantería"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "'These desks are in the study.' What is the correct word to fill in the blank?",
          "choices": ["Esas", "Estas", "Aquel", "Aquellas"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Where is 'la cama'?",
          "choices": ["In the bathroom", "In the living room", "In the bedroom", "In the hallway"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "'That garden is very big.' What is the correct demonstrative adjective?",
          "choices": ["Ese", "Estos", "Aquella", "Esta"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say 'sofa' in Spanish?",
          "choices": ["Silla", "Sofá", "Cama", "Mesa"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does 'debajo de' mean?",
          "choices": ["Above", "In front of", "Below", "Behind"],
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
        "question": "El ______ (living room) está junto al comedor.",
        "choices": ["Sala", "Cama", "Mesa", "Baño"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (bed) está en el dormitorio.",
        "choices": ["Cama", "Sofá", "Estudio", "Mesa"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (This) mesa está en la cocina.",
        "choices": ["Esta", "Ese", "Aquel", "Estas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (sofa) está frente a la televisión.",
        "choices": ["Sofá", "Mesa", "Sala", "Cama"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (closet) está al lado de la cama.",
        "choices": ["Armario", "Estudio", "Silla", "Baño"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Dónde está ______ (that) silla?",
        "choices": ["Esa", "Esta", "Esas", "Aquella"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El ______ (study) está en el segundo piso.",
        "choices": ["Estudio", "Sala", "Baño", "Pasillo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (These) sillas son cómodas.",
        "choices": ["Estas", "Esas", "Aquellas", "Esa"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (bathroom) está detrás de la cocina.",
        "choices": ["Baño", "Sala", "Cama", "Mesa"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Vas a poner la ______ (table) en la sala?",
        "choices": ["Mesa", "Sofá", "Armario", "Estudio"],
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
            "right": { "word": "Window", "rightId": 5 }
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
            "right": { "word": "House", "rightId": 3 }
          },
          {
            "left": { "word": "Ventana", "rightId": 5 },
            "right": { "word": "Book", "rightId": 4 }
          },
           ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
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
            "right": { "word": "Chair", "rightId": 10 }
          },
          {
            "left": { "word": "Escuela", "rightId": 9 },
            "right": { "word": "Friend", "rightId": 7 }
          },
          {
            "left": { "word": "Silla", "rightId": 10 },
            "right": { "word": "Family", "rightId": 6 }
          }
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Cama", "rightId": 1 },
            "right": { "word": "Kitchen", "rightId": 3 }
          },
          {
            "left": { "word": "Escritorio", "rightId": 2 },
            "right": { "word": "Bed", "rightId": 1 }
          },
          {
            "left": { "word": "Cocina", "rightId": 3 },
            "right": { "word": "Couch", "rightId": 4 }
          },
          {
            "left": { "word": "Sofá", "rightId": 4 },
            "right": { "word": "Garden", "rightId": 5 }
          },
          {
            "left": { "word": "Jardín", "rightId": 5 },
            "right": { "word": "Desk", "rightId": 2 }
          },

        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Baño", "rightId": 6 },
            "right": { "word": "Hall", "rightId": 10 }
          },
          {
            "left": { "word": "Mesa", "rightId": 7 },
            "right": { "word": "Aisle", "rightId": 8  }
          },
          {
            "left": { "word": "Pasillo", "rightId": 8 },
            "right": { "word": "Rack", "rightId": 9 }
          },
          {
            "left": { "word": "Estantería", "rightId": 9 },
            "right": { "word": "Table", "rightId": 7 }
          },
          {
            "left": { "word": "Sala", "rightId": 10 },
            "right": { "word": "Bathroom", "rightId": 6 }
          }
        ]
      }
    ]
  },
  {
    quiz: '7',
    name: 'Spanish Exercise - 7 (A1)',
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
      "question": "What does 'Hace calor' mean in English?",
      "choices": ["It’s cold", "It’s hot", "It’s sunny", "It’s windy"],
      "type": "MCQs",
      "correctAnswer": 1
    },
    {
      "question": "In which season is it very cold?",
      "choices": ["Primavera", "Verano", "Otoño", "Invierno"],
      "type": "MCQs",
      "correctAnswer": 3
    },
    {
      "question": "How do you say 'It’s raining' in Spanish?",
      "choices": ["Está nevando", "Está lloviendo", "Hace viento", "Hace sol"],
      "type": "MCQs",
      "correctAnswer": 1
    },
    {
      "question": "Which season is known for being cloudy?",
      "choices": ["Invierno", "Verano", "Otoño", "Primavera"],
      "type": "MCQs",
      "correctAnswer": 2
    },
    {
      "question": "What does 'despejado' mean?",
      "choices": ["Cloudy", "Clear", "Rainy", "Hot"],
      "type": "MCQs",
      "correctAnswer": 1
    },
    {
      "question": "______ (Cold) in winter.",
      "choices": ["Caliente", "Frío", "Nublado", "Lluvia"],
      "type": "MCQs",
      "correctAnswer": 1
    },
    {
      "question": "How do you say 'foggy' in Spanish?",
      "choices": ["Soleado", "Lluvioso", "Nublado", "Niebla"],
      "type": "MCQs",
      "correctAnswer": 3
    },
    {
      "question": "In which season do flowers bloom?",
      "choices": ["Invierno", "Verano", "Primavera", "Otoño"],
      "type": "MCQs",
      "correctAnswer": 2
    },
    {
      "question": "Which season is known for being hot?",
      "choices": ["Primavera", "Verano", "Otoño", "Invierno"],
      "type": "MCQs",
      "correctAnswer": 1
    },
    {
      "question": "What does 'hace viento' mean?",
      "choices": ["It’s raining", "It’s windy", "It’s snowing", "It’s sunny"],
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
      "question": "______ (It's sunny) en verano.",
      "choices": ["Hace sol", "Está nublado", "Hace calor", "Está lloviendo"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "En ______ (winter), hace mucho frío.",
      "choices": ["Invierno", "Otoño", "Verano", "Primavera"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "______ (It's raining) mucho hoy, necesito un paraguas.",
      "choices": ["Está lloviendo", "Está nevando", "Hace viento", "Hace sol"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "En ______ (autumn), las hojas caen de los árboles.",
      "choices": ["Otoño", "Verano", "Primavera", "Invierno"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "______ (It's cloudy) y hace mucho frío.",
      "choices": ["Está nublado", "Hace sol", "Hace calor", "Está lloviendo"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "______ (It's hot) en el verano.",
      "choices": ["Hace calor", "Hace frío", "Hace viento", "Está nublado"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "______ (It's windy) hoy, ten cuidado.",
      "choices": ["Hace viento", "Está nublado", "Hace sol", "Está lloviendo"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "En ______ (spring), las flores florecen.",
      "choices": ["Primavera", "Otoño", "Invierno", "Verano"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "______ (It's snowing) en las montañas.",
      "choices": ["Está nevando", "Está nublado", "Hace viento", "Hace sol"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "______ (It's foggy) esta mañana.",
      "choices": ["Está nublado", "Hace viento", "Hace calor", "Niebla"],
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
            "right": { "word": "Spanish", "rightId": 5 }
          },
          {
            "left": { "word": "Profesia", "rightId": 2 },
            "right": { "word": "Lawyer", "rightId": 4 }
          },
          {
            "left": { "word": "Mexicano", "rightId": 3 },
            "right": { "word": "Italian", "rightId": 1 }
          },
          {
            "left": { "word": "Abogado", "rightId": 4 },
            "right": { "word": "Mexican", "rightId": 3 }
          },
          {
            "left": { "word": "Española", "rightId": 5 },
            "right": { "word": "Teacher", "rightId": 2 }
          },
          ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Inglés", "rightId": 6 },
            "right": { "word": "Italian", "rightId": 9 }
          },
          {
            "left": { "word": "Médico", "rightId": 7 },
            "right": { "word": "French", "rightId": 10 }
          },
          {
            "left": { "word": "Feliz", "rightId": 8 },
            "right": { "word": "Doctor", "rightId": 7 }
          },
          {
            "left": { "word": "Italiano", "rightId": 9 },
            "right": { "word": "Happy", "rightId": 8 }
          },
          {
            "left": { "word": "Francés", "rightId": 10 },
            "right": { "word": "English", "rightId": 6 }
          }
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Hace sol", "rightId": 1 },
            "right": { "word": "It's hot", "rightId": 2 }
          },
          {
            "left": { "word": "Hace calor", "rightId": 2 },
            "right": { "word": "It's cold", "rightId": 4 }
          },
          {
            "left": { "word": "Está nevando", "rightId": 3 },
            "right": { "word": "It's cloudy", "rightId": 5 }
          },
          {
            "left": { "word": "Hace frío", "rightId": 4 },
            "right": { "word": "Está nevando", "rightId": 3 }
          },
          {
            "left": { "word": "Está nublado", "rightId": 5 },
            "right": { "word": "It's sunny", "rightId": 1 }
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Primavera", "rightId": 6 },
            "right": { "word": "Summer", "rightId": 7 }
          },
          {
            "left": { "word": "Verano", "rightId": 7 },
            "right": { "word": "Rainy", "rightId": 10 }
          },
          {
            "left": { "word": "Otoño", "rightId": 8 },
            "right": { "word": "Winter", "rightId": 9 }
          },
          {
            "left": { "word": "Invierno", "rightId": 9 },
            "right": { "word": "Spring", "rightId": 6 }
          },
          {
            "left": { "word": "Lluvioso", "rightId": 10 },
            "right": { "word": "Autumn", "rightId": 8 }
          }
        ]
      }
    ]
  },
  {
    quiz: '8',
    name: 'Spanish Exercise - 8 (A1)',
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
          "question": "What does 'Me gusta leer' mean in English?",
          "choices": ["I like to read", "I don’t like to read", "I love to read", "I am reading"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of the following verbs means 'to swim'?",
          "choices": ["Bailar", "Correr", "Nadar", "Tocar"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does 'No me gusta correr' mean?",
          "choices": ["I like running", "I love running", "I don’t like running", "I run every day"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say 'I love playing football' in Spanish?",
          "choices": ["Me encanta jugar al fútbol", "Me gusta jugar al fútbol", "Me encanta correr", "Me gusta ver fútbol"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of the following means 'to listen to music'?",
          "choices": ["Jugar al fútbol", "Tocar la guitarra", "Escuchar música", "Ir de compras"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How would you express dislike for an activity in Spanish?",
          "choices": ["Me gusta mucho", "No me gusta", "Me encanta", "A mí también"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which verb means 'to go shopping'?",
          "choices": ["Leer", "Bailar", "Ir de compras", "Nadar"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say 'I like to read' in Spanish?",
          "choices": ["Me gusta leer", "Me encanta leer", "No me gusta leer", "Me gusta correr"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which activity is commonly associated with 'Bailar'?",
          "choices": ["Cooking", "Playing football", "Dancing", "Swimming"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does 'Me gusta mucho bailar' mean?",
          "choices": ["I don’t like to dance", "I like to dance a lot", "I love dancing", "I’m dancing"],
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
      "question": "A mí me gusta ______ (to play) videojuegos en mi tiempo libre.",
      "choices": ["jugar", "cocinar", "leer", "nadar"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "No me gusta ______ (to cook) por la noche.",
      "choices": ["cocinar", "jugar", "leer", "nadar"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Me encanta ______ (to read) libros de ciencia ficción.",
      "choices": ["leer", "cocinar", "jugar", "nadar"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "A él le gusta ______ (to swim) en la piscina.",
      "choices": ["nadar", "leer", "cocinar", "jugar"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Nosotros ______ (to listen) música todos los días.",
      "choices": ["escuchamos", "leemos", "jugamos", "nadamos"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "A ti te gusta ______ (to watch) películas de terror.",
      "choices": ["ver", "leer", "bailar", "nadar"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Me gusta mucho ______ (to dance) salsa.",
      "choices": ["bailar", "correr", "leer", "ver"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "A ella le gusta ______ (to go) de compras los sábados.",
      "choices": ["ir", "leer", "correr", "bailar"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "No me gusta ______ (to run) por la mañana.",
      "choices": ["correr", "leer", "nadar", "bailar"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Me encanta ______ (to play) al fútbol con mis amigos.",
      "choices": ["jugar", "leer", "correr", "bailar"],
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
            "right": { "word": "Book", "rightId": 2 }
          },
          {
            "left": { "word": "El lápiz", "rightId": 2 },
            "right": { "word": "Homework", "rightId": 4 }
          },
          {
            "left": { "word": "La silla", "rightId": 3 },
            "right": { "word": "Table", "rightId": 5 }
          },
          {
            "left": { "word": "La tarea", "rightId": 4 },
            "right": { "word": "Chair", "rightId": 3 }
          },
          {
            "left": { "word": "La mesa", "rightId": 5 },
            "right": { "word": "Folder", "rightId": 1 }
          },
          ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "El escritorio", "rightId": 6 },
            "right": { "word": "Thank you", "rightId": 7 }
          },
          {
            "left": { "word": "Gracias", "rightId": 7 },
            "right": { "word": "Excuse me", "rightId": 10 }
          },
          {
            "left": { "word": "Por favor", "rightId": 8 },
            "right": { "word": "Good morning", "rightId": 9 }
          },
          {
            "left": { "word": "Buenos días", "rightId": 9 },
            "right": { "word": "Desk", "rightId": 6 }
          },
          {
            "left": { "word": "Disculpa", "rightId": 10 },
            "right": { "word": "Please", "rightId": 8 }
          }
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Leer", "rightId": 1 },
            "right": { "word": "To dance", "rightId": 2 }
          },
          {
            "left": { "word": "Bailar", "rightId": 2 },
            "right": { "word": "To play soccer", "rightId": 5 }
          },
          {
            "left": { "word": "Escuchar música", "rightId": 3 },
            "right": { "word": "To read", "rightId": 1 }
          },
          {
            "left": { "word": "Correr", "rightId": 4 },
            "right": { "word": "To listen to music", "rightId": 3 }
          },
          {
            "left": { "word": "Jugar al fútbol", "rightId": 5 },
            "right": { "word": "To run", "rightId": 4 }
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Ir de compras", "rightId": 6 },
            "right": { "word": "To play the guitar", "rightId": 9 }
          },
          {
            "left": { "word": "Ver películas", "rightId": 7 },
            "right": { "word": "To swim", "rightId": 10 }
          },
          {
            "left": { "word": "Cocinar", "rightId": 8 },
            "right": { "word": "To go shopping", "rightId": 6 }
          },
          {
            "left": { "word": "Tocar la guitarra", "rightId": 9 },
            "right": { "word": "To cook", "rightId": 8 }
          },
          {
            "left": { "word": "Nadar", "rightId": 10 },
            "right": { "word": "To watch movies", "rightId": 7 }
          }
        ]
      }
    ]
  },
  {
    quiz: '9',
    name: 'Spanish Exercise - 9 (A1)',
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
            "right": { "word": "To turn (age)", "rightId": 2 }
          },
          {
            "left": { "word": "Escuela", "rightId": 4 },
            "right": { "word": "Birthday", "rightId": 4 }
          },
          {
            "left": { "word": "Mi hermana", "rightId": 5 },
            "right": { "word": "I was born in April", "rightId": 3 }
          },
                  ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Escorpio", "rightId": 6 },
            "right": { "word": "To study", "rightId": 8 }
          },
          {
            "left": { "word": "Soy de España", "rightId": 7 },
            "right": { "word": "Forty", "rightId": 9 }
          },
          {
            "left": { "word": "Estudiar", "rightId": 8 },
            "right": { "word": "Scorpio", "rightId": 6 }
          },
          {
            "left": { "word": "Cuarenta", "rightId": 9 },
            "right": { "word": "I am from Spain", "rightId": 7 }
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
    name: 'Spanish Exercise - 10 (A1)',
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
            "right": { "word": "They live nearby.", "rightId": 2 }
          },
          {
            "left": { "word": "Ellos viven cerca.", "rightId": 2 },
            "right": { "word": "You never eat here.", "rightId": 5 }
          },
          {
            "left": { "word": "Yo estudio frecuentemente.", "rightId": 3 },
            "right": { "word": "They are coming today.", "rightId": 4 }
          },
          {
            "left": { "word": "Ellos vienen hoy.", "rightId": 4 },
            "right": { "word": "I study frequently.", "rightId": 3 }
          },
          {
            "left": { "word": "Tú nunca comes aquí.", "rightId": 5 },
            "right": { "word": "She speaks slowly.", "rightId": 1 }
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
         
          {
            "left": { "word": "Él llega siempre temprano.", "rightId": 6 },
            "right": { "word": "She sings well.", "rightId": 9  }
          },
          {
            "left": { "word": "Nosotros vamos juntos.", "rightId": 7 },
            "right": { "word": "I rarely read books.", "rightId": 8 }
          },
          {
            "left": { "word": "Él lee raramente libros.", "rightId": 8 },
            "right": { "word": "We go together.", "rightId": 7 }
          },
          {
            "left": { "word": "Ella canta bien.", "rightId": 9 },
            "right": { "word": "He reads quietly.", "rightId": 10 }
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
    name: 'Spanish Exercise - 11 (A1)',
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
            "right": { "word": "Juan likes to read books.", "rightId": 3  }
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
            "right": { "word": "I love coffee.", "rightId": 5 }
          },
          {
            "left": { "word": "Te gustan las películas.", "rightId": 5 },
            "right": { "word": "We like swimming.", "rightId": 4}
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
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
            "right": { "word": "You (informal) don’t like to study.", "rightId": 7}
          },
          {
            "left": { "word": "Me encanta el café.", "rightId": 9 },
            "right": { "word": "We love traveling.", "rightId": 10 }
          },
          {
            "left": { "word": "Él lee en silencio.", "rightId": 10 },
            "right": { "word": "She speaks slowly.", "rightId": 9 }
          }
        ]
      }
    ]
  },
  {
    quiz: '12',
    name: 'Spanish Exercise - 12 (A1)',
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
        "question": "What is the correct translation for “Cross the square",
        "choices": [
         "Cruza la plaza",
          "Cruza la calle",
          "Sigue la calle",
          "Cruza la esquina"
        ],
        "type": "MCQs",
        "correctAnswer": 1
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
            "right": { "word": "How do I get to the bank?", "rightId": 3 }
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
            "right": { "word": "The library is next to the park.", "rightId": 5 }
          },
          {
            "left": { "word": "La biblioteca está al lado del parque.", "rightId": 5 },
            "right": { "word": "Go straight ahead.", "rightId": 4 }
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
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
            "right": { "word": "Can you help me, please?", "rightId": 9  }
          },
          {
            "left": { "word": "¿Puede ayudarme, por favor?", "rightId": 9 },
            "right": { "word":  "The bank is in front of the church.", "rightId": 10 }
          },
          {
            "left": { "word": "El banco está enfrente de la iglesia.", "rightId": 10 },
            "right": { "word": "Take the first street on the left.", "rightId": 7 }
          }
        ]
      } 
    ]
  },
  {
    quiz: '13',
    name: 'Spanish Exercise - 13 (A1)',
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
            "right": { "word": "Sincerely,", "rightId": 5}
          },
          {
            "left": { "word": "Atentamente,", "rightId": 5 },
            "right": { "word": "I would like to schedule a meeting.", "rightId": 4 }
          },
          
        ]
      },
       {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Espero que este correo le encuentre bien.", "rightId": 6 },
            "right": { "word":  "Would you like to grab a coffee this afternoon?", "rightId": 9 }
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
            "right": { "word": "Thanks for your message.", "rightId": 10 }
          },
          {
            "left": { "word": "Gracias por tu mensaje.", "rightId": 10 },
            "right": { "word": "I am writing to confirm our appointment.", "rightId": 7 }
          }
        ]
      }
    ]
  },
  {
    quiz: '14',
    name: 'Spanish Exercise - 14 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct auxiliary verb for 'yo' in the passato prossimo?",
        "choices": ["Has", "He", "Hemos", "Han"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these is the correct past participle for 'comer'?",
        "choices": ["Comado", "Comido", "Comido", "Comiendo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'We have lived in Spain' in Spanish?",
        "choices": ["Nosotros hemos vivado en España", "Nosotros hemos vivir en España", "Nosotros hemos vivido en España", "Nosotros vivemos en España"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct past participle of 'hacer' (to do)?",
        "choices": ["Hacido", "Hecho", "Hizo", "Haciado"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct past participle of 'romper' (to break)?",
        "choices": ["Rompido", "Roto", "Romper", "Rompado"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'She has written a letter' in Spanish?",
        "choices": ["Ella ha escribir una carta", "Ella ha escrita una carta", "Ella ha escribido una carta", "Ella ha escrito una carta"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which of the following is an irregular past participle?",
        "choices": ["Vivido", "Comido", "Dicho", "Hablado"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you form the passato prossimo for 'They have eaten'?",
        "choices": ["Ellos han comido", "Ellos han comer", "Ellos han comiendo", "Ellos han comido"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'You have done the homework' in Spanish (formal)?",
        "choices": ["Usted ha hecho la tarea", "Tú has hacer la tarea", "Tú has hecho la tarea", "Usted ha hacer la tarea"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the past participle of 'decir' (to say)?",
        "choices": ["Dicho", "Decido", "Decido", "Deciendo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (i have) comido en el restaurante ayer.",
        "choices": ["he","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (we have) terminado el trabajo a tiempo.",
        "choices": ["hemos","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (you have) visto esa película el mes pasado.",
        "choices": ["has","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (they have) hecho la tarea esta mañana.",
        "choices": ["han","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "María ______ (have) escrito un libro el año pasado.",
        "choices": ["ha","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tú ______ (you have) estado en Madrid alguna vez?",
        "choices": ["has","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pedro y Ana ______ (they have) viajado a Francia el verano pasado.",
        "choices": ["han","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo no ______ (I have) leído ese libro aún.",
        "choices": ["he","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (we have) vivido en México por dos años.",
        "choices": ["hemos","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (they have) roto la ventana accidentalmente.",
        "choices": ["han","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Ayer fui al parque.", "rightId": 1 },
            "right": { "word": "I studied Spanish on Monday.", "rightId": 3 }
          },
          {
            "left": { "word": "Comí pizza anoche.", "rightId": 2 },
            "right": { "word": "I ate pizza last night.", "rightId": 2 }
          },
          {
            "left": { "word": "El lunes estudié español.", "rightId": 3 },
            "right": { "word": "Yesterday, I went to the park.", "rightId": 1 }
          },
          {
            "left": { "word": "Vi una película la semana pasada.", "rightId": 4 },
            "right": { "word": "I did my homework yesterday.", "rightId": 5 }
          },
          {
            "left": { "word": "Terminé mi tarea ayer.", "rightId": 5 },
            "right": { "word": "Last week, I saw a movie.", "rightId": 4 }
          },
                  ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "El fin de semana, visité a mis abuelos.", "rightId": 6 },
            "right": { "word": "I slept very well last night.", "rightId": 9 }
          },
          {
            "left": { "word": "Hoy en la mañana, escribí una carta.", "rightId": 7 },
            "right": { "word": "I visited my grandparents last weekend.", "rightId": 6 }
          },
          {
            "left": { "word": "Ayer compré una camisa nueva.", "rightId": 8 },
            "right": { "word": "Today in the morning, I wrote a letter.", "rightId": 7 }
          },
          {
            "left": { "word": "Anoche dormí muy bien.", "rightId": 9 },
            "right": { "word": "Last Friday, I met a new friend.", "rightId": 10 }
          },
          {
            "left": { "word": "El viernes pasado, conocí a un amigo nuevo.", "rightId": 10 },
            "right": { "word": "I bought a new shirt yesterday.", "rightId": 8 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '15',
    name: 'Spanish Exercise - 15 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué **(I will do)** el próximo fin de semana?",
        "choices": ["Harás", "Haremos", "Haré", "Haría"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Yo **(I will go)** al cine con mis amigos mañana.",
        "choices": ["Voy", "Iremos", "Iré", "Irá"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Mañana por la tarde, ellos **(They will play)** al baloncesto.",
        "choices": ["Jugarás", "Jugaremos", "Jugarán", "Jugaría"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué **(you are going to do)** el próximo sábado?",
        "choices": ["Fuiste", "Voy a hacer", "Vas a hacer", "Va a hacer"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "El próximo año, nosotros **(we will travel)** a Japón.",
        "choices": ["Viajaremos", "Viajaremos", "Viajará", "Viajaré"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermana **(will have)** una reunión importante mañana.",
        "choices": ["Tendrás", "Tendré", "Tendremos", "Tendrá"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "El próximo viernes, ellos **(They will come out)** de vacaciones.",
        "choices": ["Saldrán", "Salimos", "Saldrás", "Saldré"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Yo **(I will read)** un libro este fin de semana.",
        "choices": ["Leeré", "Lees", "Leerá", "Leerás"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Vosotros **(you will go)** al concierto mañana.",
        "choices": ["Irás", "Iremos", "Iréis", "Irán"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "El profesor **(will explain)** la lección mañana.",
        "choices": ["Explicaremos", "Explicará", "Explicarán", "Explicarás"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Mañana, yo ______(I will study) para el examen de español.",
        "choices": ["estudiaré","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El próximo verano, nosotros ______(we will travel) a las montañas.",
        "choices": ["viajaremos","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______(they will play) al fútbol el próximo domingo.",
        "choices": ["jugarán","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______(you will learn) a nadar el año que viene.",
        "choices": ["aprenderás","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vosotros ______(you will visit) a vuestros abuelos la próxima semana.",
        "choices": ["visitaréis","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermano ______(will buy) un coche nuevo el mes que viene.",
        "choices": ["comprará","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______(i will) una fiesta de cumpleaños la próxima semana.",
        "choices": ["haré","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El próximo lunes, mis padres ______(will come out) de vacaciones.",
        "choices": ["saldrán","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ustedes ______(will eat) en un restaurante italiano mañana.",
        "choices": ["comerán","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______(we will see) una película esta noche.",
        "choices": ["veremos","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Mañana iré al cine.", "rightId": 1 },
            "right": { "word": "I will eat pizza next week.", "rightId": 2 }
          },
          {
            "left": { "word": "El próximo sábado, visitaré a mis amigos.", "rightId": 2 },
            "right": { "word": "I will play soccer this weekend.", "rightId": 5 }
          },
          {
            "left": { "word": "Este verano, viajaré a España.", "rightId": 3 },
            "right": { "word": "I will go to the movies tomorrow.", "rightId": 1  }
          },
          {
            "left": { "word": "La semana que viene, estudiaré para mis exámenes.", "rightId": 4 },
            "right": { "word": "I will travel to Spain this summer.", "rightId": 3 }
          },
          {
            "left": { "word": "Este fin de semana, jugaré fútbol.", "rightId": 5 },
            "right": { "word": "I will study for my exams next month.", "rightId": 4 }
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "El lunes, trabajaré en mi proyecto.", "rightId": 6 },
            "right": { "word": "I will learn to cook next year.", "rightId": 8 }
          },
          {
            "left": { "word": "Pronto compraré un coche.", "rightId": 7 },
            "right": { "word": "I will work on my project on Monday.", "rightId": 6 }
          },
          {
            "left": { "word": "El año que viene, aprenderé a cocinar.", "rightId": 8 },
            "right": { "word": "I will buy a car soon.", "rightId": 7 }
          },
          {
            "left": { "word": "En diciembre, celebraré mi cumpleaños.", "rightId": 9 },
            "right": { "word": "I will do my homework next week.", "rightId": 10  }
          },
          {
            "left": { "word": "La próxima semana, haré mis tareas.", "rightId": 10 },
            "right": { "word": "I will celebrate my birthday in December.", "rightId": 9 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '16',
    name: 'Spanish Exercise - 16 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "Which festival is known for the “Running of the Bulls”?",
        "choices": ["La Tomatina", "Las Fallas", "San Fermín", "Feria de Abril"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "In which city is La Tomatina held?",
        "choices": ["Pamplona", "Buñol", "Valencia", "Madrid"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which Spanish festival involves the burning of large sculptures?",
        "choices": ["Semana Santa", "Feria de Abril", "Las Fallas", "San Fermín"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What do people throw during La Tomatina?",
        "choices": ["Water", "Flowers", "Tomatoes", "Sand"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "During Semana Santa, what type of events are common in Spain?",
        "choices": ["Religious processions", "Fireworks", "Street parades with animals", "Music concerts"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "In which month is the Feria de Abril celebrated?",
        "choices": ["August", "December", "April", "March"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which festival takes place in the city of Seville and features flamenco dancing?",
        "choices": ["San Fermín", "Feria de Abril", "Las Fallas", "La Tomatina"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Las Fallas marks the arrival of which season?",
        "choices": ["Winter", "Spring", "Summer", "Autumn"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the central activity of the San Fermín festival in Pamplona?",
        "choices": ["Religious ceremonies", "Music and dancing", "Running with the bulls", "Flamenco shows"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "During Semana Santa, people often carry elaborate ______ in the processions.",
        "choices": ["Flags", "Flowers", "Sculptures", "Floats"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      
      // 20 Fill in the Blanks

      {
        "question": "El festival de La Tomatina se ______ (celebrate) en la ciudad de Buñol.",
        "choices": ["celebra", "Sevilla", "Madrid", "Pamplona"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La Semana Santa es una celebración importante durante la semana antes de ______ (Passover).",
        "choices": ["Pascua", "Navidad", "Año Nuevo", "Carnaval"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En el festival de San Fermín, los participantes corren con los ______ (bullfighting).",
        "choices": ["toros", "caballos", "perros", "leones"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Durante la Feria de Abril, la gente lleva ______ (suits) tradicionales y baila flamenco.",
        "choices": ["trajes", "disfraces", "esculturas", "sombreros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Las Fallas es un festival famoso por quemar grandes ______ (sculptures).",
        "choices": ["esculturas", "coches", "trajes", "árboles"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La Feria de Abril se celebra en la ciudad de ______ (Seville).",
        "choices": ["Sevilla", "Madrid", "Barcelona", "Valencia"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La Semana Santa en Sevilla es famosa por sus impresionantes ______ (processions) religiosas.",
        "choices": ["procesiones", "fiestas", "conciertos", "carreras"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La Tomatina es una pelea de ______ (tomatoes), en la que la gente se lanza entre sí.",
        "choices": ["tomates", "uvas", "agua", "manzanas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El encierro de los toros es una actividad peligrosa que tiene lugar en ______ (Pamplona) durante el festival de San Fermín.",
        "choices": ["Pamplona", "Valencia", "Granada", "Málaga"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Las Fallas se ______ (celebrate) en la ciudad de Valencia.",
        "choices": ["celebra", "Sevilla", "Toledo", "Córdoba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "La Tomatina", "rightId": 1 },
            "right": { "word": "Rice Dish", "rightId": 4 }
          },
          {
            "left": { "word": "Día de los Muertos", "rightId": 2 },
            "right": { "word": "Traditional Dance", "rightId": 3 }
          },
          {
            "left": { "word": "Flamenco", "rightId": 3 },
            "right": { "word": "Afternoon Nap", "rightId": 5 }
          },
          {
            "left": { "word": "Paella", "rightId": 4 },
            "right": { "word": "Festival of Tomatoes", "rightId": 1 }
          },
          {
            "left": { "word": "Siesta", "rightId": 5 },
            "right": { "word": "Day of the Dead", "rightId": 2 }
          },
         
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Fiestas Patrias", "rightId": 6 },
            "right": { "word": "Small Plates", "rightId": 10 }
          },
          {
            "left": { "word": "El Día de San Juan", "rightId": 7 },
            "right": { "word": "April Fair", "rightId": 9 }
          },
          {
            "left": { "word": "Carnaval", "rightId": 8 },
            "right": { "word": "Festive Celebration", "rightId": 8 }
          },
          {
            "left": { "word": "La Feria de Abril", "rightId": 9 },
            "right": { "word": "Festival in June", "rightId": 7 }
          },
          {
            "left": { "word": "Tapas", "rightId": 10 },
            "right": { "word": "National Holidays", "rightId": 6 }
          }
        ]
      }
    ]
  },
  {
    quiz: '17',
    name: 'Spanish Exercise - 17 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "Which pronoun is used for informal speech in Spanish?",
        "choices": [ "Usted", "Tú", "Ellos", "Él"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the formal equivalent of '¿Cómo estás?'?",
        "choices": [ "¿Cómo están?","¿Cómo está?", "¿Cómo estuviste?", "¿Cómo estuve?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct verb form for *hablar* in informal speech?",
        "choices": [ "Hable", "Hablo","Hablas", "Hablan"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is an informal way to ask for help?",
        "choices": [ "¿Puede ayudarme?","¿Podrías ayudarme?", "¿Podrían ayudarme?", "¿Podrá ayudarme?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which pronoun is used for formal speech?",
        "choices": [ "Tú", "Él","Usted", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the informal version of '¿De dónde es usted?'?",
        "choices": ["¿De dónde eres?", "¿De dónde somos?", "¿De dónde estoy?", "¿De dónde soy?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the formal version of '¿Qué haces?'?",
        "choices": ["¿Qué hace usted?", "¿Qué haces tú?", "¿Qué estamos haciendo?", "¿Qué hicieron?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which sentence is used in a formal context?",
        "choices": [ "¿Cómo te llamas?","¿Cómo se llama?", "¿Cómo me llamo?", "¿Cómo nos llamamos?"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the informal version of '¿Qué tal su día?'?",
        "choices": [ "¿Qué tal mis días?", "¿Qué tal sus días?","¿Qué tal tu día?", "¿Qué tal está tu día?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "In which situation would you use 'Usted'?",
        "choices": ["Speaking to a stranger or in a professional setting", "Talking to a child", "Speaking with a friend", "Talking to a family member"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Formal: ¿Usted ______ (can) ayudarme con esta tarea?",
        "choices": ["puede", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ¿Dónde tú ______ (you live)?",
        "choices": ["vives", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: Buenos días, ¿cómo ______ (this)?",
        "choices": ["está", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ¿Qué tú ______ (are) haciendo ahora?",
        "choices": ["estás", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: Señor González, ¿Usted ______ (has) un momento?",
        "choices": ["tiene", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ¿tú ______ (you come) a la fiesta esta noche?",
        "choices": ["vienes", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: Disculpe, ¿Usted ______ (know) dónde está la estación?",
        "choices": ["sabe", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ¿tú ______ (have) tienes hermanos?",
        "choices": ["tienes", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: ¿Usted ______ (could) decirme la dirección?",
        "choices": ["podría", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: Hola, ¿tú ______ (you come) a comer?",
        "choices": ["vienes", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Buenos días", "rightId": 1 },
            "right": { "word": "Porfa", "rightId": 4}
          },
          {
            "left": { "word": "¿Cómo está usted?", "rightId": 2 },
            "right": { "word": "Encantado/a", "rightId": 3 }
          },
          {
            "left": { "word": "Mucho gusto", "rightId": 3 },
            "right": { "word": "Perdona", "rightId": 5 }
          },
          {
            "left": { "word": "Por favor", "rightId": 4 },
            "right": { "word": "¡Hola!", "rightId": 1 }
          },
          {
            "left": { "word": "Disculpe", "rightId": 5 },
            "right": { "word": "¿Qué tal?", "rightId": 2 }
          },
                  ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Le agradezco", "rightId": 6 },
            "right": { "word": "¿Cómo te llamas?", "rightId": 10 }
          },
          {
            "left": { "word": "Me gustaría saber", "rightId": 7 },
            "right": { "word": "¡Qué gusto!", "rightId": 9 }
          },
          {
            "left": { "word": "¿Podría ayudarme?", "rightId": 8 },
            "right": { "word": "Quiero saber", "rightId": 7 }
          },
          {
            "left": { "word": "Es un placer", "rightId": 9 },
            "right": { "word": "¿Me ayudas?", "rightId": 8}
          },
          {
            "left": { "word": "¿Cómo se llama usted?", "rightId": 10 },
            "right": { "word": "Gracias", "rightId": 6 }
          }
        ]
      }
    ]
  },
  {
    quiz: '18',
    name: 'Spanish Exercise - 18 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "How do you ask 'Can I speak with [name]?' formally in Spanish?",
        "choices": [
          "¿Puedo hablar con [nombre]?",
          "¿Puedo ver a [nombre]?",
          "¿Está [nombre]?",
          "¿Puedes llamarme a [nombre]?"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is a formal way to answer the phone in Spanish?",
        "choices": [
          "¿Hola?",
          "¿Dígame?",
          "¿Qué tal?",
          "¿Cómo estás?"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'Te llamo más tarde' mean in English?",
        "choices": [
          "I will call you later",
          "You call me later",
          "I will wait for you",
          "You are late"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of these is an informal way to start a phone conversation?",
        "choices": [
          "Buenos días",
          "Buenas noches",
          "Hola",
          "¿Dígame?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How would you say 'One moment, please' politely in Spanish?",
        "choices": [
          "Un momento, por favor",
          "Ahora mismo",
          "Un segundo",
          "Dame un momento"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct response when you want to say 'Thank you for your call' in a formal conversation?",
        "choices": [
          "Gracias por tu llamada",
          "Gracias por llamar",
          "Gracias por su llamada",
          "Muchas gracias"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How would you politely tell someone you are calling for information?",
        "choices": [
          "Llamo por información",
          "Estoy llamando a preguntar",
          "Quiero preguntar algo",
          "Llamo para pedir información"
        ],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which phrase means 'I’m sorry, they are not available'?",
        "choices": [
          "Lo siento, no está disponible",
          "No, gracias",
          "Lo siento, está ocupado",
          "Estoy disponible"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the formal way to say 'Please hold on'?",
        "choices": [
          "Espérame",
          "Espera un segundo",
          "Un momento, por favor",
          "Te llamo luego"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of these is the most polite way to end a phone conversation?",
        "choices": [
          "Chao",
          "Nos vemos",
          "Hasta luego",
          "Gracias por su llamada, hasta luego"
        ],
        "type": "MCQs",
        "correctAnswer": 4
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Formal: ¿Usted ______ (could) pasarme con el señor García?",
        "choices": ["podría", "Hola", "me llamo", "tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ______ (Hello), ¿cómo estás?",
        "choices": ["Hola", "podría", "me llamo", "tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: Buenas tardes, ______ (my name is) Ana. ¿Puedo hablar con el señor Fernández?",
        "choices": ["me llamo", "podría", "Hola", "tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ¿______ (you) tienes un minuto para hablar?",
        "choices": ["tú", "podría", "me llamo", "Hola"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: ______ (thank you) por su llamada, estaré en contacto.",
        "choices": ["Gracias", "podría", "me llamo", "tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ¿tú ______ (you come) a la fiesta esta noche?",
        "choices": ["vienes", "podría", "me llamo", "Hola"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: Disculpe, ¿podría ______ (wait) un momento?",
        "choices": ["esperar", "podría", "me llamo", "Hola", "Gracias", "tú", "tú", "Dónde", "está", "llamo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: ______ (Where) estás ahora?",
        "choices": ["¿Dónde", "podría", "me llamo", "tú", "Gracias", "tú", "esperar", "está", "llamo", "tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Formal: Lo siento, el señor Martínez no ______ (this) disponible en este momento.",
        "choices": ["está", "podría", "me llamo", "Hola"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Informal: Te ______ (called) más tarde, ¿vale?",
        "choices": ["llamo", "podría", "me llamo", "Hola"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "¿Hola, puedo hablar con... ?", "rightId": 1 },
            "right": { "word": "I want to leave a message.", "rightId": 4 }
          },
          {
            "left": { "word": "Soy [Tu Nombre].", "rightId": 2 },
            "right": { "word": "Is [Name] home?", "rightId": 3 }
          },
          {
            "left": { "word": "¿Está [Nombre] en casa?", "rightId": 3 },
            "right": { "word": "Can you tell him to call?", "rightId": 5 }
          },
          {
            "left": { "word": "Quiero dejar un mensaje.", "rightId": 4 },
            "right": { "word": "Hello, can I talk to... ?", "rightId": 1 }
          },
          {
            "left": { "word": "¿Puedes decirle que llame?", "rightId": 5 },
            "right": { "word": "I am [Your Name].", "rightId": 2 }
          },
          ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "Muchas gracias.", "rightId": 6 },
            "right": { "word": "Can you help me?", "rightId": 10 }
          },
          {
            "left": { "word": "Adiós, que tenga un buen día.", "rightId": 7 },
            "right": { "word": "No problem.", "rightId": 9 }
          },
          {
            "left": { "word": "Estoy llamando por un asunto.", "rightId": 8 },
            "right": { "word": "I'm calling about a matter.", "rightId": 8}
          },
          {
            "left": { "word": "No hay problema.", "rightId": 9 },
            "right": { "word": "Goodbye, have a good day.", "rightId": 7 }
          },
          {
            "left": { "word": "¿Me puedes ayudar?", "rightId": 10 },
            "right": { "word": "Thank you so much.", "rightId": 6 }
          }
        ]
      }
    ]
  },
  {
    quiz: '19',
    name: 'Spanish Exercise - 19 (A1)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct way to begin a formal letter in Spanish?",
        "choices": ["Hola", "Estimado/a", "Querido/a", "Buenas tardes"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'Sincerely' in Spanish in a formal letter?",
        "choices": ["Hasta luego", "Gracias", "Atentamente", "Le escribo"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the translation of 'Subject' in a formal email?",
        "choices": ["Asunto", "Estimado", "Firma", "Cuerpo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following phrases means 'I am writing to you about' in a formal letter?",
        "choices": ["Le llamo para...", "Le escribo en relación a...", "Te mando un mensaje para...", "Estoy escribiendo porque..."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct word for 'attached' in Spanish when referring to an email?",
        "choices": ["Adjunto", "Firma", "Corrección", "Cita"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How would you say 'I look forward to your reply' in a formal email?",
        "choices": ["Espero tu llamada", "Quedo a la espera de su respuesta", "Nos vemos pronto", "Gracias por tu respuesta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following is a formal closing for a letter?",
        "choices": ["Nos vemos", "Saludos", "Le saluda cordialmente", "Hasta luego"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which part of a letter refers to the name of the person writing it?",
        "choices": ["Saludo", "Firma", "Cuerpo", "Asunto"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the translation of 'To whom it may concern' in a formal letter?",
        "choices": ["Estimado/a Señor", "A quien corresponda", "Querido/a", "Señor/a"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How would you formally ask for a reply in Spanish?",
        "choices": ["Por favor, respóndeme rápido", "Quedo a la espera de su respuesta", "Mándame tu respuesta pronto", "Por favor, mándame un correo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "(Salutation) Estimado/a ______ (Mister) Pérez,",
        "choices": ["Señor", "Señor Pérez", "Hola", "Buenos días"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Introduction) Le ______ (I write) para solicitar más información sobre su empresa.",
        "choices": ["escribo", "escriba", "llamo", "digo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Body) Adjunto encontrará el ______ (document) solicitado.",
        "choices": ["documento", "correo", "informe", "archivo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Closing) Quedo a la ______ (wait) de su pronta respuesta.",
        "choices": ["espera", "disposición", "orden", "atención"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Subject) El ______ (affair) de este correo es muy importante.",
        "choices": ["asunto", "tema", "mensaje", "contenido"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Salutation) A quien ______ (correspond),",
        "choices": ["corresponda", "le interese", "pueda", "correspondan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Body) Le agradezco mucho por su ______ (time) y su atención.",
        "choices": ["tiempo", "respuesta", "ayuda", "atención"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Closing) Le saluda ______ (cordially),",
        "choices": ["cordialmente", "atentamente", "sinceramente", "afectuosamente"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Signature) Mi nombre es Ana García y ______ (my) número de teléfono es el +34 987 654 321.",
        "choices": ["mi", "su", "tu", "el"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Closing) Muchas gracias por su ______ (attention) y quedo a su disposición.",
        "choices": ["atención", "tiempo", "respuesta", "interés"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Estimado/a [Nombre],", "rightId": 1 },
            "right": { "word": "To whom it may concern,", "rightId": 4 }
          },
          {
            "left": { "word": "Querido/a [Nombre],", "rightId": 2 },
            "right": { "word": "Hello [Name],", "rightId": 3}
          },
          {
            "left": { "word": "Hola [Nombre],", "rightId": 3 },
            "right": { "word": "I'm glad to write to you.", "rightId": 5 }
          },
          {
            "left": { "word": "A quien corresponda,", "rightId": 4 },
            "right": { "word": "Dear [Name],", "rightId": 1 }
          },
          {
            "left": { "word": "Me alegra escribirte.", "rightId": 5 },
            "right": { "word": "Best regards.", "rightId": 2 }
          },
          
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Espero que estés bien.", "rightId": 6 },
            "right": { "word": "To whom it may concern,", "rightId": 7 }
          },
          {
            "left": { "word": "Te escribo para...", "rightId": 7 },
            "right": { "word": "I am very happy to...", "rightId": 8 }
          },
          {
            "left": { "word": "Estoy muy contento/a de...", "rightId": 8 },
            "right": { "word": "Thank you for your attention.", "rightId": 9 }
          },
          {
            "left": { "word": "Gracias por tu mensaje.", "rightId": 9 },
            "right": { "word": "Until soon.", "rightId": 10 }
          },
          {
            "left": { "word": "Adiós y cuídate.", "rightId": 10 },
            "right": { "word": "I hope you are well.", "rightId": 6 }
          }
        ]
      }
    ]
  },
  {
    quiz: '20',
    name: 'Spanish Exercise - 1 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the reflexive pronoun for 'you' (informal)?",
        "choices": ["me", "se", "te", "nos"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'despertarse' mean?",
        "choices": ["To get up", "To wake up", "To wash oneself", "To dress oneself"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'We wash ourselves' in Spanish?",
        "choices": ["Nos lavamos", "Se lavan", "Me lavo", "Te lavas"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the reflexive pronoun for 'she'?",
        "choices": ["me", "se", "te", "nos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'They get dressed' in Spanish?",
        "choices": ["Ellos se visten", "Ellos se levantan", "Ellos se bañan", "Ellos se cepillan"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which verb means 'to go to bed'?",
        "choices": ["levantarse", "acostarse", "ducharse", "despertarse"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'You (formal) relax' in Spanish?",
        "choices": ["Te relajas", "Se relaja", "Nos relajamos", "Me relajo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the reflexive pronoun for 'we'?",
        "choices": ["os", "se", "me", "nos"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "How do you say 'I brush my teeth' in Spanish?",
        "choices": ["Me cepillo los dientes", "Te cepillas los dientes", "Se cepilla los dientes", "Nos cepillamos los dientes"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'vestirse' mean?",
        "choices": ["To wash", "To dress", "To relax", "To eat"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (I wake up) a las seis cada mañana.",
        "choices": ["me despierto", "me despiertas", "me despierta", "me despiertan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (you wash) las manos antes de comer.",
        "choices": ["te lavas", "te lavo", "te lavan", "te lavamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella ______ (dresses) rápidamente para la fiesta.",
        "choices": ["se viste", "se visten", "se vistes", "se visto"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (we went to bed) temprano durante la semana.",
        "choices": ["nos acostamos", "nos acuesto", "nos acuestan", "nos acuestas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (they brush) los dientes después de desayunar.",
        "choices": ["se cepillan", "se cepillo", "se cepillas", "se cepillamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Juan ______ (he combs his hair) antes de salir.",
        "choices": ["se peina", "se peinan", "se peino", "se peinas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (we make up) para la celebración.",
        "choices": ["nos maquillamos", "nos maquillo", "nos maquillas", "nos maquillan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (you shower) después de hacer ejercicio.",
        "choices": ["te duchas", "te ducha", "te duchan", "te duchamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellas ______ (they relax) en el sofá por la tarde.",
        "choices": ["se relajan", "se relajo", "se relaja", "se relajas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______ (leave) a la cama a las diez.",
        "choices": ["me voy", "me va", "me vas", "me van"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Me despierto a las siete.", "rightId": 1 },
            "right": { "word": "I shower in the morning.", "rightId": 3 }
          },
          {
            "left": { "word": "Me levanto rápidamente.", "rightId": 2 },
            "right": { "word": "I brush my teeth.", "rightId": 5 }
          },
          {
            "left": { "word": "Me ducho en la mañana.", "rightId": 3 },
            "right": { "word": "I get dressed.", "rightId": 4 }
          },
          {
            "left": { "word": "Me visto después de ducharme.", "rightId": 4 },
            "right": { "word": "I wake up at seven.", "rightId": 1 }
          },
          {
            "left": { "word": "Me cepillo los dientes.", "rightId": 5 },
            "right": { "word": "I get up quickly.", "rightId": 2 }
          },
         
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Me peino frente al espejo.", "rightId": 6 },
            "right": { "word": "I put on makeup before going out.", "rightId": 7 }
          },
          {
            "left": { "word": "Me maquillo antes de salir.", "rightId": 7 },
            "right": { "word": "I wash my face.", "rightId": 8 }
          },
          {
            "left": { "word": "Me lavo la cara.", "rightId": 8 },
            "right": { "word": "I go to bed at ten.", "rightId": 9 }
          },
          {
            "left": { "word": "Me acuesto a las diez.", "rightId": 9 },
            "right": { "word": "I fall asleep right away.", "rightId": 10 }
          },
          {
            "left": { "word": "Me duermo enseguida.", "rightId": 10 },
            "right": { "word": "I comb my hair.", "rightId": 6 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '21',
    name: 'Spanish Exercise - 2 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "La montaña más __________ de todas es el Everest.",
        "choices": ["alto", "alta", "más alto", "alta de"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Este examen es __________ que el anterior.",
        "choices": ["más difícil", "difícil", "tan difícil", "más fácil"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Ella es __________ estudiante de la clase.",
        "choices": ["el mejor", "la mejor", "lo mejor", "mejor"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Mi carro es __________ caro que el tuyo.",
        "choices": ["tanto", "menos", "más", "igual"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "El perro de Ana es __________ de todos.",
        "choices": ["el más grande", "la más grande", "grande", "grande más"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Pedro es __________ trabajador que Luis.",
        "choices": ["tan", "más", "el más", "poco"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Esta es la __________ pizza que he probado.",
        "choices": ["peor", "peores", "más peor", "más buena"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Marta es __________ rápida que su hermana.",
        "choices": ["más", "menos", "tan", "el más"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Este libro es __________ interesante que el otro.",
        "choices": ["más", "menos", "tan", "mejor"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Mi coche es __________ que el tuyo.",
        "choices": ["mejor", "más bueno", "el mejor", "tan mejor"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Mi hermana es ______ (more intelligent) que yo.",
        "choices": ["más inteligente", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Este restaurante es el ______ (best) de la ciudad.",
        "choices": ["mejor", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Juan corre ______ (faster) que Pedro.",
        "choices": ["más rápido", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Esta película es ______ (less interesting) que la anterior.",
        "choices": ["menos interesante", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El perro de Marta es ______ (bigger) que el gato de Luis.",
        "choices": ["más grande", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Este verano ha sido el ______ (hottest) en los últimos diez años.",
        "choices": ["más caluroso", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi casa es ______ (smaller) que la tuya.",
        "choices": ["más pequeña", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ana es la ______ (tallest) de la clase.",
        "choices": ["más alta", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Esta tarea es ______ (easier) que la de ayer.",
        "choices": ["más fácil", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Luis es el ______ (most generous) de todos.",
        "choices": ["más generoso", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "más rápido que", "rightId": 1 },
            "right": { "word": "the best", "rightId": 4 }
          },
          {
            "left": { "word": "menos caro que", "rightId": 2 },
            "right": { "word": "bigger than", "rightId": 5 }
          },
          {
            "left": { "word": "tan inteligente como", "rightId": 3 },
            "right": { "word": "faster than", "rightId": 1 }
          },
          {
            "left": { "word": "el mejor", "rightId": 4 },
            "right": { "word": "as smart as", "rightId": 3 }
          },
          {
            "left": { "word": "más grande que", "rightId": 5 },
            "right": { "word": "less expensive than", "rightId": 2 }
          },
         
        ]
      },
       {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "la más alta", "rightId": 6 },
            "right": { "word": "worst", "rightId": 7 }
          },
          {
            "left": { "word": "el peor", "rightId": 7 },
            "right": { "word": "the kindest", "rightId": 10 }
          },
          {
            "left": { "word": "menos interesante que", "rightId": 8 },
            "right": { "word": "the highest", "rightId": 6 }
          },
          {
            "left": { "word": "el más difícil", "rightId": 9 },
            "right": { "word": "less interesting than", "rightId": 8 }
          },
          {
            "left": { "word": "la más amable", "rightId": 10 },
            "right": { "word": "the most difficult", "rightId": 9 }
          }
        ]
      }
    ]
  },
  {
    quiz: '22',
    name: 'Spanish Exercise - 3 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct translation of 'I would like to travel to Spain'?",
        "choices": ["Me gustaría viajar a España.", "Me gustar viajar a España.", "Me gustaría viajo a España.", "Me gustarás viajar a España."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following sentences is a hypothetical situation?",
        "choices": ["Compré un coche el año pasado.", "Si tuviera un coche, conduciría a la playa.", "¿Podrías traerme agua, por favor?", "Estoy estudiando para el examen de mañana."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Complete the sentence: Si yo fuera rico, ______ una mansión en Madrid.",
        "choices": ["compraré", "compraría", "compro", "comprar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence demonstrates a polite request?",
        "choices": ["¿Podrías cerrar la ventana, por favor?", "Si pudiera, visitaría París.", "Él compraría una casa si ganara dinero.", "Me gustaría vivir en una gran ciudad."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which verb is irregular in the conditional tense?",
        "choices": ["Hablar", "Tener", "Comer", "Beber"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'Could we go to the museum tomorrow?' in Spanish?",
        "choices": ["Podríamos ir al museo mañana.", "Podemos ir al museo mañana.", "Podiamos ir al museo mañana.", "Podremos ir al museo mañana."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'Si yo fuera tú, estudiaría más' mean?",
        "choices": ["If I were you, I would study more.", "If I was you, I will study more.", "If I am you, I will study more.", "If I will be you, I will study more."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: ¿______ ayudarme con este proyecto, por favor?",
        "choices": [ "Puedo", "Podrías", "Podrá", "Podrían"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the conditional form of the verb 'ir' for 'nosotros'?",
        "choices": [ "Vamos", "Íbamos", "Iremos","Iríamos"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Choose the sentence that uses the conditional correctly.",
        "choices": ["Me gusta aprender a tocar el piano.", "Gustaría aprender a tocar el piano.","Me gustaría aprender a tocar el piano.", "Me gustarás aprender a tocar el piano."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Si tuviera más dinero, ______ (comprar) una casa cerca del mar.",
        "choices": ["compraría", "compraríamos", "comprarías", "comprarían"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué ______ (hacer) tú si fueras el presidente?",
        "choices": ["harías", "haremos", "haríamos", "harías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si viviéramos en España, ______ (aprender) a bailar flamenco.",
        "choices": ["aprenderíamos", "aprendíamos", "aprenderíamos", "aprenderías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿ ______ (poder) usted decirme la hora, por favor?",
        "choices": ["podría", "puedo", "podría", "podrías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (ir) a la playa si no lloviera.",
        "choices": ["iríamos", "iremos", "iríamos", "irán"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si yo fuera médico, ______ (ayudar) a muchas personas enfermas.",
        "choices": ["ayudaría", "ayudamos", "ayudaríamos", "ayudaría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me ______ (gustar) probar las tapas típicas españolas.",
        "choices": ["gustaría", "gustaría", "gustan", "gustaron"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si fuera posible, ______ (viajar) al extranjero con mis amigos.",
        "choices": ["viajaríamos", "viajamos", "viajaremos", "viajaría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿ ______ (querer) venir al concierto conmigo esta noche?",
        "choices": ["querrías", "quería", "querría", "querrías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si ellos tuvieran tiempo, ______ (organizar) una fiesta para ti.",
        "choices": ["organizarían", "organizan", "organizaríamos", "organizarían"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Me gustaría viajar a España.", "rightId": 1 },
            "right": { "word": "It would be a good day to walk.", "rightId": 4 }
          },
          {
            "left": { "word": "¿Podrías ayudarme?", "rightId": 2 },
            "right": { "word": "I would eat pizza every day.", "rightId": 5 }
          },
          {
            "left": { "word": "Deberíamos estudiar más.", "rightId": 3 },
            "right": { "word": "I would like to travel to Spain.", "rightId": 1 }
          },
          {
            "left": { "word": "Sería un buen día para caminar.", "rightId": 4 },
            "right": { "word": "We should study more.", "rightId": 3 }
          },
          {
            "left": { "word": "Yo comería pizza todos los días.", "rightId": 5 },
            "right": { "word": "Could you help me?", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "¿Qué harías tú?", "rightId": 1 },
            "right": { "word": "They would visit the museum.", "rightId": 2 }
          },
          {
            "left": { "word": "Ellos visitarían el museo.", "rightId": 2 },
            "right": { "word": "Could you wait a moment?", "rightId": 5 }
          },
          {
            "left": { "word": "Nos encantaría ir al cine.", "rightId": 3 },
            "right": { "word": "What would you do?", "rightId": 1 }
          },
          {
            "left": { "word": "Ella aprendería rápido.", "rightId": 4 },
            "right": { "word": "We would love to go to the movies.", "rightId": 3 }
          },
          {
            "left": { "word": "¿Podrían esperar un momento?", "rightId": 5 },
            "right": { "word": "She would learn quickly.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '23',
    name: 'Spanish Exercise - 4 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "Which of these phrases expresses an opinion in Spanish?",
        "choices": [
          "Comer pizza es divertido.",
          "Pienso que el cine español es fantástico.",
          "El clima está soleado.",
          "Viajar a la India es caro."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these phrases expresses an opinion in Spanish?",
        "choices": ["Discutir", "Creer", "Estar de acuerdo", "Preferir"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Complete: Si ganara la lotería, __________ una casa en Barcelona.",
        "choices": ["compra", "compraría", "compré", "compraré"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'It seems to me' in Spanish?",
        "choices": ["Me parece que", "Estoy de acuerdo", "Creo que", "No estoy de acuerdo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What phrase would you use to express disagreement?",
        "choices": ["Estoy de acuerdo en que...", "No creo que...", "Pienso que...", "Me parece que..."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the conditional form of 'hacer'?",
        "choices": ["Hacía", "Haría", "Hago", "Haré"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si no __________ comida, no podríamos vivir.",
        "choices": ["hubiera", "tendría", "habría", "hay"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What word would you use to express a strong opinion?",
        "choices": ["Creo que", "Me encanta que", "Es obvio que", "Es mejor que"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Completa: Si los estudiantes tuvieran menos tareas, __________ más tiempo libre.",
        "choices": ["tendrían", "tendrían que", "tuvieran", "tuvieron"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "In Spanish, how do you say 'If I were a bird'?",
        "choices": ["Si soy un pájaro", "Si fuera un pájaro", "Si era un pájaro", "Si seré un pájaro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Creo que las redes sociales son útiles, pero también ______.",
        "choices": ["dañinas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En mi opinión, viajar a otro país es una experiencia ______.",
        "choices": ["inolvidable"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si tuviera más tiempo, ______ aprender un nuevo idioma.",
        "choices": ["trataría de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "No estoy de acuerdo con que la tecnología ______ el tiempo familiar.",
        "choices": ["reduzca"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me parece que ______ es más importante que ganar dinero.",
        "choices": ["la felicidad"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si pudieras elegir un superpoder, ¿cuál ______?",
        "choices": ["elegirías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Estoy de acuerdo en que un buen libro siempre ______ el ánimo.",
        "choices": ["mejora"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si fuera posible, yo ______ más proyectos de voluntariado.",
        "choices": ["haría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "No creo que todos los programas de televisión sean ______.",
        "choices": ["educativos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En mi opinión, los jóvenes ______ más tiempo en actividades productivas.",
        "choices": ["deberían pasar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Creo que es buena idea.", "rightId": 1 },
            "right": { "word": "If I had time, I would do it.", "rightId": 2 }
          },
          {
            "left": { "word": "Si tuviera tiempo, lo haría.", "rightId": 2 },
            "right": { "word": "What do you think about this?", "rightId": 5 }
          },
          {
            "left": { "word": "En mi opinión, es mejor esperar.", "rightId": 3 },
            "right": { "word": "I think it's a good idea.", "rightId": 1 }
          },
          {
            "left": { "word": "Me parece interesante.", "rightId": 4 },
            "right": { "word": "In my opinion, it's better to wait.", "rightId": 3 }
          },
          {
            "left": { "word": "¿Qué opinas de esto?", "rightId": 5 },
            "right": { "word": "It seems interesting to me.", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Si fuera posible, viajaría más.", "rightId": 1 },
            "right": { "word": "I'm not sure about that.", "rightId": 2 }
          },
          {
            "left": { "word": "No estoy seguro de eso.", "rightId": 2 },
            "right": { "word": "Do you think it is important?", "rightId": 5 }
          },
          {
            "left": { "word": "Prefiero no decir nada.", "rightId": 3 },
            "right": { "word": "If it were possible, I would travel more.", "rightId": 1 }
          },
          {
            "left": { "word": "Si pudiera, ayudaría más.", "rightId": 4 },
            "right": { "word": "I prefer not to say anything.", "rightId": 3 }
          },
          {
            "left": { "word": "¿Crees que es importante?", "rightId": 5 },
            "right": { "word": "If I could, I would help more.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '24',
    name: 'Spanish Exercise - 5 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "Which tense is used for completed actions in the past?",
        "choices": ["Presente", "Pretérito", "Condicional", "Futuro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which verb is used to express wishes or hypothetical actions?",
        "choices": ["Ser", "Estar", "Gustar", "Conditional"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which of the following sentences is in conditional tense?",
        "choices": [
          "Nosotros viajamos a México.",
          "Yo aprendería francés si tuviera tiempo.",
          "Ellos van al cine los sábados.",
          "Marta está muy cansada hoy."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'Where is the meeting?' in Spanish?",
        "choices": [
          "¿Dónde estar la reunión?",
          "¿Dónde ser la reunión?",
          "¿Dónde es la reunión?",
          "¿Dónde estás la reunión?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which is correct?",
        "choices": [
          "Yo estaría en casa si no tuviera trabajo.",
          "Yo estaré en casa si no tuviera trabajo.",
          "Yo estoy en casa si no tuviera trabajo.",
          "Yo estuve en casa si no tuviera trabajo."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following describes emotions?",
        "choices": [
          "Yo soy feliz.",
          "Yo estoy feliz.",
          "Yo fui feliz.",
          "Yo seré feliz."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Complete: Marta __________ una película anoche.",
        "choices": ["verá", "ve", "vio", "vería"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which sentence indicates a habitual action?",
        "choices": [
          "Luis viajó a Madrid.",
          "Marta estaría en casa.",
          "Ellos van al cine cada viernes.",
          "Yo estaré en casa."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'Me gustaría viajar a Francia' mean?",
        "choices": [
          "I like to travel to France.",
          "I would like to travel to France.",
          "I traveled to France.",
          "I will travel to France."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which verb indicates temporary location or condition?",
        "choices": ["Ser", "Estar", "Gustar", "Ir"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (comer) en un restaurante famoso el fin de semana pasado.",
        "choices": ["comí"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (viajar) a Barcelona durante las vacaciones de verano.",
        "choices": ["viajamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Marta ______ (ser/estar) muy emocionada por su nuevo trabajo.",
        "choices": ["está"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué ______ (hacer, tú) si tuvieras un millón de euros?",
        "choices": ["harías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (ir) al cine cada sábado por la tarde.",
        "choices": ["van"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Luis ______ (leer) un libro interesante anoche en su habitación.",
        "choices": ["leyó"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ahora, nosotros ______ (estar) muy cansados después del partido de fútbol.",
        "choices": ["estamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me ______ (gustar, condicional) aprender a tocar la guitarra algún día.",
        "choices": ["gustaría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Dónde ______ (ser/estar) la reunión esta tarde, en la oficina o en casa?",
        "choices": ["es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pablo y Ana ______ (hablar) español todos los días para practicar.",
        "choices": ["hablan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Tengo un libro.", "rightId": 1 },
            "right": { "word": "She is kind.", "rightId": 2 }
          },
          {
            "left": { "word": "Ella es amable.", "rightId": 2 },
            "right": { "word": "I am going to study tomorrow.", "rightId": 5 }
          },
          {
            "left": { "word": "Nos gusta el café.", "rightId": 3 },
            "right": { "word": "I have a book.", "rightId": 1 }
          },
          {
            "left": { "word": "¿Dónde está la tienda?", "rightId": 4 },
            "right": { "word": "We like coffee.", "rightId": 3 }
          },
          {
            "left": { "word": "Voy a estudiar mañana.", "rightId": 5 },
            "right": { "word": "Where is the store?", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Los gatos están durmiendo.", "rightId": 1 },
            "right": { "word": "He is taller than me.", "rightId": 2 }
          },
          {
            "left": { "word": "Es más alto que yo.", "rightId": 2 },
            "right": { "word": "I prefer the blue one.", "rightId": 5 }
          },
          {
            "left": { "word": "Abrí la ventana.", "rightId": 3 },
            "right": { "word": "The cats are sleeping.", "rightId": 1 }
          },
          {
            "left": { "word": "Estamos en el parque.", "rightId": 4 },
            "right": { "word": "I opened the window.", "rightId": 3 }
          },
          {
            "left": { "word": "Prefiero el azul.", "rightId": 5 },
            "right": { "word": "We are at the park.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '25',
    name: 'Spanish Exercise - 6 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What does 'train' mean in Spanish?",
        "choices": ["Tren", "Metro", "Autobús", "Avión"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'ticket' in Spanish?",
        "choices": ["Billete", "Coche", "Estación", "Pasaporte"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct form of 'ir a' for 'they'?",
        "choices": ["Voy a", "Vamos a", "Van a", "Vas a"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What word means 'subway' in Spanish?",
        "choices": ["Tren", "Metro", "Barco", "Bicicleta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What document do you need to travel internationally?",
        "choices": ["Billete", "Pasaporte", "Estación", "Salida"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How would you say 'We are going to take the bus'?",
        "choices": ["Vamos a tomar el autobús.", "Voy a tomar el avión.", "Vas a tomar el barco.", "Van a tomar el coche."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which phrase describes 'They are going to rent a car'?",
        "choices": ["Ellos van a alquilar un coche.", "Ellos van a conducir un barco.", "Ellos van a caminar.", "Ellos van a tomar el metro."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'aeropuerto' mean in English?",
        "choices": ["Train Station", "Airport", "Subway", "Departure"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'barco' mean in English?",
        "choices": ["Train", "Subway", "Boat", "Car"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the plural of 'bicicleta'?",
        "choices": ["Bicicletas", "Bicicletes", "Bicicletos", "Bicicleto"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo voy a viajar en ______ (plane) para llegar más rápido.",
        "choices": ["avión", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos van a tomar un ______ (ship) para explorar el río.",
        "choices": ["barco", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vamos a la ______ (season) para tomar el tren.",
        "choices": ["estación", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tú vas a comprar un ______ (ticket) de ida o ida y vuelta?",
        "choices": ["billete", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mis amigos van a llegar en ______ (bus) desde otra ciudad.",
        "choices": ["autobús", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella va a alquilar un ______ (car) para su viaje.",
        "choices": ["coche", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vamos a tomar el ______ (metro) para llegar al trabajo.",
        "choices": ["metro", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos van a viajar en ______ (bicycle) porque es más ecológico.",
        "choices": ["bicicleta", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tú vas a necesitar un ______ (passport) para viajar a otro país?",
        "choices": ["pasaporte", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vamos a esperar la ______ (exit) antes de abordar el avión.",
        "choices": ["salida", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Avión", "rightId": 1 },
            "right": { "word": "Metro", "rightId": 5 }
          },
          {
            "left": { "word": "Autobús", "rightId": 2 },
            "right": { "word": "Train Station", "rightId": 3 }
          },
          {
            "left": { "word": "Estación de tren", "rightId": 3 },
            "right": { "word": "Plane", "rightId": 1 }
          },
          {
            "left": { "word": "Pasaporte", "rightId": 4 },
            "right": { "word": "Bus", "rightId": 2 }
          },
          {
            "left": { "word": "Metro", "rightId": 5 },
            "right": { "word": "Passport", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Billete.", "rightId": 1 },
            "right": { "word": "Airport", "rightId": 3 }
          },
          {
            "left": { "word": "Bicicleta", "rightId": 2 },
            "right": { "word": "Departure", "rightId": 5 }
          },
          {
            "left": { "word": "Aeropuerto", "rightId": 3 },
            "right": { "word": "Ticket", "rightId": 1 }
          },
          {
            "left": { "word": "Barco", "rightId": 4 },
            "right": { "word": "Bicycle", "rightId": 2 }
          },
          {
            "left": { "word": "Salida", "rightId": 5 },
            "right": { "word": "Boat", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '26',
    name: 'Spanish Exercise - 7 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What word means 'shoes' in Spanish?",
        "choices": ["Zapatillas", "Zapatos", "Botas", "Sombreros"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'shirt' in Spanish?",
        "choices": ["Falda", "Camiseta", "Camisa", "Vestido"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the plural form of 'abrigo' (coat)?",
        "choices": ["Abrigos", "Abrigas", "Abrigues", "Abrigados"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What phrase would you use to ask for the price?",
        "choices": ["¿Cómo se llama esto?", "¿Dónde está la tienda?", "¿Cuánto cuesta esto?", "¿Qué hora es?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'pantalones cortos' mean?",
        "choices": ["Shorts", "Jeans", "Pants", "Coats"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the plural of 'camisa' (shirt)?",
        "choices": ["Camisas", "Camises", "Camisaos", "Camisos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How would you say 'I want to try this dress on'?",
        "choices": ["Quiero comprar este vestido.", "Quiero probarme este vestido.", "Quiero llevar este vestido.", "Quiero devolver este vestido."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which phrase means 'The shoes are expensive'?",
        "choices": ["Las zapatillas son baratas.", "Los zapatos son caros.", "Los zapatos son grandes.", "Las botas son caras."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct adjective to describe 'las camisas rojas' (the red shirts)?",
        "choices": ["Roja", "Rojo", "Rojos", "Rojas"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What clothing do you wear in the winter?",
        "choices": ["Traje de baño", "Sombrero", "Abrigo", "Sandalias"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo necesito comprar un ______ (coat) nuevo para el invierno.",
        "choices": ["abrigo", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella lleva una ______ (skirt) roja con zapatos negros.",
        "choices": ["falda", "abrigo", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vamos a comprar unos ______ (shorts) para el verano.",
        "choices": ["pantalones cortos", "falda", "abrigo", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tienes unas ______ (sneakers) deportivas para correr?",
        "choices": ["zapatillas", "falda", "pantalones cortos", "sombreros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los ______ (hats) están de oferta en esta tienda.",
        "choices": ["sombreros", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Él busca una ______ (shirt) azul para la oficina.",
        "choices": ["camisa", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mis padres siempre compran ______ (suits) tradicionales para las bodas.",
        "choices": ["trajes", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En el mercado, venden muchas ______ (t-shirts) de algodón.",
        "choices": ["camisetas", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Voy a probarme este par de ______ (boots) de cuero.",
        "choices": ["botas", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Dónde está el probador para estas ______ (blouses)?",
        "choices": ["blusas", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Camiseta", "rightId": 1 },
            "right": { "word": "Pants", "rightId": 5 }
          },
          {
            "left": { "word": "Zapatos", "rightId": 2 },
            "right": { "word": "Hat", "rightId": 3 }
          },
          {
            "left": { "word": "Sombrero", "rightId": 3 },
            "right": { "word": "T-shirt", "rightId": 1 }
          },
          {
            "left": { "word": "Vestido", "rightId": 4 },
            "right": { "word": "Shoes", "rightId": 2 }
          },
          {
            "left": { "word": "Pantalones", "rightId": 5 },
            "right": { "word": "Dress", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Zapatillas", "rightId": 1 },
            "right": { "word": "Blouse", "rightId": 3 }
          },
          {
            "left": { "word": "Falda", "rightId": 2 },
            "right": { "word": "Shirt", "rightId": 5 }
          },
          {
            "left": { "word": "Blusa", "rightId": 3 },
            "right": { "word": "Sneakers", "rightId": 1 }
          },
          {
            "left": { "word": "Chaqueta", "rightId": 4 },
            "right": { "word": "Skirt", "rightId": 2 }
          },
          {
            "left": { "word": "Camisa", "rightId": 5 },
            "right": { "word": "Jacket", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '27',
    name: 'Spanish Exercise - 8 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Cuál de las siguientes actividades es un ejemplo de un pasatiempo?",
        "choices": ["correr", "comer", "dormir", "estudiar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué verbo significa 'to live' en español?",
        "choices": ["comer", "vivir", "hablar", "bailar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cómo se dice 'I like to swim' en español?",
        "choices": [ "me gusta nadé", "me gusta nadar", "me gusta nadando", "me gusta nadaré"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué verbo significa 'to eat' en español?",
        "choices": ["vivir", "jugar", "leer", "comer"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Cómo se conjuga el verbo 'comer' en la primera persona singular en el presente?",
        "choices": ["como", "comes", "comí", "comemos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál de las siguientes actividades no es un pasatiempo?",
        "choices": ["estudiar", "leer", "ver una película", "bailar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cómo se dice 'He likes to play soccer' en español?",
        "choices": ["le gustaba jugar al fútbol", "le gusta jugando al fútbol", "le gusta jugar fútbol", "le gusta jugar al fútbol"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Cuál es la conjugación correcta del verbo 'vivir' en la tercera persona singular en el presente?",
        "choices": ["vives", "vive", "vivimos", "vivieron"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué actividad se relaciona con 'escuchar música'?",
        "choices": ["escuchar canciones", "ver una película", "pintar cuadros", "jugar al fútbol"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué significa 'hacer ejercicio'?",
        "choices": [ "dormir", "comer bien", "practicar deportes", "leer un libro"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Me gusta ______ (to read) libros en mi tiempo libre.",
        "choices": ["leer", "hacer", "correr", "vivir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué te gusta ______ (to do) los fines de semana?",
        "choices": ["hacer", "leer", "cantar", "bailar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella siempre ______ (to run) en el parque por la mañana.",
        "choices": ["corre", "canta", "baila", "lee"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (to live) en la ciudad de Madrid.",
        "choices": ["vivimos", "comemos", "corremos", "jugamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A ti te gusta ______ (to sing) en el baño.",
        "choices": ["cantar", "bailar", "leer", "correr"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermano ______ (to eat) pizza los domingos.",
        "choices": ["come", "canta", "baila", "corre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me encanta ______ (to draw) y pintar.",
        "choices": ["dibujar", "leer", "cantar", "bailar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (to live) en una casa cerca del mar.",
        "choices": ["viven", "comen", "cantan", "bailan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me gusta ______ (to dance) salsa en las fiestas.",
        "choices": ["bailar", "leer", "correr", "cantar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A Marta le gusta ______ (to watch) películas en su tiempo libre.",
        "choices": ["ver", "cantar", "bailar", "leer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "hacer ejercicio", "rightId": 1 },
            "right": { "word": "watch a movie", "rightId": 2 }
          },
          {
            "left": { "word": "ver películas", "rightId": 2 },
            "right": { "word": "play music", "rightId": 3 }
          },
          {
            "left": { "word": "tocar la guitarra", "rightId": 3 },
            "right": { "word": "do exercise", "rightId": 1 }
          },
          {
            "left": { "word": "leer libros", "rightId": 4 },
            "right": { "word": "sing songs", "rightId": 5 }
          },
          {
            "left": { "word": "ir al cine", "rightId": 5 },
            "right": { "word": "read books", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "bailar salsa", "rightId": 1 },
            "right": { "word": "paint pictures", "rightId": 3 }
          },
          {
            "left": { "word": "correr en el parque", "rightId": 2 },
            "right": { "word": "listen to music", "rightId": 5 }
          },
          {
            "left": { "word": "pintar cuadros", "rightId": 3 },
            "right": { "word": "dance to music", "rightId": 1 }
          },
          {
            "left": { "word": "jugar al fútbol", "rightId": 4 },
            "right": { "word": "watch sports", "rightId": 2 }
          },
          {
            "left": { "word": "escuchar música", "rightId": 5 },
            "right": { "word": "play soccer", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '28',
    name: 'Spanish Exercise - 9 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué significa \"tener fiebre\"?",
        "choices": ["Tener hambre", "Tener calor", "Tener frío", "Tener temperatura alta"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Qué deberías hacer si tienes un dolor de garganta?",
        "choices": ["Cantar mucho", "Descansar y beber agua", "Comer comida picante", "Ir al gimnasio"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál de los siguientes es un verbo modal que se usa para expresar una obligación?",
        "choices": ["Poder", "Deber", "Comer", "Dormir"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si alguien tiene un resfriado, ¿qué debe hacer?",
        "choices": ["Dormir mucho y tomar medicinas", "Hacer ejercicio", "Comer dulces", "Salir a caminar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué parte del cuerpo necesitas para ver?",
        "choices": ["Estómago", "Ojos", "Manos", "Corazón"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si tienes dolor de cabeza, ¿qué no debes hacer?",
        "choices": ["Tomar una aspirina", "Dormir mucho", "Estudiar mucho", "Hacer ejercicio suave"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué significa \"deber\" en español?",
        "choices": ["Poder hacer algo", "Necesitar hacer algo", "Comer algo", "Estudiar algo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué es un síntoma común de la gripe?",
        "choices": ["Dolor de estómago", "Dolor de cabeza", "Dolor de espalda", "Dolor de pierna"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cómo puedes prevenir el dolor de espalda?",
        "choices": ["Levantando pesas", "Manteniendo una buena postura", "Corriendo mucho", "Comiendo más carne"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si una persona tiene alergia a los mariscos, ¿qué debe evitar?",
        "choices": ["Comer mariscos", "Comer verduras", "Comer frutas", "Comer carne"],
        "type": "MCQs",
        "correctAnswer": 1
      },    
      
      // 20 Fill in the Blanks

      {
        "question": "Mi cabeza me duele mucho, ______ (poder, deber) ir al médico.",
        "choices": ["debo", "poder", "deber", "ir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Para estar saludable, ______ (poder, deber) comer frutas y verduras todos los días.",
        "choices": ["debes", "poder", "deber", "comer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si tienes fiebre, ______ (poder, deber) descansar mucho.",
        "choices": ["debes", "poder", "deber", "descansar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El doctor me dijo que ______ (poder, deber) hacer ejercicio regularmente.",
        "choices": ["deberías", "poder", "deber", "hacer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella no ______ (poder, deber) comer comida picante debido a su estómago sensible.",
        "choices": ["puede", "poder", "deber", "comer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tú ______ (poder, deber) levantarte temprano para ir al gimnasio?",
        "choices": ["puedes", "poder", "deber", "levantarse"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si ______ (poder, deber) correr más rápido, estarías más saludable.",
        "choices": ["pudieras", "poder", "deber", "correr"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Poder, Deber) ______ ir a la farmacia a comprar medicinas para el dolor de cabeza.",
        "choices": ["Puedo", "poder", "deber", "ir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es importante que tú ______ (poder, deber) tomar suficiente agua cada día.",
        "choices": ["debes", "poder", "deber", "tomar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos no ______ (poder, deber) practicar deportes por su lesión.",
        "choices": ["pueden", "poder", "deber", "practicar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "cabeza", "rightId": 1 },
            "right": { "word": "bones", "rightId": 4 }
          },
          {
            "left": { "word": "estómago", "rightId": 2 },
            "right": { "word": "eyes", "rightId": 5 }
          },
          {
            "left": { "word": "corazón", "rightId": 3 },
            "right": { "word": "head", "rightId": 1 }
          },
          {
            "left": { "word": "huesos", "rightId": 4 },
            "right": { "word": "heart", "rightId": 3 }
          },
          {
            "left": { "word": "ojos", "rightId": 5 },
            "right": { "word": "stomach", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "resfriado", "rightId": 1 },
            "right": { "word": "headache", "rightId": 2 }
          },
          {
            "left": { "word": "dolor de cabeza", "rightId": 2 },
            "right": { "word": "back", "rightId": 5 }
          },
          {
            "left": { "word": "alergia", "rightId": 3 },
            "right": { "word": "cold", "rightId": 1 }
          },
          {
            "left": { "word": "pierna", "rightId": 4 },
            "right": { "word": "allergy", "rightId": 3 }
          },
          {
            "left": { "word": "espalda", "rightId": 5 },
            "right": { "word": "leg", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '29',
    name: 'Spanish Exercise - 10 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué hora es si el reloj marca 5:45 PM?",
        "choices": ["Son las 5:45 AM", "Son las 5:45 PM", "Son las 6:45 PM", "Son las 4:45 PM"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es la respuesta correcta para esta pregunta? \"¿__________ (comer) tú algo antes de ir al trabajo?\"",
        "choices": ["Comí", "Has comido", "Comer", "Comiste"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué significa “¿A qué hora __________ (empezar) la reunión?”?",
        "choices": ["What time does the meeting begin?", "What time did the meeting start?", "What time will the meeting start?", "What time is the meeting?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cómo se usa el pretérito perfecto en esta frase? \"Yo __________ (leer) ese libro.\"",
        "choices": ["He leído", "Leí", "Leeré", "Leyó"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es la forma correcta del verbo en pretérito perfecto? \"Ellos __________ (ir) al cine este fin de semana.\"",
        "choices": ["Fueron", "Han ido", "Iban", "Van"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué significa \"¿Qué hora es?\" en español?",
        "choices": [ "What time was it?", "What time will it be?","What time is it?", "What time has it been?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿A qué hora __________ (salir) tú ayer?",
        "choices": ["Salgo", "Salí", "Has salido", "Salías"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuándo __________ (llegar) ustedes al trabajo hoy?",
        "choices": ["Llegaron", "Llegaron", "Han llegado", "Llegaban"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Cuál es la forma correcta para “She has finished the work”?",
        "choices": ["Ella ha terminado el trabajo", "Ella terminó el trabajo", "Ella termina el trabajo", "Ella terminará el trabajo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué significa la frase \"¿A qué hora empieza el partido de fútbol?\"?",
        "choices": ["What time is the football match?", "What time does the football match end?", "What time does the football match start?", "What time was the football match?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (comer) en casa esta mañana.",
        "choices": ["he comido", "comí", "como", "comía"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿A qué hora ______ (llegar) tú al trabajo ayer?",
        "choices": ["llegaste", "llego", "llegaba", "llegué"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (trabajar) todo el día, así que están cansados.",
        "choices": ["han trabajado", "trabajaron", "trabajan", "trabajaban"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (ver) esa película antes, ¿verdad?",
        "choices": ["has visto", "viste", "ves", "veías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (hacer) todo el trabajo de la oficina ya.",
        "choices": ["hemos hecho", "hicimos", "hacemos", "hacíamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuándo ______ (salir) ella del trabajo ayer?",
        "choices": ["salió", "sale", "salía", "salí"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______ (estudiar) mucho esta semana para el examen.",
        "choices": ["he estudiado", "estudié", "estudio", "estudiaba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (volver) de sus vacaciones hace dos días.",
        "choices": ["han vuelto", "volvieron", "vuelven", "volvían"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿A qué hora ______ (empezar) la reunión ayer?",
        "choices": ["empezó", "empieza", "empezaba", "empezaré"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Marta ______ (terminar) su tarea hace media hora.",
        "choices": ["ha terminado", "terminó", "termina", "terminaba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "La reunión empieza a las 9:00 AM.", "rightId": 1 },
            "right": { "word": "The football match begins at 7:00 PM.", "rightId": 5 }
          },
          {
            "left": { "word": "Tengo una cita a las 3:00 PM.", "rightId": 2 },
            "right": { "word": "The party is on Saturday night.", "rightId": 4 }
          },
          {
            "left": { "word": "El tren sale a las 6:30 AM.", "rightId": 3 },
            "right": { "word": "The meeting starts at 9:00 AM.", "rightId": 1 }
          },
          {
            "left": { "word": "La fiesta es el sábado por la noche.", "rightId": 4 },
            "right": { "word": "The train leaves at 6:30 AM.", "rightId": 3 }
          },
          {
            "left": { "word": "El partido de fútbol comienza a las 7:00 PM.", "rightId": 5 },
            "right": { "word": "I have an appointment at 3:00 PM.", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Mi clase de español es a las 10:00 AM.", "rightId": 1 },
            "right": { "word": "The flight arrives at 5:00 PM.", "rightId": 2 }
          },
          {
            "left": { "word": "El vuelo llega a las 5:00 PM.", "rightId": 2 },
            "right": { "word": "We eat at 1:00 PM.", "rightId": 5 }
          },
          {
            "left": { "word": "Tengo que trabajar hasta las 5:00 PM.", "rightId": 3 },
            "right": { "word": "My Spanish class is at 10:00 AM.", "rightId": 1 }
          },
          {
            "left": { "word": "La conferencia empieza a las 11:00 AM.", "rightId": 4 },
            "right": { "word": "I have to work until 5:00 PM.", "rightId": 3 }
          },
          {
            "left": { "word": "Comemos a las 1:00 PM.", "rightId": 5 },
            "right": { "word": "The conference starts at 11:00 AM.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '30',
    name: 'Spanish Exercise - 11 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What does 'teatro' mean?",
        "choices": ["Dance", "Theatre", "Painting", "Sculpture"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which one is an indirect object pronoun?",
        "choices": ["Yo", "Tú", "Me", "Él"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which word describes a place where art is kept?",
        "choices": ["Feria", "Museo", "Concierto", "Canción"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these words is related to music?",
        "choices": ["Pintura", "Canción", "Escultura", "Exposición"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'Les compré flores a mis padres.' mean?",
        "choices": ["I bought flowers for my parents.", "My parents bought flowers for me.", "I sold flowers to my parents.", "My parents bought flowers for themselves."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which cultural activity involves 'flamenco'?",
        "choices": ["Escultura", "Música y danza", "Pintura", "Teatro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which pronoun would you use for 'a nosotros'?",
        "choices": ["Me", "Te", "Nos", "Les"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Where can you see an 'exposición'?",
        "choices": ["En un teatro", "En un museo", "En un concierto", "En una feria"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'les mostramos las fotos' mean?",
        "choices": ["We show them the photos.", "They show us the photos.", "You show me the photos.", "I show you the photos."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word is related to a festival or celebration?",
        "choices": ["Tradición", "Canción", "Escultura", "Exposición"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Fui al ______ (museum) para ver esculturas antiguas.",
        "choices": ["museo", "feria", "teatro", "concierto"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿ ______ (You) diste las entradas para el concierto a Juan?",
        "choices": ["Le", "Te", "Nos", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nos encanta escuchar la ______ (music) tradicional de España.",
        "choices": ["música", "escultura", "danza", "pintura"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ayer asistí a un ______ (show) de flamenco.",
        "choices": ["espectáculo", "concierto", "teatro", "museo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Le ______ (dar) tu opinión sobre la exposición?",
        "choices": ["diste", "dio", "dieron", "daba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi madre siempre me ______ (comprar) un regalo para mi cumpleaños.",
        "choices": ["compra", "compró", "comprar", "compraban"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hay un ______ (exposure) de arte moderno en la galería esta semana.",
        "choices": ["exposición", "teatro", "danza", "feria"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Te ______ (prestar) mi guitarra para practicar.",
        "choices": ["presto", "presté", "prestar", "prestan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermana, quien ama el teatro, ______ (ir) al festival anual.",
        "choices": ["fue", "fue", "iba", "iría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los niños les ______ (pedir) a sus padres permiso para ir al museo.",
        "choices": ["pidieron", "pedían", "pedirán", "pedido"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Museo", "rightId": 1 },
            "right": { "word": "Painting", "rightId": 2 }
          },
          {
            "left": { "word": "Pintura", "rightId": 2 },
            "right": { "word": "Fair", "rightId": 4 }
          },
          {
            "left": { "word": "Canción", "rightId": 3 },
            "right": { "word": "Museum", "rightId": 1 }
          },
          {
            "left": { "word": "Feria", "rightId": 4 },
            "right": { "word": "Dance", "rightId": 5 }
          },
          {
            "left": { "word": "Danza", "rightId": 5 },
            "right": { "word": "Song", "rightId": 3 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Teatro", "rightId": 1 },
            "right": { "word": "Concert", "rightId": 3 }
          },
          {
            "left": { "word": "Tradición", "rightId": 2 },
            "right": { "word": "Exhibition", "rightId": 5 }
          },
          {
            "left": { "word": "Concierto", "rightId": 3 },
            "right": { "word": "Theatre", "rightId": 1 }
          },
          {
            "left": { "word": "Escultura", "rightId": 4 },
            "right": { "word": "Tradition", "rightId": 2 }
          },
          {
            "left": { "word": "Exposición", "rightId": 5 },
            "right": { "word": "Sculpture", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '31',
    name: 'Spanish Exercise - 12 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Cómo se dice 'fireworks' en español?",
        "choices": ["calabaza", "fuegos artificiales", "fiesta", "comparsa"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué comida tradicional se come en México durante el Día de los Muertos?",
        "choices": ["tacos", "paella", "pan de muerto", "pollo asado"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es la mejor descripción de 'comparsa'?",
        "choices": ["un baile tradicional", "un desfile religioso", "un grupo de personas disfrazadas", "una comida navideña"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué bebida tradicional se toma durante Navidad en España?",
        "choices": ["vino tinto", "sidra", "champán", "horchata"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es el plato principal tradicional en una cena de Nochebuena?",
        "choices": ["jamón", "pavo", "tortilla", "empanada"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cómo se compara 'más grande' con 'el más grande'?",
        "choices": ["bigger / the biggest", "larger / the largest", "smaller / the smallest", "both a and b"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué tradición ocurre durante la Feria de Abril en Sevilla?",
        "choices": ["Lanzar tomates", "Bailar sevillanas", "Comer paella", "Hacer procesiones"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es el significado de 'rosas' en el día de Sant Jordi?",
        "choices": ["libros", "flores", "bailes", "regalos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué celebración marca el 31 de diciembre en España?",
        "choices": ["nochebuena", "nochevieja", "día de los Reyes Magos", "la Semana Santa"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué evento incluye el uso de máscaras y disfraces?",
        "choices": ["la Feria de Abril", "el Carnaval", "el Día de los Muertos", "la Nochebuena"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "La ______ es una fiesta popular en España donde las personas lanzan tomates. (Hint: festival name)",
        "choices": ["Tomatina", "Cava", "Calaveras", "Regalos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Durante Navidad, solemos comer turrón y ______ (a sparkling drink).",
        "choices": ["Cava", "Tomatina", "Pavo", "Procesiones"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En México, el Día de los Muertos se celebra con pan de muerto y ______ (decorations).",
        "choices": ["Calaveras", "Arroz", "Encierros", "Fuegos artificiales"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los niños esperan que los Reyes Magos les traigan ______ (gifts) el 6 de enero.",
        "choices": ["Regalos", "Fuegos artificiales", "Cava", "Turrón"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El ______ (turkey) es un plato tradicional para la cena de Navidad en España.",
        "choices": ["Pavo", "Arroz", "Pan de muerto", "Jamón"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Durante la Semana Santa, las personas asisten a ______ (religious parades).",
        "choices": ["Procesiones", "Turrón", "Tomatina", "Cabalgata"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En las bodas, los invitados suelen lanzar ______ (rice) para desear buena suerte.",
        "choices": ["Arroz", "Roscas", "Cava", "Pavo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La fiesta de San Fermín se celebra con ______ (bull runs) en Pamplona.",
        "choices": ["Encierros", "Fuegos artificiales", "Procesiones", "Cava"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Durante la Feria de Abril en Sevilla, las personas bailan ______ (a traditional dance).",
        "choices": ["Sevillanas", "Cava", "Arroz", "Turrón"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En Cataluña, el 23 de abril se celebra el día de Sant Jordi regalando libros y ______ (roses).",
        "choices": ["Rosas", "Fuegos artificiales", "Pavo", "Tomatina"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "nochevieja", "rightId": 1 },
            "right": { "word": "alimento", "rightId": 5 }
          },
          {
            "left": { "word": "comparsa", "rightId": 2 },
            "right": { "word": "pumpkin", "rightId": 4 }
          },
          {
            "left": { "word": "villancicos", "rightId": 3 },
            "right": { "word": "epiphany", "rightId": 1 }
          },
          {
            "left": { "word": "calabaza", "rightId": 4 },
            "right": { "word": "christmas carols", "rightId": 2 }
          },
          {
            "left": { "word": "food", "rightId": 5 },
            "right": { "word": "fireworks", "rightId": 3 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "feria", "rightId": 1 },
            "right": { "word": "parade", "rightId": 3 }
          },
          {
            "left": { "word": "procesión", "rightId": 2 },
            "right": { "word": "celebration", "rightId": 5 }
          },
          {
            "left": { "word": "cabalgata", "rightId": 3 },
            "right": { "word": "fair", "rightId": 1 }
          },
          {
            "left": { "word": "fiesta", "rightId": 4 },
            "right": { "word": "religious procession", "rightId": 2 }
          },
          {
            "left": { "word": "celebración", "rightId": 5 },
            "right": { "word": "party", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
];
