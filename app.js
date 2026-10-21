import express from 'express'
import morgan from 'morgan'

export const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Porter' })
})

app.get('/healthz', (req, res) => {
  res.json({ status: 'ok' })
})
