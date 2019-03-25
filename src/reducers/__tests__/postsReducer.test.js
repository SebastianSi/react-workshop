import expect from 'expect';

import reducer, { initialState } from '../postsReducer';
import {
  POST_FORM_TOGGLE,
  ADD_POST,
  OPEN_RESET_POST_FORM_SNACKBAR,
  CLOSE_RESET_POST_FORM_SNACKBAR
} from '../../actions/actionConstants';
import { postMock, postsMock } from '../../mocks/postsMock';



describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle post form', () => {
    const postFormToggleAction = {
      type: POST_FORM_TOGGLE
    };

    //Simulate app current state 
    let currentState = { ...initialState };

    expect(reducer(initialState, postFormToggleAction)).toEqual({
      ...initialState,
      showPostForm: true
    });

    //store reducer state
    currentState = reducer(initialState, postFormToggleAction);

    expect(reducer(currentState, postFormToggleAction)).toEqual({
      ...initialState,
      showPostForm: false
    });

    //check for the toggle field directly
    expect(reducer(initialState, postFormToggleAction)).not.toBe({
      ...initialState,
      showPostForm: false
    });

    //check for the toggle field directly
    expect(reducer(initialState, postFormToggleAction).showPostForm).toBe(true);
  });

  it('should add post', () => {
    //mock action
    const addPostAction = {
      type: ADD_POST,
      payload: postMock
    };

    //add postMock to empty posts array
    expect(reducer(initialState, addPostAction)).toEqual({
      ...initialState,
      posts: [postMock]
    });

    //add mock for posts 
    let currentState = {
      ...initialState,
      posts: postsMock
    };

    //add new post to posts array
    expect(reducer(currentState, addPostAction)).toEqual({
      ...initialState,
      posts: postsMock.concat(postMock)
    });

    //check if the posts array contains the new added post
    expect(reducer(currentState, addPostAction).posts).toEqual(
      expect.arrayContaining([postMock])
    );

    //check for the posts array length
    expect(reducer(currentState, addPostAction).posts.length).not.toBe(4);

    //check for the posts array length
    expect(reducer(currentState, addPostAction).posts.length).toBe(5);
  });

  it('should open reset post form snackbar', () => {
    const openResetPostFromSanckbarAction = {
      type: OPEN_RESET_POST_FORM_SNACKBAR
    };

    expect(reducer(initialState, openResetPostFromSanckbarAction)).toEqual({
      ...initialState,
      openResetPostFormSnackbar: true
    });

    expect(reducer(initialState, openResetPostFromSanckbarAction).openResetPostFormSnackbar).not.toBe(false);
  });

  it('should close reset post form snackbar', () => {
    const closeResetPostFromSanckbarAction = {
      type: CLOSE_RESET_POST_FORM_SNACKBAR
    };

    expect(reducer(initialState, closeResetPostFromSanckbarAction)).toEqual({
      ...initialState,
      openResetPostFormSnackbar: false
    });

    expect(reducer(initialState, closeResetPostFromSanckbarAction).openResetPostFormSnackbar).toBeFalsy();
  });
});