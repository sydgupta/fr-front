import axios from 'axios';
import { actionTypes } from '../action-types';

export const fetchUsers = () => {
    return async dispatch  => {
        const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

        dispatch({ type: actionTypes.FETCH_USERS , payload: res});
    }
}