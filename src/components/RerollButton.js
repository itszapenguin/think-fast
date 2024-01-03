import React from 'react';
import './RerollButton.css'; // Import component-specific styles

const RerollButton = ({onClick}) => {
return (
    <button className="refresh" id="reroll-button" onClick={onClick} >
    <p className="button-title">Reroll</p>
    <p className="button-subtext">2</p>
    <div className="gold-icon"></div>
    
  </button>
    );
};

export default RerollButton;