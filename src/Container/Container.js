import React from 'react';
import Card from '../Card/Card';

const Container = ({reservations}) => {
  return (
    reservations.map(reservation => {
      return <Card reservation={reservation} />
    })
  )
}

export default Container;