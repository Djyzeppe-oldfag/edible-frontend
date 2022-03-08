import { combineReducers } from "redux";

import localization from "./localization";
import boxes from "./boxes";
import box from "./box";
import worker from "./worker";
import categories from "./categories";
import category from "./category";

const rootReducer = combineReducers({ localization, boxes, box, worker, categories, category });

export default rootReducer;