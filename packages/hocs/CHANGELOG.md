# Changelog

## 3.1.0 / 24 Sep 2018

* `onLocationChanged` now uses `componentDidUpdate` instead of `componentWillReceiveProps` to ensure compatibility with 
  future React versions
* `onLocationChanged` now accepts an optional boolean flag as second parameter; defaults is `false`, if set to `true``
  the callback is invoded on initial rendering of the component in addition to when the location changes
* Dependency update to fix security issues

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

