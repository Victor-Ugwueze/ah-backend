// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow } from 'enzyme';

// modules importation

import configureStore from '../../../store/configureStore';
import VerifyEamilContainer from '../VerifyEamilContainer';

describe('Update Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(<Provider store={store}><VerifyEamilContainer /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });
});
