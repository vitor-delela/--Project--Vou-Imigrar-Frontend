import axios from 'axios'

export const HTTP = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
})

HTTP.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

HTTP.interceptors.response.use(function (config) {
  return config
}, function (error) {
  if (error.response.status === 403) {
    localStorage.removeItem('token')
    localStorage.removeItem('persist:root')
    location.href = '/'
  }
  return error;
})