import { combineReducers } from "redux";
import listsReducer from "./ListsReducer";
import projectsReducer from "./ProjectsReducer";

export default combineReducers({
    lists: listsReducer,
    projects: projectsReducer
});
