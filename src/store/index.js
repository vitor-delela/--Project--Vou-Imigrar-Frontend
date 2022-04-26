import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import pageReducer from './pageSlice'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer
  }
})

export const useAppDispatch = () => useDispatch()
export default store
