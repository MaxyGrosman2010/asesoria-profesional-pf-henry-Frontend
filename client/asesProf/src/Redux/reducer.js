import { GET_USER, CREATE_SERVICE } from "./actions-types";

const initialState = {
    allUsers: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                allUsers: action.payload,
            }
        case CREATE_SERVICE:
            return {
                ...state,
                allUsers: [...state.allUsers, action.payload]
            }


        default:
            return state;
    }
}

export default rootReducer;