import mountHoc from '@mt-testutils/mount-hoc';
import withUpdatableState from './withUpdatableState.js';

describe('When I enhance a component with the "withUpdatableState" enhancer', () => {
    let component, update;
    beforeAll(() => {
        ({ component, update } = mountHoc(
            withUpdatableState('foo', 'setFoo', 'updateFoo', { prop1: 'value1', prop2: 'value2' })
        ));
    });
    describe('the added state', () =>
        it('has the default value', () => expect(component.prop('foo')).toEqual({ prop1: 'value1', prop2: 'value2' })));
    describe('and set the state using the setter method', () => {
        beforeAll(() => {
            component.prop('setFoo')({ prop3: 'value3' });
            component = update();
        });
        describe('the state', () =>
            it('gets replaced', () => expect(component.prop('foo')).toEqual({ prop3: 'value3' })));
    });
    describe('and update the state using the updater method', () => {
        beforeAll(() => {
            component.prop('updateFoo')({ prop4: 'value4' });
            component = update();
        });
        describe('the state', () =>
            it('gets replaced', () => expect(component.prop('foo')).toEqual({ prop3: 'value3', prop4: 'value4' })));
    });
});
