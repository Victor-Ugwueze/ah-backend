// react libraries
import React from 'react';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import LoginTypeSelector from '../login/LoginTypeSelector';

describe('LoginTypeSelector Component', () => {
  test('renders the LoginTypeSelector Component', () => {
    const wrapper = shallow(
          <LoginTypeSelector
            onClick={() => {}}
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
