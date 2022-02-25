import {
    LOGIN, LOGOUT,
    LOADING_BOXES, GET_BOXES,
    LOADING_BOX, GET_BOX,
    LOADING_PROFILE, GET_PROFILE, OPEN_BOXES
} from "../actions/types";
import { Group, WObject, Person } from "./store";

//auth
interface LoginAction {
    isAuth: boolean;
    type: typeof LOGIN,
    token: string,
    error?: string
};

interface LogoutAction {
    type: typeof LOGOUT
};

export type AuthActionTypes = LoginAction | LogoutAction;

//boxes
interface OpeningBoxesAction {
    type: typeof OPEN_BOXES,
    opened_id: number
}

interface LoadingBoxesAction {
    type: typeof LOADING_BOXES
};

interface GetBoxesAction {
    type: typeof GET_BOXES,
    data: Group[]
};
export type BoxesActionTypes = LoadingBoxesAction | GetBoxesAction | OpeningBoxesAction;

//box
interface LoadingBoxAction {
    type: typeof LOADING_BOX
};

interface GetBoxAction {
    type: typeof GET_BOX,
    data: WObject[]
};
export type BoxActionTypes = LoadingBoxAction | GetBoxAction;

//profile
interface LoadingProfileAction {
    type: typeof LOADING_PROFILE;
};

interface GetProfileAction {
    type: typeof GET_PROFILE;
    data: Person | null
};
export type ProfileActionTypes = LoadingProfileAction | GetProfileAction;