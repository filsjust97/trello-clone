import { combineReducers } from "redux";
import listReducer from "./ListsReducer";

export default combineReducers({
    lists: listReducer
});
