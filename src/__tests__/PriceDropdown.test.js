import React from 'react';
import { shallow } from 'enzyme';
import { PriceDropdown } from '../components/PriceDropdown';
import store from '../store';

describe("PriceDropdown component", () => {
    let component;
    let actions = {
        sortByPrice: jest.fn()
    }

    beforeEach(() => {
        component = shallow(<PriceDropdown actions={actions} store={store}/>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("render matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});
