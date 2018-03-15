// Filter todos
export const SET_TODOS_FILTER = 'SET_TODOS_FILTER';

// Define filter constants
export const TodosFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const filterTodos = filter => {
    return {
        type: SET_TODOS_FILTER,
        filter
    }
}