import { ADD_TODO } from '../actions/Todos';

const INITIAL_STATE = {
    todoList: {
        todos: [],
        error: null,
        loading: false
    }
};

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: {
                    todos: action.payload,
                    error: null,
                    loading: false
                }
            }
        default:
            state;
    }

}