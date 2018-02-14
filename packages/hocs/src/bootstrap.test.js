import bootstrap from './bootstrap';
import { spy } from 'sinon';

const mockLifecycle = spy();

jest.mock('recompose', () => ({
    lifecycle: (...args) => mockLifecycle(...args)
}));

describe('When I call the bootstrap function with some callback function', () => {
    beforeEach(() => bootstrap(() => {}));
    describe('the lifecycle method of recompose', () => {
        it('is called', () => void mockLifecycle.should.have.been.called);
    });
});
