import { combineReducers } from "redux";

import auth from "./auth";
import boxes from "./boxes";
import box from "./box";
import profile from "./profile";

const rootReducer = combineReducers({
    auth,
    boxes,
    box,
    profile
});

export default rootReducer;