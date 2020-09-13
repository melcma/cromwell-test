import * as actions from './actions';
import * as types from './types';

it('creates authSuccess action', () => {
    const expectedAction = {
        type: types.AUTH_SUCCESS
    }

    expect(actions.authSuccess()).toEqual(expectedAction);
});

it('creates authFail action', () => {
    const expectedAction = {
        type: types.AUTH_FAIL
    }

    expect(actions.authFail()).toEqual(expectedAction);
});

it('creates authClear action', () => {
    const expectedAction = {
        type: types.AUTH_CLEAR
    }

    expect(actions.authClear()).toEqual(expectedAction);
});