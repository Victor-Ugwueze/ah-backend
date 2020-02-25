// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow } from 'enzyme';

// modules imports
import configureStore from '../../../store/configureStore';
import SingupContainer from '../SingupContainer';

describe('Signup Component', () => {
  test('renders the signup Component', () => {
    const store = configureStore();
    const wrapper = shallow(<Provider store={store}><SingupContainer /></Provider>);
    expect(wrapper.exists()).toBe(true);
  });
});
