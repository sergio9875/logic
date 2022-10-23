import { combineReducers } from 'redux';
import users from './userReducer'
import jobReducer from "./jobReducer";

export default combineReducers({
    jobs: jobReducer,
    users: users,

});