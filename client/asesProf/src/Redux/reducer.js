import { GET_SERVICES, CREATE_SERVICE, GET_SERVICE, GET_SERVICE_NAME, FILTER, CLEAN_FILTER, ADD_ITEMS } from "./actions-types";

const initialState = {
    allActivities: [],
    copyState: [{
        name: 'a',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'b',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'c',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'd',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'e',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'f',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'g',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'h',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'i',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'j',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'k',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'l',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'm',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'n',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'ñ',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'o',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'p',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'q',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 'r',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 's',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      }, {
        name: 't',
        description: 'asdasdasd',
        price: 10,
        file: '',
        tipoServ: 'abogado',
      },  ],
    oneActivity: [],
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

        case CLEAN_FILTER:
            return {
                ...state,
                copyState: [...state.allActivities],
            }

        case ADD_ITEMS:
            return {
                ...state,
                items: [...state.items, ...action.payload]
            }

        default:
            return state;
    }
}

export default rootReducer;