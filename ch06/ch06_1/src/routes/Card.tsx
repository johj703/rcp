import {useCallback} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export default function Card() {
  const location = useLocation()

  const navigate = useNavigate()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])
  return (
    <div>
      <p>Location: {JSON.stringify(location, null, 2)}</p>
      <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
        go back
      </button>
    </div>
  )
}
