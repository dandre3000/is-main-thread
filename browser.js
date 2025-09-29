/** True if the current global scope is the main thread or false otherwise. */
export const isMainThread = typeof WorkerGlobalScope !== 'function' || !(self instanceof WorkerGlobalScope)