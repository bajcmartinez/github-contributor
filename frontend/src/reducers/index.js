import { combineReducers } from 'redux';
import issues from './issues';
import filters from './filters';

export default combineReducers({
    issues,
    filters
})