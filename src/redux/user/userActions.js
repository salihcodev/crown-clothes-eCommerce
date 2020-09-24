// import action types:
import { userActionTypes } from '../user/userActionTypes';

const setCurrentUser = (user) => {
  return { type: userActionTypes.SetCurrentUser, payload: user };
};

export default setCurrentUser;
