import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

export default combineReducers({
  usersReducer,
  postsReducer,
  form: formReducer
});
