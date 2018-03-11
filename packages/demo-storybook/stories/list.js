import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Header, Footer, List, ListItem } from '@modular-toolkit/demo-ui';
import { withNotes } from '@storybook/addon-notes';
import { removeLineBreaks } from './utils';
import notes from './list.md';

storiesOf('List', module).add(
    'combined with a box, header and footer',
    withNotes(removeLineBreaks(notes))(() => (
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
    ))
);
