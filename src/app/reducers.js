import { combineReducers } from 'redux';

function login(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                login: 'success'
            };
        case 'LOGIN_FAIL':
            return {
                ...state,
                login: 'error'
            }
        case 'LOGIN_CLEAR':
            return {
                ...state,
                login: undefined,
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
                alertRegister: 'success'
            };
        case 'REGISTER_FAIL':
            return {
                ...state,
                alertRegister: 'error'
            }
        case 'REGISTER_CLEAR':
            return {
                ...state,
                alertRegister: undefined,
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