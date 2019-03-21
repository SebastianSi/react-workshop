import {
  POST_FORM_TOGGLE,
  POST_FORM_TITLE,
  POST_FORM_DESCRIPTION,
  POST_FORM_IMAGE_INDEX,
  POST_FORM_LIKES,
  ADD_POST
} from '../actions/actionConstants';

const initialState = {
  showPostForm: false,
  titleInput: '',
  descriptionInput: '',
  imageIndexInput: '',
  likesInput: ''
  // initialize 'posts' with an empty array
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

    case POST_FORM_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.payload
      };

    case POST_FORM_IMAGE_INDEX:
      return {
        ...state,
        imageIndexInput: action.payload
      };

    case POST_FORM_LIKES:
      return {
        ...state,
        likesInput: action.payload
      };

    case ADD_POST:
      // add post to the 'posts' array
      return;

    default:
      return state;
  }
};

export default reducer;
