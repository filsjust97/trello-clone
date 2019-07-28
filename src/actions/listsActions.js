import { CONSTANTS } from "../actions";
import axios from "axios";

export const postList = (title) => {
    return (dispatch) => {
        axios.post("http://localhost:1234/lists/create", { title: title, cards: [] })
        .then((res) => {
            dispatch(addList(res.data));
        })
    }
}

export const addList = (data) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: data
    };
};

export function fetchListsPending() {
    return {
        type: CONSTANTS.FETCH_LISTS_PENDING
    }
}

export function loadLists(id){
    return dispatch => {
        dispatch(fetchListsPending());
        fetch(`http://localhost:1234/lists/fetch_lists_from_project/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(res.error) {
                throw(res.error);
            }
            dispatch(getList(res));
            return res;
        })
    }
}

export function getList(data) {
    return {
        type: CONSTANTS.GET_LIST,
        payload: data
    }
}
