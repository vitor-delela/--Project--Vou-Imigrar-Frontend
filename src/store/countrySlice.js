import { HTTP } from "../config/axios.config";

export const getCountryDetails = async (request) => {
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
      ...response.data
    },
  };
}
