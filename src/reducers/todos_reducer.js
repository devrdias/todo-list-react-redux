import {
    CREATE_TODO, TOGGLE_TODO, CLEAR_TODOS
} from '../actions/todos_action';

const INITIAL_STATE = [];

const todos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return [
                ...state,
                {
                    id: Math.random(),
                    text: action.payload,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )

        case CLEAR_TODOS:
            return INITIAL_STATE;

        default:
            return state;
    }
}

export default todos;