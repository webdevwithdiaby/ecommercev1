import { combineReducers } from 'redux';

import CategoryReducer from './category/category.reducer';
import UserReducer from './user/user.reducer';
import ShopReducer from './shop/shop.reducer';
import CartReducer from './cart/cart.reducer';

export default combineReducers({
  categoryReducer: CategoryReducer,
  userReducer: UserReducer,
  shopReducer: ShopReducer,
  cartReducer: CartReducer,
});
