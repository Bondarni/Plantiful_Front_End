import './DeletePlantPage.css'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate, useParams } from 'react-router-dom'

const DeletePlantPage = () => {
  let navigate = useNavigate()
  let { plant_id } = useParams()

  const deletePlant = async () => {
    await axios.delete(`${BASE_URL}/plants/${plant_id}`)
    navigate('/plants')
  }

  return (
    <div className="deletesection">
      <h1>Are you sure?</h1>
      <button onClick={deletePlant}>Yes</button>
      <button onClick={() => navigate(-1)}>Actually, Let's keep it.</button>
    </div>
  )
}
export default DeletePlantPage
