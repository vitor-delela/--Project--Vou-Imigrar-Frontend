import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HTTP } from '../config/axios.config'

export const findAllQuestions = createAsyncThunk('api/questions', async (request) => {
  let response
  try {
    response = await HTTP.get(
      '/questions/'
    )
  } catch (_) {
    return {
      status: 'failed',
      message: 'Perguntas não encontradas.'
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
  name: 'mapping',
  extraReducers: {
    [findAllQuestions.pending]: (state, action) => {
      state.status = 'loading'
    },
    [findAllQuestions.fulfilled]: (state, action) => {
      if (!action.payload.data) {
        state.status = 'failed'
        state.error = action.payload.message
        return
      }
      state.status = 'success'
    }
  }
})

export default slice.reducer
