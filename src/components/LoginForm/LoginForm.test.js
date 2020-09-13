import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import store from '../../app/store';
import LoginForm, { displayMessage } from '.';

describe('<LoginForm/>', () => {
    it('renders with error message if authStatus is an error', () => {
        const component = mount(<Provider store={store}><LoginForm authStatus='error' /></Provider>);
    
        expect(component.find('form.error .message.error')).toHaveLength(1);
        expect(component.find('form.success .message.success')).toHaveLength(0);
    })
    
    it('renders with success message if authStatus is a success', () => {
        const component = mount(<Provider store={store}><LoginForm authStatus='success' /></Provider>);
    
        expect(component.find('form.success .message.success')).toHaveLength(1);
        expect(component.find('form.error .message.error')).toHaveLength(0);
    })
})

describe('LoginForm helper functions', () => {
    it('function displayMessage returns success object', () => {
        const result = displayMessage('success');
    
        expect(result).toStrictEqual({ success: true });
    })
    
    it('function displayMessage returns error object', () => {
        const result = displayMessage('error');
    
        expect(result).toStrictEqual({ error: true });
    })
})