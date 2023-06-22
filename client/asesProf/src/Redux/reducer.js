import { GET_SERVICES, CREATE_SERVICE } from "./actions-types";

const initialState = {
    allActivities: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SERVICES:
            return {
                ...state,
                allActivities: action.payload,
            }
        case CREATE_SERVICE:
            return {
                ...state,
                allActivities: [...state.allActivities, action.payload]
            }


        default:
            return state;
    }
}

export default rootReducer;