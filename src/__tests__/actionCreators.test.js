import * as actions from '../actions';
import { sortByPrice, setProductList } from '../actionCreators';

describe("actions", () => {
    test('sortByPrice() should return a type of SORT_BY_PRICE', () => {
        const expectedAction = {
            type: actions.SORT_BY_PRICE,
            payload: 'asc'
        };

        expect(sortByPrice('asc')).toEqual(expectedAction);
    });

    test('setProductList() should return a type of GET_PRODUCT_LIST', () => {
        const expectedAction = {
            type: actions.GET_PRODUCT_LIST,
            payload: [{name: "abc"}]
        };

        expect(setProductList([{name: "abc"}])).toEqual(expectedAction);
    });
})