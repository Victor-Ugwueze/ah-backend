// react libraries
import React from 'react';

// third-party libraries
import { Provider } from 'react-redux';

// enzyme third party libraries
import { shallow } from 'enzyme';

// component
import ResetPassword from '../ResetPassword/ResetPassword';

// store
import configureStore from '../../store/configureStore';

describe('ResetPassword Component', () => {
  test('renders the Resetpassword Component', () => {
    const store = configureStore();
    const wrapper = shallow(
        <Provider store={store}>
          <ResetPassword />
        </Provider>        
    );
    expect(wrapper.exists()).toBe(true);
  });
});
