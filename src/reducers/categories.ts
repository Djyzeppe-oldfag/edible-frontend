import { CategoriesState } from "../types/store";
import { CategoriesActionTypes } from "../types/actions";
import { LOADING_CATEGORIES, GET_CATEGORIES} from "../actions/types";

const initialState: CategoriesState = { isLoading: false, data: [] };

const categories = (state = initialState, action: CategoriesActionTypes): CategoriesState => {
    switch (action.type) {
        case LOADING_CATEGORIES: return { ...state, isLoading: true };
        case GET_CATEGORIES: return { isLoading: false, data: [...action.data] };
        default: return state;
    };
};

export default categories;