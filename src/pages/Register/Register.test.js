import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../app/store';
import Register from '../../pages/Register';
import RegisterForm from '../../components/RegisterForm';

it('renders without crashing', () => {
    shallow(
    <Provider store={store}>
        <Router>
            <Register />
        </Router>
    </Provider>);
})

describe('<Register/>', () => {
    it('renders with <RegisterForm /> children', () => {
        const component = mount(
            <Provider store={store}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );
        expect(component.find(RegisterForm)).toHaveLength(1);
    })
});