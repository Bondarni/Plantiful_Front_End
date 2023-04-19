import './AreaPage.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AreaCard from '../../components/AreaCard/AreaCard'
const AreaPage = ({ user, checkToken, token }) => {
  let areas = []
  if (user) {
    areas = user.areas
  }
  const yesAreas = (
    <div>
      {areas.map((area) => (
        <AreaCard area={area} key={area.id} />
      ))}
    </div>
  )

  const noAreas = (
    <div>
      <h1>Your account doesn't have any spaces yet.</h1>
    </div>
  )

  useEffect(() => {
    if (token) {
      checkToken()
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="areasection">
      <Link to={'/areas/new'}>
        <button className="addbutton">Click here to create a new space!</button>
      </Link>
      {areas ? yesAreas : noAreas}
    </div>
  )
}

export default AreaPage
