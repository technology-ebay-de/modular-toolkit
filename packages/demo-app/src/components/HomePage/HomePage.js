import React, { Fragment } from 'react';
import { PageHeader } from '../';
import { HackerNews } from '@modular-toolkit/demo-module';
import { Gists } from '@modular-toolkit/other-demo-module';
export default () => (
    <Fragment>
        <PageHeader />
        <HackerNews />
        <Gists />
    </Fragment>
);
