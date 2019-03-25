import expect from 'expect';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  togglePostFormAction,
  addPostAction
} from '../postsActions';
import {
  POST_FORM_TOGGLE,
  ADD_POST,
  OPEN_RESET_POST_FORM_SNACKBAR,
  CLOSE_RESET_POST_FORM_SNACKBAR
} from '../actionConstants';
import { postMock } from '../../mocks/postsMock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async posts actions', () => {
  it('should call add post action', () => {
    const store = mockStore({});
    
    const expectedAction = {
      type: ADD_POST,
      payload: postMock
    };

    const emptyPostAction = {
      type: ADD_POST,
      payload: {}
    };
    
    expect(store.dispatch(addPostAction(postMock))).toEqual(expectedAction);

    expect(store.dispatch(addPostAction(postMock))).not.toEqual(emptyPostAction);
  })

  it('should call close reset post form action', () => {
    
  });
})

describe('sync posts actions', () => {
  it('should call toggle post form action', () => {
    const expectedAction = {
      type: POST_FORM_TOGGLE
    };

    expect(togglePostFormAction()).toEqual(expectedAction);
  });

  it('should call open reset post form action', () => {
    
  });
});