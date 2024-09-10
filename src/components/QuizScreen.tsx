import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { webQuizQuestions, QuizQuestion } from '../data/webQuizQuestions';
import '../styles/QuizScreen.css';

const QuizScreen: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [questions] = useState<QuizQuestion[]>(webQuizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number[][]>(questions.map(() => []));

  const handleOptionToggle = (optionIndex: number) => {
    setSelectedOptions((prev) => {
      const newSelectedOptions = [...prev];
      const currentSelected = newSelectedOptions[currentQuestionIndex];
      if (currentSelected.includes(optionIndex)) {
        newSelectedOptions[currentQuestionIndex] = currentSelected.filter((index) => index !== optionIndex);
      } else {
        newSelectedOptions[currentQuestionIndex] = [...currentSelected, optionIndex];
      }
      return newSelectedOptions;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateFinalScore();
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateFinalScore = () => {
    let finalScore = 0;
    questions.forEach((question, index) => {
      const selectedAnswers = selectedOptions[index];
      const correctAnswers = question.correctAnswers;
      if (selectedAnswers.length === correctAnswers.length &&
          selectedAnswers.every((answer) => correctAnswers.includes(answer))) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOptions(questions.map(() => []));
  };

  if (questions.length === 0) {
    return <div className="quiz-screen">Lade Fragen...</div>;
  }

  if (showResult) {
    return (
      <div className="quiz-screen">
        <div className="quiz-result">
          <h2>Quiz beendet!</h2>
          <p>Dein Ergebnis: {score} von {questions.length}</p>
          <button onClick={restartQuiz} className="quiz-button">Quiz neu starten</button>
          <button onClick={() => navigate('/topic-selection')} className="quiz-button">Zurück zur Themenauswahl</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-screen">
      <h2>Quiz: {topicId}</h2>
      <div className="question-container">
        <h3>Frage {currentQuestionIndex + 1} von {questions.length}</h3>
        <p>{currentQuestion.text}</p>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="checkbox"
                checked={selectedOptions[currentQuestionIndex].includes(index)}
                onChange={() => handleOptionToggle(index)}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handleBack} className="quiz-button" disabled={currentQuestionIndex === 0}>
            Zurück
          </button>
          <button onClick={handleNext} className="quiz-button">
            {currentQuestionIndex === questions.length - 1 ? 'Quiz beenden' : 'Nächste Frage'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;