import axios from "axios";
import {
  requestHandler,
  responseHandler,
  requestErrorHandler,
  responseErrorHandler,
} from "./handler";

const TIMEOUT = 10000;

const httpClient = axios.create({
  baseURL: "/",
  timeout: TIMEOUT,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => requestErrorHandler(error)
);

httpClient.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseErrorHandler(error)
);

export default httpClient;
