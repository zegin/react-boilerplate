import compression from 'compression'
import path from 'path'
import webpack from 'webpack'
import express from 'express'
import bodyParser from 'body-parser'
import configDev from '../../build/webpack.dev.babel'

const isProd = process.env.NODE_ENV === 'production'

const app = express()
const compiler = webpack(configDev)

/* eslint-disable */

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (!isProd) {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: configDev.output.publicPath,
    }),
  )

  app.use(require('webpack-hot-middleware')(compiler))

  app.use('/api', (req, res, next) => {
    const { password } = req.body
    console.log(password)
    if(password == '12345'){
      next()
    } else {
      res.status(403).send()
    }
  })

  app.post('/api/test', (req, res) => {
    setTimeout(() => res.send('After 1second'), 1000)
  })

  app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  app.use(compression())

  app.use(
    express.static('dist/public', {
      setHeaders(res, resPath) {
        // do not set Cache-Control for index page
        const isIndexFile = resPath.endsWith('/index.html')
        if (!isIndexFile) {
          res.setHeader('Cache-Control', '86400')
        }
      },
    }),
  )
}

app.listen(3000, err => {
  if (err) {
    console.error(err)
    return
  }

  console.log('Listening at http://localhost:3000/')
})
