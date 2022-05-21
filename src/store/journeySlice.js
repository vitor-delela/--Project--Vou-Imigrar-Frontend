import { HTTP } from "../config/axios.config";

export const getJourneyDetails = async (request) => {
  let response;
  try {
    response = await HTTP.get(`/journeys/details/${request.countryId}`);
  } catch (_) {
    return {
      status: "failed",
      message: "Jornada não iniciada.",
    };
  }
  return {
    status: "success",
    data: {
      ...response.data,
    },
  };
};

export const getCountry = async (request) => {
  let response;
  try {
    response = await HTTP.get(`/countries/findById/${request.countryId}`);
  } catch (_) {
    return {
      status: "failed",
      message: "País não encontrado.",
    };
  }
  return {
    status: "success",
    data: {
      ...response.data,
    },
  };
};
