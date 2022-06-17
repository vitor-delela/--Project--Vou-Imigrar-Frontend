import axios from 'axios'
import { isExpired } from 'react-jwt'

export const HTTP = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
})

HTTP.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  const isMyTokenExpired = isExpired(token)
  if (token) {
    if (isMyTokenExpired) {
      localStorage.clear()
      window.location.href = '/'
    } else {
      config.headers.Authorization = token
    }
  }
  return config
})
