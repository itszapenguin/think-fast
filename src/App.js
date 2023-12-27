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

  return (
    <div className="arena"> 
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
        <div className="shop">
          Shop
        </div>
      )}






    </div>
  );
}

export default App;
