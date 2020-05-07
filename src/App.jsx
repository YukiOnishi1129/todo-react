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

      uniqueId: 2, // todoが初期値で2つあるため、todo追加した際のidの採番を3から開始する
      inputValue: '', // todo追加フォームの入力値(初期値は空文字)
      searchKeyWord: '', //検索キーワード
    };
    // メソッドにthisをbind
    // (関数を入れ子にすると、thisの値が変わってしまう)
    // (アロー関数で記載するならば、constructorでのthisのbindの記載は不要)
    this.handleAdd = this.handleAdd.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // ライフサイクルメソッド

  // componentWillMountは非推奨
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // todo追加処理
  handleAdd(e) {
    // エンターキーが押された際にtodoに追加
    if (e.keyCode === 13) {
      this.setState({
        todos: this.state.todos.concat({
          id: this.state.uniqueId + 1,
          title: e.target.value,
        }),
        // 次にtodo追加する際にidが重複するため、インクリメントする
        uniqueId: this.state.uniqueId + 1,
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

  // todo検索機能
  handleSearch(e) {
    this.setState({
      searchKeyWord: e.target.value,
    });
  }

  // 正規表現にマッチしたtodoのみ返却する
  searchResult(todo) {
    const regexp = new RegExp('^' + this.state.searchKeyWord, 'i');
    return todo.title.match(regexp);
  }

  // todo削除機能
  handleDelete(targetId) {
    const deleteIndex = this.state.todos.findIndex(
      (todo) => todo.id === targetId
    );
    this.state.todos.splice(deleteIndex, 1);
    this.setState({
      todos: this.state.todos,
    });
  }

  render() {
    // SearchTodoコンポーネントから渡された検索キーワードを元に検索して絞り込む
    const todos = this.state.searchKeyWord
      ? this.state.todos.filter(this.searchResult)
      : this.state.todos;
    return (
      <div className="wrapper">
        <h1 className="title">Todo List</h1>
        <AddTodo
          value={this.state.inputValue}
          handleAdd={this.handleAdd}
          onChange={this.onChange}
        />
        <SearchTodo handleSearch={this.handleSearch} />
        <TodoList todos={todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
