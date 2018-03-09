# Contributing

**Pull requests are always welcome!**

Here are a few guidelines that will help you along the way…

## Running Tests

You can execute the [Jest](https://facebook.github.io/jest/) test suite with this command:

    npm test

If you want to run a specific test, add the name of the test (or part of it), like so:

    npm test -- connectSelectors

Basically, use the command like you would use the `jest` command, while all
[command line options](https://facebook.github.io/jest/docs/en/cli.html) come after the two dashes.

### Examples

Run tests in watch mode:

    npm test -- --watch

Update snapshots:

    npm test -- --updateSnapshot

…or simply…

    npm test -- -u
