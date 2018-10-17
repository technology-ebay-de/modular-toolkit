import selectModular from './selectModular';
import { select } from 'redux-saga/effects';

jest.mock('redux-saga/effects');
const mockSelect = jest.fn();
const mockMakeWorkWithGlobalState = jest.fn();

select.mockImplementation(func => {
    mockSelect();
    return func;
});

jest.mock('./makeWorkWithGlobalState', () => func => {
    mockMakeWorkWithGlobalState();
    return func;
});

describe('When I call the “select modular” function with a selector', () => {
    beforeEach(() => selectModular(() => {}));
    describe('the selector', () => {
        it('is enhanced with a “select” wrapper from redux-saga', () => expect(mockSelect).toBeCalled());
        it('is enhanced with a “make work with global state” wrapper', () => expect(mockSelect).toBeCalled());
    });
    afterEach(() => jest.clearAllMocks());
});
