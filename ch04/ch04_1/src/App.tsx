import {useEffect, useRef} from 'react'
import Clock from './pages/Clock'

export default function App() {
  let today = useRef(new Date())
  useEffect(() => {
    console.log('useEffect called.')
    const duration = 1000
    const id = setInterval(() => {
      today.current = new Date()
      console.log('today.current', today.current.toLocaleTimeString())
    }, duration)
    return () => clearInterval(id)
  }, [])
  return <Clock today={today.current} />
}
