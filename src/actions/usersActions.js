import mockApi from '../utils/mockApi';

export const usersAction = () => (dispatch, getState) => {
  mockApi.fetchUsers().then(users => {
    dispatch({
      type: 'GET_USERS',
      payload: users
    });
  });
};
