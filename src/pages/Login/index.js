import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import LoginForm from '../../components/LoginForm'

function Login() {
    function handleLogin(e) {
        const formData = new FormData(e.target);

        fetch('http://localhost:8015/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body: new URLSearchParams(formData),
        })
    }

    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>Log in</Header>
                <LoginForm>
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

export default Login;