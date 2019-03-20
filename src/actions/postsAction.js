import { POST_FORM_TOGGLE, POST_FORM_TITLE } from './actionConstants';

export const togglePostFormAction = () => ({
  type: POST_FORM_TOGGLE
});

export const postFormTitleAction = inputVal => ({
  type: POST_FORM_TITLE,
  payload: inputVal
});
