# Contributing

You're so awesome and want to add a new modular toolkit package, or need make some changes on a current one.

Here are a few guidelines that will help you along the way…

## Getting started

1. Clone the repro to your local machine `git clone git@github.corp.ebay.com:MT/modular-toolkit.git`
2. Create a **new branch** `git checkout -b my-topic-branch`. If you have a Jira-ticket (You should! Sox compliance!),
   please add this ticket number as prefix
3. Make changes, test, commit, push and…
4. …make a pull request

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

## Testing Your New Version Before Creating a Pull Request

To test your changes, you can publish a beta version:

* Commit and push your changes to your branch on the eBay Enterprise GitHub
* Decide what kind of release your change will be: patch, minor or major:
    * _patch_ – small, backwards compatible contribution, typically a bugfix
    * _minor_ – new feature, backwards compatible
    * _major_ – breaking changes
    
* According to your choice, run one of these commands:


    npm run publish-beta-patch
    npm run publish-beta-minor
    npm run publish-beta-major

This will publish new beta versions of the npm packages you have changed for your release to our internal npm
registry with corresponding version numbers, example:

* Package `@modular-toolkit/selectors` had version number **1.0.0** previously
* You run `npm run publish-beta-major`
* Package `@modular-toolkit/selectors` now has version number **2.0.0-beta.0**

You can now add the beta version as a dependency to your project with this command:

    npm install --save @modular-toolkit/selectors@beta

(or _hocs_, etc., whichever is applicable)

### Updating Your Beta Version

If you want to publish a new version of your beta release, use this command:

    npm run publish-beta

For the example above, this will publish a new package with version **2.0.0-beta.1**.

**Note:** To finalize your beta version and make a proper version without the “beta” suffix, see below.

## Publishing New Packages

Pull request accepted and merged? All ready to go? Great!

* Make sure you local copy is clean, i.e. it is up-to-date with the version on GitHub
* Make sure the tests don't fail (`npm test`)

You can publish new versions of the packages with this command:

    npm run publish

### Finalizing Beta Versions

There's one caveat to publishing – if you had previously tested your packages with a beta version, as is recommended (see above),
you probably dont' want your 2.0.0-beta.1 version to become 3.0.0, or 2.1.0, or 2.0.1, right? 2.0.0 is what you want.

So you basically want to republish your beta version as final version, with the same version number, minus the “beta” suffix.

You have to do a bit of trickery to get [Lerna](https://lernajs.io) to do this. You have to use the
[--forcePublish](https://github.com/lerna/lerna#--force-publish-packages) command line flag to release the same code 
with a different version.

So if, for example, you've been working on a new version of the package `mock-store` and have previously published
version **2.0.0-beta.1** and now want to publish the final version **2.0.0**, the corresponding command would be:

    npm run publish -- --force-publish=@modular-toolkit/selectors
    
You can also use an asterisk to publish new versions of all packages, but be warned, this only makes sense if you
have actually changed them all:

    npm run publish -- --force-publish=*
    
To finalize multiple, but not all packages, specify them separated by commas:

    npm run publish -- --force-publish=@modular-toolkit/selectors,@modular-toolkit/hocs

