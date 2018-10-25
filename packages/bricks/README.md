# bricks

Tools for connecting high-level Redux components (“Bricks”).

## Installation

    npm install --save @modular-toolkit/bricks

**Note:** by default, the npm package exposes ES5-compatible code (transpiled through Babel).

If you want to use the untranspiled code (highly recommended), us the *esnext* version, which is
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

Use this version of *combineReducers* if you want to combine reducers in your main application, while providing
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

## Troubleshooting

### Console Warning: “Unexpected key XXX found in previous state received by the reducer”

If you get this warning in your browser console, you're using *combineReducers* from the Redux library.
Use *combineReducers* from *modular-tookkit* instead ([see above](#combinereducers)).

## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## Acknowledgements

* Includes code taken from [Redux](https://redux.js.org) (*combineReducers*)<br>
  [MIT licensed](https://github.com/reduxjs/redux/blob/master/LICENSE.md)<br>
  Copyright © 2015–present Dan Abramov
* The *BrickManager* module is inspired by [Reedux](https://github.com/Silviu-Marian/reedux)<br>
  [MIT licensed](https://github.com/Silviu-Marian/reedux/blob/master/LICENSE)<br>
  Copyright © 2017 Silviu Marian

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH
