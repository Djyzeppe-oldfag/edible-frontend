import { combineReducers } from "redux";

import boxes from "./boxes";
import box from "./box";
import worker from "./worker";
import categories from "./categories";
import category from "./category";

const rootReducer = combineReducers({ boxes, box, worker, categories, category });

export default rootReducer;