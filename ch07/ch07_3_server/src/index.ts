import {createServer} from 'http'
import express from 'express'

const hostname = 'localhost',
  port = 4000

// prettier-ignore
const app = express()
  .get('/', (req, res) => {
    res.json({ message: 'Hello express World!' })
  })

createServer(app).listen(port, () => console.log(`connect http://${hostname}:${port}`))
