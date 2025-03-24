import { parentPort } from 'node:worker_threads'
import { isMainThread } from '../dist/node.index.js'

parentPort.postMessage(isMainThread)