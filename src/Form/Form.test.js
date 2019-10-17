import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe ('Form', () => {
  it('should match the snapshot', () => {
    const mockAddReservation = jest.fn();
    let wrapper = shallow(<Form 
      addReservation={mockAddReservation} />);
    
    expect(wrapper).toMatchSnapshot();
  });
})