import { CONSTANTS } from ".";
import axios from "axios";

export const postCard = (listID, text) => {
    return (dispatch) => {
        axios.post("http://localhost:1234/lists/create_Card_And_Update_List", { text: text, _id: listID })
        .then((res) => {
            dispatch(addCard(listID, text, res.data.cardID));
        })
    }
}

export const addCard = (listID, text, _id) => {
    console.log("ID", _id)
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID, _id }
    };
};