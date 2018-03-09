# demo-ui

This demo package contains presenational components for the user interface of the Modular Toolkit demo.

## Installation

    npm install --save @modular-toolkit/demo-ui

## Usage

The package contains various React components which you can use like this:

    import React from 'react';
    import {
        Header,
        Footer,
        Button,
        List,
        ListItem,
        Box,
        Spinner
    } from '@modular-toolkit/ui';
    
    function MyComponent({ data, load }) {
        if (!data) {
          return (
            <Box>
              <Spinner />
            </Box>
          );
        }
        return (
          <Box>
            <Header title="My List of Links" />
            <List>
              {data.map(({ title, url }, index) => (
                <ListItem key={`item${index}`}>
                  <a target="blank" href={url}>
                    {title}
                  </a>
                </ListItem>
              ))}
            </List>
            <Footer>
              <Button handleClick={load} label="Update" />
            </Footer>
          </Box>
        );
    }

## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH
