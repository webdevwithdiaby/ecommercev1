import CATEGORIES_DATA from './data';

const INITIAL_STATE = {
    categories: CATEGORIES_DATA
}

const CategoryReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default CategoryReducer;