# Changelog

## 5.0.0 / 16 Oct 2018

**Breaking:**

Removed `createInitialState` function. If you want to have the Hacker News box pre-filled with some
top stories, simply put a topStories property somewhere in your global Redux state and make sure
the path you specify when connecting the selectors points to the parent node of that property.

## 4.0.2 / 14 Oct 2018

**Breaking:**

Modules are imported differently:

```javascript
import { selectors } from '@modular-toolkit/demo-module';
import { reducer } from '@modular-toolkit/demo-module';
import { saga } from '@modular-toolkit/demo-module';
import { createInitialState } from '@modular-toolkit/demo-module';
import { loadTopStoriesAction } from '@modular-toolkit/actions';
```

`createInitialState` now receives an Object with a property `topStories`
instead of receiving the `topStories` directly.


## 3.1.0 / 24 Sep 2018

*   Dependency update to fix some security issues

## 2.0.0 / 14 Mar 2018

*   New version based on the code examples shown at the 48th eBay Tech Talk in Berlin

## 1.0.0 / 9 Mar 2018

*   Initial release
