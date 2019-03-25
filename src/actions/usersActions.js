import mockApi from '../utils/mockApi';

export const usersAction = () => (dispatch, getState) => {
  dispatch({
    type: 'GET_USERS_REQUEST'
  });

  return mockApi.fetchUsers().then(users => {
    dispatch({
      type: 'GET_USERS',
      payload: users
    });
  });
};
