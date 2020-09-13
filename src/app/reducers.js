import { combineReducers } from 'redux';

function alert(state = {}, action) {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                alert: 'success'
            };
        case 'AUTH_FAIL':
            return {
                ...state,
                alert: 'error'
            }
        case 'AUTH_CLEAR':
            return {
                ...state,
                alert: undefined,
            }
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
    alert
});

export default reducers;