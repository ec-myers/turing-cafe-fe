import React from 'react';
import Card from '../Card/Card';
import './Container.css';

const Container = ({ reservations, cancelReservation }) => {
  return (
    reservations.map(reservation => {
      return <Card key={reservation.id} id={reservation.id} name={reservation.name} date={reservation.date} time={reservation.time} number={reservation.number} cancelReservation={cancelReservation}/>
    })
  )
}

export default Container;