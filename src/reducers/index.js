import { combineReducers } from 'redux';

import TodosReducer from './todos_reducer';

export default combineReducers({
    todos: TodosReducer
});