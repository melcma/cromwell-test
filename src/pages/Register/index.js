import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import RegisterForm from '../../components/RegisterForm'
import { registerClear, register } from '../../app/actions';

function Register({ register, registerStatus, registerClear }) {
    function handleRegister(e) {
        const formData = new FormData(e.target);
        
        register(formData);
    }

    function clearForm() {
        registerClear();
    }

    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>Sign up</Header>
                <RegisterForm onSubmit={handleRegister} onChange={clearForm} registerStatus={registerStatus.alertRegister}>
                    <Link to='/'>
                        <Button type='submit'
                            fluid
                            size='large'
                            style={{ marginTop: '0.5em' }}>
                                Login
                        </Button>
                    </Link>
                </RegisterForm>
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        registerStatus: state.alert
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (data) => dispatch(register(data)),
        registerClear: () => dispatch(registerClear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);