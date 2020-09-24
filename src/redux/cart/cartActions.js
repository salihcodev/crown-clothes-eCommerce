import cartActionsTypes from './cartActionTypes';

export const toggleCartVisibility = () => ({
  type: cartActionsTypes.toggleCartVisibility,
});

export const addItem = (item) => ({
  type: cartActionsTypes.addItem,
  payload: item,
});
