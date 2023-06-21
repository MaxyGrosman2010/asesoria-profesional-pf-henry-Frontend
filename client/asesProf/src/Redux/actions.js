import { GET_USER, CREATE_SERVICE } from "./actions-types";
import axios from 'axios'

export const getData = () => {
    return async (dispatch) => {
        const response = (await axios.get());
        return dispatch({type: GET_USER, payload: response.data})
    }
}

export const postData = (payload) => {
    return dispatch => {
        dispatch({type:CREATE_SERVICE, payload})
    }
}

