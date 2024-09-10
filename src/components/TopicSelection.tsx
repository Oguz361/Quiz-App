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
      <h1 className="topic-title">Wähle ein Thema</h1>
      <div className="card-container">
        {topics.map((topic) => (
          <div key={topic.id} className={`card ${topic.gradient}`}>
            <div className="card-details">
              <p className="text-title">{topic.name}</p>
              <p className="text-body">Klicke für mehr Informationen</p>
            </div>
            <Link to={topic.path} className="card-button">Mehr Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;