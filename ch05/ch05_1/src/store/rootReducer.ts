import type {Action} from 'redux'
import type {AppState} from './AppState'

const initialAppState = {
  today: new Date()
}
export const rootReducer = (state: AppState = initialAppState, action: Action) => state
