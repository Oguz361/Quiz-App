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
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleOptionToggle = (optionIndex: number) => {
    if (!isAnswerConfirmed) {
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
    }
  };

  const handleConfirmAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswers = selectedOptions[currentQuestionIndex];
    const isCorrect = selectedAnswers.length === currentQuestion.correctAnswers.length &&
      selectedAnswers.every((answer) => currentQuestion.correctAnswers.includes(answer));
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setIsAnswerConfirmed(true);
    setAnsweredQuestions((prev) => {
      const newAnsweredQuestions = [...prev];
      newAnsweredQuestions[currentQuestionIndex] = true;
      return newAnsweredQuestions;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswerConfirmed(false);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsAnswerConfirmed(answeredQuestions[currentQuestionIndex - 1]);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOptions(questions.map(() => []));
    setIsAnswerConfirmed(false);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  const abortQuiz = () => {
    navigate('/topics');
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
          <div className="question-summary">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`question-box ${answeredQuestions[index] ? (index < score ? 'correct' : 'incorrect') : ''}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
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
            <label
              key={index}
              className={`option-label ${
                isAnswerConfirmed
                  ? currentQuestion.correctAnswers.includes(index)
                    ? 'correct'
                    : selectedOptions[currentQuestionIndex].includes(index)
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
            >
              <input
                type="checkbox"
                checked={selectedOptions[currentQuestionIndex].includes(index)}
                onChange={() => handleOptionToggle(index)}
                disabled={isAnswerConfirmed}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handleBack} className="quiz-button" disabled={currentQuestionIndex === 0}>
            Zurück
          </button>
          {!isAnswerConfirmed ? (
            <button onClick={handleConfirmAnswer} className="quiz-button">
              Antwort bestätigen
            </button>
          ) : (
            <button onClick={handleNext} className="quiz-button">
              {currentQuestionIndex === questions.length - 1 ? 'Quiz beenden' : 'Nächste Frage'}
            </button>
          )}
        </div>
        <button onClick={abortQuiz} className="quiz-button abort-button">
          Quiz abbrechen
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;