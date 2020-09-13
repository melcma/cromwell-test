import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header } from 'semantic-ui-react';

import LoginForm from '../../components/LoginForm'
import { authSuccess, authFail, authClear } from '../../app/actions';

function Login({ dispatch, authStatus }) {
    function handleLogin(e) {
        const formData = new FormData(e.target);

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

    function clearForm() {
        dispatch(authClear());
    }

    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>Log in</Header>
                <LoginForm onSubmit={handleLogin} onChange={clearForm} authStatus={authStatus.alert}>
                    <Button type='submit'
                        fluid
                        size='large'
                        style={{ marginTop: '0.5em' }}>
                            Register
                    </Button>
                </LoginForm>
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        authStatus: state.alert
    }
}

export default connect(mapStateToProps)(Login);