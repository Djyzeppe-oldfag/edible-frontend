import { AppThunk, AppDispatch } from "../store";
import { LOADING_WORKER, GET_WORKER } from "./types";
import { get } from "../api/worker";
import { ApiResponse, Worker } from "../types/store";

const getWorker = (id: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_WORKER });
    get(id).then(responce => {
        const result: ApiResponse<Worker> = responce.data;
        if (result.success) dispatch({ type: GET_WORKER, data: result.data });
    }).catch(e => console.log(e));
};

export { getWorker };