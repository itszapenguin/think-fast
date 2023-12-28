import React from 'react';
import ChampionCard from './ChampionCard';
import './ChampionsList.css';

const ChampionsList = () => {
  return (
    <div className='container'>
      <ChampionCard>{"Akali"}</ChampionCard>
      <ChampionCard></ChampionCard>
      <ChampionCard></ChampionCard>
      <ChampionCard></ChampionCard>
      <ChampionCard></ChampionCard>
    </div>
  );
};

export default ChampionsList;