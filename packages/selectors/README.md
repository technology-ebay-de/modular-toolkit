# selectors

Utility functions to use selectors for decoupled React components with a global Redux state.

## Installation

    npm install --save @modular-toolkit/selectors

## API

### [createModularSelector](src/createModularSelector.js)

This is a drop in replacement for [reselect.createSelector](https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc) and is used
to create composed, cachable selectors.

This drop-in replacement is required, because the original function provided
by Reselect does not play nicely with the [registerSelectorsForUseWithGlobalState](src/registerSelectorsForUseWithGlobalState.js) module.

### [registerSelectorsForUseWithGlobalState](src/registerSelectorsForUseWithGlobalState.js)

This utility function allows you to register selectors that use the context of a self-contained module to
a global [Redux](https://redux.js.org) state.

For an example, take a look at this code from the [demo app](../demo-app):

    import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
    import * as hackerNewsSelectors from '@modular-toolkit/demo-module/selectors';

    export default () => registerSelectorsForUseWithGlobalState(
        'modules.hackerNews',
        hackerNewsSelectors
    );

* The first argument is a string that denotes the path to the module's state in the global state
* The second argument is an object containing the selectors

### [selectModular](src/selectModular.js)

A version of [redux-saga.select](https://github.com/redux-saga/redux-saga/tree/master/docs/api#selectselector-args),
allows you to use the global selector mechanism described above with Sagas.

## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## Code Ownership

This code was brought to you by **Team GT** of mobile.de's product and technology department.

* Jakob Gehring, product owner
* [Christoph Springer](https://github.corp.ebay.com/chrispringer), team lead
* [Patrick Hund](https://github.corp.ebay.com/pahund), software engineer (frontend)
* [Nina Maaß](https://github.corp.ebay.com/jmaass), software engineer (frontend)
* [Eike Schulte-Kersmecke](https://github.corp.ebay.com/eschultekersmeck), software engineer (backend)
* [Anja Kunkel](https://github.corp.ebay.com/ankunkel), software engineer (backend)
* [Mike Krüger](https://github.corp.ebay.com/mikkrueger), quality assurance engineer

### Contact the Team

* Slack: [#mob-team-gt](https://ebayclassifiedsgroup.slack.com/messages/mob-team-gt/)

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH
