import http from "../../config/http";

const ENDPOINT = `services`;

export const qrService = {
  getQrServices: () => http.get(ENDPOINT),
};
