import type * as T from './types'

export const setUser = (payload: T.State): T.SetUserAction => ({
  type: '@remoteUser/setUser',
  payload
})
export const changeEmail = (poyload: string): T.ChangeEmailAction => ({
  type: '@remoteUser/changeEmail',
  payload
})
export const changeName = (poyload: T.NameType): T.ChangeNameAction => ({
  type: '@remoteUser/changeName',
  payload
})
export const changePicture = (poyload: T.PictureType): T.ChangePictureAction => ({
  type: '@remoteUser/changePicture',
  payload
})
