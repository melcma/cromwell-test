import { AUTH_SUCCESS, AUTH_FAIL, AUTH_CLEAR } from './types';

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

const authSuccess = () => ({
    type: AUTH_SUCCESS
});

const authFail = () => ({
    type: AUTH_FAIL
})

const authClear = () => ({
    type: AUTH_CLEAR
})

export {
    authSuccess,
    authFail,
    authClear,
    authenticate,
}