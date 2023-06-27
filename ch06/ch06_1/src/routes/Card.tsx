import {useCallback} from 'react'
import {useLocation, useParams, useNavigate, useSearchParams} from 'react-router-dom'

export default function Card() {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const [search] = useSearchParams()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])
  return (
    <div className="p-4">
      <p>location: {JSON.stringify(location, null, 2)}</p>
      <p>params: {JSON.stringify(params, null, 2)}</p>
      <p>cardid: {params['cardid']}</p>
      <p>
        from: {search.get('from')}, to: {search.get('to')}
      </p>
      <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
        go back
      </button>
    </div>
  )
}
