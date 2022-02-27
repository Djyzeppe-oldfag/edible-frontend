import { WorkerState } from "../types/store";
import { WorkerActionTypes } from "../types/actions";
import { LOADING_WORKER, GET_WORKER } from "../actions/types";

const initialState: WorkerState = { isLoading: false, data: null };

const worker = (state = initialState, action: WorkerActionTypes): WorkerState => {
    switch (action.type) {
        case LOADING_WORKER: return { ...state, isLoading: true };
        case GET_WORKER: return { isLoading: false, data: action.data };
        default: return state;
    };
};

export default worker;