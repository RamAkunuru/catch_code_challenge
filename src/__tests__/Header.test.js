import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe("Header component", () => {
    test("render matches the snapshot", () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
});
