import axios, { AxiosRequestConfig } from "axios";
import { updatePayload } from "../actions/auth";
import store, { AppState } from "../store";

const config: AxiosRequestConfig = {
    baseURL: "https://api.bpmdrop.com",
    withCredentials: true
};

const api = axios.create(config);

api.interceptors.request.use(
    async (req: any) => {
        const state: AppState = store.getState();
        const token = state.auth.token;
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
    },
    err => {
        Promise.reject(err);            
    }
);

api.interceptors.response.use(
    res => res,
    err => {
        const response = err.response;
        if (!response) return Promise.reject(err);

        if (response.status === 401) {
            console.error('Пожалуйста, авторизуйтесь снова');
            localStorage.removeItem("token");
            store.dispatch(updatePayload(null));
        } else {
            console.log(response.data);
            if (!response.data.success) {
                console.error(response.data.error);
            };
        };
    }
);

export default api;