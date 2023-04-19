import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome, {user.firstName}!</h3>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/areas">Spaces</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/userinfo">Your Info</NavLink>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/">Register/Sign In</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )

  return <div className="navsection">{user ? userOptions : publicOptions}</div>
}

export default NavBar
