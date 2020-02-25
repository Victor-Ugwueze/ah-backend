// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow } from 'enzyme';

// modules importation

import configureStore from '../../../store/configureStore';
import UpdateContainer from '../UpdateUserContainer';

describe('Update Component', () => {
  test('renders the Login Component', () => {
    const store = configureStore();
    const wrapper = shallow(<Provider store={store}><UpdateContainer /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });
});
