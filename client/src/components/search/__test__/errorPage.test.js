// react libraries
import React from 'react';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import ErrorPage from '../ErrorPage';

describe('ErrorPage Component', () => {
  test('renders the ErrorPage Component', () => {
    const wrapper = shallow(
          <ErrorPage
          type={''}
          keyword={''}
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
