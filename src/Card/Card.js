import React from 'react';

const Card = ({reservation}) => {
  const { id, name, date, time, number} = reservation;

  return (
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button type='button' className='cancel-btn'>Cancel</button>
    </div>
  )
} 

export default Card;