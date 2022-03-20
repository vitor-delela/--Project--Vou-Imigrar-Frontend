import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'page',
  initialState: {
    page: ''
  },
  reducers: {
    setPage (state, { payload }) {
      return {
        ...state,
        page: payload
      }
    }
  }
})

export const { setPage } = slice.actions
export const selectPage = (state) => state.page
export default slice.reducer
