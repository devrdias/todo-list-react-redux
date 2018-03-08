import { CREATE_TODO, TOGGLE_TODO, CLEAR_TODOS } from '../actions/todos_action';

const INITIAL_STATE = {
    todoList: { items: [], error: null, loading: false }
}

const todos = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CREATE_TODO:
            return {
                ...state,
                todoList: {
                    items: [...state.todoList.items,
                    {
                        id: Math.random(),
                        text: action.payload,
                        completed: false
                    }],
                    loading: true,
                    error: false
                }
            }
        case TOGGLE_TODO:
            const { id } = action.payload;
            const toggleItems = state.todoList.items.map(item => {
                return (item.id === id)
                    ? { ...item, completed: !item.completed }
                    : item
            });

            return {
                ...state,
                todoList: {
                    items: toggleItems,
                    error: null,
                    loading: false
                }
            };

        case CLEAR_TODOS:
            return INITIAL_STATE;

        default:
            return state;
    }
}

export default todos;