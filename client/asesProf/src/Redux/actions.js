import { GET_SERVICES, CREATE_SERVICE, GET_SERVICE, GET_SERVICE_NAME, FILTER, ADD_ITEMS, CLEAR_FILTER, GET_TYPE_SERVICES } from "./actions-types";
import axios from 'axios'

export const getData = () => {
    return async (dispatch) => {
        const response = (await axios.get('http://localhost:3001/service'));
        return dispatch({type: GET_SERVICES, payload: response.data})
    }
}

export const postData = (payload) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3001/allService', payload)
        return dispatch({type:CREATE_SERVICE, payload: response.data})
    }
}

export const getService = (id) => {
    return async (dispatch) => {
        const response = (await axios.get(`http://localhost:3001/serviceById/${id}`))
        return dispatch({type: GET_SERVICE, payload: response.data})
    }
}

export const getServiceName = (name) => {
    return async (dispatch) => {
        const response = (await axios.get(`http://localhost:3001/nameService/?name=${name}`))
        return dispatch({type: GET_SERVICE_NAME, payload: response.data})
    }
}

export const getTypeServices = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/allTypeService/')
        return dispatch({type: GET_TYPE_SERVICES, payload: response.data})
    }
}

export const filter = (service) => {
    return {type:FILTER, payload: service }
}

export const addToCart = (data) => {
    return {type: ADD_ITEMS, payload: data}
}

export const clearFilters = (data) =>{
    return {type : CLEAR_FILTER, payload:data}
}
