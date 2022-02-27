import { AppThunk, AppDispatch } from "../store";
import { LOADING_BOXES, GET_BOXES, LOADING_BOX, GET_BOX } from "./types";
import { getList, get } from "../api/boxes";
import { ApiResponse, BoxMI, BoxFI } from "../types/store";

const getBoxes = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_BOXES });
    getList().then(responce => {
        const result: ApiResponse<BoxMI[]> = responce.data;
        if (result.success) dispatch({ type: GET_BOXES, data: result.data });
    }).catch(e => console.log(e));
};

const getBox = (id: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_BOX });
    get(id).then(responce => {
        const result: ApiResponse<BoxFI> = responce.data;
        if (result.success) dispatch({ type: GET_BOX, data: result.data });
    }).catch(e => console.log(e));
};

export { getBoxes, getBox };