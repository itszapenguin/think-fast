import React from 'react';
import ChampionCard from './ChampionCard';
import './ChampionsList.css';

const ChampionsList = ({shop}) => {


  return (
    
    <div className='container'>
      <ChampionCard championName = {shop[0].name} cost={shop[0].cost} traits={shop[0].traits} championImage={'../../public/assets/tft-champion/TFT10_Ezreal.TFT_Set10.png'}></ChampionCard>
      <ChampionCard championName = {shop[1].name} cost={shop[1].cost} traits={shop[1].traits}></ChampionCard>
      <ChampionCard championName = {shop[2].name} cost={shop[2].cost} traits={shop[2].traits}></ChampionCard>
      <ChampionCard championName = {shop[3].name} cost={shop[3].cost} traits={shop[3].traits}></ChampionCard>
      <ChampionCard championName = {shop[4].name} cost={shop[4].cost} traits={shop[4].traits}></ChampionCard>
    </div>
  );
};

export default ChampionsList;