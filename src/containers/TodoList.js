import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos_action';
import { TodosFilter } from '../actions/filterTodos_action';
import TodoList from '../components/TodoList';

const setTodoList = (todos, filter) => {
    switch (filter) {
        case TodosFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case TodosFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case TodosFilter.SHOW_ALL:
        default:
            return todos;
    }
}

const mapStateToProps = state => ({
    todos: setTodoList(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodoList);
