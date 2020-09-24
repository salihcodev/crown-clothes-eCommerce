import cartActionTypes from './cartActionTypes';

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.toggleCartVisibility:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
