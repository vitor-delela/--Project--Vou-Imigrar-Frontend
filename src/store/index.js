import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import pageReducer from './pageSlice'

const store = configureStore({
  reducer: {
    page: pageReducer
  }
})

export const useAppDispatch = () => useDispatch()
export default store
