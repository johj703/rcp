import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'

export default function NavigationBar() {
  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navbar">
        <Link to="/" className="btn btn-link">
          Home
        </Link>
        <Link to="/board" className="ml-4 btn btn-link">
          Board
        </Link>
      </div>
      <div className="flex items-center p-2">
        <RRLink to="/login" className="btn btn-sm btn-primary">
          Login
        </RRLink>
        <RRLink to="/signup" className="ml-4 btn btn-sm btn-outline btn-primary">
          Signup
        </RRLink>
        <RRLink to="/logout" className="ml-4 mr-4">
          LOGOUT
        </RRLink>
      </div>
    </div>
  )
}
