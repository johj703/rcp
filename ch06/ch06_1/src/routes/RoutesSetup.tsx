import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Home from './Home'
import Board from '../pages/Board'
import Card from './Card'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Home title="welcome to our site" />} />
      <Route path="/Board" element={<Board />} />
      <Route path="/Board/card/:cardid" element={<Card />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
