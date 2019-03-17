import withWindowSize from './withWindowSize';
import mountHoc from '@mt-testutils/mount-hoc';

jest.mock('lodash.debounce', () => fn => fn);

describe('When I call the "withWindowSize" function', () => {
    let component;
    beforeEach(() => {
        window.innerWidth = 200;
        window.innerHeight = 100;
        ({ component } = mountHoc(withWindowSize()));
        component.prop('onResizeHandler')();
    });
    describe('the component', () =>
        void it('has the expected "windowSize" prop', () =>
            expect(component.prop('windowSize')).toEqual({ width: 200, height: 100 })));
});
