export const addUniItemToCart = (cartItemsList, cartItemsToAdd) => {
  // point to the passed item.
  const existingItem = cartItemsList.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingItem) {
    return cartItemsList.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // add default "quantity" key.
  return [...cartItemsList, { ...cartItemsToAdd, quantity: 1 }];
};

export const controlTheCheckoutItem = (cartItemsList, cartItemToControl) => {
  // point to the passed item.
  // if cartItemToControl.id === cartItemList.id.. so it's the one that we need to control.
  const existingItem = cartItemsList.find(
    (cartItem) => cartItem.id === cartItemToControl.id
  );

  if (existingItem.quantity === 1) {
    // if the quantity === 1 then return all items but passed one.  ماعدا === but
    return cartItemsList.filter(
      (cartItem) => cartItem.id !== cartItemToControl.id
    );
  }
  return cartItemsList.map((cartItem) =>
    cartItem.id === cartItemToControl.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
