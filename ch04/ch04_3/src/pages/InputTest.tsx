import {useState} from 'react'
import {Title} from '../components'

export default function InputTest() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex justify-center p-4 mt-4 item-center">
        <input type="text" value={value} />
        <input type="checkbox" checked={checked} />
      </div>
    </section>
  )
}
