import { expect } from 'jsr:@std/expect'
import { runTests } from './web.test.js'

runTests(Deno.test, expect)