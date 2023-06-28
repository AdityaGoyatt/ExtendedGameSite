import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "./apiClient";

export interface DataResult<T> {
  count: number;
  next: string | null;
  results: Array<T>;
}

class useApiFetch<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return apiClient
      .get<DataResult<T>>(this.endpoint, config.params)
      .then((res) => res.data.results);
  };
  get = (id: string) => {
    return apiClient.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default useApiFetch;
