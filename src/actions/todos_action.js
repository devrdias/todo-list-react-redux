// TODOs actions
// Create todo
export const CREATE_TODO = 'CREATE_TODO';

export function addTodo(props) {
    return {
        type: CREATE_TODO,
        payload: props
    }
}