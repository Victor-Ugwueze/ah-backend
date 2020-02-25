// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// modules importation
import CreateArticle from '../CreateArticle';
import configureStore from '../../../store/configureStore';

configure({ adapter: new Adapter() });

describe('Article Component', () => {
  test('renders the Article Component', () => {
    const store = configureStore();
    const wrapper = shallow(
      <Provider store={store}>
        <CreateArticle />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
