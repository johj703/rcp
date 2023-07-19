import {Express} from 'express'
import * as R from '../routers'

export const setupRouters = (app: Express, ...args: any[]): Express => {
  // prettier-ignore
  return app
        .use('/test', R.testrouter(...args))
        .use('/auth', R.authRouter(...args))
}
