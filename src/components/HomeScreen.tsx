import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css'

const HomeScreen: React.FC = () => {
  return (
    <div className="home-screen">
      <h1>Quiz App</h1>
      <div className="button-container">
        <Link to="/topics" className="button">
          Single Player
        </Link>
        <Link to="/coming-soon" className="button multiplayer">
          Multiplayer
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;