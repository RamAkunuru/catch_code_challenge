import { combineReducers } from 'redux';
import sortBy from 'lodash.sortby';
import clonedeep from 'lodash.clonedeep';
import { GET_PRODUCT_LIST, SORT_BY_PRICE } from './actions';

const DEFAULT_STATE = {};

const productList = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_PRODUCT_LIST:
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

const rootReducer = combineReducers({ productList });

export default rootReducer;
