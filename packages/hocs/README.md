# hocs

React higher order components to make working with [Redux](https://redux.js.org/) and 
[Recompose](https://github.com/acdlite/recompose) easier.

## Installation

    npm install --save @modular-toolkit/hocs

## API

### [bootstrap](src/bootstrap.js)

[Recompose](https://github.com/acdlite/recompose) helper function for dispatching actions on `componentWillMount`.
Just reduces some boilerplate:

    lifecycle({
        componentWillMount({ foo }) {
            someActionDispatcher(foo);
        }
    })

…can now be written as:

    import { bootstrap } from '@modular-toolkit/hocs';
    bootstrap({ foo } => someActionDispatcher(foo));

### [callHandlerOnResize](src/callHandlerOnResize.js)


[Recompose](https://github.com/acdlite/recompose) helper that allows to subscribe to window resize events.

Example:

    import { callHandlerOnResize } from '@modular-toolkit/hocs';
    withHandlers({
        doSomething: () => () => console.log('window was resized');
    }),
    callHandlerOnResize('doSomething');

Accepts a debounce option, that will debounce the call of the handler.

### [connectSelectors](src/connectSelectors.js)

Helper function for connecting selectors to props using `makeWorkWithGlobalState`
from [@modular-toolkit/selectors](../selectors/README.md).

Just reduces some boilerplate:

    connect(state => {
       foo: getFoo(state),
       bar: getBar(state)
    });

can now be written as:

    import { connectSelectors } from '@modular-toolkit/hocs';
    connectSelectors({
        foo: getFoo,
        bar: getBar
    });

It also works with nested states props:

    import { connectSelectors } from '@modular-toolkit/hocs';
    connectSelectors({
        car: {
            color: getCarColor,
            ownerName: getUserName
        }
    })

This will create a prop `car` with the properties `color` and `ownerName`.

### [omitProps](src/omitProps.js)

[Recompose](https://github.com/acdlite/recompose) enhancer that removes props.
This helps minimizing property pollution.

Example:

    import { omitProps } from '@modular-toolkit/hocs';
    omitProps(['thisPropWillNotExistAnymore']);

### [onLocationChanged](src/onLocationChanged.js)


[Recompose](https://github.com/acdlite/recompose) helper function that calls a callback whenever the location pathname or location search changes.

    import { onLocationChanged } from '@modular-toolkit/hocs';
    onLocationChanged(props => console.log('Location has changed :)'))

### [provideContext](src/provideContext.js)

Recompose helper that works similar to `withContext`, except that it also provides a
`subscribe` method that child components can use to get notified about context changes.

Best used in conjunction with `subscribeToContext`.

Example:

    import { compose, withProps } from 'recompose';
    import { provideContext, subscribeToContext } from '@modular-toolkit/hocs';
    
    const ThemeProvider = compose(
       provideContext('theme', {
           backgroundColor: PropTypes.string,
           textColor: PropTypes.string
       }, props => {
           if (props.desiredColors === 'green') {
               return {
                   backgroundColor: 'lightGreen',
                   textColor: 'darkGreen'
               }
           } else {
               return {
                   backgroundColor: 'white',
                   textColor: 'black'
               }
           }
       })
    )(/* … */);

    const ThemeableInput = compose(
        subscribeToContext('theme', {
            backgroundColor: PropTypes.string,
            textColor: PropsTypes.string
        }),
        withProps(({ backgroundColor, textColor}) => {
            console.log('Those color props are from ThemeProvider:', backgroundColor, textColor);
        })
    )(/* … */);

### [subscribeToContext](src/subscribeToContext.js)

Used in conjunction with `subscribeToContext`, see code example above.

### [withRefs](src/withRefs.js)

[Recompose](https://github.com/acdlite/recompose) helper function for allowing children to pass element refs to a higher
order component (HOC).

Simply include `withRefs()` in the `compose` call of the HOC.

    import { compose } from 'recompose';
    import { withRefs } from '@modular-toolkit/hocs';
    
    const Hoc = compose(
        withRefs(),
        /* … */
    )(/* … */);

This will add the `setRef` property to the child.

If the child calls the function like this:

    <img ref={setRef('myImage')} />

…then the HOC can access the element via `refs.myImage`;

### [withUpdatableState](src/withUpdatableState.js)

Recompose Helper function that behaves exactly like `withState`, except that it also
provides a state patching function.

Example:

    import { withState } from '@modular-toolkit/hocs';
    import { withProps } from 'recompose';
    
    withState('car', 'setCar', 'updateCar', () => ({
        color: 'red',
        maxSpeed: 240,
    }));
    
    withProps(({ car, setCar, updateCar }) => {
        updateCar({ color: 'blue' });

        // the above is the same as
        setCar({
           ...car,
           color: 'blue'
        });
    });

The nice thing is, that you don't need the state and the `setState` function in order
to modify the state. Just using the `updateState` function is enough.

### [withWindowSize](src/withWindowSize.js)

[Recompose](https://github.com/acdlite/recompose) helper that adds the the window size to props.
This is handy, because it triggers a `componentWillReceiveProps` whenever the window resizes.

Example:

    import { compose } from 'recompose';
    import { withWindowSize } from '@modular-toolkit/hocs';
    
    const Hoc = compose(
        withWindowSize(),
        withProps(({ windowSize }) => console.log('the window is that wide:', windowSize.width)
    );

## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH
