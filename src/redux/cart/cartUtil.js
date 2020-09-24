export const addUniItemToCart = (cartItems, cartItemsToAdd) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
