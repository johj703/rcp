import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import type {List} from '../store/commonTypes'
import * as L0 from '../store/listidOrders'
import * as L from '../store/listEntities'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map((uuid) => listEntities[uuid])
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(L0.addListidToOrders(uuid))
      dispatch(L.addList(list))
    },
    [dispatch]
  )
  const onRemoveList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(L0.removeListidFromOrders(listid))
    },
    [dispatch]
  )
  return {lists, onCreateList, onRemoveList}
}
