import selectModular from './selectModular';
import { select } from 'redux-saga/effects';
import { sandbox } from 'sinon';

jest.mock('redux-saga/effects');
const mockSandbox = sandbox.create();
mockSandbox.select = mockSandbox.spy();
mockSandbox.makeWorkWithGlobalState = mockSandbox.spy();

select.mockImplementation(func => {
    mockSandbox.select();
    return func;
});

jest.mock('./makeWorkWithGlobalState', () => func => {
    mockSandbox.makeWorkWithGlobalState();
    return func;
});

describe('When I call the “select modular” function with a selector', () => {
    beforeEach(() => selectModular(() => {}));
    describe('the selector', () => {
        it('is enhanced with a “select” wrapper from redux-saga', () =>
            void mockSandbox.select.should.have.been.called);
        it('is enhanced with a “make work with global state” wrapper', () =>
            void mockSandbox.select.should.have.been.called);
    });
    afterEach(() => mockSandbox.restore());
});
