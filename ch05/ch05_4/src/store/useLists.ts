import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import type {List} from '../store/commonTypes'
import * as L0 from '../store/listidOrders'
import * as L from '../store/listEntities'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardidOrders'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map((uuid) => listEntities[uuid])
  )
  const listidCardidOrders = useSelector<AppState, LC.State>(
    ({listidCardidOrders}) => listidCardidOrders
  )

  const listidOrders = useSelector<AppState, L0.State>(({listidOrders}) => listidOrders)

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(L0.addListidToOrders(uuid))
      dispatch(L.addList(list))
      dispatch(LC.setListidCardids({listid: list.uuid, cardids: []}))
    },
    [dispatch]
  )
  const onRemoveList = useCallback(
    (listid: string) => () => {
      listidCardidOrders[listid].forEach((cardid) => {
        dispatch(C.removeCard(cardid))
      })
      dispatch(LC.removeListid(listid))

      dispatch(L.removeList(listid))
      dispatch(L0.removeListidFromOrders(listid))
    },
    [dispatch, listidCardidOrders]
  )
  const onMoveList = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newOrders = listidOrders.map((item, index) =>
        index === dragIndex
          ? listidOrders[hoverIndex]
          : index === hoverIndex
          ? listidOrders[dragIndex]
          : item
      )
      dispatch(L0.setListidOrders(newOrders))
    },
    [dispatch, listidOrders]
  )
  return {lists, onCreateList, onRemoveList}
}
