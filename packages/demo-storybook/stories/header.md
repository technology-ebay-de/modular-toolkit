The `Header` component is used for adding headers to boxes.

## Installation

The component is part of the `demo-ui` package of [modular-toolkit](https://github.com/technology-ebay-de/modular-toolkit).
You can install it using npm:

    npm install --save @modular-toolkit/demo-ui
    
## Usage

Use it like this:

    import { Box, Header } from '@modular-toolkit/demo-ui';
    
    function MyComponent() {
        return (
            <Box><Header title="Lorem ipsum dolor sit amet" /></Box>
        );
   }
    
## Props

| Name | Type | Description |
| --- | --- | --- |
| title | String | The title to be added to the header |
