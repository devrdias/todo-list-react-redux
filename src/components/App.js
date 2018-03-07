import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from '../logo.svg';

import * as todoActions from '../actions/todos_action';


class App extends Component {
  constructor(props) {
    super(props)
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
    const { todoList } = this.props;

    return (
      <div className='App'>
        <header className='header'>
          <img src={logo} className='logo' alt='logo' />
          <h1 className='title'>Ract/Redux Todo List</h1>
        </header>
        <div className='container'>
          <ul>
            {todoList.todos.map((todo, index) => (
              <li key={index}>{todo}</li>
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.todos.todoList
});
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);