import { createSelector } from 'reselect';

// cart.
const selectCart = (state) => state.cart;

// cart items here, and call it inside  <createSelector> function to memoize :)
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItemsList
);

// get cart-visibility state to manage cart-items-dropdown:
export const cartVisibility = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// memoize the cart total-quantity items.
export const selectItemsCount = createSelector(
  [selectCartItems],
  (cartItemsList) =>
    cartItemsList.reduce(
      (aqqQuantity, cartItem) => aqqQuantity + cartItem.quantity,
      0
    )
);

// memoize the cart total-price items.
export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItemsList) =>
    cartItemsList.reduce(
      (aqqQuantity, cartItem) =>
        aqqQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
