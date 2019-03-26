import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { UsersList } from '../UsersList';
import { usersMock } from '../../mocks/usersMock';

test('UsersList snapshot', () => {
  const getUsersMockFn = jest.fn();
  const component = renderer.create(
    <Router>
      <UsersList users={usersMock} getUsers={getUsersMockFn} />
    </Router>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('UsersList tests', () => {
  const getUsersMockFn = jest.fn();
  const component = shallow(
    <UsersList users={usersMock} getUsers={getUsersMockFn} />
  );

  //called on componentDidMount
  expect(getUsersMockFn).toHaveBeenCalledTimes(1);
});