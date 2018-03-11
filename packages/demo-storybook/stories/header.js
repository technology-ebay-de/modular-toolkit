import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Header } from '@modular-toolkit/demo-ui';

storiesOf('Header', module).add('inside a box', () => (
    <Box>
        <Header title="Lorem ipsum dolor sit amet" />
    </Box>
));
