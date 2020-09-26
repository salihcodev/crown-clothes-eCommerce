import { createSelector } from 'reselect';

// cart.
const selectCart = (state) => state.cart;

// cart items here, and call it inside  <createSelector> function to memoize :)
export const selectCartItems = createSelector(
  [selectCart],
  (selectCart) => selectCart.cartItemsList
);

// memoize the cart total items.
export const selectItemsCount = createSelector(
  [selectCartItems],
  (cartItemsList) =>
    cartItemsList.reduce(
      (aqqQuantity, cartItem) => aqqQuantity + cartItem.quantity,
      0
    )
);
