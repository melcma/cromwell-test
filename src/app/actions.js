import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_CLEAR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_CLEAR
} from './types';

function login(formData) {
    return dispatch => {
        fetch('http://www.adrianpiwowarczyk.com:8016/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body: new URLSearchParams(formData),
        })
        .then(res => {
            if (res.ok && res.status === 200) {
                return dispatch(loginSuccess());
            }

            return dispatch(loginFail());
        })
        .catch(() => {
            return dispatch(loginFail());
        })
    }
}

function register(formData) {
    return dispatch => {
        fetch('http://www.adrianpiwowarczyk.com:8016/api/register', {
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

const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

const loginFail = () => ({
    type: LOGIN_FAIL
})

const loginClear = () => ({
    type: LOGIN_CLEAR
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
    login,
    register,
    loginSuccess,
    loginFail,
    loginClear,
    registerSuccess,
    registerFail,
    registerClear
}