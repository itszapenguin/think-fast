import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import ChampionsList from './components/ChampionsList';
import XPButton from './components/XPButton';
import RerollButton from './components/RerollButton';
import championData from './champions.json'

function App() {
  const [introIsVisible, setIntroIsVisible] = useState(true);

  const [shopIsVisible, setShopIsVisible] = useState(false);

  const [playerGold, setPlayerGold] = useState(500); // Initialize player's gold with 0

  const [playerLevel, setPlayerLevel] = useState(2);

  const [playerOdds, setPlayerOdds] = useState([100, 0, 0, 0, 0]);

  const [levelCost, setLevelCost] = useState(2);

  const [levelProgress, setLevelProgress] = useState(0);

  const[seperator, setSeperator] = useState("/")

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


  const [championsPool, setChampionsPool] = useState(initializeChampionsPool());

  const [shop, setShop] = useState([]);

  //DISABLE Buttons
  useEffect(() => {
    //MAYBE CAN OPTIMISE?
    // Check if the current state variable is less than 10
    if (playerGold > 4) {

    } else {

    }

    if (playerGold > 2) {

    } else {

    }


  }, [playerGold]); // Dependency array ensures the effect runs when yourStateVariable changes

  //can we consolidate to one singular helper function with parameter index?
  function buyChampionOne() {
    if (shop[0] != null) {
      if (playerGold >= shop[0].cost) {
        setPlayerGold(playerGold - shop[0].cost);
        //remove from pool
      }

    }
    removeFromShop(0);


  }

  function buyChampionTwo() {
    if (shop[1] != null) {
      if (playerGold >= shop[1].cost) {
        setPlayerGold(playerGold - shop[1].cost);
      }
    }
  }

  function buyChampionThree() {
    if (shop[2] != null) {
      if (playerGold >= shop[2].cost) {
        setPlayerGold(playerGold - shop[2].cost);

      }
    }
  }

  function buyChampionFour() {
    if (shop[3] != null) {
      if (playerGold >= shop[3].cost) {
        setPlayerGold(playerGold - shop[3].cost);

      }
    }
  }

  function buyChampionFive() {
    if (shop[4] != null) {
      if (playerGold >= shop[4].cost) {
        setPlayerGold(playerGold - shop[4].cost);

      }
    }
  }

  function removeFromShop(index) {
    // let newShop = shop;
    // newShop[index] = null;
    // setShop(newShop);

  }

  function removeFromPool(championName, cost) {
    let newChampionsPool = championsPool;
    let newCostPool = championsPool.get(cost);
    let index = -1;
    
    //bad linear search
    for (let i = 0; i < newCostPool.length; i++) {
      if (newCostPool[i].name === championName) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      newCostPool.splice(index, 1);
    }

    newChampionsPool[cost] = newCostPool;
    setChampionsPool(newChampionsPool);

  }



  // Function to initialize the champions pool
  function initializeChampionsPool() {
    // Create separate pools for each cost
    const poolsByCost = {};

    // Iterate over the championData object
    Object.values(championData).forEach((champion) => {
      const cost = champion.cost;

      // Check if the cost pool exists, if not, create an empty array
      if (!poolsByCost[cost]) {
        poolsByCost[cost] = [];
      }

      // Add the specified number of copies for each champion to the corresponding cost pool
      const numberOfCopies = getNumberOfCopiesByCost(cost);
      for (let i = 0; i < numberOfCopies; i++) {
        poolsByCost[cost].push({ ...champion }); // Create a copy of the champion
      }
    });

    console.log("POOLS:", poolsByCost);
    return poolsByCost;
  
  }

  function reroll() {
    const champions = [];
    for (let i = 0; i < 5; i++) {
      const randomCost = genRandomCost();
      const randomIndex = Math.floor(Math.random() * championsPool[randomCost].length);
      console.log("generated random unit, ", randomCost, randomIndex);
      champions.push(championsPool[randomCost][randomIndex]);
    }
    console.log("new shop", champions);
      // Use the previous shop value from the closure
    
    setShop(champions);
    console.log("Updated Shop: ", shop);

  }
  
  function getNumberOfCopiesByCost(cost) {
    // Define the number of copies for each cost
    const copiesByCost = {
      1: 22,
      2: 20,
      3: 17,
      4: 10,
      5: 9,
      };
  
    return copiesByCost[cost] || 0;
  }


  function genRandomCost() {
    var random = Math.random()*100;
    var cost = 1;
    while (random > playerOdds[cost-1]) {
      random-= playerOdds[cost-1];
      cost++;
    }

    //if pool is empty, reroll for new cost
    if (championsPool[cost].length == 0) {
      cost = genRandomCost();
    }
    return cost;

  }



  const handlePlayClick = () => {
    setIntroIsVisible(false);


    //timer for shop visibility
    setTimeout(() => {
      reroll();
      setShopIsVisible(true);
    }, 1000);
  };


  const updateGold = (amount) => {
    setPlayerGold(playerGold + amount);
  };

  function levelUp() {
    if (playerLevel < 10) {
      setPlayerLevel(playerLevel+1);
      setPlayerOdds(shopOdds[playerLevel]);
      
      if (playerLevel < 10) {
        setLevelCost(levelCosts[playerLevel]);
      } else {
        setLevelCost(null);
        
      }
    }
    
  }

  function buyXP() {
    if (levelProgress + 4 < levelCost) {
      setLevelProgress(levelProgress + 4);
    } else {
      
      if (playerLevel == 9) {
        setLevelProgress(null);
        levelUp();
        setSeperator("MAX");
      } else {
        setLevelProgress(levelProgress + 4 - levelCost);
        levelUp();

      }
    }

  }

  const handleRefreshClick = () => {
    if (playerGold >= 2) {
      updateGold(-2);
      reroll();
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'f' || event.key === 'F') {
        handleLevelClick();
      }
      if (event.key === 'd' || event.key === 'D') {
        handleRefreshClick();
      }
    };
    // Add event listener when the component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerLevel, playerGold, levelProgress, levelCost, shop]);


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
              <div className="one-chance">{playerOdds[0]+"%"}</div>
              <div className="two-chance">{playerOdds[1]+"%"}</div>
              <div className="three-chance">{playerOdds[2]+"%"}</div>
              <div className="four-chance">{playerOdds[3]+"%"}</div>
              <div className="five-chance">{playerOdds[4]+"%"}</div>
          </div>
          <div className="player-level">
            <p className="player-level-text">Lvl. {playerLevel}</p>
            
            <p className="player-progress-text" id="player-progress">{levelProgress}{seperator}{levelCost}</p>
          </div>

          <div className="money"> 
            <div className="gold"></div>
            <p className="money-text">{playerGold}</p>
          </div>
          
          <div className="shop" alt = "shop">

            <div>
              <XPButton onClick={handleLevelClick}></XPButton>
              <RerollButton onClick={handleRefreshClick}></RerollButton>

              {shop !== undefined && <ChampionsList shop={shop} buyChampionOne={buyChampionOne} buyChampionTwo={buyChampionTwo} buyChampionThree={buyChampionThree} buyChampionFour={buyChampionFour} buyChampionFive={buyChampionFive}/>}
  
            </div>

            {/* <img className="test" src="https://i.imgur.com/oBt8gYB.png" alt="React Image" /> */}
          
          </div>
        </div>
      )}






    </div>
  );
}

export default App;
