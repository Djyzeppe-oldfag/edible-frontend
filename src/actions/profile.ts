import { AppThunk, AppDispatch } from "../store";
import { LOADING_PROFILE, GET_PROFILE } from "./types";
import { profile, changePhoto, changeName } from "../api/profile";
import { ApiResponse, Person } from "../types/store";

const getProfile = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_PROFILE });
    profile().then(responce => {
        const result: ApiResponse<Person> = responce.data;
        if (result.success) dispatch({ type: GET_PROFILE, data: result.data });
    }).catch(e => console.log(e));
};

const changeProfilePhoto = (file: File): AppThunk => (dispatch: AppDispatch) => {
    changePhoto(file).then(responce => {
        const result: ApiResponse<any> = responce.data;
        if (result.success) console.log(result.data);
    }).catch(e => console.log(e));
};

const changeProfileName = (name: string): AppThunk => (dispatch: AppDispatch) => {
    changeName(name).then(responce => {
        const result: ApiResponse<any> = responce.data;
        if (result.success) console.log(result.data);
    }).catch(e => console.log(e));
};

export { getProfile, changeProfilePhoto, changeProfileName };