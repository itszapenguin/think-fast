import './App.css';
import React, { useState } from 'react';

function App() {
  const [introIsVisible, setIntroIsVisible] = useState(true);

  const [shopIsVisible, setShopIsVisible] = useState(false);

  const [playerGold, setPlayerGold] = useState(50); // Initialize player's gold with 0

  const [playerLevel, setPlayerLevel] = useState(2);

  const [levelCost, setLevelCost] = useState(2);

  const [levelProgress, setLevelProgress] = useState(0);

  const levelCosts = [0, 2, 6, 10, 20, 36, 48, 80, 84];

  const handlePlayClick = () => {
    setIntroIsVisible(false);

    //timer for shop visibility
    setTimeout(() => {
      setShopIsVisible(true);
    }, 1000);
  };

  const updateGold = (amount) => {
    setPlayerGold(playerGold + amount);
  };

  const levelUp = () => {
    setPlayerLevel(playerLevel+1);
    setLevelCost(levelCosts[playerLevel]);
  }

  const buyXP = () => {
    if (levelProgress + 4 < levelCost) {
      setLevelProgress(levelProgress + 4);
    } else {
      setLevelProgress(levelProgress + 4 - levelCost);
      levelUp();
      
    }
  }

  const handleRefreshClick = () => {
    if (playerGold >= 2) {
      updateGold(-2);
    }
    
  }

  const handleLevelClick = () => {
    if (playerGold >= 4) {
      updateGold(-4);
      buyXP();
    }
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
            <p className="player-level-text">Lvl. {playerLevel}</p>
            <p className="player-progress-text">{levelProgress}/{levelCost}</p>
          </div>

          <div className="money"> 
            <p className="money-text">{playerGold}</p>
          </div>
          
          <div className="shop" alt = "shop">

            <div>
              <button className="level" onClick={handleLevelClick}>
                <p className="level-text">Buy XP</p>

              </button>

              <button className="refresh" onClick={handleRefreshClick} >
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
