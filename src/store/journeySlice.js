import { HTTP } from "../config/axios.config";

export const getJourneyDetails = async (request) => {
  let response;
  try {
    response = await HTTP.get(
      `/journeys/details/${request.id}`
    );
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