import './LoginCard.css'
import { SignInUser } from '../../services/Auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginCard = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formState)
    setFormState(initialState)
    setUser(payload)
    navigate('/home')
  }

  return (
    <div className="logincardsection">
      <h1>Hello again!</h1>
      <form onSubmit={handleSubmit}>
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
        <button className="loginbutton">
          Click here to enter your garden!
        </button>
      </form>
    </div>
  )
}

export default LoginCard
