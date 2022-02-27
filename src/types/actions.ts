import {
    LOADING_BOXES, GET_BOXES,
    LOADING_BOX, GET_BOX,
    LOADING_WORKER, GET_WORKER,
    LOADING_CATEGORIES, GET_CATEGORIES,
    LOADING_CATEGORY, GET_CATEGORY
} from "../actions/types";
import { BoxMI, BoxFI, Worker, Category } from "./store";

//boxes
interface LoadingBoxesAction {
    type: typeof LOADING_BOXES
};

interface GetBoxesAction {
    type: typeof GET_BOXES,
    data: BoxMI[]
};
export type BoxesActionTypes = LoadingBoxesAction | GetBoxesAction;

//box
interface LoadingBoxAction {
    type: typeof LOADING_BOX
};

interface GetBoxAction {
    type: typeof GET_BOX,
    data: BoxFI
};
export type BoxActionTypes = LoadingBoxAction | GetBoxAction;

//worker
interface LoadingWorkerAction {
    type: typeof LOADING_WORKER
};

interface GetWorkerAction {
    type: typeof GET_WORKER,
    data: Worker
};
export type WorkerActionTypes = LoadingWorkerAction | GetWorkerAction;

//categories
interface LoadingCategoriesAction {
    type: typeof LOADING_CATEGORIES
};

interface GetCategoriesAction {
    type: typeof GET_CATEGORIES,
    data: Category[]
};
export type CategoriesActionTypes = LoadingCategoriesAction | GetCategoriesAction; 

//category
interface LoadingCategoryAction {
    type: typeof LOADING_CATEGORY
};

interface GetCategoryAction {
    type: typeof GET_CATEGORY,
    data: Category
};
export type CategoryActionsTypes = LoadingCategoryAction | GetCategoryAction; 