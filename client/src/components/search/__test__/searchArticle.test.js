// react libraries
import React from 'react';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import SearchArticle from '../SearchArticle';

describe('SearchArticle Component', () => {
  test('renders the SearchArticle Component', () => {
    const wrapper = shallow(
          <SearchArticle
          key={''}
          title={''}
          description={''}
          imageUrl={''}
          slug={''}
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
