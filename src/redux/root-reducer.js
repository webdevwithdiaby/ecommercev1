import {combineReducers} from 'redux';

import CategoryReducer from './category/category.reducer';

export default combineReducers({
    categoryReducer: CategoryReducer
})