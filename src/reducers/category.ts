import { CategoryState } from "../types/store";
import { CategoryActionsTypes } from "../types/actions";
import { LOADING_CATEGORY, GET_CATEGORY } from "../actions/types";

const initialState: CategoryState = { isLoading: false, data: null };

const worker = (state = initialState, action: CategoryActionsTypes): CategoryState => {
    switch (action.type) {
        case LOADING_CATEGORY: return { ...state, isLoading: true };
        case GET_CATEGORY: return { isLoading: false, data: action.data };
        default: return state;
    };
};

export default worker;