import {
  POST_FORM_TOGGLE,
  // remove the next 3 unnecessary imports
  POST_FORM_DESCRIPTION,
  POST_FORM_IMAGE_INDEX,
  POST_FORM_LIKES,
  ADD_POST,
  RESET_POST_FORM,
  OPEN_RESET_POST_FORM_SNACKBAR,
  CLOSE_RESET_POST_FORM_SNACKBAR
} from '../actions/actionConstants';

const initialState = {
  posts: [],
  showPostForm: false,
  titleInput: '',
  descriptionInput: '',
  imageIndexInput: '',
  likesInput: '',
  openResetPostFormSnackbar: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_TOGGLE:
      return {
        ...state,
        showPostForm: !state.showPostForm
      };

    // remove
    case POST_FORM_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.payload
      };

    // remove
    case POST_FORM_IMAGE_INDEX:
      return {
        ...state,
        imageIndexInput: action.payload
      };

    // remove
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
      // if (action.payload) {
      //   return {
      //     ...state,
      //     titleInput: '',
      //     descriptionInput: '',
      //     imageIndexInput: '',
      //     likesInput: '',
      //     openResetPostFormSnackbar: false
      //   };
      // }
      return {
        ...state,
        openResetPostFormSnackbar: false
      };

    default:
      return state;
  }
};

export default reducer;
