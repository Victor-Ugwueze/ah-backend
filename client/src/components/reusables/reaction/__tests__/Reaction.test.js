// react libraries
import React from 'react';


// third party libraries
import { shallow } from 'enzyme';

// components
import Reaction from '../Reaction';

/**
 * @desc setup up props
 * @return object
 */
function setup() {
  const props = {
    rate: jest.fn(),
    liked: jest.fn(),
    id: 2,
    reactions: [],
    rating: 4,
    slug: 'rtt667-vvbbnbnh-bvvvhhh-vvvggfgf',
    showEditor: true,
  };
  const enzymeWrapper = shallow(<Reaction {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
describe('components', () => {
  describe('Reaction', () => {
    it('should render self and define its classes', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.fa-thumbs-up')).toBeDefined();
      expect(enzymeWrapper.find('.fa-thumbs-down')).toBeDefined();
      expect(enzymeWrapper.find('.fa-bookmark')).toBeDefined();
      expect(enzymeWrapper.find('.l-ah-reaction')).toBeDefined();
      expect(enzymeWrapper.find('.reaction-counter')).toBeDefined();
    });
  });
});
