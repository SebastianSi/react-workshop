const initialState = {
  showPostForm: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_FORM_TOGGLE':
      return {
        ...state,
        showPostForm: !state.showPostForm
      };

    default:
      return state;
  }
};

export default reducer;
