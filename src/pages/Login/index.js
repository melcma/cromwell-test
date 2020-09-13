import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/LoginForm'
import { loginClear, login } from '../../app/actions';

function Login({ login, loginStatus, loginClear }) {
    function handleLogin(e) {
        const formData = new FormData(e.target);
        
        login(formData);
    }

    function clearForm() {
        loginClear();
    }

    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>Log in</Header>
                <LoginForm onSubmit={handleLogin} onChange={clearForm} status={loginStatus.status}>
                    <Link to='/register'>
                        <Button type='submit'
                            fluid
                            size='large'
                            style={{ marginTop: '0.5em' }}>
                                Sign up
                        </Button>
                    </Link>
                </LoginForm>
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        loginStatus: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data)),
        loginClear: () => dispatch(loginClear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);