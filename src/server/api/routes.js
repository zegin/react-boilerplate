import express from 'express'

const router = express.Router()

router.use('/', (req, res, next) => {
  const { password } = req.body
  if (password === '12345') {
    next()
  } else {
    res.status(403).send()
  }
})

router.post('/test', (req, res) => {
  setTimeout(() => res.send('Api response after 1 second'), 1000)
})

module.exports = router
