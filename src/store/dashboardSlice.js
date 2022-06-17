import { HTTP } from '../config/axios.config'
import { createSlice } from '@reduxjs/toolkit'

export const getDadosAdmin = async (request) => {
  let response
  try {
    response = await HTTP.get(
      '/admin/'
    )
  } catch (_) {
    return {
      status: 'failed',
      message: 'Dados não encontrado.'
    }
  }
  return {
    status: 'success',
    data: {
      ...response.data
    }
  }
}

export const slice = createSlice({
  name: 'dashboard',
  extraReducers: {
    [getDadosAdmin.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getDadosAdmin.fulfilled]: (state, action) => {
      if (!action.payload.data) {
        state.status = 'failed'
        state.error = action.payload.message
        return
      }
      state.status = 'sucess'
    }
  }
})

export default slice.reducer
