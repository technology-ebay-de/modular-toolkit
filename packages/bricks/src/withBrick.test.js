import React from 'react';
import withBrick from './withBrick';
import { mount } from 'enzyme';
import BrickProvider from './BrickProvider';

const sagaMiddleware = jest.fn();
const store = {};
const reducer = jest.fn();
const storePath = 'STORE-PATH';
const brick = 'BRICK';
const mockInstallBrick = jest.fn();

jest.mock(
    './BrickManager',
    () =>
        class BrickManager {
            installBrick(...args) {
                mockInstallBrick(...args);
            }
        }
);

function MyComponent() {
    return <h1>Hiya!</h1>;
}

describe('When I mount a component that is wrapped with a Brick', () => {
    beforeEach(() => {
        const MyWrappedComponent = withBrick(storePath, brick)(MyComponent);
        mount(
            <BrickProvider sagaMiddleware={sagaMiddleware} store={store} reducer={reducer}>
                <MyWrappedComponent />
            </BrickProvider>
        );
    });
    describe("the Brick Manager's “installBrick” method", () =>
        it('is called with the provided store path and brick module', () =>
            expect(mockInstallBrick).toBeCalledWith(storePath, brick)));
    afterEach(() => jest.clearAllMocks());
});
