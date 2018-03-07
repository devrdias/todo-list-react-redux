import { CREATE_TODO } from '../actions/todos_action';

const INITIAL_STATE = {
    todoList: { todos: [], error: null, loading: false }
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_TODO:
            return {
                ...state, todoList: {
                    todos: [...state.todoList.todos, action.payload],
                    loading: true,
                    error: false
                }
            }
        default:
            return state;
    }
}