import cartActionsTypes from './cartActionTypes';

export const toggleCartVisibility = () => ({
  type: cartActionsTypes.toggleCartVisibility,
});

export const addItem = (item) => ({
  type: cartActionsTypes.addItem,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionsTypes.removeItem,
  payload: item,
});

export const controlTheItem = (item) => ({
  type: cartActionsTypes.controlTheItem,
  payload: item,
});
