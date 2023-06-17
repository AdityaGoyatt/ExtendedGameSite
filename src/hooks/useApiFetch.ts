import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "./apiClient";

export interface DataResult<T> {
  count: number;
  results: Array<T>;
}

class useApiFetch<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return apiClient
      .get<DataResult<T>>("/endpoint", config)
      .then((res) => res.data.results);
  };
}

export default useApiFetch;
