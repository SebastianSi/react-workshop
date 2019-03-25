import expect from 'expect';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// //Used for mocking real fetch(in this app we already use a mock api)
// import fetchMock from 'fetch-mock'

import { usersAction } from '../usersActions';
import { GET_USERS, GET_USERS_REQUEST } from '../actionConstants';
import { USERS } from '../../utils/mockApi';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async users actions', () => {
  // //clear the response after each test
  // afterEach(() => {
  //   fetchMock.restore()
  // })

  it('should call get users action', () => {
    // //mock fecth result from server
    // fetchMock.getOnce('/todos', {
    //   body: { todos: ['do something'] },
    //   headers: { 'content-type': 'application/json' }
    // })

    const store = mockStore({});
    
    const expectedActions = [
      {
        type: GET_USERS_REQUEST
      },
      {
        type: GET_USERS,
        payload: USERS
      }
  ];

    return store.dispatch(usersAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})