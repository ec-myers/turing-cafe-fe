import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should update state with a new reservation when addReservation is called', () => {
    let wrapper = shallow(<App />)
    const mockReservation = {
      "id": 1,
      "name": "Christie",
      "date": "12/29",
      "time": "7:00",
      "number": 12
    }
    const expected = [mockReservation];

    expect(wrapper.state('reservations')).toEqual([]);
    wrapper.instance().addReservation(mockReservation);
    expect(wrapper.state('reservations')).toEqual(expected);
  });
});
