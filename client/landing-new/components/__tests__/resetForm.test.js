// react libraries
import React from 'react';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import ResetPasswordForm from '../ResetPassword/ResetPasswordForm';

describe('ResetpasswordForm Component', () => {
  test('renders the ResetpasswordForm Component', () => {
    const wrapper = shallow(
          <ResetPasswordForm />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
