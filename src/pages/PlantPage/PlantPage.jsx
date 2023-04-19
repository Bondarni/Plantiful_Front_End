import './PlantPage.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PlantCard from '../../components/PlantCard/PlantCard'
// import { CheckSession } from '../../services/Auth'
const PlantPage = ({ user, checkToken, token }) => {
  let plants = false
  if (user) {
    plants = user.plants
  }
  let yesPlants
  if (plants) {
    yesPlants = (
      <div>
        {plants.map((plant) => (
          <PlantCard plant={plant} key={plant.id} />
        ))}
      </div>
    )
  }

  const noPlants = (
    <div>
      <h1>Your account doesn't have any plants yet.</h1>
    </div>
  )

  useEffect(() => {
    if (token) {
      checkToken()
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="plantpagesection">
      <Link to={'/plants/new'}>
        <button className="addbutton">Click here to create a new plant!</button>
      </Link>
      {plants ? yesPlants : noPlants}
    </div>
  )
}
export default PlantPage
