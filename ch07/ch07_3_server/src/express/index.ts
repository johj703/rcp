import express from 'express'
import {appendFile} from 'fs'

export const createExpressApp = (...args: any[]) => {
  const app = express()
  app
    .use((req, res, next) => {
      console.log(`url='${req.url}, method=${req.method}`)
      next()
    })
    .get('/', (req, res) => {
      res.json({message: 'Hello express World!'})
    })

  return app
}
