import './AddAreaPage.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../globals'
const AddAreaPage = ({ user }) => {
  let navigate = useNavigate()

  let initialState = {
    name: '',
    userId: user.id
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = async (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/areas`, formState)
    setFormState(initialState)
    navigate('/areas')
  }

  return (
    <div className="addareasection">
      <h1>New Space</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Which room are you adding?</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />
        <button>Done!</button>
      </form>
    </div>
  )
}

export default AddAreaPage
