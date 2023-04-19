import axios from 'axios'

export const BASE_URL = process.env.REACT_APP_BASE_URL

const User = axios.create({ baseURL: BASE_URL })

User.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default User
