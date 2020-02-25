// react libraries
import React from 'react';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import ForgotPasswordForm from '../ForgotPassword/ForgotPasswordForm';

describe('ForgotPasswordForm Component', () => {
  test('renders the ForgotPasswordForm Component', () => {
    const wrapper = shallow(
          <ForgotPasswordForm
            onHandleChange={() => {}}
            onHandleSubmit={() => {}}
            properties={{}}
          />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
