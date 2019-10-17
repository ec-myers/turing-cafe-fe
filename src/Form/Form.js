import React, {  Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numGuests: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return(
      <form>
        <input type='text' placeholder='Name' name='name' value={this.state.name}onChange={this.handleChange}></input>
        <input type='text' placeholder='Date' name='date' value={this.state.date} onChange={this.handleChange}></input>
        <input type='text' placeholder='Time' name='time' value={this.state.time} onChange={this.handleChange}></input>
        <input type='text' placeholder='Number of guests' name='numGuests' value={this.state.numGuests} onChange={this.handleChange}></input>
        <button type='button' onClick={this.makeReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;