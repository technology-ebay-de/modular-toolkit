# Changelog

## 1.2.0 / 28 Dec 2018

* Enhancement #10 – allow passing initial state when installing bricks
* Bug fix: in some cases, the Brick Manager was instantiated by the Brick Provider multiple times, this was fixed

## 1.1.3 / 26 Dec 2018

* Bug fix issue #8 – updated during render warning and infinite update loops
* Refactoring of `BrickManager`
* Added `sideEffects: false` configuration to [package.json](package.json) to allow efficient tree shaking with
  webpack (see [webpack documentation](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free))

## 1.1.2 / 14 Nov 2018

* Bug fix – in some setups, the browser console showed error about a component changing state during render when 
  changing routes with React Router. This was caused by the `withBricks` or `withBrick` HoC installing the same
  bricks multiple times. This was fixed.
* Fixed vulnerability from `merge` module found by npm audit
* Bugfix in utility function – `getValueByDottedPath` returned parent element if queried for non-existing child 
  (now correctly returns null)

## 1.1.0 / 1 Nov 2018

* Peer dependency of React at least version 16.3.0 required
* Added [BrickProvider](src/BrickProvider.js) that allows to a a Brick Manager instance to nested components
* Added [withBrick](src/withBrick.js) and [withBricks](src/withBricks.js) functions that create higher-order
  components (HoCs) that can add one or more bricks to the parent application's Redux setup through the
  Brick Manager provided by a `BrickProvider`
* Added [useBrick](src/useBrick.js) and [useBricks](src/useBricks.js) React hook function that allow to add one
  or more bricks to the parent application's Redux setup through the Brick Manager provided by a `BrickProvider`
  (**Experimental!** – required React version 16.7.0-alpha.0, not recommended for production use)

## 1.0.2 / 31 Oct 2018

Reduced CommonJS bundle size, _redux-saga_ had been accidentally included in the bundle

## 1.0.0 / 23 Oct 2018

* Initial release 

