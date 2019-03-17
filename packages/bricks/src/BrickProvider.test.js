import React from 'react';
import BrickProvider from './BrickProvider';
import { mount } from 'enzyme';
import BrickManagerContext from './BrickManagerContext';

const sagaMiddleware = jest.fn();
const store = {};
const reducer = jest.fn();
const mockBrickManagerConstructor = jest.fn();
const consumer = jest.fn();
jest.mock(
    './BrickManager',
    () =>
        class BrickManager {
            constructor(...args) {
                mockBrickManagerConstructor(...args);
            }
        }
);

describe('When I mount a brick provider component', () => {
    beforeEach(() =>
        mount(
            <BrickProvider sagaMiddleware={sagaMiddleware} store={store} reducer={reducer}>
                <BrickManagerContext.Consumer>{consumer}</BrickManagerContext.Consumer>
            </BrickProvider>
        ));
    describe('a Brick Manager', () =>
        void it('is instantiated with the provided saga middleware, store and reducer', () =>
            expect(mockBrickManagerConstructor).toBeCalledWith({
                store,
                reducer,
                sagaMiddleware
            })));
    describe('the consumer wrapped by the brick provider component', () =>
        void it('has access to the brick manager', () => expect(consumer.mock.calls[0]).toMatchSnapshot()));
    afterEach(() => jest.clearAllMocks());
});
