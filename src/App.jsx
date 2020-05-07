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
        },
        {
          id: 2,
          title: 'Task2',
        },
      ],
      inputValue: '',
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // todo追加処理
  handleAdd(e) {
    // エンターキーが押された際にtodoに追加
    if (e.keyCode === 13) {
      this.setState({
        todos: this.state.todos.concat({
          id: this.state.todos.length + 1,
          title: e.target.value,
        }),
      });
      // todo追加後、フォームの値をリセットする
      this.setState({ inputValue: '' });
    }
  }

  // todo追加フォームの値を表示するため、inputValueを更新する
  onChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Todo List</h1>
        <AddTodo
          value={this.state.inputValue}
          handleAdd={this.handleAdd}
          onChange={this.onChange}
        />
        <SearchTodo />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
