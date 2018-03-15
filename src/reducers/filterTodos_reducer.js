import { SET_TODOS_FILTER, TodosFilter } from '../actions/filterTodos_action';

const INITIAL_STATE = TodosFilter.SHOW_ALL;

const filter = (state = INITIAL_STATE, action) => {
    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case SET_TODOS_FILTER:
            return action.filter

        default:
            return state;
    }
}

export default filter;