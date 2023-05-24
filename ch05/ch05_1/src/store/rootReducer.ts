import type {Action} from 'redux'
import type {AppState} from './AppState'

const initialAppState = {
  today: new Date()
}
export const rootReducer = (prevState: AppState = initialAppState, action: Action) => {
  const newState = {...prevState}
  return newState
}
