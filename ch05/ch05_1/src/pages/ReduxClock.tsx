import {useSelector} from 'react-redux'
import type {AppState} from '../store'
import {Div, Title, Subtitle} from '../components'

export default function ReduxClock() {
  const today = useSelector<AppState, Date>((state) => state.today)

  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">ReduxClock</Title>
      <Title>{today.toLocaleTimeString()}</Title>
      <Subtitle>{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}
