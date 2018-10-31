# Changelog

## 4.0.2 / 31 Oct 2018

Reduced CommonJS bundle size, _redux-saga_ had been accidentally included in the bundle

## 4.0.0 / 17 Oct 2018

**Breaking**

* `bootstrap` now uses the `componentDidMount` lifecycle phase to execute the callback function. Previously,
it used `componentWillMount`, which is deprecated and will be removed in React version 17.

**Other**

* Removed Sinon and Chai from unit tests

## 3.1.0 / 24 Sep 2018

* `onLocationChanged` now uses `componentDidUpdate` instead of `componentWillReceiveProps` to ensure compatibility with 
  future React versions
* `onLocationChanged` now accepts an optional boolean flag as second parameter; defaults is `false`, if set to `true``
  the callback is invoded on initial rendering of the component in addition to when the location changes
* Dependency update to fix some security issues

## 3.0.0 / 5 Apr 2018

* Drop `omitProps`. See `@hocs/omit-props` and such if you still need it.

## 2.1.0 / 19 Mar 2018

* Maintenance release

## 2.0.0 / 14 Mar 2018

* JS code now ES5 compatible (transpiled through Babel)
* If you want to use the untranspiled code (highly recommended), us the *esnext* version, which is
  included in the same npm package ([more info here](http://2ality.com/2017/06/pkg-esnext.html))

## 1.0.0 / 9 Mar 2018

* Initial release 

