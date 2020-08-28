import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from '../components/ProductCard';

describe("ProductCard component", () => {
    let component;
    const product = { 
        id: "123",
        name: "abc",
        imageUrl: "https://google.com/something1",
        salePrice: 123, 
        retailPrice: 456, 
        quantityAvailable: 12
    }

    beforeEach(() => {
        component = shallow(<ProductCard product={product} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("render matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });

    test("test if name has been rendered", () => {
        const productName = component.find('h2').text();

        expect(productName).toBe(product.name);
    });
});
