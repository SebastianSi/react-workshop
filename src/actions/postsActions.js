import {
  POST_FORM_TOGGLE,
  POST_FORM_TITLE,
  POST_FORM_DESCRIPTION,
  POST_FORM_IMAGE_INDEX,
  POST_FORM_LIKES,
  ADD_POST,
  RESET_POST_FORM,
  OPEN_RESET_POST_FORM_SNACKBAR,
  CLOSE_RESET_POST_FORM_SNACKBAR
} from './actionConstants';

export const togglePostFormAction = () => ({
  type: POST_FORM_TOGGLE
});

export const postFormTitleAction = inputVal => ({
  type: POST_FORM_TITLE,
  payload: inputVal
});

export const postFormDescriptionAction = inputVal => ({
  type: POST_FORM_DESCRIPTION,
  payload: inputVal
});

export const postFormImageIndexAction = inputVal => ({
  type: POST_FORM_IMAGE_INDEX,
  payload: inputVal
});

export const postFormLikesAction = inputVal => ({
  type: POST_FORM_LIKES,
  payload: inputVal
});

export const addPostAction = postObj => ({
  type: ADD_POST,
  payload: postObj
});

export const resetPostFormAction = () => ({
  type: RESET_POST_FORM
});

export const openResetPostFormSnackbar = () => ({
  type: OPEN_RESET_POST_FORM_SNACKBAR
});

// the "classic" approach
// export const closeResetPostFormSnackbar = resetForm => ({
//   type: CLOSE_RESET_POST_FORM_SNACKBAR,
//   resetForm
// });

// with "redux-thunk" approach
export const closeResetPostFormSnackbar = resetForm => (dispatch, getState) => {
  if (resetForm) {
    dispatch({
      type: RESET_POST_FORM
    });
  }
  dispatch({
    type: CLOSE_RESET_POST_FORM_SNACKBAR
  });
};
