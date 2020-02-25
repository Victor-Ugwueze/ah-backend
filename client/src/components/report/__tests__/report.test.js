// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Report from '../Report';

/**
 * @desc setup up props
 * @return object
 */
function setup() {
  const props = {
    report: jest.func,
    reportPublished: {},
    clear: jest.func,
  };

  const enzymeWrapper = shallow(<Report {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Reply component', () => {
  it('should verify that all classes are available', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.user-full-name')).toBeDefined();
    expect(enzymeWrapper.find('.comment-count')).toBeDefined();
    expect(enzymeWrapper.find('.comment-text')).toBeDefined();
    expect(enzymeWrapper.find('.comment-input')).toBeDefined();
    expect(enzymeWrapper.find('.comment-log')).toBeDefined();
    expect(enzymeWrapper.find('.comment-body')).toBeDefined();
    expect(enzymeWrapper.find('.comment')).toBeDefined();
  });
});
