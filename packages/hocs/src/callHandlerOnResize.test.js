import callHandlerOnResize from './callHandlerOnResize';
import mountHoc from '@mt-testutils/mount-hoc';

jest.mock('lodash.debounce', () => fn => fn);

const myResizeHandler = jest.fn();

const mockProps = {
    myResizeHandler
};

jest.mock('./connectSelectors');

describe('When I call the "callHandlerOnResize" function', () => {
    let component, unmount;
    beforeAll(() => {
        window.addEventListener = jest.fn();
        window.removeEventListener = jest.fn();
        window.innerWidth = 200;
        window.innerHeight = 100;
        ({ component, unmount } = mountHoc(callHandlerOnResize('myResizeHandler'), { props: mockProps }));
        component.prop('onResizeHandler')();
    });
    describe('the window', () =>
        void it('has a added the resize event listener', () =>
            expect(window.addEventListener).toBeCalledWith('resize', component.prop('onResizeHandler'))));
    describe('resize handler', () =>
        void it('is called', () =>
            expect(myResizeHandler).toBeCalledWith({
                width: 200,
                height: 100
            })));
    describe('and resize the window', () => {
        beforeAll(() => {
            myResizeHandler.mockClear();
            window.innerWidth = 600;
            window.innerHeight = 400;
            component.prop('onResizeHandler')();
        });
        describe('the component', () =>
            void it('updates the `containerWidth` state to match container width', () =>
                expect(myResizeHandler).toBeCalledWith({ width: 600, height: 400 })));
    });
    describe('and unmount the component', () => {
        beforeAll(() => {
            component.prop('onResizeHandler').cancel = jest.fn();
            unmount();
        });
        describe('the window', () =>
            void it('has a removed the resize event listener', () =>
                expect(window.removeEventListener).toBeCalledWith('resize', component.prop('onResizeHandler'))));
    });
});
