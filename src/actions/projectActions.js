import { CONSTANTS } from "../actions";

export function fetchProjectPending() {
    return {
        type: CONSTANTS.FETCH_PROJECT_PENDING
    }
}

export function loadProjects(){
    return dispatch => {
        dispatch(fetchProjectPending());
        fetch(`http://localhost:1234/project`)
        .then(res => res.json())
        .then(res => {
            console.log("res", res);
            if(res.error) {
                throw(res.error);
            }
            dispatch(getProjects(res));
            return res;
        })
    }
}

export function getProjects(data) {
    return {
        type: CONSTANTS.GET_PROJECTS,
        payload: data
    }
}