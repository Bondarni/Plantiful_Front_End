import './App.css'
import { CheckSession } from './services/Auth'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import UserInfoPage from './pages/UserInfoPage/UserInfoPage'
import EditUserInfoPage from './pages/EditUserInfoPage/EditUserInfoPage'
import DeleteUserPage from './pages/DeleteUserPage/DeleteUserPage'
import PlantPage from './pages/PlantPage/PlantPage'
import AddPlantPage from './pages/AddPlantPage/AddPlantPage'
import EditPlantPage from './pages/EditPlantPage/EditPlantPage'
import DeletePlantPage from './pages/DeletePlantPage/DeletePlantPage'
import AreaPage from './pages/AreaPage/AreaPage'
import AddAreaPage from './pages/AddAreaPage/AddAreaPage'
import EditAreaPage from './pages/EditAreaPage/EditAreaPage'
import DeleteAreaPage from './pages/DeleteAreaPage/DeleteAreaPage'

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      checkToken()
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <header>
        <NavBar user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/userinfo"
            element={
              <UserInfoPage user={user} checkToken={checkToken} token={token} />
            }
          />
          <Route
            path="/userinfo/edit"
            element={<EditUserInfoPage user={user} />}
          />
          <Route
            path="/userinfo/delete"
            element={<DeleteUserPage user={user} />}
          />
          <Route
            path="/plants"
            element={
              <PlantPage user={user} checkToken={checkToken} token={token} />
            }
          />
          <Route path="/plants/new" element={<AddPlantPage user={user} />} />
          <Route
            path="/plants/:plant_id"
            element={<EditPlantPage user={user} />}
          />
          <Route
            path="/plants/delete/:plant_id"
            element={<DeletePlantPage user={user} />}
          />
          <Route
            path="/areas"
            element={
              <AreaPage user={user} checkToken={checkToken} token={token} />
            }
          />
          <Route path="/areas/new" element={<AddAreaPage user={user} />} />
          <Route
            path="/areas/:area_id"
            element={<EditAreaPage user={user} />}
          />
          <Route
            path="/areas/delete/:area_id"
            element={<DeleteAreaPage user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
