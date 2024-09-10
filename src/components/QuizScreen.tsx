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
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleOptionToggle = (optionIndex: number) => {
    setSelectedOptions((prev) => {
      if (prev.includes(optionIndex)) {
        return prev.filter((index) => index !== optionIndex);
      } else {
        return [...prev, optionIndex];
      }
    });
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOptions.length === currentQuestion.correctAnswers.length &&
      selectedOptions.every((option) => currentQuestion.correctAnswers.includes(option));
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOptions([]);
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
  const gradientClass = `gradient-${(currentQuestionIndex % 4) + 1}`;

  return (
    <div className="quiz-screen">
      <h2>Quiz: {topicId}</h2>
      <div className={`question-container ${gradientClass}`}>
        <h3>Frage {currentQuestionIndex + 1} von {questions.length}</h3>
        <p>{currentQuestion.text}</p>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="checkbox"
                checked={selectedOptions.includes(index)}
                onChange={() => handleOptionToggle(index)}
              />
              {option}
            </label>
          ))}
        </div>
        <button onClick={handleSubmit} className="quiz-button">
          {currentQuestionIndex === questions.length - 1 ? 'Quiz beenden' : 'Nächste Frage'}
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;