import type * as T from './types'

export const setClock = (payload: T.state): T.SetClockAction => ({
  type: '@clock/setClock',
  payload
})
