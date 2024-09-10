import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TopicSelection.css';

const TopicSelection: React.FC = () => {
  const topics = [
    { id: 'history', name: 'Geschichte', path: '/coming-soon', gradient: 'gradient-1' },
    { id: 'religion', name: 'Religion', path: '/coming-soon', gradient: 'gradient-2' },
    { id: 'geography', name: 'Geographie', path: '/coming-soon', gradient: 'gradient-3' },
    { id: 'web-exam', name: 'Web Klausur\nVorbereitung', path: '/quiz/web-klausur', gradient: 'gradient-4' },
  ];

  return (
    <div className="topic-selection">
      <Link to="/" className="back-button">
        Zurück
      </Link>
      <div className="card-container">
        {topics.map((topic) => (
          <div key={topic.id} className={`card ${topic.gradient}`}>
            <div className="card-details">
              <p className="text-title">{topic.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;