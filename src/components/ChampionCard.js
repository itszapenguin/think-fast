import React from 'react';
import './ChampionCard.css'

const ChampionCard = ({ championName, championImage, cost, traits}) => {
  return (
    <button className="card">
        <div className="champion-image" background-image = {"../../public/assets/tft-champion/TFT10_Amumu.TFT_Set10.png"}></div>
        <div className="border">{championName}</div>
    </button>
  );
};

export default ChampionCard;