import React from 'react';
import './ChampionCard.css'

const ChampionCard = ({ championName, championImage, cost, traits}) => {


    const championImageStyle = {
        // backgroundImage: `url("${championImage}")`,    
    };

    const borderStyle = {
        backgroundImage: 'url("../../public/assets/hud/' + {cost} + '-cost-border.png")',
    }

    const hoverBorderStyle = {
        backgroundImage: 'url("../../public/assets/hud/' + {cost} + '-cost-hover.png")',
    }
    
    return (
        <button className="card">
            <div className="champion-image" style={championImageStyle}></div>
            <div className="trait-one">Heartsteel</div>
            <div className="trait-two">Big Shot</div>
            <div className="trait-three">Catfish</div>
            <div className="border"d></div>
            <div className="champion-name">{championName}</div>
            <div className="champion-cost">{cost}</div>
        </button>
    );
};

export default ChampionCard;