import React from 'react';
import ChampionCard from './ChampionCard';
import './ChampionsList.css';

const ChampionsList = ({shop, buyChampionOne, buyChampionTwo, buyChampionThree, buyChampionFour, buyChampionFive}) => {


  return (
    
    <div className='container'>

      <ChampionCard championName = {shop[0].name} cost={shop[0].cost} traits={shop[0].traits} championImage={shop[0].url} onClick={buyChampionOne}></ChampionCard>
      <ChampionCard championName = {shop[1].name} cost={shop[1].cost} traits={shop[1].traits} championImage={shop[1].url} onClick={buyChampionTwo}></ChampionCard>
      <ChampionCard championName = {shop[2].name} cost={shop[2].cost} traits={shop[2].traits} championImage={shop[2].url} onClick={buyChampionThree}></ChampionCard>
      <ChampionCard championName = {shop[3].name} cost={shop[3].cost} traits={shop[3].traits} championImage={shop[3].url} onClick={buyChampionFour}></ChampionCard>
      <ChampionCard championName = {shop[4].name} cost={shop[4].cost} traits={shop[4].traits} championImage={shop[4].url} onClick={buyChampionFive}></ChampionCard>
    </div>
  );
};

export default ChampionsList;