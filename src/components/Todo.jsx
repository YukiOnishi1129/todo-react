import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    // thisをbind
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // 親コンポーネントから渡されたメソッドを自分のメソッド内で実行する
  handleClickDelete() {
    this.props.onRemove(this.props.id);
  }

  render() {
    return (
      <li className="todo">
        <span className="todo-task">{this.props.title}</span>
        <i
          className="far fa-trash-alt delete fa-lg"
          onClick={this.handleClickDelete}
        ></i>
      </li>
    );
  }
}
