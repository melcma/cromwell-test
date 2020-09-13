import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import store from '../../app/store';
import Login from '../../pages/Login';

it('renders without crashing', () => {
    shallow(<Provider store={store}><Login /></Provider>);
})