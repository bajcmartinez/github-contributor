import { combineReducers } from 'redux';
import issues from './issues';
import filters from './filters';
import repositories from './repositories';

export default combineReducers({
    issues,
    filters,
    repositories
})