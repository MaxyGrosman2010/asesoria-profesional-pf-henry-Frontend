import { GET_SERVICES, CREATE_SERVICE, GET_SERVICE, GET_SERVICE_NAME, FILTER, ADD_ITEMS } from "./actions-types";
import axios from 'axios'

export const getData = () => {
    return async (dispatch) => {
        const response = (await axios.get());
        return dispatch({type: GET_SERVICES, payload: response.data})
    }
}

export const postData = (payload) => {
    return dispatch => {
        dispatch({type:CREATE_SERVICE, payload})
    }
}

export const getService = (id) => {
    return async (dispatch) => {
        const response = (await axios.get(`http://${id}`))
        return dispatch({type: GET_SERVICE, payload: response.data})
    }
}

export const getServiceName = (name) => {
    return async (dispatch) => {
        const response = (await axios.get(`http://${name}`))
        return dispatch({type: GET_SERVICE_NAME, payload: response.data})
    }
}

export const filter = (service) => {
    return {type:FILTER, payload: service }
}

export const addToCart = (data) => {
    return {type: ADD_ITEMS, payload: data}
}
