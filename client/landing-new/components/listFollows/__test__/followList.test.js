// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// modules importation
import Followers from '../Followers';
import Following from '../Following';

configure({
  adapter: new Adapter(),
});

describe('Renders followers page', () => {
  const listFollows = () => {};
  const listFollowing = () => {};
  it('should render the followers component', () => {
    const component = shallow(
      <Followers
        auth={{
          isAuth: true
        }}
        followers={[]}
        following ={[]}
        listFollows ={
          listFollows
        }
        follow={{
          progress: 'done'
        }}
        listFollowing = {
          listFollowing
        }
        match={{
          params: {
            username: '@username_23'
          }
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Renders following page', () => {
  const listFollowing = () => {};
  it('should render the following component', () => {
    const component = shallow(
      <Following
        auth={{
          isAuth: true,
        }}
        following={[]}
        listFollowing = {
          listFollowing
        }
        follow={{
          progress: 'done'
        }}
        match={{
          params: {
            username: '@username_23'
          }
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
