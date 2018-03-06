import { CREATE_TODO } from '../actions/todos_action';

const INITIAL_STATE = {
    todos: []
}

export default function todos(state = [], action) {

    switch (action.type) {
        case CREATE_TODO:
            console.log('state', state)
            console.log('todoText', action.todoText)
            return [...state, { id: Math.random(), todoText: action.todoText }]
        default:
            return state;
    }

}