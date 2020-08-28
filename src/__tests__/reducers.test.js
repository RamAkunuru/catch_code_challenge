import * as actions from '../actions';
import reducers from '../reducers';

describe("reducers", () => {
    test('SORT_BY_PRICE should return state with a sorted product list in descending order' , () => {
        const defaultState = {
            productList: [
                {name: "abc", salePrice: 12},
                {name: "def", salePrice: 15}
            ]
        };

        const expectedState = {
            productList: [
                {name: "def", salePrice: 15},
                {name: "abc", salePrice: 12}
            ]
        };

        expect(reducers(defaultState, {
            type: actions.SORT_BY_PRICE,
            payload: 'desc'
        })).toEqual(expectedState);
    });
})