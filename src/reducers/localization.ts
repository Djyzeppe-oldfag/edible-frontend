import { LocalizationState } from '../types/store';
import { LocalizationActionTypes } from '../types/actions'
import { CHANGE_LOCALIZATION } from '../actions/types';

const initialState: LocalizationState = { data: "rus" };

const localization = (state = initialState, action: LocalizationActionTypes): LocalizationState => {
    switch (action.type) {
        case CHANGE_LOCALIZATION: return { data: action.data };
        default: return state ;
    };
};

export default localization;