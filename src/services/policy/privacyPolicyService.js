import http from "../../config/http";

const ENDPOINT = "privacy_terms";

export const privacyPolicyService = {
  getAllPrivacyPolicy: () => http.get(`${ENDPOINT}`),
};
