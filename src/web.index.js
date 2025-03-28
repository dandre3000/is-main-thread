/** Is true if this code is not running inside of a Worker thread. */
export const isMainThread = typeof Bun === 'object' && typeof Bun.isMainThread === 'boolean' ? Bun.isMainThread :
    (typeof globalThis.DedicatedWorkerGlobalScope === 'function' && globalThis instanceof globalThis.DedicatedWorkerGlobalScope) === false