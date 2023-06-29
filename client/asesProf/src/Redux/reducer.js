import { 
    GET_SERVICES,
    CREATE_SERVICE, 
    GET_SERVICE, 
    GET_SERVICE_NAME, 
    FILTER, 
    CLEAR_FILTER, 
    ADD_ITEMS, 
    GET_TYPE_SERVICES, 
    DEL_ONE_SERVICE,
    DEL_ALL
} from "./actions-types";

const initialState = {
    allActivities: [],
    copyState: [],
    oneActivity: [],
    typeServices: [],
    items: [],
    hoursPerWork: 0,
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
                items: [...state.items, action.payload]
            }

        case GET_TYPE_SERVICES:
            return {
                ...state,
                typeServices: action.payload
            }
        
        case DEL_ONE_SERVICE:
            const updateItems = state.items.filter((item) => item.id !== action.payload)
            return {
                ...state,
                items: updateItems,
            }
        
        case DEL_ALL:
            return {
                ...state,
                items: [],
            }

        default:
            return state;
    }
}

export default rootReducer;