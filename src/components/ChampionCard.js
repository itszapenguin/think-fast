import React from 'react';
import './ChampionCard.css'

const ChampionCard = ({ championName, championImage, cost, traits = [], onClick}) => {
    // const borderImageURL = '../../public/assets/hud/${cost}-cost-border.png';
    // const hoverImageURL = '../../public/assets/hud/${cost}-cost-hover.png';
    // const championImageURL = '../../public/assets/tft-champion/' + championImage;

    const championImageURL = '/tft-champion/' + championImage;

    // console.log("border", borderImageURL);
    // console.log("hover", hoverImageURL);
    console.log("champion", championImageURL);

    let traitOne = "";
    let traitTwo = "";
    let traitThree = "";
    
    if (traits.length === 2) {
        traitOne = traits[0];
        traitTwo = traits[1];
    }
    
    if (traits.length === 3) {
        traitOne = traits[0];
        traitTwo = traits[1];
        traitThree = traits[2];
    }



    return (
        <button className="card" onClick={onClick}>
            <div className="champion-image" 
                // style={{ backgroundImage:'url("https://i.imgur.com/oBt8gYB.png")'
                // }}  
                style={{ backgroundImage:'url("./TFT10_Ahri.TFT_Set10.png")'
                }}
            ></div>
            <div className="trait-one">{traitOne}</div>
            <div className="trait-two">{traitTwo}</div>
            <div className="trait-three">{traitThree}</div>
            <div className="border"></div>
            <div className="champion-name">{championName}</div>
            <div className="champion-cost">{cost}</div>
        </button>
    );
};

export default ChampionCard;