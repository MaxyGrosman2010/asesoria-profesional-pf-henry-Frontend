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
  PERSONAL_USER_DATA,
  EDIT_USER,
  REFRESH_USER
} from './actions-types';

const initialState = {
  allActivities: [],
  copyState: [],
  oneActivity: [],
  typeServices: [],
  items: [],
  userData: {},
  isPaymentInitiated: false,
  paymentResult: null,
  isAdmin: false,
};


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
        userData: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        userData: {},
      };
    case CLEAN_USER:
      return {
        ...state,
        userData: {},
      };

    case PERSONAL_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };

      case EDIT_USER:
        return {
          ...state,
          userData: action.payload
        };

        case REFRESH_USER:
          return {
            ...state,
            userData: action.payload
          }

    default:
      return state;
  }
};

export default rootReducer;
