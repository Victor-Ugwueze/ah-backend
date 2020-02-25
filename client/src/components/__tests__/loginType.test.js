// react libraries
import React from 'react';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import LoginType from '../login/LoginType';

describe('LoginType Component', () => {
  test('renders the LoginType Component', () => {
    const wrapper = shallow(
          <LoginType
            className=''
            loginTypeName=''
            href=''
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
