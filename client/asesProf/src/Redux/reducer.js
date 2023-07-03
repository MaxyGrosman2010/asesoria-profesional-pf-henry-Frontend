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
  REGISTER_USER,
  SIGN_IN,
  SIGN_UP,
} from './actions-types';

const initialState = {
  allActivities: [],
  copyState: [],
  oneActivity: [],
  typeServices: [],
  items: [],
  userData: [],
  user: null,
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

    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };

    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
