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
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAN_USER,
  SIGN_IN,
  SIGN_UP,
} from './actions-types';

const initialState = {
<<<<<<< HEAD:client/asesProf/src/Redux/reducer.js
  allActivities: [],
  copyState: [],
  oneActivity: [],
  typeServices: [],
  items: [],
  userData: [],
  isPaymentInitiated: false,
  paymentResult: null,
  users: [
    { id: 1, name: 'carlos', email: 'karl@mail.com', services: 5 },
    { id: 2, name: 'pedro', email: 'car@mail.com', services: 10 },
    { id: 3, name: 'ricarda', email: 'cont@mail.com', services: 1 },
    { id: 4, name: 'antonia', email: 'pin@mail.com', services: 2 },
    { id: 5, name: 'adrian', email: 'abog@mail.com', services: 3 },
  ],
  isAdmin: false,
};
=======
    allActivities: [],
    copyState: [],
    oneActivity: [],
    typeServices: [],
    items: [],
    userData: [],
    isPaymentInitiated: false,
    paymentResult: null,
    users: [{id:1, name:'Camionero', email: 'karl@mail.com', services: 5},
    {id:2, name:'Carpintero', email: 'car@mail.com', services: 10},
    {id:3, name:'Contador', email: 'cont@mail.com', services: 1},
    {id:4, name:'Pintor', email: 'pin@mail.com', services: 2},
    {id:5, name:'Abogado', email: 'abog@mail.com', services: 3},],
    isAdmin: false,
}

>>>>>>> develop:client/src/Redux/reducer.js

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        allActivities: action.payload,
        copyState: action.payload,
      };

    case CREATE_SERVICE:
      return {
        ...state,
        allActivities: [...state.allActivities, action.payload],
        copyState: [...state.copyState, action.payload],
      };

    case GET_SERVICE:
      return {
        ...state,
        oneActivity: action.payload,
      };

    case GET_SERVICE_NAME:
      return {
        ...state,
        copyState: action.payload,
      };

    case FILTER:
      return {
        ...state,
        copyState: action.payload,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        copyState: [...state.allActivities],
      };

    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case GET_TYPE_SERVICES:
      return {
        ...state,
        typeServices: action.payload,
      };

    case DEL_ONE_SERVICE:
      const updateItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: updateItems,
      };

    case DEL_ALL:
      return {
        ...state,
        items: [],
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: [
          {
            User_id: action.payload.User_id,
            idGoogle: action.payload.idGoogle,
            name: action.payload.name,
            email: action.payload.email,
            profilePict: action.payload.profilePict,
          },
        ],
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        userData: [],
        errror: action.payload,
      };
    case CLEAN_USER:
      return {
        ...state,
        userData: [],
      };

    default:
      return state;
  }
};

export default rootReducer;
