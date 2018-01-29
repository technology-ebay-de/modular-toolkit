import React from 'react';
import ReactDOM from 'react-dom';
import hello from '@react-modular-toolkit/demo-module';

const title = 'React Modular Toolkit Demo – Home';

hello();

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

