import './Login.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../../services/Auth'

const Login = ({ setUser }) => {
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
  useEffect(() => {
    localStorage.clear()
    // eslint-disable-next-line
  }, [])

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
      <button onClick={() => navigate('/register')}>
        No account? Sign up for one here!
      </button>
    </div>
  )
}

export default Login
