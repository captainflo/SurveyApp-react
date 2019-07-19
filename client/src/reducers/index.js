import { combineReducers } from 'redux';
import authReducer from './authReducers';
import { reducer as reduxform } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: reduxform
});