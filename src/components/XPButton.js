import React from 'react';
import './XPButton.css'; // Import component-specific styles

const XPButton = ({onClick}) => {
return (
    <button className="level" id="xp-button" onClick={onClick}>
                <p className="button-title">Buy XP</p>
                <p className="button-subtext">4</p>
                <div className="gold-icon"></div>

              </button>
    );
};

export default XPButton;