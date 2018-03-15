import React from 'react';
import logo from '../logo.svg';
import Counter from '../containers/Counter';
import AddTodo from '../containers/AddTodo';
import Footer from './Footer';
import TodoList from '../containers/TodoList';

const App = () => (
  <div className='App'>
    <header className='header'>
      <img src={logo} className='logo' alt='logo' />
      <h1 className='title'>Ract/Redux Todo List</h1>
    </header>
    <div className='container'>
      <AddTodo />
      <TodoList />
      <Footer />
      <Counter />
    </div>
  </div >
)

export default App;