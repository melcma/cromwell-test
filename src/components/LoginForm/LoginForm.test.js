import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import store from '../../app/store';
import LoginForm from '.';

it('renders without crashing', () => {
    shallow(<Provider store={store}><LoginForm /></Provider>);
})