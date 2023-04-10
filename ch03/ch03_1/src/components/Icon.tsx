import type {FC} from 'react'

export type IconProps = {
  name: string
}

export const Icon: FC<IconProps> = ({name}) => {
  return <span className="material-icons" />
}
