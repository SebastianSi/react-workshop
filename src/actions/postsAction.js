import {
  POST_FORM_TOGGLE,
  POST_FORM_TITLE,
  POST_FORM_DESCRIPTION,
  POST_FORM_IMAGE_INDEX,
  POST_FORM_LIKES
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
