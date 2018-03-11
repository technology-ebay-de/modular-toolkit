import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@modular-toolkit/demo-ui';
import { withNotes } from '@storybook/addon-notes';
import { removeLineBreaks } from './utils';
import notes from './button.md';

storiesOf('Button', module).add(
    'default',
    withNotes(removeLineBreaks(notes))(() => <Button handleClick={action('clicked')} label="Hello Button" />)
);
