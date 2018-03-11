The `Box` component is the basic wrapper for all boxes we display on our pages.

## Installation

The component is part of the `demo-ui` package of [modular-toolkit](https://github.com/technology-ebay-de/modular-toolkit).
You can install it using npm:

    npm install --save @modular-toolkit/demo-ui
    
## Usage

Use it like this:

    import { Box } from '@modular-toolkit/demo-ui';
    
    function MyComponent() {
        return (
            <Box>
                <h1 style={{ margin: 'auto' }}>Hello!</h1>
            </Box>
        );
    }
    
Note that the `Box` component by itself does not have any padding. We are centering the headline in the
example just “for show”, so it doesn't look crappy.
