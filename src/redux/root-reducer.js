import {combineReducers} from 'redux';

import CategoryReducer from './category/category.reducer';
import UserReducer from './user/user.reducer';

export default combineReducers({
    categoryReducer: CategoryReducer,
    userReducer: UserReducer
})