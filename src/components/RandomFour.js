import React, { useState, useEffect } from 'react'
import Card from './Card'
import './RandomFour.css'
function RandomFour() {

  const [fourCards, setFourCards] = useState([]);

  useEffect(()=>{
    fetch('https://api.pokemontcg.io/v2/cards?random=true&pageSize=4')
    .then(response => response.json())
    .then(data => setFourCards(data.data));
  },[]);

  return (
    <div>
        <ul>
          <div className='card-container'>
            {fourCards.map((card) => (
              <span className='card'>
              <Card 
              key={card.id}
              rarity={card.rarity}
              imageUrl = {card.images.large}
              />
              </span>
            ))}
          </div>
        </ul>
    </div>
  )
}

export default RandomFour