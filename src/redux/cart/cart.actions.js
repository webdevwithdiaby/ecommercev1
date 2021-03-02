import {CartActionsTypes} from './cart.types';

export const addToCart = item => ({
    type: CartActionsTypes.ADD_TO_CART,
    payload: item
});