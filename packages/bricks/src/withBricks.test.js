import React from 'react';
import withBricks from './withBricks';
import { mount } from 'enzyme';
import BrickProvider from './BrickProvider';

const sagaMiddleware = jest.fn();
const store = {};
const reducer = jest.fn();
const bricks = 'BRICKS';
const mockInstallBricks = jest.fn();

jest.mock(
    './BrickManager',
    () =>
        class BrickManager {
            installBricks(...args) {
                mockInstallBricks(...args);
            }
        }
);

function MyComponent() {
    return <h1>Hiya!</h1>;
}

describe('When I mount a component that is wrapped with Bricks', () => {
    beforeEach(() => {
        const MyWrappedComponent = withBricks(bricks)(MyComponent);
        mount(
            <BrickProvider sagaMiddleware={sagaMiddleware} store={store} reducer={reducer}>
                <MyWrappedComponent />
            </BrickProvider>
        );
    });
    describe("the Brick Manager's “installBricks” method", () =>
        it('is called with the provided brick map', () => expect(mockInstallBricks).toBeCalledWith(bricks)));
    afterEach(() => jest.clearAllMocks());
});
