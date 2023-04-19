import './EditUserInfoPage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const EditUserInfoPage = ({ user }) => {
  let navigate = useNavigate()
  let user_id = user.id
  let initialState = { ...user }

  const [formState, setFormState] = useState(initialState)

  const handleChange = async (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/users/${user_id}`, formState)
    setFormState(initialState)
    navigate('/userinfo')
  }

  return (
    <div className="edituserinfopagesection">
      <h1>Edit your info below;</h1>
      <form onSubmit={handleSubmit} className="editform">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          value={formState.firstName}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          value={formState.lastName}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={formState.email}
        />
        <label htmlFor="zipCode">Zipcode:</label>
        <input
          type="text"
          id="zipCode"
          onChange={handleChange}
          value={formState.zipCode}
        />
        <button>Done!</button>
      </form>
    </div>
  )
}

export default EditUserInfoPage
