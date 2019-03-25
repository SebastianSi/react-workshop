import {
  POST_FORM_TOGGLE,
  POST_FORM_TITLE,
  POST_FORM_DESCRIPTION,
  POST_FORM_IMAGE_INDEX,
  POST_FORM_LIKES,
  ADD_POST,
  RESET_POST_FORM
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
//     dispatch({
//       type: RESET_POST_FORM
//     });
//   };
// };

// same as

export const resetPostFormAction = () => (dispatch, getState) => {
  // fetch('https://jsonplaceholder.typicode.com/albums')
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);
  //     // you can dispatch an action here
  //   });
  dispatch({
    type: RESET_POST_FORM
  });
};
