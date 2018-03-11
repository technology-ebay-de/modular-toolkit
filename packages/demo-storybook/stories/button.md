The `Button` component creates a button. Who would have tought that.

## Installation

The component is part of the `demo-ui` package of [modular-toolkit](https://github.com/technology-ebay-de/modular-toolkit).
You can install it using npm:

    npm install --save @modular-toolkit/demo-ui
    
## Usage

Use it like this:

    import { Button } from '@modular-toolkit/demo-ui';
    
    function MyComponent() {
        return (
            <Button handleClick={action('clicked')} label="Hello Button" />
        );
   }
    
## Props

| Name | Type | Description |
| --- | --- | --- |
| label | String | The button's label |
| handleClick | Function | Function that is called when user clicks on the button |
