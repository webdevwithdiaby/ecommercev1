import { createSelector } from 'reselect';

const selectShopReducer = store => store.shopReducer;

export const selectShopCollections = createSelector(
  [selectShopReducer],
  shopReducer =>
    shopReducer.collections.map(col => ({
      ...col,
      items: col.items.filter((item, ind) => (ind < 4 ? true : false)),
    }))
);
