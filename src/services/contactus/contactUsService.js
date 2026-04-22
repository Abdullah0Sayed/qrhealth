import http from "../../config/http";

const ENDPOINT = "contact-us";

export const contactUsService = {
  sendContactRequest: (payload) => http.post(ENDPOINT, payload),
  getQrInformation: () => http.get(ENDPOINT),
};
