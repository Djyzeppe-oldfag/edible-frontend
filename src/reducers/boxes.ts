import { BoxesState } from "../types/store";
import { BoxesActionTypes } from "../types/actions";
import { LOADING_BOXES, GET_BOXES} from "../actions/types";

const initialState: BoxesState = { isLoading: false, data: [] };

const boxes = (state = initialState, action: BoxesActionTypes): BoxesState => {
    switch (action.type) {
        case LOADING_BOXES: return { ...state, isLoading: true };
        case GET_BOXES: return { isLoading: false, data: [...action.data] };
        default: return state;
    };
};

export default boxes;