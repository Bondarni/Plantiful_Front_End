import './UserInfoPage.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const UserInfoPage = ({ user, token, checkToken }) => {
  useEffect(() => {
    if (token) {
      checkToken()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="userinfopagesection">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <Link to="/userinfo/edit">
        <button className="editbutton">Edit Your Account Info</button>
      </Link>
      <Link to="/userinfo/delete">
        <button className="deletebutton">Delete Your Account</button>
      </Link>
    </div>
  )
}

export default UserInfoPage
