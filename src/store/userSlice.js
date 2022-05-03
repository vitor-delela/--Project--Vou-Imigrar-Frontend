import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signIn = createAsyncThunk('api/signIn', async (request) => {
  let response;
  try {
    response = await axios.post(
      'http://localhost:8080/users/login', { 
        "email": request.email,
        "password": request.password
      }
    )
  } catch(_) {
    return { 
      status: 'failed',
      message: 'Usuário ou senha incorretos.'
    }
  };
  localStorage.setItem("user", JSON.stringify(response.data));
  return {
    status: 'success',
    data: {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      token: response.data.authorization,
      type: response.data.type
    }
  };
});

export const signUp = createAsyncThunk('api/signUp', async (request) => {
  console.log(request)
  const response = await axios.post(
    'http://localhost:8080/users', { 
      "name": request.name,
      "birth": request.birth,
      "phone": request.tel,
      "email": request.email,
      "password": request.password,
      "userType": "USER"
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
      state.status = action.payload.status
      if (!action.payload.data || action.payload.status == 'failed') {
        state.error = action.payload.message;
        state.error = action.payload.message;
      } else {
        state.id = action.payload.data.id;
        state.name = action.payload.data.name;
        state.email = action.payload.data.email;
        state.token = action.payload.data.token;
        state.phone = action.payload.data.phone;
        state.type = 'client';
      }
    },
    [signUp.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUp.fulfilled]: (state, action) => {
      if (!action.payload.data) {
          state.status = 'failed'
          state.error = action.payload.message;
          return
      }
      state.status = 'success';
      state.id = action.payload.data.id;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.type = 'client';
    },
  },
});

export const { setUser } = slice.actions;
export const selectUser = (state) => state.user;
export default slice.reducer;
