export interface QuizQuestion {
    id: number;
    text: string;
    options: string[];
    correctAnswers: number[];
  }
  
  export const webQuizQuestions: QuizQuestion[] = [
    {
      id: 1,
      text: "Welche der folgenden Aussagen über HTML5 sind korrekt?",
      options: [
        "Es unterstützt native Audio- und Videowidgets",
        "Es ist abwärtskompatibel mit älteren Browsern",
        "Es erfordert ein Plugin für die Ausführung",
        "Es bietet verbesserte Unterstützung für Offline-Anwendungen"
      ],
      correctAnswers: [0, 1, 3]
    },
    {
      id: 2,
      text: "Welche CSS-Eigenschaft wird verwendet, um den Abstand zwischen Elementen zu definieren?",
      options: [
        "margin",
        "padding",
        "border-spacing",
        "gap"
      ],
      correctAnswers: [0, 3]
    },
    {
      id: 3,
      text: "Was ist der Zweck des 'use strict' Statements in JavaScript?",
      options: [
        "Es aktiviert strikte Typisierung",
        "Es verhindert die Verwendung von undeklarierten Variablen",
        "Es macht den Code schneller",
        "Es ermöglicht die Verwendung moderner JavaScript-Funktionen"
      ],
      correctAnswers: [1]
    },
    {
      id: 4,
      text: "Welche der folgenden sind gültige Werte für die CSS display-Eigenschaft?",
      options: [
        "block",
        "inline",
        "hidden",
        "flex"
      ],
      correctAnswers: [0, 1, 3]
    },
    {
      id: 5,
      text: "Welche HTTP-Methode sollte für das Abrufen von Daten vom Server verwendet werden?",
      options: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      correctAnswers: [0]
    }
  ];