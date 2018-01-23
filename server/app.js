import express from 'express'

const app = express()

app.get(['/random', '/r'], function (req, res) {
  const random = Math.random() * 100
  console.log(`Request from ${req.ip} generated: ${random}`)
  console.log(req.hostname)
  console.log(req.get('user-agent'))
  res.status(200).send(`${random}`)
})

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
