// UTILITIES:
import cartActionTypes from './cartActionTypes';
import { addUniItemToCart } from './cartUtil';

// INITIAL STATE:
const INITIAL_STATE = {
  hidden: true,
  cartItemsList: [],
};

// CART REDUCER
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.toggleCartVisibility:
      return { ...state, hidden: !state.hidden };

    case cartActionTypes.addItem:
      return {
        ...state,
        cartItemsList: addUniItemToCart(state.cartItemsList, action.payload),
      };

    case cartActionTypes.removeItem:
      return {
        ...state,
        cartItemsList: state.cartItemsList.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
