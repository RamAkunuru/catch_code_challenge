import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from "../components/NotFoundPage";

describe("NotFoundPage component", () => {
    test("render matches the snapshot", () => {
        const component = shallow(<NotFoundPage />);
        expect(component).toMatchSnapshot();
    });
});
