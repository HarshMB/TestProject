import { combineReducers } from 'redux';
import LoginRedux from './LoginRedux';
import DashboardRedux from './DashboardRedux';

const reducers = combineReducers({
    LoginRedux,
    DashboardRedux
});

export default reducers;