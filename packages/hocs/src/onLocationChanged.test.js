import onLocationChanged from './onLocationChanged';
import * as recompose from 'recompose';

let mockComponentWillReceiveProps;
jest.mock('recompose');
recompose.lifecycle = jest.fn(
    lifecycleArgs =>
        (mockComponentWillReceiveProps = lifecycleArgs.componentWillReceiveProps.bind({
            props: {
                location: {
                    pathname: 'some-path',
                    search: 'some-search'
                }
            }
        }))
);

describe('When I call the function', () => {
    describe('and simulate a location change by changing the pathname', () => {
        let onLocationChangedCallback;
        beforeEach(() => {
            onLocationChangedCallback = jest.fn();
            onLocationChanged(onLocationChangedCallback);
            mockComponentWillReceiveProps({
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
            mockComponentWillReceiveProps({
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
            mockComponentWillReceiveProps({
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
