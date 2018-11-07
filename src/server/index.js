import WebServer from './web.server'

const webServer = new WebServer()

/* eslint-disable no-console */

webServer
  .start()
  .then(() => {
    console.log('Web server started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  })

/* eslint-enable no-console */
