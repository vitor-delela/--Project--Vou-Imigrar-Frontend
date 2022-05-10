import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HTTP } from '../config/axios.config'

export const findAllMatches = createAsyncThunk('api/signUp', async (request) => {
  let response
  try {
    response = await HTTP.get(
      '/matches/findByUser/'
    )
  } catch (_) {
    return {
      status: 'failed',
      message: 'Match não encontrado.'
    }
  };
  return {
    status: 'success',
    data: [
      ...response.data
    ]
  }
})

export const slice = createSlice({
  name: 'country',
  extraReducers: {
    [findAllMatches.pending]: (state, action) => {
      state.status = 'loading'
    },
    [findAllMatches.fulfilled]: (state, action) => {
      if (!action.payload.data) {
        state.status = 'failed'
        state.error = action.payload.message
        return
      }
      state.status = 'match'
    }
  }
})

export default slice.reducer
