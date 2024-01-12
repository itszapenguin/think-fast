import React from 'react';
import './ChampionCard.css'

const ChampionCard = ({ championName, championImage, cost, traits = [], onClick}) => {

    let borderImageURL = "https://i.imgur.com/6F8xRcE.png";
    let hoverImageURL = "";

    if (cost === 1) {
        console.log("hi");
        borderImageURL = "https://i.imgur.com/UDCv9lY.png";
        hoverImageURL = "https://i.imgur.com/lMelvyg.png";

    }

    else if (cost === 2) {
        borderImageURL = "https://i.imgur.com/FQZHREt.png";
        hoverImageURL = "https://i.imgur.com/Xi9iQgb.png";

    }

    else if (cost === 3) {
        borderImageURL = "https://i.imgur.com/6F8xRcE.png";
        hoverImageURL = "https://i.imgur.com/pNNvFgv.png";

    }

    else if (cost === 4) {
        borderImageURL = "https://i.imgur.com/fKgl0ig.png";
        hoverImageURL = "https://i.imgur.com/9KXeaNL.png";

    }

    else {
        borderImageURL = "https://i.imgur.com/nrDr7Mq.png";
        hoverImageURL = "https://i.imgur.com/7OO880w.png";

    }

    const championImageURL = championImage;

    function getTraitImage(traitName) {
        if (traitName === "8-Bit") return "https://i.imgur.com/9C51fwR.png";
        if (traitName === "Emo") return "https://i.imgur.com/8cMTiR0.png";
        if (traitName === "Big Shot") return "https://i.imgur.com/r738lMf.png"; 
        if (traitName === "Breakout") return "https://i.imgur.com/8FNWoDC.png";
        if (traitName === "Maestro") return "https://i.imgur.com/RMtzSaW.png";
        if (traitName === "Country") return "https://i.imgur.com/WreilXC.png";
        if (traitName === "Crowd Diver") return "https://i.imgur.com/90LJ8To.png";
        if (traitName === "Mixmaster") return "https://i.imgur.com/93JShIy.png"; 
        if (traitName === "Edgelord") return "https://i.imgur.com/lx0rHFm.png";
        if (traitName === "EDM") return "https://i.imgur.com/L6LYGX0.png";
        if (traitName === "Disco") return "https://i.imgur.com/RKAr0Ka.png";
        if (traitName === "HEARTSTEEL") return "https://i.imgur.com/XXCPWfK.png";
        if (traitName === "Hyperpop") return "https://i.imgur.com/a08m6uY.png";
        if (traitName === "ILLBEATS") return "https://i.imgur.com/w3bfp1r.png";
        if (traitName === "Jazz") return "https://i.imgur.com/qreeaMX.png";
        if (traitName === "K/DA") return "https://i.imgur.com/wYQN2l6.png";
        if (traitName === "Mosher") return "https://i.imgur.com/drbcTfd.png";
        if (traitName === "Pentakill") return "https://i.imgur.com/0zRVhoZ.png";
        if (traitName === "Punk") return "https://i.imgur.com/k3yy6er.png";
        if (traitName === "Rapidfire") return "https://i.imgur.com/T7KsYcv.png";
        if (traitName === "Superfan") return "https://i.imgur.com/zDVvmoU.png";
        if (traitName === "True Damage") return "https://i.imgur.com/vPvCgzk.png";
        if (traitName === "Sentinel") return "https://i.imgur.com/djLYUF2.png";
        if (traitName === "Wildcard") return "https://i.imgur.com/sXR768B.png";
        if (traitName === "Bruiser") return "https://i.imgur.com/17Svru8.png";
        if (traitName === "Dazzler") return "https://i.imgur.com/JbVNSal.png";
        if (traitName === "Executioner") return "https://i.imgur.com/EnwaroM.png";
        if (traitName === "Spellweaver") return "https://i.imgur.com/fgRQRdA.png";
        if (traitName === "Guardian") return "https://i.imgur.com/ExEdNMN.png"; 

        else return "";
    }

    let traitOne = traits[0];
    let traitTwo = traits[1];
    let traitThree = traits[2];

    let traitOneImage = getTraitImage(traitOne);
    let traitTwoImage = getTraitImage(traitTwo);
    let traitThreeImage = getTraitImage(traitThree);

    return (
        <button className="card" onClick={onClick}>
            <div className="champion-image" 
                style={{ backgroundImage: `url(${championImageURL})`
                }}  

            ></div>
            <div className="trait-one" style={{backgroundImage: `url(${traitOneImage})`}}>{traitOne}

            </div>
            <div className="trait-two" style={{backgroundImage: `url(${traitTwoImage})`}}>{traitTwo}</div>
            <div className="trait-three" style={{backgroundImage: `url(${traitThreeImage})`}}>{traitThree}</div>
            <div className="border" 
                style={{ backgroundImage: `url(${borderImageURL})`
                }}  
            
            ></div>
            <div className="champion-name">{championName}</div>
            <div className="champion-cost">{cost}</div>
        </button>
    );
};

export default ChampionCard;