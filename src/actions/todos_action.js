export const CREATE_TODO = 'CREATE_TODO';

export function addTodo(todoText) {
    return {
        type: CREATE_TODO,
        todoText
    }
}