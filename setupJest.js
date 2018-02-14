const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const chaiEnzyme = require('chai-enzyme');
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const chaiString = require('chai-string');

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());
chai.use(chaiString);

configure({ adapter: new Adapter() });

// Make sure chai and jasmine ".not" play nice together
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get;
Object.defineProperty(chai.Assertion.prototype, 'not', {
    get() {
        Object.assign(this, this.assignedNot);
        return originalNot.apply(this);
    },
    set(newNot) {
        this.assignedNot = newNot;
        return newNot;
    }
});

// Combine both jest and chai matchers on expect
const jestExpect = global.expect;

global.expect = actual => {
    const originalMatchers = jestExpect(actual);
    const chaiMatchers = chai.expect(actual);
    return Object.assign(chaiMatchers, originalMatchers);
};

// re-add jests expect.anything
if (jestExpect) {
    global.expect.anything = jestExpect.anything;
}
