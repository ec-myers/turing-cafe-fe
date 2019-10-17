import React from 'react';
import Card from '../Card/Card';
import './Container.css';

const Container = ({ reservations }) => {
  return (
    reservations.map(reservation => {
      return <Card reservation={reservation} name={reservation.name} date={reservation.date} time={reservation.time} number={reservation.number}/>
    })
  )
}

export default Container;