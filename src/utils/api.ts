import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: "http://edibleworks.ru/api"
};

const api = axios.create(config);

export default api;