import React from 'react';
import ChampionCard from './ChampionCard';
import './ChampionsList.css';

const ChampionsList = () => {
  return (
    <div className='container'>
      <ChampionCard championName={"one"} className="slot-one"></ChampionCard>
      <ChampionCard championName={"two"}></ChampionCard>
      <ChampionCard championName={"three"}></ChampionCard>
      <ChampionCard championName={"four"}></ChampionCard>
      <ChampionCard championName={"five"}></ChampionCard>
    </div>
  );
};

export default ChampionsList;