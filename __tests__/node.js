import { test } from 'node:test'
import { expect } from 'expect'
import { Worker } from 'node:worker_threads'
import { isMainThread } from '../dist/node.index.js'

test('isMainThread', async () => {
    expect(isMainThread).toEqual(true)

    const worker = new Worker(new URL('./node.worker.js', import.meta.url))

    let resolve
    const promise = new Promise(_resolve => resolve = _resolve)

    worker.once('message', data => {
        expect(data).toEqual(false)
        resolve(data)
    })

    await promise
})