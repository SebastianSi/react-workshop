import {
  POST_FORM_TOGGLE,
  ADD_POST,
  RESET_POST_FORM,
  OPEN_RESET_POST_FORM_SNACKBAR,
  CLOSE_RESET_POST_FORM_SNACKBAR
} from '../actions/actionConstants';

const initialState = {
  posts: [],
  showPostForm: false,
  openResetPostFormSnackbar: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_TOGGLE:
      return {
        ...state,
        showPostForm: !state.showPostForm
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
