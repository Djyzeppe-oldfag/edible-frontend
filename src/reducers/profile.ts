import { ProfileState } from "../types/store";
import { ProfileActionTypes } from "../types/actions";
import { LOADING_PROFILE, GET_PROFILE } from "../actions/types";

const initialState: ProfileState = {
    isLoading: false,
    data: null
};

export default (state = initialState, action: ProfileActionTypes): ProfileState => {
    switch (action.type) {
        case LOADING_PROFILE: return { ...state, isLoading: true };
        case GET_PROFILE: return { isLoading: false, data: action.data };
        default: return state;
    };
};