import './EditAreaPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const EditAreaPage = ({ user }) => {
  let navigate = useNavigate()
  let areaArray = user.areas
  let { area_id } = useParams()
  let initialState = {
    name: ''
  }
  for (let i = 0; i < areaArray.length; i++) {
    if (areaArray[i].id === area_id) {
      initialState = { user }
    }
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = async (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/areas/${area_id}`, formState)
    setFormState(initialState)
    navigate('/areas')
  }

  return (
    <div className="editareapagesection">
      <h1>Change the room name;</h1>
      <form className="editform" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />
        <button>Done!</button>
      </form>
    </div>
  )
}

export default EditAreaPage
