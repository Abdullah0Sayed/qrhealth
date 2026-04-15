import http from "../../config/http";

const ENDPOINT = "doctors";

export const doctorService = {
  getQrHealthDoctors: () => http.get(`${ENDPOINT}/all`),
  getDoctorById: (id) => http.get(`${ENDPOINT}/${id}`),
};
