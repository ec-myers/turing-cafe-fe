import React from 'react';
import './Card.css';

const Card = ({reservation}) => {
  const { id, name, date, time, number} = reservation;

  return (
    <div className='Card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button type='button' className='cancel-btn'>Cancel</button>
    </div>
  )
} 

export default Card;