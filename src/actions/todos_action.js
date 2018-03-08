// TODOs actions
// =============


// Create todo
export const CREATE_TODO = 'CREATE_TODO';
// Toggle todo
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = text => {
    return {
        type: CREATE_TODO,
        payload: text
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}