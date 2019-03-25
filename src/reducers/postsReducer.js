import {
  POST_FORM_TOGGLE,
  POST_FORM_DESCRIPTION, // remove after connecting the 'description' field to redux-form
  POST_FORM_IMAGE_INDEX, // remove after connecting the 'imageIndex' field to redux-form
  POST_FORM_LIKES, // remove after connecting the 'likes' field to redux-form
  ADD_POST,
  RESET_POST_FORM,
  OPEN_RESET_POST_FORM_SNACKBAR,
  CLOSE_RESET_POST_FORM_SNACKBAR
} from '../actions/actionConstants';

const initialState = {
  posts: [],
  showPostForm: false,
  descriptionInput: '', // remove after connecting the 'description' field to redux-form
  imageIndexInput: '', // remove after connecting the 'imageIndex' field to redux-form
  likesInput: '', // remove after connecting the 'likes' field to redux-form
  openResetPostFormSnackbar: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_TOGGLE:
      return {
        ...state,
        showPostForm: !state.showPostForm
      };

    // remove after connecting the 'description' field to redux-form
    case POST_FORM_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.payload
      };

    // remove after connecting the 'imageIndex' field to redux-form
    case POST_FORM_IMAGE_INDEX:
      return {
        ...state,
        imageIndexInput: action.payload
      };

    // remove after connecting the 'likes' field to redux-form
    case POST_FORM_LIKES:
      return {
        ...state,
        likesInput: action.payload
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    case RESET_POST_FORM:
      return {
        ...state,
        titleInput: '',
        descriptionInput: '',
        imageIndexInput: '',
        likesInput: ''
      };

    case OPEN_RESET_POST_FORM_SNACKBAR:
      return {
        ...state,
        openResetPostFormSnackbar: true
      };

    case CLOSE_RESET_POST_FORM_SNACKBAR:
      return {
        ...state,
        openResetPostFormSnackbar: false
      };

    default:
      return state;
  }
};

export default reducer;
