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

HTTP.interceptors.response.use(function (response) {
  if (response.status === 403) {
    localStorage.clear()
    window.location.href = '/'
  } else {
    return response
  }
})
