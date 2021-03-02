import data from './data';

const INITIAL_STATE = {
  collections: data,
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ShopReducer;
