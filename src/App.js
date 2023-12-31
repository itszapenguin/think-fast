import './App.css';
import React, { useState } from 'react';
import ChampionCard from './components/ChampionCard';
import ChampionsList from './components/ChampionsList';

function App() {
  const [introIsVisible, setIntroIsVisible] = useState(true);

  const [shopIsVisible, setShopIsVisible] = useState(false);

  const [playerGold, setPlayerGold] = useState(500); // Initialize player's gold with 0

  const [playerLevel, setPlayerLevel] = useState(2);

  const [playerOdds, setPlayerOdds] = useState([100, 0, 0, 0, 0]);

  const [levelCost, setLevelCost] = useState(2);

  const [levelProgress, setLevelProgress] = useState(0);

  const poolSize = [null, 22, 20, 17, 10, 9];

  const levelCosts = [null, null, 6, 10, 20, 36, 48, 80, 84];

  const shopOdds = [null, null, 
                    [75, 25, 0, 0, 0], 
                    [55, 30, 15, 0, 0], 
                    [45, 33, 20, 2, 0], 
                    [30, 40, 25, 5, 0], 
                    [19, 35, 35, 10, 1], 
                    [18, 25, 36, 18, 3], 
                    [10, 20, 25, 35, 10], 
                    [5, 10, 20, 40, 25]];


  const sellRate = [null, [1, 3, 5], [2, 4, 6], [3, 5, 7], [4, 6, 8], [5, 7, 9]];

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
    if (playerLevel < 10) {
      setPlayerLevel(playerLevel+1);
      setPlayerOdds(shopOdds[playerLevel]);
      if (playerLevel < 10) {
        setLevelCost(levelCosts[playerLevel]);
      
      //MAX level reached
      } else {
        setLevelProgress(null);
        setLevelCost(Infinity);
      }
    }
    
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
    if (playerLevel < 10) {
      if (playerGold >= 4) {
        updateGold(-4);
        buyXP();
      }
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
              <p className="chances-text">{playerOdds}</p>
          </div>
          <div className="player-level">
            <p className="player-level-text">Lvl. {playerLevel}</p>
            
            <p className="player-progress-text">{levelProgress}/{levelCost}</p>
          </div>

          <div className="money"> 
            <div className="gold"></div>
            <p className="money-text">{playerGold}</p>
          </div>
          
          <div className="shop" alt = "shop">

            <div>
              <button className="level" onClick={handleLevelClick}>
                <p className="button-title">Buy XP</p>
                <p className="button-subtext">4</p>
                <div className="gold-icon"></div>

              </button>

              <button className="refresh" onClick={handleRefreshClick} >
                <p className="button-title">Reroll</p>
                <p className="button-subtext">2</p>
                <div className="gold-icon"></div>
                
              </button>
              <ChampionsList></ChampionsList>

  
            </div>
          
          </div>
        </div>
      )}






    </div>
  );
}

export default App;
