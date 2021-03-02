import { createSelector } from 'reselect';

const selectCartReducer = store => store.cartReducer;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cartReducer => cartReducer.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
