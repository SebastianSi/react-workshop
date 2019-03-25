import mockApi from '../utils/mockApi';
// replace this with the redux-thunk approach and make the call to our 'mockApi' here
// then dispatch an action with the response from 'mockApi'
// use postsActions.js as example
export const usersAction = users => ({
  type: 'GET_USERS',
  payload: users
});
