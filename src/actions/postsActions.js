import { reset } from 'redux-form';
import {
  POST_FORM_TOGGLE,
  ADD_POST,
  OPEN_RESET_POST_FORM_SNACKBAR,
  CLOSE_RESET_POST_FORM_SNACKBAR
} from './actionConstants';
export const togglePostFormAction = () => ({
  type: POST_FORM_TOGGLE
});

export const addPostAction = postObj => (dispatch, getState) => {
  dispatch({
    type: ADD_POST,
    payload: postObj
  });
  dispatch(reset('postForm'));
};

export const openResetPostFormSnackbar = () => ({
  type: OPEN_RESET_POST_FORM_SNACKBAR
});

export const closeResetPostFormSnackbar = resetForm => (dispatch, getState) => {
  if (resetForm) {
    dispatch(reset('postForm'));
  }
  dispatch({
    type: CLOSE_RESET_POST_FORM_SNACKBAR
  });
};
