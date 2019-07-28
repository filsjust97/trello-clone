import { CONSTANTS } from "../actions";

const initialState = {
    pending: false,
    project: []
}
const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.FETCH_PROJECT_PENDING:
            return {
                ...state,
                pending: true
            }

        case CONSTANTS.GET_PROJECTS:
            console.log(action.payload);
            return { pending: false, project: action.payload };

        default:
            return state;
    }
}

export default projectReducer;