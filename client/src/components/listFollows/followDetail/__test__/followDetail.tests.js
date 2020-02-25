// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// component
import FollowDetail from '../FollowDetail';


configure({
  adapter: new Adapter(),
});

describe('Renders followers page', () => {
  it('should the followers component', () => {
    const component = shallow(
      <FollowDetail
        auth={{
          auth: {
            isAuth: true
          },
          followers: {
            followers: []
          },
          followersCount: 0
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
