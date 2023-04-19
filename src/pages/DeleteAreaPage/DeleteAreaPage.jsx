import './DeleteAreaPage.css'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteAreaPage = () => {
  let navigate = useNavigate()
  let { area_id } = useParams()

  const deleteArea = async () => {
    await axios.delete(`${BASE_URL}/areas/${area_id}`)
    navigate('/areas')
  }

  return (
    <div className="deletesection">
      <h1>Are you sure?</h1>
      <button onClick={deleteArea}>Yes</button>
      <button onClick={() => navigate(-1)}>Actually, Let's keep it.</button>
    </div>
  )
}
export default DeleteAreaPage
