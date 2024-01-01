import React from 'react';
import './ChampionCard.css'

const ChampionCard = ({ championName, championImage, cost, traits}) => {

    return (
        <button className="card">
            <div className="champion-image" background-image = {"../../public/assets/tft-champion/TFT10_Amumu.TFT_Set10.png"}></div>
            <div className="trait-one">Heartsteel</div>
            <div className="trait-two">Big Shot</div>
            <div className="trait-three">Catfish</div>
            <div className="border"></div>
            <div className="champion-name">{championName}</div>
            <div className="champion-cost">{cost}</div>
        </button>
    );
};

export default ChampionCard;