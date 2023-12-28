import './App.css';
import React, { useState } from 'react';
import ChampionCard from './components/ChampionCard';
import ChampionsList from './components/ChampionsList';

function App() {
  const [introIsVisible, setIntroIsVisible] = useState(true);

  const [shopIsVisible, setShopIsVisible] = useState(false);

  const [playerGold, setPlayerGold] = useState(50); // Initialize player's gold with 0

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
    setPlayerOdds(shopOdds[playerLevel]);
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
              <p className="chances-text">{playerOdds}</p>
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
              <ChampionsList></ChampionsList>

  
            </div>
          
          </div>
        </div>
      )}






    </div>
  );
}

export default App;
