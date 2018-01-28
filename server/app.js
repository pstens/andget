import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const messages = []
app.use(bodyParser.json())

app.get(['/random', '/r'], function (req, res) {
  const item = messages[Math.floor((Math.random() * messages.length))]
  res.status(200).send(item)
})

app.post('/random', function (req, res) {
  const message = req.body.message
  messages.push(message)
  console.info(`Post-Request from ${req.ip} with body: ${message}`)
  res.sendStatus(201)
})

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
