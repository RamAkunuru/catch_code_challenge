import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../components/Dashboard';
import store from '../store';

const products = [
    { 
        id: "123",
        name: "abc",
        imageUrl: "https://google.com/something1",
        salePrice: 123, 
        retailPrice: 456, 
        quantityAvailable: 12
    }, 
    {
        id: "124",
        name: "def",
        imageUrl: "https://google.com/something2",
        salePrice: 124, 
        retailPrice: 457, 
        quantityAvailable: 14
    }
];

describe("Dashboard component", () => {
    test("render matches the snapshot", () => {
        const component = shallow(<Dashboard products={products} store={store} />);
        expect(component).toMatchSnapshot();
    });
});
