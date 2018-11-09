import express from 'express'
import bodyParser from 'body-parser'

const api = require('./api/routes')

const app = express()

/* eslint-disable */

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', api)

module.exports = app.listen(3000, err => {
  if (err) {
    console.error(err)
    return
  }
})
