// react  libraries
import React from 'react';

// third-party libraries
import { Provider } from 'react-redux';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import ForgotPassword from '../ForgotPassword/ForgotPassword';

// store
import configureStore from '../../store/configureStore';

describe('Login Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(
        <Provider store={store}>
          <ForgotPassword />
        </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
