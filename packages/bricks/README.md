# bricks

Tools for connecting high-level Redux components (“Bricks”).

## Installation

    npm install --save @modular-toolkit/bricks

**Note:** by default, the npm package exposes ES5-compatible code (transpiled through Babel).

If you want to use the untranspiled code (highly recommended), us the _esnext_ version, which is
included in the same npm package ([more info here](http://2ality.com/2017/06/pkg-esnext.html)).

## API

### [BrickManager](src/BrickManager.js)

The Brick Manager allows you to “wire up” Bricks in your application by running each Brick's root saga with the
Redux Saga middleware, preparing each Brick's selectors to work with the global Redux state, and replacing the
current root Reducer with a new reducer that includes each Brick's reducer.

Here is an example taken from the [demo app](../demo-app) that shows how it is used:

_demo-app/src/configureStore.js_

```javascript
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createInitialState from './createInitialState';
import reducer from './reducer';
import hackerNews from '@modular-toolkit/demo-module';
import gists from '@modular-toolkit/other-demo-module';
import { BrickManager } from '@modular-toolkit/bricks/BrickManager';

const initialState = createInitialState();

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, initialState, sagaMiddleware);
    const brickManager = new BrickManager({ store, reducer, sagaMiddleware });
    brickManager.installBricks({
        'bricks.hackerNews': hackerNews,
        'bricks.gists': gists
    });
    return store;
};
```

### [combineReducers](src/combineReducers.js)

This function works exactly the same as [combineReducers](https://redux.js.org/api/combinereducers) from
Dan Abramov's Redux library, except that it does not issue a warning when an initial state is encountered that
contains keys for which there are no reducers defined.

Use this version of _combineReducers_ if you want to combine reducers in your main application, while providing
an initial state for Bricks that are added at a later point using the Brick Manager (e.g. when hydrating a server-side
rendered page).

Here is an example taken from the [demo app](../demo-app) that shows how it is used:

_demo-app/src/reducer.js_

```javascript
import { CHANGE_BACKGROUND_COLOR } from './actions';
import { combineReducers } from '@modular-toolkit/bricks';

export default combineReducers({
    page(state = {}, action = {}) {
        switch (action.type) {
            case CHANGE_BACKGROUND_COLOR:
                return {
                    ...state,
                    backgroundColor: action.backgroundColor
                };
            default:
                return state;
        }
    }
});
```

### [BrickProvider](src/BrickProvider.js)

This context provider wrapper allows you to pass a `BrickManager` instance to deep-nested components through
the [React context API](https://reactjs.org/docs/context.html), similar to the Provider of
[react-redux](https://redux.js.org/basics/usagewithreact#passing-the-store).

This example shows how to initialize Redux for your application, along with the `BrickProvider`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrickProvider } from '@modular-toolkit/bricks';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const reducer = state => state;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const { store, reducer, sagaMiddleware } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrickProvider store={store} reducer={reducer} sagaMiddleware={sagaMiddleware}>
            <h1>Hello world!</h1>
        </BrickProvider>
    </Provider>,
    document.getElementById('root')
);
```

[![Edit Bricks Demo II](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vj1ywp5lz5)

The `BrickProvider` accepts these props:

*   `store` (required) – The redux store
*   `sagaMiddleware` (required) – The [redux-saga](http://redux-saga.js.org) middleware
*   `reducer` (optional) – The application's root reducer

### [withBrick](src/withBrick.js)

This function allows you to create a higher-order container component that enhances other components, installing a
brick when the component is mounted. It works the same way as the
[connect](https://redux.js.org/basics/usagewithreact#implementing-container-components) from
[react-redux](https://redux.js.org/basics/usagewithreact#passing-the-store).

You must wrap your application with a [BrickProvider](#BrickProvider) for this to work.

Example:

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { withBrick } from '@modular-toolkit/bricks';
import hackerNews, { HackerNews } from '@modular-toolkit/demo-module';

function MyComponent() {
    return (
        <div>
            Check out the latest Hacker News:
            <HackerNews />
        </div>
    );
}

export const enhance = withBrick('bricks.hackerNews', hackerNews);

export default enhance(MyComponent);
```

[![Edit Bricks Demo II](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vj1ywp5lz5?module=%2Fsrc%2Fpages%2Fhacker-news%2Fcomponents%2FHackerNewsPageContainer.js)

The `withBrick` function accepts two arguments:

*   `storePath` (required, string) – The path to the part of the global Redux state that the Brick is working with; path
    segments are separated by dots; example: `bricks.hackerNews`
*   `module` (required, object) – The brick module that contains store, reducer and saga of the brick; this is usually
    the default export of a brick package

### [withBricks](src/withBricks.js)

This function allows you to create a higher-order container component that enhances other components, installing
multiple bricks when the component is mounted. It works the same way as the
[connect](https://redux.js.org/basics/usagewithreact#implementing-container-components) from
[react-redux](https://redux.js.org/basics/usagewithreact#passing-the-store).

You must wrap your application with a [BrickProvider](#BrickProvider) for this to work.

This is basically the same as [withBrick](#withBrick), except that you can install multiple bricks instead
of just one by providing an object where the keys are store paths and the values are brick modules.

Example:

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { withBricks } from '@modular-toolkit/bricks';
import hackerNews, { HackerNews } from '@modular-toolkit/demo-module';
import gists, { Gists } from '@modular-toolkit/other-demo-module';

function MyComponent() {
    return (
        <div>
            Check out the latest Hacker News:
            <HackerNews />
            …and the latest Gists:
            <Gists />
        </div>
    );
}

export const enhance = withBricks({
    'bricks.hackerNews': hackerNews,
    'bricks.gists': gists
});

export default enhance(MyComponent);
```

The `withBricks` function accepts one argument:

*   `bricks` (required, object) – an object where the keys are store paths and the values are brick modules

## Experimental API

React version 16.7.0-alpha.0 introduces a revolutionary new feature called
[Hooks](https://reactjs.org/docs/hooks-intro.html), which makes integrating bricks in your application much easier.

Note that the following functions only work with the React alpha version noted above. They are not recommended
for production use _yet_ – proceed at your own risk.

### [useBrick](src/useBrick.js)

This Hook function allows you to install a brick from within a function React component.

You must wrap your application with a [BrickProvider](#BrickProvider) for this to work.

This is a Hook version of [withBrick](#withBrick).

Example:

```javascript
import React from 'react';
import hackerNews, { HackerNews } from '@modular-toolkit/demo-module';
import { useBrick } from '@modular-toolkit/bricks';

export default () => {
    useBrick('bricks.hackerNews', hackerNews);
    return (
        <div>
            Check out the latest Hacker News:
            <HackerNews />
        </div>
    );
};
```

[![Edit Bricks Demo IV](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/9y6w47q10o?module=%2Fsrc%2Fpages%2Fhacker-news%2Fcomponents%2FHackerNewsPage.js)

As you can see in the example, you do not need to use an enhancer to create a higher-order component. All you need is
call the `useBrick` hook and the Hacker News brick is installed in your application's Redux setup and ready to use.

The `useBrick` function accepts two arguments:

*   `storePath` (required, string) – The path to the part of the global Redux state that the Brick is working with; path
    segments are separated by dots; example: `bricks.hackerNews`
*   `module` (required, object) – The brick module that contains store, reducer and saga of the brick; this is usually
    the default export of a brick package

### [useBricks](src/useBricks.js)

This Hook function allows you to install a brick from within a function React component.

You must wrap your application with a [BrickProvider](#BrickProvider) for this to work.

This is a Hook version of [withBricks](#withBricks).

Example:

```javascript
import React from 'react';
import hackerNews, { HackerNews } from '@modular-toolkit/demo-module';
import gists, { Gists } from '@modular-toolkit/other-demo-module';
import { useBricks } from '@modular-toolkit/bricks';

export default () => {
    useBricks({
        'bricks.hackerNews': hackerNews,
        'bricks.gists': gists,
    });
    return (
        <div>
            Check out the latest Hacker News:
            <HackerNews />
            …and the latest Gists:
            <Gists />
        </div>
    );
};
```

The `useBricks` function accepts one argument:

*   `bricks` (required, object) – an object where the keys are store paths and the values are brick modules

## Troubleshooting

### Console Warning: “Unexpected key XXX found in previous state received by the reducer”

If you get this warning in your browser console, you're using _combineReducers_ from the Redux library.
Use _combineReducers_ from _modular-tookkit_ instead ([see above](#combinereducers)).

## Change Log

*   See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

*   See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## Acknowledgements

*   Includes code taken from [Redux](https://redux.js.org) (_combineReducers_)<br>
    [MIT licensed](https://github.com/reduxjs/redux/blob/master/LICENSE.md)<br>
    Copyright © 2015–present Dan Abramov
*   The _BrickManager_ module is inspired by [Reedux](https://github.com/Silviu-Marian/reedux)<br>
    [MIT licensed](https://github.com/Silviu-Marian/reedux/blob/master/LICENSE)<br>
    Copyright © 2017 Silviu Marian

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH
