import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { app } from '../app.js'

let server
let baseUrl

before(async () => {
  server = app.listen(0)
  await new Promise((resolve) => server.once('listening', resolve))
  baseUrl = `http://127.0.0.1:${server.address().port}`
})

after(() => server.close())

test('GET /healthz returns ok', async () => {
  const res = await fetch(`${baseUrl}/healthz`)
  assert.equal(res.status, 200)
  assert.deepEqual(await res.json(), { status: 'ok' })
})

test('GET / returns a greeting', async () => {
  const res = await fetch(`${baseUrl}/`)
  assert.equal(res.status, 200)
  assert.deepEqual(await res.json(), { message: 'Hello from Express on Porter' })
})
