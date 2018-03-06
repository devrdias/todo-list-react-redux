import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../actions/todos_action';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props)
    console.warn('props ', props)
  }

  state = {
    todo: ''
  }

  addNewTodo = () => {
    const newTodo = this.state.todo;
    this.props.addTodo(newTodo);
    this.setState({
      todo: ''
    });
  };

  render() {
    const { todo } = this.state;
    const { todos } = this.props;

    return (
      <div className='App'>
        <header className='header'>
          <img src={'./logo'} className='logo' alt='logo' />
          <h1 className='title'>Todo List</h1>
        </header>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.todoText}</li>
          ))}
        </ul>
        <input
          type='text'
          value={this.state.todo}
          onChange={(e) => this.setState({ todo: e.target.value })}
        />
        <div>
          <button onClick={this.addNewTodo}>New Todo</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);