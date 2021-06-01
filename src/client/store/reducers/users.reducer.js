import { actionTypes } from '../action-types';

const initialState = {
    users: [],
    isLoading: false,
    errors: null
}

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}