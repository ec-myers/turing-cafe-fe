import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container';
import Form from '../Form/Form';
import { getReservations, postReservation } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(data => this.setState({ reservations: data }))
    .catch(error => console.log(error))
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation]});
    postReservation(newReservation)
    .then(data => this.setState({ reservations: data }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Container className='Container' reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
