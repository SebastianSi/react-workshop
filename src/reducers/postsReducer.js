import { POST_FORM_TOGGLE, POST_FORM_TITLE } from '../actions/actionConstants';

const initialState = {
  showPostForm: false,
  titleInput: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_TOGGLE:
      return {
        ...state,
        showPostForm: !state.showPostForm
      };

    case POST_FORM_TITLE:
      return {
        ...state,
        titleInput: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
