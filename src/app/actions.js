const authSuccess = () => ({
    type: 'AUTH_SUCCESS'
});

const authFail = () => ({
    type: 'AUTH_FAIL'
})

const authClear = () => ({
    type: 'AUTH_CLEAR'
})

export {
    authSuccess,
    authFail,
    authClear,
}