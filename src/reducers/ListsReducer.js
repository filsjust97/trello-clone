import { CONSTANTS } from "../actions";

const initialState = {
    pending: false,
    list: []
}
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.FETCH_LISTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload.title,
                cards: [],
                _id: action.payload._id
            }
            return { pending: false, list: [...state.list, newList] };

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                _id: action.payload._id
            }
            const newState = state.list.map(list => {
                if (list._id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            return { pending: false, list: newState };

        case CONSTANTS.GET_LIST:
            return { pending: false, list: action.payload };

        default:
            return state;
    }
}
/* export const getListRed = state => state.list;
export const getListPending = state => state.pending; */

export default listsReducer;