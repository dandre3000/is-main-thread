import { isMainThread } from '../dist/web.index.js'

export const runTests = (test, expect) => {
    test('isMainThread', async () => {
        expect(isMainThread).toEqual(true)

        const worker = new Worker(new URL('./web.worker.js', import.meta.url), { type: 'module' })

        let resolve
        const promise = new Promise(_resolve => resolve = _resolve)

        worker.addEventListener('message', ({ data }) => {
            expect(data).toEqual(false)
            resolve(data)
        }, { once: true })

        await promise
    })
}