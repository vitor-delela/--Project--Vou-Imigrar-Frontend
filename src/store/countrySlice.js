import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP } from "../config/axios.config";

export const getCountryDetails = createAsyncThunk(
  "api/countryDetails",
  async (request) => {
    let response;
    try {
      response = await HTTP.get(
        `/countries/findCountryDetailsById/${request.id}`
      );
    } catch (_) {
      return {
        status: "failed",
        message: "País não encontrado.",
      };
    }
    return {
      status: "success",
      data: {
        id: response.data.id,
        name: response.data.name,
        description: request.description,
        infos: response.data.infos !== undefined ? response.data.infos : [],
        photos: response.data.photos !== undefined ? response.data.photos : [],
      },
    };
  }
);
