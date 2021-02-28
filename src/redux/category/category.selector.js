import {createSelector} from 'reselect';

const selectCategoryReducer = store => store.categoryReducer;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    categoryReducer => categoryReducer.categories
);