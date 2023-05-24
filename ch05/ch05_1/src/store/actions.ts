import type {Action} from 'redux'

export type SetTodayAction = Action & {
  today: Date
}
