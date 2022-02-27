import { AppThunk, AppDispatch } from "../store";
import { LOADING_CATEGORIES, GET_CATEGORIES, LOADING_CATEGORY, GET_CATEGORY } from "./types";
import { getList, get } from "../api/categories";
import { ApiResponse, Category } from "../types/store";

const getCategories = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_CATEGORIES });
    getList().then(responce => {
        const result: ApiResponse<Category[]> = responce.data;
        if (result.success) dispatch({ type: GET_CATEGORIES, data: result.data });
    }).catch(e => console.log(e));
};

const getCateogory = (id: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_CATEGORY });
    get(id).then(responce => {
        const result: ApiResponse<Category> = responce.data;
        if (result.success) dispatch({ type: GET_CATEGORY, data: result.data });
    }).catch(e => console.log(e));
};

export { getCategories, getCateogory };