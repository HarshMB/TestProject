import { combineReducers } from 'redux';

const INITIAL_STATE = {
    "username": "hruday@gmail.com",
    "password": 'hruday123'
};

const LoginRedux = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default combineReducers({
    loginData: LoginRedux
});