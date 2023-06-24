import { GET_SERVICES, CREATE_SERVICE, GET_SERVICE, GET_SERVICE_NAME, FILTER, CLEAR_FILTER, ADD_ITEMS } from "./actions-types";

const initialState = {
    allActivities: [{
      name: 'arnold',
      description: 'asdasdasd',
      price: 100,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'berg',
      description: 'asdasdasd',
      price: 2,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'carlos',
      description: 'asdasdasd',
      price: 70,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'delia',
      description: 'asdasdasd',
      price: 1000,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'ernesto',
      description: 'asdasdasd',
      price: 10,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'frank',
      description: 'asdasdasd',
      price: 105,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'gaston',
      description: 'asdasdasd',
      price: 30,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'hernan',
      description: 'asdasdasd',
      price: 10,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'ignacio',
      description: 'asdasdasd',
      price: 40,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'james',
      description: 'asdasdasd',
      price: 50,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'karen',
      description: 'asdasdasd',
      price: 60,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'leonardo',
      description: 'asdasdasd',
      price: 70,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'm',
      description: 'asdasdasd',
      price: 160,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'noemi',
      description: 'asdasdasd',
      price: 90,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'ñaqui',
      description: 'asdasdasd',
      price: 11,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'osvaldo',
      description: 'asdasdasd',
      price: 12,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'patricio',
      description: 'asdasdasd',
      price: 13,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'queru',
      description: 'asdasdasd',
      price: 14,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'rambo',
      description: 'asdasdasd',
      price: 15,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'santi',
      description: 'asdasdasd',
      price: 10,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'tato',
      description: 'asdasdasd',
      price: 16,
      file: '',
      tipoServ: 'abogado',
    },],
    copyState: [{
      name: 'arnold',
      description: 'asdasdasd',
      price: 100,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'berg',
      description: 'asdasdasd',
      price: 2,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'carlos',
      description: 'asdasdasd',
      price: 70,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'delia',
      description: 'asdasdasd',
      price: 1000,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'ernesto',
      description: 'asdasdasd',
      price: 10,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'frank',
      description: 'asdasdasd',
      price: 105,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'gaston',
      description: 'asdasdasd',
      price: 30,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'hernan',
      description: 'asdasdasd',
      price: 10,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'ignacio',
      description: 'asdasdasd',
      price: 40,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'james',
      description: 'asdasdasd',
      price: 50,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'karen',
      description: 'asdasdasd',
      price: 60,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'leonardo',
      description: 'asdasdasd',
      price: 70,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'm',
      description: 'asdasdasd',
      price: 160,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'noemi',
      description: 'asdasdasd',
      price: 90,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'ñaqui',
      description: 'asdasdasd',
      price: 11,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'osvaldo',
      description: 'asdasdasd',
      price: 12,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'patricio',
      description: 'asdasdasd',
      price: 13,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'queru',
      description: 'asdasdasd',
      price: 14,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'rambo',
      description: 'asdasdasd',
      price: 15,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'santi',
      description: 'asdasdasd',
      price: 10,
      file: '',
      tipoServ: 'abogado',
    }, {
      name: 'tato',
      description: 'asdasdasd',
      price: 16,
      file: '',
      tipoServ: 'abogado',
    },],
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

        default:
            return state;
    }
}

export default rootReducer;