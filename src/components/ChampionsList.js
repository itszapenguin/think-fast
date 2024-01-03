import React from 'react';
import ChampionCard from './ChampionCard';
import './ChampionsList.css';

const ChampionsList = () => {
  return (
    <div className='container'>
      <ChampionCard championName = {"Ezreal"} cost={"4"} championImage={'../../public/assets/tft-champion/TFT10_Ezreal.TFT_Set10.png'}></ChampionCard>
      <ChampionCard championName = {"Akali"} cost={"4"}></ChampionCard>
      <ChampionCard></ChampionCard>
      <ChampionCard></ChampionCard>
      <ChampionCard></ChampionCard>
    </div>
  );
};

export default ChampionsList;