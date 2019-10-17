import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe ('Form', () => {
  let wrapper;

  beforeEach(() => {
    const mockAddReservation = jest.fn();
    wrapper = shallow(<Form
      addReservation={mockAddReservation} />);
  });
  
  it('should match the snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'name', value: 'khalid' } };
    const expected = 'khalid';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });
});