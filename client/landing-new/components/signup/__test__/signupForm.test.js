// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

// modules importation
import SignupForm from '../SignupForm';
import SignupPage from '../SingupPage';
import UpdateAccountForm from '../UpdateAccountForm';
import UpdatePage from '../UpdatePage';

configure({
  adapter: new Adapter(),
});

// SnapShot Test
describe('Renders the singup page', () => {
  const register = () => {};

  it('should render the signup form', () => {
    const component = shallow(
      <SignupForm
        signup={{
          registered: false,
        }}
        register={register}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the signup page', () => {
    const component = renderer.create(
      <SignupPage
        register={register}
        signup={{
          registered: false,
        }}
      />,
      {
        disableLifecycleMethods: true,
      }
    );
    expect(component).toMatchSnapshot();
  });
});


// SnapShot Test
describe('Renders the update page page', () => {
  const register = () => {};

  it('should render the update form', () => {
    const handleSubmit = () => {};
    const component = shallow(
      <UpdateAccountForm
        signup={{
          registered: false,
        }}
        register={register}
        email='email@gmail.com'
        handleSubmit={
          handleSubmit
        }
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the update page', () => {
    const email = 'email@test.com';
    const updateUser = () => {};
    const component = shallow(
      <UpdatePage
        updateAccount={{
          update: {}
        }}
        location={{
          verifiedUser: {
            email
          }
        }}
        updateUser={
          updateUser
        }
      />,
      {
        disableLifecycleMethods: true,
      }
    );
    expect(component).toMatchSnapshot();
  });
});
