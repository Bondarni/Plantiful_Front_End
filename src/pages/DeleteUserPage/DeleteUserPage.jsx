import './DeleteUserPage.css'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate } from 'react-router-dom'

const DeleteUserPage = ({ user }) => {
  let navigate = useNavigate()
  let user_id = user.id

  const deletePlant = async () => {
    await axios.delete(`${BASE_URL}/users/${user_id}`)
    navigate('/')
  }

  return (
    <div className="deletesection">
      <h1>Your account will be erased; Are you sure?</h1>
      <button onClick={deletePlant}>Yes</button>
      <button onClick={() => navigate(-1)}>No, take me back!</button>
    </div>
  )
}
export default DeleteUserPage
