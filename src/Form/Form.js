import React, {  Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 6
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  makeReservation = (e) => {
    let newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    this.props.addReservation(newReservation);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: 6
    });
  }

  render() {
    return(
      <form className='Form'>
        <input type='text' placeholder='Name' name='name' value={this.state.name}onChange={this.handleChange}></input>
        <input type='text' placeholder='Date(mm/dd)' name='date' value={this.state.date} onChange={this.handleChange}></input>
        <input type='text' placeholder='Time' name='time' value={this.state.time} onChange={this.handleChange}></input>
        <input type='text' placeholder='Number of guests' name='number' value={this.state.number} onChange={this.handleChange}></input>
        <button type='button' className='submit-btn' onClick={this.makeReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;