import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import TodoList from './components/TodoList';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Task1',
          done: false,
        },
        {
          id: 2,
          title: 'Task2',
          done: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Todo List</h1>
        <AddTodo />
        <SearchTodo />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
