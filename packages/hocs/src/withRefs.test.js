import mountHoc from '@mt-testutils/mount-hoc';
import withRefs from './withRefs';

jest.mock('./connectSelectors');

describe('When I enhance a component with the "withRefs" enhancer', () => {
    let component;
    beforeAll(() => {
        ({ component } = mountHoc(withRefs()));
    });
    describe('the added "refs" property', () => void it('is empty', () => expect(component.prop('refs')).toEqual({})));
    describe('call the "setRef" method', () => {
        beforeAll(() => component.prop('setRef')('testRef')('testElement'));
        describe('the "refs" property', () =>
            void it('has the expected element', () =>
                expect(component.prop('refs')).toEqual({ testRef: 'testElement' })));
    });
});
