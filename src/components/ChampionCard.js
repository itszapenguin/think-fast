import React from 'react';
import './ChampionCard.css'

const ChampionCard = ({ championName, championImage, cost, traits}) => {
    const borderImageURL = `../../public/assets/hud/${cost}-cost-border.png`;
    const hoverImageURL = `../../public/assets/hud/${cost}-cost-hover.png`;
    const championImageURL = `../../public/assets/tft-champion/${championImage}`;

    const traitOne = "";
    const traitTwo = "";
    const traitThree = "";
    if (traits.length == 2) {
        traitOne = traits[0];
        traitTwo = traits[1];
    }

    if (traits.length == 3) {
        traitOne = traits[0];
        traitTwo = traits[1];
        traitThree = traits[2];
    }

    return (
        <button className="card">
            <div className="champion-image"></div>
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