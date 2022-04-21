import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HTTP } from '../config/axios.config';

export const signUp = createAsyncThunk('api/signUp', async (request) => {
  let response;
  try {
    response = await HTTP.post(
      '/users', { 
        "name": request.name,
        "birth": request.birth,
        "phone": request.tel,
        "email": request.email,
        "password": request.password,
        "userType": "USER"
      }
    )
  } catch(_) {
    return { 
      status: 'failed',
      message: 'O cadastro não pode ser realizado com sucesso.'
    }
  };
  return {
    status: 'success',
    data: {
      id: response.data.id,
      name: response.data.name,
      email: request.email,
      token: response.headers.authorization,
      type: response.data.type
    }
  };
});

export const signIn = createAsyncThunk('api/signIn', async (request) => {
  let response;
  try {
    response = await HTTP.post(
      '/users/login', { 
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
  return {
    status: 'success',
    data: {
      id: response.data.id,
      name: response.data.name,
      email: request.email,
      token: response.headers.authorization,
      type: response.data.type
    }
  };
});

export const slice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: '',
    email: '',
    token: '',
    status: '',
    type: ''
  },
  reducers: {
    setUser (state, { payload }) {
      return {
        ...state,
        email: payload.email,
        type: payload.type,
        authenticated: payload.authenticated
      }
    },
    setStatus (state, { payload }) {
      return {
        ...state,
        status: payload
      }
    }
  },
  extraReducers: {
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = action.payload.status
      if (action.payload.status == 'failed') {
        state.error = action.payload.message;
      } else if (action.payload.status == 'success') {
        state.id = action.payload.data.id;
        state.name = action.payload.data.name;
        state.email = action.payload.data.email;
        state.token = action.payload.data.token;
      }
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
    [signUp.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUp.fulfilled]: (state, action) => {
      if (!action.payload.data) {
          state.status = 'failed'
          state.error = action.payload.message;
          return
      }
      state.status = 'login';
    },
  },
});

export const { setUser, setStatus } = slice.actions;
export const selectUser = (state) => state.user;
export default slice.reducer;
