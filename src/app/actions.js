import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_CLEAR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_CLEAR
} from './types';

function authenticate(formData) {
    return dispatch => {
        fetch('http://localhost:8015/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body: new URLSearchParams(formData),
        })
        .then(res => {
            if (res.ok && res.status === 200) {
                return dispatch(authSuccess());
            }

            return dispatch(authFail());
        })
        .catch(() => {
            return dispatch(authFail());
        })
    }
}

function register(formData) {
    return dispatch => {
        fetch('http://localhost:8015/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body: new URLSearchParams(formData),
        })
        .then(res => {
            if (res.ok && res.status === 200) {
                return dispatch(registerSuccess());
            }

            return dispatch(registerFail());
        })
        .catch(() => {
            return dispatch(registerFail());
        })
    }
}

const authSuccess = () => ({
    type: AUTH_SUCCESS
});

const authFail = () => ({
    type: AUTH_FAIL
})

const authClear = () => ({
    type: AUTH_CLEAR
})

const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});

const registerFail = () => ({
    type: REGISTER_FAIL
})

const registerClear = () => ({
    type: REGISTER_CLEAR
})

export {
    authenticate,
    register,
    authSuccess,
    authFail,
    authClear,
    registerSuccess,
    registerFail,
    registerClear
}