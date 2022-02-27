import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: "http://localhost:8080/api"
};

const api = axios.create(config);

export default api;