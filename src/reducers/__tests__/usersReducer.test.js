import expect from 'expect';

import reducer, { initialState } from '../usersReducer';
import { GET_USERS } from '../../actions/actionConstants';
import { userMock, usersMock } from '../../mocks/usersMock';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should get users', () => {
    //mock action
    const getUsersAction = {
      type: GET_USERS,
      payload: usersMock
    };

    // check if the users mock is added to users state
    expect(reducer(initialState, getUsersAction)).toEqual({
      ...initialState,
      users: usersMock
    });

    //add mock for users 
    const currentState = {
      ...initialState,
      users: usersMock
    };

    //create new list of users
    const newUsersList = usersMock.concat(userMock);

    //mock action with new list of users
    const getNewListOfUsersAction = {
      type: GET_USERS,
      payload: newUsersList
    };

    //check if the new list is in users state
    expect(reducer(currentState, getNewListOfUsersAction)).toEqual({
      ...initialState,
      users: newUsersList
    });

    //check if the new users array contains the old users array
    expect(reducer(currentState, getNewListOfUsersAction).users).toEqual(
      expect.arrayContaining(usersMock)
    );

    // //check for the users array length
    expect(reducer(currentState, getNewListOfUsersAction).users.length).not.toBe(4);

    //check for the users array length
    expect(reducer(currentState, getNewListOfUsersAction).users.length).toBe(5);
  });
});