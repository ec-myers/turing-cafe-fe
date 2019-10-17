import React from 'react';
import './Card.css';

const Card = (props) => {

  return (
    <div className='Card'>
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>Number of guests: {props.number}</p>
      <button type='button' className='cancel-btn' onClick={() => props.cancelReservation(props.id)}>Cancel</button>
    </div>
  )
} 

export default Card;