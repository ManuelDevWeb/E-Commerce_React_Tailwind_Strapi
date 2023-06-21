import axios from "axios";

// Config
import { config } from "./config";

const request = axios.create({
  baseURL: config.API_URL,
  headers: {
    Authorization: "Bearer " + config.API_TOKEN,
  },
});

export { request };
