import {login as loginAction, registration as RegisterAction} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store";
import {useEffect, useState} from "react";

const useAuth = () => {

    const dispatch = useDispatch();
    const auth = useSelector((state: AppState) => state.auth);
    const [token, setToken] = useState(auth.token);
    const [authError, setAuthError] = useState(auth.error);
    const [isAuthorized, setAuthorized] = useState(!!auth.isAuth);

    useEffect(() => {
        setAuthError(auth.error);
        setToken(auth.token);
        setAuthorized(!!auth.isAuth);
    }, [auth]);

    const login = (email: string, password: string) => {
        dispatch(loginAction({email: email, password: password}))
    }

    const register = (email: string, password: string) => {
        dispatch(RegisterAction({email: email, password: password}))
    }

    return {
        login,
        register,
        authError,
        token,
        isAuthorized
    }
}

export default useAuth;
