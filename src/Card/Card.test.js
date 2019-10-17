import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card
      name = "Khalid"
      date = "5/9"
      time = "7:30"
      number= {7}
      />);

   expect(wrapper).toMatchSnapshot();
  });


});

