import http from "../../config/http";

const ENDPOINT = "doctors";

export const doctorService = {
  getQrHealthDoctors: () => http.get(`${ENDPOINT}`),
  getDoctorById: (id) => http.get(`${ENDPOINT}/${id}`),
};
