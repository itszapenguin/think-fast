import './App.css';
import React, { useState } from 'react';

function App() {
  const [introIsVisible, setIntroIsVisible] = useState(true);

  const [shopIsVisible, setShopIsVisible] = useState(false);

  const handlePlayClick = () => {
    setIntroIsVisible(false);

    //timer for shop visibility
    setTimeout(() => {
      setShopIsVisible(true);
    }, 1000);
  };

  const level = 2, progress = 0;

  const handleRefreshClick = () => {
    
  }

  const handleLevelClick = () => {

  }

  return (
    <div className="arena" alt="arena"> 
      {introIsVisible && (
        <div className={`title-banner ${introIsVisible ? '' : 'hide'}`}>          
        <p className="title-text">THINK FAST</p>
        </div>
      )}
      {introIsVisible && (
        <button 
          className={`play-button ${introIsVisible ? '' : 'hide'}`} 
          onClick={handlePlayClick}
        >
          Play Now
        </button>
      )}

      {shopIsVisible && (
        <div className="hud" alt = "hud">
          <div className="chances"> 
              
          </div>
          <div className="player-level">
            <p className="player-level-text">Lvl. {level}</p>
            <p className="player-progress-text">{progress}/100</p>
          </div>
          
          <div className="shop" alt = "shop">

            <div>
              <button className="level">
                <p className="level-text">Buy XP</p>

              </button>

              <button className="refresh" >
                <p className="refresh-text">Reroll</p>
              </button>
            </div>
          
          </div>
        </div>
      )}






    </div>
  );
}

export default App;
