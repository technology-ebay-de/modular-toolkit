import './main.css';
import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/box');
    require('../stories/button');
    require('../stories/header');
    require('../stories/list');
}

configure(loadStories, module);
