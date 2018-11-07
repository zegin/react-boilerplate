import WebServer from './web.server'

/* eslint-disable no-console */

describe('Started', () => {
  let webServer = null
  beforeAll(() => {
    webServer = new WebServer()
  })
  test('should start and trigger a callback', async () => {
    const promise = webServer.start()
    await expect(promise).resolves.toBeUndefined()
  })
  test('should stop and trigger a callback', async () => {
    const promise = webServer.stop()
    await expect(promise).resolves.toBeUndefined()
  })
})

/* eslint-enable no-console */
