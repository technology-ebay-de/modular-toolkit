import PropTypes from 'prop-types';
import subscribeToContext from './subscribeToContext';
import mountHoc from '@mt-testutils/mount-hoc';

const mockSubscribe = jest.fn();
const mockContext = {
    test: {
        subscribe: mockSubscribe,
        data: { foo: 'bar' }
    }
};

const mockPropTypes = {
    foo: PropTypes.string
};

jest.mock('./connectSelectors');

describe('When I enhance a component with the "subscribeToContext" enhancer', () => {
    let component;
    beforeAll(() => {
        ({ component } = mountHoc(subscribeToContext('test', mockPropTypes), { context: mockContext }));
    });
    describe('subscribe function', () => {
        it('is called`', () => expect(mockSubscribe).toBeCalled());
        it('has the props from context`', () => expect(component.prop('foo')).toEqual('bar'));
    });
});
