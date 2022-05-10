import { HTTP } from "../config/axios.config";
import { useSelector } from "react-redux";
import {selectUser} from "./userSlice"

export const findAllMatches = async () => {
  const token=localStorage.getItem("token")
  let response;
  try {
    response = await HTTP.get(
      `/matches/findByUser/`
    );
    
  } catch (_) {
    return {
      status: "failed",
      message: "Matche não encontrado.",
    };
  }
  return {
    status: "success",
    data: {
      ...response.data
    },
  };
}

// export const slice = createSlice({
//     name: 'user',
//     initialState: {
//       id: '',
//       name: '',
//       email: '',
//       phone: '',
//       token: '',
//       status: '',
//       type: null
//     },
//     reducers: {
//       setUser (state, { payload }) {
//         return {
//           ...state,
//           email: payload.email,
//           type: payload.type,
//           authenticated: payload.authenticated
//         }
//       },
//       setStatus (state, { payload }) {
//         return {
//           ...state,
//           status: payload
//         }
//       },
//       logout (state) {
//         return {
//           ...state,
//           id: '',
//           name: '',
//           email: '',
//           phone: '',
//           token: '',
//           status: '',
//           type: null
//         }
//       }
//     },
//     extraReducers: {
//       [signIn.pending]: (state, action) => {
//         state.status = 'loading'
//       },
//       [signIn.fulfilled]: (state, action) => {
//         state.status = action.payload.status
//         if (!action.payload.data || action.payload.status === 'failed') {
//           state.error = action.payload.message
//           state.error = action.payload.message
//         } else {
//           state.id = action.payload.data.id
//           state.name = action.payload.data.name
//           state.email = action.payload.data.email
//           state.token = action.payload.data.token
//           state.phone = action.payload.data.phone
//           state.type = 'client'
//         }
//       },
//       [signUp.pending]: (state, action) => {
//         state.status = 'loading'
//       },
//       [signUp.fulfilled]: (state, action) => {
//         if (!action.payload.data) {
//           state.status = 'failed'
//           state.error = action.payload.message
//           return
//         }
//         state.status = 'login'
//         state.id = action.payload.data.id
//         state.name = action.payload.data.name
//         state.email = action.payload.data.email
//         state.phone = action.payload.data.phone
//         state.token = action.payload.data.token
//         state.type = 'client'
//       },
//       [update.pending]: (state, action) => {
//         state.status = 'loading'
//       },
//       [update.fulfilled]: (state, action) => {
//         if (!action.payload.data) {
//           state.status = 'failed'
//           state.error = action.payload.message
//           return
//         }
//         state.status = 'update'
//         state.name = action.payload.data.name
//         state.phone = action.payload.data.phone
//       }
//     }
// })
