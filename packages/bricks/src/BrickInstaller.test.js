import React from 'react';
import BrickInstaller from './BrickInstaller';
import { mount } from 'enzyme';
import BrickManager from './BrickManager';
import PropTypes from 'prop-types';

function MyComponent({ name }) {
    return <h1>Hello {name}!</h1>;
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired
};

jest.mock('./BrickManager');

const brickManager = new BrickManager();
const bricks = Symbol('bricks');

describe('When I mount a component that is wrapped with a BrickInstaller', () => {
    let component;
    beforeEach(() =>
        (component = mount(
            <BrickInstaller
                brickManager={brickManager}
                bricks={bricks}
                WrappedComponent={MyComponent}
                wrappedComponentProps={{
                    name: 'world'
                }}
            />
        )));
    describe("the provided brick manager's “installBricks” method", () =>
        it('is called with the provided brick map', () => expect(brickManager.installBricks).toBeCalledWith(bricks)));
    describe('the provided wrapped component', () => {
        it('is rendered with the provided wrapped component props', () => {
            expect(component.html()).toMatchSnapshot();
        });
    });
});
