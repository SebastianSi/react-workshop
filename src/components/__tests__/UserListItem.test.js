import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import UserListItem from '../UserListItem';
import Button from '../common/Button';

test('UserListItem snapshot', () => {
  const mockFn = jest.fn();
  const component = renderer.create(
    <UserListItem user={{ name: 'test', id: 1 }} openUserForm={mockFn} />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('UserListItem tests', () => {
  const mockFn = jest.fn();
  const component = shallow(
    <UserListItem user={{ name: 'test', id: 1 }} openUserForm={mockFn} />
  );

  //find and check component span text
  expect(component.find('span').text()).toEqual('name: test ');

  //set new props to component
  component.setProps({ user: { name: 'test2', id: 2 }});

  //check if new props are matching 
  expect(component.find('span').text()).toEqual('name: test2 ');

  //simulate click
  component.find('Button').simulate('click');

  //check if the mock function was called
  expect(mockFn).toHaveBeenCalledTimes(1);

  //check number of childrens
  expect(component.children().length).toEqual(2);

  //check first child type(regular html tag)
  expect(component.childAt(0).type()).toEqual('span')

  //check second child to be specific React Component
  expect(component.childAt(1).containsMatchingElement(<Button />)).toEqual(true);
});