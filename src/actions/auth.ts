import { AppThunk, AppDispatch } from "../store";
import api from "../utils/api";
import jwt_decode from "jwt-decode";
import { AuthFields, JwtDecode } from "../types/store";
import { AuthActionTypes } from "../types/actions";
import { LOGIN, LOGOUT } from "./types";

const decodeJWT = (token: string) => {
    const decoded = jwt_decode<JwtDecode>(token);
    if (decoded.blocked !== 1) return true;
    return false;
};

const login = (fields: AuthFields): AppThunk => (dispatch: AppDispatch) => {
    api.post("auth/login", fields).then(responce => {
        const result: any = responce.data;
        if (result.success) {
            const token = result.token;
            if (decodeJWT(token)) {
                localStorage.setItem("token", token);
                dispatch({ type: LOGIN, token: token, isAuth: true });
            } else console.error("Вы заблокированы!");
        }
    }).catch(e => {
        console.log(e);
        console.error("Ошибка авторизации!");
        dispatch({ type: LOGIN, token: "", error: "Ошибка авторизации!", isAuth: false });
    });
};

const registration = (fields: AuthFields): AppThunk => (dispatch: AppDispatch) => {
    api.post("auth/register", fields).then(responce => {
        const result: any = responce.data;
        if (result.success) console.log(result.data);
    }).catch(e => { console.log(e); console.error("Ошибка регистрации!")});
};

const logout = (): AppThunk => (dispatch: AppDispatch) =>  {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT })
};

const updatePayload = (token: string | null): AuthActionTypes => {
    if ((!token) || (!decodeJWT(token))) return { type: LOGOUT };
    return { type: LOGIN, token: token, isAuth: true };
};

export { login, updatePayload, logout, registration };