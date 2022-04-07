import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import pageReducer from './pageSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userSlice
  }
})

export const useAppDispatch = () => useDispatch()
export default store
