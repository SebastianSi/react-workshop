import {
  POST_FORM_TOGGLE,
  // remove the next 2 unnecessary imports
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

// remove
export const postFormDescriptionAction = inputVal => ({
  type: POST_FORM_DESCRIPTION,
  payload: inputVal
});

// remove
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

// export const resetPostFormAction = () => ({
//   type: RESET_POST_FORM
// });

// same as

// export const resetPostFormAction = function() {
//   return {
//     type: RESET_POST_FORM
//   };
// };

/////////////////////////////////////////////////////////
// export const resetPostFormAction = function() {
//   return function(dispatch, getState) {
//     // you can get the global state by calling getState()
//     console.log(getState());

//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => {
//       console.log(json);
//       // you can dispatch an action here
//     });
//     dispatch({
//       type: RESET_POST_FORM
//     });
//   };
// };

export const resetPostFormAction = () => ({
  type: RESET_POST_FORM
});

export const openResetPostFormSnackbar = () => ({
  type: OPEN_RESET_POST_FORM_SNACKBAR
});

// the "classic" approach
// export const closeResetPostFormSnackbar = resetForm => ({
//   type: CLOSE_RESET_POST_FORM_SNACKBAR,
//   payload: resetForm
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
