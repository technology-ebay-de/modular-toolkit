import PropTypes from 'prop-types';
import mountHoc from '@mt-testutils/mount-hoc';
import provideContext from './provideContext';

jest.mock('./connectSelectors');

describe('When I enhance a component with the "provideContext" enhancer', () => {
    let component, setProps;
    beforeAll(() => {
        const mockProps = {
            existingProp: 'existingPropValue'
        };
        const contextPropTypes = {
            test1: PropTypes.string,
            test2: PropTypes.arrayOf(PropTypes.number),
            test3: PropTypes.object,
            changeableString: PropTypes.string
        };
        const getChildContext = ({ existingProp }) => ({
            test1: existingProp
        });
        ({ component, setProps } = mountHoc(provideContext('testContext', contextPropTypes, getChildContext), {
            props: mockProps,
            getContextTypes: {
                testContext: PropTypes.shape({
                    subscribe: PropTypes.func,
                    ...contextPropTypes
                })
            }
        }));
    });
    describe('the props of the component', () =>
        void it('contain a "testContext" object with the context values and a subscribe function', () =>
            expect(component.prop('testContext')).toMatchSnapshot()));
    describe('and subscribe to context changes', () => {
        let unsubscribe, subscriptionCallback;
        beforeAll(() => {
            subscriptionCallback = jest.fn();
            unsubscribe = component.prop('testContext').subscribe(subscriptionCallback);
            setProps({ unrelated: 'cie' });
        });
        describe('the subscription callback', () =>
            void it('is not called', () => expect(subscriptionCallback).not.toHaveBeenCalled()));
        describe('and change a prop', () => {
            beforeEach(() => {
                setProps({ existingProp: 'changedExistingPropValue' });
            });
            describe('the subscription callback', () =>
                void it('is called', () => expect(subscriptionCallback).toHaveBeenCalled()));
        });
        describe('and unsubscribe', () => {
            beforeAll(() => {
                subscriptionCallback.mockReset();
                unsubscribe();
            });
            describe('and change a prop', () => {
                beforeEach(() => {
                    setProps({ existingProp: 'changedAgain' });
                });
                describe('the subscription callback', () =>
                    void it('is not called', () => expect(subscriptionCallback).not.toHaveBeenCalled()));
            });
        });
    });
});
