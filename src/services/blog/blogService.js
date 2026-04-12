import axios from "axios";
import http from "../../config/http";

const ENDPOINT = "blogs";

export const blogService = {
  getPosts: () => http.get(`${ENDPOINT}`),
  getPostById: (id) => http.get(`${ENDPOINT}/${id}`),
};
