// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import { Comment } from '../Comment';

/**
 * @desc setup up props
 * @return object
 */
function setup() {
  const props = {
    comment: jest.fn(),
    initialize: jest.fn(),
    auth: { user: {} },
    article: {},
    comments: {
      comments: [
        {
          id: 127,
          commentBody: 'It is true',
          createdAt: '2018-11-22T09:48:37.721Z',
          user: {
            firstname: 'chisom',
            username: 'obulaworld',
          },
          replies: [],
        },
      ],
    },
    showEditor: true,
  };

  const enzymeWrapper = shallow(<Comment {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Comment', () => {
    it('should render self and define its classes', () => {
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
});
