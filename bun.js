/** Is true if this code is not running inside of a Worker thread. */
export const isMainThread = !!Bun?.isMainThread