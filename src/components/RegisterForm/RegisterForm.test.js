import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import store from '../../app/store';
import RegisterForm, { displayMessage } from '.';

describe('<RegisterForm/>', () => {
    it('renders with error message if registerStatus is an error', () => {
        const component = mount(<Provider store={store}><RegisterForm registerStatus='error' /></Provider>);
    
        expect(component.find('form.error .message.error')).toHaveLength(1);
        expect(component.find('form.success .message.success')).toHaveLength(0);
    })
    
    it('renders with success message if registerStatus is a success', () => {
        const component = mount(<Provider store={store}><RegisterForm registerStatus='success' /></Provider>);
    
        expect(component.find('form.success .message.success')).toHaveLength(1);
        expect(component.find('form.error .message.error')).toHaveLength(0);
    })
})

describe('RegisterForm helper functions', () => {
    it('function displayMessage returns success object', () => {
        const result = displayMessage('success');
    
        expect(result).toStrictEqual({ success: true });
    })
    
    it('function displayMessage returns error object', () => {
        const result = displayMessage('error');
    
        expect(result).toStrictEqual({ error: true });
    })
})