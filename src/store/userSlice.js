import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signIn = createAsyncThunk('api/signIn', async (request) => {
  const response = await axios.post(
    'http://restapi.adequateshop.com/api/authaccount/login', { 
      "email": request.email,
      "password": request.password
    }
  );
  return response.data;
});

export const slice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: '',
    email: '',
    token: '',
    status: '',
    type: null
  },
  reducers: {
    setUser (state, { payload }) {
      return {
        ...state,
        email: payload.email,
        type: payload.type,
        authenticated: payload.authenticated
      }
    }
  },
  extraReducers: {
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signIn.fulfilled]: (state, action) => {
      if (!action.payload.data) {
          state.status = 'failed'
          state.error = action.payload.message;
          return
      }
      state.status = 'success';
      state.id = action.payload.data.Id;
      state.name = action.payload.data.Name;
      state.email = action.payload.data.Email;
      state.token = action.payload.data.Token;
    },
  },
});

export const { setUser } = slice.actions;
export const selectUser = (state) => state.user
export default slice.reducer;