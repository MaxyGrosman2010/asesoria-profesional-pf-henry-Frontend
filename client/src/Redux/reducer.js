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
    DEL_ALL,
    PAYMENT_MP,
    INITIATE_PAYMENT,
} from "./actions-types";

const initialState = {
    allActivities: [],
    copyState: [],
    oneActivity: [],
    typeServices: [],
    items: [],
    isPaymentInitiated: false,
    paymentResult: null,
    users: [{id:1, name:'Camionero', email: 'karl@mail.com', services: 5},
    {id:2, name:'Carpintero', email: 'car@mail.com', services: 10},
    {id:3, name:'Contador', email: 'cont@mail.com', services: 1},
    {id:4, name:'Pintor', email: 'pin@mail.com', services: 2},
    {id:5, name:'Abogado', email: 'abog@mail.com', services: 3},],
    isAdmin: false,
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
        
        case INITIATE_PAYMENT:
            return {
                ...state,
                isPaymentInitiated: true,
            }
        
        case PAYMENT_MP:
            return {
                ...state,
                isPaymentInitiated: false,
                paymentResult: action.payload,
            }

        default:
            return state;
    }
}

export default rootReducer;