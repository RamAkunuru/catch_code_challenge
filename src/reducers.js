import { combineReducers } from 'redux';
import sortBy from 'lodash.sortby';
import clonedeep from 'lodash.clonedeep';
import { SORT_BY_PRICE, GET_PRODUCT_LIST_ASYNC } from './actions';

const DEFAULT_STATE = {};

const productList = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_PRODUCT_LIST_ASYNC:
            const sortedList = sortBy(action.payload.results, 'salePrice').reverse();
            return sortedList;

        case SORT_BY_PRICE:
            let sortedPriceList;
            const products = clonedeep(state);

            if (action.payload === 'asc') {
                sortedPriceList = sortBy(products, 'salePrice');
            } else {
                sortedPriceList = sortBy(products, 'salePrice').reverse();
            }

            return sortedPriceList;

        default:
            return state;
    }
};

/* 
Turns an object whose values are different reducer functions, into a single reducer function. 
It will call every child reducer, and gather their results into a single state object, whose 
keys correspond to the keys of the passed reducer functions.
*/
const rootReducer = combineReducers({ productList });

export default rootReducer;
