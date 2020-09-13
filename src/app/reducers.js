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
        default:
            return state;
    }
}

const reducers = combineReducers({
    alert
});

export default reducers;