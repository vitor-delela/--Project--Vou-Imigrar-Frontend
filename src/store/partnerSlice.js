import { HTTP } from "../config/axios.config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPartners = async (request) => {
    let response;
    try {
      response = await HTTP.get(
        `/partners/findAllPartnersByCategoryId/1`
      );
    } catch (_) {
      return {
        status: "failed",
        message: "Parceiro não encontrado.",
      };
    }
    return {
      status: "success",
      data: {
        ...response.data,
      },
    };
  };

export const slice = createSlice({
  name: "partner",
  extraReducers: {
    [getPartners.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPartners.fulfilled]: (state, action) => {
      if (!action.payload.data) {
        state.status = "failed";
        state.error = action.payload.message;
        return;
      }
      state.status = "success";
    },
  },
});

export default slice.reducer;
