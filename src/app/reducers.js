import { combineReducers } from 'redux';

function login(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                status: 'success'
            };
        case 'LOGIN_FAIL':
            return {
                ...state,
                status: 'error'
            }
        case 'LOGIN_CLEAR':
            return {
                ...state,
                status: undefined,
            }
        default:
            return state;
    }
}

function register(state = {}, action) {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                status: 'success'
            };
        case 'REGISTER_FAIL':
            return {
                ...state,
                status: 'error'
            }
        case 'REGISTER_CLEAR':
            return {
                ...state,
                status: undefined,
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    login,
    register
});

export default reducers;