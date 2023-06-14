import {useCallback, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'

import type {AppState} from '../../store'
import type {List} from '../../store/commonTypes'
import * as L0 from '../../store/listidOrders'
import * as L from '../../store/listEntities'

export default function Board() {
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

  const children = useMemo(
    () =>
      lists.map((list) => (
        <BoardList key={list.uuid} list={list} onRemoveList={onRemoveList(list.uuid)} />
      )),
    [lists, onRemoveList]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="flex p-2 mt-4 flrx-wrap">
        {children}
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
