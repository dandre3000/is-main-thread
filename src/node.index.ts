import { isMainThread } from "node:worker_threads";

/** Is true if this code is not running inside of a Worker thread. */
export { isMainThread }