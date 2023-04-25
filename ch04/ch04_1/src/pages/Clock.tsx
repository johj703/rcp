import type {FC} from 'react'
import {Div, Title, Subtitle} from '../components'

export type ClockProps = {
  today: Date
}

const Clock: FC<ClockProps> = ({today}) => {
  return (
    <Div>
      <Title>{today.toLocaleTimeString()}</Title>
      <Subtitle>{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}

export default Clock
