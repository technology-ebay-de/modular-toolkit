The `List` and `ListItem` components are used for scrollable lists of arbitrary content.

## Installation

The component is part of the `demo-ui` package of [modular-toolkit](https://github.com/technology-ebay-de/modular-toolkit).
You can install it using npm:

    npm install --save @modular-toolkit/demo-ui
    
## Usage

Use it like this:

    import { Box, Header, Footer, List, ListItem } from '@modular-toolkit/demo-ui';
    
    function MyComponent() {
        return (
            <Box>
                <Header />
                <List>
                    <ListItem>consetetur</ListItem>
                    <ListItem>sadipscing</ListItem>
                    <ListItem>elitr</ListItem>
                    <ListItem>gubergren</ListItem>
                    <ListItem>dolore</ListItem>
                    <ListItem>takimata</ListItem>
                    <ListItem>consetetur</ListItem>
                    <ListItem>sadipscing</ListItem>
                    <ListItem>elitr</ListItem>
                    <ListItem>gubergren</ListItem>
                    <ListItem>dolore</ListItem>
                    <ListItem>takimata</ListItem>
                    <ListItem>consetetur</ListItem>
                    <ListItem>sadipscing</ListItem>
                    <ListItem>elitr</ListItem>
                    <ListItem>gubergren</ListItem>
                    <ListItem>dolore</ListItem>
                    <ListItem>takimata</ListItem>
                </List>
                <Footer />
            </Box>
        );
   }
    

