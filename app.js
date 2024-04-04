const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

// Initialise morgan's middleware
app.use(morgan("tiny"))

// Root path handler
app.get('/', (req, res) => {
  res.json({
    "path": "/",
    "response": "You've hit the root path."
  })
})

// Healthcheck handler
app.get('/healthz', (req, res) => {
    res.json({
        "status": "OK"
    })
})

// Boot up Express
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})