import React from 'react';
import { Link } from 'react-router-dom';

const TopicSelection: React.FC = () => {
  return (
    <div>
      <h2>Select a Topic</h2>
      <Link to="/coming-soon">Geschichte</Link>
      <Link to="/coming-soon">Religion</Link>
      <Link to="/coming-soon">Geographie</Link>
      <Link to="/quiz/web-klausur">Web Klausur Vorbereitung</Link>
    </div>
  );
};

export default TopicSelection