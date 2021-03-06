import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../app/store';
import Login from '../../pages/Login';
import LoginForm from '../../components/LoginForm';

it('renders without crashing', () => {
    shallow(
    <Provider store={store}>
        <Router>
            <Login />
        </Router>
    </Provider>);
})

describe('<Login/>', () => {
    it('renders with <LoginForm /> children', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        expect(component.find(LoginForm)).toHaveLength(1);
    })
});