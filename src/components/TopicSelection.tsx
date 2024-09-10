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
        <span className="back-arrow">&#8592;</span> Zurück
      </Link>
      <h1 className="topic-title">Wähle ein Thema</h1>
      <div className="card-container">
        {topics.map((topic) => (
          <Link key={topic.id} to={topic.path} className="card-link">
            <div className={`card ${topic.gradient}`}>
              <div className="card-info">
                <p className="title">{topic.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;