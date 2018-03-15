import { combineReducers } from 'redux';

import TodosReducer from './todos_reducer';
import FilterTodosReducer from './filterTodos_reducer';

export default combineReducers({
    filter: FilterTodosReducer,
    todos: TodosReducer
});