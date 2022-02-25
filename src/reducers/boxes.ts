import { BoxesState } from "../types/store";
import { BoxesActionTypes } from "../types/actions";
import {LOADING_BOXES, GET_BOXES, OPEN_BOXES} from "../actions/types";

const initialState: BoxesState = {
    isLoading: false,
    data: []
};

export default (state = initialState, action: BoxesActionTypes): BoxesState => {
    switch (action.type) {
        case OPEN_BOXES: return {...state, opened_id: action.opened_id}
        case LOADING_BOXES: return { ...state, isLoading: true };
        case GET_BOXES: return { isLoading: false, data: [...action.data] };
        default: return state;
    };
};