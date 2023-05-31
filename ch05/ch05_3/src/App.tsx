import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'
import ClockTest from './pages/ClockTest'
import CounterTest from './pages/CounterTest'
import RemoteUserTest from './pages/RemoteUserTest'
import Card from './pages/CardTest/Card'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <Card
        card={{
          uuid: '',
          writer: {
            uuid: '',
            name: '',
            jobTitle: '',
            email: '',
            avatar: ''
          },
          image: '',
          title: '',
          paragraphs: '',
          dayMonthYearDate: '',
          relativeDate: null
        }}
      />
      <RemoteUserTest />
      <CounterTest />
      <ClockTest />
    </ReduxProvider>
  )
}
