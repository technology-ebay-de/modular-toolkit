import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '@modular-toolkit/demo-ui';
import { withNotes } from '@storybook/addon-notes';
import notes from './box.md';
import { removeLineBreaks } from './utils';

storiesOf('Box', module).add(
    'default',
    withNotes(removeLineBreaks(notes))(() => (
        <Box>
            <h1 style={{ margin: 'auto' }}>Hello!</h1>
        </Box>
    ))
);
