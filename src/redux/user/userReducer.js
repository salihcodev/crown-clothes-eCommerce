// import action types:
import { userActionTypes } from '../user/userActionTypes';

// set initial state:
const INITIAL_USER_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SetCurrentUser:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
