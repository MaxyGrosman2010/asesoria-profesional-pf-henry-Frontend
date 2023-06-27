import { GET_SERVICES, CREATE_SERVICE, GET_SERVICE, GET_SERVICE_NAME, FILTER, CLEAR_FILTER, ADD_ITEMS, GET_TYPE_SERVICES } from "./actions-types";

const initialState = {
    allActivities: [],
    copyState: [],
    oneActivity: [],
    items: [],
    hoursPerWork: 0,
    typeServices: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_SERVICES:
            return {
                ...state,
                allActivities: action.payload,
                copyState: action.payload,
            }

        case CREATE_SERVICE:
            return {
                ...state,
                allActivities: [...state.allActivities, action.payload],
                copyState: [...state.copyState, action.payload]
            }

        case GET_SERVICE:
            return {
                ...state,
                oneActivity: action.payload,
            }

        case GET_SERVICE_NAME:
            return {
                ...state,
                copyState: action.payload,
            }
        
        case FILTER:
            return {
                ...state,
                copyState: action.payload,
            }

        case CLEAR_FILTER:
            return {
                ...state,
                copyState: [...state.allActivities],
            }

        case ADD_ITEMS:
            return {
                ...state,
                items: [...state.items, ...action.payload]
            }

        case GET_TYPE_SERVICES:
            return {
                ...state,
                typeServices: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;