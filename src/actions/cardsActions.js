import { CONSTANTS } from ".";
import axios from "axios";

export const postCard = (listID, text) => {
    return (dispatch) => {
        console.log("Entra no Dispatch", listID);
        axios.post("http://localhost:1234/lists/create_Card_And_Update_List", { text: text, _id: listID })
        .then((res) => {
            console.log("res", res);
            dispatch(addCard(listID, text, res.data.cardID));
        })
    }

    /* return dispatch => {
        fetch("http://localhost:1234/cards/create", {
            method: 'post',
            body: {'text': text}
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            console.log(res);
            dispatch(addCard(listID, text));
            return res;
        })
    } */
    //dispatch(addCard(listID, text));
}

export const addCard = (listID, text, _id) => {
    console.log("ID", _id)
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID, _id }
    };
};