import { AppThunk, AppDispatch } from "../store";
import { CHANGE_LOCALIZATION } from "./types";

const changeLanguage = (language: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: CHANGE_LOCALIZATION, data: language });
};

export { changeLanguage };