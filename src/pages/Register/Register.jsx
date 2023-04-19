import './Register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  let initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    zipCode: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = async (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
      zipCode: formState.zipCode
    })
    setFormState(initialState)
    navigate('/')
  }

  return (
    <div className="registercardsection">
      <h1>Nice to meet you!</h1>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          onChange={handleChange}
          value={formState.password}
        />
        <label htmlFor="zipCode">Zipcode:</label>
        <input
          type="text"
          id="zipCode"
          onChange={handleChange}
          value={formState.zipCode}
        />
        <button className="registerbutton">Click Here to Register</button>
      </form>
      <button onClick={() => navigate('/')}>
        Already have an account? Sign up here!
      </button>
    </div>
  )
}

export default Register
