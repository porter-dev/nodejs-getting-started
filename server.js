import { app } from './app.js'

const port = Number(process.env.PORT) || 3000
const host = '0.0.0.0'

const server = app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`)
})

process.on('SIGTERM', () => server.close())
