import './AddPlantPage.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../globals'
const AddPlantPage = ({ user }) => {
  let navigate = useNavigate()
  let areaArray = user.areas

  let initialState = {
    kind: '',
    nickName: '',
    waterNeed: '',
    sunNeed: '',
    userId: user.id,
    areaId: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = async (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/plants`, formState)
    setFormState(initialState)
    navigate('/plants')
  }

  return (
    <div className="addplantsection">
      <h1>New Plant</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="kind">What Kind of Plant is it?</label>
        <input
          type="text"
          id="kind"
          onChange={handleChange}
          value={formState.kind}
        />
        <label htmlFor="nickName">
          What Nickname would you like to give your plant?
        </label>
        <input
          type="text"
          id="nickName"
          onChange={handleChange}
          value={formState.nickName}
        />
        <label htmlFor="areaId">Where are you putting it?</label>
        <select id="areaId" onChange={handleChange} value={formState.areaId}>
          {areaArray.map((area) => (
            <option value={area.id} key={area.id}>
              {area.name}
            </option>
          ))}
        </select>
        <button>Done!</button>
      </form>
    </div>
  )
}

export default AddPlantPage
