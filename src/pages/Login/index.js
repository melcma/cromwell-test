import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header } from 'semantic-ui-react';

import LoginForm from '../../components/LoginForm'
import { authClear, authenticate } from '../../app/actions';

function Login({ authenticate, authStatus, authClear }) {
    function handleLogin(e) {
        const formData = new FormData(e.target);
        
        authenticate(formData);
    }

    function clearForm() {
        authClear();
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

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (data) => dispatch(authenticate(data)),
        authClear: () => dispatch(authClear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);