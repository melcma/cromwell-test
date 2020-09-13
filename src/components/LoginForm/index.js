import React from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react';

function LoginForm({ authStatus, children, onChange, onSubmit }) {
    function displayMessage() {
        if (authStatus === 'success') {
            return { success: true }
        };

        if (authStatus === 'error') {
            return { error: true };
        }
    };

    return (
        <Form size='large' onSubmit={onSubmit} onChange={onChange} {...(displayMessage())}>
            <Segment stacked>
                <Form.Field>
                    <Form.Input
                    fluid icon='user'
                    iconPosition='left'
                    name='username'
                    placeholder='Username'
                    required
                    type='text' />
                </Form.Field>
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    name='password'
                    placeholder='Password'
                    required
                    type='password'
                />
                <Button type='submit' color='blue' fluid size='large'>Login</Button>
                { children }
                <Message
                    success
                    header='Authentication successful'
                    content='You are logged in'
                />
                <Message
                    error
                    header='Authentication failed'
                    content='Login details are incorrect'
                />
            </Segment>
        </Form>
    )
}

export default LoginForm;