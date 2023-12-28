import React from 'react';
import './ChampionCard.css'

const ChampionCard = ({ championName, championImage, cost, traits}) => {
  return (
    <div className="champion-card">
      <img src={championImage} alt={championName} />
      <p>{championName}</p>
      <p>{cost}</p>
    </div>
  );
};

export default ChampionCard;