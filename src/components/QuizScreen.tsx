import React from 'react';
import { useParams } from 'react-router-dom';

const QuizScreen: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();

  return (
    <div>
      <h2>Quiz: {topicId}</h2>
      {/* Implementiere hier die Quiz-Logik */}
    </div>
  );
};

export default QuizScreen;