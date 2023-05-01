import React from 'react'
import './Card.css'

const Card = (props) => {
    const {imageUrl, cardname,  rarity} = props;

  return (
    <div className='card-container'>
      <div className='card'>
          <p> {rarity} </p>
          <img className='card-img' src={imageUrl} alt={cardname}/>
      </div>
    </div>
  );
}

export default Card