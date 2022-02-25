import { AppThunk, AppDispatch } from "../store";
import {LOADING_BOXES, GET_BOXES, LOADING_BOX, GET_BOX, OPEN_BOXES} from "./types";
import { getCasesByCategories, getCaseContent, open } from "../api/boxes";
import { ApiResponse, Group, WObject } from "../types/store";

const getList = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_BOXES });
    getCasesByCategories().then(responce => {
        const result: ApiResponse<Group[]> = responce.data;
        if (result.success) dispatch({ type: GET_BOXES, data: result.data });
    }).catch(e => console.log(e));
};

const get = (id: number): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_BOX });
    getCaseContent(id).then(responce => {
        const result: ApiResponse<WObject[]> = responce.data;
        if (result.success) dispatch({ type: GET_BOX, data: result.data });
    }).catch(e => console.log(e));
};

const openCase = (id: number): AppThunk => (dispatch: AppDispatch) => {
    open(id).then(responce => {
        const result: ApiResponse<any> = responce.data;
        if (result.success) dispatch({type: OPEN_BOXES, opened_id: result.data.bit_id})
    }).catch(e => console.log(e));
};

export { getList, get, openCase };