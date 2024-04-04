const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "path": "/",
    "response": "You've hit the root path."
  })
})

app.get('/healthz', (req, res)) => {
    res.json({
        "status": "OK"
    })
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})