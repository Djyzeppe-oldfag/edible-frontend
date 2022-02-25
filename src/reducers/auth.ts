import { AuthState } from "../types/store";
import { AuthActionTypes } from "../types/actions";
import { LOGIN, LOGOUT } from "../actions/types";

const initialState: AuthState = {
    isAuth: false,
    token: ""
};

export default (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case LOGIN: return { ...state, isAuth: action.isAuth, token: action.token, error: action.error };
        case LOGOUT: return { isAuth: false, token: "" };
        default: return state;
    };
};