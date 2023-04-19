import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import PlantCard from '../../components/PlantCard/PlantCard'
// import UserCard from '../../components/UserCard/UserCard'
// import WeatherCard from '../../components/WeatherCard/WeatherCard'
// import AreaCard from '../../components/AreaCard/AreaCard'
const Home = ({ user }) => {
  console.log(user)
  const [weather, setWeather] = useState([])
  const [temps, setTemps] = useState([])
  const getWeather = async () => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${user.zipCode},US&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    let coords = response.data
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    )
    setWeather(res.data.weather)
    setTemps(res.data.main)
  }

  let yesUser = (
    <div>
      <h2>Here's the weather for your area;</h2>
      {weather.map((precip) => (
        <div key={precip.id}>
          <div>{precip.main}</div>
          <div>{precip.description}</div>
        </div>
      ))}
      <div>{temps.temp}</div>
      <div>Feels like {temps.feels_like}</div>
    </div>
  )

  const noUser = (
    <div>
      <h1>No Weather Data Available Yet.</h1>
    </div>
  )

  useEffect(() => {
    if (user !== null) {
      getWeather()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="homesection">
      <h1>Home Sweet Home!</h1>
      <div className="weathercardsection">
        {user !== null ? yesUser : noUser}
      </div>
    </div>
  )
}

export default Home
