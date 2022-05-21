import { HTTP } from "../config/axios.config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const startJourney = createAsyncThunk('api/journeys', async (request) => {
  let response
  try {
    response = await HTTP.post(
      '/journeys/new',
      {
        countryId: request.countryId
      }
    )
  } catch (_) {
    return {
      status: 'failed',
      message: 'Falha ao iniciar a jornada.'
    }
  };
  return {
    status: "success",
    data: {
      ...response.data,
    }
  }
})