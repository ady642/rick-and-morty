import axios, { AxiosResponse } from 'axios';

const baseURL = process.env.VUE_APP_ENV_SERVER;

const axiosInstance = axios.create({
    baseURL
});

export type ApiResponse<T> = AxiosResponse<T>

export default axiosInstance;
