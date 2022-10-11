import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
// Response interceptors
service.interceptors.response.use((response: AxiosResponse) => {
    const res = response.data;
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;