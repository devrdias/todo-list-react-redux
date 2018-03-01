import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Item todo</li>
                </ul>
                <input type='text' />
                <button>New Todo</button>
            </div>
        )
    }
}

export default TodoList;