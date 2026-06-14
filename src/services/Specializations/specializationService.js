import http from "../../config/http";

const ENDPOINT = `categories`;

export const specializationService = {
  getAllSpecializations: () => http.get(ENDPOINT),
  getCategoryById: (id) => http.get(`${ENDPOINT}/${id}/details`),
};
