import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { getTimestamp } from "../util";

const requestHandler = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return request;
};

const responseHandler = (response: AxiosResponse): AxiosResponse => {
  if (response.status === 404)
    document.location.href = `http://${document.location.host}`;

  return response;
};

const requestErrorHandler = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);
const responseErrorHandler = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

export {
  requestHandler,
  responseHandler,
  requestErrorHandler,
  responseErrorHandler,
};
