// react libraries
import React from 'react';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import SocialSignIn from '../SocialLogin/SocialSignIn';

describe('SocialSignIn Component', () => {
  test('renders the SocialSignIn Component', () => {
    const wrapper = shallow(
          <SocialSignIn />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
