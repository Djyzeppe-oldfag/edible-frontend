import { BoxState } from "../types/store";
import { BoxActionTypes } from "../types/actions";
import { LOADING_BOX, GET_BOX } from "../actions/types";

const initialState: BoxState = {
    isLoading: false,
    data: []
};

export default (state = initialState, action: BoxActionTypes): BoxState => {
    switch (action.type) {
        case LOADING_BOX: return { ...state, isLoading: true };
        case GET_BOX: return { isLoading: false, data: [...action.data] };
        default: return state;
    };
};