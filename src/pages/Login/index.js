import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

function Login() {
    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>Log in</Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Field>
                            <Form.Input
                            fluid icon='user'
                            iconPosition='left'
                            placeholder='Username'
                            type='text' />
                        </Form.Field>
                        <Form.Input
                            icon='lock'
                            type='password'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Button type='submit' color='blue' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Login;