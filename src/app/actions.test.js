import * as actions from './actions';
import * as types from './types';

describe('login actions', () => {
    it('creates loginSuccess action', () => {
        const expectedAction = {
            type: types.LOGIN_SUCCESS
        }
    
        expect(actions.loginSuccess()).toEqual(expectedAction);
    });
    
    it('creates loginFail action', () => {
        const expectedAction = {
            type: types.LOGIN_FAIL
        }
    
        expect(actions.loginFail()).toEqual(expectedAction);
    });
    
    it('creates loginClear action', () => {
        const expectedAction = {
            type: types.LOGIN_CLEAR
        }
    
        expect(actions.loginClear()).toEqual(expectedAction);
    });
})

describe('register actions', () => {
    it('creates registerSuccess action', () => {
        const expectedAction = {
            type: types.REGISTER_SUCCESS
        }
    
        expect(actions.registerSuccess()).toEqual(expectedAction);
    });
    
    it('creates registerFail action', () => {
        const expectedAction = {
            type: types.REGISTER_FAIL
        }
    
        expect(actions.registerFail()).toEqual(expectedAction);
    });
    
    it('creates registerClear action', () => {
        const expectedAction = {
            type: types.REGISTER_CLEAR
        }
    
        expect(actions.registerClear()).toEqual(expectedAction);
    });
})