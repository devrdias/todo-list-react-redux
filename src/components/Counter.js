import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Counter = (props) => {
    const { todoList } = props;
    return (
        <div>
            <div>
                {(todoList.items.length > 0)
                    ? <h2> Você tem {todoList.items.length} todos </h2>
                    : <h2> Você ainda não tem nehum todo</h2>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todoList: state.todos.todoList
})


export default connect(mapStateToProps)(Counter);