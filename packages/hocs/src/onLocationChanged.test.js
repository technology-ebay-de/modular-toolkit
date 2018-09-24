import onLocationChanged from './onLocationChanged';
import * as recompose from 'recompose';

let mockComponentDidUpdate, mockComponentDidMount;

jest.mock('recompose');
recompose.lifecycle = jest.fn(lifecycleArgs => {
    mockComponentDidUpdate = lifecycleArgs.componentDidUpdate.bind({
        props: {
            location: {
                pathname: 'some-path',
                search: 'some-search'
            }
        }
    });
    mockComponentDidMount = lifecycleArgs.componentDidMount.bind({
        props: {
            location: {
                pathname: 'some-path',
                search: 'some-search'
            }
        }
    });
});

describe('When I call the function with a callback', () => {
    describe('and simulate a location change by changing the pathname', () => {
        let onLocationChangedCallback;
        beforeEach(() => {
            onLocationChangedCallback = jest.fn();
            onLocationChanged(onLocationChangedCallback);
            mockComponentDidUpdate({
                location: {
                    pathname: 'some-other-path',
                    search: 'some-search'
                }
            });
        });
        describe('the on-location-change callback', () =>
            it('is called', () => expect(onLocationChangedCallback).toBeCalled()));
    });
    describe('and simulate a location change by changing the search', () => {
        let onLocationChangedCallback;
        beforeEach(() => {
            onLocationChangedCallback = jest.fn();
            onLocationChanged(onLocationChangedCallback);
            mockComponentDidUpdate({
                location: {
                    pathname: 'some-path',
                    search: 'some-other-search'
                }
            });
        });
        describe('the on-location-change callback', () =>
            it('is called', () => expect(onLocationChangedCallback).toBeCalled()));
    });
    describe('and simulate a location change without changing pathname or search', () => {
        let onLocationChangedCallback;
        beforeEach(() => {
            onLocationChangedCallback = jest.fn();
            onLocationChanged(onLocationChangedCallback);
            mockComponentDidUpdate({
                location: {
                    pathname: 'some-path',
                    search: 'some-search'
                }
            });
        });
        describe('the on-location-change callback', () =>
            it('is not called', () => expect(onLocationChangedCallback).not.toBeCalled()));
    });
});

describe('When I call the function with a callback and second argument “true”', () => {
    let onLocationChangedCallback;
    beforeEach(() => {
        onLocationChangedCallback = jest.fn();
        onLocationChanged(onLocationChangedCallback, true);
        mockComponentDidMount({
            location: {
                pathname: 'some-other-path',
                search: 'some-search'
            }
        });
    });
    describe('the on-location-change callback', () =>
        it('is called', () => expect(onLocationChangedCallback).toBeCalled()));
    describe('and the component mounts a second time', () => {
        beforeEach(() => mockComponentDidMount({}));
        describe('the on-location-change callback', () =>
            it('is not called a second time', () => expect(onLocationChangedCallback.mock.calls.length).toEqual(1)));
    });
});
