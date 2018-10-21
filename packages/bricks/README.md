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
import { applyMiddleware, createStore, compose } from 'redux';
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

## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH
