# is-main-thread
Check if javascript code is running in the main thread or in a worker thread. This module is compatible with web browsers, bun, deno and node.js.
# Usage
```js
import { isMainThread } from '@dandre3000/is-main-thread'

if (isMainThread) {
  // main thread
} else {
  // worker thread
}
```
